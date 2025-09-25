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

        $this->assertSame('Alice', $profile->getFirstname(), 'Ã¢ÂÅ’ Le prÃƒÂ©nom devrait ÃƒÂªtre correctement dÃƒÂ©fini et rÃƒÂ©cupÃƒÂ©rÃƒÂ©');
    }

    public function testLastnameSetterGetter(): void
    {
        $profile = new Profile();
        $profile->setLastname('Dupont');

        $this->assertSame('Dupont', $profile->getLastname(), 'Ã¢ÂÅ’ Le nom devrait ÃƒÂªtre correctement dÃƒÂ©fini et rÃƒÂ©cupÃƒÂ©rÃƒÂ©');
    }

    public function testBioSetterGetter(): void
    {
        $profile = new Profile();
        $profile->setBio('PassionnÃƒÂ©e de musique et dÃ¢â‚¬â„¢ÃƒÂ©changes de savoirs.');

        $this->assertStringContainsString('musique', $profile->getBio(), 'Ã¢ÂÅ’ La bio devrait contenir le texte dÃƒÂ©fini');
    }

    public function testRelationWithUser(): void
    {
        $user = new User();
        $user->setEmail('profileuser@example.com');

        $profile = new Profile();
        $profile->setUser($user);

        $this->assertSame($user, $profile->getUser(), 'Ã¢ÂÅ’ Le profil doit ÃƒÂªtre associÃƒÂ© au bon utilisateur');
        $this->assertEquals('profileuser@example.com', $profile->getUser()->getEmail(), 'Ã¢ÂÅ’ LÃ¢â‚¬â„¢utilisateur liÃƒÂ© au profil devrait ÃƒÂªtre cohÃƒÂ©rent');
    }
}
