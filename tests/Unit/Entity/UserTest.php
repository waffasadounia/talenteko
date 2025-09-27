<?php

declare(strict_types=1);

namespace App\Tests\Entity;

use App\Entity\User;
use PHPUnit\Framework\TestCase;

/**
 * Tests unitaires de l'entitÃƒÂ© User
 *
 * VÃƒÂ©rifie le bon fonctionnement des setters/getters
 * et la cohÃƒÂ©rence des donnÃƒÂ©es manipulÃƒÂ©es.
 */
class UserTest extends TestCase
{
    public function testEmailSetterGetter(): void
    {
        $user = new User();
        $user->setEmail('test@example.com');

        $this->assertSame('test@example.com', $user->getEmail(), 'L\'email devrait ÃƒÂªtre correctement dÃƒÂ©fini et rÃƒÂ©cupÃƒÂ©rÃƒÂ©');
    }

    public function testPseudoSetterGetter(): void
    {
        $user = new User();
        $user->setPseudo('Talenteko#1234');

        $this->assertSame('Talenteko#1234', $user->getPseudo(), 'Le pseudo devrait ÃƒÂªtre correctement dÃƒÂ©fini et rÃƒÂ©cupÃƒÂ©rÃƒÂ©');
    }

    public function testPasswordSetterGetter(): void
    {
        $user = new User();
        $user->setPassword('hashedPassword');

        $this->assertNotEmpty($user->getPassword(), 'Le mot de passe ne devrait pas ÃƒÂªtre vide aprÃƒÂ¨s setPassword()');
        $this->assertSame('hashedPassword', $user->getPassword(), 'Le mot de passe dÃƒÂ©fini devrait ÃƒÂªtre identique ÃƒÂ  celui rÃƒÂ©cupÃƒÂ©rÃƒÂ©');
    }

    public function testRolesDefault(): void
    {
        $user = new User();

        $this->assertContains('ROLE_USER', $user->getRoles(), 'Tout nouvel utilisateur doit avoir le rÃƒÂ´le ROLE_USER par dÃƒÂ©faut');
    }
}
