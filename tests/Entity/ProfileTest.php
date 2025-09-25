<?php

declare(strict_types=1);

namespace App\Tests\Entity;

use App\Entity\Profile;
use App\Entity\User;
use PHPUnit\Framework\TestCase;

/**
 * Tests unitaires de l'entitÃ© Profile
 *
 * VÃ©rifie le bon fonctionnement des setters/getters
 * et l'association avec User.
 */
class ProfileTest extends TestCase
{
    public function testFirstnameSetterGetter(): void
    {
        $profile = new Profile();
        $profile->setFirstname('Alice');

        $this->assertSame('Alice', $profile->getFirstname(), 'âŒ Le prÃ©nom devrait Ãªtre correctement dÃ©fini et rÃ©cupÃ©rÃ©');
    }

    public function testLastnameSetterGetter(): void
    {
        $profile = new Profile();
        $profile->setLastname('Dupont');

        $this->assertSame('Dupont', $profile->getLastname(), 'âŒ Le nom devrait Ãªtre correctement dÃ©fini et rÃ©cupÃ©rÃ©');
    }

    public function testBioSetterGetter(): void
    {
        $profile = new Profile();
        $profile->setBio('PassionnÃ©e de musique et dâ€™Ã©changes de savoirs.');

        $this->assertStringContainsString('musique', $profile->getBio(), 'âŒ La bio devrait contenir le texte dÃ©fini');
    }

    public function testRelationWithUser(): void
    {
        $user = new User();
        $user->setEmail('profileuser@example.com');

        $profile = new Profile();
        $profile->setUser($user);

        $this->assertSame($user, $profile->getUser(), 'âŒ Le profil doit Ãªtre associÃ© au bon utilisateur');
        $this->assertEquals('profileuser@example.com', $profile->getUser()->getEmail(), 'âŒ Lâ€™utilisateur liÃ© au profil devrait Ãªtre cohÃ©rent');
    }
}
