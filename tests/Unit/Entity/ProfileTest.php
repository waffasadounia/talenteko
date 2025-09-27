<?php

declare(strict_types=1);

namespace App\Tests\Entity;

use App\Entity\Profile;
use App\Entity\User;
use PHPUnit\Framework\TestCase;

/**
 * Tests unitaires de l'entitÃƒÂ© Profile
 *
 * VÃƒÂ©rifie le bon fonctionnement des setters/getters
 * et l'association avec User.
 */
class ProfileTest extends TestCase
{
    public function testFirstnameSetterGetter(): void
    {
        $profile = new Profile();
        $profile->setFirstname('Alice');

        $this->assertSame('Alice', $profile->getFirstname(), 'Le prÃƒÂ©nom devrait ÃƒÂªtre correctement dÃƒÂ©fini et rÃƒÂ©cupÃƒÂ©rÃƒÂ©');
    }

    public function testLastnameSetterGetter(): void
    {
        $profile = new Profile();
        $profile->setLastname('Dupont');

        $this->assertSame('Dupont', $profile->getLastname(), 'Le nom devrait ÃƒÂªtre correctement dÃƒÂ©fini et rÃƒÂ©cupÃƒÂ©rÃƒÂ©');
    }

    public function testBioSetterGetter(): void
    {
        $profile = new Profile();
        $profile->setBio('PassionnÃƒÂ©e de musique et dÃ¢â‚¬â„¢ÃƒÂ©changes de savoirs.');

        $this->assertStringContainsString('musique', $profile->getBio(), 'La bio devrait contenir le texte dÃƒÂ©fini');
    }

    public function testRelationWithUser(): void
    {
        $user = new User();
        $user->setEmail('profileuser@example.com');

        $profile = new Profile();
        $profile->setUser($user);

        $this->assertSame($user, $profile->getUser(), 'Le profil doit ÃƒÂªtre associÃƒÂ© au bon utilisateur');
        $this->assertEquals('profileuser@example.com', $profile->getUser()->getEmail(), 'L\'utilisateur liÃƒÂ© au profil devrait ÃƒÂªtre cohÃƒÂ©rent');
    }
}
