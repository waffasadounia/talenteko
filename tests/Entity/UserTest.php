<?php

declare(strict_types=1);

namespace App\Tests\Entity;

use App\Entity\User;
use PHPUnit\Framework\TestCase;

/**
 * Tests unitaires de l'entitÃ© User
 *
 * VÃ©rifie le bon fonctionnement des setters/getters
 * et la cohÃ©rence des donnÃ©es manipulÃ©es.
 */
class UserTest extends TestCase
{
    public function testEmailSetterGetter(): void
    {
        $user = new User();
        $user->setEmail('test@example.com');

        $this->assertSame('test@example.com', $user->getEmail(), 'âŒ Lâ€™email devrait Ãªtre correctement dÃ©fini et rÃ©cupÃ©rÃ©');
    }

    public function testPseudoSetterGetter(): void
    {
        $user = new User();
        $user->setPseudo('Talenteko#1234');

        $this->assertSame('Talenteko#1234', $user->getPseudo(), 'âŒ Le pseudo devrait Ãªtre correctement dÃ©fini et rÃ©cupÃ©rÃ©');
    }

    public function testPasswordSetterGetter(): void
    {
        $user = new User();
        $user->setPassword('hashedPassword');

        $this->assertNotEmpty($user->getPassword(), 'âŒ Le mot de passe ne devrait pas Ãªtre vide aprÃ¨s setPassword()');
        $this->assertSame('hashedPassword', $user->getPassword(), 'âŒ Le mot de passe dÃ©fini devrait Ãªtre identique Ã  celui rÃ©cupÃ©rÃ©');
    }

    public function testRolesDefault(): void
    {
        $user = new User();

        $this->assertContains('ROLE_USER', $user->getRoles(), 'âŒ Tout nouvel utilisateur doit avoir le rÃ´le ROLE_USER par dÃ©faut');
    }
}
