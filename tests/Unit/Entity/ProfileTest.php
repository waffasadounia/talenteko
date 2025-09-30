<?php

declare(strict_types=1);

namespace App\Tests\Entity;

use App\Entity\User;
use PHPUnit\Framework\TestCase;

final class ProfileTest extends TestCase
{
    public function testPseudoGetterSetter(): void
    {
        $user = new User();
        $user->setPseudo('BricoMan42');

        self::assertSame('BricoMan42', $user->getPseudo());
    }

    public function testLocationGetterSetter(): void
    {
        $user = new User();
        $user->setLocation('Paris');

        self::assertSame('Paris', $user->getLocation());
    }

    public function testBioGetterSetter(): void
    {
        $user = new User();
        $user->setBio('Passionné de bricolage et jardinage');

        self::assertSame('Passionné de bricolage et jardinage', $user->getBio());
    }

    public function testSkillsCollections(): void
    {
        $user = new User();

        $user->setSkillsOffered(['Bricolage']);
        $user->setSkillsWanted(['Cours de guitare']);

        self::assertContains('Bricolage', $user->getSkillsOffered());
        self::assertContains('Cours de guitare', $user->getSkillsWanted());

        $user->setSkillsOffered([]);
        $user->setSkillsWanted([]);

        self::assertEmpty($user->getSkillsOffered());
        self::assertEmpty($user->getSkillsWanted());
    }
}
