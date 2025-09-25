<?php

declare(strict_types=1);

namespace App\Tests\Entity;

use App\Entity\User;
use PHPUnit\Framework\TestCase;

/**
 * Tests unitaires de l'entité User
 *
 * Vérifie le bon fonctionnement des setters/getters
 * et la cohérence des données manipulées.
 */
class UserTest extends TestCase
{
    public function testEmailSetterGetter(): void
    {
        $user = new User();
        $user->setEmail('test@example.com');

        $this->assertSame('test@example.com', $user->getEmail(), '❌ L’email devrait être correctement défini et récupéré');
    }

    public function testPseudoSetterGetter(): void
    {
        $user = new User();
        $user->setPseudo('Talenteko#1234');

        $this->assertSame('Talenteko#1234', $user->getPseudo(), '❌ Le pseudo devrait être correctement défini et récupéré');
    }

    public function testPasswordSetterGetter(): void
    {
        $user = new User();
        $user->setPassword('hashedPassword');

        $this->assertNotEmpty($user->getPassword(), '❌ Le mot de passe ne devrait pas être vide après setPassword()');
        $this->assertSame('hashedPassword', $user->getPassword(), '❌ Le mot de passe défini devrait être identique à celui récupéré');
    }

    public function testRolesDefault(): void
    {
        $user = new User();

        $this->assertContains('ROLE_USER', $user->getRoles(), '❌ Tout nouvel utilisateur doit avoir le rôle ROLE_USER par défaut');
    }
}
