<?php

declare(strict_types=1);

namespace App\Tests\Entity;

use App\Entity\User;
use PHPUnit\Framework\TestCase;

final class ProfileTypeTest extends TestCase
{
    public function testPseudoSetterGetter(): void
    {
        $user = new User();
        $user->setPseudo('BricoMan');
        self::assertSame('BricoMan', $user->getPseudo());
    }

    public function testLocationSetterGetter(): void
    {
        $user = new User();
        $user->setLocation('Paris');
        self::assertSame('Paris', $user->getLocation());
    }

    public function testBioSetterGetter(): void
    {
        $user = new User();
        $user->setBio('Passionné de cuisine et de guitare.');
        self::assertSame('Passionné de cuisine et de guitare.', $user->getBio());
    }

    public function testSkillsOfferedSetterGetter(): void
    {
        $user = new User();
        $skills = ['Guitare', 'Bricolage'];
        $user->setSkillsOffered($skills);
        self::assertSame($skills, $user->getSkillsOffered());
    }

    public function testSkillsWantedSetterGetter(): void
    {
        $user = new User();
        $skills = ['Anglais', 'Informatique'];
        $user->setSkillsWanted($skills);
        self::assertSame($skills, $user->getSkillsWanted());
    }
}
