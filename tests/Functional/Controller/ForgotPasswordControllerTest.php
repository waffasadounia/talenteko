<?php

declare(strict_types=1);

namespace App\Tests\Functional\Controller;

use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

final class ForgotPasswordControllerTest extends WebTestCase
{
    private EntityManagerInterface $em;
    private UserPasswordHasherInterface $hasher;

    protected function setUp(): void
    {
        self::ensureKernelShutdown();
        $client = static::createClient();

        $this->em = static::getContainer()->get(EntityManagerInterface::class);
        $this->hasher = static::getContainer()->get(UserPasswordHasherInterface::class);

        // Nettoyage DB
        $this->em->createQuery('DELETE FROM App\Entity\User u')->execute();

        // Création d’un utilisateur test
        $user = new User();
        $user->setEmail('demo@talenteko.test');
        $user->setPseudo('DemoUser');
        $user->setTag('1234');
        $user->setLocation('Paris');
        $user->setPassword($this->hasher->hashPassword($user, 'Test1234!'));

        $this->em->persist($user);
        $this->em->flush();
    }

    public function testForgotPasswordPageLoads(): void
    {
        $client = static::createClient();
        $client->request('GET', '/reset-password/request');

        $this->assertResponseIsSuccessful();
        $this->assertSelectorExists('form'); // Vérifie qu’un form est présent
    }

    public function testRequestWithExistingEmailSendsFeedback(): void
    {
        $client = static::createClient();
        $crawler = $client->request('POST', '/reset-password/request', [
            'email' => 'demo@talenteko.test',
        ]);

        $this->assertResponseRedirects('/login');
        $client->followRedirect();
        $this->assertSelectorExists('.flash-success, .flash-info');
    }

    public function testRequestWithUnknownEmailStillSendsFeedback(): void
    {
        $client = static::createClient();
        $client->request('POST', '/reset-password/request', [
            'email' => 'unknown@test.com',
        ]);

        $this->assertResponseRedirects('/login');
        $client->followRedirect();
        $this->assertSelectorExists('.flash-success, .flash-info');
    }

    public function testResetWithInvalidTokenFails(): void
    {
        $client = static::createClient();
        $client->request('GET', '/reset-password/invalidtoken');

        $this->assertResponseRedirects('/reset-password/request');
        $client->followRedirect();
        $this->assertSelectorExists('.flash-error');
    }

    public function testResetWithExpiredTokenFails(): void
    {
        $user = $this->em->getRepository(User::class)->findOneBy(['email' => 'demo@talenteko.test']);
        $user->setResetToken('expiredtoken');
        $user->setResetRequestedAt((new \DateTimeImmutable())->modify('-2 hours'));
        $this->em->flush();

        $client = static::createClient();
        $client->request('GET', '/reset-password/expiredtoken');

        $this->assertResponseRedirects('/reset-password/request');
        $client->followRedirect();
        $this->assertSelectorExists('.flash-error');
    }

    public function testResetWithValidTokenAndValidPasswordWorks(): void
    {
        $user = $this->em->getRepository(User::class)->findOneBy(['email' => 'demo@talenteko.test']);
        $user->setResetToken('validtoken');
        $user->setResetRequestedAt(new \DateTimeImmutable());
        $this->em->flush();

        $client = static::createClient();
        $client->request('POST', '/reset-password/validtoken', [
            'password' => 'NewPassword123!',
            'confirm_password' => 'NewPassword123!',
        ]);

        $this->assertResponseRedirects('/login');
        $client->followRedirect();
        $this->assertSelectorExists('.flash-success');

        // Vérifie que le token a été révoqué
        $userRefreshed = $this->em->getRepository(User::class)->findOneBy(['email' => 'demo@talenteko.test']);
        self::assertNull($userRefreshed->getResetToken());
    }

    public function testResetWithMismatchPasswordFails(): void
    {
        $user = $this->em->getRepository(User::class)->findOneBy(['email' => 'demo@talenteko.test']);
        $user->setResetToken('mismatchtoken');
        $user->setResetRequestedAt(new \DateTimeImmutable());
        $this->em->flush();

        $client = static::createClient();
        $client->request('POST', '/reset-password/mismatchtoken', [
            'password' => 'Abcd1234!',
            'confirm_password' => 'Different123!',
        ]);

        $this->assertResponseRedirects('/reset-password/mismatchtoken');
        $client->followRedirect();
        $this->assertSelectorExists('.flash-error');
    }
}
