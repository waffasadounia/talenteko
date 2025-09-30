<?php

declare(strict_types=1);

namespace App\Tests\Entity;

use App\Entity\Profile;
use App\Entity\User;
use PHPUnit\Framework\TestCase;

/**
 * Tests unitaires de l'entité Profile
 *
 * Vérifie le bon fonctionnement des setters/getters
 * et l'association avec User.
 */
class ProfileTest extends TestCase
{
    public function testFirstnameSetterGetter(): void
    {
        $profile = new Profile();
        $profile->setFirstname('Alice');

        $this->assertSame(
            'Alice',
            $profile->getFirstname(),
            'Le prénom devrait être correctement défini et récupéré',
        );
    }

    public function testLastnameSetterGetter(): void
    {
        $profile = new Profile();
        $profile->setLastname('Dupont');

        $this->assertSame(
            'Dupont',
            $profile->getLastname(),
            'Le nom devrait être correctement défini et récupéré',
        );
    }

    public function testBioSetterGetter(): void
    {
        $profile = new Profile();
        $profile->setBio('Passionnée de musique et d’échanges de savoirs.');

        $this->assertStringContainsString(
            'musique',
            $profile->getBio(),
            'La bio devrait contenir le texte défini',
        );
    }

    public function testRelationWithUser(): void
    {
        $user = new User();
        $user->setEmail('profileuser@example.com');

        $profile = new Profile();
        $profile->setUser($user);

        $this->assertSame(
            $user,
            $profile->getUser(),
            'Le profil doit être associé au bon utilisateur',
        );
        $this->assertEquals(
            'profileuser@example.com',
            $profile->getUser()->getEmail(),
            'L\'utilisateur lié au profil devrait être cohérent',
        );
    }
}
