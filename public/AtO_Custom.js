/*
 *    88        88  88888888888  88           88           ,ad8888ba,    
 *    88        88  88           88           88          d8"'    `"8b   
 *    88        88  88           88           88         d8'        `8b  
 *    88aaaaaaaa88  88aaaaa      88           88         88          88  
 *    88""""""""88  88"""""      88           88         88          88  
 *    88        88  88           88           88         Y8,        ,8P  
 *    88        88  88           88           88          Y8a.    .a8P   
 *    88        88  88888888888  88888888888  88888888888  `"Y8888Y"'    
 *    
 *    Feel free to use any code you find here. 
 *    I am a terrible commenter (sorry), so please feel free to ping @stiffmeds in the AtO Discord if you have questions.
 *    PLEASE DON'T JUDGE MY HORRIFIC ASYNC/AWAITS
 */

// var socket = io(); // this will be used when I inevitably get tired of using the data in multiple different places and change to a sql database :D
const delay = ms => new Promise(res => setTimeout(res, ms));
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
const bsSideCardShow = new bootstrap.Collapse("#svg_card_side", { toggle: false });
const bsSideCardList = new bootstrap.Collapse("#menu_card_list", { toggle: false });
const defaultCard = {
    "Aura": "",
    "Aura2": "",
    "Aura3": "",
    "AuraCharges": 0,
    "AuraCharges2": 0,
    "AuraCharges3": 0,
    "AuraSelf": "",
    "AuraSelf2": "",
    "AuraSelf3": "",
    "AutoplayDraw": false,
    "CardUpgraded": "No",
    "BaseCard": "",
    "UpgradedFrom": "",
    "UpgradesTo1": "",
    "UpgradesTo2": "",
    "UpgradesToRare": "",
    "CardClass": "Warrior",
    "CardName": "",
    "CardRarity": "Common",
    "CardType": "None",
    "CardTypeAux": [],
    "Curse": "",
    "Curse2": "",
    "Curse3": "",
    "CurseCharges": 0,
    "CurseCharges2": 0,
    "CurseCharges3": 0,
    "CurseSelf": "",
    "CurseSelf2": "",
    "CurseSelf3": "",
    "Damage": 0,
    "DamageSelf": 0,
    "DamageSides": 0,
    "DamageType": "None",
    "Damage2": 0,
    "DamageSelf2": 0,
    "DamageSides2": 0,
    "DamageType2": "None",
    "DamageEnergyBonus": 0,
    "DiscardCard": 0,
    "DiscardCardAutomatic": false,
    "DiscardCardPlace": "Discard",
    "DiscardCardType": "None",
    "DiscardCardTypeAux": [],
    "DispelAuras": 0,
    "DrawCard": 0,
    "EffectCastCenter": false,
    "EffectCaster": "",
    "EffectCasterRepeat": false,
    "EffectPreAction": "",
    "EffectTarget": "",
    "EffectTrail": "",
    "EffectTrailAngle": "Horizontal",
    "AcEnergyBonus": "",
    "AcEnergyBonusQuantity": 0,
    "AcEnergyBonus2": "",
    "AcEnergyBonus2Quantity": 0,
    "EffectRepeat": 1,
    "EffectRepeatTarget": "NeverRepeat",
    "EffectRepeatMaxBonus": 0,
    "EffectRepeatModificator": 0,
    "EffectTrailRepeat": false,
    "EnergyCost": 0,
    "EnergyRecharge": 0,
    "Heal": 0,
    "HealAuraCurseName": "",
    "HealAuraCurseName2": "",
    "HealAuraCurseName3": "",
    "HealAuraCurseName4": "",
    "HealAuraCurseSelf": "",
    "HealCurses": 0,
    "HealEnergyBonus": 0,
    "HealSelf": 0,
    "HealSides": 0,
    "ID": "",
    "IgnoreBlock": false,
    "IgnoreBlock2": false,
    "IncreaseAuras": 0,
    "IncreaseCurses": 0,
    "ReduceAuras": 0,
    "ReduceCurses": 0,
    "Innate": false,
    "LookCards": 0,
    "LookCardsDiscardUpTo": 0,
    "LookCardsVanishUpTo": 0,
    "SelfHealthLoss": 0,
    "Sound": "",
    "SoundPreAction": "",
    "SoundPreActionFemale": "",
    "Sprite": "",
    "StealAuras": 0,
    "TransferCurses": 0,
    "TargetPosition": "Anywhere",
    "TargetSide": "Anyone",
    "TargetType": "Single",
    "Vanish": true,
    "GoldGainQuantity": 0,
    "ShardsGainQuantity": 0,
    "HealSelfPerDamageDonePercent": 0,
    "EffectRequired": "",
    "AddCard": 0,
    "AddCardChoose": 0,
    "AddCardCostTurn": false,
    "AddCardFrom": "Deck",
    "AddCardId": "",
    "AddCardList": [],
    "AddCardPlace": "Discard",
    "AddCardReducedCost": 0,
    "AddCardType": "None",
    "AddCardTypeAux": [],
    "AddCardVanish": false,
    "RelatedCard": "",
    "RelatedCard2": "",
    "RelatedCard3": "",
    "AuraChargesSpecialValue1": false,
    "AuraChargesSpecialValue2": false,
    "AuraChargesSpecialValueGlobal": false,
    "AuraCharges2SpecialValue1": false,
    "AuraCharges2SpecialValue2": false,
    "AuraCharges2SpecialValueGlobal": false,
    "AuraCharges3SpecialValue1": false,
    "AuraCharges3SpecialValue2": false,
    "AuraCharges3SpecialValueGlobal": false,
    "CurseChargesSpecialValue1": false,
    "CurseChargesSpecialValue2": false,
    "CurseChargesSpecialValueGlobal": false,
    "CurseCharges2SpecialValue1": false,
    "CurseCharges2SpecialValue2": false,
    "CurseCharges2SpecialValueGlobal": false,
    "CurseCharges3SpecialValue1": false,
    "CurseCharges3SpecialValue2": false,
    "CurseCharges3SpecialValueGlobal": false,
    "DamageSpecialValue1": false,
    "DamageSpecialValue2": false,
    "DamageSpecialValueGlobal": false,
    "Damage2SpecialValue1": false,
    "Damage2SpecialValue2": false,
    "Damage2SpecialValueGlobal": false,
    "HealSelfSpecialValue1": false,
    "HealSelfSpecialValue2": false,
    "HealSelfSpecialValueGlobal": false,
    "HealSpecialValue1": false,
    "HealSpecialValue2": false,
    "HealSpecialValueGlobal": false,
    "SelfHealthLossSpecialGlobal": false,
    "SelfHealthLossSpecialValue1": false,
    "SelfHealthLossSpecialValue2": false,
    "DrawCardSpecialValueGlobal": false,
    "EnergyRechargeSpecialValueGlobal": false,
    "SpecialAuraCurseName1": "",
    "SpecialAuraCurseName2": "",
    "SpecialAuraCurseNameGlobal": "",
    "SpecialValue1": "None",
    "SpecialValue2": "None",
    "SpecialValueGlobal": "None",
    "SpecialValueModifier1": 0,
    "SpecialValueModifier2": 0,
    "SpecialValueModifierGlobal": 0,
    "SummonAura": "",
    "SummonAura2": "",
    "SummonAura3": "",
    "SummonAuraCharges": 0,
    "SummonAuraCharges2": 0,
    "SummonAuraCharges3": 0,
    "SummonUnit": "",
    "SummonUnitNum": 0,
    "EffectPostCastDelay": 0.4,
    "EffectPostTargetDelay": 0.2,
    "EffectRepeatDelay": 0,
    "EffectTrailSpeed": 1,
    "IsPetAttack": false,
    "IsPetCast": false,
    "Item": "",
    "ItemEnchantment": "",
    "Lazy": false,
    "ModifiedByTrait": false,
    "MoveToCenter": false,
    "PetFront": true,
    "PetInvert": true,
    "PetModel": "",
    "PetOffset": "(0.00, 0.00)",
    "PetSize": "(1.00, 1.00)",
    "Playable": true,
    "PullTarget": 0,
    "PushTarget": 0,
    "SelfKillHiddenSeconds": 0,
    "ShowInTome": true,
    "Starter": false,
    "Visible": false,
    "AutoplayEndTurn": false,
    "CardNumber": 0,
    "CardTypeList": [],
    "Corrupted": false,
    "Description": "",
    "DescriptionID": "",
    "EffectRepeatEnergyBonus": 0,
    "EndTurn": false,
    "EnergyCostForShow": 0,
    "EnergyReductionPermanent": 0,
    "EnergyReductionTemporal": 0,
    "EnergyReductionToZeroPermanent": false,
    "EnergyReductionToZeroTemporal": false,
    "ExhaustCounter": 0,
    "FlipSprite": false,
    "Fluff": "",
    "FluffPercent": 0,
    "KillPet": false,
    "MaxInDeck": 0,
    "OnlyInWeekly": false,
    "Sku": ""
};
const defaultItem = {
	"ACG1MultiplyByEnergyUsed": false,
	"ACG2MultiplyByEnergyUsed": false,
	"ACG3MultiplyByEnergyUsed": false,
	"Activation": "Damaged",
	"ActivationOnlyOnHeroes": false,
	"AuraCurseBonus1": "",
	"AuraCurseBonus2": "",
	"AuraCurseBonusValue1": 0,
	"AuraCurseBonusValue2": 0,
	"AuraCurseCustomAC": "",
	"AuraCurseCustomModValue1": 0,
	"AuraCurseCustomModValue2": 0,
	"AuraCurseCustomString": "",
	"AuraCurseGain1": "",
	"AuraCurseGain2": "",
	"AuraCurseGain3": "",
	"AuraCurseGainSelf1": "",
	"AuraCurseGainSelf2": "",
	"AuraCurseGainSelfValue1": 0,
	"AuraCurseGainSelfValue2": 0,
	"AuraCurseGainValue1": 0,
	"AuraCurseGainValue2": 0,
	"AuraCurseGainValue3": 0,
	"AuraCurseImmune1": "",
	"AuraCurseImmune2": "",
	"AuraCurseNumForOneEvent": 0,
	"AuraCurseSetted": "",
	"CardNum": 0,
	"CardPlace": "Hand",
	"CardToGain": "",
	"CardToGainList": [],
	"CardToGainType": "None",
	"CardToReduceType": "None",
	"CardsReduced": 0,
	"CastEnchantmentOnFinishSelfCast": false,
	"CastedCardType": "None",
	"ChanceToDispel": 0,
	"ChanceToDispelNum": 0,
	"CharacterStatModified": "None",
	"CharacterStatModified2": "None",
	"CharacterStatModified3": "None",
	"CharacterStatModifiedValue": 0,
	"CharacterStatModifiedValue2": 0,
    "CharacterStatModifiedValue3": 0,
    "CostReduceEnergyRequirement": 0,
	"CostReducePermanent": false,
	"CostReduceReduction": 0,
	"CostReduction": 0,
	"CostZero": false,
	"CursedItem": false,
	"DTTMultiplyByEnergyUsed": false,
	"DamageFlatBonus": "None",
	"DamageFlatBonus2": "None",
	"DamageFlatBonus3": "None",
	"DamageFlatBonusValue": 0,
	"DamageFlatBonusValue2": 0,
	"DamageFlatBonusValue3": 0,
	"DamagePercentBonus": "None",
	"DamagePercentBonus2": "None",
	"DamagePercentBonus3": "None",
	"DamagePercentBonusValue": 0,
	"DamagePercentBonusValue2": 0,
	"DamagePercentBonusValue3": 0,
	"DamageToTarget": 0,
	"DamageToTargetType": "None",
	"DestroyAfterUse": false,
	"DestroyAfterUses": 0,
	"DestroyEndOfTurn": false,
	"DestroyStartOfTurn": false,
	"DrawCards": 0,
	"DrawMultiplyByEnergyUsed": false,
	"DropOnly": false,
	"DuplicateActive": false,
    "EffectCaster": "",
    "EffectCasterDelay": 0,
    "EffectItemOwner": "",
    "EffectTarget": "",
    "EffectTargetDelay": 0,
	"EmptyHand": false,
	"EnergyQuantity": 0,
	"ExactRound": 0,
	"HealFlatBonus": 0,
    "HealPercentBonus": 0,
    "HealPercentQuantity": 0,
    "HealPercentQuantitySelf": 0,
	"HealQuantity": 0,
	"HealReceivedFlatBonus": 0,
	"HealReceivedPercentBonus": 0,
	"ID": "",
	"IsEnchantment": false,
	"ItemSound": "",
	"ItemTarget": "CurrentTarget",
	"LowerOrEqualPercentHP": 100,
	"MaxHealth": 0,
	"ModifiedDamageType": "None",
	"NotShowCharacterBonus": false,
	"OnlyAddItemToNPCs": false,
	"PassSingleAndCharacterRolls": false,
	"PercentDiscountShop": 0,
	"PercentRetentionEndGame": 0,
	"Permanent": false,
	"QuestItem": false,
	"ReduceHighestCost": false,
	"ResistModified1": "None",
	"ResistModified2": "None",
	"ResistModified3": "None",
	"ResistModifiedValue1": 0,
	"ResistModifiedValue2": 0,
	"ResistModifiedValue3": 0,
	"RoundCycle": 0,
	"SpriteBossDrop": "",
	"TimesPerCombat": 0,
	"TimesPerTurn": 0,
	"UseTheNextInsteadWhenYouPlay": false,
	"UsedEnergy": false,
	"Vanish": false
};

// I think if I do my enums like this I can do language selection later? .: key is actual JSON-read value, value is lang-based?
const Enums = Object.freeze({
    Aura: {
        buffer: "Buffer",
        bless: "Bless",
        block: "Block",
        buffer: "Buffer",
        courage: "Courage",
        energize: "Energize",
        evasion: "Evasion",
        fast: "Fast",
        fortify: "Fortify",
        furnace: "Furnace",
        fury: "Fury",
        haste: "Haste",
        inspire: "Inspire",
        insulate: "Insulate",
        invulnerable: "Invulnerable",
        mitigate: "Mitigate",
        powerful: "Powerful",
        regeneration: "Regeneration",
        reinforce: "Reinforce",
        sharp: "Sharp",
        shield: "Shield",
        stanzai: "Stanza I",
        stanzaii: "Stanza II",
        stanzaiii: "Stanza III",
        stealth: "Stealth",
        taunt: "Taunt",
        thorns: "Thorns",
        vitality: "Vitality",
        zeal: "Zeal"
    },
    Curse: {
        bleed: "Bleed",
        burn: "Burn",
        chill: "Chill",
        crack: "Crack",
        dark: "Dark",
        daze: "Daze",
        decay: "Decay",
        disarm: "Disarm",
        doom: "Doom",
        fatigue: "Fatigue",
        freeze: "Freeze",
        insane: "Insane",
        mark: "Mark",
        poison: "Poison",
        sanctify: "Sanctify",
        scourge: "Scourge",
        shackle: "Shackle",
        sight: "Sight",
        silence: "Silence",
        slow: "Slow",
        spark: "Spark",
        stress: "Stress",
        vulnerable: "Vulnerable",
        weak: "Weak",
        wet: "Wet"
    },
    CardClass: {
        Warrior: "Warrior",
        Mage: "Mage",
        Healer: "Healer",
        Scout: "Scout",
        Boon: "Boon",
        Injury: "Injury",
        Special: "Special",
        Enchantment: "Enchantment",
        Weapon: "Weapon",
        Armor: "Armor",
        Jewelry: "Jewelry",
        Accesory: "Accessory"/*,
        Pet: "Pet"
        /*Item: "Item",
        MagicKnight: "MagicKnight",
        Monster: "Monster",
        None: "None"*/
    },
    CardRarity: {
        Common: "Common",
        Uncommon: "Uncommon",
        Rare: "Rare",
        Epic: "Epic",
        Mythic: "Mythic"
    },
    CardType: {
        // None: "None",
        Melee_Attack: "Melee Attack",
        Ranged_Attack: "Ranged Attack",
        // Magic_Attack: "Magic Attack",
        Defense: "Defense",
        Fire_Spell: "Fire Spell",
        Cold_Spell: "Cold Spell",
        Lightning_Spell: "Lightning Spell",
        Mind_Spell: "Mind Spell",
        Shadow_Spell: "Shadow Spell",
        Holy_Spell: "Holy Spell",
        Curse_Spell: "Curse Spell",
        Healing_Spell: "Healing Spell",
        Book: "Book",
        Small_Weapon: "Small Weapon",
        Song: "Song",
        Skill: "Skill",
        // Power: "Power",
        // Attack: "Attack",
        // Spell: "Spell",
        Boon: "Boon",
        Injury: "Injury",
        // Weapon: "Weapon",
        // Armor: "Armor",
        // Jewelry: "Jewelry",
        // Accesory: "Accessory",
        // Pet: "Pet",
        // Corruption: "Corruption",
        // Enchantment: "Enchantment",
        Food: "Food"
    },
    CardTypeFull: {
        Melee_Attack: "Melee Attack",
        Ranged_Attack: "Ranged Attack",
        // Magic_Attack: "Magic Attack",
        Defense: "Defense",
        Fire_Spell: "Fire Spell",
        Cold_Spell: "Cold Spell",
        Lightning_Spell: "Lightning Spell",
        Mind_Spell: "Mind Spell",
        Shadow_Spell: "Shadow Spell",
        Holy_Spell: "Holy Spell",
        Curse_Spell: "Curse Spell",
        Healing_Spell: "Healing Spell",
        Book: "Book",
        Small_Weapon: "Small Weapon",
        Song: "Song",
        Skill: "Skill",
        // Power: "Power",
        Attack: "Attack",
        Spell: "Spell",
        Boon: "Boon",
        Injury: "Injury",
        // Weapon: "Weapon",
        // Armor: "Armor",
        // Jewelry: "Jewelry",
        // Accesory: "Accessory",
        // Pet: "Pet",
        // Corruption: "Corruption",
        Enchantment: "Enchantment",
        Food: "Food"
    },
    CardUpgraded: {
        No: "No",
        A: "A (blue)",
        B: "B (yellow)",
        Rare: "Corrupted"
    },
    CardTargetType: {
        Single: "Single",
        SingleSided: "Single Side",
        Global: "Global"
    },
    CardTargetSide: {
        Enemy: "Enemy",
        Friend: "Friend",
        Anyone: "Anyone",
        Self: "Self",
        FriendNotSelf: "Friend (not self)"
    },
    CardTargetPosition: {
        Anywhere: "Anywhere",
        Front: "Front",
        Random: "Random",
        Back: "Back",
        Middle: "Middle",
        Slowest: "Slowest",
        Fastest: "Fastest",
        LeastHP: "Least HP",
        MostHP: "Most HP"
    },
    CardPlace: {
        Discard: "Discard",
        TopDeck: "Top Deck",
        BottomDeck: "Bottom Deck",
        RandomDeck: "Random Deck",
        Vanish: "Vanish",
        Hand: "Hand",
        Cast: "Cast"
    },
    CardFrom: {
        Deck: "Deck",
        Discard: "Discard",
        Game: "Game",
        Hand: "Hand",
        Vanish: "Vanish"
    },
    CardSpecialValue: {
        None: "None",
        AuraCurseYours: "Aura Curse Yours",
        AuraCurseTarget: "Aura Curse Target",
        CardsHand: "Cards Hand",
        CardsDeck: "Cards Deck",
        CardsDiscard: "Cards Discard",
        HealthYours: "Health Yours",
        HealthTarget: "Health Target",
        CardsVanish: "Cards Vanish",
        CardsDeckTarget: "Cards Deck Target",
        CardsDiscardTarget: "Cards Discard Target",
        CardsVanishTarget: "Cards Vanish Target",
        SpeedYours: "Your Speed",
        SpeedTarget: "Target’s Speed",
        SpeedDifference: "Speed Difference",
        MissingHealthYours: "Your Missing Health",
        MissingHealthTarget: "Target’s Missing Health",
        DiscardedCards: "Cards Discarded By This",
        VanishedCards: "Cards Vanished By This"
    },
    DamageType: {
        None: "None",
        Slashing: "Slashing",
        Blunt: "Blunt",
        Piercing: "Piercing",
        Fire: "Fire",
        Cold: "Cold",
        Lightning: "Lightning",
        Mind: "Mind",
        Holy: "Holy",
        Shadow: "Shadow",
        All: "All"
    },
    DamageTypeLazy: {
        None: "None",
        Slashing: "Slashing",
        Blunt: "Blunt",
        Piercing: "Piercing",
        Fire: "Fire",
        Cold: "Cold",
        Lightning: "Lightning",
        Mind: "Mind",
        Holy: "Holy",
        Shadow: "Shadow"
    },
    EffectRepeatTarget: {
        Same: "Same", // same target & default
        Random: "Random", // different target
        Chain: "Chain", // 50% reduction
        NoRepeat: "No Repeat", // jump??
        NeverRepeat: "Never Repeat"
    },
    EffectTrailAngle: {
        Horizontal: "Horizontal",
        Parabolic: "Parabolic",
        Diagonal: "Diagonal",
        Vertical: "Vertical"
    },
    Sound: {
        airswosh2: "airswosh2 (Corrupt Harpoons)",
        airswosh: "airswosh (Smell Blood)",
        angel: "angel (Guardian Angel)",
        arrow1: "arrow1 (Quick Shot)",
        arrow2: "arrow2 (Aimed Shot)",
        ArrowFly2: "ArrowFly2 (Shrapnel Shot)",
        bleed: "bleed (Bleed)",
        bless: "bless (Baptism)",
        block: "block (Overcoat)",
        blow: "blow (Pummel)",
        blunt2: "blunt2 (Shield Slam)",
        Blunt3: "Blunt3 (Skullsplitter)",
        Blunt4: "Blunt4 (Bludgeon)",
        blunt: "blunt (Frozen Bash)",
        bluntgore: "bluntgore (Heavy Strike)",
        Bravery: "Bravery (Ivory Tower)",
        bubble: "bubble (Antimagic Field)",
        buff: "buff (Greater Heal)",
        burn: "burn (Inner Fire)",
        "Cut Flesh 1": "Cut Flesh 1 (Acrobatic Strike)",
        cyclone: "cyclone (Icy Tornado)",
        dagger: "dagger (Feather Barrage)",
        Dark2: "Dark2 (Profane)",
        Dark3: "Dark3 (Black Hole)",
        Dark4: "Dark4 (Hallucination)",
        dark: "dark (Dark)",
        darkswosh: "darkswosh (Dark Pact)",
        dog_whistle: "dog_whistle (Dinner is Ready!)",
        double2: "double2 (Dual Strike)",
        drainlife: "drainlife (Vampiric Touch)",
        drink: "drink (Dilute)",
        Earthquake: "Earthquake (Earthwave)",
        energy: "energy (Innervate)",
        explode: "explode (Cannon Shot)",
        Fear1: "Fear1 (Death's Reach)",
        fireball2: "fireball2 (Consecration)",
        fireball: "fireball (Heat Surge)",
        FireballTorch: "FireballTorch (Severe Burn)",
        fireburn: "fireburn (Emberstorm)",
        fireswosh3: "fireswosh3 (Missile Barrage)",
        firewosh: "firewosh (Fire Claw)",
        flyup: "flyup (Fly Nest)",
        gore: "gore (Blood Infection)",
        guitarriff1: "guitarriff1 (Powerslave)",
        gunshot: "gunshot (Bullet Shot)",
        harpbless: "harpbless (Healing Serenade)",
        heal: "heal (Binding Heal)",
        heal2: "heal2 (Prayer of Protection)",
        heal3: "heal3 (Circle of Healing)",
        "Heal 6": "Heal 6 (Treat)",
        "Heal 9": "Heal 9 (Anthem of Hope)",
        heart: "heart (Adrenaline)",
        holy2: "holy2 (Celestial Brilliance)",
        holy4: "holy4 (Holy Storm)",
        holy5: "holy5 (Penance)",
        holy6: "holy6 (Holy Nova)",
        holy: "holy (Crescent Light)",
        Ice3: "Ice3 (Flash Freeze)",
        Ice4: "Ice4 (Blizzard)",
        icespell: "icespell (Ice Lance)",
        icicle: "icicle (Cold Feet)",
        invulnerable_sound: "invulnerable_sound (Invulnerable)",
        kiss: "kiss (Bewilder)",
        knifecut: "knifecut (Dragon Bite)",
        Laser: "Laser (Caustic Beam)",
        laugh: "laugh (Sarcastic Sonnet)",
        lava1: "lava1 (Ignite)",
        lava2: "lava2 (Inner Combustion)",
        lighningstrong: "lighningstrong (Endless Storm)",
        light: "light (Dawnlight)",
        lightningcast: "lightningcast (Electroshock)",
        magicbad: "magicbad (Curse of Exhaustion)",
        Magicbell2: "Magicbell2 (Deadly Chime)",
        Magicbell3: "Magicbell3 (Payback)",
        Magicbellholy: "Magicbellholy (Celestial Toll)",
        magicbubbles: "magicbubbles (Nephridium Acid)",
        magicdebuff: "magicdebuff (Broken Bone)",
        magicdispell: "magicdispell (Mass Dispel)",
        magicsweep: "magicsweep (Detoxify)",
        metal: "metal (Palisade)",
        meteorite2: "meteorite2 (Meteorite)",
        mind1: "mind1 (Enervate)",
        mind2: "mind2 (Mind Twist)",
        parry: "parry (Barricade)",
        Pistol: "Pistol (Scattershot)",
        poison2: "poison2 (Virulent Reaction)",
        poison: "poison (Poison)",
        punch2: "punch2 (Whack)",
        punch: "punch (Popcorn Burst)",
        pyro1: "pyro1 (Divine Ire)",
        pyro: "pyro (Pyroblast)",
        rabid: "rabid (Furious Ylmer)",
        repair: "repair (Herding)",
        roar2: "roar2 (Overbearing Roar)",
        roar: "roar (Dragon Roar)",
        rocks: "rocks (Boulder Throw)",
        scream2: "scream2 (Panic Scream)",
        seawave: "seawave (Geyser)",
        sharpen: "sharpen (Burrow)",
        sheep_angry: "sheep_angry (Awful Tantrum)",
        sheep_bite: "sheep_bite (Killer Bite)",
        "Shield 1": "Shield 1 (Sanctuary)",
        shieldgood: "shieldgood (Bulwark)",
        shock: "shock (Unstable Power)",
        sight: "sight (Clairvoyance)",
        slashpoison: "slashpoison (hanscorr)",
        songbad: "songbad (Eternal Lullaby)",
        songfanfare: "songfanfare (Energizing Serenade)",
        songflute: "songflute (Ballad of Evasion)",
        songgood: "songgood (Ballad of Conquest)",
        songguitar: "songguitar (Melodic Rhythm)",
        sparkle2: "sparkle2 (Fade)",
        sparkle3: "sparkle3 (Mesmeric Mirage)",
        sword1: "sword1 (Backstab)",
        sword2: "sword2 (Double Slash)",
        swordfast: "swordfast (Sharpening Cuts)",
        swosh3: "swosh3 (Shield Throw)",
        swosh: "swosh (Snipe)",
        thorns3: "thorns3 (Impaling Root)",
        thorns: "thorns (Rain of Thorns)",
        thunder2: "thunder2 (Astral Howl)",
        thunder: "thunder (Thunderfury)",
        tranquility: "tranquility (Tranquility)",
        ui_swoosh: "ui_swoosh (Barrage)",
        violin2: "violin2 (Reverberant Verse)",
        violin: "violin (Mystical Ice)",
        wardrum: "wardrum (Ode of War)",
        waterice: "waterice (Winter Is Coming)",
        waterspell: "waterspell (Water Jet)",
        whistle: "whistle (Hurry Up)",
        Wind2: "Wind2 (Energize)",
        wind: "wind (Stalking)",
        windmind: "windmind (Spectral Missiles)",
        wolf4: "wolf4 (Let the Feast Begin!)",
        wroar1: "wroar1 (Wild Roar)",
        yawn: "yawn (Tedious Poem)",
        zap: "zap (Zap)"
    },
    SoundPreAction: {
        "airswosh": "airswosh (Mental Shake)",
        "airswosh2": "airswosh2 (Snipe)",
        "angel": "angel (Heavenly Blessing)",
        "arrow2": "arrow2 (Frost Volley)",
        "battle": "battle (Battle Shout)",
        "battle2": "battle2 (Intimidate)",
        "bless": "bless (Sacred Ceremony)",
        "blunt": "blunt (Steamroller)",
        "blunt2": "blunt2 (Shatter)",
        "bluntgore": "bluntgore (Invigorating Blow)",
        "buff": "buff (Expected Prophecy)",
        "burn": "burn (Cauterize)",
        "caltrops": "caltrops (Palisade)",
        "cyclone": "cyclone (Typhoon)",
        "dagger2": "dagger2 (Feather Barrage)",
        "dark": "dark (Demonic Tutor)",
        "Dark2": "Dark2 (Unholy Storm)",
        "Dark3": "Dark3 (Dreadful Wave)",
        "Dark4": "Dark4 (Grand Cross)",
        "darkswosh": "darkswosh (Dark Outbreak)",
        "double": "double (Gut Ripper)",
        "DragonAttack": "DragonAttack (Frost Breath)",
        "drink": "drink (Baptism)",
        "DrumRoll": "DrumRoll (Heavy Metal)",
        "Earth": "Earth (Landslide)",
        "explode": "explode (Fishplosion)",
        "fireball": "fireball (Fireball)",
        "FireballTorch": "FireballTorch (Firestorm)",
        "fireburn": "fireburn (Disintegrate)",
        "firewosh": "firewosh (Combustion)",
        "firewosh2": "firewosh2 (Impaling Root)",
        "flyup": "flyup (Fly High)",
        "giatroar": "giatroar (Moon Beam)",
        "glitter": "glitter (Mana Shield)",
        "gore": "gore (Knight's Pride)",
        "harpbless": "harpbless (Bewilder)",
        "heal": "heal (Barrier)",
        "heal2": "heal2 (Binding Heal)",
        "heal3": "heal3 (Chain Heal)",
        "Heal 6": "Heal 6 (Curative Therapy)",
        "Heal 9": "Heal 9 (Purging Ray)",
        "heart": "heart (Life Tap)",
        "holy": "holy (Holy Fire)",
        "holy2": "holy2 (Divine Insight)",
        "holy3": "holy3 (Crescent Light)",
        "holy5": "holy5 (Luminous Beam)",
        "holy6": "holy6 (Divine Ire)",
        "holylow": "holylow (Holy Aegis)",
        "holylow2": "holylow2 (Holy Blast)",
        "ice1": "ice1 (Blizzard)",
        "ice2": "ice2 (Cyclone Slash)",
        "Ice4": "Ice4 (Shatter)",
        "icespell": "icespell (Cold Snap)",
        "icicle": "icicle (Ice Barrier)",
        "knifecut": "knifecut (Bloodsucker)",
        "Laser": "Laser (Reactive Laser)",
        "lava1": "lava1 (Blood Infection)",
        "lava2": "lava2 (Living Flame)",
        "lighningstrong": "lighningstrong (Electrocute)",
        "light": "light (Celestial Brilliance)",
        "lightningcast": "lightningcast (Child of the Storm)",
        "magicbad": "magicbad (Dark Pact)",
        "Magicbell1": "Magicbell1 (Magic Devour)",
        "Magicbell2": "Magicbell2 (Pandemonium)",
        "Magicbell3": "Magicbell3 (Mesmeric Mirage)",
        "magicbubbles": "magicbubbles (Protect from Evil)",
        "magicdebuff": "magicdebuff (hanscorr)",
        "magicdispell": "magicdispell (Amplifying Field)",
        "Magicshh2": "Magicshh2 (Pernicious Claw)",
        "magicsweep": "magicsweep (Panacea)",
        "magicthin": "magicthin (Snatching Claw)",
        "magicwater": "magicwater (Healing Rain)",
        "metal": "metal (Protect)",
        "mind1": "mind1 (Weakening Gaze)",
        "mind2": "mind2 (Clairvoyance)",
        "owl_hoot_02": "owl_hoot_02 (Owl Screech)",
        "parry": "parry (Deflect)",
        "poison": "poison (Corrupt Harpoons)",
        "punch2": "punch2 (Blazing Strike)",
        "pyro2": "pyro2 (Ice Comet)",
        "repair": "repair (Dwarf Fortress)",
        "roar": "roar (Cold Breath)",
        "rocks": "rocks (Earth Guard)",
        "scream1": "scream1 (Psychic Scream)",
        "sharpen": "sharpen (Sharpening Cuts)",
        "shock": "shock (Chain Lightning)",
        "sight": "sight (Bad Augury)",
        "slashpoison": "slashpoison (Paralyzing Venom)",
        "songbad": "songbad (Cursenomicon)",
        "songflute": "songflute (Adventure Awaits)",
        "songguitar": "songguitar (Song of Quickness)",
        "songharp": "songharp (Vitalizing Serenade)",
        "sparkle2": "sparkle2 (Enervate)",
        "sparkle3": "sparkle3 (Spark of Life)",
        "Splash": "Splash (Water Jet)",
        "sword1": "sword1 (Cull the Weak)",
        "swordfast": "swordfast (Freezing Slash)",
        "swosh": "swosh (Boulder Throw)",
        "swosh3": "swosh3 (Frozen Tomahawk)",
        "thorns": "thorns (Barkskin)",
        "thorns2": "thorns2 (Flower Stream)",
        "thorns3": "thorns3 (Thorneater)",
        "thunder": "thunder (Crash Lightning)",
        "thunder2": "thunder2 (Endless Storm)",
        "ui_swoosh": "ui_swoosh (Stinger Launcher)",
        "violin": "violin (Sonar)",
        "violin2": "violin2 (Vexing Crescendo)",
        "wardrum": "wardrum (Last Stand)",
        "waterice": "waterice (Squall)",
        "wbite3": "wbite3 (Vicious Bite)",
        "whistle": "whistle (Crab Bait)",
        "wind": "wind (Camouflage)",
        "Wind2": "Wind2 (Burrow)",
        "windmind": "windmind (Mind Visions)",
        "wolf4": "wolf4 (Terrorizing Howl)"
    },
    SoundPreActionFemale: {
        "bree_battleshout": "bree_battleshout (Battle Shout)",
        "bree_intimidate2": "bree_intimidate2 (Intimidate)"
    },
    EffectTrail: {
        "arrow1": "arrow1 (Aimed Shot)",
        "arrow2": "arrow2 (Multishot)",
        "arrow3": "arrow3 (Corrupt Harpoons)",
        "arrow4": "arrow4 (Burning Shot)",
        "arrow5": "arrow5 (Frost Volley)",
        "arrow6": "arrow6 (Snipe)",
        "axe": "axe (Tomahawk)",
        "axe2": "axe2 (Frozen Tomahawk)",
        "bullet": "bullet (Bullet Shot)",
        "bullet2": "bullet2 (Cannon Shot)",
        "coldsparktrail": "coldsparktrail (Cold Spark)",
        "coldtrail1": "coldtrail1 (Ice Lance)",
        "coldtrail2": "coldtrail2 (Frostbolt)",
        "cornietrail": "cornietrail (Popcorn Burst)",
        "cornietrailfire": "cornietrailfire (Popcorn Burst)",
        "dart": "dart (Poison Dart)",
        "elementalbolt": "elementalbolt (Elemental Bolt)",
        "firetrail1": "firetrail1 (Fire Blast)",
        "firetrail2": "firetrail2 (Ignite)",
        "firetrail3": "firetrail3 (Fireball)",
        "firetrail4": "firetrail4 (Pyroblast)",
        "firetrailpet": "firetrailpet (Bouncy Embers)",
        "flask1": "flask1 (Poison Catalyst)",
        "flower": "flower (Flower Shuriken)",
        "holyshadowtrail1": "holyshadowtrail1 (Yin Yang Bolt)",
        "holytrail1": "holytrail1 (Holy Blast)",
        "holytrailt": "holytrailt (Holy Splash)",
        "icytornado": "icytornado (Icy Tornado)",
        "lightningball": "lightningball (Stun Grenade)",
        "lightningtrail1": "lightningtrail1 (Zap)",
        "mindtrail1": "mindtrail1 (Mind Blast)",
        "poisontrail": "poisontrail (Poison Splash)",
        "poisontrail2": "poisontrail2 (Poison Splash)",
        "roottrail": "roottrail (Fungus Root)",
        "sawblade": "sawblade (Saw Blade)",
        "shadowtrail1": "shadowtrail1 (Dark Pact)",
        "shadowtrail2": "shadowtrail2 (Dark Outbreak)",
        "shadowtrail3": "shadowtrail3 (Terrorize)",
        "shadowtrail4": "shadowtrail4 (Ruin Bolt)",
        "shadowtraildrain": "shadowtraildrain (Drain Life)",
        "sheeptrail": "sheeptrail (Awful Tantrum)",
        "shieldtrail": "shieldtrail (Bouncing Shield)",
        "shiv1": "shiv1 (Shiv)",
        "shiv2": "shiv2 (Throw Knife)",
        "shivmind": "shivmind (Shiv)",
        "songtrail1": "songtrail1 (Sonar)",
        "songtrail2": "songtrail2 (Bewilder)",
        "songtrail3": "songtrail3 (Abyssal Sonata)",
        "stonetrail": "stonetrail (Give Fish)",
        "termitestrail": "termitestrail (Blood Infection)",
        "watertrail1": "watertrail1 (Water Jet)"
    },
    Effect: {
        "0": "0 (Ethereal Weapons)",
        "amplify": "amplify (Amplifying Field)",
        "arcane": "arcane (Arcane Conduit)",
        "artillery": "artillery (Heavy Artillery)",
        "barbedwire": "barbedwire (Barbed Wire)",
        "barbercuts": "barbercuts (Barber Cuts)",
        "barkskin": "barkskin (Barkskin)",
        "barkskinboss": "barkskinboss (Barkskin)",
        "bite": "bite (Bite)",
        "blackpyre": "blackpyre (Black Pyre)",
        "bleed": "bleed (Bloodguard)",
        "bless": "bless (Golden Bell)",
        "bless2": "bless2 (Celestial Wrath)",
        "blobimpact": "blobimpact (Bleed)",
        "blossom": "blossom (Blossom)",
        "blowup": "blowup (Unstable Core)",
        "blueburnsmall": "blueburnsmall (Blue Flame)",
        "bluntdown": "bluntdown (Mole Buster)",
        "bluntdowncrack": "bluntdowncrack (Stampede)",
        "bluntdowncrackvul": "bluntdowncrackvul (Ground Slam)",
        "bluntdowninvig": "bluntdowninvig (Invigorating Blow)",
        "bluntdownover": "bluntdownover (Overwhelm)",
        "bluntfront": "bluntfront (Bludgeon)",
        "bluntfrontcrack": "bluntfrontcrack (Siege Breaker)",
        "bluntfrontdaze": "bluntfrontdaze (Maim)",
        "blunthead": "blunthead (Headbutt)",
        "bluntlatcrack": "bluntlatcrack (Pommel)",
        "bluntlatvul": "bluntlatvul (Subjugation)",
        "bluntpunch": "bluntpunch (Whack)",
        "bluntshield": "bluntshield (Shield Bash)",
        "bluntshieldrat": "bluntshieldrat (Royal Ram)",
        "boarshield": "boarshield (Bristly Fur)",
        "bossdark": "bossdark (Anathema)",
        "bossholy": "bossholy (Apotheosis)",
        "bossmind": "bossmind (Abstraction)",
        "buffer": "buffer (Avoidance Collar)",
        "bulletconc": "bulletconc (Concussive Shot)",
        "bulletimpact": "bulletimpact (Bullet Shot)",
        "bulletimpact2": "bulletimpact2 (Cannon Shot)",
        "bulletscat": "bulletscat (Scattershot)",
        "burn": "burn (Itchy Burn)",
        "burnsmall": "burnsmall (Burning Weapons)",
        "caltrops": "caltrops (Caltrops)",
        "chargedclaw": "chargedclaw (Charged Claws)",
        "chilling": "chilling (Chilling Gaze)",
        "circuit": "circuit (Circuit Overload)",
        "coat": "coat (Menacing Roar)",
        "coat2": "coat2 (Coat of Arms)",
        "cocoon": "cocoon (Cocoon)",
        "coldcast3": "coldcast3 (Cold Snap)",
        "coldcast4": "coldcast4 (Ice Fall)",
        "coldcastnovaburst": "coldcastnovaburst (Fishplosion)",
        "coldimpact1": "coldimpact1 (Icicle)",
        "coldimpact2": "coldimpact2 (Cold Rune)",
        "coldimpact2b": "coldimpact2b (Chilling Gaze)",
        "coldimpact3": "coldimpact3 (Flash Freeze)",
        "coldimpactblizz": "coldimpactblizz (Blizzard)",
        "coldimpactcomet": "coldimpactcomet (Ice Comet)",
        "coldimpactsquall": "coldimpactsquall (Squall)",
        "coldimpactwind": "coldimpactwind (Winter Is Coming)",
        "coldmpac2": "coldmpac2 (Icy Splash)",
        "coldslashbleed": "coldslashbleed (Acrobatic Strike)",
        "coldsparkimpact": "coldsparkimpact (Cold Spark)",
        "consecrationimp": "consecrationimp (Consecration)",
        "cornieimpa": "cornieimpa (Popcorn Burst)",
        "cornieimpafire": "cornieimpafire (Popcorn Burst)",
        "courage": "courage (Anthem of Hope)",
        "courageinspire": "courageinspire (Anthem of Hope)",
        "cremation": "cremation (Dark Cremation)",
        "dampen": "dampen (Dampen Magic)",
        "darkembrace": "darkembrace (Dark Embrace)",
        "darklightningimpact": "darklightningimpact (Dark Lightning)",
        "deadlystrikes": "deadlystrikes (Deadly Strikes)",
        "defend": "defend (Helmet)",
        "deflect": "deflect (Deflect)",
        "desecrationimp": "desecrationimp (Dreadful Wave)",
        "disengage": "disengage (Maneuver)",
        "dispel": "dispel (Clarity)",
        "dispelinspire": "dispelinspire (Clarity)",
        "divinepower": "divinepower (Divine Power)",
        "doomsday": "doomsday (Apocalypse)",
        "dragonbite": "dragonbite (Dragon Bite)",
        "dryadcast1": "dryadcast1 (Lunar Grace)",
        "dtheinerbeam": "dtheinerbeam (Reactive Laser)",
        "dtlasers": "dtlasers (Reactive Laser)",
        "dualwield": "dualwield (Double Shot)",
        "eardestroyer": "eardestroyer (Ear Destroyer)",
        "earthwaveimpact": "earthwaveimpact (Shield Slam)",
        "electricweapon": "electricweapon (Electric Weapons)",
        "elementalboltimp": "elementalboltimp (Elemental Bolt)",
        "elementalnovaimp": "elementalnovaimp (Elemental Wave)",
        "energy": "energy (Catharsis)",
        "energyblue": "energyblue (Innervate)",
        "energydelay": "energydelay (Delay Response)",
        "energyinspire": "energyinspire (Meditate)",
        "energyshadow": "energyshadow (Fanaticism)",
        "etherealweapon": "etherealweapon (Ethereal Weapons)",
        "evasion": "evasion (Avoidance Collar)",
        "fatedfuture": "fatedfuture (Fated Future)",
        "feint": "feint (Feint)",
        "fieryshield": "fieryshield (Ardent Guard)",
        "fieryweapon": "fieryweapon (Fiery Weapons)",
        "fireash": "fireash (Ash Storm)",
        "firebrand": "firebrand (Belphyor's Brand)",
        "firebrand2": "firebrand2 (Belphyor's Brand)",
        "fireburst": "fireburst (Lava Bursts)",
        "firecast3": "firecast3 (Solar Flare)",
        "firecast5": "firecast5 (Grimoire of Flames)",
        "fireclaw2": "fireclaw2 (Fire Claw)",
        "firefan": "firefan (Fan the Flames)",
        "fireheal": "fireheal (Cauterize)",
        "fireimpact1": "fireimpact1 (Fire Blast)",
        "fireimpact2": "fireimpact2 (Flare)",
        "fireimpact3": "fireimpact3 (Fireball)",
        "fireimpact4": "fireimpact4 (Pyroblast)",
        "fireimpact6": "fireimpact6 (Combustion)",
        "fireimpactblunt": "fireimpactblunt (Blazing Strike)",
        "fireimpactdisint": "fireimpactdisint (Disintegrate)",
        "fireimpactmeteor": "fireimpactmeteor (Meteorite)",
        "fireimpactnova": "fireimpactnova (Searing Nova)",
        "fireimpactslash": "fireimpactslash (Fire Slash)",
        "fireimpactstorm": "fireimpactstorm (Emberstorm)",
        "fireimpactstrike": "fireimpactstrike (Flamestrike)",
        "firepower": "firepower (Unstable Core)",
        "fireproof": "fireproof (Fireproof)",
        "fireroot": "fireroot (Magma Prison)",
        "firesummon": "firesummon (Summon Imp)",
        "flowerimpact": "flowerimpact (Flower Shuriken)",
        "followup": "followup (Follow-up)",
        "followup2": "followup2 (Perfect Parry)",
        "followupy": "followupy (Feed The Rich)",
        "frostweapon": "frostweapon (Cold Weapons)",
        "furiousylmer": "furiousylmer (Furious Ylmer)",
        "fury": "fury (Berserk Potion)",
        "geyserimpact": "geyserimpact (Geyser)",
        "grandcrossholy": "grandcrossholy (Heresy)",
        "grandcrossholybig": "grandcrossholybig (Crucifixion)",
        "grandcrossholysmall": "grandcrossholysmall (Luminous Barrier)",
        "grandcrossshadow": "grandcrossshadow (Blasphemy)",
        "grandcrossshadowbig": "grandcrossshadowbig (Grand Cross)",
        "grandcrossshadowsmall2": "grandcrossshadowsmall2 (Obscure Barrier)",
        "gravity": "gravity (Crushing Darkness)",
        "green": "green (Sausage Factory)",
        "green2": "green2 (Unwavering)",
        "guard": "guard (Crusader Helmet)",
        "guard2": "guard2 (Protect)",
        "guardianangel": "guardianangel (Guardian Angel)",
        "guardsmall": "guardsmall (Defensive Strategy)",
        "healcast1": "healcast1 (Flash Heal)",
        "healerself": "healerself (Expected Prophecy)",
        "healerself2": "healerself2 (Prescription)",
        "healerself2y": "healerself2y (Give To The Poor)",
        "healimpact1": "healimpact1 (Flash Heal)",
        "healimpact2": "healimpact2 (Bulk Heal)",
        "healimpactbless": "healimpactbless (Benediction)",
        "healimpactchain": "healimpactchain (Binding Heal)",
        "healimpactcourage": "healimpactcourage (Ray of Hope)",
        "healimpactfast": "healimpactfast (Desperate Prayer)",
        "healimpactinspire": "healimpactinspire (Greater Heal)",
        "healimpactsmall": "healimpactsmall (Ankh of Life)",
        "healimpactvitality": "healimpactvitality (Vitalize)",
        "healrain": "healrain (Healing Rain)",
        "healsecondwind": "healsecondwind (Second Wind)",
        "healtotem": "healtotem (Life Totem)",
        "healvac": "healvac (Vaccine)",
        "heart": "heart (Love Enhancer)",
        "heartbattle": "heartbattle (Warcry)",
        "heartcourage": "heartcourage (Unwavering Faith)",
        "heartstock": "heartstock (Stockade)",
        "heavenly": "heavenly (Heavenly Blessing)",
        "heavy": "heavy (Heavy Metal)",
        "heinerbeam2": "heinerbeam2 (Fusion Laser)",
        "heinerbeam2m": "heinerbeam2m (Reactive Laser)",
        "heinerbeamimp": "heinerbeamimp (Heat Laser)",
        "hellfire": "hellfire (Hellfire)",
        "hellflame": "hellflame (Hellflame)",
        "hellflame2": "hellflame2 (Hellflame)",
        "hellmark": "hellmark (Hell Mark)",
        "holybapt": "holybapt (Baptism)",
        "holybeam": "holybeam (Dawn Punishment)",
        "holybeamimp": "holybeamimp (Radiant Burst)",
        "holybeamimp2": "holybeamimp2 (Dawn Punishment)",
        "holycast1": "holycast1 (Dawnlight)",
        "holycast2": "holycast2 (Holy Crusader)",
        "holycast2b": "holycast2b (Divine Retribution)",
        "holycross": "holycross (Divine Retribution)",
        "holycrosssmall": "holycrosssmall (Law of Light)",
        "holydawn": "holydawn (Dawnlight)",
        "holyfireimpact1": "holyfireimpact1 (Holy Fire)",
        "holyimpact": "holyimpact (Holy Splash)",
        "holyimpact1": "holyimpact1 (Flash)",
        "holyimpact2": "holyimpact2 (Dawnlight)",
        "holyimpact3": "holyimpact3 (Holy Blast)",
        "holyimpact4": "holyimpact4 (Celestial Brilliance)",
        "holyimpact5": "holyimpact5 (Crescent Light)",
        "holyimpactstorm": "holyimpactstorm (Holy Storm)",
        "holyinsight": "holyinsight (Divine Insight)",
        "holyoppresion": "holyoppresion (Holy Lance)",
        "holyshadowimpact1": "holyshadowimpact1 (Yin Yang Bolt)",
        "holyshot": "holyshot (Holy Barrage)",
        "holyslash2": "holyslash2 (Sacred Rancor)",
        "holyslashbleed": "holyslashbleed (Holy Slash)",
        "holysymbol": "holysymbol (Holy Symbol)",
        "holysymbol2": "holysymbol2 (Divine Intervention)",
        "iceclawperni": "iceclawperni (Pernicious Claw)",
        "iceclaws": "iceclaws (Frenzied Carnage)",
        "iceclawsbleed": "iceclawsbleed (Flanking Strike)",
        "iceclawsnatch": "iceclawsnatch (Snatching Claw)",
        "icytornado": "icytornado (Cyclone Slash)",
        "ignienchant": "ignienchant (Blue Flame)",
        "inspire": "inspire (Fountain Pen)",
        "insulate": "insulate (Prismatic Field)",
        "intercept": "intercept (Intercept)",
        "invis": "invis (Fade)",
        "invulnerable": "invulnerable (Holy Symbol)",
        "jammer": "jammer (Shield Jammer)",
        "lasers": "lasers (Fusion Laser)",
        "lasersh": "lasersh (Dawn Punishment)",
        "lasersm": "lasersm (Reactive Laser)",
        "laserss": "laserss (Dusk Punishment)",
        "lastguardian": "lastguardian (Last Guardian)",
        "leafclaw": "leafclaw (Thorneater)",
        "leafclawfire": "leafclawfire (Leaf Claw)",
        "lifebloom": "lifebloom (Lifebloom)",
        "lightningcast2": "lightningcast2 (Electricity Manual)",
        "lightningcastbattery": "lightningcastbattery (Child of the Storm)",
        "lightningimpact": "lightningimpact (Electric Splash)",
        "lightningimpact1": "lightningimpact1 (Lightning Rune)",
        "lightningimpact1b": "lightningimpact1b (Electric Weapons)",
        "lightningimpact2": "lightningimpact2 (Charge Battery)",
        "lightningimpact3": "lightningimpact3 (Ball Lightning)",
        "lightningimpact4": "lightningimpact4 (Chain Lightning)",
        "lightningimpact4b": "lightningimpact4b (Thunder Rune)",
        "lightnlightningimpact3ingimpact": "lightnlightningimpact3ingimpact (Electrocute)",
        "mageself": "mageself (Shifting Scroll)",
        "mageself2": "mageself2 (Meditate)",
        "manashield": "manashield (Scroll of Defense)",
        "mark": "mark (Heavy Artillery)",
        "marksight": "marksight (Sneak Peek)",
        "marksightvul": "marksightvul (Intimidate)",
        "mindcast1": "mindcast1 (Silencing Aura)",
        "mindimpact1": "mindimpact1 (Clairvoyance)",
        "mindimpact2": "mindimpact2 (Mind Twist)",
        "mindimpact3": "mindimpact3 (Mind Blast)",
        "mindimpact4": "mindimpact4 (Pandemonium)",
        "mindimpact5": "mindimpact5 (Mesmeric Mirage)",
        "mindimpactener": "mindimpactener (Enervate)",
        "missileimpact": "missileimpact (Missile Barrage)",
        "moonbeamimpact": "moonbeamimpact (Moon Beam)",
        "mooncatalyst": "mooncatalyst (Moon Catalyst)",
        "moonfire": "moonfire (Moonfire)",
        "moonguardcast2": "moonguardcast2 (Moon Guard)",
        "moonguardhero": "moonguardhero (Wolfskin Cloak)",
        "mysticalice": "mysticalice (Mystical Ice)",
        "nightterror": "nightterror (Night Terror)",
        "nukeimpact": "nukeimpact (Tactical Nuke)",
        "onslaught": "onslaught (Grudge)",
        "orange": "orange (Berserker Armor)",
        "orange2": "orange2 (Dark Rancor)",
        "overgrow": "overgrow (Overgrowth)",
        "panacea": "panacea (Panacea)",
        "parry": "parry (Parry)",
        "phoenix": "phoenix (Phoenix)",
        "phoenix2": "phoenix2 (Phoenix)",
        "piegreen1": "piegreen1 (Sharpening Knife)",
        "piegreenback": "piegreenback (Backstab)",
        "piegreenexpose": "piegreenexpose (Expose Armor)",
        "piegreenpoison": "piegreenpoison (Noxious Injection)",
        "pieimpale": "pieimpale (Puncture)",
        "pieimpale2": "pieimpale2 (Impale)",
        "pieimpale3": "pieimpale3 (Impale)",
        "pierupture": "pierupture (Rupture)",
        "poison": "poison (Venom Flask)",
        "poisonblood": "poisonblood (Blood Infection)",
        "poisonburst": "poisonburst (Vile Gas)",
        "poisoncast": "poisoncast (Acid Rain)",
        "poisoncatalyst": "poisoncatalyst (Hatch)",
        "poisonimpact": "poisonimpact (hanscorr)",
        "poisonneuro": "poisonneuro (Neurotoxin)",
        "poisonvirulent": "poisonvirulent (Broodmother)",
        "powerful": "powerful (Archmage Book)",
        "powerfulrat": "powerfulrat (Rings of Power)",
        "powerfultat": "powerfultat (Rings of Power)",
        "praisebeam": "praisebeam (Praise the Sun)",
        "praisethesun": "praisethesun (Praise the Sun)",
        "prismaward": "prismaward (Elemental Ward)",
        "prolifench": "prolifench (Elemental Proliferation)",
        "purple": "purple (Obscure Barrier)",
        "rabid": "rabid (Rabid)",
        "rain": "rain (Rain)",
        "rainthornsimpact": "rainthornsimpact (Rain of Thorns)",
        "rangedimpact1": "rangedimpact1 (Rapid Fire)",
        "rangedimpact2": "rangedimpact2 (Aimed Shot)",
        "rangedimpact3": "rangedimpact3 (Feather Barrage)",
        "rangedimpact4": "rangedimpact4 (Ricochet)",
        "rangedimpact5": "rangedimpact5 (Snipe)",
        "rangedimpact6": "rangedimpact6 (Sniper Shot)",
        "rangedimpact7": "rangedimpact7 (Barrage)",
        "rangedimpactpoison1": "rangedimpactpoison1 (Corrupt Harpoons)",
        "rangedimpactpoison2": "rangedimpactpoison2 (Poison Dart)",
        "rangerself": "rangerself (Ammunition)",
        "rangerself2": "rangerself2 (Ambidextrous)",
        "rapidreaction": "rapidreaction (Hidden Hand)",
        "ratbite": "ratbite (Slave Rats)",
        "redstorm": "redstorm (Dual Wield)",
        "regen": "regen (Encore)",
        "regeneration": "regeneration (Hydra Blood)",
        "reinforcepowerful": "reinforcepowerful (Herding)",
        "repair": "repair (Ironclad)",
        "rootcastylmer": "rootcastylmer (Wild Roots)",
        "rootimpact": "rootimpact (Wild Roots)",
        "rootimpactsmall": "rootimpactsmall (Regrowth)",
        "rootimpale": "rootimpale (Fungus Root)",
        "sacredlightningimpact": "sacredlightningimpact (Sacred Lightning)",
        "safeguard": "safeguard (Entrench)",
        "safeguardinsp": "safeguardinsp (Trustworthy)",
        "sanctuary": "sanctuary (Holy Aegis)",
        "serratedweapons": "serratedweapons (Riposte)",
        "shadowbeam": "shadowbeam (Dusk Punishment)",
        "shadowbeamimp": "shadowbeamimp (Gloomy Burst)",
        "shadowbeamimp2": "shadowbeamimp2 (Dusk Punishment)",
        "shadowcast3b": "shadowcast3b (Infestation)",
        "shadowcondem": "shadowcondem (Condemnation)",
        "shadowench1": "shadowench1 (Yin Ritual)",
        "shadowench2": "shadowench2 (Black Talons)",
        "shadowench3": "shadowench3 (Abyssal Revenge)",
        "shadowench4": "shadowench4 (Cursemancy)",
        "shadowheal": "shadowheal (Shadow Mend)",
        "shadowimpact1": "shadowimpact1 (Dark Pact)",
        "shadowimpact2": "shadowimpact2 (Black Karma)",
        "shadowimpact3": "shadowimpact3 (Dark Outbreak)",
        "shadowimpact4": "shadowimpact4 (Black Hole)",
        "shadowimpact6": "shadowimpact6 (Profane)",
        "shadowimpact7": "shadowimpact7 (Vile Lance)",
        "shadowimpact8": "shadowimpact8 (Ruin Bolt)",
        "shadowimpactdecay": "shadowimpactdecay (Curse of Decay)",
        "shadowimpactdrain": "shadowimpactdrain (Vampiric Touch)",
        "shadowimpactelements": "shadowimpactelements (Curse of Elements)",
        "shadowimpacteye": "shadowimpacteye (Bad Augury)",
        "shadowimpactfragil": "shadowimpactfragil (Curse of Fragility)",
        "shadowimpactslow": "shadowimpactslow (Curse of Exhaustion)",
        "shadowimpactsmall": "shadowimpactsmall (Blackguard)",
        "shadowimpactsmall2": "shadowimpactsmall2 (Cursed Water)",
        "shadowimpactstorm": "shadowimpactstorm (Unholy Storm)",
        "shadowimpactvul": "shadowimpactvul (Candy)",
        "shadowimpactweak": "shadowimpactweak (Curse of Weakness)",
        "shadowmindimpact1": "shadowmindimpact1 (Hallucination)",
        "shadownovaimpact": "shadownovaimpact (Dark Outburst)",
        "shadowoppresion": "shadowoppresion (Caustic Beam)",
        "shadowputre": "shadowputre (Putrefaction)",
        "shadowreach": "shadowreach (Death's Reach)",
        "shadowself": "shadowself (Dark Miasma)",
        "shadowself2": "shadowself2 (Demonic Tutor)",
        "shadowshot": "shadowshot (Dark Shot)",
        "shadowslashh2": "shadowslashh2 (Dark Rancor)",
        "shadowslashpoison": "shadowslashpoison (Shadow Slash)",
        "sharp": "sharp (Sharpen)",
        "Shatter": "Shatter (Cold Snap)",
        "shear": "shear (Shear)",
        "sheepbite": "sheepbite (Killer Bite)",
        "sheepimpact": "sheepimpact (Awful Tantrum)",
        "sheepshield": "sheepshield (Woolly Shell)",
        "shield1": "shield1 (Barrier)",
        "shield2": "shield2 (Save It For Later)",
        "shieldbuffer": "shieldbuffer (Protect from Evil)",
        "shieldcourage": "shieldcourage (Infuse Courage)",
        "shieldheal": "shieldheal (Pain Suppression)",
        "shieldheart": "shieldheart (Holy Aegis)",
        "shieldimpact": "shieldimpact (Bouncing Shield)",
        "shieldwall": "shieldwall (Shield Wall)",
        "shivmindimpact": "shivmindimpact (Ethereal Knives)",
        "sight": "sight (Clairvoyant Scroll)",
        "silentbacklash": "silentbacklash (Silencing Aura)",
        "skillful": "skillful (Skillful)",
        "slashcarnage": "slashcarnage (Gut Ripper)",
        "slashdevast": "slashdevast (Devastate)",
        "slashevisc": "slashevisc (Blade Flurry)",
        "slashfurious": "slashfurious (Unleashed)",
        "slashgreen1": "slashgreen1 (Double Slash)",
        "slashgreenblade1": "slashgreenblade1 (Blade Dance)",
        "slashgreenbleed": "slashgreenbleed (Sickle Slash)",
        "slashgreencorrupt": "slashgreencorrupt (Vile Gash)",
        "slashgreendebil": "slashgreendebil (Debilitate)",
        "slashgreendual": "slashgreendual (Dual Strike)",
        "slashgreenpoison": "slashgreenpoison (Toxic Retaliation)",
        "slashgreenviper": "slashgreenviper (Poisonous Assault)",
        "slashimpact": "slashimpact (Axe Sweep)",
        "slashimpactbleed": "slashimpactbleed (Bloody Cleave)",
        "slashmortal": "slashmortal (Mortal Strike)",
        "slashred1": "slashred1 (Bloodguard)",
        "slashred1parry": "slashred1parry (Perfect Parry)",
        "slashredbleed1": "slashredbleed1 (Wristcutter)",
        "slashredbleed2": "slashredbleed2 (Flay)",
        "slashredbleed3": "slashredbleed3 (Bloodsucker)",
        "slashslow": "slashslow (Hamstring)",
        "slashsweep": "slashsweep (Sweeping Strike)",
        "slashwhirlimpact": "slashwhirlimpact (Whirlwind)",
        "slicemark": "slicemark (Riposte)",
        "slow": "slow (Howl)",
        "slowvul": "slowvul (Terrorizing Howl)",
        "songballad1": "songballad1 (Ballad of Evasion)",
        "songballad2": "songballad2 (Ballad of Conquest)",
        "songcast1": "songcast1 (Panic Scream)",
        "songcast3": "songcast3 (Sonar)",
        "songcast3small": "songcast3small (Heavy Metal)",
        "songimpact1": "songimpact1 (Psychic Scream)",
        "songimpact2": "songimpact2 (Bewilder)",
        "songimpact3": "songimpact3 (Dragon Roar)",
        "songimpact4": "songimpact4 (Payback)",
        "songimpact5": "songimpact5 (Abyssal Sonata)",
        "songimpact5small": "songimpact5small (Sonar)",
        "songimpact5small2": "songimpact5small2 (Heavy Metal)",
        "songimpact6": "songimpact6 (Tedious Poem)",
        "songself": "songself (Tune Up)",
        "songself1a": "songself1a (Melodic Rhythm)",
        "songself2": "songself2 (Music Sheet)",
        "songself3a": "songself3a (Encore)",
        "songsere1": "songsere1 (Vitalizing Serenade)",
        "songsere2": "songsere2 (Healing Serenade)",
        "songsere3": "songsere3 (Energizing Serenade)",
        "sparklat": "sparklat (Storm Ward)",
        "speed1": "speed1 (Cloak of Speed)",
        "speed2": "speed2 (Scroll of Speed)",
        "spellecho": "spellecho (Spell Echo)",
        "spikeshield": "spikeshield (Spiked Shield)",
        "sprout": "sprout (Crescent Moon)",
        "sprout2": "sprout2 (Living Forest)",
        "starfall": "starfall (Starfall)",
        "starfall2": "starfall2 (Starry Night)",
        "stars": "stars (Beer Mug)",
        "stealth": "stealth (Dark Hood)",
        "stealthdispel": "stealthdispel (Vanish)",
        "stealthevasion": "stealthevasion (Blur)",
        "stealthhaste": "stealthhaste (Stalking)",
        "stealthsharp": "stealthsharp (Burrow)",
        "stealthstep": "stealthstep (Shadowstep)",
        "steelforge": "steelforge (Steel Forge)",
        "steelforgem": "steelforgem (Bulwark)",
        "steelskin": "steelskin (Steelskin)",
        "stockades": "stockades (Palisade)",
        "stoneskin": "stoneskin (Stoneskin)",
        "storm": "storm (Endless Storm)",
        "subterfuge": "subterfuge (Hide and Seek)",
        "taim": "taim (Taking Aim)",
        "taim2": "taim2 (Taking Aim)",
        "talons": "talons (Black Talons)",
        "termitesimpact": "termitesimpact (Frenzied Termites)",
        "thechosenone": "thechosenone (Paranoia)",
        "thorns": "thorns (Garden of Thorns)",
        "thornshield": "thornshield (Thousand Needles)",
        "thunderclap": "thunderclap (Thunderclap)",
        "tormentimpact": "tormentimpact (Quill Rain)",
        "toxicrain": "toxicrain (Toxic Rain)",
        "tranquility": "tranquility (Tranquility)",
        "tuskbarrageimp": "tuskbarrageimp (Tusk Barrage)",
        "tuskbarrageimp2": "tuskbarrageimp2 (Stinger Launcher)",
        "tuskcharge": "tuskcharge (Tusk Charge)",
        "unwave": "unwave (Unwavering Faith)",
        "valiant": "valiant (Valiant Defender)",
        "viciousbite": "viciousbite (Vicious Bite)",
        "viciousbite2": "viciousbite2 (Wild Bite)",
        "viciousbite3": "viciousbite3 (Hydra Bite)",
        "vitalitydrain": "vitalitydrain (Vitality Drain)",
        "vulnerable": "vulnerable (Demonic Tutor)",
        "warriorself": "warriorself (Shake it off!)",
        "warriorself2": "warriorself2 (Arsenal)",
        "warriorself2pillage": "warriorself2pillage (Pillage)",
        "warriorself3": "warriorself3 (Last Stand)",
        "waterimpact1": "waterimpact1 (Dilute)",
        "waterimpactsmall": "waterimpactsmall (Bucket)",
        "watering": "watering (Watering)",
        "weak": "weak (Demonic Tutor)",
        "weakvul": "weakvul (Death's Door)",
        "web": "web (Fishing Net)",
        "whiteburn": "whiteburn (White Flames)",
        "whiteburnsmall": "whiteburnsmall (White Flame)",
        "wildhunt": "wildhunt (Wild Hunt)",
        "wildhuntm": "wildhuntm (Wild Hunt)",
        "wolfguard": "wolfguard (Wolf Guard)",
        "yangritual": "yangritual (Lunar Grace)",
        "yangritual2": "yangritual2 (Hydra Blood)",
        "yellow": "yellow (Luminous Barrier)",
        "yoggermeati": "yoggermeati (Cull the Weak)"
    },
    ItemTarget: {
        "Self": "Self",
        "RandomHero": "Random Hero",
        "RandomEnemy": "Random Enemy",
        "AllHero": "All Heroes",
        "AllEnemy": "All Enemies",
        "CurrentTarget": "Current Target",
        "SelfEnemy": "SelfEnemy (??? e.g. Hexproof)",
        "HighestFlatHpHero": "Highest HP Hero",
        "LowestFlatHpHero": "Lowest HP Hero",
        "HighestFlatHpEnemy": "Highest HP Enemy",
        "LowestFlatHpEnemy": "Lowest HP Enemy",
        "Random": "Random"
    },
    CharacterStat: {
        "None": "None",
        "Hp": "Hp",
        "Speed": "Speed",
        "Energy": "Energy",
        "EnergyTurn": "Energy per Turn"
    },
    EventActivation: {
        "None": "None",
        "BeginCombat": "Start of Combat",
        "BeginCombatEnd": "End of Combat",
        "BeginRound": "Start of Round",
        "EndRound": "End of Round",
        "BeginTurn": "Start of Hero Turn",
        "EndTurn": "End of Hero Turn",
        // "DrawCard": "Draw Card", // can't actually see code referencing this value?
        // "CastCard": "Cast Card", // no vanilla examples
        "FinishCast": "After Casting Card",  // e.g. thorn proliferation
        "medsEmptyHand": "When Hand Emptied",
        "Hit": "Hero Hits Enemy",
        "Hitted": "Enemy Hits Hero",
        "Block": "Hero Blocks",
        "Blocked": "Enemy Blocks?",
        "Evade": "Hero Evades",
        "Evaded": "Enemy Evades?",
        "Heal": "Hero Heals",
        "Healed": "Hero is Healed",
        "AuraCurseSet": "Hero Applies Aura/Curse...",
        // "CharacterAssign": "CharacterAssign (??)",
        "Damage": "Hero Damages Enemy",
        "Damaged": "Enemy Damages Hero",
        "Killed": "Hero is Killed" //, // e.g. scroll of resurrection!
        // "CorruptionCombatStart": "Corruption: Start of Combat", // e.g. ironclad
        // "CorruptionBeginRound": "Corruption: Start of Round", // e.g. armageddon, hexproof
        // "PreBeginCombat": "PreBeginCombat (??)", // ?? all of these look like they could be None
        // "BeginTurnCardsDealt": "BeginTurnCardsDealt (??)", // after cards are dealt, e.g. for energy reduction
        // "BeginTurnAboutToDealCards": "BeginTurnAboutToDealCards (??)", // used to add cards to hand? e.g. dart pouch, large pouch, meat bag, searing dagger, stormcaller feather
        // "DestroyItem": "DestroyItem (??)",
        // "DamagedSecondary": "DamagedSecondary (??)",
        // "FinishFinishCast": "FinishFinishCast (??)", // infestation, world in flames?
        // "PreFinishCast": "PreFinishCast (??)", // used to duplicate the card being cast, e.g. double bubble, spell echo, mirror
        // "Resurrect": "Resurrect (??)", // on resurrection?
        // "ItemActivation": "ItemActivation (??)",
        // "TraitActivation": "TraitActivation (??)",
        // "CharacterKilled": "CharacterKilled (??)"
    }
});
const vanillaCardList = {
    "No": {
        "absorption": "Absorption",
        "abyssalsonataspecial": "Abyssal Sonata",
        "acolytetunic": "Acolyte Tunic",
        "acrobaticstrike": "Acrobatic Strike",
        "adrenaline": "Adrenaline",
        "advancedhandbook": "Advanced Handbook",
        "adventureawaits": "Adventure Awaits",
        "agateamulet": "Agate Amulet",
        "aimedshot": "Aimed Shot",
        "alarmbell": "Alarm Bell",
        "albatrosspendant": "Albatross Pendant",
        "allin": "All In",
        "allseeingamulet": "All-seeing Amulet",
        "amberamulet": "Amber Amulet",
        "ambidextrous": "Ambidextrous",
        "ambush": "Ambush",
        "amethystring": "Amethyst Ring",
        "ammunitions": "Ammunition",
        "amuletofprotection": "Amulet of Protection",
        "amuletofspeed": "Amulet of Speed",
        "amuletofthorns": "Amulet of Thorns",
        "ankhoflife": "Ankh of Life",
        "anklebiteitem": "Ankle Bite",
        "annoyingwhistle": "Annoying Whistle",
        "anthemofhope": "Anthem of Hope",
        "antimagicfieldspecial": "Antimagic Field",
        "antiquefigurine": "Antique Figurine",
        "aquamarinebracelet": "Aquamarine Bracelet",
        "arcaneconduit": "Arcane Conduit",
        "architectsring": "Architect's Ring",
        "archmagebook": "Archmage Book",
        "arenachampion": "Arena Champion",
        "arsenal": "Arsenal",
        "asmody": "Asmody",
        "assassintools": "Assassin Tools",
        "astralhowlpet": "Astral Howl",
        "atonement": "Atonement",
        "atonementstart": "Atonement",
        "avoidancecollar": "Avoidance Collar",
        "awfultantrumitem": "Awful Tantrum",
        "backstab": "Backstab",
        "badaugury": "Bad Augury",
        "bakem": "Bake",
        "balllightning": "Ball Lightning",
        "ballofwool": "Ball of Wool",
        "balladofconquest": "Ballad of Conquest",
        "balladofevasion": "Ballad of Evasion",
        "bandages": "Bandages",
        "bane": "Bane",
        "banish": "Banish",
        "banishstart": "Banish",
        "baptism": "Baptism",
        "barbedwire": "Barbed Wire",
        "barrage": "Barrage",
        "barricade": "Barricade",
        "barrier": "Barrier",
        "bass": "Bass",
        "basthetsgrace": "Basthet's Grace",
        "bastion": "Bastion",
        "battleaxe": "Battle Axe",
        "battleplan": "Battle Plan",
        "battleshout": "Battle Shout",
        "beermug": "Beer Mug",
        "bell": "Bell",
        "belphyorpipe": "Belphyor's Pipe",
        "benediction": "Benediction",
        "berserkpotion": "Berserk Potion",
        "berserkerclaw": "Berserker Claw",
        "betty": "Betty",
        "bewilderspecial": "Bewilder",
        "bindingheal": "Binding Heal",
        "birdofprey": "Bird of Prey",
        "blackdeath": "Black Death",
        "blackdeathstart": "Black Death",
        "blackdeck": "Black Deck",
        "blackhole": "Black Hole",
        "blackkarma": "Black Karma",
        "blackpyramid": "Black Pyramid",
        "blacktalons": "Black Talons",
        "blackguard": "Blackguard",
        "bladedance": "Blade Dance",
        "bladeflurry": "Blade Flurry",
        "bladestorm": "Blade Storm",
        "bleedout": "Bleed Out",
        "blizzard": "Blizzard",
        "bloodblobpet": "Blood Blob",
        "bloodfeeding": "Blood Feeding",
        "bloodforblood": "Blood For Blood",
        "bloodgoblet": "Blood Goblet",
        "bloodrain": "Blood Rain",
        "bloodsausage": "Blood Sausage",
        "bloodsplashpet": "Blood Splash",
        "bloodbath": "Bloodbath",
        "blooddguard": "Bloodguard",
        "bloodrage": "Bloodrage",
        "bloodseeker": "Bloodseeker",
        "bloodstone": "Bloodstone",
        "bloodsuckeritem": "Bloodsucker",
        "bloodsuckeritemb": "Bloodsucker",
        "bludgeon": "Bludgeon",
        "bluff": "Bluff",
        "blur": "Blur",
        "boneclaws": "Bone Claws",
        "bonering": "Bone Ring",
        "bonk": "Bonk",
        "bonkhammer": "Bonk Hammer",
        "bookofnightmares": "Book of Nightmares",
        "bookofthedead": "Book of the Dead",
        "bookworm": "Bookworm",
        "bootsofswiftness": "Boots of Swiftness",
        "bouncingshield": "Bouncing Shield",
        "bouncyembersitem": "Bouncy Embers",
        "brassamulet": "Brass Amulet",
        "brasslantern": "Brass Lantern",
        "breastplate": "Breastplate",
        "brigandarmor": "Brigand Armor",
        "broccoli": "Broccoli",
        "brokenbone": "Broken Bone",
        "brokenitem": "Broken Item",
        "bronzegear": "Bronze Gear",
        "bucket": "Bucket",
        "bulkheal": "Bulk Heal",
        "bulletshotm": "Bullet Shot",
        "bunny": "Bunny",
        "burialmask": "Burial Mask",
        "burneditem": "Burned Item",
        "burningblood": "Burning Blood",
        "burningorb": "Burning Orb",
        "burningshot": "Burning Shot",
        "burntcarp": "Burnt Carp",
        "butcherblock": "Butcher Block",
        "butchering": "Butchering",
        "butchersknife": "Butcher's Knife",
        "caltrops": "Caltrops",
        "camouflage": "Camouflage",
        "candy": "Candy",
        "captainshowl": "Captain's Howl",
        "captainshowlstart": "Captain's Howl",
        "captivatingvoice": "Captivating Voice",
        "carnage": "Carnage",
        "carp": "Carp",
        "carrot": "Carrot",
        "catharsis": "Catharsis",
        "cauterize": "Cauterize",
        "celestialbrillance": "Celestial Brilliance",
        "chainheal": "Chain Heal",
        "chainlightning": "Chain Lightning",
        "chainsaw": "Chainsaw",
        "chaliceofkings": "Chalice of Kings",
        "chaliceofqueens": "Chalice of Queens",
        "challengingshout": "Challenging Shout",
        "champy": "Champy",
        "changeweapon": "Change Weapon",
        "chantofaccuracy": "Chant of Accuracy",
        "chantofinitiative": "Chant of Initiative",
        "chaosblobpet": "Chaos Blob",
        "chaossplashpet": "Chaos Splash",
        "charge": "Charge",
        "chargebattery": "Charge Battery",
        "chargedtrident": "Charged Trident",
        "cheese": "Cheese",
        "childofthestorm": "Child of the Storm",
        "chillinggaze": "Chilling Gaze",
        "chompy": "Chompy",
        "chumpy": "Chumpy",
        "circleofhealing": "Circle of Healing",
        "circuitoverload": "Circuit Overload",
        "citadel": "Citadel",
        "clairvoyance": "Clairvoyance",
        "clairvoyanceitem": "Clairvoyance",
        "clairvoyanceitemb": "Clairvoyance",
        "clairvoyantscroll": "Clairvoyant Scroll",
        "clarity": "Clarity",
        "clearinstructions": "Clear Instructions",
        "cleave": "Cleave",
        "clergyamulet": "Clergy Amulet",
        "cloackofevasion": "Cloak of Evasion",
        "cloackofspeed": "Cloak of Speed",
        "cloudsong": "Cloudsong",
        "club": "Club",
        "coatofarms": "Coat of Arms",
        "coldbonegoblet": "Cold Bone Goblet",
        "coldbook": "Cold Book",
        "coldfeet": "Cold Feet",
        "coldrune": "Cold Rune",
        "coldsnap": "Cold Snap",
        "coldspark": "Cold Spark",
        "coldsparkstart": "Cold Spark",
        "colossalblow": "Colossal Blow",
        "combatbandages": "Combat Bandages",
        "combustion": "Combustion",
        "commandandconquer": "Command and Conquer",
        "concussiveshotm": "Concussive Shot",
        "condemnation": "Condemnation",
        "consecrated": "Consecrated",
        "consecrationesp": "Consecration",
        "continuumblade": "Continuum Blade",
        "coolingservos": "Cooling Servos",
        "corruptedblade": "Corrupted Blade",
        "corruptedplate": "Corrupted Plate",
        "craftgem": "Craft: Gem",
        "craftpanacea": "Craft: Panacea",
        "craftpoison": "Craft: Poison",
        "crankcrossbow": "Crank Crossbow",
        "crashlightningh": "Crash Lightning",
        "crescentlight": "Crescent Light",
        "crescentmoon": "Crescent Moon",
        "crimsonraiment": "Crimson Raiment",
        "crossbow": "Crossbow",
        "crusaderhelmet": "Crusader Helmet",
        "crystalball": "Crystal Ball",
        "cuby": "Cuby",
        "cubyd": "Cuby",
        "culltheweakspecial": "Cull the Weak",
        "cupofdeath": "Cup of Death",
        "curativetherapy": "Curative Therapy",
        "curseofagony": "Curse of Agony",
        "curseofdecay": "Curse of Decay",
        "curseofelements": "Curse of Elements",
        "curseofexhaustion": "Curse of Exhaustion",
        "curseoffragility": "Curse of Fragility",
        "curseofmadness": "Curse of Madness",
        "curseofshadows": "Curse of Shadows",
        "curseoftorment": "Curse of Torment",
        "curseofvulnerability": "Curse of Vulnerability",
        "curseofweakness": "Curse of Weakness",
        "cursedcard": "Cursed Card",
        "curseddagger": "Cursed Dagger",
        "cursedjewelersring": "Cursed Jeweler's Ring",
        "cursemancy": "Cursemancy",
        "cursenomicon": "Cursenomicon",
        "custodian": "Custodian",
        "cycloneslashspecial": "Cyclone Slash",
        "dagger": "Dagger",
        "daley": "Daley",
        "darkblobpet": "Dark Blob",
        "darkblow": "Dark Blow",
        "darkconcoction": "Dark Concoction",
        "darkflashitem": "Dark Flash",
        "darkfuture": "Dark Future",
        "darkhood": "Dark Hood",
        "darkmiasma": "Dark Miasma",
        "darkoutbreak": "Dark Outbreak",
        "darkpact": "Dark Pact",
        "darkritual": "Dark Ritual",
        "darksplashpet": "Dark Splash",
        "darkflamering": "Darkflame Ring",
        "darknessfalls": "Darkness Falls",
        "dartpouch": "Dart Pouch",
        "dawnlight": "Dawnlight",
        "deadlystrikes": "Deadly Strikes",
        "deathcoil": "Death Coil",
        "deathsdoor": "Death's Door",
        "deathsembrace": "Death's Embrace",
        "deathsreach": "Death's Reach",
        "debilitate": "Debilitate",
        "deepdarkness": "Deep Darkness",
        "defend": "Defend",
        "defensivestrategy": "Defensive Strategy",
        "defiledlegacy": "Defiled Legacy",
        "deflect": "Deflect",
        "dejavu": "Deja Vu",
        "delayresponse": "Delay Response",
        "demolishingblow": "Demolishing Blow",
        "demonictutor": "Demonic Tutor",
        "demoralizingshout": "Demoralizing Shout",
        "desertjam": "Desert Jam",
        "desperateplayer": "Desperate Prayer",
        "destiny": "Destiny",
        "destroyergauntlets": "Destroyer Gauntlets",
        "detection": "Detection",
        "detoxpotion": "Detox Potion",
        "detoxify": "Detoxify",
        "devastate": "Devastate",
        "diamondring": "Diamond Ring",
        "dilute": "Dilute",
        "dirtybandages": "Dirty Bandages",
        "disengage": "Disengage",
        "disintegrate": "Disintegrate",
        "dislocatedjaw": "Dislocated Jaw",
        "dispelmagic": "Dispel Magic",
        "divinationorb": "Divination Orb",
        "divinegrace": "Divine Grace",
        "divinegracestart": "Divine Grace",
        "divineguidance": "Divine Guidance",
        "divineinsight": "Divine Insight",
        "divineire": "Divine Ire",
        "divinepower": "Divine Power",
        "divineretribution": "Divine Retribution",
        "divinestrike": "Divine Strike",
        "doityourself": "Do it yourself!",
        "doublebubble": "Double Bubble",
        "doubleshot": "Double Shot",
        "doublestrike": "Double Strike",
        "downpouritem": "Downpour",
        "dracomancerstaff": "Dracomancer Staff",
        "drainlife": "Drain Life",
        "dreamsphere": "Dream Sphere",
        "dreamcatcher": "Dreamcatcher",
        "druidicamulet": "Druidic Amulet",
        "dryadmask": "Dryad Mask",
        "dualstrike": "Dual Strike",
        "dualwield": "Dual Wield",
        "durandal": "Durandal",
        "edgeoffury": "Edge of Fury",
        "eeriering": "Eerie Ring",
        "electricblobpet": "Electric Blob",
        "electricdischarge": "Electric Discharge",
        "electricsaw": "Electric Saw",
        "electricsplashpet": "Electric Splash",
        "electricweapons": "Electric Weapons",
        "electricitymanual": "Electricity Manual",
        "electrocute": "Electrocute",
        "electroshock": "Electroshock",
        "elementalbolt": "Elemental Bolt",
        "elementalproliferation": "Elemental Proliferation",
        "elementalward": "Elemental Ward",
        "elementalnovaspecial": "Elemental Wave",
        "elementalnovaspecialb": "Elemental Wave",
        "elvenagility": "Elven Agility",
        "elvencuirass": "Elven Cuirass",
        "elvenquiver": "Elven Quiver",
        "emberstorm": "Emberstorm",
        "emberstormspecial": "Emberstorm",
        "emeraldnecklace": "Emerald Necklace",
        "emeraldstaff": "Emerald Staff",
        "enchantweapons": "Enchant Weapons",
        "enchantment": "Enchantment",
        "enchantment2": "Enchantment2",
        "encore": "Encore",
        "endlessabyss": "Endless Abyss",
        "endlessbag": "Endless Bag",
        "energizingserenade": "Energizing Serenade",
        "energyshield": "Energy Shield",
        "enervate": "Enervate",
        "enlightened": "Enlightened",
        "enrage": "Enrage",
        "entomb": "Entomb",
        "entrench": "Entrench",
        "equivalentexchange": "Equivalent Exchange",
        "eternalcandle": "Eternal Candle",
        "eternallullaby": "Eternal Lullaby",
        "etherealknives": "Ethereal Knives",
        "etherealweapons": "Ethereal Weapons",
        "evanescence": "Evanescence",
        "eviscerate": "Eviscerate",
        "evocation": "Evocation",
        "excaliburn": "Excaliburn",
        "expectedprophecy": "Expected Prophecy",
        "experttracker": "Expert Tracker",
        "experttrackerstart": "Expert Tracker",
        "exploitopenings": "Exploit Openings",
        "explosiveshot": "Explosive Shot",
        "exposearmor": "Expose Armor",
        "fade": "Fade",
        "faeborgscale": "Faeborg Scale",
        "faithring": "Faith Ring",
        "falconshot": "Falcon Shot",
        "falconshotstart": "Falcon Shot",
        "familyjewels": "Family Jewels",
        "fanofknives": "Fan of Knives",
        "fanaticism": "Fanaticism",
        "farshot": "Far Shot",
        "faststrike": "Fast Strike",
        "fatedfuture": "Fated Future",
        "feedtherich": "Feed The Rich",
        "feint": "Feint",
        "fenny": "Fenny",
        "ferventring": "Fervent Ring",
        "fieryshield": "Fiery Shield",
        "fieryshieldstart": "Fiery Shield",
        "fierywand": "Fiery Wand",
        "fieryweapons": "Fiery Weapons",
        "findweakness": "Find Weakness",
        "fireblast": "Fire Blast",
        "firebook": "Fire Book",
        "fireemberitem": "Fire Ember",
        "firerune": "Fire Rune",
        "fireball": "Fireball",
        "fireproof": "Fireproof",
        "firestorm": "Firestorm",
        "firstaid": "First Aid",
        "fishingrod": "Fishing Rod",
        "fistofthedamned": "Fists of the Damned",
        "flail": "Flail",
        "flamestrike": "Flamestrike",
        "flamingsword": "Flaming Sword",
        "flamy": "Flamy",
        "flankingstrike": "Flanking Strike",
        "flare": "Flare",
        "flash": "Flash",
        "flashitem": "Flash",
        "flashfreeze": "Flash Freeze",
        "flashheal": "Flash Heal",
        "flute": "Flute",
        "focusheal": "Focus Heal",
        "followup": "Follow-up",
        "foresight": "Foresight",
        "forestbanner": "Forest Banner",
        "forestcrown": "Forest Crown",
        "fortunetelling": "Fortune Telling",
        "fountainpen": "Fountain Pen",
        "fourleafclover": "Four Leaf Clover",
        "freelover": "Free Lover",
        "freezingink": "Freezing Ink",
        "freshmeatyogger": "Fresh Meat!",
        "freshmeatstart": "Fresh Meat!",
        "friendlytadpole": "Friendly Tadpole",
        "frightened": "Frightened",
        "frostaxe": "Frost Axe",
        "frostnova": "Frost Nova",
        "frostweapons": "Frost Weapons",
        "frostbolt": "Frostbolt",
        "frostfirering": "Frostfire Ring",
        "frostguard": "Frostguard",
        "frozenarrows": "Frozen Arrows",
        "frozencarp": "Frozen Carp",
        "frozenheirloom": "Frozen Heirloom",
        "frozenorb": "Frozen Orb",
        "frozentear": "Frozen Tear",
        "furiouscarp": "Furious Carp",
        "furiousslash": "Furious Slash",
        "fusionlaser": "Fusion Laser",
        "gardenofthorns": "Garden of Thorns",
        "garnetearrings": "Garnet Earrings",
        "gauntlets": "Gauntlets",
        "geyser": "Geyser",
        "gihlrunestone": "Gihl Runestone",
        "gildedplate": "Gilded Plate",
        "givetothepoor": "Give To The Poor",
        "glacialhammer": "Glacial Hammer",
        "gladiatorhelmet": "Gladiator Helmet",
        "gloves": "Gloves",
        "glovesofagility": "Gloves of Agility",
        "goblinamulet": "Goblin Amulet",
        "goggles": "Goggles",
        "goldcard": "Gold",
        "goldyshardscard": "Gold and Shards",
        "goldyshardscardb": "Gold and Shards",
        "goldchain": "Gold Chain",
        "goldring": "Gold Ring",
        "goldenbell": "Golden Bell",
        "goldenchalice": "Golden Chalice",
        "goldencloak": "Golden Cloak",
        "goldencross": "Golden Cross",
        "goldenharp": "Golden Harp",
        "goldenlaurel": "Golden Laurel",
        "gorge": "Gorge",
        "gourmetmeat": "Gourmet Meat",
        "greaterheal": "Greater Heal",
        "greaterhealthpotion": "Greater Health Potion",
        "greatermanapotion": "Greater Mana Potion",
        "grimoireofflames": "Grimoire of Flames",
        "grindingwheel": "Grinding Wheel",
        "groundslam": "Ground Slam",
        "grudge": "Grudge",
        "guard": "Guard",
        "guardianangel": "Guardian Angel",
        "hallucination": "Hallucination",
        "hamstring": "Hamstring",
        "handbook": "Handbook",
        "harley": "Harley",
        "hawkeye": "Hawkeye",
        "headbutt": "Headbutt",
        "heal": "Heal",
        "healingbook": "Healing Book",
        "healingrain": "Healing Rain",
        "healingserenade": "Healing Serenade",
        "healingtotemh": "Healing Totem",
        "healthpotion": "Health Potion",
        "heartamulet": "Heart Amulet",
        "heartofthorns": "Heart of Thorns",
        "heatassimilationitem": "Heat Assimilation",
        "heatlaser": "Heat Laser",
        "heatlaserstart": "Heat Laser",
        "heatsurge": "Heat Surge",
        "heatwave": "Heat Wave",
        "kiteshield": "Heater Shield",
        "heavenlyblessing": "Heavenly Blessing",
        "heavenlyjustice": "Heavenly Justice",
        "heavenlyprotection": "Heavenly Protection",
        "heavybelt": "Heavy Belt",
        "heavymetal": "Heavy Metal",
        "heavypackage": "Heavy Package",
        "heavystrike": "Heavy Strike",
        "hellmarkitem": "Hell Mark",
        "hellblade": "Hellblade",
        "hellflame": "Hellflame",
        "helmet": "Helmet",
        "helpinghand": "Helping Hand",
        "heronscourage": "Herons's Courage",
        "hiddenhand": "Hidden Hand",
        "hiddenweapon": "Hidden Weapon",
        "hightchancellorstaff": "High Chancellor Staff",
        "hitandrun": "Hit and Run",
        "holyaegis": "Holy Aegis",
        "holyblast": "Holy Blast",
        "holyblobpet": "Holy Blob",
        "holybook": "Holy Book",
        "holycrusader": "Holy Crusader",
        "holyfire": "Holy Fire",
        "holygrail": "Holy Grail",
        "holyhammer": "Holy Hammer",
        "holynova": "Holy Nova",
        "holyripple": "Holy Ripple",
        "holyrune": "Holy Rune",
        "holyslashw": "Holy Slash",
        "holysmite": "Holy Smite",
        "holysmiteitem": "Holy Smite",
        "holysplashpet": "Holy Splash",
        "holystorm": "Holy Storm",
        "divinireprotection": "Holy Symbol",
        "holysymbol": "Holy Symbol",
        "honorable": "Honorable",
        "hornethelmet": "Horned Helmet",
        "hourglassofdeath": "Hourglass of Death",
        "howl": "Howl",
        "howlpet": "Howl",
        "huntersmark": "Hunter's Mark",
        "huntingring": "Hunting Ring",
        "hurryupitem": "Hurry Up",
        "hydraegg": "Hydra Egg",
        "hypnoshell": "Hypno Shell",
        "icebarrier": "Ice Barrier",
        "icecomet": "Ice Comet",
        "icelance": "Ice Lance",
        "iceorb": "Ice Orb",
        "iceshot": "Ice Shot",
        "icebreaker": "Icebreaker",
        "icicle": "Icicle",
        "iciclebarrage": "Icicle Barrage",
        "iciclelauncheritem": "Icicle Launcher",
        "icyblobpet": "Icy Blob",
        "icysplashpet": "Icy Splash",
        "icyveins": "Icy Veins",
        "icywand": "Icy Wand",
        "ignidohscore": "Ignidoh's Core",
        "igniscloack": "Ignis Cloak",
        "ignite": "Ignite",
        "immolate": "Immolate",
        "impstatuette": "Imp Statuette",
        "impale": "Impale",
        "improvedfireball": "Improved Fireball",
        "improvedlaser": "Improved Laser",
        "improvedrapidfire": "Improved Rapid Fire",
        "infestation": "Infestation",
        "infuriate": "Infuriate",
        "infusecourage": "Infuse Courage",
        "innercombustion": "Inner Combustion",
        "innerfire": "Inner Fire",
        "innervate": "Innervate",
        "intercept": "Intercept",
        "intimidate": "Intimidate",
        "invigoratingblow": "Invigorating Blow",
        "invisibility": "Invisibility",
        "ironfortress": "Iron Fortress",
        "ironkanabo": "Iron Kanabo",
        "ironwand": "Iron Wand",
        "itchyburn": "Itchy Burn",
        "jadering": "Jade Ring",
        "jewelersring": "Jeweler's Ring",
        "jinglebell": "Jingle Bell",
        "justicarring": "Justicar Ring",
        "killerinstinc": "Killer Instinct",
        "killerinstincstart": "Killer Instinct",
        "kingmaker": "Kingmaker",
        "largeshield": "Kite Shield",
        "lapisnecklace": "Lapis Necklace",
        "largepouch": "Large Pouch",
        "lastguardian": "Last Guardian",
        "lasthope": "Last Hope",
        "lastrequiem": "Last Requiem",
        "lastreward": "Last Reward",
        "laststand": "Last Stand",
        "lavablobpet": "Lava Blob",
        "lavacrystal": "Lava Crystal",
        "lavaorb": "Lava Orb",
        "lavapotion": "Lava Potion",
        "lavasplashpet": "Lava Splash",
        "layonpaws": "Lay on Paws",
        "layonpawsstart": "Lay on Paws",
        "leapslam": "Leap Slam",
        "leatherarmor": "Leather Armor",
        "leatherboots": "Leather Boots",
        "leathergloves": "Leather Gloves",
        "lethalshot": "Lethal Shot",
        "liante": "Lianty",
        "librarian": "Librarian",
        "lifeessence": "Life Essence",
        "lifetap": "Life Tap",
        "lightfeet": "Light Feet",
        "lightbringer": "Lightbringer",
        "lightningboltboon": "Lightning Bolt",
        "lightningboltchallen": "Lightning Bolt",
        "lightningboltitem": "Lightning Bolt",
        "lightningbook": "Lightning Book",
        "lightningrune": "Lightning Rune",
        "lightningspear": "Lightning Spear",
        "livingflame": "Living Flame",
        "lockpicks": "Lockpicks",
        "longbow": "Long Bow",
        "lostmail": "Lost Mail",
        "loveenhancer": "Love Enhancer",
        "lowselfesteem": "Low Self-Esteem",
        "luckypaw": "Lucky Paw",
        "lunaring": "Luna Ring",
        "madnessring": "Madness Ring",
        "magictome": "Magic Tome",
        "magusstaff": "Magus Staff",
        "maim": "Maim",
        "malediction": "Malediction",
        "maledictionstart": "Malediction",
        "maliciouseye": "Malicious Eye",
        "managem": "Mana Gem",
        "manaloop": "Mana Loop",
        "manapotion": "Mana Potion",
        "manashield": "Mana Shield",
        "manasurge": "Mana Surge",
        "maneuver": "Maneuver",
        "martyrdom": "Martyrdom",
        "massdispel": "Mass Dispel",
        "massinvisibility": "Mass Invisibility",
        "matriarchsclaw": "Matriarch's Claw",
        "meat": "Meat",
        "meatbag": "Meat Bag",
        "meditate": "Meditate",
        "megabonk": "Mega Bonk",
        "megaphone": "Megaphone",
        "melodicrhythm": "Melodic Rhythm",
        "meltedplating": "Melted Plating",
        "mentalshake": "Mental Shake",
        "merchantbadge": "Merchant Badge",
        "merciful": "Merciful",
        "merciless": "Merciless",
        "mesmericmirage": "Mesmeric Mirage",
        "metalblobpet": "Metal Blob",
        "metalsplashpet": "Metal Splash",
        "meteorshower": "Meteor Shower",
        "meteorite": "Meteorite",
        "mindblast": "Mind Blast",
        "mindbook": "Mind Book",
        "mindtwist": "Mind Twist",
        "mindvisions": "Mind Visions",
        "minotaurhorn": "Minotaur Horn",
        "mirrorimages": "Mirror Images",
        "mirrorofkalandra": "Mirror of Kassandra",
        "mixedsalad": "Mixed Salad",
        "mnemrunestone": "Mnem Runestone",
        "moonfireitem": "Moonfire",
        "morningstar": "Morning Star",
        "mortalstrike": "Mortal Strike",
        "mountainking": "Mountain King",
        "mozzy": "Mozzy",
        "multishot": "Multishot",
        "musicsheet": "Music Sheet",
        "mysticstaff": "Mystic Staff",
        "necromancerrobe": "Necromancer Robe",
        "necropotence": "Necropotence",
        "necroticburst": "Necrotic Burst",
        "netherblade": "Netherblade",
        "neurotoxin": "Neurotoxin",
        "neverendingstory": "Neverending Story",
        "neverfrost": "Neverfrost",
        "nightterror": "Night Terror",
        "nightmare": "Nightmare",
        "nightveil": "Nightveil",
        "ninjascroll": "Ninja Scroll",
        "nobleshield": "Noble Shield",
        "noxiouseruption": "Noxious Eruption",
        "nullifier": "Nullifier",
        "obsidiandagger": "Obsidian Dagger",
        "obsidianring": "Obsidian Ring",
        "obsidianrod": "Obsidian Staff",
        "oculy": "Oculy",
        "odeofwar": "Ode of War",
        "oldhorseshoe": "Old Horseshoe",
        "omenofperil": "Omen of Peril",
        "omnipotence": "Omnipotence",
        "omniscience": "Omniscience",
        "onslaught": "Onslaught",
        "onyxamulet": "Onyx Amulet",
        "opalring": "Opal Ring",
        "openwound": "Open Wound",
        "orbofstorms": "Orb of Storms",
        "orby": "Orby",
        "osmiumfeet": "Osmium Feet",
        "overheatitem": "Overheat",
        "overpower": "Overpower",
        "owlblessing": "Owl Blessing",
        "painsupresion": "Pain Suppression",
        "paladingauntlets": "Paladin Gauntlets",
        "palisadeitem": "Palisade",
        "panacea": "Panacea",
        "pandemonium": "Pandemonium",
        "pandorasbox": "Pandora's Box",
        "panicscream": "Panic Scream",
        "paralizingvenomitem": "Paralyzing Venom",
        "parry": "Parry",
        "pebblethrow": "Pebble Throw",
        "penance": "Penance",
        "penitencering": "Penitence Ring",
        "perseverance": "Perseverance",
        "pestilence": "Pestilence",
        "phoenix": "Phoenix",
        "piercinghowl": "Piercing Howl",
        "piggybank": "Piggy Bank",
        "pillage": "Pillage",
        "piousring": "Pious Ring",
        "plaguerat": "Plague Rat",
        "plagueshot": "Plague Shot",
        "platemail": "Platemail",
        "platinumring": "Platinum Ring",
        "pointyhat": "Pointy Hat",
        "poisoncatalyst": "Poison Catalyst",
        "poisondart": "Poison Dart",
        "poisonflask": "Poison Flask",
        "poisonsplashitem": "Poison Splash",
        "poisonsplashitemb": "Poison Splash",
        "poisonspray": "Poison Spray",
        "poisoned": "Poisoned",
        "poisoneddagger": "Poisoned Dagger",
        "poisoneddaggers": "Poisoned Daggers",
        "poisonousbiteitem": "Poisonous Bite",
        "poisonousblood": "Poisonous Blood",
        "poisonousshot": "Poisonous Shot",
        "pommel": "Pommel",
        "powercoil": "Power Coil",
        "powerglove": "Power Glove",
        "powerslave": "Powerslave",
        "powerslavestart": "Powerslave",
        "praisethesun": "Praise the Sun",
        "prayerofhealing": "Prayer of Healing",
        "prayerofprotection": "Prayer of Protection",
        "precisestrike": "Precise Strike",
        "premiummeat": "Premium Meat",
        "prescription": "Prescription",
        "primalnecklace": "Primal Necklace",
        "prismaticfield": "Prismatic Field",
        "profane": "Profane",
        "prophetstaff": "Prophet's Staff",
        "protectspecial": "Protect",
        "protectfromevil": "Protect from Evil",
        "provoke": "Provoke",
        "pufferfish": "Pufferfish",
        "pulsingheal": "Pulsing Heal",
        "pulverize": "Pulverize",
        "pummel": "Pummel",
        "punch": "Punch",
        "puncture": "Puncture",
        "purgethewicked": "Purge the Wicked",
        "purgingray": "Purging Ray",
        "purrification": "Purrification",
        "pushforward": "Push Forward",
        "pyroblast": "Pyroblast",
        "pyromancerrobe": "Pyromancer Robe",
        "quickshot": "Quick Shot",
        "quill": "Quill",
        "quillrain": "Quill Rain",
        "radiantassault": "Radiant Assault",
        "raggeddoll": "Ragged Doll",
        "raiderslicer": "Raider Slicer",
        "rain": "Rain",
        "rainofarrows": "Rain of Arrows",
        "raincoat": "Raincoat",
        "raisemage": "Raise Mage",
        "raisepriest": "Raise Priest",
        "raisewarlock": "Raise Warlock",
        "rampage": "Rampage",
        "rangerarmor": "Ranger Armor",
        "rapidfire": "Rapid Fire",
        "rapidshoots": "Rapid Shoots",
        "ravenstaff": "Raven Staff",
        "rayoffrost": "Ray of Frost",
        "rayofhope": "Ray of Hope",
        "razor": "Razor",
        "reactivelaser": "Reactive Laser",
        "recklesscharge": "Reckless Charge",
        "recurringnightmare": "Recurring Nightmare",
        "redcape": "Red Cape",
        "redstorm": "Red Storm",
        "redemption": "Redemption",
        "redsteelcloack": "Redsteel Cloak",
        "reforgedcore": "Reforged Core",
        "reinforcedarmor": "Reinforced Armor",
        "reinforcedsteel": "Reinforced Steel",
        "rejuvenationpotion": "Rejuvenation Potion",
        "rend": "Rend",
        "renew": "Renew",
        "repairarmor": "Repair Armor",
        "repetitiontraining": "Repetition Training",
        "replenishment": "Replenishment",
        "reprisal": "Reprisal",
        "retaliator": "Retaliator",
        "revealingflask": "Revealing Flask",
        "reverberantverse": "Reverberant Verse",
        "ricochet": "Ricochet",
        "ringoffire": "Ring of Fire",
        "ringofhope": "Ring of Hope",
        "ringofprotection": "Ring of Protection",
        "riposte": "Riposte",
        "rob": "Rob",
        "roundshield": "Round Shield",
        "royalcoin": "Royal Coin",
        "rubyamulet": "Ruby Amulet",
        "rubycuirass": "Ruby Cuirass",
        "ruinbolt": "Ruin Bolt",
        "runicdice": "Runic Dice",
        "rupture": "Rupture",
        "rustyarmor": "Rusty Armor",
        "sacredaxe": "Sacred Axe",
        "sacredbolt": "Sacred Bolt",
        "sacredceremony": "Sacred Ceremony",
        "sacredtablet": "Sacred Tablet",
        "safeguard": "Safeguard",
        "samuraiarmor": "Samurai Armor",
        "sanctification": "Sanctification",
        "sanctuary": "Sanctuary",
        "sapphireamulet": "Sapphire Amulet",
        "sapphirering": "Sapphire Ring",
        "sarcasticsonnet": "Sarcastic Sonnet",
        "sausagefactory": "Sausage Factory",
        "savantrobe": "Savant Robe",
        "saveitforlater": "Save It For Later",
        "sawblade": "Saw Blade",
        "sawtoothknife": "Sawtooth Knife",
        "scarabshield": "Scarab Shield",
        "scaraby": "Scaraby",
        "scattershotm": "Scattershot",
        "scavenge": "Scavenge",
        "scholarrobe": "Scholar Robe",
        "scorchingheat": "Scorching Heat",
        "scorchingray": "Scorching Ray",
        "scrollofdefense": "Scroll of Defense",
        "scrollofintellect": "Scroll of Intellect",
        "scrollofresurrection": "Scroll of Resurrection",
        "scrollofspeed": "Scroll of Speed",
        "scry": "Scry",
        "scryerstaff": "Scryer Staff",
        "searingblast": "Searing Blast",
        "searingdagger": "Searing Dagger",
        "searingnova": "Searing Nova",
        "searingtouch": "Searing Touch",
        "seashellamulet": "Seashell Amulet",
        "seashellring": "Seashell Ring",
        "secondwind": "Second Wind",
        "serenityring": "Serenity Ring",
        "serratedweapons": "Serrated Weapons",
        "setup": "Setup",
        "severartery": "Sever Artery",
        "severeburn": "Severe Burn",
        "shacklesofwar": "Shackles Of War",
        "shadowbinding": "Shadow Binding",
        "shadowbolt": "Shadow Bolt",
        "shadowbook": "Shadow Book",
        "shadowcloack": "Shadow Cloak",
        "shadowimbuement": "Shadow Imbuement",
        "shadowmend": "Shadow Mend",
        "shadoworb": "Shadow Orb",
        "shadowrune": "Shadow Rune",
        "shadowstep": "Shadowstep",
        "shakeitoff": "Shake it off",
        "shardscard": "Shards",
        "sharingiscaring": "Sharing Is Caring",
        "sharpscimitar": "Sharp Scimitar",
        "sharpenspecial": "Sharpen",
        "sharpen": "Sharpen",
        "sharpeningknife": "Sharpening Knife",
        "sharpy": "Sharpy",
        "shatter": "Shatter",
        "shatteringfists": "Shattering Fists",
        "shieldbash": "Shield Bash",
        "shieldbreaker": "Shield Breaker",
        "shieldcharge": "Shield Charge",
        "shieldgeneratoritem": "Shield Generator",
        "shieldofthorns": "Shield of Thorns",
        "shieldofwarding": "Shield of Warding",
        "shieldslam": "Shield Slam",
        "shieldstance": "Shield Stance",
        "shieldthrow": "Shield Throw",
        "shieldwall": "Shield Wall",
        "shiftingscroll": "Shifting Scroll",
        "shiningforce": "Shining Force",
        "shiv": "Shiv",
        "shocknova": "Shock Nova",
        "shortsword": "Short Sword",
        "shoulderplate": "Shoulder Plate",
        "shrapnelshot": "Shrapnel Shot",
        "siegebreaker": "Siege Breaker",
        "silverchalice": "Silver Chalice",
        "silverring": "Silver Ring",
        "simplehat": "Simple Hat",
        "singingsword": "Singing Sword",
        "siphonlife": "Siphon Life",
        "skillful": "Skillful",
        "skullsplitter": "Skullsplitter",
        "slice": "Slice",
        "slimy": "Slimy",
        "slingshot": "Slingshot",
        "slippers": "Slippers",
        "smallpouch": "Small Pouch",
        "smokebomb": "Smoke Bomb",
        "sneakpeek": "Sneak Peek",
        "sneakystrike": "Sneaky Strike",
        "snipershot": "Sniper Shot",
        "soap": "Soap",
        "solring": "Sol Ring",
        "solarflare": "Solar Flare",
        "songofcelerity": "Song of Celerity",
        "songofquickness": "Song of Quickness",
        "soulharvest": "Soul Harvest",
        "soullantern": "Soul Lantern",
        "sparkoflife": "Spark of Life",
        "spectralmissiles": "Spectral Missiles",
        "spellecho": "Spell Echo",
        "spiderqueeneye": "Spider Queen Eye",
        "spikedball": "Spiked Ball",
        "spikedbracers": "Spiked Bracers",
        "spikedshield": "Spiked Shield",
        "spikedshoulderpads": "Spiked Shoulderpads",
        "spoiledmeat": "Spoiled Meat",
        "sprint": "Sprint",
        "spyglass": "Spyglass",
        "squall": "Squall",
        "squidtoken": "Squid Token",
        "stainlesscuirass": "Stainless Cuirass",
        "stampede": "Stampede",
        "standardbearer": "Standard Bearer",
        "standardbearerstart": "Standard Bearer",
        "starfallitem": "Starfall",
        "starfallottis": "Starfall",
        "steadfastboots": "Steadfast Boots",
        "steadfastshield": "Steadfast Shield",
        "steelforge": "Steel Forge",
        "steelrod": "Steel Rod",
        "steelskin": "Steelskin",
        "stimulantpills": "Stimulant Pills",
        "stockade": "Stockade",
        "stoneamulet": "Stone Amulet",
        "stonemaul": "Stone Maul",
        "stoneskin": "Stoneskin",
        "stormitem": "Storm",
        "stormjavelin": "Storm Javelin",
        "stormtiara": "Storm Tiara",
        "stormwardspecial": "Storm Ward",
        "stormwardspecialb": "Storm Ward",
        "stormcallerfeather": "Stormcaller Feather",
        "stormy": "Stormy",
        "strawhat": "Straw Hat",
        "strongmojo": "Strong Mojo",
        "subterfuge": "Subterfuge",
        "success": "Success",
        "sunbeam": "Sunbeam",
        "sunderarmor": "Sunder Armor",
        "superconductor": "Superconductor",
        "suppressionhelmet": "Suppresion Helmet",
        "surprisebox": "Surprise Box",
        "surprisegiftbox": "Surprise Gift Box",
        "swap": "Swap",
        "sweepingstrike": "Sweeping Strike",
        "sweetmelody": "Sweet Melody",
        "tabularasa": "Tabula Rasa",
        "tabularasam": "Tabula Rasa",
        "tacticalthinking": "Tactical Thinking",
        "taintedrod": "Tainted Rod",
        "takecover": "Take Cover",
        "takingaimm": "Taking Aim",
        "tantrumitem": "Tantrum",
        "targetshooting": "Target Shooting",
        "tediouspoem": "Tedious Poem",
        "tempest": "Tempest",
        "templeamulet": "Temple Amulet",
        "temporalchains": "Temporal Chains",
        "terrorring": "Terror Ring",
        "terrorize": "Terrorize",
        "teslacoil": "Tesla Coil",
        "tesseract": "Tesseract",
        "theanvil": "The Anvil",
        "thechosenone": "The Chosen One",
        "thedarkone": "The Dark One",
        "thedefiler": "The Defiler",
        "theencyclopedia": "The Encyclopedia",
        "thejuggernaut": "The Juggernaut",
        "theone": "The One",
        "thepolluter": "The Polluter",
        "theporcupine": "The Porcupine",
        "theproficient": "The Proficient",
        "thewall": "The Wall",
        "thewolfslayer": "The Wolfslayer",
        "thermalamulet": "Thermal Amulet",
        "thermalring": "Thermal Ring",
        "thorimsrod": "Thorim's Rod",
        "thornyring": "Thorny Ring",
        "thousandneedles": "Thousand Needles",
        "throwbolas": "Throw Bolas",
        "thunderclap": "Thunderclap",
        "thunderfuryspecial": "Thunderfury",
        "tikimask": "Tiki Mask",
        "titanfall": "Titan Fall",
        "titangauntlets": "Titan Gauntlets",
        "tomato": "Tomato",
        "tombstone": "Tombstone",
        "tomeofintellect": "Tome of Intellect",
        "topazring": "Topaz Ring",
        "torch": "Torch",
        "tormentofthorns": "Torment of Thorns",
        "touristmap": "Tourist Map",
        "toxicblobpet": "Toxic Blob",
        "toxicrain": "Toxic Rain",
        "toxicrainspecial": "Toxic Rain",
        "toxicsplashpet": "Toxic Splash",
        "toxicstrike": "Toxic Strike",
        "trace": "Trace",
        "transcribe": "Transcribe",
        "transfusion": "Transfusion",
        "transmision": "Transmission",
        "treat": "Treat",
        "tremors": "Tremors",
        "trick": "Trick",
        "trustwhorty": "Trustworthy",
        "tuneup": "Tune Up",
        "turban": "Turban",
        "twilightswamp": "Twilight Swamp",
        "twinblades": "Twin Blades",
        "twinscrollsstart": "Twin Scrolls",
        "twinscrolls": "Twin Scrolls",
        "tyrantnecklace": "Tyrant Necklace",
        "undeathichor": "Undeath Ichor",
        "undyingwill": "Undying Will",
        "unforgivingnature": "Unforgiving Nature",
        "unholyhammer": "Unholy Hammer",
        "unholysmiteitem": "Unholy Smite",
        "unholystorm": "Unholy Storm",
        "unstablepower": "Unstable Power",
        "untrustwhorty": "Untrustworthy",
        "unwaveringfaith": "Unwavering Faith",
        "uproot": "Uproot",
        "uselessletter": "Useless Letter",
        "vaccine": "Vaccine",
        "valiantdefender": "Valiant Defender",
        "vampirictouch": "Vampiric Touch",
        "vampirictutor": "Vampiric Tutor",
        "vanish": "Vanish",
        "vengeance": "Vengeance",
        "vengeancestart": "Vengeance",
        "venomamulet": "Venom Amulet",
        "venomfang": "Venom Fang",
        "venomflask": "Venom Flask",
        "veteranarmor": "Veteran Armor",
        "vexingcrescendo": "Vexing Crescendo",
        "vigilance": "Vigilance",
        "vigorousfurystart": "Vigorous Fury",
        "vigorousfury": "Vigorous Fury",
        "vilegas": "Vile Gas",
        "vilelance": "Vile Lance",
        "vilering": "Vile Ring",
        "viperring": "Viper Ring",
        "viperstrike": "Viper Strike",
        "virulentring": "Virulent Ring",
        "visionring": "Vision Ring",
        "vitalize": "Vitalize",
        "vitalizingserenade": "Vitalizing Serenade",
        "voidcrush": "Void Crush",
        "voidmemory": "Void Memory",
        "volcanicaxe": "Volcanic Axe",
        "volley": "Volley",
        "voodoodoll": "Voodoo Doll",
        "warbanner": "War Banner",
        "wardrum": "War Drum",
        "warhammer": "War Hammer",
        "warpaint": "Warpaint",
        "warriorcode": "Warrior Code",
        "waterblobpet": "Water Blob",
        "waterjet": "Water Jet",
        "watersplashpet": "Water Splash",
        "watervase": "Water Vase",
        "weaponcache": "Weapon Cache",
        "weaponpouch": "Weapon Pouch",
        "wellfed": "Well Fed",
        "whirlwind": "Whirlwind",
        "whisperinglies": "Whispering Lies",
        "wickedcraftsman": "Wicked Craftsman",
        "wildhunt": "Wild Hunt",
        "windblessingitem": "Wind Blessing",
        "windblessingitemb": "Wind Blessing",
        "wingedwand": "Winged Wand",
        "winteriscoming": "Winter Is Coming",
        "winterorb": "Winter Orb",
        "wintersnighttale": "Winter's Night Tale",
        "wolfguard": "Wolf Guard",
        "wolfskincloack": "Wolfskin Cloak",
        "wolfy": "Wolfy",
        "woodencrosier": "Wooden Crosier",
        "woollyhat": "Woolly Hat",
        "worldinflames": "World in Flames",
        "wreckingball": "Wrecking Ball",
        "xulrunestone": "Xul Runestone",
        "yangritual": "Yang Ritual",
        "yggdrasilroot": "Yggdrasil Root",
        "yinritual": "Yin Ritual",
        "yinyangbadge": "Yin Yang Badge",
        "yinyangbolt": "Yin Yang Bolt",
        "ylmerbranch": "Ylmer's Branch",
        "yoggercleaver": "Yogger's Cleaver",
        "zap": "Zap",
        "zapm": "Zap M (??)"
    },
    "A": {
        "absorptiona": "Absorption",
        "acrobaticstrikea": "Acrobatic Strike",
        "adrenalinea": "Adrenaline",
        "aimedshota": "Aimed Shot",
        "allina": "All In",
        "ambidextrousa": "Ambidextrous",
        "ambusha": "Ambush",
        "ammunitionsa": "Ammunition",
        "annoyingwhistlea": "Annoying Whistle",
        "anthemofhopea": "Anthem of Hope",
        "arcaneconduita": "Arcane Conduit",
        "arenachampiona": "Arena Champion",
        "arsenala": "Arsenal",
        "atonementstarta": "Atonement",
        "backstaba": "Backstab",
        "badaugurya": "Bad Augury",
        "balllightninga": "Ball Lightning",
        "balladofconquesta": "Ballad of Conquest",
        "balladofevasiona": "Ballad of Evasion",
        "banea": "Bane",
        "banishstarta": "Banish",
        "baptisma": "Baptism",
        "barbedwirea": "Barbed Wire",
        "barragea": "Barrage",
        "barricadea": "Barricade",
        "barriera": "Barrier",
        "basthetsgracea": "Basthet's Grace",
        "battleplana": "Battle Plan",
        "battleshouta": "Battle Shout",
        "benedictiona": "Benediction",
        "bindingheala": "Binding Heal",
        "birdofpreya": "Bird of Prey",
        "blackdeathstarta": "Black Death",
        "blackholea": "Black Hole",
        "blackkarmaa": "Black Karma",
        "blacktalonsa": "Black Talons",
        "bladedancea": "Blade Dance",
        "bladeflurrya": "Blade Flurry",
        "bladestorma": "Blade Storm",
        "bleedouta": "Bleed Out",
        "blizzarda": "Blizzard",
        "bloodfeedinga": "Blood Feeding",
        "bloodforblooda": "Blood For Blood",
        "bloodraina": "Blood Rain",
        "bloodsausagea": "Blood Sausage",
        "bloodbatha": "Bloodbath",
        "bloodragea": "Bloodrage",
        "bludgeona": "Bludgeon",
        "bluffa": "Bluff",
        "blura": "Blur",
        "boneclawsa": "Bone Claws",
        "bookofnightmaresa": "Book of Nightmares",
        "bookworma": "Bookworm",
        "bouncingshielda": "Bouncing Shield",
        "brokenbonea": "Broken Bone",
        "bulkheala": "Bulk Heal",
        "burningblooda": "Burning Blood",
        "burningshota": "Burning Shot",
        "butcheringa": "Butchering",
        "caltropsa": "Caltrops",
        "camouflagea": "Camouflage",
        "captainshowlstarta": "Captain's Howl",
        "captivatingvoicea": "Captivating Voice",
        "carnagea": "Carnage",
        "catharsisa": "Catharsis",
        "cauterizea": "Cauterize",
        "celestialbrillancea": "Celestial Brilliance",
        "chainheala": "Chain Heal",
        "chainlightninga": "Chain Lightning",
        "challengingshouta": "Challenging Shout",
        "changeweapona": "Change Weapon",
        "chantofaccuracya": "Chant of Accuracy",
        "chantofinitiativea": "Chant of Initiative",
        "chargea": "Charge",
        "chargebatterya": "Charge Battery",
        "childofthestorma": "Child of the Storm",
        "chillinggazea": "Chilling Gaze",
        "circleofhealinga": "Circle of Healing",
        "circuitoverloada": "Circuit Overload",
        "citadela": "Citadel",
        "clairvoyancea": "Clairvoyance",
        "claritya": "Clarity",
        "clearinstructionsa": "Clear Instructions",
        "cleavea": "Cleave",
        "coatofarmsa": "Coat of Arms",
        "coldfeeta": "Cold Feet",
        "coldsnapa": "Cold Snap",
        "coldsparkstarta": "Cold Spark",
        "colossalblowa": "Colossal Blow",
        "combatbandagesa": "Combat Bandages",
        "combustiona": "Combustion",
        "commandandconquera": "Command and Conquer",
        "condemnationa": "Condemnation",
        "consecrateda": "Consecrated",
        "consecrationespa": "Consecration",
        "corruptedbladea": "Corrupted Blade",
        "corruptedplatea": "Corrupted Plate",
        "crescentlighta": "Crescent Light",
        "curativetherapya": "Curative Therapy",
        "curseofagonya": "Curse of Agony",
        "curseofdecaya": "Curse of Decay",
        "curseofelementsa": "Curse of Elements",
        "curseofexhaustiona": "Curse of Exhaustion",
        "curseoffragilitya": "Curse of Fragility",
        "curseofmadnessa": "Curse of Madness",
        "curseofshadowsa": "Curse of Shadows",
        "curseoftormenta": "Curse of Torment",
        "curseofvulnerabilitya": "Curse of Vulnerability",
        "curseofweaknessa": "Curse of Weakness",
        "cursemancya": "Cursemancy",
        "cursenomicona": "Cursenomicon",
        "custodiana": "Custodian",
        "darkblowa": "Dark Blow",
        "darkconcoctiona": "Dark Concoction",
        "darkfuturea": "Dark Future",
        "darkmiasmaa": "Dark Miasma",
        "darkoutbreaka": "Dark Outbreak",
        "darkpacta": "Dark Pact",
        "darkrituala": "Dark Ritual",
        "darknessfallsa": "Darkness Falls",
        "dawnlighta": "Dawnlight",
        "deadlystrikesa": "Deadly Strikes",
        "deathcoila": "Death Coil",
        "deathsdoora": "Death's Door",
        "deathsembracea": "Death's Embrace",
        "deathsreacha": "Death's Reach",
        "debilitatea": "Debilitate",
        "deepdarknessa": "Deep Darkness",
        "defenda": "Defend",
        "defensivestrategya": "Defensive Strategy",
        "defiledlegacya": "Defiled Legacy",
        "deflecta": "Deflect",
        "dejavua": "Deja Vu",
        "delayresponsea": "Delay Response",
        "demolishingblowa": "Demolishing Blow",
        "demonictutora": "Demonic Tutor",
        "demoralizingshouta": "Demoralizing Shout",
        "desperateplayera": "Desperate Prayer",
        "detectiona": "Detection",
        "detoxifya": "Detoxify",
        "devastatea": "Devastate",
        "dilutea": "Dilute",
        "disengagea": "Disengage",
        "disintegratea": "Disintegrate",
        "dislocatedjawa": "Dislocated Jaw",
        "dispelmagica": "Dispel Magic",
        "divinegracestarta": "Divine Grace",
        "divineguidancea": "Divine Guidance",
        "divineinsighta": "Divine Insight",
        "divineirea": "Divine Ire",
        "divinepowera": "Divine Power",
        "divineretributiona": "Divine Retribution",
        "divinestrikea": "Divine Strike",
        "doityourselfa": "Do it yourself!",
        "doublebubblea": "Double Bubble",
        "doubleshota": "Double Shot",
        "doublestrikea": "Double Strike",
        "drainlifea": "Drain Life",
        "dualstrikea": "Dual Strike",
        "dualwielda": "Dual Wield",
        "electricdischargea": "Electric Discharge",
        "electricweaponsa": "Electric Weapons",
        "electricitymanuala": "Electricity Manual",
        "electrocutea": "Electrocute",
        "electroshocka": "Electroshock",
        "elementalbolta": "Elemental Bolt",
        "elementalproliferationa": "Elemental Proliferation",
        "elementalwarda": "Elemental Ward",
        "elvenagilitya": "Elven Agility",
        "emberstorma": "Emberstorm",
        "emberstormspeciala": "Emberstorm",
        "enchantweaponsa": "Enchant Weapons",
        "encorea": "Encore",
        "endlessabyssa": "Endless Abyss",
        "energizingserenadea": "Energizing Serenade",
        "enervatea": "Enervate",
        "enlighteneda": "Enlightened",
        "enragea": "Enrage",
        "entomba": "Entomb",
        "entrencha": "Entrench",
        "equivalentexchangea": "Equivalent Exchange",
        "eternallullabya": "Eternal Lullaby",
        "etherealknivesa": "Ethereal Knives",
        "etherealweaponsa": "Ethereal Weapons",
        "evanescencea": "Evanescence",
        "evisceratea": "Eviscerate",
        "evocationa": "Evocation",
        "excaliburna": "Excaliburn",
        "expectedprophecya": "Expected Prophecy",
        "experttrackerstarta": "Expert Tracker",
        "exploitopeningsa": "Exploit Openings",
        "explosiveshota": "Explosive Shot",
        "exposearmora": "Expose Armor",
        "fadea": "Fade",
        "falconshotstarta": "Falcon Shot",
        "familyjewelsa": "Family Jewels",
        "fanofknivesa": "Fan of Knives",
        "fanaticisma": "Fanaticism",
        "farshota": "Far Shot",
        "faststrikea": "Fast Strike",
        "fatedfuturea": "Fated Future",
        "feedthericha": "Feed The Rich",
        "feinta": "Feint",
        "fieryshieldstarta": "Fiery Shield",
        "fieryweaponsa": "Fiery Weapons",
        "findweaknessa": "Find Weakness",
        "fireblasta": "Fire Blast",
        "fireballa": "Fireball",
        "fireproofa": "Fireproof",
        "firestorma": "Firestorm",
        "firstaida": "First Aid",
        "flamestrikea": "Flamestrike",
        "flankingstrikea": "Flanking Strike",
        "flarea": "Flare",
        "flasha": "Flash",
        "flashfreezea": "Flash Freeze",
        "flashheala": "Flash Heal",
        "focusheala": "Focus Heal",
        "followupa": "Follow-up",
        "foresighta": "Foresight",
        "forestbannera": "Forest Banner",
        "fortunetellinga": "Fortune Telling",
        "freshmeatstarta": "Fresh Meat!",
        "frighteneda": "Frightened",
        "frostnovaa": "Frost Nova",
        "frostweaponsa": "Frost Weapons",
        "frostbolta": "Frostbolt",
        "furiousslasha": "Furious Slash",
        "fusionlasera": "Fusion Laser",
        "gardenofthornsa": "Garden of Thorns",
        "geysera": "Geyser",
        "gildedplatea": "Gilded Plate",
        "givetothepoora": "Give To The Poor",
        "gorgea": "Gorge",
        "greaterheala": "Greater Heal",
        "grimoireofflamesa": "Grimoire of Flames",
        "grindingwheela": "Grinding Wheel",
        "groundslama": "Ground Slam",
        "grudgea": "Grudge",
        "guarda": "Guard",
        "guardianangela": "Guardian Angel",
        "hallucinationa": "Hallucination",
        "hamstringa": "Hamstring",
        "harleya": "Harley",
        "hawkeyea": "Hawkeye",
        "headbutta": "Headbutt",
        "heala": "Heal",
        "healingraina": "Healing Rain",
        "healingserenadea": "Healing Serenade",
        "heatlaserstarta": "Heat Laser",
        "heatsurgea": "Heat Surge",
        "heatwavea": "Heat Wave",
        "heavenlyblessinga": "Heavenly Blessing",
        "heavenlyjusticea": "Heavenly Justice",
        "heavenlyprotectiona": "Heavenly Protection",
        "heavymetala": "Heavy Metal",
        "heavystrikea": "Heavy Strike",
        "hellmarkitema": "Hell Mark",
        "hellflamea": "Hellflame",
        "helpinghanda": "Helping Hand",
        "heronscouragea": "Herons's Courage",
        "hiddenhanda": "Hidden Hand",
        "hiddenweapona": "Hidden Weapon",
        "hightchancellorstaffa": "High Chancellor Staff",
        "hitandruna": "Hit and Run",
        "holyaegisa": "Holy Aegis",
        "holyblasta": "Holy Blast",
        "holycrusadera": "Holy Crusader",
        "holyfirea": "Holy Fire",
        "holynovaa": "Holy Nova",
        "holyripplea": "Holy Ripple",
        "holyslashwa": "Holy Slash",
        "holysmitea": "Holy Smite",
        "holystorma": "Holy Storm",
        "holysymbola": "Holy Symbol",
        "honorablea": "Honorable",
        "huntersmarka": "Hunter's Mark",
        "icebarriera": "Ice Barrier",
        "icecometa": "Ice Comet",
        "icelancea": "Ice Lance",
        "iceshota": "Ice Shot",
        "iciclea": "Icicle",
        "iciclebarragea": "Icicle Barrage",
        "icyveinsa": "Icy Veins",
        "ignitea": "Ignite",
        "immolatea": "Immolate",
        "impalea": "Impale",
        "infestationa": "Infestation",
        "infuriatea": "Infuriate",
        "infusecouragea": "Infuse Courage",
        "innercombustiona": "Inner Combustion",
        "innerfirea": "Inner Fire",
        "innervatea": "Innervate",
        "intercepta": "Intercept",
        "intimidatea": "Intimidate",
        "invigoratingblowa": "Invigorating Blow",
        "invisibilitya": "Invisibility",
        "itchyburna": "Itchy Burn",
        "jinglebella": "Jingle Bell",
        "killerinstincstarta": "Killer Instinct",
        "lastguardiana": "Last Guardian",
        "lastrequiema": "Last Requiem",
        "lastrewarda": "Last Reward",
        "laststanda": "Last Stand",
        "layonpawsstarta": "Lay on Paws",
        "leapslama": "Leap Slam",
        "lethalshota": "Lethal Shot",
        "librariana": "Librarian",
        "lifetapa": "Life Tap",
        "livingflamea": "Living Flame",
        "loveenhancera": "Love Enhancer",
        "lowselfesteema": "Low Self-Esteem",
        "maima": "Maim",
        "maledictionstarta": "Malediction",
        "maliciouseyea": "Malicious Eye",
        "managema": "Mana Gem",
        "manashielda": "Mana Shield",
        "manasurgea": "Mana Surge",
        "maneuvera": "Maneuver",
        "martyrdoma": "Martyrdom",
        "massdispela": "Mass Dispel",
        "massinvisibilitya": "Mass Invisibility",
        "meatbaga": "Meat Bag",
        "meditatea": "Meditate",
        "melodicrhythma": "Melodic Rhythm",
        "meltedplatinga": "Melted Plating",
        "mentalshakea": "Mental Shake",
        "mercifula": "Merciful",
        "mercilessa": "Merciless",
        "mesmericmiragea": "Mesmeric Mirage",
        "meteorshowera": "Meteor Shower",
        "meteoritea": "Meteorite",
        "mindblasta": "Mind Blast",
        "mindtwista": "Mind Twist",
        "mindvisionsa": "Mind Visions",
        "mirrorimagesa": "Mirror Images",
        "mortalstrikea": "Mortal Strike",
        "multishota": "Multishot",
        "musicsheeta": "Music Sheet",
        "necropotencea": "Necropotence",
        "necroticbursta": "Necrotic Burst",
        "neurotoxina": "Neurotoxin",
        "neverendingstorya": "Neverending Story",
        "nightterrora": "Night Terror",
        "nightmarea": "Nightmare",
        "noxiouseruptiona": "Noxious Eruption",
        "odeofwara": "Ode of War",
        "omenofperila": "Omen of Peril",
        "omnipotencea": "Omnipotence",
        "omnisciencea": "Omniscience",
        "onslaughta": "Onslaught",
        "openwounda": "Open Wound",
        "overpowera": "Overpower",
        "owlblessinga": "Owl Blessing",
        "painsupresiona": "Pain Suppression",
        "panaceaa": "Panacea",
        "pandemoniuma": "Pandemonium",
        "panicscreama": "Panic Scream",
        "parrya": "Parry",
        "penancea": "Penance",
        "perseverancea": "Perseverance",
        "pestilencea": "Pestilence",
        "phoenixa": "Phoenix",
        "piercinghowla": "Piercing Howl",
        "pillagea": "Pillage",
        "plaguerata": "Plague Rat",
        "plagueshota": "Plague Shot",
        "poisoncatalysta": "Poison Catalyst",
        "poisondarta": "Poison Dart",
        "poisonflaska": "Poison Flask",
        "poisonspraya": "Poison Spray",
        "poisoneda": "Poisoned",
        "poisoneddaggersa": "Poisoned Daggers",
        "poisonousblooda": "Poisonous Blood",
        "poisonousshota": "Poisonous Shot",
        "pommela": "Pommel",
        "powerglovea": "Power Glove",
        "powerslavestarta": "Powerslave",
        "praisethesuna": "Praise the Sun",
        "prayerofhealinga": "Prayer of Healing",
        "prayerofprotectiona": "Prayer of Protection",
        "precisestrikea": "Precise Strike",
        "prescriptiona": "Prescription",
        "prismaticfielda": "Prismatic Field",
        "profanea": "Profane",
        "prophetstaffa": "Prophet's Staff",
        "protectfromevila": "Protect from Evil",
        "provokea": "Provoke",
        "pulsingheala": "Pulsing Heal",
        "pulverizea": "Pulverize",
        "pummela": "Pummel",
        "puncha": "Punch",
        "puncturea": "Puncture",
        "purgethewickeda": "Purge the Wicked",
        "purgingraya": "Purging Ray",
        "purrificationa": "Purrification",
        "pushforwarda": "Push Forward",
        "pyroblasta": "Pyroblast",
        "quickshota": "Quick Shot",
        "radiantassaulta": "Radiant Assault",
        "raggeddolla": "Ragged Doll",
        "raina": "Rain",
        "rainofarrowsa": "Rain of Arrows",
        "rampagea": "Rampage",
        "rangerarmora": "Ranger Armor",
        "rapidfirea": "Rapid Fire",
        "rayoffrosta": "Ray of Frost",
        "rayofhopea": "Ray of Hope",
        "reactivelasera": "Reactive Laser",
        "recklesschargea": "Reckless Charge",
        "recurringnightmarea": "Recurring Nightmare",
        "redstorma": "Red Storm",
        "redemptiona": "Redemption",
        "reforgedcorea": "Reforged Core",
        "reinforcedsteela": "Reinforced Steel",
        "renda": "Rend",
        "renewa": "Renew",
        "repairarmora": "Repair Armor",
        "repetitiontraininga": "Repetition Training",
        "replenishmenta": "Replenishment",
        "revealingflaska": "Revealing Flask",
        "reverberantversea": "Reverberant Verse",
        "ricocheta": "Ricochet",
        "ripostea": "Riposte",
        "ruinbolta": "Ruin Bolt",
        "rupturea": "Rupture",
        "sacredbolta": "Sacred Bolt",
        "sacredceremonya": "Sacred Ceremony",
        "safeguarda": "Safeguard",
        "sanctificationa": "Sanctification",
        "sanctuarya": "Sanctuary",
        "sarcasticsonneta": "Sarcastic Sonnet",
        "sausagefactorya": "Sausage Factory",
        "saveitforlatera": "Save It For Later",
        "sawbladea": "Saw Blade",
        "sawtoothknifea": "Sawtooth Knife",
        "scavengea": "Scavenge",
        "scorchingraya": "Scorching Ray",
        "scrollofdefensea": "Scroll of Defense",
        "scrollofintellecta": "Scroll of Intellect",
        "scrollofspeeda": "Scroll of Speed",
        "scrya": "Scry",
        "searingnovaa": "Searing Nova",
        "searingtoucha": "Searing Touch",
        "secondwinda": "Second Wind",
        "serratedweaponsa": "Serrated Weapons",
        "setupa": "Setup",
        "severarterya": "Sever Artery",
        "severeburna": "Severe Burn",
        "shadowbindinga": "Shadow Binding",
        "shadowbolta": "Shadow Bolt",
        "shadowimbuementa": "Shadow Imbuement",
        "shadowmenda": "Shadow Mend",
        "shadowstepa": "Shadowstep",
        "shakeitoffa": "Shake it off",
        "sharingiscaringa": "Sharing Is Caring",
        "sharpena": "Sharpen",
        "sharpeningknifea": "Sharpening Knife",
        "shattera": "Shatter",
        "shatteringfistsa": "Shattering Fists",
        "shieldbasha": "Shield Bash",
        "shieldbreakera": "Shield Breaker",
        "shieldchargea": "Shield Charge",
        "shieldofwardinga": "Shield of Warding",
        "shieldslama": "Shield Slam",
        "shieldstancea": "Shield Stance",
        "shieldthrowa": "Shield Throw",
        "shieldwalla": "Shield Wall",
        "shiftingscrolla": "Shifting Scroll",
        "shiningforcea": "Shining Force",
        "shiva": "Shiv",
        "shocknovaa": "Shock Nova",
        "shrapnelshota": "Shrapnel Shot",
        "siegebreakera": "Siege Breaker",
        "siphonlifea": "Siphon Life",
        "skillfula": "Skillful",
        "skullsplittera": "Skullsplitter",
        "slicea": "Slice",
        "smokebomba": "Smoke Bomb",
        "sneakpeeka": "Sneak Peek",
        "sneakystrikea": "Sneaky Strike",
        "snipershota": "Sniper Shot",
        "solarflarea": "Solar Flare",
        "songofceleritya": "Song of Celerity",
        "songofquicknessa": "Song of Quickness",
        "soulharvesta": "Soul Harvest",
        "soullanterna": "Soul Lantern",
        "sparkoflifea": "Spark of Life",
        "spectralmissilesa": "Spectral Missiles",
        "spellechoa": "Spell Echo",
        "spikedballa": "Spiked Ball",
        "spikedshielda": "Spiked Shield",
        "sprinta": "Sprint",
        "squalla": "Squall",
        "stampedea": "Stampede",
        "standardbearerstarta": "Standard Bearer",
        "steelforgea": "Steel Forge",
        "steelskina": "Steelskin",
        "stockadea": "Stockade",
        "stoneskina": "Stoneskin",
        "stormjavelina": "Storm Javelin",
        "subterfugea": "Subterfuge",
        "sunbeama": "Sunbeam",
        "sunderarmora": "Sunder Armor",
        "superconductora": "Superconductor",
        "sweepingstrikea": "Sweeping Strike",
        "sweetmelodya": "Sweet Melody",
        "tabularasaa": "Tabula Rasa",
        "tacticalthinkinga": "Tactical Thinking",
        "takecovera": "Take Cover",
        "targetshootinga": "Target Shooting",
        "tediouspoema": "Tedious Poem",
        "temporalchainsa": "Temporal Chains",
        "terrorizea": "Terrorize",
        "teslacoila": "Tesla Coil",
        "thechosenonea": "The Chosen One",
        "theencyclopediaa": "The Encyclopedia",
        "thewolfslayera": "The Wolfslayer",
        "thousandneedlesa": "Thousand Needles",
        "throwbolasa": "Throw Bolas",
        "thunderclapa": "Thunderclap",
        "titanfalla": "Titan Fall",
        "tomeofintellecta": "Tome of Intellect",
        "tormentofthornsa": "Torment of Thorns",
        "toxicraina": "Toxic Rain",
        "toxicstrikea": "Toxic Strike",
        "tracea": "Trace",
        "transcribea": "Transcribe",
        "transfusiona": "Transfusion",
        "transmisiona": "Transmission",
        "tremorsa": "Tremors",
        "trustwhortya": "Trustworthy",
        "tuneupa": "Tune Up",
        "twilightswampa": "Twilight Swamp",
        "twinscrollsstarta": "Twin Scrolls",
        "undyingwilla": "Undying Will",
        "unforgivingnaturea": "Unforgiving Nature",
        "unholystorma": "Unholy Storm",
        "unstablepowera": "Unstable Power",
        "untrustwhortya": "Untrustworthy",
        "unwaveringfaitha": "Unwavering Faith",
        "uproota": "Uproot",
        "vaccinea": "Vaccine",
        "valiantdefendera": "Valiant Defender",
        "vampirictoucha": "Vampiric Touch",
        "vampirictutora": "Vampiric Tutor",
        "vanisha": "Vanish",
        "vengeancestarta": "Vengeance",
        "venomflaska": "Venom Flask",
        "vexingcrescendoa": "Vexing Crescendo",
        "vigilancea": "Vigilance",
        "vigorousfurystarta": "Vigorous Fury",
        "vilegasa": "Vile Gas",
        "vilelancea": "Vile Lance",
        "viperstrikea": "Viper Strike",
        "vitalizea": "Vitalize",
        "vitalizingserenadea": "Vitalizing Serenade",
        "voidcrusha": "Void Crush",
        "voidmemorya": "Void Memory",
        "volleya": "Volley",
        "warpainta": "Warpaint",
        "waterjeta": "Water Jet",
        "weaponcachea": "Weapon Cache",
        "wellfeda": "Well Fed",
        "whirlwinda": "Whirlwind",
        "whisperingliesa": "Whispering Lies",
        "wickedcraftsmana": "Wicked Craftsman",
        "wildhunta": "Wild Hunt",
        "winteriscominga": "Winter Is Coming",
        "winterorba": "Winter Orb",
        "wintersnighttalea": "Winter's Night Tale",
        "wolfguarda": "Wolf Guard",
        "woodencrosiera": "Wooden Crosier",
        "worldinflamesa": "World in Flames",
        "wreckingballa": "Wrecking Ball",
        "yangrituala": "Yang Ritual",
        "yinrituala": "Yin Ritual",
        "yinyangbolta": "Yin Yang Bolt",
        "zapa": "Zap"
    },
    "B": {
        "absorptionb": "Absorption",
        "acrobaticstrikeb": "Acrobatic Strike",
        "adrenalineb": "Adrenaline",
        "aimedshotb": "Aimed Shot",
        "allinb": "All In",
        "ambidextrousb": "Ambidextrous",
        "ambushb": "Ambush",
        "ammunitionsb": "Ammunition",
        "annoyingwhistleb": "Annoying Whistle",
        "anthemofhopeb": "Anthem of Hope",
        "arcaneconduitb": "Arcane Conduit",
        "arenachampionb": "Arena Champion",
        "arsenalb": "Arsenal",
        "atonementstartb": "Atonement",
        "backstabb": "Backstab",
        "badauguryb": "Bad Augury",
        "balllightningb": "Ball Lightning",
        "balladofconquestb": "Ballad of Conquest",
        "balladofevasionb": "Ballad of Evasion",
        "baneb": "Bane",
        "banishstartb": "Banish",
        "baptismb": "Baptism",
        "barbedwireb": "Barbed Wire",
        "barrageb": "Barrage",
        "barricadeb": "Barricade",
        "barrierb": "Barrier",
        "basthetsgraceb": "Basthet's Grace",
        "battleplanb": "Battle Plan",
        "battleshoutb": "Battle Shout",
        "benedictionb": "Benediction",
        "bindinghealb": "Binding Heal",
        "birdofpreyb": "Bird of Prey",
        "blackdeathstartb": "Black Death",
        "blackholeb": "Black Hole",
        "blackkarmab": "Black Karma",
        "blacktalonsb": "Black Talons",
        "bladedanceb": "Blade Dance",
        "bladeflurryb": "Blade Flurry",
        "bladestormb": "Blade Storm",
        "bleedoutb": "Bleed Out",
        "blizzardb": "Blizzard",
        "bloodfeedingb": "Blood Feeding",
        "bloodforbloodb": "Blood For Blood",
        "bloodrainb": "Blood Rain",
        "bloodsausageb": "Blood Sausage",
        "bloodbathb": "Bloodbath",
        "bloodrageb": "Bloodrage",
        "bludgeonb": "Bludgeon",
        "bluffb": "Bluff",
        "blurb": "Blur",
        "boneclawsb": "Bone Claws",
        "bookofnightmaresb": "Book of Nightmares",
        "bookwormb": "Bookworm",
        "bouncingshieldb": "Bouncing Shield",
        "brokenboneb": "Broken Bone",
        "bulkhealb": "Bulk Heal",
        "burningbloodb": "Burning Blood",
        "burningshotb": "Burning Shot",
        "butcheringb": "Butchering",
        "caltropsb": "Caltrops",
        "camouflageb": "Camouflage",
        "captainshowlstartb": "Captain's Howl",
        "captivatingvoiceb": "Captivating Voice",
        "carnageb": "Carnage",
        "catharsisb": "Catharsis",
        "cauterizeb": "Cauterize",
        "celestialbrillanceb": "Celestial Brilliance",
        "chainhealb": "Chain Heal",
        "chainlightningb": "Chain Lightning",
        "challengingshoutb": "Challenging Shout",
        "changeweaponb": "Change Weapon",
        "chantofaccuracyb": "Chant of Accuracy",
        "chantofinitiativeb": "Chant of Initiative",
        "chargeb": "Charge",
        "chargebatteryb": "Charge Battery",
        "childofthestormb": "Child of the Storm",
        "chillinggazeb": "Chilling Gaze",
        "circleofhealingb": "Circle of Healing",
        "circuitoverloadb": "Circuit Overload",
        "citadelb": "Citadel",
        "clairvoyanceb": "Clairvoyance",
        "clarityb": "Clarity",
        "clearinstructionsb": "Clear Instructions",
        "cleaveb": "Cleave",
        "coatofarmsb": "Coat of Arms",
        "coldfeetb": "Cold Feet",
        "coldsnapb": "Cold Snap",
        "coldsparkstartb": "Cold Spark",
        "colossalblowb": "Colossal Blow",
        "combatbandagesb": "Combat Bandages",
        "combustionb": "Combustion",
        "commandandconquerb": "Command and Conquer",
        "condemnationb": "Condemnation",
        "consecratedb": "Consecrated",
        "consecrationespb": "Consecration",
        "corruptedbladeb": "Corrupted Blade",
        "corruptedplateb": "Corrupted Plate",
        "crescentlightb": "Crescent Light",
        "curativetherapyb": "Curative Therapy",
        "curseofagonyb": "Curse of Agony",
        "curseofdecayb": "Curse of Decay",
        "curseofelementsb": "Curse of Elements",
        "curseofexhaustionb": "Curse of Exhaustion",
        "curseoffragilityb": "Curse of Fragility",
        "curseofmadnessb": "Curse of Madness",
        "curseofshadowsb": "Curse of Shadows",
        "curseoftormentb": "Curse of Torment",
        "curseofvulnerabilityb": "Curse of Vulnerability",
        "curseofweaknessb": "Curse of Weakness",
        "cursemancyb": "Cursemancy",
        "cursenomiconb": "Cursenomicon",
        "custodianb": "Custodian",
        "darkblowb": "Dark Blow",
        "darkconcoctionb": "Dark Concoction",
        "darkfutureb": "Dark Future",
        "darkmiasmab": "Dark Miasma",
        "darkoutbreakb": "Dark Outbreak",
        "darkpactb": "Dark Pact",
        "darkritualb": "Dark Ritual",
        "darknessfallsb": "Darkness Falls",
        "dawnlightb": "Dawnlight",
        "deadlystrikesb": "Deadly Strikes",
        "deathcoilb": "Death Coil",
        "deathsdoorb": "Death's Door",
        "deathsembraceb": "Death's Embrace",
        "deathsreachb": "Death's Reach",
        "debilitateb": "Debilitate",
        "deepdarknessb": "Deep Darkness",
        "defendb": "Defend",
        "defensivestrategyb": "Defensive Strategy",
        "defiledlegacyb": "Defiled Legacy",
        "deflectb": "Deflect",
        "dejavub": "Deja Vu",
        "delayresponseb": "Delay Response",
        "demolishingblowb": "Demolishing Blow",
        "demonictutorb": "Demonic Tutor",
        "demoralizingshoutb": "Demoralizing Shout",
        "desperateplayerb": "Desperate Prayer",
        "detectionb": "Detection",
        "detoxifyb": "Detoxify",
        "devastateb": "Devastate",
        "diluteb": "Dilute",
        "disengageb": "Disengage",
        "disintegrateb": "Disintegrate",
        "dislocatedjawb": "Dislocated Jaw",
        "dispelmagicb": "Dispel Magic",
        "divinegracestartb": "Divine Grace",
        "divineguidanceb": "Divine Guidance",
        "divineinsightb": "Divine Insight",
        "divineireb": "Divine Ire",
        "divinepowerb": "Divine Power",
        "divineretributionb": "Divine Retribution",
        "divinestrikeb": "Divine Strike",
        "doityourselfb": "Do it yourself!",
        "doublebubbleb": "Double Bubble",
        "doubleshotb": "Double Shot",
        "doublestrikeb": "Double Strike",
        "drainlifeb": "Drain Life",
        "dualstrikeb": "Dual Strike",
        "dualwieldb": "Dual Wield",
        "electricdischargeb": "Electric Discharge",
        "electricweaponsb": "Electric Weapons",
        "electricitymanualb": "Electricity Manual",
        "electrocuteb": "Electrocute",
        "electroshockb": "Electroshock",
        "elementalboltb": "Elemental Bolt",
        "elementalproliferationb": "Elemental Proliferation",
        "elementalwardb": "Elemental Ward",
        "elvenagilityb": "Elven Agility",
        "emberstormb": "Emberstorm",
        "emberstormspecialb": "Emberstorm",
        "enchantweaponsb": "Enchant Weapons",
        "encoreb": "Encore",
        "endlessabyssb": "Endless Abyss",
        "energizingserenadeb": "Energizing Serenade",
        "enervateb": "Enervate",
        "enlightenedb": "Enlightened",
        "enrageb": "Enrage",
        "entombb": "Entomb",
        "entrenchb": "Entrench",
        "equivalentexchangeb": "Equivalent Exchange",
        "eternallullabyb": "Eternal Lullaby",
        "etherealknivesb": "Ethereal Knives",
        "etherealweaponsb": "Ethereal Weapons",
        "evanescenceb": "Evanescence",
        "eviscerateb": "Eviscerate",
        "evocationb": "Evocation",
        "excaliburnb": "Excaliburn",
        "expectedprophecyb": "Expected Prophecy",
        "experttrackerstartb": "Expert Tracker",
        "exploitopeningsb": "Exploit Openings",
        "explosiveshotb": "Explosive Shot",
        "exposearmorb": "Expose Armor",
        "fadeb": "Fade",
        "falconshotstartb": "Falcon Shot",
        "familyjewelsb": "Family Jewels",
        "fanofknivesb": "Fan of Knives",
        "fanaticismb": "Fanaticism",
        "farshotb": "Far Shot",
        "faststrikeb": "Fast Strike",
        "fatedfutureb": "Fated Future",
        "feedtherichb": "Feed The Rich",
        "feintb": "Feint",
        "fieryshieldstartb": "Fiery Shield",
        "fieryweaponsb": "Fiery Weapons",
        "findweaknessb": "Find Weakness",
        "fireblastb": "Fire Blast",
        "fireballb": "Fireball",
        "fireproofb": "Fireproof",
        "firestormb": "Firestorm",
        "firstaidb": "First Aid",
        "flamestrikeb": "Flamestrike",
        "flankingstrikeb": "Flanking Strike",
        "flareb": "Flare",
        "flashb": "Flash",
        "flashfreezeb": "Flash Freeze",
        "flashhealb": "Flash Heal",
        "focushealb": "Focus Heal",
        "followupb": "Follow-up",
        "foresightb": "Foresight",
        "forestbannerb": "Forest Banner",
        "fortunetellingb": "Fortune Telling",
        "freshmeatstartb": "Fresh Meat!",
        "frightenedb": "Frightened",
        "frostnovab": "Frost Nova",
        "frostweaponsb": "Frost Weapons",
        "frostboltb": "Frostbolt",
        "furiousslashb": "Furious Slash",
        "fusionlaserb": "Fusion Laser",
        "gardenofthornsb": "Garden of Thorns",
        "geyserb": "Geyser",
        "gildedplateb": "Gilded Plate",
        "givetothepoorb": "Give To The Poor",
        "gorgeb": "Gorge",
        "greaterhealb": "Greater Heal",
        "grimoireofflamesb": "Grimoire of Flames",
        "grindingwheelb": "Grinding Wheel",
        "groundslamb": "Ground Slam",
        "grudgeb": "Grudge",
        "guardb": "Guard",
        "guardianangelb": "Guardian Angel",
        "hallucinationb": "Hallucination",
        "hamstringb": "Hamstring",
        "harleyb": "Harley",
        "hawkeyeb": "Hawkeye",
        "headbuttb": "Headbutt",
        "healb": "Heal",
        "healingrainb": "Healing Rain",
        "healingserenadeb": "Healing Serenade",
        "heatlaserstartb": "Heat Laser",
        "heatsurgeb": "Heat Surge",
        "heatwaveb": "Heat Wave",
        "heavenlyblessingb": "Heavenly Blessing",
        "heavenlyjusticeb": "Heavenly Justice",
        "heavenlyprotectionb": "Heavenly Protection",
        "heavymetalb": "Heavy Metal",
        "heavystrikeb": "Heavy Strike",
        "hellflameb": "Hellflame",
        "helpinghandb": "Helping Hand",
        "heronscourageb": "Herons's Courage",
        "hiddenhandb": "Hidden Hand",
        "hiddenweaponb": "Hidden Weapon",
        "hightchancellorstaffb": "High Chancellor Staff",
        "hitandrunb": "Hit and Run",
        "holyaegisb": "Holy Aegis",
        "holyblastb": "Holy Blast",
        "holycrusaderb": "Holy Crusader",
        "holyfireb": "Holy Fire",
        "holynovab": "Holy Nova",
        "holyrippleb": "Holy Ripple",
        "holyslashwb": "Holy Slash",
        "holysmiteb": "Holy Smite",
        "holystormb": "Holy Storm",
        "holysymbolb": "Holy Symbol",
        "honorableb": "Honorable",
        "huntersmarkb": "Hunter's Mark",
        "icebarrierb": "Ice Barrier",
        "icecometb": "Ice Comet",
        "icelanceb": "Ice Lance",
        "iceshotb": "Ice Shot",
        "icicleb": "Icicle",
        "iciclebarrageb": "Icicle Barrage",
        "icyveinsb": "Icy Veins",
        "igniteb": "Ignite",
        "immolateb": "Immolate",
        "impaleb": "Impale",
        "infestationb": "Infestation",
        "infuriateb": "Infuriate",
        "infusecourageb": "Infuse Courage",
        "innercombustionb": "Inner Combustion",
        "innerfireb": "Inner Fire",
        "innervateb": "Innervate",
        "interceptb": "Intercept",
        "intimidateb": "Intimidate",
        "invigoratingblowb": "Invigorating Blow",
        "invisibilityb": "Invisibility",
        "itchyburnb": "Itchy Burn",
        "jinglebellb": "Jingle Bell",
        "killerinstincstartb": "Killer Instinct",
        "lastguardianb": "Last Guardian",
        "lastrequiemb": "Last Requiem",
        "lastrewardb": "Last Reward",
        "laststandb": "Last Stand",
        "layonpawsstartb": "Lay on Paws",
        "leapslamb": "Leap Slam",
        "lethalshotb": "Lethal Shot",
        "librarianb": "Librarian",
        "lifetapb": "Life Tap",
        "livingflameb": "Living Flame",
        "loveenhancerb": "Love Enhancer",
        "lowselfesteemb": "Low Self-Esteem",
        "maimb": "Maim",
        "maledictionstartb": "Malediction",
        "maliciouseyeb": "Malicious Eye",
        "managemb": "Mana Gem",
        "manashieldb": "Mana Shield",
        "manasurgeb": "Mana Surge",
        "maneuverb": "Maneuver",
        "martyrdomb": "Martyrdom",
        "massdispelb": "Mass Dispel",
        "massinvisibilityb": "Mass Invisibility",
        "meatbagb": "Meat Bag",
        "meditateb": "Meditate",
        "melodicrhythmb": "Melodic Rhythm",
        "meltedplatingb": "Melted Plating",
        "mentalshakeb": "Mental Shake",
        "mercifulb": "Merciful",
        "mercilessb": "Merciless",
        "mesmericmirageb": "Mesmeric Mirage",
        "meteorshowerb": "Meteor Shower",
        "meteoriteb": "Meteorite",
        "mindblastb": "Mind Blast",
        "mindtwistb": "Mind Twist",
        "mindvisionsb": "Mind Visions",
        "mirrorimagesb": "Mirror Images",
        "mortalstrikeb": "Mortal Strike",
        "multishotb": "Multishot",
        "musicsheetb": "Music Sheet",
        "necropotenceb": "Necropotence",
        "necroticburstb": "Necrotic Burst",
        "neurotoxinb": "Neurotoxin",
        "neverendingstoryb": "Neverending Story",
        "nightterrorb": "Night Terror",
        "nightmareb": "Nightmare",
        "noxiouseruptionb": "Noxious Eruption",
        "odeofwarb": "Ode of War",
        "omenofperilb": "Omen of Peril",
        "omnipotenceb": "Omnipotence",
        "omniscienceb": "Omniscience",
        "onslaughtb": "Onslaught",
        "openwoundb": "Open Wound",
        "overpowerb": "Overpower",
        "owlblessingb": "Owl Blessing",
        "painsupresionb": "Pain Suppression",
        "panaceab": "Panacea",
        "pandemoniumb": "Pandemonium",
        "panicscreamb": "Panic Scream",
        "parryb": "Parry",
        "penanceb": "Penance",
        "perseveranceb": "Perseverance",
        "pestilenceb": "Pestilence",
        "phoenixb": "Phoenix",
        "piercinghowlb": "Piercing Howl",
        "pillageb": "Pillage",
        "plagueratb": "Plague Rat",
        "plagueshotb": "Plague Shot",
        "poisoncatalystb": "Poison Catalyst",
        "poisondartb": "Poison Dart",
        "poisonflaskb": "Poison Flask",
        "poisonsprayb": "Poison Spray",
        "poisonedb": "Poisoned",
        "poisoneddaggersb": "Poisoned Daggers",
        "poisonousbloodb": "Poisonous Blood",
        "poisonousshotb": "Poisonous Shot",
        "pommelb": "Pommel",
        "powergloveb": "Power Glove",
        "powerslavestartb": "Powerslave",
        "praisethesunb": "Praise the Sun",
        "prayerofhealingb": "Prayer of Healing",
        "prayerofprotectionb": "Prayer of Protection",
        "precisestrikeb": "Precise Strike",
        "prescriptionb": "Prescription",
        "prismaticfieldb": "Prismatic Field",
        "profaneb": "Profane",
        "prophetstaffb": "Prophet's Staff",
        "protectfromevilb": "Protect from Evil",
        "provokeb": "Provoke",
        "pulsinghealb": "Pulsing Heal",
        "pulverizeb": "Pulverize",
        "pummelb": "Pummel",
        "punchb": "Punch",
        "punctureb": "Puncture",
        "purgethewickedb": "Purge the Wicked",
        "purgingrayb": "Purging Ray",
        "purrificationb": "Purrification",
        "pushforwardb": "Push Forward",
        "pyroblastb": "Pyroblast",
        "quickshotb": "Quick Shot",
        "radiantassaultb": "Radiant Assault",
        "raggeddollb": "Ragged Doll",
        "rainb": "Rain",
        "rainofarrowsb": "Rain of Arrows",
        "rampageb": "Rampage",
        "rangerarmorb": "Ranger Armor",
        "rapidfireb": "Rapid Fire",
        "rayoffrostb": "Ray of Frost",
        "rayofhopeb": "Ray of Hope",
        "reactivelaserb": "Reactive Laser",
        "recklesschargeb": "Reckless Charge",
        "recurringnightmareb": "Recurring Nightmare",
        "redstormb": "Red Storm",
        "redemptionb": "Redemption",
        "reforgedcoreb": "Reforged Core",
        "reinforcedsteelb": "Reinforced Steel",
        "rendb": "Rend",
        "renewb": "Renew",
        "repairarmorb": "Repair Armor",
        "repetitiontrainingb": "Repetition Training",
        "replenishmentb": "Replenishment",
        "revealingflaskb": "Revealing Flask",
        "reverberantverseb": "Reverberant Verse",
        "ricochetb": "Ricochet",
        "riposteb": "Riposte",
        "ruinboltb": "Ruin Bolt",
        "ruptureb": "Rupture",
        "sacredboltb": "Sacred Bolt",
        "sacredceremonyb": "Sacred Ceremony",
        "safeguardb": "Safeguard",
        "sanctificationb": "Sanctification",
        "sanctuaryb": "Sanctuary",
        "sarcasticsonnetb": "Sarcastic Sonnet",
        "sausagefactoryb": "Sausage Factory",
        "saveitforlaterb": "Save It For Later",
        "sawbladeb": "Saw Blade",
        "sawtoothknifeb": "Sawtooth Knife",
        "scavengeb": "Scavenge",
        "scorchingrayb": "Scorching Ray",
        "scrollofdefenseb": "Scroll of Defense",
        "scrollofintellectb": "Scroll of Intellect",
        "scrollofspeedb": "Scroll of Speed",
        "scryb": "Scry",
        "searingnovab": "Searing Nova",
        "searingtouchb": "Searing Touch",
        "secondwindb": "Second Wind",
        "serratedweaponsb": "Serrated Weapons",
        "setupb": "Setup",
        "severarteryb": "Sever Artery",
        "severeburnb": "Severe Burn",
        "shadowbindingb": "Shadow Binding",
        "shadowboltb": "Shadow Bolt",
        "shadowimbuementb": "Shadow Imbuement",
        "shadowmendb": "Shadow Mend",
        "shadowstepb": "Shadowstep",
        "shakeitoffb": "Shake it off",
        "sharingiscaringb": "Sharing Is Caring",
        "sharpenb": "Sharpen",
        "sharpeningknifeb": "Sharpening Knife",
        "shatterb": "Shatter",
        "shatteringfistsb": "Shattering Fists",
        "shieldbashb": "Shield Bash",
        "shieldbreakerb": "Shield Breaker",
        "shieldchargeb": "Shield Charge",
        "shieldofwardingb": "Shield of Warding",
        "shieldslamb": "Shield Slam",
        "shieldstanceb": "Shield Stance",
        "shieldthrowb": "Shield Throw",
        "shieldwallb": "Shield Wall",
        "shiftingscrollb": "Shifting Scroll",
        "shiningforceb": "Shining Force",
        "shivb": "Shiv",
        "shocknovab": "Shock Nova",
        "shrapnelshotb": "Shrapnel Shot",
        "siegebreakerb": "Siege Breaker",
        "siphonlifeb": "Siphon Life",
        "skillfulb": "Skillful",
        "skullsplitterb": "Skullsplitter",
        "sliceb": "Slice",
        "smokebombb": "Smoke Bomb",
        "sneakpeekb": "Sneak Peek",
        "sneakystrikeb": "Sneaky Strike",
        "snipershotb": "Sniper Shot",
        "solarflareb": "Solar Flare",
        "songofcelerityb": "Song of Celerity",
        "songofquicknessb": "Song of Quickness",
        "soulharvestb": "Soul Harvest",
        "soullanternb": "Soul Lantern",
        "sparkoflifeb": "Spark of Life",
        "spectralmissilesb": "Spectral Missiles",
        "spellechob": "Spell Echo",
        "spikedballb": "Spiked Ball",
        "spikedshieldb": "Spiked Shield",
        "sprintb": "Sprint",
        "squallb": "Squall",
        "stampedeb": "Stampede",
        "standardbearerstartb": "Standard Bearer",
        "steelforgeb": "Steel Forge",
        "steelskinb": "Steelskin",
        "stockadeb": "Stockade",
        "stoneskinb": "Stoneskin",
        "stormjavelinb": "Storm Javelin",
        "subterfugeb": "Subterfuge",
        "sunbeamb": "Sunbeam",
        "sunderarmorb": "Sunder Armor",
        "superconductorb": "Superconductor",
        "sweepingstrikeb": "Sweeping Strike",
        "sweetmelodyb": "Sweet Melody",
        "tabularasab": "Tabula Rasa",
        "tacticalthinkingb": "Tactical Thinking",
        "takecoverb": "Take Cover",
        "targetshootingb": "Target Shooting",
        "tediouspoemb": "Tedious Poem",
        "temporalchainsb": "Temporal Chains",
        "terrorizeb": "Terrorize",
        "teslacoilb": "Tesla Coil",
        "thechosenoneb": "The Chosen One",
        "theencyclopediab": "The Encyclopedia",
        "thewolfslayerb": "The Wolfslayer",
        "thousandneedlesb": "Thousand Needles",
        "throwbolasb": "Throw Bolas",
        "thunderclapb": "Thunderclap",
        "titanfallb": "Titan Fall",
        "tomeofintellectb": "Tome of Intellect",
        "tormentofthornsb": "Torment of Thorns",
        "toxicrainb": "Toxic Rain",
        "toxicstrikeb": "Toxic Strike",
        "traceb": "Trace",
        "transcribeb": "Transcribe",
        "transfusionb": "Transfusion",
        "transmisionb": "Transmission",
        "tremorsb": "Tremors",
        "trustwhortyb": "Trustworthy",
        "tuneupb": "Tune Up",
        "twilightswampb": "Twilight Swamp",
        "twinscrollsstartb": "Twin Scrolls",
        "undyingwillb": "Undying Will",
        "unforgivingnatureb": "Unforgiving Nature",
        "unholystormb": "Unholy Storm",
        "unstablepowerb": "Unstable Power",
        "untrustwhortyb": "Untrustworthy",
        "unwaveringfaithb": "Unwavering Faith",
        "uprootb": "Uproot",
        "vaccineb": "Vaccine",
        "valiantdefenderb": "Valiant Defender",
        "vampirictouchb": "Vampiric Touch",
        "vampirictutorb": "Vampiric Tutor",
        "vanishb": "Vanish",
        "vengeancestartb": "Vengeance",
        "venomflaskb": "Venom Flask",
        "vexingcrescendob": "Vexing Crescendo",
        "vigilanceb": "Vigilance",
        "vigorousfurystartb": "Vigorous Fury",
        "vilegasb": "Vile Gas",
        "vilelanceb": "Vile Lance",
        "viperstrikeb": "Viper Strike",
        "vitalizeb": "Vitalize",
        "vitalizingserenadeb": "Vitalizing Serenade",
        "voidcrushb": "Void Crush",
        "voidmemoryb": "Void Memory",
        "volleyb": "Volley",
        "warpaintb": "Warpaint",
        "waterjetb": "Water Jet",
        "weaponcacheb": "Weapon Cache",
        "wellfedb": "Well Fed",
        "whirlwindb": "Whirlwind",
        "whisperingliesb": "Whispering Lies",
        "wickedcraftsmanb": "Wicked Craftsman",
        "wildhuntb": "Wild Hunt",
        "winteriscomingb": "Winter Is Coming",
        "winterorbb": "Winter Orb",
        "wintersnighttaleb": "Winter's Night Tale",
        "wolfguardb": "Wolf Guard",
        "woodencrosierb": "Wooden Crosier",
        "worldinflamesb": "World in Flames",
        "wreckingballb": "Wrecking Ball",
        "yangritualb": "Yang Ritual",
        "yinritualb": "Yin Ritual",
        "yinyangboltb": "Yin Yang Bolt",
        "zapb": "Zap"
    },
    "Rare": {
        "absorptionrare": "Absorption",
        "acolytetunicrare": "Acolyte Tunic",
        "acrobaticstrikerare": "Acrobatic Strike",
        "adrenalinerare": "Adrenaline",
        "advancedhandbookrare": "Advanced Handbook",
        "agateamuletrare": "Agate Amulet",
        "aimedshotrare": "Aimed Shot",
        "alarmbellrare": "Alarm Bell",
        "albatrosspendantrare": "Albatross Pendant",
        "allinrare": "All In",
        "allseeingamuletrare": "All-seeing Amulet",
        "amberamuletrare": "Amber Amulet",
        "ambidextrousrare": "Ambidextrous",
        "ambushrare": "Ambush",
        "amethystringrare": "Amethyst Ring",
        "ammunitionsrare": "Ammunition",
        "amuletofprotectionrare": "Amulet of Protection",
        "amuletofspeedrare": "Amulet of Speed",
        "amuletofthornsrare": "Amulet of Thorns",
        "ankhofliferare": "Ankh of Life",
        "anklebiteitemrare": "Ankle Bite",
        "annoyingwhistlerare": "Annoying Whistle",
        "anthemofhoperare": "Anthem of Hope",
        "antiquefigurinerare": "Antique Figurine",
        "aquamarinebraceletrare": "Aquamarine Bracelet",
        "architectsringrare": "Architect's Ring",
        "archmagebookrare": "Archmage Book",
        "arsenalrare": "Arsenal",
        "asmodyrare": "Asmody",
        "assassintoolsrare": "Assassin Tools",
        "avoidancecollarrare": "Avoidance Collar",
        "backstabrare": "Backstab",
        "badauguryrare": "Bad Augury",
        "balllightningrare": "Ball Lightning",
        "ballofwoolrare": "Ball of Wool",
        "balladofconquestrare": "Ballad of Conquest",
        "balladofevasionrare": "Ballad of Evasion",
        "bandagesrare": "Bandages",
        "banerare": "Bane",
        "baptismrare": "Baptism",
        "barbedwirerare": "Barbed Wire",
        "barragerare": "Barrage",
        "barricaderare": "Barricade",
        "barrierrare": "Barrier",
        "bassrare": "Bass",
        "bastionrare": "Bastion",
        "battleaxerare": "Battle Axe",
        "battleplanrare": "Battle Plan",
        "battleshoutrare": "Battle Shout",
        "beermugrare": "Beer Mug",
        "bellrare": "Bell",
        "belphyorpiperare": "Belphyor's Pipe",
        "benedictionrare": "Benediction",
        "berserkpotionrare": "Berserk Potion",
        "berserkerclawrare": "Berserker Claw",
        "bettyrare": "Betty",
        "bindinghealrare": "Binding Heal",
        "birdofpreyrare": "Bird of Prey",
        "blackdeckrare": "Black Deck",
        "blackholerare": "Black Hole",
        "blackkarmarare": "Black Karma",
        "blackpyramidrare": "Black Pyramid",
        "blackguardrare": "Blackguard",
        "bladedancerare": "Blade Dance",
        "bladeflurryrare": "Blade Flurry",
        "bladestormrare": "Blade Storm",
        "bleedoutrare": "Bleed Out",
        "blizzardrare": "Blizzard",
        "bloodblobpetrare": "Blood Blob",
        "bloodfeedingrare": "Blood Feeding",
        "bloodforbloodrare": "Blood For Blood",
        "bloodgobletrare": "Blood Goblet",
        "bloodrainrare": "Blood Rain",
        "bloodsplashpetrare": "Blood Splash",
        "bloodbathrare": "Bloodbath",
        "blooddguardrare": "Bloodguard",
        "bloodragerare": "Bloodrage",
        "bloodseekerrare": "Bloodseeker",
        "bloodstonerare": "Bloodstone",
        "bludgeonrare": "Bludgeon",
        "bluffrare": "Bluff",
        "blurrare": "Blur",
        "boneclawsrare": "Bone Claws",
        "boneringrare": "Bone Ring",
        "bonkhammerrare": "Bonk Hammer",
        "bookofnightmaresrare": "Book of Nightmares",
        "bookofthedeadrare": "Book of the Dead",
        "bookwormrare": "Bookworm",
        "bootsofswiftnessrare": "Boots of Swiftness",
        "bouncingshieldrare": "Bouncing Shield",
        "brassamuletrare": "Brass Amulet",
        "brasslanternrare": "Brass Lantern",
        "breastplaterare": "Breastplate",
        "brigandarmorrare": "Brigand Armor",
        "bronzegearrare": "Bronze Gear",
        "bucketrare": "Bucket",
        "bulkhealrare": "Bulk Heal",
        "bunnyrare": "Bunny",
        "burialmaskrare": "Burial Mask",
        "burningbloodrare": "Burning Blood",
        "burningorbrare": "Burning Orb",
        "burningshotrare": "Burning Shot",
        "butcherblockrare": "Butcher Block",
        "butcheringrare": "Butchering",
        "butcherskniferare": "Butcher's Knife",
        "caltropsrare": "Caltrops",
        "camouflagerare": "Camouflage",
        "captivatingvoicerare": "Captivating Voice",
        "carnagerare": "Carnage",
        "carprare": "Carp",
        "cauterizerare": "Cauterize",
        "celestialbrillancerare": "Celestial Brilliance",
        "chainhealrare": "Chain Heal",
        "chainlightningrare": "Chain Lightning",
        "chaliceofkingsrare": "Chalice of Kings",
        "chaliceofqueensrare": "Chalice of Queens",
        "challengingshoutrare": "Challenging Shout",
        "champyrare": "Champy",
        "changeweaponrare": "Change Weapon",
        "chantofaccuracyrare": "Chant of Accuracy",
        "chantofinitiativerare": "Chant of Initiative",
        "chaosblobpetrare": "Chaos Blob",
        "chaossplashpetrare": "Chaos Splash",
        "chargerare": "Charge",
        "chargebatteryrare": "Charge Battery",
        "chargedtridentrare": "Charged Trident",
        "cheeserare": "Cheese",
        "chompyrare": "Chompy",
        "chumpyrare": "Chumpy",
        "circleofhealingrare": "Circle of Healing",
        "citadelrare": "Citadel",
        "clairvoyancerare": "Clairvoyance",
        "clairvoyantscrollrare": "Clairvoyant Scroll",
        "clarityrare": "Clarity",
        "clearinstructionsrare": "Clear Instructions",
        "cleaverare": "Cleave",
        "clergyamuletrare": "Clergy Amulet",
        "cloackofevasionrare": "Cloak of Evasion",
        "cloackofspeedrare": "Cloak of Speed",
        "cloudsongrare": "Cloudsong",
        "clubrare": "Club",
        "coatofarmsrare": "Coat of Arms",
        "coldbonegobletrare": "Cold Bone Goblet",
        "coldbookrare": "Cold Book",
        "coldrunerare": "Cold Rune",
        "coldsnaprare": "Cold Snap",
        "colossalblowrare": "Colossal Blow",
        "combustionrare": "Combustion",
        "condemnationrare": "Condemnation",
        "continuumbladerare": "Continuum Blade",
        "coolingservosrare": "Cooling Servos",
        "corruptedbladerare": "Corrupted Blade",
        "corruptedplaterare": "Corrupted Plate",
        "crankcrossbowrare": "Crank Crossbow",
        "crescentlightrare": "Crescent Light",
        "crescentmoonrare": "Crescent Moon",
        "crimsonraimentrare": "Crimson Raiment",
        "crossbowrare": "Crossbow",
        "crusaderhelmetrare": "Crusader Helmet",
        "crystalballrare": "Crystal Ball",
        "cubydrare": "Cuby",
        "cubyrare": "Cuby",
        "cupofdeathrare": "Cup of Death",
        "curativetherapyrare": "Curative Therapy",
        "curseofagonyrare": "Curse of Agony",
        "curseofdecayrare": "Curse of Decay",
        "curseofelementsrare": "Curse of Elements",
        "curseofexhaustionrare": "Curse of Exhaustion",
        "curseoffragilityrare": "Curse of Fragility",
        "curseofmadnessrare": "Curse of Madness",
        "curseofshadowsrare": "Curse of Shadows",
        "curseoftormentrare": "Curse of Torment",
        "curseofvulnerabilityrare": "Curse of Vulnerability",
        "curseofweaknessrare": "Curse of Weakness",
        "cursedcardrare": "Cursed Card",
        "curseddaggerrare": "Cursed Dagger",
        "cursenomiconrare": "Cursenomicon",
        "daggerrare": "Dagger",
        "daleyrare": "Daley",
        "darkblobpetrare": "Dark Blob",
        "darkblowrare": "Dark Blow",
        "darkconcoctionrare": "Dark Concoction",
        "darkfuturerare": "Dark Future",
        "darkhoodrare": "Dark Hood",
        "darkoutbreakrare": "Dark Outbreak",
        "darkpactrare": "Dark Pact",
        "darkritualrare": "Dark Ritual",
        "darksplashpetrare": "Dark Splash",
        "darkflameringrare": "Darkflame Ring",
        "darknessfallsrare": "Darkness Falls",
        "dartpouchrare": "Dart Pouch",
        "dawnlightrare": "Dawnlight",
        "deathcoilrare": "Death Coil",
        "deathsreachrare": "Death's Reach",
        "debilitaterare": "Debilitate",
        "deepdarknessrare": "Deep Darkness",
        "defendrare": "Defend",
        "deflectrare": "Deflect",
        "dejavurare": "Deja Vu",
        "delayresponserare": "Delay Response",
        "demolishingblowrare": "Demolishing Blow",
        "demonictutorrare": "Demonic Tutor",
        "demoralizingshoutrare": "Demoralizing Shout",
        "desertjamrare": "Desert Jam",
        "desperateplayerrare": "Desperate Prayer",
        "destinyrare": "Destiny",
        "destroyergauntletsrare": "Destroyer Gauntlets",
        "detectionrare": "Detection",
        "detoxpotionrare": "Detox Potion",
        "detoxifyrare": "Detoxify",
        "devastaterare": "Devastate",
        "diamondringrare": "Diamond Ring",
        "diluterare": "Dilute",
        "dirtybandagesrare": "Dirty Bandages",
        "disengagerare": "Disengage",
        "disintegraterare": "Disintegrate",
        "dispelmagicrare": "Dispel Magic",
        "divinationorbrare": "Divination Orb",
        "divineguidancerare": "Divine Guidance",
        "divineinsightrare": "Divine Insight",
        "divineirerare": "Divine Ire",
        "divinepowerrare": "Divine Power",
        "divinestrikerare": "Divine Strike",
        "doityourselfrare": "Do it yourself!",
        "doublestrikerare": "Double Strike",
        "downpouritemrare": "Downpour",
        "dracomancerstaffrare": "Dracomancer Staff",
        "drainliferare": "Drain Life",
        "dreamsphererare": "Dream Sphere",
        "dreamcatcherrare": "Dreamcatcher",
        "druidicamuletrare": "Druidic Amulet",
        "dryadmaskrare": "Dryad Mask",
        "dualstrikerare": "Dual Strike",
        "durandalrare": "Durandal",
        "edgeoffuryrare": "Edge of Fury",
        "eerieringrare": "Eerie Ring",
        "electricblobpetrare": "Electric Blob",
        "electricdischargerare": "Electric Discharge",
        "electricsplashpetrare": "Electric Splash",
        "electricitymanualrare": "Electricity Manual",
        "electrocuterare": "Electrocute",
        "elementalboltrare": "Elemental Bolt",
        "elementalwardrare": "Elemental Ward",
        "elvencuirassrare": "Elven Cuirass",
        "elvenquiverrare": "Elven Quiver",
        "emberstormrare": "Emberstorm",
        "emeraldnecklacerare": "Emerald Necklace",
        "emeraldstaffrare": "Emerald Staff",
        "endlessabyssrare": "Endless Abyss",
        "endlessbagrare": "Endless Bag",
        "energizingserenaderare": "Energizing Serenade",
        "energyshieldrare": "Energy Shield",
        "enervaterare": "Enervate",
        "enragerare": "Enrage",
        "entombrare": "Entomb",
        "entrenchrare": "Entrench",
        "equivalentexchangerare": "Equivalent Exchange",
        "eternalcandlerare": "Eternal Candle",
        "eternallullabyrare": "Eternal Lullaby",
        "evanescencerare": "Evanescence",
        "evisceraterare": "Eviscerate",
        "evocationrare": "Evocation",
        "expectedprophecyrare": "Expected Prophecy",
        "exploitopeningsrare": "Exploit Openings",
        "explosiveshotrare": "Explosive Shot",
        "exposearmorrare": "Expose Armor",
        "faderare": "Fade",
        "faeborgscalerare": "Faeborg Scale",
        "faithringrare": "Faith Ring",
        "familyjewelsrare": "Family Jewels",
        "fanofknivesrare": "Fan of Knives",
        "fanaticismrare": "Fanaticism",
        "farshotrare": "Far Shot",
        "faststrikerare": "Fast Strike",
        "feintrare": "Feint",
        "fennyrare": "Fenny",
        "ferventringrare": "Fervent Ring",
        "fierywandrare": "Fiery Wand",
        "findweaknessrare": "Find Weakness",
        "fireblastrare": "Fire Blast",
        "firebookrare": "Fire Book",
        "firerunerare": "Fire Rune",
        "fireballrare": "Fireball",
        "firestormrare": "Firestorm",
        "firstaidrare": "First Aid",
        "fishingrodrare": "Fishing Rod",
        "fistofthedamnedrare": "Fists of the Damned",
        "flailrare": "Flail",
        "flamestrikerare": "Flamestrike",
        "flamingswordrare": "Flaming Sword",
        "flamyrare": "Flamy",
        "flankingstrikerare": "Flanking Strike",
        "flarerare": "Flare",
        "flashrare": "Flash",
        "flashfreezerare": "Flash Freeze",
        "flashhealrare": "Flash Heal",
        "fluterare": "Flute",
        "foresightrare": "Foresight",
        "forestcrownrare": "Forest Crown",
        "fortunetellingrare": "Fortune Telling",
        "fountainpenrare": "Fountain Pen",
        "fourleafcloverrare": "Four Leaf Clover",
        "freeloverrare": "Free Lover",
        "freezinginkrare": "Freezing Ink",
        "frostaxerare": "Frost Axe",
        "frostnovarare": "Frost Nova",
        "frostboltrare": "Frostbolt",
        "frostfireringrare": "Frostfire Ring",
        "frostguardrare": "Frostguard",
        "frozenarrowsrare": "Frozen Arrows",
        "frozenheirloomrare": "Frozen Heirloom",
        "frozenorbrare": "Frozen Orb",
        "frozentearrare": "Frozen Tear",
        "furiousslashrare": "Furious Slash",
        "gardenofthornsrare": "Garden of Thorns",
        "garnetearringsrare": "Garnet Earrings",
        "gauntletsrare": "Gauntlets",
        "geyserrare": "Geyser",
        "gihlrunestonerare": "Gihl Runestone",
        "gildedplaterare": "Gilded Plate",
        "glacialhammerrare": "Glacial Hammer",
        "gladiatorhelmetrare": "Gladiator Helmet",
        "glovesrare": "Gloves",
        "glovesofagilityrare": "Gloves of Agility",
        "goblinamuletrare": "Goblin Amulet",
        "gogglesrare": "Goggles",
        "goldchainrare": "Gold Chain",
        "goldringrare": "Gold Ring",
        "goldenbellrare": "Golden Bell",
        "goldenchalicerare": "Golden Chalice",
        "goldencloakrare": "Golden Cloak",
        "goldencrossrare": "Golden Cross",
        "goldenharprare": "Golden Harp",
        "goldenlaurelrare": "Golden Laurel",
        "greaterhealrare": "Greater Heal",
        "greaterhealthpotionrare": "Greater Health Potion",
        "greatermanapotionrare": "Greater Mana Potion",
        "grimoireofflamesrare": "Grimoire of Flames",
        "grindingwheelrare": "Grinding Wheel",
        "groundslamrare": "Ground Slam",
        "guardrare": "Guard",
        "guardianangelrare": "Guardian Angel",
        "hallucinationrare": "Hallucination",
        "hamstringrare": "Hamstring",
        "handbookrare": "Handbook",
        "harleyrare": "Harley",
        "headbuttrare": "Headbutt",
        "healrare": "Heal",
        "healingbookrare": "Healing Book",
        "healingrainrare": "Healing Rain",
        "healingserenaderare": "Healing Serenade",
        "healthpotionrare": "Health Potion",
        "heartamuletrare": "Heart Amulet",
        "heartofthornsrare": "Heart of Thorns",
        "heatwaverare": "Heat Wave",
        "kiteshieldrare": "Heater Shield",
        "heavenlyblessingrare": "Heavenly Blessing",
        "heavybeltrare": "Heavy Belt",
        "heavystrikerare": "Heavy Strike",
        "hellmarkitemrare": "Hell Mark",
        "hellbladerare": "Hellblade",
        "helmetrare": "Helmet",
        "helpinghandrare": "Helping Hand",
        "hiddenweaponrare": "Hidden Weapon",
        "hightchancellorstaffrare": "High Chancellor Staff",
        "hitandrunrare": "Hit and Run",
        "holyaegisrare": "Holy Aegis",
        "holyblastrare": "Holy Blast",
        "holyblobpetrare": "Holy Blob",
        "holybookrare": "Holy Book",
        "holyfirerare": "Holy Fire",
        "holygrailrare": "Holy Grail",
        "holyhammerrare": "Holy Hammer",
        "holynovarare": "Holy Nova",
        "holyripplerare": "Holy Ripple",
        "holyrunerare": "Holy Rune",
        "holyslashwrare": "Holy Slash",
        "holysmiterare": "Holy Smite",
        "holysplashpetrare": "Holy Splash",
        "holystormrare": "Holy Storm",
        "hornethelmetrare": "Horned Helmet",
        "hourglassofdeathrare": "Hourglass of Death",
        "howlrare": "Howl",
        "huntersmarkrare": "Hunter's Mark",
        "huntingringrare": "Hunting Ring",
        "hurryupitemrare": "Hurry Up",
        "hydraeggrare": "Hydra Egg",
        "hypnoshellrare": "Hypno Shell",
        "icebarrierrare": "Ice Barrier",
        "icecometrare": "Ice Comet",
        "icelancerare": "Ice Lance",
        "iceorbrare": "Ice Orb",
        "iceshotrare": "Ice Shot",
        "icebreakerrare": "Icebreaker",
        "iciclerare": "Icicle",
        "iciclebarragerare": "Icicle Barrage",
        "iciclelauncheritemrare": "Icicle Launcher",
        "icyblobpetrare": "Icy Blob",
        "icysplashpetrare": "Icy Splash",
        "icyveinsrare": "Icy Veins",
        "icywandrare": "Icy Wand",
        "ignidohscorerare": "Ignidoh's Core",
        "igniscloackrare": "Ignis Cloak",
        "igniterare": "Ignite",
        "immolaterare": "Immolate",
        "impstatuetterare": "Imp Statuette",
        "impalerare": "Impale",
        "infuriaterare": "Infuriate",
        "infusecouragerare": "Infuse Courage",
        "innercombustionrare": "Inner Combustion",
        "innerfirerare": "Inner Fire",
        "innervaterare": "Innervate",
        "interceptrare": "Intercept",
        "intimidaterare": "Intimidate",
        "invigoratingblowrare": "Invigorating Blow",
        "invisibilityrare": "Invisibility",
        "ironfortressrare": "Iron Fortress",
        "ironkanaborare": "Iron Kanabo",
        "ironwandrare": "Iron Wand",
        "jaderingrare": "Jade Ring",
        "jewelersringrare": "Jeweler's Ring",
        "justicarringrare": "Justicar Ring",
        "kingmakerrare": "Kingmaker",
        "largeshieldrare": "Kite Shield",
        "lapisnecklacerare": "Lapis Necklace",
        "largepouchrare": "Large Pouch",
        "lasthoperare": "Last Hope",
        "lastrequiemrare": "Last Requiem",
        "lastrewardrare": "Last Reward",
        "laststandrare": "Last Stand",
        "lavablobpetrare": "Lava Blob",
        "lavacrystalrare": "Lava Crystal",
        "lavaorbrare": "Lava Orb",
        "lavapotionrare": "Lava Potion",
        "lavasplashpetrare": "Lava Splash",
        "leapslamrare": "Leap Slam",
        "leatherarmorrare": "Leather Armor",
        "leatherbootsrare": "Leather Boots",
        "leatherglovesrare": "Leather Gloves",
        "lethalshotrare": "Lethal Shot",
        "lianterare": "Lianty",
        "librarianrare": "Librarian",
        "lifeessencerare": "Life Essence",
        "lifetaprare": "Life Tap",
        "lightbringerrare": "Lightbringer",
        "lightningbookrare": "Lightning Book",
        "lightningrunerare": "Lightning Rune",
        "lightningspearrare": "Lightning Spear",
        "livingflamerare": "Living Flame",
        "lockpicksrare": "Lockpicks",
        "longbowrare": "Long Bow",
        "lostmailrare": "Lost Mail",
        "luckypawrare": "Lucky Paw",
        "lunaringrare": "Luna Ring",
        "madnessringrare": "Madness Ring",
        "magictomerare": "Magic Tome",
        "magusstaffrare": "Magus Staff",
        "maimrare": "Maim",
        "maliciouseyerare": "Malicious Eye",
        "managemrare": "Mana Gem",
        "manalooprare": "Mana Loop",
        "manapotionrare": "Mana Potion",
        "manashieldrare": "Mana Shield",
        "manasurgerare": "Mana Surge",
        "massdispelrare": "Mass Dispel",
        "massinvisibilityrare": "Mass Invisibility",
        "matriarchsclawrare": "Matriarch's Claw",
        "meditaterare": "Meditate",
        "megaphonerare": "Megaphone",
        "mentalshakerare": "Mental Shake",
        "merchantbadgerare": "Merchant Badge",
        "mesmericmiragerare": "Mesmeric Mirage",
        "metalblobpetrare": "Metal Blob",
        "metalsplashpetrare": "Metal Splash",
        "meteorshowerrare": "Meteor Shower",
        "meteoriterare": "Meteorite",
        "mindblastrare": "Mind Blast",
        "mindbookrare": "Mind Book",
        "mindtwistrare": "Mind Twist",
        "mindvisionsrare": "Mind Visions",
        "minotaurhornrare": "Minotaur Horn",
        "mirrorimagesrare": "Mirror Images",
        "mirrorofkalandrarare": "Mirror of Kassandra",
        "mixedsaladrare": "Mixed Salad",
        "mnemrunestonerare": "Mnem Runestone",
        "morningstarrare": "Morning Star",
        "mortalstrikerare": "Mortal Strike",
        "mountainkingrare": "Mountain King",
        "mozzyrare": "Mozzy",
        "multishotrare": "Multishot",
        "musicsheetrare": "Music Sheet",
        "mysticstaffrare": "Mystic Staff",
        "necromancerroberare": "Necromancer Robe",
        "necropotencerare": "Necropotence",
        "necroticburstrare": "Necrotic Burst",
        "netherbladerare": "Netherblade",
        "neurotoxinrare": "Neurotoxin",
        "neverendingstoryrare": "Neverending Story",
        "neverfrostrare": "Neverfrost",
        "nightmarerare": "Nightmare",
        "nightveilrare": "Nightveil",
        "ninjascrollrare": "Ninja Scroll",
        "nobleshieldrare": "Noble Shield",
        "noxiouseruptionrare": "Noxious Eruption",
        "nullifierrare": "Nullifier",
        "obsidiandaggerrare": "Obsidian Dagger",
        "obsidianringrare": "Obsidian Ring",
        "obsidianrodrare": "Obsidian Staff",
        "oculyrare": "Oculy",
        "odeofwarrare": "Ode of War",
        "oldhorseshoerare": "Old Horseshoe",
        "omenofperilrare": "Omen of Peril",
        "omnipotencerare": "Omnipotence",
        "omnisciencerare": "Omniscience",
        "onyxamuletrare": "Onyx Amulet",
        "opalringrare": "Opal Ring",
        "orbofstormsrare": "Orb of Storms",
        "orbyrare": "Orby",
        "osmiumfeetrare": "Osmium Feet",
        "overheatitemrare": "Overheat",
        "overpowerrare": "Overpower",
        "painsupresionrare": "Pain Suppression",
        "paladingauntletsrare": "Paladin Gauntlets",
        "palisadeitemrare": "Palisade",
        "panacearare": "Panacea",
        "pandemoniumrare": "Pandemonium",
        "pandorasboxrare": "Pandora's Box",
        "parryrare": "Parry",
        "pebblethrowrare": "Pebble Throw",
        "penancerare": "Penance",
        "penitenceringrare": "Penitence Ring",
        "perseverancerare": "Perseverance",
        "pestilencerare": "Pestilence",
        "piercinghowlrare": "Piercing Howl",
        "piousringrare": "Pious Ring",
        "plagueshotrare": "Plague Shot",
        "platemailrare": "Platemail",
        "platinumringrare": "Platinum Ring",
        "pointyhatrare": "Pointy Hat",
        "poisoncatalystrare": "Poison Catalyst",
        "poisondartrare": "Poison Dart",
        "poisonflaskrare": "Poison Flask",
        "poisonsprayrare": "Poison Spray",
        "poisoneddaggerrare": "Poisoned Dagger",
        "poisoneddaggersrare": "Poisoned Daggers",
        "poisonousbloodrare": "Poisonous Blood",
        "poisonousshotrare": "Poisonous Shot",
        "pommelrare": "Pommel",
        "powercoilrare": "Power Coil",
        "prayerofhealingrare": "Prayer of Healing",
        "prayerofprotectionrare": "Prayer of Protection",
        "precisestrikerare": "Precise Strike",
        "prescriptionrare": "Prescription",
        "primalnecklacerare": "Primal Necklace",
        "prismaticfieldrare": "Prismatic Field",
        "profanerare": "Profane",
        "prophetstaffrare": "Prophet's Staff",
        "protectfromevilrare": "Protect from Evil",
        "provokerare": "Provoke",
        "pufferfishrare": "Pufferfish",
        "pulsinghealrare": "Pulsing Heal",
        "pulverizerare": "Pulverize",
        "pummelrare": "Pummel",
        "punchrare": "Punch",
        "puncturerare": "Puncture",
        "purgingrayrare": "Purging Ray",
        "pushforwardrare": "Push Forward",
        "pyroblastrare": "Pyroblast",
        "pyromancerroberare": "Pyromancer Robe",
        "quickshotrare": "Quick Shot",
        "quillrare": "Quill",
        "quillrainrare": "Quill Rain",
        "radiantassaultrare": "Radiant Assault",
        "raiderslicerrare": "Raider Slicer",
        "rainrare": "Rain",
        "rainofarrowsrare": "Rain of Arrows",
        "raincoatrare": "Raincoat",
        "raisemagerare": "Raise Mage",
        "raisepriestrare": "Raise Priest",
        "raisewarlockrare": "Raise Warlock",
        "rampagerare": "Rampage",
        "rapidfirerare": "Rapid Fire",
        "ravenstaffrare": "Raven Staff",
        "rayoffrostrare": "Ray of Frost",
        "rayofhoperare": "Ray of Hope",
        "razorrare": "Razor",
        "recklesschargerare": "Reckless Charge",
        "recurringnightmarerare": "Recurring Nightmare",
        "redcaperare": "Red Cape",
        "redemptionrare": "Redemption",
        "redsteelcloackrare": "Redsteel Cloak",
        "reinforcedarmorrare": "Reinforced Armor",
        "reinforcedsteelrare": "Reinforced Steel",
        "rejuvenationpotionrare": "Rejuvenation Potion",
        "rendrare": "Rend",
        "renewrare": "Renew",
        "repairarmorrare": "Repair Armor",
        "repetitiontrainingrare": "Repetition Training",
        "replenishmentrare": "Replenishment",
        "reprisalrare": "Reprisal",
        "retaliatorrare": "Retaliator",
        "revealingflaskrare": "Revealing Flask",
        "reverberantverserare": "Reverberant Verse",
        "ricochetrare": "Ricochet",
        "ringoffirerare": "Ring of Fire",
        "ringofhoperare": "Ring of Hope",
        "ringofprotectionrare": "Ring of Protection",
        "roundshieldrare": "Round Shield",
        "royalcoinrare": "Royal Coin",
        "rubyamuletrare": "Ruby Amulet",
        "rubycuirassrare": "Ruby Cuirass",
        "ruinboltrare": "Ruin Bolt",
        "runicdicerare": "Runic Dice",
        "rupturerare": "Rupture",
        "rustyarmorrare": "Rusty Armor",
        "sacredaxerare": "Sacred Axe",
        "sacredboltrare": "Sacred Bolt",
        "sacredceremonyrare": "Sacred Ceremony",
        "sacredtabletrare": "Sacred Tablet",
        "safeguardrare": "Safeguard",
        "samuraiarmorrare": "Samurai Armor",
        "sanctificationrare": "Sanctification",
        "sanctuaryrare": "Sanctuary",
        "sapphireamuletrare": "Sapphire Amulet",
        "sapphireringrare": "Sapphire Ring",
        "sarcasticsonnetrare": "Sarcastic Sonnet",
        "savantroberare": "Savant Robe",
        "saveitforlaterrare": "Save It For Later",
        "sawbladerare": "Saw Blade",
        "sawtoothkniferare": "Sawtooth Knife",
        "scarabshieldrare": "Scarab Shield",
        "scarabyrare": "Scaraby",
        "scavengerare": "Scavenge",
        "scholarroberare": "Scholar Robe",
        "scorchingrayrare": "Scorching Ray",
        "scrollofdefenserare": "Scroll of Defense",
        "scrollofintellectrare": "Scroll of Intellect",
        "scrollofresurrectionrare": "Scroll of Resurrection",
        "scrollofspeedrare": "Scroll of Speed",
        "scryrare": "Scry",
        "scryerstaffrare": "Scryer Staff",
        "searingblastrare": "Searing Blast",
        "searingdaggerrare": "Searing Dagger",
        "searingnovarare": "Searing Nova",
        "searingtouchrare": "Searing Touch",
        "seashellamuletrare": "Seashell Amulet",
        "seashellringrare": "Seashell Ring",
        "secondwindrare": "Second Wind",
        "serenityringrare": "Serenity Ring",
        "setuprare": "Setup",
        "severarteryrare": "Sever Artery",
        "shacklesofwarrare": "Shackles Of War",
        "shadowbindingrare": "Shadow Binding",
        "shadowboltrare": "Shadow Bolt",
        "shadowbookrare": "Shadow Book",
        "shadowcloackrare": "Shadow Cloak",
        "shadowmendrare": "Shadow Mend",
        "shadoworbrare": "Shadow Orb",
        "shadowrunerare": "Shadow Rune",
        "shadowsteprare": "Shadowstep",
        "shakeitoffrare": "Shake it off",
        "sharingiscaringrare": "Sharing Is Caring",
        "sharpscimitarrare": "Sharp Scimitar",
        "sharpenrare": "Sharpen",
        "sharpeningkniferare": "Sharpening Knife",
        "sharpyrare": "Sharpy",
        "shatterrare": "Shatter",
        "shieldbashrare": "Shield Bash",
        "shieldbreakerrare": "Shield Breaker",
        "shieldchargerare": "Shield Charge",
        "shieldgeneratoritemb": "Shield Generator",
        "shieldofthornsrare": "Shield of Thorns",
        "shieldofwardingrare": "Shield of Warding",
        "shieldslamrare": "Shield Slam",
        "shieldstancerare": "Shield Stance",
        "shieldthrowrare": "Shield Throw",
        "shieldwallrare": "Shield Wall",
        "shiftingscrollrare": "Shifting Scroll",
        "shiningforcerare": "Shining Force",
        "shivrare": "Shiv",
        "shocknovarare": "Shock Nova",
        "shortswordrare": "Short Sword",
        "shoulderplaterare": "Shoulder Plate",
        "shrapnelshotrare": "Shrapnel Shot",
        "siegebreakerrare": "Siege Breaker",
        "silverchalicerare": "Silver Chalice",
        "silverringrare": "Silver Ring",
        "simplehatrare": "Simple Hat",
        "singingswordrare": "Singing Sword",
        "siphonliferare": "Siphon Life",
        "skullsplitterrare": "Skullsplitter",
        "slicerare": "Slice",
        "slimyrare": "Slimy",
        "slingshotrare": "Slingshot",
        "slippersrare": "Slippers",
        "smallpouchrare": "Small Pouch",
        "smokebombrare": "Smoke Bomb",
        "sneakpeekrare": "Sneak Peek",
        "sneakystrikerare": "Sneaky Strike",
        "snipershotrare": "Sniper Shot",
        "soaprare": "Soap",
        "solringrare": "Sol Ring",
        "songofcelerityrare": "Song of Celerity",
        "songofquicknessrare": "Song of Quickness",
        "sparkofliferare": "Spark of Life",
        "spectralmissilesrare": "Spectral Missiles",
        "spiderqueeneyerare": "Spider Queen Eye",
        "spikedballrare": "Spiked Ball",
        "spikedbracersrare": "Spiked Bracers",
        "spikedshieldrare": "Spiked Shield",
        "spikedshoulderpadsrare": "Spiked Shoulderpads",
        "sprintrare": "Sprint",
        "spyglassrare": "Spyglass",
        "squallrare": "Squall",
        "stainlesscuirassrare": "Stainless Cuirass",
        "steadfastbootsrare": "Steadfast Boots",
        "steadfastshieldrare": "Steadfast Shield",
        "steelrodrare": "Steel Rod",
        "steelskinrare": "Steelskin",
        "stimulantpillsrare": "Stimulant Pills",
        "stockaderare": "Stockade",
        "stoneamuletrare": "Stone Amulet",
        "stonemaulrare": "Stone Maul",
        "stoneskinrare": "Stoneskin",
        "stormjavelinrare": "Storm Javelin",
        "stormtiararare": "Storm Tiara",
        "stormcallerfeatherrare": "Stormcaller Feather",
        "stormyrare": "Stormy",
        "strawhatrare": "Straw Hat",
        "strongmojorare": "Strong Mojo",
        "sunbeamrare": "Sunbeam",
        "sunderarmorrare": "Sunder Armor",
        "superconductorrare": "Superconductor",
        "suppressionhelmetrare": "Suppresion Helmet",
        "surpriseboxrare": "Surprise Box",
        "surprisegiftboxrare": "Surprise Gift Box",
        "sweepingstrikerare": "Sweeping Strike",
        "sweetmelodyrare": "Sweet Melody",
        "tabularasarare": "Tabula Rasa",
        "tacticalthinkingrare": "Tactical Thinking",
        "taintedrodrare": "Tainted Rod",
        "tediouspoemrare": "Tedious Poem",
        "tempestrare": "Tempest",
        "templeamuletrare": "Temple Amulet",
        "temporalchainsrare": "Temporal Chains",
        "terrorringrare": "Terror Ring",
        "terrorizerare": "Terrorize",
        "tesseractrare": "Tesseract",
        "theanvilrare": "The Anvil",
        "thedarkonerare": "The Dark One",
        "thedefilerrare": "The Defiler",
        "theencyclopediarare": "The Encyclopedia",
        "thejuggernautrare": "The Juggernaut",
        "theonerare": "The One",
        "thepolluterrare": "The Polluter",
        "theporcupinerare": "The Porcupine",
        "theproficientrare": "The Proficient",
        "thewallrare": "The Wall",
        "thewolfslayerrare": "The Wolfslayer",
        "thermalamuletrare": "Thermal Amulet",
        "thermalringrare": "Thermal Ring",
        "thornyringrare": "Thorny Ring",
        "thousandneedlesrare": "Thousand Needles",
        "throwbolasrare": "Throw Bolas",
        "tikimaskrare": "Tiki Mask",
        "titanfallrare": "Titan Fall",
        "titangauntletsrare": "Titan Gauntlets",
        "tomeofintellectrare": "Tome of Intellect",
        "topazringrare": "Topaz Ring",
        "torchrare": "Torch",
        "tormentofthornsrare": "Torment of Thorns",
        "touristmaprare": "Tourist Map",
        "toxicblobpetrare": "Toxic Blob",
        "toxicrainrare": "Toxic Rain",
        "toxicsplashpetrare": "Toxic Splash",
        "toxicstrikerare": "Toxic Strike",
        "tracerare": "Trace",
        "transfusionrare": "Transfusion",
        "transmisionrare": "Transmission",
        "tremorsrare": "Tremors",
        "tuneuprare": "Tune Up",
        "turbanrare": "Turban",
        "twilightswamprare": "Twilight Swamp",
        "twinbladesrare": "Twin Blades",
        "tyrantnecklacerare": "Tyrant Necklace",
        "undeathichorrare": "Undeath Ichor",
        "unholyhammerrare": "Unholy Hammer",
        "unholystormrare": "Unholy Storm",
        "unstablepowerrare": "Unstable Power",
        "uprootrare": "Uproot",
        "vampirictouchrare": "Vampiric Touch",
        "vampirictutorrare": "Vampiric Tutor",
        "vanishrare": "Vanish",
        "venomamuletrare": "Venom Amulet",
        "venomfangrare": "Venom Fang",
        "veteranarmorrare": "Veteran Armor",
        "vexingcrescendorare": "Vexing Crescendo",
        "vigilancerare": "Vigilance",
        "vilegasrare": "Vile Gas",
        "vilelancerare": "Vile Lance",
        "vileringrare": "Vile Ring",
        "viperringrare": "Viper Ring",
        "viperstrikerare": "Viper Strike",
        "virulentringrare": "Virulent Ring",
        "visionringrare": "Vision Ring",
        "vitalizerare": "Vitalize",
        "vitalizingserenaderare": "Vitalizing Serenade",
        "voidcrushrare": "Void Crush",
        "volcanicaxerare": "Volcanic Axe",
        "volleyrare": "Volley",
        "voodoodollrare": "Voodoo Doll",
        "warbannerrare": "War Banner",
        "wardrumrare": "War Drum",
        "warhammerrare": "War Hammer",
        "warpaintrare": "Warpaint",
        "warriorcoderare": "Warrior Code",
        "waterblobpetrare": "Water Blob",
        "waterjetrare": "Water Jet",
        "watersplashpetrare": "Water Splash",
        "watervaserare": "Water Vase",
        "weaponcacherare": "Weapon Cache",
        "weaponpouchrare": "Weapon Pouch",
        "whirlwindrare": "Whirlwind",
        "whisperingliesrare": "Whispering Lies",
        "wickedcraftsmanrare": "Wicked Craftsman",
        "wingedwandrare": "Winged Wand",
        "winteriscomingrare": "Winter Is Coming",
        "winterorbrare": "Winter Orb",
        "wintersnighttalerare": "Winter's Night Tale",
        "wolfskincloackrare": "Wolfskin Cloak",
        "wolfyrare": "Wolfy",
        "woodencrosierrare": "Wooden Crosier",
        "woollyhatrare": "Woolly Hat",
        "wreckingballrare": "Wrecking Ball",
        "xulrunestonerare": "Xul Runestone",
        "yggdrasilrootrare": "Yggdrasil Root",
        "yinyangbadgerare": "Yin Yang Badge",
        "yinyangboltrare": "Yin Yang Bolt",
        "ylmerbranchrare": "Ylmer's Branch",
        "yoggercleaverrare": "Yogger's Cleaver",
        "zaprare": "Zap"
    }
};
var vanillaCards = {};

var cardTypes = [];
var discardCardTypes = [];
var addCardTypes = [];
var addCardList = [];
var cardObj = defaultCard;
var itemObj = defaultItem;
var cardToGainList = [];
var customCards = {};
var cardsAdded = [];
var uploadingCards = {};
var uploadingSprites = {};
var customSprites = {}; // { spriteName: blob object }
var customSpriteObjURLs = {}; // { spriteName: blob url } used because we don't want duplicates (I have no idea how much of an impact it has on users :))
// var customSpriteJSON = {}; // { spriteName: blob as string } used to save to localStorage (though I should be using indexedDB, and will shift there post-June)
var vanillaSprites = {}; // { spriteName: blob object } used because we don't want to save these to localStorage (only limited space!)
var medsLocks = {};
var duplicateCard = {};
var hoverCardSVGs = {}; // surely there's a way around this

const defaultCustomSprites = ["ss_arcaneritual", "ss_astralprojection", "ss_awakening", "ss_beckoningdeath", "ss_bladeofnature", "ss_blight", "ss_bloodmoney", "ss_bloodthirsty", "ss_bombearrings", "ss_book1", "ss_book2", "ss_book3", "ss_calloftheobelisk", "ss_cataclysm", "ss_celestialbeing", "ss_charge_rattery", "ss_crackofthunder", "ss_darkblade", "ss_darkmatter", "ss_darknlight", "ss_despairingdepths", "ss_devour", "ss_divinepresence", "ss_duplikate", "ss_eclipse", "ss_fireicelightning", "ss_flowerblade", "ss_flushwithfrogs", "ss_flyfree", "ss_frogchoir", "ss_frogfam", "ss_frostblade", "ss_furiousflames", "ss_gearup", "ss_glassring", "ss_goldenapple", "ss_goldrubyring", "ss_handoffate", "ss_hands_darkness", "ss_hedgewitch_breakthrough", "ss_hedgewitch_concordance", "ss_hedgewitch_control", "ss_hedgewitch_crossover", "ss_hedgewitch_defensive", "ss_hedgewitch_delight", "ss_hedgewitch_family", "ss_hedgewitch_hoard", "ss_hedgewitch_incandescent", "ss_hedgewitch_innerfury", "ss_hedgewitch_invocation", "ss_hedgewitch_magictouch", "ss_hedgewitch_portal1", "ss_hedgewitch_portal2", "ss_hedgewitch_portal3", "ss_hedgewitch_portal4", "ss_hedgewitch_powerglow", "ss_hedgewitch_sacrifice", "ss_hedgewitch_spiritswithin", "ss_hedgewitch_spiritswithout", "ss_hedgewitch_terror", "ss_hedgewitch_uncontrolled", "ss_hellfire_earrings", "ss_horde", "ss_imbuedelectricity", "ss_koalesce", "ss_luckydice", "ss_luckydice2", "ss_mindhammer", "ss_murderousintent", "ss_naturalbeauty", "ss_naturebloom", "ss_naturesblessing", "ss_naturesfury", "ss_newdawn", "ss_purpleblade", "ss_ratarmy", "ss_ratarmy2", "ss_righteousrod", "ss_ringofstone", "ss_risingdarkness", "ss_rune1", "ss_rune2", "ss_runicshackles", "ss_sanguinescroll", "ss_scroll1", "ss_scroll2", "ss_selfenchant", "ss_serpent", "ss_silverrubyring", "ss_songofthesea", "ss_spicypasta", "ss_starbody", "ss_stormblade", "ss_sunrise", "ss_sunspot", "ss_swashbucklunge", "ss_swordofflowers", "ss_thousandyardstare", "ss_triumph", "ss_unadultpern", "ss_virtuousjustice", "ss_voidstone", "ss_wand1", "ss_wand2", "ss_wand3", "ss_wand4", "ss_weatherblade", "ss_whiteflag", "ss_whiteflag2"];


var db = new Dexie("customContent");

db.version(1).stores({
    sprites: `
        name,
        type,
        blob`,
});

$(window).on("resize", function () {
    resizeWindow();
});

$(document).ready(function () {
    document.title = "AtO Custom Content";
    $("select[meds-select-enums]").each(function () {
        var select = $(this);
        $(this).attr("meds-select-enums").split(", ").forEach(function (en) {
            $.each(Enums[en], function (key, value) {
                $('<option/>', { value: key, text: value }).appendTo(select);
            });
        });
    });

    var myDefaultAllowList = bootstrap.Tooltip.Default.allowList;
    myDefaultAllowList.table = [];
    myDefaultAllowList.tr = ['style'];
    myDefaultAllowList.td = ['colspan', 'style', 'id', 'class'];
    myDefaultAllowList.th = [];
    myDefaultAllowList.tbody = [];
    myDefaultAllowList.thead = [];
    myDefaultAllowList.div = ['class', 'id', 'style'];
    myDefaultAllowList.svg = ["viewBox", "style", "width", "height"];
    myDefaultAllowList.g = [];
    myDefaultAllowList.foreignObject = ["width", "height", "x", "y"];
    myDefaultAllowList.image = ["width", "height", "x", "y", "xlink:href"];
    myDefaultAllowList.text = ["x", "y", "class", "text-anchor", "dominant-baseline"];

    Object.keys(vanillaCardList.No).forEach(function (cardID) {
        $("#select_new_card_vanilla").append(`<option value="` + cardID + `">` + vanillaCardList.No[cardID] + `</option>`);
    });
    $("#select_new_card_vanilla").val("defend");

    // #TODO (but after customCards has loaded): add a datalist for discover card IDs
    // for (var a = 0; )
    //$("#text_card_id_add_datalist").append();

    // card type
    $("#btn_card_type_add").on('click', function () {
        var newType = $.trim($("#select_card_type option:selected").val());
        var i = cardTypes.indexOf(newType);
        i === -1 ? cardTypes.push(newType) : cardTypes.splice(i, 1);
        if (cardTypes.length > 1 && cardTypes[0] === "None") { cardTypes.splice(0, 1); };
        updateDisplay();
    });
    $("#btn_card_type_clear").on('click', function () {
        cardTypes = [];
        updateDisplay();
    });

    // discard card type
    $("#btn_discard_card_type_add").on('click', function () {
        var newType = $.trim($("#select_discard_card_type option:selected").val());
        var i = discardCardTypes.indexOf(newType);
        i === -1 ? discardCardTypes.push(newType) : discardCardTypes.splice(i, 1);
        if (discardCardTypes.length > 1 && discardCardTypes[0] === "None") { discardCardTypes.splice(0, 1); };
        updateDisplay();
    });
    $("#btn_discard_card_type_clear").on('click', function () {
        discardCardTypes = [];
        updateDisplay();
    });

    // add card type
    $("#btn_add_card_type_add").on('click', function () {
        var newType = $.trim($("#select_add_card_type option:selected").val());
        var i = addCardTypes.indexOf(newType);
        i === -1 ? addCardTypes.push(newType) : addCardTypes.splice(i, 1);
        if (addCardTypes.length > 1 && addCardTypes[0] === "None") { addCardTypes.splice(0, 1); };
        updateDisplay();
    });
    $("#btn_add_card_type_clear").on('click', function () {
        addCardTypes = [];
        updateDisplay();
    });

    // add card id
    $("#btn_add_card_list_add").on('click', function () {
        var newType = $.trim($("#select_add_card_list_add").val());
        var i = addCardList.indexOf(newType);
        i === -1 ? addCardList.push(newType) : addCardList.splice(i, 1);
        if (addCardList.length > 1 && addCardList[0] === "None") { addCardList.splice(0, 1); };
        updateDisplay();
    });
    $("#btn_add_card_list_clear").on('click', function () {
        addCardList = [];
        updateDisplay();
    });

    // add card id to item
    $("#btn_cardtogainlist_add").on('click', function () {
        var newID = $.trim($("#text_cardtogainlist_add").val());
        var i = cardToGainList.indexOf(newID);
        i === -1 ? cardToGainList.push(newID) : cardToGainList.splice(i, 1);
        updateDisplay();
    });
    $("#btn_cardtogainlist_clear").on('click', function () {
        cardToGainList = [];
        updateDisplay();
    });

    $("#btn_menu_show").on('click', function () {
        if (localStorage.getItem("cardview_open") === "false") {
            localStorage.setItem("cardview_open", true);
        } else {
            localStorage.setItem("cardview_open", false);
        };
        updateCardListDisplay();
    });
    $("#svg_card_side").on('shown.bs.collapse', function () {
        boxfitCard("#svg_card_side");
    });
    $("#btn_menu_list").on('click', function () {
        if (localStorage.getItem("cardlist_open") === "false") {
            localStorage.setItem("cardlist_open", true);
        } else {
            localStorage.setItem("cardlist_open", false);
        };
        updateCardListDisplay();
    });
    $("#btn_menu_download").on('click', function () {
    });

    $("#btn_menu_download").popover({
        html: true,
        content: `<div class="d-flex flex-column w-100">
                        <button id="btn_download_this" class="btn btn-success mb-1" type="button">Card</button>
                        <button id="btn_download_upgrades" class="btn btn-success mb-1" type="button">Card + Upgrades</button>
                        <button id="btn_download_all" class="btn btn-success" type="button">All Cards</button>
                </div>`,
        title: ``,
        sanitize: false,
        trigger: 'click',
        placement: 'bottom'
    });
    $("#btn_menu_download").on('inserted.bs.popover', function () {
        $("#btn_download_this").on('click', function () {
            var zip = new JSZip();
            zip.folder("Obeliskial_importing").folder("card").file($("#text_id").val() + ".json", JSON.stringify(cardObj, null, 4));
            if (vanillaSprites.hasOwnProperty(cardObj.Sprite)) {
                zip.folder("Obeliskial_importing").folder("sprite").file(cardObj.Sprite + ".png", vanillaSprites[cardObj.Sprite]);
            } else if (customSprites.hasOwnProperty(cardObj.Sprite)) {
                zip.folder("Obeliskial_importing").folder("sprite").file(cardObj.Sprite + ".png", customSprites[cardObj.Sprite]);
            };
            zip.generateAsync({ type: "blob" }).then(function (content) {
                saveAs(content, $("#text_id").val() + ".zip");
            });
            $("#btn_menu_download").popover("hide");
        });
        $("#btn_download_upgrades").on('click', function () {
            var zip = new JSZip();
            // zip.folder("Obeliskial_importing").folder("card").file($("#text_id").val() + ".json", JSON.stringify(cardObj, null, 4));
            var baseCard = customCards.hasOwnProperty(cardObj.BaseCard) ? customCards[cardObj.BaseCard] : cardObj;
            zip.folder("Obeliskial_importing").folder("card").file(baseCard.ID + ".json", JSON.stringify(baseCard, null, 4));
            var spriteBlob = getSpriteBlob(baseCard.Sprite);
            if (spriteBlob != "failure") { zip.folder("Obeliskial_importing").folder("sprite").file(baseCard.Sprite + ".png", spriteBlob); }
            if (baseCard.UpgradesTo1.length > 0 && customCards.hasOwnProperty(baseCard.UpgradesTo1)) {
                zip.folder("Obeliskial_importing").folder("card").file(baseCard.UpgradesTo1 + ".json", JSON.stringify(customCards[baseCard.UpgradesTo1], null, 4));
                spriteBlob = getSpriteBlob(customCards[baseCard.UpgradesTo1].Sprite);
                if (spriteBlob != "failure") { zip.folder("Obeliskial_importing").folder("sprite").file(customCards[baseCard.UpgradesTo1].Sprite + ".png", spriteBlob); }
            };
            if (baseCard.UpgradesTo2.length > 0 && customCards.hasOwnProperty(baseCard.UpgradesTo2)) {
                zip.folder("Obeliskial_importing").folder("card").file(baseCard.UpgradesTo2 + ".json", JSON.stringify(customCards[baseCard.UpgradesTo2], null, 4));
                spriteBlob = getSpriteBlob(customCards[baseCard.UpgradesTo2].Sprite);
                if (spriteBlob != "failure") { zip.folder("Obeliskial_importing").folder("sprite").file(customCards[baseCard.UpgradesTo2].Sprite + ".png", spriteBlob); }
            };
            if (baseCard.UpgradesToRare.length > 0 && customCards.hasOwnProperty(baseCard.UpgradesToRare)) {
                zip.folder("Obeliskial_importing").folder("card").file(baseCard.UpgradesToRare + ".json", JSON.stringify(customCards[baseCard.UpgradesToRare], null, 4));
                spriteBlob = getSpriteBlob(customCards[baseCard.UpgradesToRare].Sprite);
                if (spriteBlob != "failure") { zip.folder("Obeliskial_importing").folder("sprite").file(customCards[baseCard.UpgradesToRare].Sprite + ".png", spriteBlob); }
            };
            zip.generateAsync({ type: "blob" }).then(function (content) {
                saveAs(content, baseCard.ID + "_all.zip");
            });
            $("#btn_menu_download").popover("hide");
        });
        $("#btn_download_all").on('click', function () {
            var zip = new JSZip();
            Object.keys(customCards).forEach(function (cardID) {
                zip.folder("Obeliskial_importing").folder("card").file(cardID + ".json", JSON.stringify(customCards[cardID], null, 4));
                var spriteBlob = getSpriteBlob(customCards[cardID].Sprite);
                if (spriteBlob != "failure") { zip.folder("Obeliskial_importing").folder("sprite").file(customCards[cardID].Sprite + ".png", spriteBlob); }
            });
            zip.generateAsync({ type: "blob" }).then(function (content) {
                saveAs(content, "customCards.zip");
            });
            $("#btn_menu_download").popover("hide");
        });
    });

    $("#modal_new_card").on('shown.bs.modal', function () {
        var newHTML = "";
        var doneIDs = [];
        Object.keys(customCards).sort().forEach(function (cardID) {
            var card = customCards[cardID];
            if (!(doneIDs.includes(card.ID)) && card.CardUpgraded === "No") {
                newHTML += `<option value="` + card.ID + `">` + neverBlankName(card.CardName) + `</option>`;
                doneIDs.push(card.ID);
            } else if (customCards.hasOwnProperty(card.UpgradedFrom) && !(doneIDs.includes(card.UpgradedFrom))) {
                newHTML += `<option value="` + card.UpgradedFrom + `">` + neverBlankName(card.CardName) + `</option>`;
                doneIDs.push(card.UpgradedFrom);
            } else if (!(doneIDs.includes(card.UpgradedFrom))) {
                newHTML += `<option value="` + card.ID + `">` + neverBlankName(card.CardName)+ `</option>`;
                doneIDs.push(card.ID);
            };
        });
        $("#select_new_card_custom").html(newHTML);
        getNewCardObjects();
    });
    $("#modal_sprite_library").on('hidden.bs.modal', function () {
        $("#btn_upload_sprite").prop("disabled", true);
        $("#file_upload_sprite").val("");
    });
    $("#file_upload_sprite").on('input', function () {
        if ($("#file_upload_sprite")[0].files.length > 0) {
            $("#btn_upload_sprite").prop("disabled", false);
        } else {
            $("#btn_upload_sprite").prop("disabled", true);
        };
    });
    $("#btn_upload_sprite").on('click', async function () {
        for (var a = 0; a < $("#file_upload_sprite")[0].files.length; a++) {
            if (!$("#file_upload_sprite")[0].files[a].type === "image/png") {
                continue;
            };
            var spriteName = $("#file_upload_sprite")[0].files[a].name.toLowerCase().replace(".png", "");
            const imgDataURI = await new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.onloadend = async () => {
                    resolve(reader.result);
                };
                reader.onerror = async (err) => {
                    console.log("Error reading file: " + file.name);
                    reject(err);
                };
                reader.readAsDataURL($("#file_upload_sprite")[0].files[a]);
            });
            if (customSprites.hasOwnProperty(spriteName)) {
                // #TODO: "sprite with this name already exists. do you want to overwrite?"
                if ($('[custom-sprite-id="' + spriteName + '"]').length > 0) {
                    $('[custom-sprite-id="' + spriteName + '"]').parent("div.col").remove();
                };
            };
            var res = await resizeAndBlob(imgDataURI, 256, 256);
            await addCustomSprite(spriteName, res);
        };
        $("#file_upload_sprite").val("");
    });
    $("#text_id").on('input', function () {
        $(this).val($(this).val().toLowerCase().replaceAll(" ", ""));
    });
    $("#text_id").on('change', function () {
        $(this).val($(this).val().toLowerCase().replaceAll(" ", ""));
        updateDisplay();
    });
    $('[meds-on-input="lc-update-display"]').on('input', function () {
        $(this).val($(this).val().toLowerCase().replaceAll(" ", ""));
        updateDisplay();
    });
    $('[meds-on-input="update-display"]').on('input', function () { updateDisplay() });
    $('[meds-on-input="update-new-card"]').on('input', function () { getNewCardObjects(); });
    $("#file_new_card_upload").on('input', function () {
        $("#radio_new_card_upload").prop("checked", true);
        getNewCardObjects();
    });
    $("#select_new_card_vanilla").on('change', function () {
        $("#radio_new_card_vanilla").prop("checked", true);
        getNewCardObjects();
    });
    $("#select_new_card_custom").on('change', function () {
        $("#radio_new_card_custom").prop("checked", true);
        getNewCardObjects();
    });
    $("#text_new_card_json").on('keyup', function () {
        $("#radio_new_card_json").prop("checked", true);
        getNewCardObjects();
    });
    $("#text_new_card_json").on('change', function () {
        $("#radio_new_card_json").prop("checked", true);
        getNewCardObjects();
    });
    $("#btn_show_help").on('click', function () {
        bootstrap.Modal.getOrCreateInstance("#modal_help").show();
    });
    $("#btn_show_settings").on('click', function () {
        bootstrap.Modal.getOrCreateInstance("#modal_settings").show();
    });
    $("#btn_menu_new").on('click', function () {
        bootstrap.Modal.getOrCreateInstance("#modal_new_card").show();
    });
    $("#btn_sprite_library").on('click', function () {
        bootstrap.Modal.getOrCreateInstance("#modal_sprite_library").show();
    });
    $("#btn_menu_delete").popover({
        html: true,
        content: `<div class="btn-group w-100" role="group" aria-label="Delete: yes or no?">
                        <button id="btn_delete_yes" class="btn btn-danger w-50" type="button">Yes</button>
                        <button id="btn_delete_no" class="btn btn-primary w-50" type="button">No</button>
                </div>`,
        title: `Are you sure?`,
        sanitize: false,
        trigger: 'click',
        placement: 'bottom'
    });
    $("#btn_menu_delete").on('inserted.bs.popover', function () {
        $("#btn_delete_yes").on('click', function () {
            if (customCards.hasOwnProperty($("#text_id").val())) {
                delete customCards[$("#text_id").val()]
            };

            cardObj = Object.keys(customCards).length > 0 ? Object.values(customCards)[0] : defaultCard; // don't care if return order not guaranteed
            cardObject2Fields(cardObj);
            updateDisplay();
            $("#btn_menu_delete").popover("hide");
        });
        $("#btn_delete_no").on('click', function () {
            $("#btn_menu_delete").popover("hide");
        });
    });

    $("#btn_delete_all").popover({
        html: true,
        content: `<div class="btn-group w-100" role="group" aria-label="Delete all: yes or no?">
                        <button id="btn_delete_all_yes" class="btn btn-danger w-50" type="button">Yes</button>
                        <button id="btn_delete_all_no" class="btn btn-primary w-50" type="button">No</button>
                </div>`,
        title: `Are you sure?`,
        sanitize: false,
        trigger: 'click',
        placement: 'bottom'
    });
    $("#btn_delete_all").on('inserted.bs.popover', function () {
        $("#btn_delete_all_yes").on('click', function () {
            localStorage.clear();
            db.open().then(() => {
                return db.delete();
            })
            location.reload();
        });
        $("#btn_delete_all_no").on('click', function () {
            $("#btn_delete_all").popover("hide");
        });
    });
    $("#btn_new_card_create").on('click', function () {
        if ($(this).html() == "Create") {
            newCardCreate("create");
        } else {
            newCardCreate("show");
        };
    });
    $("#btn_new_card_overwrite").on('click', function () {
        newCardCreate("overwrite");
    });
    $("#btn_new_card_copy").on('click', function () {
        newCardCreate("copy");
    });

    $("#btn_create_upgrades").popover({
        html: true,
        content: `<div class="mb-1 text-center">
                        Automatically creates upgrades based&nbsp;on&nbsp;current&nbsp;card.&nbsp;Very&nbsp;basic.
                    </div>
                    <div class="btn-group w-100" role="group" aria-label="Create Upgrades: are you sure?">
                        <button id="btn_create_upgrades_yes" class="btn btn-danger w-50" type="button">Yes</button>
                        <button id="btn_create_upgrades_no" class="btn btn-primary w-50" type="button">No</button>
                    </div>`,
        title: `Are you sure?`,
        sanitize: false,
        trigger: 'click',
        placement: 'bottom'
    });
    $("#btn_create_upgrades").on('inserted.bs.popover', function () {
        $("#btn_create_upgrades_yes").on('click', function () {
            if (["Weapon", "Armor", "Jewelry", "Accesory", "Pet"].includes($("#select_card_class").val())) {
                // console.log("ITEM");
                var newC = Object.assign({}, cardObj);
                newC.ID = newC.ID + "rare";
                newC.UpgradedFrom = cardObj.ID;
                $("#text_upgrades_to_rare").val(newC.ID);
                cardObj.UpgradesToRare = newC.ID;
                newC.CardUpgraded = "Rare";
                newC.UpgradesTo1 = "";
                newC.UpgradesTo2 = "";
                newC.UpgradesToRare = "";
                var itemC = JSON.parse(newC.Item);
                if (itemC.DamageFlatBonusValue > 0) {
                    itemC.DamageFlatBonusValue += 1;
                };
                if (itemC.AuraCurseBonusValue1 > 0) {
                    itemC.AuraCurseBonusValue1 += 1;
                };
                if (itemC.CharacterStatModifiedValue > 0) {
                    itemC.CharacterStatModifiedValue += 1;
                };
                if (itemC.AuraCurseGainValue1 > 0) {
                    itemC.AuraCurseGainValue1 += 1;
                };
                if (itemC.AuraCurseGainSelfValue1 > 0) {
                    itemC.AuraCurseGainSelfValue1 += 1;
                };
                if (itemC.DamageToTarget > 0) {
                    itemC.DamageToTarget += 1;
                };
                if (itemC.HealQuantity > 0) {
                    itemC.HealQuantity += 1;
                };
                if (itemC.TimesPerCombat > 0) {
                    itemC.TimesPerCombat += 1;
                } else if (itemC.TimesPerTurn > 0) {
                    itemC.TimesPerTurn += 1;
                } else if (itemC.DestroyAfterUses > 0) {
                    itemC.DestroyAfterUses += 1;
                };
                if (itemC.HealFlatBonus > 0) {
                    itemC.HealFlatBonus += 1;
                };
                if (itemC.HealReceivedFlatBonus > 0) {
                    itemC.HealReceivedFlatBonus += 1;
                };
                if (itemC.PercentDiscountShop > 0) {
                    itemC.PercentDiscountShop += 10;
                };
                newC.Item = JSON.stringify(itemC);
                customCards[newC.ID] = newC;
            } else if ($("#select_card_class").val() == "Enchantment") {
                // console.log("ENCH");
                var newB = Object.assign({}, cardObj);
                newB.ID = newB.ID + "b";
                newB.UpgradedFrom = cardObj.ID;
                $("#text_upgrades_to_b").val(newB.ID);
                cardObj.UpgradesTo2 = newB.ID;
                newB.CardUpgraded = "B";
                newB.UpgradesTo1 = "";
                newB.UpgradesTo2 = "";
                newB.UpgradesToRare = "";
                var itemB = JSON.parse(newB.ItemEnchantment);
                var newA = Object.assign({}, cardObj);
                newA.ID = newA.ID + "a";
                newA.UpgradedFrom = cardObj.ID;
                $("#text_upgrades_to_a").val(newA.ID);
                cardObj.UpgradesTo1 = newA.ID;
                newA.CardUpgraded = "A";
                newA.UpgradesTo1 = "";
                newA.UpgradesTo2 = "";
                newA.UpgradesToRare = "";
                var itemA = JSON.parse(newA.ItemEnchantment);

                if (itemA.DamageFlatBonusValue > 0) {
                    itemA.DamageFlatBonusValue += 1;
                    itemB.DamageFlatBonusValue += 2;
                };
                if (itemA.AuraCurseBonusValue1 > 0) {
                    itemA.AuraCurseBonusValue1 += 1;
                    itemB.AuraCurseBonusValue1 += 2;
                };
                if (itemA.CharacterStatModifiedValue > 0) {
                    itemA.CharacterStatModifiedValue += 1;
                    itemB.CharacterStatModifiedValue += 2;
                };
                if (itemA.AuraCurseGainValue1 > 0) {
                    itemA.AuraCurseGainValue1 += 1;
                    itemB.AuraCurseGainValue1 += 2;
                };
                if (itemA.AuraCurseGainSelfValue1 > 0) {
                    itemA.AuraCurseGainSelfValue1 += 1;
                    itemB.AuraCurseGainSelfValue1 += 2;
                };
                if (itemA.DamageToTarget > 0) {
                    itemA.DamageToTarget += 1;
                    itemB.DamageToTarget += 2;
                };
                if (itemA.HealQuantity > 0) {
                    itemA.HealQuantity += 1;
                    itemB.HealQuantity += 2;
                };
                if (itemA.TimesPerCombat > 0) {
                    itemA.TimesPerCombat += 1;
                    itemB.TimesPerCombat += 2;
                } else if (itemA.TimesPerTurn > 0) {
                    itemA.TimesPerTurn += 1;
                    itemB.TimesPerTurn += 2;
                } else if (itemA.DestroyAfterUses > 0) {
                    var base = itemA.DestroyAfterUses;
                    itemA.DestroyAfterUses = Math.trunc(itemA.DestroyAfterUses * 1.2);
                    itemB.DestroyAfterUses = Math.trunc(itemB.DestroyAfterUses * 1.5);
                    if (itemA.DestroyAfterUses == base) {
                        itemA.DestroyAfterUses = base + 1;
                        itemB.DestroyAfterUses = base + 2;
                    };
                };
                if (itemA.HealFlatBonus > 0) {
                    itemA.HealFlatBonus += 1;
                    itemB.HealFlatBonus += 2;
                };
                if (itemA.HealReceivedFlatBonus > 0) {
                    itemA.HealReceivedFlatBonus += 1;
                    itemB.HealReceivedFlatBonus += 2;
                };
                newA.Item = JSON.stringify(itemA);
                newB.Item = JSON.stringify(itemB);
                customCards[newA.ID] = newA;
                customCards[newB.ID] = newB;
            } else {
                // console.log("CARDUPGRADE");
                var newA = Object.assign({}, cardObj);
                var newB = Object.assign({}, cardObj);
                var newC = Object.assign({}, cardObj);
                newA.ID = newA.ID + "a";
                newB.ID = newB.ID + "b";
                newC.ID = newC.ID + "rare";
                newA.UpgradedFrom = cardObj.ID;
                newB.UpgradedFrom = cardObj.ID;
                newC.UpgradedFrom = cardObj.ID;
                $("#text_upgrades_to_a").val(newA.ID);
                $("#text_upgrades_to_b").val(newB.ID);
                $("#text_upgrades_to_rare").val(newC.ID);
                cardObj.UpgradesTo1 = newA.ID;
                cardObj.UpgradesTo2 = newB.ID;
                cardObj.UpgradesToRare = newC.ID;
                newA.CardUpgraded = "A";
                newB.CardUpgraded = "B";
                newC.CardUpgraded = "Rare";
                newA.UpgradesTo1 = "";
                newA.UpgradesTo2 = "";
                newA.UpgradesToRare = "";
                newB.UpgradesTo1 = "";
                newB.UpgradesTo2 = "";
                newB.UpgradesToRare = "";
                newC.UpgradesTo1 = "";
                newC.UpgradesTo2 = "";
                newC.UpgradesToRare = "";
                newC.Vanish = true;
                if (newA.EnergyCost > 0) {
                    newA.EnergyCost = newA.EnergyCost - 1;
                    newC.EnergyCost = newC.EnergyCost - 1;
                } else if (newA.Damage > 0) {
                    newA.Damage = newA.Damage + 2;
                    newC.Damage = newC.Damage + 2;
                    if (newA.Damage2 > 0) {
                        newA.Damage2 = newA.Damage2 + 2;
                        newC.Damage2 = newC.Damage2 + 2;
                    };
                } else if (newA.Heal > 0) {
                    newA.Heal = newA.Heal + 2;
                    newC.Heal = newC.Heal + 2;
                } else if (!newA.Innate) {
                    newA.Innate = true;
                    newC.Innate = true;
                };
                if (newB.Aura !== "" || newB.AuraSelf !== "" || newB.Curse !== "" || newB.CurseSelf !== "") {
                    if (newB.Aura !== "" || newB.AuraSelf !== "") {
                        newB.AuraCharges = newB.AuraCharges + 2;
                        newC.AuraCharges = newC.AuraCharges + 2;
                    };
                    if (newB.Aura2 !== "" || newB.AuraSelf2 !== "") {
                        newB.AuraCharges2 = newB.AuraCharges2 + 2;
                        newC.AuraCharges2 = newC.AuraCharges2 + 2;
                    };
                    if (newB.Aura3 !== "" || newB.AuraSelf3 !== "") {
                        newB.AuraCharges3 = newB.AuraCharges3 + 2;
                        newC.AuraCharges3 = newC.AuraCharges3 + 2;
                    };
                    if (newB.Curse !== "" || newB.CurseSelf !== "") {
                        newB.CurseCharges = newB.CurseCharges + 2;
                        newC.CurseCharges = newC.CurseCharges + 2;
                    };
                    if (newB.Curse2 !== "" || newB.CurseSelf2 !== "") {
                        newB.CurseCharges2 = newB.CurseCharges2 + 2;
                        newC.CurseCharges2 = newC.CurseCharges2 + 2;
                    };
                    if (newB.Curse3 !== "" || newB.CurseSelf3 !== "") {
                        newB.CurseCharges3 = newB.CurseCharges3 + 2;
                        newC.CurseCharges3 = newC.CurseCharges3 + 2;
                    };
                } else if (newB.Vanish) {
                    newB.Vanish = false;
                } else if (newB.TargetType === "Single" && newB.TargetSide !== "Self") {
                    newB.TargetType = "Global";
                    newC.TargetType = "Global";
                };
                customCards[newA.ID] = newA;
                customCards[newB.ID] = newB;
                customCards[newC.ID] = newC;
            };
            $("#btn_create_upgrades").popover("hide");
            updateDisplay();
        });
        $("#btn_create_upgrades_no").on('click', function () {
            $("#btn_create_upgrades").popover("hide");
        });
    });

    $("#btn_new_card_json_clear").on('click', function () {
        $("#text_new_card_json").val("");
        getNewCardObjects();
    });

    $("button[meds-lock]").on('click', function () {
        var locking = false;
        if (!medsLocks.hasOwnProperty(cardObj.BaseCard)) {
            medsLocks[cardObj.BaseCard] = [];
        };
        if (medsLocks[cardObj.BaseCard].includes($(this).attr("meds-lock"))) {
            locking = true;
        };
        if (locking) {
            $(this).removeClass("btn-danger");
            $(this).addClass("btn-success");
            $(this).children("i").removeClass("bi-unlock-fill");
            $(this).children("i").addClass("bi-lock-fill");
            medsLocks[cardObj.BaseCard].splice(medsLocks[cardObj.BaseCard].indexOf($(this).attr("meds-lock")), 1);
        } else {
            $(this).removeClass("btn-success");
            $(this).addClass("btn-danger");
            $(this).children("i").removeClass("bi-lock-fill");
            $(this).children("i").addClass("bi-unlock-fill");
            medsLocks[cardObj.BaseCard].push($(this).attr("meds-lock"));
        };
        localStorage.setItem("medsLocks", JSON.stringify(medsLocks));
    });
    
    $("#check_show_advanced").on('change', function () {
        if ($("#check_show_advanced").is(':checked')) {
            localStorage.setItem("settings_advanced", "true");
        } else {
            localStorage.setItem("settings_advanced", "false");
        };
        updateDisplay();
    });

    $("#check_side_menu_absolute").on('change', function () {
        if ($("#check_side_menu_absolute").is(':checked')) {
            localStorage.setItem("settings_side_menu_absolute", "true");
        } else {
            localStorage.setItem("settings_side_menu_absolute", "false");
        };
        resizeWindow();
    });

    $(window).on("resize", function () {
        updateCardListDisplay();
    });

    startUp();
});

function cardObject2Fields(card) {
    var t = "";
    // empty fields
    if (Object.entries(card).sort().toString() !== Object.entries(defaultCard).sort().toString()) { cardObject2Fields(defaultCard); };
    itemObj = defaultItem;
    if (card.Item.length > 0) {
        // item/enchantment
        itemObj = JSON.parse(card.Item);
    } else if (card.ItemEnchantment.length > 0) {
        itemObj = JSON.parse(card.ItemEnchantment);
    };
    cardTypes = [];
    if (card.CardClass === "Item") {
        $("#select_card_class").val(card.CardType);
    } else if (card.CardClass === "Special" && card.CardType === "Enchantment") {
        $("#select_card_class").val("Enchantment");
    } else {
        $("#select_card_class").val(card.CardClass);
    };
    $("#select_card_upgraded").val(card.CardUpgraded);
    $("#text_base_card").val(card.BaseCard.toLowerCase());
    $("#text_upgrades_to_a").val(card.UpgradesTo1.toLowerCase());
    $("#text_upgrades_to_b").val(card.UpgradesTo2.toLowerCase());
    $("#text_upgrades_to_rare").val(card.UpgradesToRare.toLowerCase());
    $("#text_name").val(card.CardName);
    $("#select_card_rarity").val(card.CardRarity);
    $("#text_id").val(card.ID);
    // item
    $("#check_curseditem").prop("checked", itemObj.CursedItem);
    $("#check_passsingleandcharacterrolls").prop("checked", itemObj.PassSingleAndCharacterRolls);
    $("#amount_percentdiscountshop").val(itemObj.PercentDiscountShop);
    $("#amount_percentretentionendgame").val(itemObj.PercentRetentionEndGame);
    if (itemObj.CharacterStatModified === "Speed" && itemObj.CharacterStatModifiedValue != 0) {
        $("#amount_characterstatspeed").val(itemObj.CharacterStatModifiedValue);
    } else if (itemObj.CharacterStatModified2 === "Speed" && itemObj.CharacterStatModifiedValue2 != 0) {
        $("#amount_characterstatspeed").val(itemObj.CharacterStatModifiedValue2);
    } else if (itemObj.CharacterStatModified3 === "Speed" && itemObj.CharacterStatModifiedValue3 != 0) {
        $("#amount_characterstatspeed").val(itemObj.CharacterStatModifiedValue3);
    } else {
        $("#amount_characterstatspeed").val(0);
    };
    if (itemObj.CharacterStatModified === "EnergyTurn" && itemObj.CharacterStatModifiedValue != 0) {
        $("#amount_characterstatenergyperturn").val(itemObj.CharacterStatModifiedValue);
    } else if (itemObj.CharacterStatModified2 === "EnergyTurn" && itemObj.CharacterStatModifiedValue2 != 0) {
        $("#amount_characterstatenergyperturn").val(itemObj.CharacterStatModifiedValue2);
    } else if (itemObj.CharacterStatModified3 === "EnergyTurn" && itemObj.CharacterStatModifiedValue3 != 0) {
        $("#amount_characterstatenergyperturn").val(itemObj.CharacterStatModifiedValue3);
    } else {
        $("#amount_characterstatenergyperturn").val(0);
    };
    $("#amount_maxhealth").val(itemObj.MaxHealth);
    $("#select_resistmodified1").val(itemObj.ResistModified1);
    $("#select_resistmodified2").val(itemObj.ResistModified2);
    $("#select_resistmodified3").val(itemObj.ResistModified3);
    $("#amount_resistmodifiedvalue1").val(itemObj.ResistModifiedValue1);
    $("#amount_resistmodifiedvalue2").val(itemObj.ResistModifiedValue2);
    $("#amount_resistmodifiedvalue3").val(itemObj.ResistModifiedValue3);
    $("#amount_cardsreduced").val(itemObj.CardsReduced);
    $("#select_cardtoreducetype").val(itemObj.CardToReduceType);
    $("#amount_costreducereduction").val(itemObj.CostReduceReduction);
    $("#amount_costreduceenergyrequirement").val(itemObj.CostReduceEnergyRequirement);
    $("#check_reducehighestcost").prop("checked", itemObj.ReduceHighestCost);
    $("#check_costreducepermanent").prop("checked", itemObj.CostReducePermanent);
    $("#amount_energyquantity").val(itemObj.EnergyQuantity);
    if (itemObj.EmptyHand) {
        $("#select_activation").val("medsEmptyHand");
    } else {
        switch (itemObj.Activation) {
            case "PreFinishCast":
            case "FinishFinishCast":
                $("#select_activation").val("FinishCast");
                break;
            case "BeginTurnCardsDealt":
            case "BeginTurnAboutToDealCards":
                $("#select_activation").val("BeginTurn");
                break;
            case "CorruptionBeginRound":
                $("#select_activation").val("BeginRound");
            case "CorruptionCombatStart":
            case "PreBeginCombat":
                $("#select_activation").val("BeginCombat");
                break;
            default:
                $("#select_activation").val(itemObj.Activation);
                break;
        };
        // console.log("ACTIVATION: " + itemObj.Activation);
    };
    $("#select_auracursesetted").val(itemObj.AuraCurseSetted);
    $("#amount_auracursenumforoneevent").val(itemObj.AuraCurseNumForOneEvent);
    $("#select_castedcardtype").val(itemObj.CastedCardType);
    $("#amount_lowerorequalpercenthp").val(itemObj.LowerOrEqualPercentHP);
    if (itemObj.ExactRound > 0) {
        $("#amount_roundcycle").val(itemObj.ExactRound);
        $("#select_activation_roundcycle").val("onx");
    } else if (itemObj.RoundCycle > 1) {
        $("#amount_roundcycle").val(itemObj.RoundCycle);
        $("#select_activation_roundcycle").val("everyx");
    } else {
        $("#amount_roundcycle").val(0);
        $("#select_activation_roundcycle").val("every");
    };
    $("#amount_timespercombat").val(itemObj.TimesPerCombat);
    $("#amount_timesperturn").val(itemObj.TimesPerTurn);
    $("#amount_destroyafteruses").val(itemObj.DestroyAfterUses);
    if (itemObj.DestroyEndOfTurn) {
        $("#select_activation_destroy").val("end");
    } else if (itemObj.DestroyStartOfTurn) {
        $("#select_activation_destroy").val("start");
    } else if (itemObj.DestroyAfterUses > 0) {
        $("#select_activation_destroy").val("afterx");
    } else {
        $("#select_activation_destroy").val("never");
    };
    $("#select_itemtarget").val(itemObj.ItemTarget);

    $("#amount_drawcards").val(itemObj.DrawCards);
    $("#check_drawmultiplybyenergyused").prop("checked", itemObj.DrawMultiplyByEnergyUsed);
    $("#amount_cardnum").val(itemObj.CardNum);
    $("#text_cardtogainlist_add").val("");

    $("#select_cardtogaintype").val(itemObj.CardToGainType);
    cardToGainList = [];
    if (itemObj.CardToGainList.length > 0) {
        cardToGainList = itemObj.CardToGainList;
        $("#select_cardtogainwhat").val("list");
    } else if (itemObj.CardToGain.length > 0) {
        cardToGainList[0] = itemObj.CardToGain;
        $("#select_cardtogainwhat").val("list");
    } else if (itemObj.DuplicateActive) {
        $("#select_cardtogainwhat").val("duplicate");
    } else {
        $("#select_cardtogainwhat").val("type");
    };
    $("#select_carditem_cardplace").val(itemObj.CardPlace);
    $("#check_cardtogain_vanish").prop("checked", itemObj.Vanish);
    t = (itemObj.Permanent ? "T" : "")
    if (itemObj.CostZero) {
        $("#select_cardtogain_costreduction").val("Free" + t);
    } else if (itemObj.CostReduction > 0) {
        $("#select_cardtogain_costreduction").val(itemObj.CostReduction + t);
    } else {
        $("#select_cardtogain_costreduction").val("nochange");
    };
    $("#check_droponly").prop("checked", itemObj.DropOnly);
    $("#check_questitem").prop("checked", itemObj.QuestItem);
    $("#check_onlyadditemtonpcs").prop("checked", itemObj.OnlyAddItemToNPCs);
    $("#amount_effect_caster_delay").val(itemObj.EffectCasterDelay);
    $("#amount_effect_target_delay").val(itemObj.EffectTargetDelay);
    $("#select_modifieddamagetype").val(itemObj.ModifiedDamageType);
    $("#select_damagetotargettype").val(itemObj.DamageToTargetType);
    $("#amount_damagetotarget").val(itemObj.DamageToTarget);
    $("#check_dttmultiplybyenergyused").prop("checked", itemObj.DTTMultiplyByEnergyUsed);
    $("#select_damageflatbonus").val(itemObj.DamageFlatBonus);
    $("#amount_damageflatbonusvalue").val(itemObj.DamageFlatBonusValue);
    $("#select_damageflatbonus2").val(itemObj.DamageFlatBonus2);
    $("#amount_damageflatbonusvalue2").val(itemObj.DamageFlatBonusValue2);
    $("#select_damageflatbonus3").val(itemObj.DamageFlatBonus3);
    $("#amount_damageflatbonusvalue3").val(itemObj.DamageFlatBonusValue3);
    $("#select_damagepercentbonus").val(itemObj.DamagePercentBonus);
    $("#amount_damagepercentbonusvalue").val(itemObj.DamagePercentBonusValue);
    $("#select_damagepercentbonus2").val(itemObj.DamagePercentBonus2);
    $("#amount_damagepercentbonusvalue2").val(itemObj.DamagePercentBonusValue2);
    $("#select_damagepercentbonus3").val(itemObj.DamagePercentBonus3);
    $("#amount_damagepercentbonusvalue3").val(itemObj.DamagePercentBonusValue3);
    $("#amount_healquantity").val(itemObj.HealQuantity);
    $("#amount_healpercentquantity").val(itemObj.HealPercentQuantity);
    $("#amount_healpercentquantityself").val(itemObj.HealPercentQuantitySelf);
    $("#amount_healflatbonus").val(itemObj.HealFlatBonus);
    $("#amount_healpercentbonus").val(itemObj.HealPercentBonus);
    $("#amount_healreceivedflatbonus").val(itemObj.HealReceivedFlatBonus);
    $("#amount_healreceivedpercentbonus").val(itemObj.HealReceivedPercentBonus);
    $("#select_auracursebonus1").val(itemObj.AuraCurseBonus1);
    $("#amount_auracursebonusvalue1").val(itemObj.AuraCurseBonusValue1);
    $("#select_auracursebonus2").val(itemObj.AuraCurseBonus2);
    $("#amount_auracursebonusvalue2").val(itemObj.AuraCurseBonusValue2);
    $("#select_auracurseimmune1").val(itemObj.AuraCurseImmune1);
    $("#select_auracurseimmune2").val(itemObj.AuraCurseImmune2);
    $("#select_auracursecustom").val("");
    $("#select_auracursecustomac").val("");
    $("#amount_auracursecustommaxcharges").val(0);
    $("#amount_auracursecustomresistances").val(0);
    $("#amount_auracursecustomhealing").val(0);
    if (itemObj.AuraCurseCustomString === "itemCustomTextMaxChargesIncrasedOnEnemies") {
        $("#select_auracursecustom").val("maxcharges");
        $("#select_auracursecustomac").val(itemObj.AuraCurseCustomAC);
        $("#amount_auracursecustommaxcharges").val(itemObj.AuraCurseCustomModValue1);
    } else if (itemObj.AuraCurseCustomString === "itemCustomTextMaxChargesIncrasedOnHeroes") {
        $("#select_auracursecustom").val("maxcharges");
        $("#select_auracursecustomac").val(itemObj.AuraCurseCustomAC);
        $("#amount_auracursecustommaxcharges").val(itemObj.AuraCurseCustomModValue1);
    } else if (itemObj.AuraCurseCustomString === "itemCustomTextAllResistHealingReceived") {
        $("#select_auracursecustom").val("healingresist");
        $("#select_auracursecustomac").val(itemObj.AuraCurseCustomAC);
        $("#amount_auracursecustomresistances").val(itemObj.AuraCurseCustomModValue1);
        $("#amount_auracursecustomhealing").val(itemObj.AuraCurseCustomModValue2);
    } else if (itemObj.AuraCurseCustomString === "itemCustomTextExplodeChargesMonsters") {
        $("#select_auracursecustom").val("maxcharges");
        $("#select_auracursecustomac").val("dark");
        $("#amount_auracursecustommaxcharges").val(itemObj.AuraCurseCustomModValue1);
    };
    $("#select_auracursegainself1").val(itemObj.AuraCurseGainSelf1);
    $("#amount_auracursegainselfvalue1").val(itemObj.AuraCurseGainSelfValue1);
    $("#select_auracursegainself2").val(itemObj.AuraCurseGainSelf2);
    $("#amount_auracursegainselfvalue2").val(itemObj.AuraCurseGainSelfValue2);
    $("#select_auracursegain1").val(itemObj.AuraCurseGain1);
    $("#amount_auracursegainvalue1").val(itemObj.AuraCurseGainValue1);
    $("#check_acg1multiplybyenergyused").prop("checked", itemObj.ACG1MultiplyByEnergyUsed);
    $("#select_auracursegain2").val(itemObj.AuraCurseGain2);
    $("#amount_auracursegainvalue2").val(itemObj.AuraCurseGainValue2);
    $("#check_acg2multiplybyenergyused").prop("checked", itemObj.ACG2MultiplyByEnergyUsed);
    $("#select_auracursegain3").val(itemObj.AuraCurseGain3);
    $("#amount_auracursegainvalue3").val(itemObj.AuraCurseGainValue3);
    $("#check_acg3multiplybyenergyused").prop("checked", itemObj.ACG3MultiplyByEnergyUsed);
    $("#amount_chancetodispel").val(itemObj.ChanceToDispel);
    $("#amount_chancetodispelnum").val(itemObj.ChanceToDispelNum);
    if (Object.entries(itemObj).sort().toString() !== Object.entries(defaultItem).sort().toString()) {
        $("#select_effect_caster").val(itemObj.EffectCaster);
        $("#select_sound").val(itemObj.ItemSound);
        $("#select_effect_target").val(itemObj.EffectTarget)
    } else {
        $("#select_effect_caster").val(card.EffectCaster);
        $("#select_sound").val(card.Sound);
        $("#select_effect_target").val(card.EffectTarget);
    };
    $("#select_effectitemowner").val(itemObj.EffectItemOwner);

    // card
    $("#select_aura1_target").val(card.Aura);
    $("#select_aura2_target").val(card.Aura2);
    $("#select_aura3_target").val(card.Aura3);
    $("#amount_aura1_target").val(card.AuraCharges);
    $("#amount_aura2_target").val(card.AuraCharges2);
    $("#amount_aura3_target").val(card.AuraCharges3);
    $("#select_aura1_self").val(card.AuraSelf);
    $("#select_aura2_self").val(card.AuraSelf2);
    $("#select_aura3_self").val(card.AuraSelf3);
    if (card.AutoplayDraw === true) {
        $("#select_autoplay").val("start");
    } else if (card.AutoplayEndTurn === true) {
        $("#select_autoplay").val("end");
    } else {
        $("#select_autoplay").val("no");
    };
    $("#check_autoplay").prop("checked", card.AutoplayDraw);
    cardTypes[0] = card.CardType;
    for (var a = 0; a < card.CardTypeAux.length; a++) {
        if (!(["Attack", "Spell"].includes(card.CardTypeAux[a]))) { cardTypes[cardTypes.length] = card.CardTypeAux[a]; };
    };
    $("#select_curse1_target").val(card.Curse);
    $("#select_curse2_target").val(card.Curse2);
    $("#select_curse3_target").val(card.Curse3);
    $("#amount_curse1_target").val(card.CurseCharges);
    $("#amount_curse2_target").val(card.CurseCharges2);
    $("#amount_curse3_target").val(card.CurseCharges3);
    $("#select_curse1_self").val(card.CurseSelf);
    $("#select_curse2_self").val(card.CurseSelf2);
    $("#select_curse3_self").val(card.CurseSelf3);
    $("#amount_damage_1_target").val(card.Damage);
    $("#amount_damage_1_self").val(card.DamageSelf);
    $("#amount_damage_1_sides").val(card.DamageSides);
    $("#select_damage_1_type").val(card.DamageType);
    $("#amount_damage_2_target").val(card.Damage2);
    $("#amount_damage_2_self").val(card.DamageSelf2);
    $("#amount_damage_2_sides").val(card.DamageSides2);
    $("#select_damage_2_type").val(card.DamageType2);
    $("#amount_damage_overcharge").val(card.DamageEnergyBonus);
    $("#amount_discard_cards").val(card.DiscardCard);
    $("#check_discard_random").prop("checked", card.DiscardCardAutomatic);
    $("#select_discard_place").val(card.DiscardCardPlace);
    discardCardTypes = [];
    discardCardTypes[0] = card.DiscardCardType;
    for (var a = 0; a < card.DiscardCardTypeAux.length; a++) {
        discardCardTypes[a + 1] = card.DiscardCardTypeAux[a];
    };
    $("#dispel_auras").val(card.DispelAuras);
    $("#amount_draw_cards").val(card.DrawCard);
    $("#check_effect_cast_center").prop("checked", card.EffectCastCenter);
    $("#check_effect_caster_repeat").prop("checked", card.EffectCasterRepeat);
    $("#select_effect_pre_action").val(card.EffectPreAction);
    $("#select_effect_trail").val(card.EffectTrail);
    $("#select_effect_trail_angle").val(card.EffectTrailAngle);
    $("#select_auracurse1_overcharge").val(card.AcEnergyBonus);
    $("#amount_auracurse1_overcharge").val(card.AcEnergyBonusQuantity);
    $("#select_auracurse2_overcharge").val(card.AcEnergyBonus2);
    $("#amount_auracurse2_overcharge").val(card.AcEnergyBonus2Quantity);
    if (card.DamageEnergyBonus > 0 || card.HealEnergyBonus > 0 || (card.AcEnergyBonus != "" && card.AcEnergyBonusQuantity > 0) || (card.AcEnergyBonus2 != "" && card.AcEnergyBonus2Quantity > 0)) {
        $("#select_repeat").val("Overcharge");
    } else if (card.EffectRepeatMaxBonus > 1) {
        $("#select_repeat").val("RepeatUpToX");
        $("#amount_repeat").val(card.EffectRepeatMaxBonus);
    } else if (card.EffectRepeat > 1) {
        $("#amount_repeat").val(card.EffectRepeat);
        if (card.EffectRepeatTarget == "Chain") {
            $("#select_repeat").val("Chain");
        } else if (card.EffectRepeatTarget == "NoRepeat") {
            $("#select_repeat").val("Jump");
        } else {
            $("#select_repeat").val("RepeatX");
        };
    } else {
        $("#select_repeat").val("NoRepeat");
    };
    $("#amount_repeat_modifier").val(card.EffectRepeatModificator);
    $("#select_repeat_target").val(card.EffectRepeatTarget);
    $("#check_effect_trail_repeat").prop("checked", card.EffectTrailRepeat);
    $("#amount_energy_cost").val(card.EnergyCost);
    $("#amount_energy_recharge").val(card.EnergyRecharge);
    $("#amount_healing_target").val(card.Heal);
    $("#select_dispel_target").val(card.HealAuraCurseName);
    $("#select_dispel_target2").val(card.HealAuraCurseName2);
    $("#select_dispel_target3").val(card.HealAuraCurseName3);
    $("#select_dispel_target4").val(card.HealAuraCurseName4);
    $("#select_dispel_self").val(card.HealAuraCurseSelf);
    $("#heal_curses").val(card.HealCurses);
    $("#amount_healing_overcharge").val(card.HealEnergyBonus);
    $("#amount_healing_self").val(card.HealSelf);
    $("#amount_healing_sides").val(card.HealSides);
    $("#check_ignore_block").prop("checked", card.IgnoreBlock);
    $("#check_ignore_block2").prop("checked", card.IgnoreBlock2);
    $("#increase_auras").val(card.IncreaseAuras);
    $("#increase_curses").val(card.IncreaseCurses);
    $("#reduce_auras").val(card.ReduceAuras);
    $("#reduce_curses").val(card.ReduceCurses);
    $("#check_innate").prop("checked", card.Innate);
    $("#amount_look").val(card.LookCards);
    $("#amount_look_discard").val(card.LookCardsDiscardUpTo);
    $("#amount_look_vanish").val(card.LookCardsVanishUpTo);
    $("#amount_self_health_loss").val(card.SelfHealthLoss);
    $("#select_sound_pre_action").val(card.SoundPreAction);
    $("#select_sound_pre_action_female").val(card.SoundPreActionFemale);
    $("#text_sprite").val(card.Sprite);
    $("#steal_auras").val(card.StealAuras);
    $("#transfer_curses").val(card.TransferCurses);
    $("#select_target_position").val(card.TargetPosition);
    if (card.TargetType == "Global") {
        switch (card.TargetSide) {
            case "Enemy":
                $("#select_target_type").val("AllMonsters");
                break;
            case "Friend":
                $("#select_target_type").val("AllHeroes");
                break;
            default:
                $("#select_target_type").val("Global");
                break;
        };
    } else {
        switch (card.TargetSide) {
            case "Enemy":
                $("#select_target_type").val("AnyMonster");
                break;
            case "Friend":
                $("#select_target_type").val("AnyHero");
                break;
            case "Anyone":
                $("#select_target_type").val("Anyone");
                break;
            case "Self":
                $("#select_target_type").val("Self");
                break;
            case "FriendNotSelf":
                $("#select_target_type").val("OtherHero");
                break;
        };
    };
    $("#check_vanish").prop("checked", card.Vanish);
    $("#amount_gold").val(card.GoldGainQuantity);
    $("#amount_shards").val(card.ShardsGainQuantity);
    $("#select_requires").val(card.EffectRequired);
    $("#check_sv1_aura").prop('checked', card.AuraChargesSpecialValue1);
    $("#check_sv2_aura").prop('checked', card.AuraChargesSpecialValue2);
    $("#check_sv3_aura").prop('checked', card.AuraChargesSpecialValueGlobal);
    $("#check_sv1_aura2").prop('checked', card.AuraCharges2SpecialValue1);
    $("#check_sv2_aura2").prop('checked', card.AuraCharges2SpecialValue2);
    $("#check_sv3_aura2").prop('checked', card.AuraCharges2SpecialValueGlobal);
    $("#check_sv1_aura3").prop('checked', card.AuraCharges3SpecialValue1);
    $("#check_sv2_aura3").prop('checked', card.AuraCharges3SpecialValue2);
    $("#check_sv3_aura3").prop('checked', card.AuraCharges3SpecialValueGlobal);
    $("#check_sv1_curse").prop('checked', card.CurseChargesSpecialValue1);
    $("#check_sv2_curse").prop('checked', card.CurseChargesSpecialValue2);
    $("#check_sv3_curse").prop('checked', card.CurseChargesSpecialValueGlobal);
    $("#check_sv1_curse2").prop('checked', card.CurseCharges2SpecialValue1);
    $("#check_sv2_curse2").prop('checked', card.CurseCharges2SpecialValue2);
    $("#check_sv3_curse2").prop('checked', card.CurseCharges2SpecialValueGlobal);
    $("#check_sv1_curse3").prop('checked', card.CurseCharges3SpecialValue1);
    $("#check_sv2_curse3").prop('checked', card.CurseCharges3SpecialValue2);
    $("#check_sv3_curse3").prop('checked', card.CurseCharges3SpecialValueGlobal);
    $("#check_sv1_damage").prop('checked', card.DamageSpecialValue1);
    $("#check_sv2_damage").prop('checked', card.DamageSpecialValue2);
    $("#check_sv3_damage").prop('checked', card.DamageSpecialValueGlobal);
    $("#check_sv1_damage2").prop('checked', card.Damage2SpecialValue1);
    $("#check_sv2_damage2").prop('checked', card.Damage2SpecialValue2);
    $("#check_sv3_damage2").prop('checked', card.Damage2SpecialValueGlobal);
    $("#check_sv1_heal_self").prop('checked', card.HealSelfSpecialValue1);
    $("#check_sv2_heal_self").prop('checked', card.HealSelfSpecialValue2);
    $("#check_sv3_heal_self").prop('checked', card.HealSelfSpecialValueGlobal);
    $("#check_sv1_heal").prop('checked', card.HealSpecialValue1);
    $("#check_sv2_heal").prop('checked', card.HealSpecialValue2);
    $("#check_sv3_heal").prop('checked', card.HealSpecialValueGlobal);
    $("#check_sv1_health_loss").prop('checked', card.SelfHealthLossSpecialGlobal);
    $("#check_sv2_health_loss").prop('checked', card.SelfHealthLossSpecialValue1);
    $("#check_sv3_health_loss").prop('checked', card.SelfHealthLossSpecialValue2);
    $("#check_sv3_draw_card").prop('checked', card.DrawCardSpecialValueGlobal);
    $("#check_sv3_energy_recharge").prop('checked', card.EnergyRechargeSpecialValueGlobal);
    $("#select_sv1_aura").val(card.SpecialAuraCurseName1);
    $("#select_sv2_aura").val(card.SpecialAuraCurseName2);
    $("#select_sv3_aura").val(card.SpecialAuraCurseNameGlobal);
    $("#select_sv1").val(card.SpecialValue1);
    $("#select_sv2").val(card.SpecialValue2);
    $("#select_sv3").val(card.SpecialValueGlobal);
    $("#amount_sv1_modifier").val(card.SpecialValueModifier1);
    $("#amount_sv2_modifier").val(card.SpecialValueModifier2);
    $("#amount_sv3_modifier").val(card.SpecialValueModifierGlobal);
    $("#amount_vampirism").val(card.HealSelfPerDamageDonePercent);
    $("#amount_add_cards").val(card.AddCard);
    $("#amount_add_cards_choose").val(card.AddCardChoose);
    t = (card.AddCardCostTurn ? "T" : "")
    if (card.AddCardReducedCost == -1) {
        $("#select_discover_cost").val("Free" + t);
    } else if (card.AddCardReducedCost > 0) {
        $("#select_discover_cost").val(card.AddCardReducedCost + t);
    } else {
        $("#select_discover_cost").val("nochange");
    };
    addCardTypes = [];
    addCardList = [];
    if (card.AddCardId !== "") {
        $("#select_discover_what").val("list");
        addCardList[0] = card.AddCardId;
    } else if (card.AddCardList.length > 1) {
        $("#select_discover_what").val("list");
        addCardList = card.AddCardList;
    } else {
        addCardTypes[0] = card.AddCardType;
        for (var a = 0; a < card.AddCardTypeAux.length; a++) {
            addCardTypes[a + 1] = card.AddCardTypeAux[a];
        };
        $("#select_discover_what").val("type");
    };
    $("#select_discover_where_from").val(card.AddCardFrom);
    $("#select_discover_where_to").val(card.AddCardPlace);
    $("#check_discover_vanish").prop('checked', card.AddCardVanish);
    $("#text_summon_aura").val(card.SummonAura);
    $("#text_summon_aura2").val(card.SummonAura2);
    $("#text_summon_aura3").val(card.SummonAura3);
    $("#amount_summon_aura").val(card.SummonAuraCharges);
    $("#amount_summon_aura2").val(card.SummonAuraCharges2);
    $("#amount_summon_aura3").val(card.SummonAuraCharges3);
    $("#text_summon_unit").val(card.SummonUnit);
    $("#amount_summon_unit").val(card.SummonUnitNum);
    $("#amount_effect_post_cast_delay").val(card.EffectPostCastDelay);
    $("#amount_effect_post_target_delay").val(card.EffectPostTargetDelay);
    $("#amount_effect_repeat_delay").val(card.EffectRepeatDelay);
    $("#amount_trail_speed").val(card.EffectTrailSpeed);
    $("#check_is_pet_attack").prop('checked', card.IsPetAttack);
    $("#check_is_pet_cast").prop('checked', card.IsPetCast);
    $("#check_lazy").prop('checked', card.Lazy);
    $("#check_modified_by_trait").prop('checked', card.ModifiedByTrait);
    $("#check_move_to_center").prop('checked', card.MoveToCenter);
    $("#check_pet_front").prop('checked', card.PetFront);
    $("#check_pet_invert").prop('checked', card.PetInvert);
    $("#text_pet_model").val(card.PetModel);
    $("#text_pet_offset").val(card.PetOffset);
    $("#text_pet_size").val(card.PetSize);
    $("#check_playable").prop('checked', card.Playable);
    $("#amount_pull_target").val(card.PullTarget);
    $("#amount_push_target").val(card.PushTarget);
    $("#amount_self_kill_hidden").val(card.SelfKillHiddenSeconds);
    $("#check_show_in_tome").prop('checked', card.ShowInTome);
    $("#check_starter").prop('checked', card.Starter);
    $("#check_visible").prop('checked', card.Visible);
    $("#amount_card_number").val(card.CardNumber);
    $("#check_corrupted").prop('checked', card.Corrupted);
    $("#text_description").val(card.Description);
    $("#text_description_id").val(card.DescriptionID);
    $("#check_end_turn").prop('checked', card.EndTurn);
    $("#amount_energy_cost_for_show").val(card.EnergyCostForShow);
    $("#amount_energy_reduction_permanent").val(card.EnergyReductionPermanent);
    $("#amount_energy_reduction_temporal").val(card.EnergyReductionTemporal);
    $("#check_energy_reduction_to_zero_permanent").prop('checked', card.EnergyReductionToZeroPermanent);
    $("#check_energy_reduction_to_zero_temporal").prop('checked', card.EnergyReductionToZeroTemporal);
    $("#amount_exhaust_counter").val(card.ExhaustCounter);
    $("#check_flip_sprite").prop('checked', card.FlipSprite);
    $("#text_fluff").val(card.Fluff);
    $("#amount_fluff_percent").val(card.FluffPercent);
    $("#check_kill_pet").prop('checked', card.KillPet);
    $("#amount_max_in_deck").val(card.MaxInDeck);
    $("#check_only_in_weekly").prop('checked', card.OnlyInWeekly);
    $("#text_sku").val(card.Sku);
};

async function updateDisplay() {
    // console.log($("#select_card_class").val());
    if ($("#select_card_upgraded").val() === "No") {
        $("#col_upgrades_to_a.visually-hidden").removeClass("visually-hidden");
        $("#col_upgrades_to_b.visually-hidden").removeClass("visually-hidden");
        $("#col_upgrades_to_rare.visually-hidden").removeClass("visually-hidden");
        $("#col_base_card").addClass("visually-hidden");
        $("#btn_create_upgrades.visually-hidden").removeClass("visually-hidden");
        $("#select_card_upgraded.b-r-6").removeClass("b-r-6");
    } else {
        $("#col_base_card.visually-hidden").removeClass("visually-hidden");
        $("#col_upgrades_to_a").addClass("visually-hidden");
        $("#col_upgrades_to_b").addClass("visually-hidden");
        $("#col_upgrades_to_rare").addClass("visually-hidden");
        $("#btn_create_upgrades").addClass("visually-hidden");
        $("#select_card_upgraded").addClass("b-r-6");
    };
    if (["Weapon", "Armor", "Jewelry", "Accesory", "Enchantment"].includes($("#select_card_class").val())) {
        $(".show-group-card").addClass("visually-hidden");
        $(".show-group-item.visually-hidden").removeClass("visually-hidden");
        if (localStorage.getItem("settings_advanced") == "true") {
            $("#show_advanced.visually-hidden").removeClass("visually-hidden");
            $("#accordion-appearance.b-b-6").removeClass("b-b-6");
        } else {
            $("#show_advanced").addClass("visually-hidden");
            $("#accordion-appearance").addClass("b-b-6");
        };
        if (parseIntNoNaN($("#amount_cardnum").val()) > 0) {
            $("#show_cardtogainwhat.visually-hidden").removeClass("visually-hidden");
            $("#show_cardtogain_costreduction.visually-hidden").removeClass("visually-hidden");
            if ($("#select_cardtogainwhat").val() === "duplicate") {
                $("#show_cardtogaintype.visually-hidden").removeClass("visually-hidden");
                $("#show_cardtogainlist").addClass("visually-hidden");
                $("#show_cardtogainlist_add").addClass("visually-hidden");
                $("#show_cardtogainaction").addClass("visually-hidden");
            } else if ($("#select_cardtogainwhat").val() === "list") {
                $("#show_cardtogaintype").addClass("visually-hidden");
                $("#show_cardtogainlist.visually-hidden").removeClass("visually-hidden");
                $("#show_cardtogainlist_add.visually-hidden").removeClass("visually-hidden");
                $("#show_cardtogainaction.visually-hidden").removeClass("visually-hidden");
            } else {
                $("#show_cardtogaintype.visually-hidden").removeClass("visually-hidden");
                $("#show_cardtogainlist").addClass("visually-hidden");
                $("#show_cardtogainlist_add").addClass("visually-hidden");
                $("#show_cardtogainaction.visually-hidden").removeClass("visually-hidden");
            };
        } else {
            $("#show_cardtogainwhat").addClass("visually-hidden");
            $("#show_cardtogain_costreduction").addClass("visually-hidden");
            $("#show_cardtogaintype").addClass("visually-hidden");
            $("#show_cardtogainlist").addClass("visually-hidden");
            $("#show_cardtogainlist_add").addClass("visually-hidden");
            $("#show_cardtogainaction").addClass("visually-hidden");
        };
        $("#text_cardtogainlist").val(cardToGainList.length === 0 ? "None..." : cardToGainList.join(', '));
        if (cardToGainList.indexOf($.trim($("#text_cardtogainlist_add").val()).toLowerCase()) === -1) {
            $("#btn_cardtogainlist_add").html(`<i class="bi bi-plus-lg"></i>`);
            $("#btn_cardtogainlist_add").removeClass("btn-danger");
            $("#btn_cardtogainlist_add").addClass("btn-success");
        } else {
            $("#btn_cardtogainlist_add").html(`<i class="bi bi-x-lg"></i>`);
            $("#btn_cardtogainlist_add").removeClass("btn-success");
            $("#btn_cardtogainlist_add").addClass("btn-danger");
        };
        if ($("#select_auracursecustom").val() === "maxcharges") {
            $("#show_auracursecustomac.visually-hidden").removeClass("visually-hidden");
            $("#show_auracursecustommaxcharges.visually-hidden").removeClass("visually-hidden");
            $("#show_auracursecustomresistanceshealing").addClass("visually-hidden");
        } else if ($("#select_auracursecustom").val() === "healingresist") {
            $("#show_auracursecustomac.visually-hidden").removeClass("visually-hidden");
            $("#show_auracursecustommaxcharges").addClass("visually-hidden");
            $("#show_auracursecustomresistanceshealing.visually-hidden").removeClass("visually-hidden");
        } else {
            $("#show_auracursecustomac").addClass("visually-hidden");
            $("#show_auracursecustommaxcharges").addClass("visually-hidden");
            $("#show_auracursecustomresistanceshealing").addClass("visually-hidden");
        };

        var sActivation = $("#select_activation").val();
        $(".show_activation_component").addClass("visually-hidden");
        switch (sActivation) {
            case "AuraCurseSet":
                $("#show_activation_auracurseset.visually-hidden").removeClass("visually-hidden");
                $("#show_timespercombat.visually-hidden").removeClass("visually-hidden");
                $("#show_timesperturn.visually-hidden").removeClass("visually-hidden");
                $(".show_item_reducedrawdiscover.visually-hidden").removeClass("visually-hidden");
                break;
            case "BeginRound":
            case "EndRound":
                $('#select_activation_roundcycle option[value="every"]').html("Every Round");
                $('#select_activation_roundcycle option[value="everyx"]').html("Every X Rounds");
                $('#select_activation_roundcycle option[value="onx"]').html("On Round X");
                $("#show_activation_rounds.visually-hidden").removeClass("visually-hidden");
                $("#show_timespercombat.visually-hidden").removeClass("visually-hidden");
                break;
            case "BeginTurn":
                $(".show_item_reducedrawdiscover.visually-hidden").removeClass("visually-hidden");
            case "EndTurn":
                $('#select_activation_roundcycle option[value="every"]').html("Every Turn");
                $('#select_activation_roundcycle option[value="everyx"]').html("Every X Turns");
                $('#select_activation_roundcycle option[value="onx"]').html("On Turn X");
                $("#show_activation_rounds.visually-hidden").removeClass("visually-hidden");
                $("#show_timespercombat.visually-hidden").removeClass("visually-hidden");
                break;
            case "CastCard":
            case "FinishCast":
                $("#show_castedcardtype.visually-hidden").removeClass("visually-hidden");
                $("#show_timespercombat.visually-hidden").removeClass("visually-hidden");
                $("#show_timesperturn.visually-hidden").removeClass("visually-hidden");
                $(".show_item_reducedrawdiscover.visually-hidden").removeClass("visually-hidden");
                break;
            case "Hit":
            case "Damage":
            case "medsEmptyHand":
            case "Block":
            case "Blocked":
            case "Evade":
            case "Evaded":
            case "Heal":
            case "Healed":
            case "Killed":
                $("#show_timespercombat.visually-hidden").removeClass("visually-hidden");
                $("#show_timesperturn.visually-hidden").removeClass("visually-hidden");
                $(".show_item_reducedrawdiscover.visually-hidden").removeClass("visually-hidden");
                break;
            case "Hitted":
            case "Damaged":
                $("#show_lowerorequalpercenthp.visually-hidden").removeClass("visually-hidden");
                $("#show_timespercombat.visually-hidden").removeClass("visually-hidden");
                $("#show_timesperturn.visually-hidden").removeClass("visually-hidden");
                $("#show_lowerorequalpercenthp.visually-hidden").removeClass("visually-hidden");
                $(".show_item_reducedrawdiscover.visually-hidden").removeClass("visually-hidden");
            case "None":
            case "BeginCombat":
            case "BeginCombatEnd":
                break;
        };
        if ($("#select_activation_destroy").val() === "end") {
            $('[for="amount_destroyafteruses"]').text("How many turns?");
            $("#show_activation_destroy_uses.visually-hidden").removeClass("visually-hidden");
        } else if ($("#select_activation_destroy").val() === "start") {
            $('[for="amount_destroyafteruses"]').text("How many turns?");
            $("#show_activation_destroy_uses.visually-hidden").removeClass("visually-hidden");
        } else if ($("#select_activation_destroy").val() === "afterx") {
            $('[for="amount_destroyafteruses"]').text("How many uses?");
            $("#show_activation_destroy_uses.visually-hidden").removeClass("visually-hidden");
        } else {
            $("#show_activation_destroy_uses").addClass("visually-hidden");
        };
        if ($("#select_activation_roundcycle").val() === "onx") {
            $('label[for="amount_roundcycle"]').text("Which?");
            $("#select_activation_roundcycle.b-r-6").removeClass("b-r-6");
            $("#show_roundcycle.visually-hidden").removeClass("visually-hidden");
            $("#show_timespercombat").addClass("visually-hidden");
        } else if ($("#select_activation_roundcycle").val() === "everyx") {
            $('label[for="amount_roundcycle"]').text("Every...");
            $("#select_activation_roundcycle.b-r-6").removeClass("b-r-6");
            $("#show_roundcycle.visually-hidden").removeClass("visually-hidden");
        } else {
            $("#select_activation_roundcycle").addClass("b-r-6");
            $("#show_roundcycle").addClass("visually-hidden");
        };
    } else {
        $(".show-group-item").addClass("visually-hidden");
        $(".show-group-card.visually-hidden").removeClass("visually-hidden");
        $("#accordion-appearance.b-b-6").removeClass("b-b-6");
        if (localStorage.getItem("settings_advanced") === "true") {
            $("#show_advanced.visually-hidden").removeClass("visually-hidden");
            $("#accordion-x-equals.b-b-6").removeClass("b-b-6");
        } else {
            $("#show_advanced").addClass("visually-hidden");
            $("#accordion-x-equals").addClass("b-b-6");
        };
        if ($("#select_card_upgraded").val() === "Rare") {
            $("#check_vanish").prop("checked", true);
            $("#check_vanish").prop("disabled", true);
        } else {
            $("#check_vanish").prop("disabled", false);
        };
        $("#text_card_type").val(cardTypes.length === 0 ? "None" : cardTypes.map(a => (Enums.CardTypeFull.hasOwnProperty(a) ? Enums.CardTypeFull[a] : a)).join(', '));
        if (cardTypes.includes("Melee_Attack") || cardTypes.includes("Ranged_Attack")) { $("#text_card_type").val($("#text_card_type").val() + ", Attack"); }
        if (cardTypes.includes("Song") || cardTypes.includes("Fire_Spell") || cardTypes.includes("Cold_Spell") || cardTypes.includes("Lightning_Spell") || cardTypes.includes("Mind_Spell") || cardTypes.includes("Shadow_Spell") || cardTypes.includes("Holy_Spell") || cardTypes.includes("Curse_Spell") || cardTypes.includes("Healing_Spell")) { $("#text_card_type").val($("#text_card_type").val() + ", Spell"); }
        if (cardTypes.indexOf($.trim($("#select_card_type option:selected").val())) === -1) {
            $("#btn_card_type_add").html(`<i class="bi bi-plus-lg"></i>`);
            $("#btn_card_type_add").removeClass("btn-danger");
            $("#btn_card_type_add").addClass("btn-success");
        } else {
            $("#btn_card_type_add").html(`<i class="bi bi-x-lg"></i>`);
            $("#btn_card_type_add").removeClass("btn-success");
            $("#btn_card_type_add").addClass("btn-danger");
        };
        $("#text_discard_card_type").val(discardCardTypes.length === 0 ? "Any" : discardCardTypes.map(a => (Enums.CardTypeFull.hasOwnProperty(a) ? Enums.CardTypeFull[a] : a)).join(', '));
        if (discardCardTypes.indexOf($.trim($("#select_discard_card_type option:selected").val())) === -1) {
            $("#btn_discard_card_type_add").html(`<i class="bi bi-plus-lg"></i>`);
            $("#btn_discard_card_type_add").removeClass("btn-danger");
            $("#btn_discard_card_type_add").addClass("btn-success");
        } else {
            $("#btn_discard_card_type_add").html(`<i class="bi bi-x-lg"></i>`);
            $("#btn_discard_card_type_add").removeClass("btn-success");
            $("#btn_discard_card_type_add").addClass("btn-danger");
        };
        if ($("#amount_discard_cards").val() == 0) {
            $("#col_discard_card_type").addClass("visually-hidden");
            $("#col_discard_card_type_add").addClass("visually-hidden");
        } else {
            $("#col_discard_card_type.visually-hidden").removeClass("visually-hidden");
            $("#col_discard_card_type_add.visually-hidden").removeClass("visually-hidden");
        };
        $("#text_add_card_type").val(addCardTypes.length === 0 ? "Any" : addCardTypes.map(a => (Enums.CardTypeFull.hasOwnProperty(a) ? Enums.CardTypeFull[a] : a)).join(', '));
        if (addCardTypes.indexOf($.trim($("#select_add_card_type option:selected").val())) === -1) {
            $("#btn_add_card_type_add").html(`<i class="bi bi-plus-lg"></i>`);
            $("#btn_add_card_type_add").removeClass("btn-danger");
            $("#btn_add_card_type_add").addClass("btn-success");
        } else {
            $("#btn_add_card_type_add").html(`<i class="bi bi-x-lg"></i>`);
            $("#btn_add_card_type_add").removeClass("btn-success");
            $("#btn_add_card_type_add").addClass("btn-danger");
        };
        $("#text_add_card_list").val(addCardList.length === 0 ? "" : addCardList.join(', '));
        if (addCardList.indexOf($.trim($("#select_add_card_list_add").val()).toLowerCase()) === -1) {
            $("#btn_add_card_list_add").html(`<i class="bi bi-plus-lg"></i>`);
            $("#btn_add_card_list_add").removeClass("btn-danger");
            $("#btn_add_card_list_add").addClass("btn-success");
        } else {
            $("#btn_add_card_list_add").html(`<i class="bi bi-x-lg"></i>`);
            $("#btn_add_card_list_add").removeClass("btn-success");
            $("#btn_add_card_list_add").addClass("btn-danger");
        };
        if ($("#amount_add_cards").val() == 0) {
            $("#show_add_cards_choose").addClass("visually-hidden");
            $("#show_discover_what").addClass("visually-hidden");
            $("#amount_add_cards").addClass("b-r-6");
            $("#show_discover_cost").addClass("visually-hidden");
            $("#show_discover_where").addClass("visually-hidden");
            $("#show_discover_card_type").addClass("visually-hidden");
            $("#show_discover_card_type_add").addClass("visually-hidden");
            $("#show_discover_card_list").addClass("visually-hidden");
            $("#show_discover_card_list_add").addClass("visually-hidden");
        } else {
            if ($("#select_discover_what").val() === "type") {
                $("#show_discover_card_type.visually-hidden").removeClass("visually-hidden");
                $("#show_discover_card_type_add.visually-hidden").removeClass("visually-hidden");
                $("#show_discover_card_list").addClass("visually-hidden");
                $("#show_discover_card_list_add").addClass("visually-hidden");
            } else {
                $("#show_discover_card_list.visually-hidden").removeClass("visually-hidden");
                $("#show_discover_card_list_add.visually-hidden").removeClass("visually-hidden");
                $("#show_discover_card_type").addClass("visually-hidden");
                $("#show_discover_card_type_add").addClass("visually-hidden");
            };
            $("#show_add_cards_choose.visually-hidden").removeClass("visually-hidden");
            $("#show_discover_what.visually-hidden").removeClass("visually-hidden");
            $("#amount_add_cards.b-r-6").removeClass("b-r-6");
            $("#show_discover_cost.visually-hidden").removeClass("visually-hidden");
            $("#show_discover_where.visually-hidden").removeClass("visually-hidden");
        };

        if ($("#select_target_type").val() == "Anyone") {
            $("#select_repeat option[value='Chain']").length == 0 && $("#select_repeat").append(`<option value="Chain">Chain</option>`);
            $("#select_repeat option[value='Jump']").length == 0 && $("#select_repeat").append(`<option value="Jump">Jump (+X%)</option>`);
            $("#select_target_position option[value='Front']").remove();
            $("#select_target_position option[value='Middle']").remove();
            $("#select_target_position option[value='Back']").remove();
            $("#col_target_position.visually-hidden").removeClass("visually-hidden");
        } else if (["Self", "OtherHero"].includes($("#select_target_type").val())) {
            $("#select_repeat option[value='Chain']").length == 0 && $("#select_repeat").append(`<option value="Chain">Chain</option>`);
            $("#select_repeat option[value='Jump']").length == 0 && $("#select_repeat").append(`<option value="Jump">Jump (+X%)</option>`);
            $("#col_target_position").addClass("visually-hidden");
        } else if (["AnyHero", "AnyMonster"].includes($("#select_target_type").val())) {
            $("#select_repeat option[value='Chain']").length == 0 && $("#select_repeat").append(`<option value="Chain">Chain</option>`);
            $("#select_repeat option[value='Jump']").length == 0 && $("#select_repeat").append(`<option value="Jump">Jump (+X%)</option>`);
            $("#select_target_position option[value='Front']").length == 0 && $("#select_target_position").append(`<option value="Front">Front</option>`);
            $("#select_target_position option[value='Middle']").length == 0 && $("#select_target_position").append(`<option value="Middle">Middle</option>`);
            $("#select_target_position option[value='Back']").length == 0 && $("#select_target_position").append(`<option value="Back">Back</option>`);
            $("#col_target_position.visually-hidden").removeClass("visually-hidden");
        } else {
            $("#select_repeat option[value='Chain']").remove();
            $("#select_repeat option[value='Jump']").remove();
            $("#col_target_position").addClass("visually-hidden");
        };
        if ($("#select_target_type").val() == "Self") {
            $('label[for="amount_damage_1_target"]').text("Self");
            $('label[for="amount_damage_2_target"]').text("Self");
            $('label[for="amount_healing_target"]').text("Self");
            $('label[for="select_aura1_target"]').text("Self");
            $('label[for="select_aura2_target"]').text("Self");
            $('label[for="select_aura3_target"]').text("Self");
            $('label[for="select_curse1_target"]').text("Self");
            $('label[for="select_curse2_target"]').text("Self");
            $('label[for="select_curse3_target"]').text("Self");
            $("#display_healing_self").addClass("visually-hidden");
            $("#display_damage1_self").addClass("visually-hidden");
            $("#display_damage2_self").addClass("visually-hidden");
            $("#display_aura1_self").addClass("visually-hidden");
            $("#display_aura2_self").addClass("visually-hidden");
            $("#display_aura3_self").addClass("visually-hidden");
            $("#display_curse1_self").addClass("visually-hidden");
            $("#display_curse2_self").addClass("visually-hidden");
            $("#display_curse3_self").addClass("visually-hidden");
        } else {
            $('label[for="amount_damage_1_target"]').text("Target");
            $('label[for="amount_damage_2_target"]').text("Target");
            $('label[for="amount_healing_target"]').text("Target");
            $('label[for="select_aura1_target"]').text("Target");
            $('label[for="select_aura2_target"]').text("Target");
            $('label[for="select_aura3_target"]').text("Target");
            $('label[for="select_curse1_target"]').text("Target");
            $('label[for="select_curse2_target"]').text("Target");
            $('label[for="select_curse3_target"]').text("Target");
            $("#display_healing_self.visually-hidden").removeClass("visually-hidden");
            $("#display_damage1_self.visually-hidden").removeClass("visually-hidden");
            $("#display_damage2_self.visually-hidden").removeClass("visually-hidden");
            $("#display_aura1_self.visually-hidden").removeClass("visually-hidden");
            $("#display_aura2_self.visually-hidden").removeClass("visually-hidden");
            $("#display_aura3_self.visually-hidden").removeClass("visually-hidden");
            $("#display_curse1_self.visually-hidden").removeClass("visually-hidden");
            $("#display_curse2_self.visually-hidden").removeClass("visually-hidden");
            $("#display_curse3_self.visually-hidden").removeClass("visually-hidden");
        };
        switch ($("#select_repeat").val()) {
            case "NoRepeat":
                $("#col_repeat_target").addClass("visually-hidden");
                $("#col_repeat_amount").addClass("visually-hidden");
                $("#col_repeat_modifier").addClass("visually-hidden");
                $("#col_overcharge").addClass("visually-hidden");
                break;
            case "RepeatX":
                (["AnyHero", "AnyMonster"].includes($("#select_target_type").val())) ? $("#col_repeat_target.visually-hidden").removeClass("visually-hidden") : $("#col_repeat_target").addClass("visually-hidden");
                $("#col_repeat_amount.visually-hidden").removeClass("visually-hidden");
                $("#col_repeat_modifier").addClass("visually-hidden");
                $("#col_overcharge").addClass("visually-hidden");
                break;
            case "RepeatUpToX":
                (["AnyHero", "AnyMonster"].includes($("#select_target_type").val())) ? $("#col_repeat_target.visually-hidden").removeClass("visually-hidden") : $("#col_repeat_target").addClass("visually-hidden");
                $("#col_repeat_amount.visually-hidden").removeClass("visually-hidden");
                $("#col_repeat_modifier").addClass("visually-hidden");
                $("#col_overcharge").addClass("visually-hidden");
                break;
            case "Chain":
                $("#col_repeat_target").addClass("visually-hidden");
                $("#col_repeat_amount.visually-hidden").removeClass("visually-hidden");
                $("#col_repeat_modifier").addClass("visually-hidden");
                $("#col_overcharge").addClass("visually-hidden");
                break;
            case "Jump":
                $("#col_repeat_target").addClass("visually-hidden");
                $("#col_repeat_amount.visually-hidden").removeClass("visually-hidden");
                $("#col_repeat_modifier.visually-hidden").removeClass("visually-hidden");
                $("#col_overcharge").addClass("visually-hidden");
                break;
            case "Overcharge":
                $("#col_repeat_target").addClass("visually-hidden");
                $("#col_repeat_amount").addClass("visually-hidden");
                $("#col_repeat_modifier").addClass("visually-hidden");
                $("#col_overcharge.visually-hidden").removeClass("visually-hidden");
                break;
        };
    }
    var oldObj = cardObj;

    var oldID = cardObj.hasOwnProperty("ID") ? cardObj.ID : "";
    // console.log("OLDID: " + oldID);
    cardObj = generateCardObj();
    // console.log("?");
    // console.log(cardObj);
    // console.log("CARDOBJITEM");
    // console.log((cardObj.Item.length > 0 ? JSON.parse(cardObj.Item) : "BLANK"));
    var baseCard = cardObj.CardUpgraded === "No" ? cardObj : (customCards.hasOwnProperty(oldObj.BaseCard) ? customCards[oldObj.BaseCard] : cardObj);
    var baseID = baseCard.ID;
    var newA = "";
    if (cardObj.CardUpgraded === "No" && oldObj.UpgradesTo1.length > 0 && customCards.hasOwnProperty(oldObj.UpgradesTo1)) {
        newA = customCards[oldObj.UpgradesTo1];
    } else if (cardObj.CardUpgraded !== "A" && baseCard.UpgradesTo1.length > 0 && customCards.hasOwnProperty(baseCard.UpgradesTo1)) {
        newA = customCards[baseCard.UpgradesTo1];
    };
    var newAID = newA === "" ? "" : newA.ID;
    var newB = "";
    if (cardObj.CardUpgraded === "No" && oldObj.UpgradesTo2.length > 0 && customCards.hasOwnProperty(oldObj.UpgradesTo2)) {
        newB = customCards[oldObj.UpgradesTo2];
    } else if (cardObj.CardUpgraded !== "B" && baseCard.UpgradesTo2.length > 0 && customCards.hasOwnProperty(baseCard.UpgradesTo2)) {
        newB = customCards[baseCard.UpgradesTo2];
    };
    var newBID = newB === "" ? "" : newB.ID;

    var newRare = "";
    if (cardObj.CardUpgraded === "No" && oldObj.UpgradesToRare.length > 0 && customCards.hasOwnProperty(oldObj.UpgradesToRare)) {
        newRare = customCards[oldObj.UpgradesToRare];
    } else if (cardObj.CardUpgraded !== "Rare" && baseCard.UpgradesToRare.length > 0 && customCards.hasOwnProperty(baseCard.UpgradesToRare)) {
        newRare = customCards[baseCard.UpgradesToRare];
    };
    var newRareID = newRare === "" ? "" : newRare.ID;
    if (oldObj.CardName !== cardObj.CardName && (!medsLocks.hasOwnProperty(oldObj.BaseCard) || !medsLocks[oldObj.BaseCard].includes("name"))) {
        baseCard.CardName = cardObj.CardName;
        if (newA !== "") {
            newA.CardName = cardObj.CardName;
        };
        if (newB !== "") {
            newB.CardName = cardObj.CardName;
        };
        if (newRare !== "") {
            newRare.CardName = cardObj.CardName;
        };
    };
    if (oldObj.ID !== cardObj.ID && (!medsLocks.hasOwnProperty(oldObj.BaseCard) || !medsLocks[oldObj.BaseCard].includes("id"))) {
        if (oldObj.CardUpgraded === "No") {
            if (newA !== "") {
                newA.BaseCard = cardObj.ID;
                newA.UpgradedFrom = cardObj.ID;
            };
            if (newB !== "") {
                newB.BaseCard = cardObj.ID;
                newB.UpgradedFrom = cardObj.ID;
            };
            if (newRare !== "") {
                newRare.BaseCard = cardObj.ID;
                newRare.UpgradedFrom = cardObj.ID;
            };
        } else if (oldObj.CardUpgraded === "A") {
            baseCard.UpgradesTo1 = cardObj.ID;
        } else if (oldObj.CardUpgraded === "B") {
            baseCard.UpgradesTo2 = cardObj.ID;
        } else {
            baseCard.UpgradesToRare = cardObj.ID;
        };
    };
    if (oldObj.Sprite !== cardObj.Sprite && (!medsLocks.hasOwnProperty(oldObj.BaseCard) || !medsLocks[oldObj.BaseCard].includes("sprite"))) {
        baseCard.Sprite = cardObj.Sprite;
        if (newA !== "") {
            newA.Sprite = cardObj.Sprite;
        };
        if (newB !== "") {
            newB.Sprite = cardObj.Sprite;
        };
        if (newRare !== "") {
            newRare.Sprite = cardObj.Sprite;
        };
    };
    if (oldObj.CardClass !== cardObj.CardClass && (!medsLocks.hasOwnProperty(oldObj.BaseCard) || !medsLocks[oldObj.BaseCard].includes("class"))) {
        baseCard.CardClass = cardObj.CardClass;
        if (newA !== "") {
            newA.CardClass = cardObj.CardClass;
        };
        if (newB !== "") {
            newB.CardClass = cardObj.CardClass;
        };
        if (newRare !== "") {
            newRare.CardClass = cardObj.CardClass;
        };
    };
    if (oldObj.CardUpgraded === "No") {
        if (oldObj.UpgradesTo1 !== cardObj.UpgradesTo1 && (!medsLocks.hasOwnProperty(oldObj.BaseCard) || !medsLocks[oldObj.BaseCard].includes("upgradeA")) && newA !== "") {
            newA.ID = cardObj.UpgradesTo1;
        };
        if (oldObj.UpgradesTo2 !== cardObj.UpgradesTo2 && (!medsLocks.hasOwnProperty(oldObj.BaseCard) || !medsLocks[oldObj.BaseCard].includes("upgradeB")) && newB !== "") {
            newB.ID = cardObj.UpgradesTo2;
        };
        if (oldObj.UpgradesToRare !== cardObj.UpgradesToRare && (!medsLocks.hasOwnProperty(oldObj.BaseCard) || !medsLocks[oldObj.BaseCard].includes("upgradeRare")) && newRare !== "") {
            newRare.ID = cardObj.UpgradesToRare;
        };
    } else {
        if (oldObj.BaseCard !== cardObj.BaseCard && (!medsLocks.hasOwnProperty(oldObj.BaseCard) || !medsLocks[oldObj.BaseCard].includes("baseCard"))) {
            baseCard.ID = cardObj.BaseCard;
            baseCard.BaseCard = cardObj.BaseCard;
            if (newA !== "") {
                newA.BaseCard = cardObj.BaseCard;
            };
            if (newB !== "") {
                newB.BaseCard = cardObj.BaseCard;
            };
            if (newRare !== "") {
                newRare.BaseCard = cardObj.BaseCard;
            };
        };
    };

    $("[meds-lock]").each(function () {
        if (medsLocks.hasOwnProperty(cardObj.BaseCard) && medsLocks[cardObj.BaseCard].includes($(this).attr("meds-lock"))) {
            $(this).removeClass("btn-success");
            $(this).addClass("btn-danger");
            $(this).children("i").removeClass("bi-lock-fill");
            $(this).children("i").addClass("bi-unlock-fill");
        } else {
            $(this).removeClass("btn-danger");
            $(this).addClass("btn-success");
            $(this).children("i").removeClass("bi-unlock-fill");
            $(this).children("i").addClass("bi-lock-fill");
        };
    });

    // delete previous customcard if ID has changed (if ID has not changed, they just get overwritten)
    if (oldID != cardObj.ID) {
        if (customCards.hasOwnProperty(oldID)) { delete customCards[oldID]; };
    };
    // save to custom card deck
    customCards[cardObj.ID] = cardObj;
    // pregen SVG

    // same for base/a/b/rare
    if (baseCard !== cardObj) {
        if (customCards.hasOwnProperty(baseID) && baseCard.ID !== baseID) {
            delete customCards[baseID];
        };
        customCards[baseCard.ID] = baseCard;
    };
    if (newA !== "") {
        if (customCards.hasOwnProperty(newAID) && newA.ID !== newAID) {
            delete customCards[newAID];
        };
        customCards[newA.ID] = newA;
    };
    if (newB !== "") {
        if (customCards.hasOwnProperty(newBID) && newB.ID !== newBID) {
            delete customCards[newBID];
        };
        customCards[newB.ID] = newB;
    };
    if (newRare !== "") {
        if (customCards.hasOwnProperty(newRareID) && newRare.ID !== newRareID) {
            delete customCards[newRareID];
        };
        customCards[newRare.ID] = newRare;
    };

    $("#text_json").val(JSON.stringify(cardObj, null, 4));

    // $("#svg_card_output").html(generateCardSVG(cardObj));
    $("#svg_card_side").html(await generateCardSVG(cardObj));
    localStorage.setItem("customCards", JSON.stringify(customCards));
    localStorage.setItem("currentCardID", cardObj.ID);
    updateCardList();
    boxfitCard("#svg_card_side");
};

async function generateCardSVG(card) {
    if (card == null) { return ""; }
    var cardHTML = `<svg viewBox="0 0 681 1024" style="overflow: hidden;">
                        <g>
                            <image width="681" height="1024" x="0" y="0" xlink:href="AtO_images\\card_base_background_`;
    // console.log("CARD: " + card.CardName);
    // console.log(card);
    // console.log("DEFAULTITEM");
    // console.log(defaultItem);
    var cardItem = defaultItem;
    var bItem = false;
    // console.log("card.Item" + card.Item);
    // console.log("card.ItemEnchantment" + card.ItemEnchantment);
    if (card.Item.length > 0) {
        cardItem = JSON.parse(card.Item);
        bItem = true;
    } else if (card.ItemEnchantment.length > 0) {
        cardItem = JSON.parse(card.ItemEnchantment);
        bItem = true;
    };
    // console.log("CARDITEM" + bItem);
    // console.log(cardItem);
    // console.log(card.CardClass);
    if (card.CardClass == null) { card.CardClass = bItem ? "Weapon" : "Warrior"; };
    switch (card.CardClass) {
        case "Weapon":
        case "Armor":
        case "Jewelry":
        case "Accesory":
        case "Pet":
            cardHTML += "item";
            break;
        case "Enchantment":
            cardHTML += "special";
            break;
        default:
            cardHTML += card.CardClass.toLowerCase();
            break;
    }
    cardHTML += `.png"></image>`
    if (!customSpriteObjURLs.hasOwnProperty(card.Sprite.toLowerCase())) {
        // console.log("notfound");
        if ($('#text_sprite_datalist option[value="' + card.Sprite.toLowerCase() + '"]').length > 0) {
            // download vanilla card image
            const response = await fetch('/AtO_images/card/' + card.Sprite.toLowerCase() + '.png');
            if (response.ok) {
                // console.log("found" + card.Sprite.toLowerCase());
                // save it into sprite library
                vanillaSprites[card.Sprite.toLowerCase()] = await response.blob();
                customSpriteObjURLs[card.Sprite.toLowerCase()] = URL.createObjectURL(vanillaSprites[card.Sprite.toLowerCase()]);
            } else {
                console.log("Unable to retrieve vanilla card sprite: " + card.Sprite.toLowerCase() + "! Error: " + response.status);
            };
        } else if (uploadingSprites.hasOwnProperty(card.Sprite.toLowerCase())) {
            customSpriteObjURLs[card.Sprite.toLowerCase()] = URL.createObjectURL(uploadingSprites[card.Sprite.toLowerCase()]);
        };
    };
    if (customSpriteObjURLs.hasOwnProperty(card.Sprite.toLowerCase())) {
        cardHTML += `<image width="472" height="472" x="105" y="47" xlink:href="` + customSpriteObjURLs[card.Sprite.toLowerCase()] + `"></image>`;
    };
    cardHTML += `<image width="681" height="1024" x="0" y="0" xlink:href="AtO_images\\card_base_border_` + card.CardRarity.toLowerCase() + `.png"></image>`;
    if (bItem) {
        // item type for top left of itemcards
        if (card.CardType === "Weapon") {
            cardHTML += `<image width="681" height="1024" x="0" y="0" xlink:href="AtO_images\\card_base_item_weapon.png"></image>`;
        } else if (card.CardType === "Armor") {
            cardHTML += `<image width="681" height="1024" x="0" y="0" xlink:href="AtO_images\\card_base_item_armor.png"></image>`;
        } else if (card.CardType === "Jewelry") {
            cardHTML += `<image width="681" height="1024" x="0" y="0" xlink:href="AtO_images\\card_base_item_jewelry.png"></image>`;
        } else if (card.CardType === "Accesory") {
            cardHTML += `<image width="681" height="1024" x="0" y="0" xlink:href="AtO_images\\card_base_item_accessory.png"></image>`;
        };
    } else {
        cardHTML += `<image width="681" height="1024" x="0" y="0" xlink:href="AtO_images\\card_base_energy_` + card.CardRarity.toLowerCase() + `.png"></image>`;
    };
    cardHTML += `<image width="681" height="1024" x="0" y="0" xlink:href="AtO_images\\card_base_description.png"></image>
                            <image width="681" height="1024" x="0" y="0" xlink:href="AtO_images\\card_base_name.png"></image>` + (bItem ? "" : `
                            <image width="681" height="1024" x="0" y="0" xlink:href="AtO_images\\card_base_target.png"></image>
                            <image width="681" height="1024" x="0" y="0" xlink:href="AtO_images\\card_base_type.png"></image>`) + `
                            ` + (card.Innate ? `<image width="681" height="1024" x="0" y="0" xlink:href="AtO_images\\card_base_innate.png"></image>` : "") + `
                            ` + (card.Vanish ? `<image width="681" height="1024" x="0" y="0" xlink:href="AtO_images\\card_base_vanish.png"></image>` : "") + `
                            <foreignObject width="575" height="100" x="50" y="465">
                                <div class="d-flex h-100 w-100">
                                    <div class="boxfit_card_name meds-text-upgrade-` + card.CardUpgraded.toLowerCase() + ` m-auto text-nowrap">` + neverBlankName(card.CardName) + `
                                    </div>
                                </div>
                            </foreignObject>`;
    
    if (!bItem) {
        cardHTML += `<text x="50%" y="614" class="svg-text-target" text-anchor="middle" dominant-baseline="middle">`;
        // target: see AtO CardData.SetTarget() for details, though the implementation is slightly different
        if (card.AutoplayDraw) {
            cardHTML += "On draw";
        } else if (card.AutoplayEndTurn) {
            cardHTML += "On end turn";
        } else if (card.TargetType == "Global" & card.TargetSide == "Anyone") {
            cardHTML += "Global";
        } else if (card.TargetType == "Global" & card.TargetSide == "Friend") {
            cardHTML += "All Heroes";
        } else if (card.TargetType == "Global" & card.TargetSide == "Enemy") {
            cardHTML += "All Monsters";
        } else if (card.TargetSide == "Self") {
            cardHTML += "Self";
        } else if (card.TargetSide == "Anyone" && card.TargetPosition == "Random") {
            cardHTML += "Random";
        } else if (card.TargetType == "Single" && card.TargetSide == "Anyone" && card.TargetPosition == "Anywhere") {
            cardHTML += "Anyone";
        } else if (card.TargetSide == "FriendNotSelf") {
            cardHTML += "Other Hero";
        } else {
            if (card.TargetPosition !== "Anywhere") {
                cardHTML += Enums.CardTargetPosition[card.TargetPosition] + " ";
            };
            cardHTML += card.TargetSide.replace("Friend", "Hero").replace("Enemy", "Monster").replace("Anyone", "Unit");
        };
        cardHTML += `</text>
                            <text x="50%" y="983" class="svg-text-type" text-anchor="middle" dominant-baseline="middle">` + (card.CardType == "None" ? "None" : Enums.CardTypeFull[card.CardType]) + (card.CardTypeAux.length === 0 ? "" : " [...]") + `</text>`;
    };
    // description: we use foreignObject for the description in the SVG because otherwise multiple lines are v. hard to do :‘(
    cardHTML += `<foreignObject width="` + (bItem ? "530" : "530") + `" height="` + (bItem ? "380" : "300") + `" x="` + (bItem ? "75" : "75") + `" y="` + (bItem ? "585" : "630") + `">
                                    <div class="d-flex h-100 w-100">
                                    <div class="boxfit_` + (bItem ? "item" : "card") + `_description w-100 my-auto text-center svg-text-description">`;
    
    var desc = "";
    if (bItem) {
        if (cardItem.MaxHealth != 0) {
            desc += `<p>Max HP&nbsp;<span style="color: var(--meds-color-` + (cardItem.MaxHealth > 0 ? `aura);">+` : `curse);">-`) + Math.abs(cardItem.MaxHealth) + `</span></p>`;
        };
        var done2 = false;
        var done3 = false;
        if (cardItem.ResistModified1 === "All" && cardItem.ResistModifiedValue1 !== 0) {
            desc += `<p>All resistances&nbsp;<span style="color: var(--meds-color-` + (cardItem.ResistModifiedValue1 > 0 ? `aura);">+` : `curse);">-`) + Math.abs(cardItem.ResistModifiedValue1) + `%</span></p>`;
        } else if (cardItem.ResistModified1 !== "None" && cardItem.ResistModifiedValue1 !== 0) {
            desc += `<p>` + inlineIconHTML(cardItem.ResistModified1);
            if (cardItem.ResistModified2 !== "None" && cardItem.ResistModifiedValue2 == cardItem.ResistModifiedValue1) {
                desc += inlineIconHTML(cardItem.ResistModified2);
                done2 = true;
            }
            if (cardItem.ResistModified3 !== "None" && cardItem.ResistModifiedValue3 == cardItem.ResistModifiedValue1) {
                desc += inlineIconHTML(cardItem.ResistModified3);
                done3 = true;
            }
            desc += `&nbsp;resistance&nbsp;<span style="color: var(--meds-color-` + (cardItem.ResistModifiedValue1 > 0 ? `aura);">+` : `curse);">-`) + Math.abs(cardItem.ResistModifiedValue1) + `%</span>`;
        };
        if (!done2 && cardItem.ResistModified2 !== "None" && cardItem.ResistModifiedValue2 !== 0) {
            desc += `<p>` + inlineIconHTML(cardItem.ResistModified2);
            if (!done3 && cardItem.ResistModified3 !== "None" && cardItem.ResistModifiedValue3 == cardItem.ResistModifiedValue2) {
                desc += inlineIconHTML(cardItem.ResistModified3);
                done3 = true;
            }
            desc += `&nbsp;resistance&nbsp;<span style="color: var(--meds-color-` + (cardItem.ResistModifiedValue2 > 0 ? `aura);">+` : `curse);">-`) + Math.abs(cardItem.ResistModifiedValue2) + `%</span>`;
        };
        if (!done3 && cardItem.ResistModified3 !== "None" && cardItem.ResistModifiedValue3 !== 0) {
            desc += `<p>` + inlineIconHTML(cardItem.ResistModified3) + `&nbsp;resistance&nbsp;<span style="color: var(--meds-color-` + (cardItem.ResistModifiedValue3 > 0 ? `aura);">+` : `curse);">-`) + Math.abs(cardItem.ResistModifiedValue3) + `%</span>`;
        };
        if (cardItem.CharacterStatModifiedValue !== 0) {
            if (cardItem.CharacterStatModified === "Speed") {
                desc += `<p>Speed&nbsp;<span style="color: var(--meds-color-` + (cardItem.CharacterStatModifiedValue > 0 ? `aura);">+` : `curse);">-`) + Math.abs(cardItem.CharacterStatModifiedValue) + `</span></p>`;
            } else if (cardItem.CharacterStatModified === "EnergyTurn") {
                desc += `<p>` + inlineIconHTML("energy") +`&nbsp;regeneration&nbsp;<span style="color: var(--meds-color-` + (cardItem.CharacterStatModifiedValue > 0 ? `aura);">+` : `curse);">-`) + Math.abs(cardItem.CharacterStatModifiedValue) + `</span></p>`;
            };
        };
        if (cardItem.CharacterStatModifiedValue2 !== 0) {
            if (cardItem.CharacterStatModified2 === "Speed") {
                desc += `<p>Speed&nbsp;<span style="color: var(--meds-color-` + (cardItem.CharacterStatModifiedValue2 > 0 ? `aura);">+` : `curse);">-`) + Math.abs(cardItem.CharacterStatModifiedValue2) + `</span></p>`;
            } else if (cardItem.CharacterStatModified2 === "EnergyTurn") {
                desc += `<p>` + inlineIconHTML("energy") +`&nbsp;regeneration&nbsp;<span style="color: var(--meds-color-` + (cardItem.CharacterStatModifiedValue2 > 0 ? `aura);">+` : `curse);">-`) + Math.abs(cardItem.CharacterStatModifiedValue2) + `</span></p>`;
            };
        };
        if (cardItem.CharacterStatModifiedValue3 !== 0) {
            if (cardItem.CharacterStatModified3 === "Speed") {
                desc += `<p>Speed&nbsp;<span style="color: var(--meds-color-` + (cardItem.CharacterStatModifiedValue3 > 0 ? `aura);">+` : `curse);">-`) + Math.abs(cardItem.CharacterStatModifiedValue3) + `</span></p>`;
            } else if (cardItem.CharacterStatModified3 === "EnergyTurn") {
                desc += `<p>` + inlineIconHTML("energy") +`&nbsp;regeneration&nbsp;<span style="color: var(--meds-color-` + (cardItem.CharacterStatModifiedValue3 > 0 ? `aura);">+` : `curse);">-`) + Math.abs(cardItem.CharacterStatModifiedValue3) + `</span></p>`;
            };
        };

        // flat damage
        done2 = false;
        done3 = false;
        // console.log("DamageFlatBonus: " + cardItem.DamageFlatBonus + " " + cardItem.DamageFlatBonusValue)
        if (cardItem.DamageFlatBonus === "All" && cardItem.DamageFlatBonusValue !== 0) {
            desc += `<p class="text-nowrap">All damage&nbsp;<span style="color: var(--meds-color-` + (cardItem.DamageFlatBonusValue > 0 ? `aura);">+` : `curse);">-`) + Math.abs(cardItem.DamageFlatBonusValue) + `</span></p>`;
        } else if (cardItem.DamageFlatBonus !== "None" && cardItem.DamageFlatBonusValue !== 0) {
            desc += `<p class="text-nowrap">` + inlineIconHTML(cardItem.DamageFlatBonus);
            if (cardItem.DamageFlatBonus2 !== "None" && cardItem.DamageFlatBonusValue2 === cardItem.DamageFlatBonusValue) {
                desc += inlineIconHTML(cardItem.DamageFlatBonus2);
                done2 = true;
            };
            if (cardItem.DamageFlatBonus3 !== "None" && cardItem.DamageFlatBonusValue3 === cardItem.DamageFlatBonusValue) {
                desc += inlineIconHTML(cardItem.DamageFlatBonus3);
                done3 = true;
            };
            desc += `&nbsp;damage&nbsp;<span style="color: var(--meds-color-` + (cardItem.DamageFlatBonusValue > 0 ? `aura);">+` : `curse);">-`) + Math.abs(cardItem.DamageFlatBonusValue) + `</span></p>`;
        };
        if (!done2 && cardItem.DamageFlatBonus2 !== "None" && cardItem.DamageFlatBonusValue2 !== 0) {
            desc += `<p class="text-nowrap">` + inlineIconHTML(cardItem.DamageFlatBonus2);
            if (!done3 && cardItem.DamageFlatBonus3 !== "None" && cardItem.DamageFlatBonusValue3 === cardItem.DamageFlatBonusValue2) {
                desc += inlineIconHTML(cardItem.DamageFlatBonus3);
                done3 = true;
            };
            desc += `&nbsp;damage&nbsp;<span style="color: var(--meds-color-` + (cardItem.DamageFlatBonusValue2 > 0 ? `aura);">+` : `curse);">-`) + Math.abs(cardItem.DamageFlatBonusValue2) + `</span></p>`;
        };
        if (!done3 && cardItem.DamageFlatBonus3 !== "None" && cardItem.DamageFlatBonusValue3 !== 0) {
            desc += `<p class="text-nowrap">` + inlineIconHTML(cardItem.DamageFlatBonus3);
            desc += `&nbsp;damage&nbsp;<span style="color: var(--meds-color-` + (cardItem.DamageFlatBonusValue3 > 0 ? `aura);">+` : `curse);">-`) + Math.abs(cardItem.DamageFlatBonusValue3) + `</span></p>`;
        };

        // percent damage
        done2 = false;
        done3 = false;
        if (cardItem.DamagePercentBonus === "All" && cardItem.DamagePercentBonusValue !== 0) {
            desc += `<p>All damage&nbsp;<span style="color: var(--meds-color-` + (cardItem.DamagePercentBonusValue > 0 ? `aura);">+` : `curse);">-`) + Math.abs(cardItem.DamagePercentBonusValue) + `%</span></p>`;
        } else if (cardItem.DamagePercentBonus !== "None" && cardItem.DamagePercentBonusValue !== 0) {
            desc += `<p>` + inlineIconHTML(cardItem.DamagePercentBonus);
            if (cardItem.DamagePercentBonus2 !== "None" && cardItem.DamagePercentBonusValue2 === cardItem.DamagePercentBonusValue) {
                desc += inlineIconHTML(cardItem.DamagePercentBonus2);
                done2 = true;
            };
            if (cardItem.DamagePercentBonus3 !== "None" && cardItem.DamagePercentBonusValue3 === cardItem.DamagePercentBonusValue) {
                desc += inlineIconHTML(cardItem.DamagePercentBonus3);
                done3 = true;
            };
            desc += `&nbsp;damage&nbsp;<span style="color: var(--meds-color-` + (cardItem.DamagePercentBonusValue > 0 ? `aura);">+` : `curse);">-`) + Math.abs(cardItem.DamagePercentBonusValue) + `%</span></p>`;
        };
        if (!done2 && cardItem.DamagePercentBonus2 !== "None" && cardItem.DamagePercentBonusValue2 !== 0) {
            desc += `<p>` + inlineIconHTML(cardItem.DamagePercentBonus2);
            if (!done3 && cardItem.DamagePercentBonus3 !== "None" && cardItem.DamagePercentBonusValue3 === cardItem.DamagePercentBonusValue2) {
                desc += inlineIconHTML(cardItem.DamagePercentBonus3);
                done3 = true;
            };
            desc += `&nbsp;damage&nbsp;<span style="color: var(--meds-color-` + (cardItem.DamagePercentBonusValue2 > 0 ? `aura);">+` : `curse);">-`) + Math.abs(cardItem.DamagePercentBonusValue2) + `%</span></p>`;
        };
        if (!done3 && cardItem.DamagePercentBonus3 !== "None" && cardItem.DamagePercentBonusValue3 !== 0) {
            desc += `<p>` + inlineIconHTML(cardItem.DamagePercentBonus3);
            desc += `&nbsp;damage&nbsp;<span style="color: var(--meds-color-` + (cardItem.DamagePercentBonusValue3 > 0 ? `aura);">+` : `curse);">-`) + Math.abs(cardItem.DamagePercentBonusValue3) + `%</span></p>`;
        };

        if (cardItem.UseTheNextInsteadWhenYouPlay && cardItem.HealPercentBonus != 0) { // is this specifically for Focus Heal ???
            desc += `<p style="color: var(--meds-color-repeat); font-size: 70%; line-height: 60%; font-weight: 600;">[The next&nbsp;` + (cardItem.DestroyAfterUses > 1 ? "(" + carditem.DestroyAfterUses + ")&nbsp;" : "") + `<span style="color: var(--meds-color-system);">` + (cardItem.CastedCardType == "None" ? inlineIconHTML("card") : Enums.CardTypeFull[cardItem.CastedCardType].replace(" ", "&nbsp;")) + `</span>]</p>`;
        };
        // flat heal
        if (cardItem.HealFlatBonus != 0) {
            desc += `<p>` + inlineIconHTML("heal") + `&nbsp;heal done&nbsp;<span style="color: var(--meds-color-` + (cardItem.HealFlatBonus > 0 ? `aura);">+` : `curse);">-`) + Math.abs(cardItem.HealFlatBonus) + `</span></p>`;
        };
         // percent heal
        if (cardItem.HealPercentBonus != 0) {
            desc += `<p>` + inlineIconHTML("heal") + `&nbsp;heal done&nbsp;<span style="color: var(--meds-color-` + (cardItem.HealPercentBonus > 0 ? `aura);">+` : `curse);">-`) + Math.abs(cardItem.HealPercentBonus) + `%</span></p>`;
        };
        // flat heal received
        if (cardItem.HealReceivedFlatBonus != 0) {
            desc += `<p>` + inlineIconHTML("heal") + `&nbsp;heal received&nbsp;<span style="color: var(--meds-color-` + (cardItem.HealReceivedFlatBonus > 0 ? `aura);">+` : `curse);">-`) + Math.abs(cardItem.HealReceivedFlatBonus) + `</span></p>`;
        };
        // percent heal received
        if (cardItem.HealReceivedPercentBonus != 0) {
            desc += `<p>` + inlineIconHTML("heal") + `&nbsp;heal received&nbsp;<span style="color: var(--meds-color-` + (cardItem.HealReceivedPercentBonus > 0 ? `aura);">+` : `curse);">-`) + Math.abs(cardItem.HealReceivedPercentBonus) + `%</span></p>`;
        };
        // + auracurse
        done2 = false;
        if (cardItem.AuraCurseBonus1.length > 0 && cardItem.AuraCurseBonusValue1 > 0) {
            desc += `<p>` + inlineIconHTML(cardItem.AuraCurseBonus1);
            if (cardItem.AuraCurseBonus2.length > 0 && cardItem.AuraCurseBonusValue2 === cardItem.AuraCurseBonusValue1) {
                desc += inlineIconHTML(cardItem.AuraCurseBonus2);
                done2 = true;
            };
            desc += `&nbsp;charges&nbsp;<span style="color: var(--meds-color-` + (cardItem.AuraCurseBonusValue1 > 0 ? `aura);">+` : `curse);">-`) + Math.abs(cardItem.AuraCurseBonusValue1) + `</span></p>`;
        };
        if (!done2 && cardItem.AuraCurseBonus2.length > 0 && cardItem.AuraCurseBonusValue2 > 0) {
            desc += `<p>` + inlineIconHTML(cardItem.AuraCurseBonus2) + `&nbsp;charges&nbsp;<span style="color: var(--meds-color-` + (cardItem.AuraCurseBonusValue2 > 0 ? `aura);">+` : `curse);">-`) + Math.abs(cardItem.AuraCurseBonusValue2) + `</span></p>`;
        };
        // auracurse immunity
        if (cardItem.AuraCurseImmune1.length > 0 || cardItem.AuraCurseImmune2.length > 0) {
            desc += `<p>Immune to:&nbsp;` + (cardItem.AuraCurseImmune1.length > 0 ? inlineIconHTML(cardItem.AuraCurseImmune1) : "") + (cardItem.AuraCurseImmune2.length > 0 ? inlineIconHTML(cardItem.AuraCurseImmune2) : "") + `</span></p>`;
        };
        // shop discount
        if (cardItem.PercentDiscountShop != 0) {
            desc += `<p><span style="color: var(--meds-color-` + (cardItem.PercentDiscountShop > 0 ? `aura);">+` : `curse);">-`) + Math.abs(cardItem.PercentDiscountShop) + `%</span>&nbsp;extra discount</p>`;
        };
        // percent gold/shards retained
        if (cardItem.PercentRetentionEndGame != 0) {
            desc += `<p>When you die, retain an additional&nbsp;<span style="color: var(--meds-color-` + (cardItem.PercentRetentionEndGame > 0 ? `aura);">+` : `curse);">-`) + Math.abs(cardItem.PercentRetentionEndGame) + `%</span>&nbsp;gold and shards</p>`;
        };
        // custom aura/curse mods
        if (cardItem.AuraCurseCustomString.length > 0 && cardItem.AuraCurseCustomAC.length > 0) {
            if (cardItem.AuraCurseCustomString === "itemCustomTextMaxChargesIncrasedOnEnemies" && cardItem.AuraCurseCustomModValue1 > 0) { // nullifier
                desc += `<p>` + inlineIconHTML(cardItem.AuraCurseCustomAC) + `&nbsp;on monsters have&nbsp;<span style="color: var(--meds-color-` + (cardItem.AuraCurseCustomModValue1 > 0 ? `aura);">+` : `curse);">-`) + Math.abs(cardItem.AuraCurseCustomModValue1) + `</span> Max. charges</p>`;
            } else if (cardItem.AuraCurseCustomString === "itemCustomTextMaxChargesIncrasedOnHeroes") { // power coil
                desc += `<p>` + inlineIconHTML(cardItem.AuraCurseCustomAC) + `&nbsp;on heroes have&nbsp;<span style="color: var(--meds-color-` + (cardItem.AuraCurseCustomModValue1 > 0 ? `aura);">+` : `curse);">-`) + Math.abs(cardItem.AuraCurseCustomModValue1) + `</span> Max. charges</p>`;
            } else if (cardItem.AuraCurseCustomString === "itemCustomTextAllResistHealingReceived") { // golden laurel
                desc += `<p>` + inlineIconHTML(cardItem.AuraCurseCustomAC) + `&nbsp;on heroes give&nbsp;<span style="color: var(--meds-color-` + (cardItem.AuraCurseCustomModValue1 > 0 ? `aura);">+` : `curse);">-`) + Math.abs(cardItem.AuraCurseCustomModValue1) + `%</span>&nbsp;all resist and&nbsp;<span style="color: var(--meds-color-` + (cardItem.AuraCurseCustomModValue2 > 0 ? `aura);">+` : `curse);">-`) + Math.abs(cardItem.AuraCurseCustomModValue2) + `%</span>&nbsp;healing received per charge</p>`;
            } else if (cardItem.AuraCurseCustomString === "itemCustomTextExplodeChargesMonsters") { // dark one, cup of death
                desc += `<p>` + inlineIconHTML(cardItem.AuraCurseCustomAC) + `&nbsp;charged on monsters explode at &nbsp;<span style="color: var(--meds-color-system);">` + cardItem.AuraCurseCustomModValue1 + `</span></p>`;
            };
        };
        // special for Harley
        if (cardItem.id === "harleyrare") { desc += `<p>Immortal</p>`; };
        // transform damage
        if (cardItem.ModifiedDamageType !== "None") {
            desc += `<p>Transform damage to&nbsp;` + inlineIconHTML(cardItem.ModifiedDamageType) + `</p>`;
        };
        if (cardItem.IsEnchantment && (cardItem.CastedCardType !== "None" || (cardItem.Activation === "PreFinishCast" || cardItem.Activation === "FinishCast" || cardItem.Activation === "FinishFinishCast") && !(cardItem.EmptyHand))) {
            if (cardItem.UseTheNextInsteadWhenYouPlay) {
                // console.log("PIE");
                if (cardItem.HealPercentBonus == 0) { // i.e., not focus heal?
                    desc += `<p style="color: var(--meds-color-repeat); font-size: 70%; line-height: 60%; font-weight: 600;">[The next&nbsp;` + (cardItem.DestroyAfterUses > 1 ? "(" + cardItem.DestroyAfterUses + ")&nbsp;" : "") + `<span style="color: var(--meds-color-system);">` + (cardItem.CastedCardType == "None" ? inlineIconHTML("card") : Enums.CardTypeFull[cardItem.CastedCardType]).replace(" ", "&nbsp;") + `</span>]</p>`;
                };
            } else {
                desc += `<p style="color: var(--meds-color-repeat); font-size: 70%; line-height: 60%; font-weight: 600;">[When you play a&nbsp;<span style="color: var(--meds-color-system);">` + (cardItem.CastedCardType == "None" ? inlineIconHTML("card") : Enums.CardTypeFull[cardItem.CastedCardType]).replace(" ", "&nbsp;") + `</span>]</p>`;
            };
        };
        if (cardItem.Activation !== "None" && cardItem.Activation !== "PreBeginCombat") {
            if (cardItem.TimesPerTurn === 1) {
                desc += `<p style="color: var(--meds-color-repeat); font-size: 70%; line-height: 60%; font-weight: 600;">[1 time/turn]</p>`;
            } else if (cardItem.TimesPerTurn > 1) {
                desc += `<p style="color: var(--meds-color-repeat); font-size: 70%; line-height: 60%; font-weight: 600;">[` + cardItem.TimesPerTurn + ` times/turn]</p>`;
            };
            if (cardItem.Activation === "BeginCombat") {
                desc += `<p style="color: var(--meds-color-repeat); font-size: 70%; line-height: 60%; font-weight: 600;">[Combat start]</p>`;
            } else if (cardItem.Activation === "BeginCombatEnd") {
                desc += `<p style="color: var(--meds-color-repeat); font-size: 70%; line-height: 60%; font-weight: 600;">[Combat end]</p>`;
            } else if (cardItem.Activation === "BeginTurnAboutToDealCards" || cardItem.Activation === "BeginTurnCardsDealt") {
                if (cardItem.RoundCycle > 1) {
                    desc += `<p style="color: var(--meds-color-repeat); font-size: 70%; line-height: 60%; font-weight: 600;">[Every ` + cardItem.RoundCycle + ` turns]</p>`;
                } else if (cardItem.ExactRound > 1) {
                    desc += `<p style="color: var(--meds-color-repeat); font-size: 70%; line-height: 60%; font-weight: 600;">[On turn ` + cardItem.ExactRound + `]</p>`;
                } else if (cardItem.ExactRound === 1) {
                    desc += `<p style="color: var(--meds-color-repeat); font-size: 70%; line-height: 60%; font-weight: 600;">[First turn]</p>`;
                } else {
                    desc += `<p style="color: var(--meds-color-repeat); font-size: 70%; line-height: 60%; font-weight: 600;">[Every turn]</p>`;
                }
            } else if (cardItem.Activation === "Damage") {
                desc += `<p style="color: var(--meds-color-repeat); font-size: 70%; line-height: 60%; font-weight: 600;">[Damage with hit]</p>`;
            } else if (cardItem.Activation === "Damaged") {
                desc += `<p style="color: var(--meds-color-repeat); font-size: 70%; line-height: 60%; font-weight: 600;">[Damaged by others` + (cardItem.LowerOrEqualPercentHP < 100 ? ` <` + cardItem.LowerOrEqualPercentHP + `%` : "") + `]</p>`;
            } else if (cardItem.Activation === "Hitted") {
                desc += `<p style="color: var(--meds-color-repeat); font-size: 70%; line-height: 60%; font-weight: 600;">[When hit]</p>`;
            } else if (cardItem.Activation === "Block") {
                desc += `<p style="color: var(--meds-color-repeat); font-size: 70%; line-height: 60%; font-weight: 600;">[When you block]</p>`;
            } else if (cardItem.Activation === "Heal") {
                desc += `<p style="color: var(--meds-color-repeat); font-size: 70%; line-height: 60%; font-weight: 600;">[When you heal a hero]</p>`;
            } else if (cardItem.Activation === "Healed") {
                desc += `<p style="color: var(--meds-color-repeat); font-size: 70%; line-height: 60%; font-weight: 600;">[When healed]</p>`;
            } else if (cardItem.Activation === "Evaded") {
                desc += `<p style="color: var(--meds-color-repeat); font-size: 70%; line-height: 60%; font-weight: 600;">[When evaded]</p>`;
            } else if (cardItem.Activation === "Evade") {
                desc += `<p style="color: var(--meds-color-repeat); font-size: 70%; line-height: 60%; font-weight: 600;">[When you evade]</p>`;
            } else if (cardItem.Activation === "BeginRound") {
                if (cardItem.RoundCycle > 1) {
                    desc += `<p style="color: var(--meds-color-repeat); font-size: 70%; line-height: 60%; font-weight: 600;">[Every ` + cardItem.Roundcycle + ` rounds]</p>`;
                } else {
                    desc += `<p style="color: var(--meds-color-repeat); font-size: 70%; line-height: 60%; font-weight: 600;">[Every round]</p>`;
                }
            } else if (cardItem.Activation === "BeginTurn") {
                if (cardItem.RoundCycle > 1) {
                    desc += `<p style="color: var(--meds-color-repeat); font-size: 70%; line-height: 60%; font-weight: 600;">[Every ` + cardItem.RoundCycle + ` turns]</p>`;
                } else if (cardItem.ExactRound > 1) {
                    desc += `<p style="color: var(--meds-color-repeat); font-size: 70%; line-height: 60%; font-weight: 600;">[On turn ` + cardItem.ExactRound + `]</p>`;
                } else if (cardItem.ExactRound === 1) {
                    desc += `<p style="color: var(--meds-color-repeat); font-size: 70%; line-height: 60%; font-weight: 600;">[First turn]</p>`;
                } else {
                    desc += `<p style="color: var(--meds-color-repeat); font-size: 70%; line-height: 60%; font-weight: 600;">[Every turn]</p>`;
                }
            } else if (cardItem.Activation === "Killed") {
                desc += `<p>When you die,</p>`;
            } else if (cardItem.AuraCurseSetted.length > 0 && cardItem.AuraCurseNumForOneEvent === 0) {
                desc += `<p style="color: var(--meds-color-repeat); font-size: 70%; line-height: 60%; font-weight: 600;">[When you apply&nbsp;` + inlineIconHTML(cardItem.AuraCurseSetted) + `]</p>`;
            };
            if (cardItem.UsedEnergy) {
                desc += `<p>For every&nbsp;` + inlineIconHTML("energy") + `&nbsp;used:</p>`;
            };
            if (cardItem.EmptyHand) {
                desc += `<p>If you play a&nbsp;` + inlineIconHTML("card") + `&nbsp;that leaves your hand empty</p>`;
            };
            if (cardItem.ChanceToDispel > 0 && cardItem.ChanceToDispelNum > 0) {
                desc += `<p>` + (cardItem.ChanceToDispel < 100 ? (`<span style="color: var(--meds-color-aura);">` + cardItem.ChanceToDispel + `%</span>&nbsp;chance to: d`) : "D") + `ispel&nbsp;<span style="color: var(--meds-color-aura);">` + cardItem.ChanceToDispelNum + `</span></p>`;
            };
            if (!(cardItem.IsEnchantment)) {
                if (cardItem.CastedCardType !== "None") {
                    desc += `<p>When you play a&nbsp;<span style="color: var(--meds-color-system);">` + Enums.CardTypeFull[cardItem.CastedCardType].replace(" ", "&nbsp;") + `</span>:</p>`;
                } else if (["PreFinishCast", "FinishCast", "FinishFinishCast"].includes(cardItem.Activation) && !(cardItem.EmptyHand)) {
                    desc += `<p>When you play a&nbsp;<span style="color: var(--meds-color-system);">` + inlineIconHTML("card") + `</span>:</p>`;
                };
            };
            // draw cards
            if (cardItem.DrawCards > 0) {
                desc += `<p>Draw ` + cardItem.DrawCards + inlineIconHTML("card") + `</p>`;
            };
            // flat heal
            if (cardItem.HealQuantity > 0) {
                if (cardItem.ItemTarget === "AllHero") {
                    desc += `<p>All heroes recover&nbsp;<span style="color: var(--meds-color-aura);">+` + cardItem.HealQuantity + `</span>&nbsp;HP</p>`;
                } else if (cardItem.ItemTarget === "Self") {
                    if (cardItem.Activation === "Killed") {
                        desc += `<p>resurrect with&nbsp;<span style="color: var(--meds-color-aura);">+` + cardItem.HealQuantity + `</span>&nbsp;of your HP</p>`;
                    } else {
                        desc += `<p>recover&nbsp;<span style="color: var(--meds-color-aura);">+` + cardItem.HealQuantity + `</span>&nbsp;HP</p>`;
                    };
                } else if (cardItem.ItemTarget === "AllEnemy") {
                    desc += `<p>recover&nbsp;<span style="color: var(--meds-color-aura);">+` + cardItem.HealQuantity + `</span>&nbsp;HP</p>`;
                };
            };
            var gainText = "";
            var sufferText = "";
            var applyText = "";


            // energy
            if (cardItem.EnergyQuantity > 0 && cardItem.ItemTarget === "Self") {
                gainText += `<span style="color: var(--meds-color-aura);">` + cardItem.EnergyQuantity + `</span>` + inlineIconHTML("energy");
            };

            // percent heal
            if (cardItem.HealPercentQuantity > 0) {
                if (cardItem.ItemTarget === "AllHero") {
                    desc += `<p>All heroes recover&nbsp;<span style="color: var(--meds-color-aura);">+` + cardItem.HealPercentQuantity + `%</span>&nbsp;HP</p>`;
                } else if (cardItem.ItemTarget === "Self") {
                    if (cardItem.Activation === "Killed") {
                        desc += `<p>resurrect with&nbsp;<span style="color: var(--meds-color-aura);">+` + cardItem.HealPercentQuantity + `%</span>&nbsp;of your HP</p>`;
                    } else {
                        desc += `<p>recover&nbsp;<span style="color: var(--meds-color-aura);">+` + cardItem.HealPercentQuantity + `%</span>&nbsp;HP</p>`;
                    };
                } else if (cardItem.ItemTarget === "LowestFlatHpEnemy") {
                    desc += `<p>lowest HP monster recovers&nbsp;<span style="color: var(--meds-color-aura);">+` + cardItem.HealPercentQuantity + `%</span>&nbsp;HP</p>`;
                } else if (cardItem.ItemTarget === "LowestFlatHpHero") {
                    desc += `<p>lowest HP hero recovers&nbsp;<span style="color: var(--meds-color-aura);">+` + cardItem.HealPercentQuantity + `%</span>&nbsp;HP</p>`;
                } else if (cardItem.ItemTarget === "AllEnemy") {
                    desc += `<p>recover&nbsp;<span style="color: var(--meds-color-aura);">+` + cardItem.HealPercentQuantity + `%</span>&nbsp;HP</p>`;
                };
            };
            if (cardItem.HealPercentQuantitySelf < 0) {
                desc += `<p>You lose&nbsp;<span style="color: var(--meds-color-damage)">` + cardItem.HealPercentQuantitySelf + `% HP</span>`;
            };

            // deal damage
            if (cardItem.DamageToTarget > 0 && cardItem.DamageToTargetType !== "None") {
                if (cardItem.ItemTarget == "Self") {
                    sufferText += `<span style="color: var(--meds-color-damage);">` + cardItem.DamageToTarget + `</span>` + inlineIconHTML(cardItem.DamageToTargetType);
                } else {
                    desc += `<p>Deal&nbsp;<span style="color: var(--meds-color-damage);">` + cardItem.DamageToTarget + `</span>` + inlineIconHTML(cardItem.DamageToTargetType) + `</p>`;
                }
            };
            // on activation, apply aura/curse
            if (cardItem.AuraCurseGain1 !== "Null" && cardItem.AuraCurseGainValue1 > 0) {
                if (Object.keys(Enums.Aura).includes(cardItem.AuraCurseGain1)) {
                    if (cardItem.ItemTarget === "Self") {
                        gainText += `<span style="color: var(--meds-color-aura);">` + cardItem.AuraCurseGainValue1 + `</span>` + inlineIconHTML(cardItem.AuraCurseGain1);
                    } else {
                        applyText += `<span style="color: var(--meds-color-aura);">` + cardItem.AuraCurseGainValue1 + `</span>` + inlineIconHTML(cardItem.AuraCurseGain1);
                    };
                } else {
                    if (cardItem.ItemTarget === "Self") {
                        sufferText += `<span style="color: var(--meds-color-curse);">` + cardItem.AuraCurseGainValue1 + `</span>` + inlineIconHTML(cardItem.AuraCurseGain1);
                    } else {
                        applyText += `<span style="color: var(--meds-color-curse);">` + cardItem.AuraCurseGainValue1 + `</span>` + inlineIconHTML(cardItem.AuraCurseGain1);
                    };
                };
            };
            if (cardItem.AuraCurseGain2 !== "Null" && cardItem.AuraCurseGainValue2 > 0) {
                if (Object.keys(Enums.Aura).includes(cardItem.AuraCurseGain2)) {
                    if (cardItem.ItemTarget === "Self") {
                        gainText += `<span style="color: var(--meds-color-aura);">` + cardItem.AuraCurseGainValue2 + `</span>` + inlineIconHTML(cardItem.AuraCurseGain2);
                    } else {
                        applyText += `<span style="color: var(--meds-color-aura);">` + cardItem.AuraCurseGainValue2 + `</span>` + inlineIconHTML(cardItem.AuraCurseGain2);
                    };
                } else {
                    if (cardItem.ItemTarget === "Self") {
                        sufferText += `<span style="color: var(--meds-color-curse);">` + cardItem.AuraCurseGainValue2 + `</span>` + inlineIconHTML(cardItem.AuraCurseGain2);
                    } else {
                        applyText += `<span style="color: var(--meds-color-curse);">` + cardItem.AuraCurseGainValue2 + `</span>` + inlineIconHTML(cardItem.AuraCurseGain2);
                    };
                };
            };
            if (cardItem.AuraCurseGain3 !== "Null" && cardItem.AuraCurseGainValue3 > 0) {
                if (Object.keys(Enums.Aura).includes(cardItem.AuraCurseGain3)) {
                    if (cardItem.ItemTarget === "Self") {
                        gainText += `<span style="color: var(--meds-color-aura);">` + cardItem.AuraCurseGainValue3 + `</span>` + inlineIconHTML(cardItem.AuraCurseGain3);
                    } else {
                        applyText += `<span style="color: var(--meds-color-aura);">` + cardItem.AuraCurseGainValue3 + `</span>` + inlineIconHTML(cardItem.AuraCurseGain3);
                    };
                } else {
                    if (cardItem.ItemTarget === "Self") {
                        sufferText += `<span style="color: var(--meds-color-curse);">` + cardItem.AuraCurseGainValue3 + `</span>` + inlineIconHTML(cardItem.AuraCurseGain3);
                    } else {
                        applyText += `<span style="color: var(--meds-color-curse);">` + cardItem.AuraCurseGainValue3 + `</span>` + inlineIconHTML(cardItem.AuraCurseGain3);
                    };
                };
            };
            // on activation, apply aura/curse to self
            if (cardItem.AuraCurseGainSelf1 !== "Null" && cardItem.AuraCurseGainSelfValue1 > 0) {
                if (Object.keys(Enums.Aura).includes(cardItem.AuraCurseGainSelf1)) {
                    gainText += `<span style="color: var(--meds-color-aura);">` + cardItem.AuraCurseGainSelfValue1 + `</span>` + inlineIconHTML(cardItem.AuraCurseGainSelf1);
                } else {
                    sufferText += `<span style="color: var(--meds-color-curse);">` + cardItem.AuraCurseGainSelfValue1 + `</span>` + inlineIconHTML(cardItem.AuraCurseGainSelf1);
                };
            };
            if (cardItem.AuraCurseGainSelf2 !== "Null" && cardItem.AuraCurseGainSelfValue2 > 0) {
                if (Object.keys(Enums.Aura).includes(cardItem.AuraCurseGainSelf2)) {
                    gainText += `<span style="color: var(--meds-color-aura);">` + cardItem.AuraCurseGainSelfValue2 + `</span>` + inlineIconHTML(cardItem.AuraCurseGainSelf2);
                } else {
                    sufferText += `<span style="color: var(--meds-color-curse);">` + cardItem.AuraCurseGainSelfValue2 + `</span>` + inlineIconHTML(cardItem.AuraCurseGainSelf2);
                };
            };

            if (gainText !== "") {
                desc += `<p>Gain&nbsp;` + gainText + `</p>`;
            };
            if (sufferText !== "") {
                desc += `<p>Suffer&nbsp;` + sufferText + `</p>`;
            };
            if (applyText !== "") {
                desc += `<p>` + ((cardItem.AuraCurseSetted.length > 0 && cardItem.AuraCurseNumForOneEvent > 0) ? `For every&nbsp;` + (cardItem.AuraCurseNumForOneEvent > 1 ? `<span style="color: var(--meds-color-curse);">` + cardItem.AuraCurseNumForOneEvent + `</span>` : "") + inlineIconHTML(cardItem.AuraCurseSetted) + `&nbsp;charge` + (cardItem.AuraCurseNumForOneEvent > 1 ? "s" : "") + ` you apply, a` : "A");
                if (cardItem.ItemTarget === "AllEnemy") {
                    desc += `pply&nbsp;` + applyText + `&nbsp;to all monsters</p>`;
                } else if (cardItem.ItemTarget === "AllHero") {
                    desc += `pply&nbsp;` + applyText + `&nbsp;to all heroes</p>`;
                } else if (cardItem.ItemTarget === "RandomHero") {
                    desc += ` random hero gains&nbsp;` + applyText + `</p>`;
                } else if (cardItem.ItemTarget === "RandomEnemy") {
                    desc += `pply&nbsp;` + applyText + `&nbsp;to a random monster</p>`;
                } else if (cardItem.ItemTarget === "HighestFlatHpEnemy") {
                    desc += `pply&nbsp;` + applyText + `&nbsp;to highest HP monster</p>`;
                } else if (cardItem.ItemTarget === "LowestFlatHpEnemy") {
                    desc += `pply&nbsp;` + applyText + `&nbsp;to lowest HP monster</p>`;
                } else if (cardItem.ItemTarget === "HighestFlatHpHero") {
                    desc += `pply&nbsp;` + applyText + `&nbsp;to highest HP hero</p>`;
                } else if (cardItem.ItemTarget === "LowestFlatHpHero") {
                    desc += `pply&nbsp;` + applyText + `&nbsp;to lowest HP hero</p>`;
                } else if (cardItem.ItemTarget === "Random") {
                    desc += `pply&nbsp;` + applyText + `&nbsp;to a random character</p>`;
                } else {
                    desc += `pply&nbsp;` + applyText + `</p>`;
                };
                
            };
            if (cardItem.CardNum > 0) {
                var tempCardToAdd = "";
                var cardGainList = [];
                if (cardItem.CardToGainList.length > 0) {
                    cardGainList = cardItem.CardToGainList;
                } else if (cardItem.CardToGain.length > 0) {
                    cardGainList[0] = cardItem.CardToGain;
                };
                if (cardGainList.length > 0) {
                    tempCardToAdd += (cardItem.CardNum > 1 ? cardItem.CardNum : "");
                    for (var a = 0; a < cardGainList.length; a++) {
                        tempCardToAdd += inlineIconHTML("card") + `&nbsp;<span style="color: #`;
                        if (customCards.hasOwnProperty(cardGainList[a])) {
                            if (customCards[cardGainList[a]].CardUpgraded === "Rare") {
                                tempCardToAdd += `7F15A6;">`;
                            } else if (customCards[cardGainList[a]].CardUpgraded === "B") {
                                tempCardToAdd += `875700;">`;
                            } else if (customCards[cardGainList[a]].CardUpgraded === "A") {
                                tempCardToAdd += `215382;">`;
                            } else {
                                tempCardToAdd += `5E3016;">`;
                            };
                            tempCardToAdd += customCards[cardGainList[a]].CardName;
                        } else if (vanillaCardList["No"].hasOwnProperty(cardGainList[a])) {
                            tempCardToAdd += `5E3016;">` + vanillaCardList["No"][cardGainList[a]];
                        } else if (vanillaCardList["A"].hasOwnProperty(cardGainList[a])) {
                            tempCardToAdd += `215382;">` + vanillaCardList["A"][cardGainList[a]];
                        } else if (vanillaCardList["B"].hasOwnProperty(cardGainList[a])) {
                            tempCardToAdd += `875700;">` + vanillaCardList["B"][cardGainList[a]];
                        } else if (vanillaCardList["Rare"].hasOwnProperty(cardGainList[a])) {
                            tempCardToAdd += `7F15A6;">` + vanillaCardList["Rare"][cardGainList[a]];
                        } else {
                            tempCardToAdd += `5E3016;">` + cardGainList[a];
                        };
                        tempCardToAdd += `</span>` + (a == cardGainList.length - 2 ? "&nbsp;or&nbsp;" : (a < cardGainList.length - 2 ? ",&nbsp;" : ""));
                    };
                } else {
                    tempCardToAdd += (cardItem.CardNum > 1 ? cardItem.CardNum : "") + inlineIconHTML("card") + (cardItem.CardToGainType == "None" ? "" : (`<span style="color: var(--meds-color-system);">` + Enums.CardTypeFull[cardItem.CardToGainType] + `</span>`));
                };
                desc += `<p>`;
                if (cardItem.DuplicateActive) {
                    if (cardItem.CardPlace === "Hand") {
                        desc += `Put a copy of it into your hand`;
                    };
                } else if (cardItem.CardPlace === "RandomDeck") {
                    desc += `Shuffle&nbsp;` + tempCardToAdd + `&nbsp;into your deck`;
                } else if (cardItem.CardPlace === "Cast") {
                    desc += `Cast card&nbsp;` + tempCardToAdd;
                } else if (cardItem.CardPlace === "Hand") {
                    desc += `Put&nbsp;` + tempCardToAdd + `&nbsp;into your hand`;
                };
                if (cardItem.CostZero) {
                    desc += `<span style="color: var(--meds-color-repeat); font-size: 70%; line-height: 60%; font-weight: 600;">&nbsp;(cost 0` + (cardItem.Vanish ? " and vanish" : "") + (cardItem.Permanent ? "" : " this turn") + `)</span>`;
                } else if (cardItem.CostReduction > 0) {
                    desc += `<span style="color: var(--meds-color-repeat); font-size: 70%; line-height: 60%; font-weight: 600;">&nbsp;(cost reduced by ` + cardItem.CostReduction + (cardItem.Vanish ? " and vanish" : "") + (cardItem.Permanent ? "" : " this turn") + `)</span>`;
                };
                desc += `</p>`;
            };
            if (cardItem.CardsReduced > 0 && cardItem.CostReduceReduction > 0) {
                desc += `<p>Reduce the cost of` + (cardItem.ReduceHighestCost ? (` the ` + (cardItem.CardsReduced > 1 ? "(" + cardItem.CardsReduced + ") " : "") + `highest cost`) : (`&nbsp;<span style="color: var(--meds-color-system);">` + cardItem.CardsReduced + `</span>&nbsp;random`)) + `&nbsp;` + (cardItem.CardToReduceType == "None" ? inlineIconHTML("card") : (`<span style="color: var(--meds-color-system);">` + Enums.CardTypeFull[cardItem.CardToReduceType] + `</span>`)) + `&nbsp;in your hand` + (cardItem.CostReduceEnergyRequirement > 0 ? `<span style="color: var(--meds-color-repeat); font-size: 70%; line-height: 60%;">&nbsp;(with cost ≥ ` + cardItem.CostReduceEnergyRequirement + `)&nbsp;</span>` : " ") + `by ` + cardItem.CostReduceReduction + (cardItem.CostReducePermanent ? "" : " until discarded") + `</p>`;
            };
        };
        if (cardItem.DestroyStartOfTurn || cardItem.DestroyEndOfTurn) {
            desc += `<p class="text-nowrap" style="color: var(--meds-color-lasts);">- Lasts one turn -</p>`;
        };
        if (cardItem.DestroyAfterUses > 0 && !(cardItem.UseTheNextInsteadWhenYouPlay)) {
            if (cardItem.DestroyAfterUses > 1) {
                desc += `<p class="text-nowrap" style="color: var(--meds-color-lasts);">- Lasts ` + cardItem.DestroyAfterUses + ` uses -</p>`;
            } else {
                desc += `<p class="text-nowrap" style="color: var(--meds-color-lasts);">- Lasts 1 use -</p>`;
            };
        };
        if (cardItem.TimesPerCombat === 1) {
            desc += `<p class="text-nowrap" style="color: var(--meds-color-lasts);">- Once per combat -</p>`;
        } else if (cardItem.TimesPerCombat === 2) {
            desc += `<p class="text-nowrap" style="color: var(--meds-color-lasts);">- Twice per combat -</p>`;
        } else if (cardItem.TimesPerCombat === 3) {
            desc += `<p class="text-nowrap" style="color: var(--meds-color-lasts);">- Thrice per combat -</p>`;
        };
        if (cardItem.PassSingleAndCharacterRolls) {
            desc += `<p>100% success in single character event rolls</p>`;
        };
    } else {
        if (card.EffectRequired != "") {
            desc += `<p style="color: var(--meds-color-damage);">Requires ` + inlineIconHTML(card.EffectRequired); + `</p>`;
        };
        if (card.DrawCard != 0 && !(card.DrawCardSpecialValueGlobal)) {
            desc += `<p>Draw ` + card.DrawCard + inlineIconHTML("card") + `</p>`;
        };
        if (card.SpecialValueGlobal === "DiscardedCards") {
            if (card.DiscardCardPlace === "Vanish") {
                desc += `<p>Vanish X` + inlineIconHTML("card") + `</p>`;
            } else {
                desc += `<p>Discard X` + inlineIconHTML("card") + `</p>`;
            };
        };
        if (card.DrawCardSpecialValueGlobal) {
            desc += `<p>Draw&nbsp;<span style="color: var(--meds-color-aura);">X</span>` + inlineIconHTML("card") + `</p>`;
        };

        if (card.AddCard > 0) {
            if (card.AddCardId !== "") {
                str5 = (card.AddCard > 1 ? card.AddCard : "") + inlineIconHTML("card");
                var cardName = card.AddCardId;
                if (customCards.hasOwnProperty(card.AddCardId)) {

                    if (customCards[card.AddCardId].CardUpgraded === "Rare") {
                        str5 += `<span style="color: #7F15A6;">`;
                    } else if (customCards[card.AddCardId].CardUpgraded === "B") {
                        str5 += `<span style="color: #875700;">`;
                    } else if (customCards[card.AddCardId].CardUpgraded === "A") {
                        str5 += `<span style="color: #215382;">`;
                    } else {
                        str5 += `<span style="color: #5E3016;">`;
                    };
                    cardName = customCards[card.AddCardId].CardName;
                } else if (vanillaCardList["No"].hasOwnProperty(card.AddCardId)) {
                    str5 += `<span style="color: #5E3016;">`;
                    cardName = vanillaCardList["No"][card.AddCardId];
                } else if (vanillaCardList["A"].hasOwnProperty(card.AddCardId)) {
                    str5 += `<span style="color: #215382;">`;
                    cardName = vanillaCardList["A"][card.AddCardId];
                } else if (vanillaCardList["B"].hasOwnProperty(card.AddCardId)) {
                    str5 += `<span style="color: #875700;">`;
                    cardName = vanillaCardList["B"][card.AddCardId];
                } else if (vanillaCardList["Rare"].hasOwnProperty(card.AddCardId)) {
                    str5 += `<span style="color: #7F15A6;">`;
                    cardName = vanillaCardList["Rare"][card.AddCardId];
                } else {
                    str5 += `<span style="color: #5E3016;">`;
                };
                str5 += cardName + `</span>`;
                if (card.AddCardPlace === "RandomDeck") {
                    desc += `<p>Shuffle&nbsp;` + str5 + `&nbsp;into ` + (card.TargetSide === "Self" ? "your" : "target's") + ` deck`;
                } else if (card.AddCardPlace === "Hand") {
                    desc += `<p>Put&nbsp;` + str5 + `&nbsp;into your hand`;
                } else if (card.AddCardPlace === "TopDeck") {
                    desc += card.TargetSide === "Self" ? `<p>Place&nbsp;` + str5 + `&nbsp;on top of your deck</p>` : `<p>Put&nbsp;` + str5 + `&nbsp;on top of target's deck`;
                } else if (card.AddCardPlace === "Discard") {
                    desc += `<p>Place&nbsp;` + str5 + `&nbsp;on ` + (card.TargetSide === "Self" ? "your" : `target's`) + ` discard pile`;
                };
            } else {
                if (card.AddCardChoose > 0) {
                    str5 = (card.AddCardChoose > 1 ? card.AddCardChoose : "") + inlineIconHTML("card");
                } else {
                    str5 = (card.AddCard > 1 ? card.AddCard : "") + inlineIconHTML("card");
                };
                if (card.AddCardType !== "None") {
                    str5 += `<span style="color: #5E3016;">` + Enums.CardTypeFull[card.AddCardType] + (card.AddCardTypeAux.length === 0 ? "" : " [...]") + `</span>`;
                };

                if (card.AddCardFrom === "Game") {
                    if (card.AddCardPlace === "RandomDeck") {
                        desc += `<p>Discover&nbsp;` + str5 + `&nbsp;and shuffle ` + (card.AddCardChoose !== 0 ? card.AddCard : "them") + ` into your deck`;
                    } else if (card.AddCardPlace === "Hand") {
                        desc += `<p>Discover&nbsp;` + str5 + `&nbsp;and place ` + (card.AddCardChoose !== 0 ? card.AddCard : "them") + ` into your hand`;
                    } else if (card.AddCardPlace === "TopDeck") {
                        desc += `<p>Discover&nbsp;` + str5 + `&nbsp;and place ` + (card.AddCardChoose !== 0 ? card.AddCard : "them") + ` on top of your deck`;
                    };
                } else if (card.AddCardFrom === "Deck") {
                    if (card.AddCardPlace === "Hand") {
                        desc += `<p>Reveal&nbsp` + str5 + `&nbsp;from your draw pile and put ` + (card.AddCardChoose !== 0 ? card.AddCard : "them") + ` into your hand`;
                    } else if (card.AddCardPlace === "TopDeck") {
                        desc += `<p>Reveal&nbsp` + str5 + `&nbsp;from your draw pile and place ` + (card.AddCardChoose !== 0 ? card.AddCard : "them") + ` on top of your deck`;
                    };
                } else if (card.AddCardFrom === "Discard") {
                    desc += `<p>Pick&nbsp;` + str5 + `&nbsp;from your discard pile and place it `;
                    if (card.AddCardPlace === "TopDeck") {
                        desc += `on top of your deck`;
                    } else if (card.AddCardPlace === "RandomDeck") {
                        desc += `into your hand`;
                    };
                } else if (card.AddCardFrom === "Hand") {
                    desc += `<p>Duplicate&nbsp;` + str5 + `&nbsp;from your hand`;
                    if (card.TargetSide === "Friend") {
                        if (card.AddCardPlace === "TopDeck") {
                            desc += ` and put it at top of target's deck`;
                        } else if (card.AddCardPlace === "RandomDeck") {
                            desc += ` and shuffle it in target's deck`;
                        };
                    };
                } else if (card.AddCardFrom === "Vanish") {
                    desc += `<p>Pick&nbsp;` + str5 + `&nbsp;from your vanish pile and `
                    if (card.AddCardPlace === "TopDeck") {
                        desc += `place it on top of your deck`;
                    } else if (card.AddCardPlace === "Hand") {
                        desc += `put it into your hand`;
                    };
                };
            };
            if (card.AddCardReducedCost !== 0) {
                desc += `<span style="color: var(--meds-color-repeat); font-size: 70%; line-height: 60%; font-weight: 600;">&nbsp;(cost ` + (card.AddCardReducedCost < 0 ? "0" : "reduced by " + card.AddCardReducedCost);
                if (card.AddCardVanish) {
                    desc += ` and vanish`;
                } else if (card.AddCardCostTurn) {
                    desc += ` until discarded`;
                }
                desc += `)</span>`;
            };
            desc += `</p>`;
        };

        if (card.DiscardCard > 0) {
            var discardText = card.DiscardCardType === "None" ? "" : (`&nbsp;<span style="color: var(--meds-color-system)">` + Enums.CardTypeFull[card.DiscardCardType] + (card.DiscardCardTypeAux.length === 0 ? "" : " [...]") + `</span>`);
            if (card.DiscardCardPlace == "Discard") {
                desc += "<p>Discard " + card.DiscardCard + inlineIconHTML(card.DiscardCardAutomatic ? "card_random" : "card") + discardText + `</p>`;
            } else {
                desc += `<p>Place&nbsp;` + card.DiscardCard + inlineIconHTML(card.DiscardCardAutomatic ? "card_random" : "card") + discardText + `&nbsp;from your hand on top of your deck</p>`;
            };
        };
        if (card.LookCards > 0) {
            desc += `<p>Look ` + card.LookCards + inlineIconHTML("card") + `</p>`;
            if (card.LookCardsDiscardUpTo == -1) {
                desc += `<p>Discard any of them</p>`;
            } else if (card.LookCardsDiscardUpTo > 0) {
                desc += `<p>Discard up to ` + card.LookCardsDiscardUpTo + ` of them</p>`;
            } else if (card.LookCardsVanishUpTo > 0) {
                desc += `<p>Vanish up to ` + card.LookCardsVanishUpTo + ` of them</p>`;
            };
        };


        if (card.SummonUnit != "" & card.SummonUnitNum > 0) {
            desc += `<p style="color: var(--meds-color-system);">Summon ` + (card.SummonUnitNum > 1 ? card.SummonUnitNum + " " : "") + card.SummonUnit + `</p>`;
        };
        if (card.DispelAuras == -1) {
            desc += `<p>Purge all</p>`;
        } else if (card.DispelAuras > 0) {
            desc += `<p>Purge <span style="color: var(--meds-color-curse);">` + card.DispelAuras + `</span></p>`;
        };
        var purgeTarget = "";
        var dispelTarget = "";
        // AtO has dispel/purge split into specialvalue/not, and I cbf working out why. We'll see what happens? :D // #TODO: check if this is the purge/transform issue you noted before?
        if (card.HealAuraCurseName != "") {
            if (Object.keys(Enums.Aura).includes(card.HealAuraCurseName)) {
                purgeTarget += inlineIconHTML(card.HealAuraCurseName);
            } else {
                dispelTarget += inlineIconHTML(card.HealAuraCurseName);
            };
        };
        if (card.HealAuraCurseName2 != "") {
            if (Object.keys(Enums.Aura).includes(card.HealAuraCurseName2)) {
                purgeTarget += inlineIconHTML(card.HealAuraCurseName2);
            } else {
                dispelTarget += inlineIconHTML(card.HealAuraCurseName2);
            };
        };
        if (card.HealAuraCurseName3 != "") {
            if (Object.keys(Enums.Aura).includes(card.HealAuraCurseName3)) {
                purgeTarget += inlineIconHTML(card.HealAuraCurseName3);
            } else {
                dispelTarget += inlineIconHTML(card.HealAuraCurseName3);
            };
        };
        if (card.HealAuraCurseName4 != "") {
            if (Object.keys(Enums.Aura).includes(card.HealAuraCurseName4)) {
                purgeTarget += inlineIconHTML(card.HealAuraCurseName4);
            } else {
                dispelTarget += inlineIconHTML(card.HealAuraCurseName4);
            };
        };
        if (purgeTarget !== "" && card.SpecialValue1 === "None" && card.SpecialValue2 === "None" && card.SpecialValueGlobal === "None") {
            desc += `<p>Purge ` + (card.TargetSide == "Self" ? "your " : "") + purgeTarget + `</p>`;
        };
        if (dispelTarget != "" && card.SpecialValue1 === "None" && card.SpecialValue2 === "None" && card.SpecialValueGlobal === "None") {
            desc += `<p>Dispel ` + (card.TargetSide == "Self" ? "your " : "") + dispelTarget + `</p>`;
        };
        if (card.HealCurses == -1) {
            desc += `<p>Dispel all</p>`;
        } else if (card.HealCurses > 0) {
            desc += `<p>Dispel <span style="color: var(--meds-color-aura);">` + card.HealCurses + `</span></p>`;
        };
        if (card.HealAuraCurseSelf != "" && card.SpecialValue1 === "None" && card.SpecialValue2 === "None" && card.SpecialValueGlobal === "None") {
            if (Object.keys(Enums.Aura).includes(card.HealAuraCurseSelf)) {
                desc += `<p>Purge your ` + inlineIconHTML(card.HealAuraCurseSelf) + `</p>`;
            } else {
                desc += `<p>Dispel your ` + inlineIconHTML(card.HealAuraCurseSelf) + `</p>`;
            };
        };
        if (card.TransferCurses > 0) {
            desc += `<p>Transfer ` + card.TransferCurses + ` curses</p>`;
        };
        if (card.StealAuras > 0) {
            desc += `<p>Steal ` + card.StealAuras + ` auras</p>`;
        };
        if (card.IncreaseAuras > 0) {
            desc += `<p>Increase aura charges by ` + card.IncreaseAuras + `%</p>`;
        };
        if (card.IncreaseCurses > 0) {
            desc += `<p>Increase curse charges by ` + card.IncreaseCurses + `%</p>`;
        };
        if (card.ReduceAuras > 0) {
            desc += `<p>Reduce aura charges by ` + card.ReduceAuras + `%</p>`;
        };
        if (card.ReduceCurses > 0) {
            desc += `<p>Reduce curse charges by ` + card.ReduceCurses + `%</p>`;
        };
        var damageTarget = "";
        if (card.Damage > 0 && !card.DamageSpecialValue1 && !card.DamageSpecialValue2 && !card.DamageSpecialValueGlobal) {
            damageTarget += `<span style="color: var(--meds-color-damage);">` + card.Damage + `</span>` + inlineIconHTML(card.DamageType);
            if (card.Damage2 > 0 && card.DamageType === card.DamageType2 && (card.Damage2SpecialValue1 || card.Damage2SpecialValue2 || card.Damage2SpecialValueGlobal)) {
                damageTarget += `+<span style="color: var(--meds-color-damage);">X</span>` + inlineIconHTML(card.DamageType);
            }
        };
        if (card.Damage2 > 0 && !card.Damage2SpecialValue1 && !card.Damage2SpecialValue2 && !card.Damage2SpecialValueGlobal) {
            damageTarget += `<span style="color: var(--meds-color-damage);">` + card.Damage2 + `</span>` + inlineIconHTML(card.DamageType2);
        };
        if (damageTarget != "") {
            desc += `<p>Deal ` + damageTarget + `</p>`;
        }
        if (card.HealSelfPerDamageDonePercent > 0) {
            desc += `<p>Heal yourself for ` + card.HealSelfPerDamageDonePercent + `% of the damage done</p>`;
        };
        if (card.SelfHealthLoss > 0 && !card.SelfHealthLossSpecialGlobal) {
            if (card.SelfHealthLossSpecialValue1) {
                desc += `<p>Lose <span style="color: var(--meds-color-damage);">X HP</span></p>`;
            } else {
                desc += `<p>Lose <span style="color: var(--meds-color-damage);">` + card.SelfHealthLoss + ` HP</span></p>`;
            };
        };
        var flag1 = false;
        var flag2 = false;
        var bTransformAnd = false;
        if ((card.TargetSide === "Friend" || card.TargetSide === "FriendNotSelf") && card.SpecialValueGlobal === "AuraCurseYours" && card.SpecialAuraCurseNameGlobal != "" && card.SpecialValueModifierGlobal > 0) {
            desc += `<p>Split your ` + inlineIconHTML(card.SpecialAuraCurseNameGlobal) + `</p>`;
            flag1 = true;
        };
        var str5 = "";
        var str6 = "";
        var str7 = "";
        var transform = ""; // this is cheating, because I cbf. :)
        if (!card.Damage2SpecialValue1 && !flag1 && (card.SpecialValueGlobal !== "None" || card.SpecialValue1 !== "None" || card.SpecialValue2 !== "None")) {
            if (!card.DamageSpecialValueGlobal && !card.DamageSpecialValue1 && !card.DamageSpecialValue2) {

                if (card.TargetSide === "Self" && (card.SpecialValueGlobal === "AuraCurseTarget" || card.SpecialValueGlobal === "AuraCurseYours")) {
                    if (card.SpecialAuraCurseNameGlobal != "") {
                        str5 = card.SpecialAuraCurseNameGlobal;
                    };
                    if (card.AuraChargesSpecialValueGlobal) {
                        if (card.Aura != "") {
                            str6 = card.Aura;
                        };
                        if (card.Aura2 != "" && card.AuraCharges2SpecialValueGlobal) {
                            str7 = card.Aura2;
                        };
                    } else if (card.CurseChargesSpecialValueGlobal) {
                        if (card.Curse != "") {
                            str6 = card.Curse;
                        };
                        if (card.Curse2 != "" && card.CurseCharges2SpecialValueGlobal) {
                            str7 = card.Curse2;
                        };

                    };
                } else if (card.SpecialValue1 === "AuraCurseTarget") {
                    if (card.SpecialAuraCurseName1 != "") {
                        str5 = card.SpecialAuraCurseName1;
                    };
                    if (card.AuraChargesSpecialValue1) {
                        if (card.Aura != "") {
                            str6 = card.Aura;
                        };
                        if (card.Aura2 != "" && card.AuraCharges2SpecialValue1) {
                            str7 = card.Aura2;
                        };
                    } else if (card.CurseChargesSpecialValue1) {
                        if (card.Curse != "") {
                            str6 = card.Curse;
                        };
                        if (card.Curse2 != "" && card.CurseCharges2SpecialValue1) {
                            str7 = card.Curse2;
                        };
                    };
                }
                if (str5 != "" && str6 != "") {
                    flag2 = true;
                    if (str5 == str6) { // thing coming from = thing going to? e.g. bleed->bleed
                        if (card.SpecialValueGlobal === "AuraCurseTarget") {
                            if (card.SpecialValueModifierGlobal == 100) {
                                desc += "<p>Double target" + inlineIconHTML(str6) + "</p>";
                            } else if (card.SpecialValueModifierGlobal == 200) {
                                desc += "<p>Triple target" + inlineIconHTML(str6) + "</p>";
                            } else if (card.SpecialValueModifierGlobal < 100) {
                                desc += `<p>Target loses ` + (100 - card.SpecialValueModifierGlobal) + "%" + inlineIconHTML(str6) + `</p>`;
                            };
                        } else if (card.SpecialValueGlobal === "AuraCurseYours") {
                            if (card.SpecialValueModifierGlobal == 100) {
                                desc += "<p>Double your" + inlineIconHTML(str6) + "</p>";
                            } else if (card.SpecialValueModifierGlobal == 200) {
                                desc += "<p>Triple your" + inlineIconHTML(str6) + "</p>";
                            } else if (card.SpecialValueModifierGlobal < 100) {
                                desc += `<p>Lose ` + (100 - card.SpecialValueModifierGlobal) + "% of your " + inlineIconHTML(str6) + `</p>`;
                            };
                        } else if (card.SpecialValue1 === "AuraCurseTarget") {
                            if (card.SpecialValueModifier1 == 100) {
                                desc += "<p>Double target" + inlineIconHTML(str6) + "</p>";
                            } else if (card.SpecialValueModifier1 == 200) {
                                desc += "<p>Triple target" + inlineIconHTML(str6) + "</p>";
                            } else if (card.SpecialValueModifier1 < 100) {
                                desc += `<p>Target loses ` + (100 - card.SpecialValueModifier1) + "%" + inlineIconHTML(str6) + `</p>`;
                            };
                        } else if (card.SpecialValue1 === "AuraCurseYours") {
                            if (card.SpecialValueModifier1 == 100) {
                                desc += "<p>Double your" + inlineIconHTML(str6) + "</p>";
                            } else if (card.SpecialValueModifier1 == 200) {
                                desc += "<p>Triple your" + inlineIconHTML(str6) + "</p>";
                            } else if (card.SpecialValueModifier1 < 100) {
                                desc += `<p>Lose ` + (100 - card.SpecialValueModifier1) + "% of your " + inlineIconHTML(str6) + `</p>`;
                            };
                        };
                    } else {
                        transform = str5;
                        desc += `<p>Transform` + inlineIconHTML(str5) + `into` + inlineIconHTML(str6);
                        if (str7 != "") {
                            desc += inlineIconHTML(str7); // vanilla has "and", but given I can't see it used anywhere I think I'd prefer this format?
                        };
                        if (card.SpecialValueModifier1 > 0 && card.SpecialValueModifier1 != 100) {
                            desc += `<span style="color: var(--meds-color-system);">x` + parseFloat((card.SpecialValueModifier1 / 100).toFixed(2)) + `</span>`;
                        };
                        desc += `</p>`;
                    };
                };
            };
        };
        var num4 = 0;
        str5 = "";
        if (card.Damage > 0 && (card.DamageSpecialValue1 || card.DamageSpecialValueGlobal)) {
            str5 += `<span style="color: var(--meds-color-damage);">X</span>` + inlineIconHTML(card.DamageType);
        };
        if (card.Damage2 > 0 && (card.DamageSpecialValue2 || card.DamageSpecialValueGlobal)) {
            str5 += `<span style="color: var(--meds-color-damage);">X</span>` + inlineIconHTML(card.DamageType2);
        } else if (card.Damage2 > 0 && card.Damage2SpecialValueGlobal && card.DamageType != card.DamageType2) {
            str5 += `<span style="color: var(--meds-color-damage);">X</span>` + inlineIconHTML(card.DamageType2);
        }; // #TODO: check this, I'm pretty sure something in this damage section is wrong?
        if (card.Damage2 > 0 && card.Damage2SpecialValue1 && card.DamageType != card.DamageType2) {
            str5 += `<span style="color: var(--meds-color-damage);">X</span>` + inlineIconHTML(card.DamageType);
        };
        if (str5 !== "") {
            desc += `<p>Deal ` + str5 + `</p>`;
        };
        var theAura = "";
        if (!flag1 && !flag2) {
            str5 = "";
            if (card.EnergyRechargeSpecialValueGlobal) {
                str5 += `<span style="color: var(--meds-color-aura);">X</span>` + inlineIconHTML("energy");
            };
            if (card.Aura !== "" && (card.AuraChargesSpecialValue1 || card.AuraChargesSpecialValueGlobal)) {
                theAura = card.Aura;
                str5 += `<span style="color: var(--meds-color-aura);">X</span>` + inlineIconHTML(card.Aura);
            };
            if (card.Aura2 !== "" && (card.AuraCharges2SpecialValue1 || card.AuraCharges2SpecialValueGlobal)) {
                if (card.Aura === card.Aura2) {
                    // for cards like Ice Barrier that give X+Y charges (where X equals [...])
                    str5 += `<span style="color: var(--meds-color-aura);">` + card.AuraCharges + `</span>` + inlineIconHTML(card.Aura) + `+`;
                };
                str5 += `<span style="color: var(--meds-color-aura);">X</span>` + inlineIconHTML(card.Aura2);
                theAura = card.Aura2;
            };
            if (card.Aura3 !== "" && (card.AuraCharges3SpecialValue1 || card.AuraCharges3SpecialValueGlobal)) {
                if (card.Aura === card.Aura3) {
                    str5 += `<span style="color: var(--meds-color-aura);">` + card.AuraCharges + `</span>` + inlineIconHTML(card.Aura) + `+`;
                };
                if (card.Aura2 === card.Aura3) {
                    str5 += `<span style="color: var(--meds-color-aura);">` + card.Aura2Charges + `</span>` + inlineIconHTML(card.Aura2) + `+`;
                };
                str5 += `<span style="color: var(--meds-color-aura);">X</span>` + inlineIconHTML(card.Aura3);
                theAura = card.Aura3;
            };
            if (str5 !== "") {
                if (card.TargetSide === "Self") {
                    desc += `<p>Gain ` + str5 + `</p>`;
                } else {
                    desc += `<p>Grant ` + str5 + `</p>`;
                };
            };

            str5 = "";
            if (card.Curse !== "" && (card.CurseChargesSpecialValue1 || card.CurseChargesSpecialValueGlobal)) {
                str5 += `<span style="color: var(--meds-color-curse);">X</span>` + inlineIconHTML(card.Curse);
            };
            if (card.Curse2 !== "" && (card.CurseCharges2SpecialValue1 || card.CurseCharges2SpecialValueGlobal)) {
                str5 += `<span style="color: var(--meds-color-curse);">X</span>` + inlineIconHTML(card.Curse2);
            };
            if (card.Curse3 !== "" && (card.CurseCharges3SpecialValue1 || card.CurseCharges3SpecialValueGlobal)) {
                str5 += `<span style="color: var(--meds-color-curse);">X</span>` + inlineIconHTML(card.Curse3);
            };
            if (str5 !== "") {
                if (card.TargetSide === "Self") {
                    desc += `<p>Suffer ` + str5 + `</p>`;
                } else {
                    desc += `<p>Apply ` + str5 + `</p>`;
                };
            };

            str5 = "";
            if (card.CurseSelf !== "" && (card.CurseChargesSpecialValue1 || card.CurseChargesSpecialValueGlobal)) {
                str5 += `<span style="color: var(--meds-color-curse);">X</span>` + inlineIconHTML(card.CurseSelf);
            };
            if (card.CurseSelf2 !== "" && (card.CurseCharges2SpecialValue1 || card.CurseCharges2SpecialValueGlobal)) {
                str5 += `<span style="color: var(--meds-color-curse);">X</span>` + inlineIconHTML(card.CurseSelf2);
            };
            if (card.CurseSelf3 !== "" && (card.CurseCharges3SpecialValue1 || card.CurseCharges3SpecialValueGlobal)) {
                str5 += `<span style="color: var(--meds-color-curse);">X</span>` + inlineIconHTML(card.CurseSelf3);
            };
            if (str5 !== "") {
                if (card.TargetSide === "Self") {
                    desc += `<p>Suffer ` + str5 + `</p>`;
                } else { // this section is redundant because it's cardsYouSuffer either way :D       if (!(card.Damage > 0 || card.Damage2 > 0 || card.DamageSelf > 0 || card.DamageSelf2 > 0)) {
                    desc += `<p>You suffer ` + str5 + `</p>`;
                };
            };
        };
        if (card.Heal > 0 && (card.HealSpecialValue1 || card.HealSpecialValueGlobal)) {
            desc += `<p>Heal <span style="color: var(--meds-color-heal);">X</span>` + inlineIconHTML("heal") + `</p>`;
        };
        if (card.HealSelf > 0 && (card.HealSelfSpecialValue1 || card.HealSelfSpecialValueGlobal)) {
            desc += `<p>Self heal <span style="color: var(--meds-color-heal);">X</span>` + inlineIconHTML("heal") + `</p>`;
        };
        // look, I've separated SpecialValue2 out entirely because I don't want it to fall over if the devs have something else in AtO handling it, but ideally this would be fully integrated and we'd have X/Y/Z.
        // if you get excited when refactoring, consider building that!
        // (also consider a descriptionbuilder based on textSuffer, textGrant, textDeal, textHeal, etc)
        if (flag2 && card.SpecialValue2 !== "None") {
            // transform + do something else
            var aTarget = "";
            var aSelf = "";
            var cTarget = "";
            var cSelf = "";
            if (card.Aura !== "" && card.AuraChargesSpecialValue2) {
                aTarget += `<span style="color: var(--meds-color-aura);">X</span>` + inlineIconHTML(card.Aura);
            };
            if (card.Aura2 !== "" && card.AuraCharges2SpecialValue2) {
                if (card.Aura === card.Aura2) {
                    aTarget += `<span style="color: var(--meds-color-aura);">` + card.AuraCharges + `</span>` + inlineIconHTML(card.Aura) + `+`;
                };
                aTarget += `<span style="color: var(--meds-color-aura);">X</span>` + inlineIconHTML(card.Aura2);
            };
            if (card.Aura3 !== "" && card.AuraCharges3SpecialValue2) {
                if (card.Aura === card.Aura3) {
                    aTarget += `<span style="color: var(--meds-color-aura);">` + card.AuraCharges + `</span>` + inlineIconHTML(card.Aura) + `+`;
                };
                if (card.Aura2 === card.Aura3) {
                    aTarget += `<span style="color: var(--meds-color-aura);">` + card.Aura2Charges + `</span>` + inlineIconHTML(card.Aura2) + `+`;
                };
                aTarget += `<span style="color: var(--meds-color-aura);">X</span>` + inlineIconHTML(card.Aura3);
            };
            if (card.AuraSelf !== "" && card.AuraChargesSpecialValue2) {
                aSelf += `<span style="color: var(--meds-color-aura);">X</span>` + inlineIconHTML(card.AuraSelf);
            };
            if (card.AuraSelf2 !== "" && card.AuraSelfCharges2SpecialValue2) {
                if (card.AuraSelf === card.AuraSelf2) {
                    aSelf += `<span style="color: var(--meds-color-aura);">` + card.AuraCharges + `</span>` + inlineIconHTML(card.AuraSelf) + `+`;
                };
                aSelf += `<span style="color: var(--meds-color-aura);">X</span>` + inlineIconHTML(card.AuraSelf2);
            };
            if (card.AuraSelf3 !== "" && card.AuraSelfCharges3SpecialValue2) {
                if (card.AuraSelf === card.AuraSelf3) {
                    aSelf += `<span style="color: var(--meds-color-aura);">` + card.AuraCharges + `</span>` + inlineIconHTML(card.AuraSelf) + `+`;
                };
                if (card.AuraSelf2 === card.AuraSelf3) {
                    aSelf += `<span style="color: var(--meds-color-aura);">` + card.Aura2Charges + `</span>` + inlineIconHTML(card.AuraSelf2) + `+`;
                };
                aSelf += `<span style="color: var(--meds-color-aura);">X</span>` + inlineIconHTML(card.AuraSelf3);
            };

            if (card.Curse !== "" && card.CurseChargesSpecialValue2) {
                cTarget += `<span style="color: var(--meds-color-curse);">X</span>` + inlineIconHTML(card.Curse);
            };
            if (card.Curse2 !== "" && card.CurseCharges2SpecialValue2) {
                if (card.Curse === card.Curse2) {
                    cTarget += `<span style="color: var(--meds-color-curse);">` + card.CurseCharges + `</span>` + inlineIconHTML(card.Curse) + `+`;
                };
                cTarget += `<span style="color: var(--meds-color-curse);">X</span>` + inlineIconHTML(card.Curse2);
            };
            if (card.Curse3 !== "" && card.CurseCharges3SpecialValue2) {
                if (card.Curse === card.Curse3) {
                    cTarget += `<span style="color: var(--meds-color-curse);">` + card.CurseCharges + `</span>` + inlineIconHTML(card.Curse) + `+`;
                };
                if (card.Curse2 === card.Curse3) {
                    cTarget += `<span style="color: var(--meds-color-curse);">` + card.Curse2Charges + `</span>` + inlineIconHTML(card.Curse2) + `+`;
                };
                cTarget += `<span style="color: var(--meds-color-curse);">X</span>` + inlineIconHTML(card.Curse3);
            };
            if (card.CurseSelf !== "" && card.CurseChargesSpecialValue2) {
                cSelf += `<span style="color: var(--meds-color-curse);">X</span>` + inlineIconHTML(card.CurseSelf);
            };
            if (card.CurseSelf2 !== "" && card.CurseSelfCharges2SpecialValue2) {
                if (card.CurseSelf === card.CurseSelf2) {
                    cSelf += `<span style="color: var(--meds-color-curse);">` + card.CurseCharges + `</span>` + inlineIconHTML(card.CurseSelf) + `+`;
                };
                cSelf += `<span style="color: var(--meds-color-curse);">X</span>` + inlineIconHTML(card.CurseSelf2);
            };
            if (card.CurseSelf3 !== "" && card.CurseSelfCharges3SpecialValue2) {
                if (card.CurseSelf === card.CurseSelf3) {
                    cSelf += `<span style="color: var(--meds-color-curse);">` + card.CurseCharges + `</span>` + inlineIconHTML(card.CurseSelf) + `+`;
                };
                if (card.CurseSelf2 === card.CurseSelf3) {
                    cSelf += `<span style="color: var(--meds-color-curse);">` + card.Curse2Charges + `</span>` + inlineIconHTML(card.CurseSelf2) + `+`;
                };
                cSelf += `<span style="color: var(--meds-color-curse);">X</span>` + inlineIconHTML(card.CurseSelf3);
            };

            if (aTarget !== "") {
                bTransformAnd = true;
                if (card.TargetSide === "Self") {
                    aSelf += aTarget;
                } else {
                    desc += `<p>Grant ` + aTarget + `</p>`;
                };
            };
            if (aSelf !== "") {
                bTransformAnd = true;
                desc += `<p>Gain ` + aSelf + `</p>`;
            };
            if (cTarget !== "") {
                bTransformAnd = true;
                if (card.TargetSide === "Self") {
                    cSelf += cTarget;
                } else {
                    desc += `<p>Apply ` + cTarget + `</p>`;
                };
            };
            if (cSelf !== "") {
                bTransformAnd = true;
                desc += `<p>Suffer ` + cSelf + `</p>`;
            };
        };
        if (bTransformAnd) {
            var mod = 0;
            if (card.SpecialValueModifier2 > 0) {
                mod = card.SpecialValueModifier2 / 100;
            };
            str5 = "";
            if (card.SpecialValue2 === "AuraCurseYours") {
                str5 += `X equals your` + inlineIconHTML(card.SpecialAuraCurseName2);
            } else if (card.SpecialValue2 === "AuraCurseTarget") {
                str5 += `X equals ` + (card.TargetSide === "Self" ? "your" : "target") + inlineIconHTML(card.SpecialAuraCurseName2);
            };
            if (card.SpecialValue2 === "HealthYours") {
                str5 += `X equals your HP`;
            } else if (card.SpecialValue2 === "HealthTarget") {
                str5 += `X equals ` + (card.TargetSide === "Self" ? "your" : "target") + ` HP`;
            };
            if (card.SpecialValue2 === "CardsHand") {
                str5 += `X equals your hand` + inlineIconHTML("card");
            } else if (card.SpecialValue2 === "CardsDeck") {
                str5 += `X equals your draw&nbsp;pile` + inlineIconHTML("card");
            } else if (card.SpecialValue2 === "CardsDiscard") {
                str5 += `X equals your discard&nbsp;pile` + inlineIconHTML("card");
            } else if (card.SpecialValue2 === "CardsVanish") {
                str5 += `X equals your vanish&nbsp;pile` + inlineIconHTML("card");
            } else if (card.SpecialValue2 === "CardsDeckTarget") {
                str5 += `X equals ` + (card.TargetSide === "Self" ? "your" : "target") + ` draw&nbsp;pile` + inlineIconHTML("card");
            } else if (card.SpecialValue2 === "CardsDiscardTarget") {
                str5 += `X equals ` + (card.TargetSide === "Self" ? "your" : "target") + ` discard&nbsp;pile` + inlineIconHTML("card");
            } else if (card.SpecialValue2 === "CardsVanishTarget") {
                str5 += `X equals ` + (card.TargetSide === "Self" ? "your" : "target") + ` vanish&nbsp;pile` + inlineIconHTML("card");
            };
            if (str5 !== "") {
                desc += `<p style="color: var(--meds-color-system); font-size: 70%; line-height: 60%; font-weight: 600;">(` + str5 + (mod > 0 && mod != 1 ? "x" + parseFloat(mod.toFixed(2)) : "") + `)</p>`;
            };
        };
        if (!flag1 && !flag2) {
            var mod = 0;
            if (card.SpecialValueModifierGlobal > 0) {
                mod = card.SpecialValueModifierGlobal / 100;
            } else if (card.SpecialValueModifier1 > 0) {
                mod = card.SpecialValueModifier1 / 100;
            };
            str5 = "";
            if (card.SpecialValue1 === "AuraCurseYours") {
                str5 += `X equals your` + inlineIconHTML(card.SpecialAuraCurseName1);
            } else if (card.SpecialValue1 === "AuraCurseTarget") {
                str5 += `X equals ` + (card.TargetSide === "Self" ? "your" : "target") + inlineIconHTML(card.SpecialAuraCurseName1);
            } else if (card.SpecialValueGlobal === "AuraCurseYours") {
                str5 += `X equals your` + inlineIconHTML(card.SpecialAuraCurseNameGlobal);
            } else if (card.SpecialValueGlobal === "AuraCurseTarget") {
                str5 += `X equals ` + (card.TargetSide === "Self" ? "your" : "target") + inlineIconHTML(card.SpecialAuraCurseNameGlobal);
            };
            if (card.SpecialValueGlobal === "HealthYours" || card.SpecialValue1 === "HealthYours") {
                str5 += `X equals your HP`;
            } else if (card.SpecialValue1 === "HealthTarget") {
                str5 += `X equals ` + (card.TargetSide === "Self" ? "your" : "target") + ` HP`;
            };
            if (card.SpecialValueGlobal === "SpeedYours" || card.SpecialValue1 === "SpeedYours" || card.SpecialValue2 === "SpeedYours") {
                str5 += `X equals your speed`;
            } else if (card.SpecialValueGlobal === "SpeedTarget" || card.SpecialValue1 === "SpeedTarget" || card.SpecialValue2 === "SpeedTarget") {
                str5 += `X equals ` + (card.TargetSide === "Self" ? "your" : "target") + ` speed`;
            } else if (card.SpecialValueGlobal === "SpeedDifference" || card.SpecialValue1 === "SpeedDifference" || card.SpecialValue2 === "SpeedDifference") {
                str5 += `X equals speed difference between you and the target`;
            } else if (card.SpecialValueGlobal === "DiscardedCards" || card.SpecialValue1 === "DiscardedCards" || card.SpecialValue2 === "DiscardedCards") {
                if (card.DiscardCardPlace === "Vanish") {
                    str5 += `X equals vanished` + inlineIconHTML("card");
                } else {
                    str5 += `X equals discarded` + inlineIconHTML("card");
                };
            } else if (card.SpecialValueGlobal === "VanishedCards" || card.SpecialValue1 === "VanishedCards" || card.SpecialValue2 === "VanishedCards") {
                str5 += `X equals vanished` + inlineIconHTML("card");
            };
            if (card.SpecialValueGlobal === "CardsHand" || card.SpecialValue1 === "CardsHand" || card.SpecialValue2 === "CardsHand") {
                str5 += `X equals your hand` + inlineIconHTML("card");
            } else if (card.SpecialValueGlobal === "CardsDeck" || card.SpecialValue1 === "CardsDeck" || card.SpecialValue2 === "CardsDeck") {
                str5 += `X equals your draw&nbsp;pile` + inlineIconHTML("card");
            } else if (card.SpecialValueGlobal === "CardsDiscard" || card.SpecialValue1 === "CardsDiscard" || card.SpecialValue2 === "CardsDiscard") {
                str5 += `X equals your discard&nbsp;pile` + inlineIconHTML("card");
            } else if (card.SpecialValueGlobal === "CardsVanish" || card.SpecialValue1 === "CardsVanish" || card.SpecialValue2 === "CardsVanish") {
                str5 += `X equals your vanish&nbsp;pile` + inlineIconHTML("card");
            } else if (card.SpecialValueGlobal === "CardsDeckTarget" || card.SpecialValue1 === "CardsDeckTarget" || card.SpecialValue2 === "CardsDeckTarget") {
                str5 += `X equals ` + (card.TargetSide === "Self" ? "your" : "target") + ` draw&nbsp;pile` + inlineIconHTML("card");
            } else if (card.SpecialValueGlobal === "CardsDiscardTarget" || card.SpecialValue1 === "CardsDiscardTarget" || card.SpecialValue2 === "CardsDiscardTarget") {
                str5 += `X equals ` + (card.TargetSide === "Self" ? "your" : "target") + ` discard&nbsp;pile` + inlineIconHTML("card");
            } else if (card.SpecialValueGlobal === "CardsVanishTarget" || card.SpecialValue1 === "CardsVanishTarget" || card.SpecialValue2 === "CardsVanishTarget") {
                str5 += `X equals ` + (card.TargetSide === "Self" ? "your" : "target") + ` vanish&nbsp;pile` + inlineIconHTML("card");
            } else if (card.SpecialValueGlobal === "MissingHealthYours" || card.SpecialValue1 === "MissingHealthYours" || card.SpecialValue2 === "MissingHealthYours") {
                str5 += `X equals your missing health`;
            } else if (card.SpecialValueGlobal === "MissingHealthTarget" || card.SpecialValue1 === "MissingHealthTarget" || card.SpecialValue2 === "MissingHealthTarget") {
                str5 += `X equals ` + (card.TargetSide === "Self" ? "your" : "target") + ` missing health`;
            };
            if (str5 !== "") {
                desc += `<p style="color: var(--meds-color-system); font-size: 70%; line-height: 60%; font-weight: 600;">(` + str5 + (mod > 0 && mod != 1 ? "x" + parseFloat(mod.toFixed(2)) : "") + `)</p>`;
            };
        };
        if (card.SelfHealthLoss > 0 && card.SelfHealthLossSpecialGlobal) {
            desc += `<p>Lose <span style="color: var(--meds-color-damage);">X HP</span></p>`;
        };


        if (transform != "") { purgeTarget = purgeTarget.replaceAll(inlineIconHTML(transform), ""); };
        if (purgeTarget != "" && !(card.SpecialValue1 === "None" && card.SpecialValue2 === "None" && card.SpecialValueGlobal === "None")) {
            desc += `<p>Purge ` + (card.TargetSide == "Self" ? "your " : "") + purgeTarget + `</p>`;
        };
        if (transform != "") { dispelTarget = dispelTarget.replaceAll(inlineIconHTML(transform), ""); };
        if (dispelTarget != "" && !(card.SpecialValue1 === "None" && card.SpecialValue2 === "None" && card.SpecialValueGlobal === "None")) {
            desc += `<p>Dispel ` + (card.TargetSide == "Self" ? "your " : "") + dispelTarget + `</p>`;
        };
        if (card.HealAuraCurseSelf != "" && !(card.SpecialValue1 === "None" && card.SpecialValue2 === "None" && card.SpecialValueGlobal === "None") && card.HealAuraCurseSelf !== transform) {
            if (Object.keys(Enums.Aura).includes(card.HealAuraCurseSelf)) {
                desc += `<p>Purge your ` + inlineIconHTML(card.HealAuraCurseSelf) + `</p>`;
            } else {
                desc += `<p>Dispel your ` + inlineIconHTML(card.HealAuraCurseSelf) + `</p>`;
            };
        };

        var auraTarget = "";
        var curseTarget = "";
        var auraSelf = "";
        var curseSelf = "";
        var damageSides = "";
        if (card.EnergyRecharge > 0) {
            auraSelf += `<span style="color: var(--meds-color-system);">` + card.EnergyRecharge + `</span>` + inlineIconHTML("energy");
        };

        if (card.Aura !== "" && card.AuraCharges > 0 && card.Aura !== theAura) {
            if (card.TargetSide === "Self") {
                auraSelf += `<span style="color: var(--meds-color-aura);">` + card.AuraCharges + `</span>` + inlineIconHTML(card.Aura);
            } else {
                auraTarget += `<span style="color: var(--meds-color-aura);">` + card.AuraCharges + `</span>` + inlineIconHTML(card.Aura);
            };
        };
        if (card.Aura2 !== "" && card.AuraCharges2 > 0 && card.Aura2 !== theAura) {
            if (card.TargetSide === "Self") {
                auraSelf += `<span style="color: var(--meds-color-aura);">` + card.AuraCharges2 + `</span>` + inlineIconHTML(card.Aura2);
            } else {
                auraTarget += `<span style="color: var(--meds-color-aura);">` + card.AuraCharges2 + `</span>` + inlineIconHTML(card.Aura2);
            };
        };
        if (card.Aura3 !== "" && card.AuraCharges3 > 0 && card.Aura3 !== theAura) {
            if (card.TargetSide === "Self") {
                auraSelf += `<span style="color: var(--meds-color-aura);">` + card.AuraCharges3 + `</span>` + inlineIconHTML(card.Aura3);
            } else {
                auraTarget += `<span style="color: var(--meds-color-aura);">` + card.AuraCharges3 + `</span>` + inlineIconHTML(card.Aura3);
            };
        };
        if (!flag1) {
            if (card.AuraSelf !== "" && (card.AuraChargesSpecialValue1 || card.AuraChargesSpecialValueGlobal)) {
                auraSelf += `<span style="color: var(--meds-color-aura);">X</span>` + inlineIconHTML(card.AuraSelf);
            };
            if (card.AuraSelf2 !== "" && (card.AuraCharges2SpecialValue1 || card.AuraCharges2SpecialValueGlobal)) {
                auraSelf += `<span style="color: var(--meds-color-aura);">X</span>` + inlineIconHTML(card.AuraSelf2);
            };
            if (card.AuraSelf3 !== "" && (card.AuraCharges3SpecialValue1 || card.AuraCharges3SpecialValueGlobal)) {
                auraSelf += `<span style="color: var(--meds-color-aura);">X</span>` + inlineIconHTML(card.AuraSelf3);
            };
        }
        if (card.Curse != "" && card.CurseCharges > 0) {
            if (card.TargetSide === "Self") {
                curseSelf += `<span style="color: var(--meds-color-curse);">` + card.CurseCharges + `</span>` + inlineIconHTML(card.Curse);
            } else {
                curseTarget += `<span style="color: var(--meds-color-curse);">` + card.CurseCharges + `</span>` + inlineIconHTML(card.Curse);
            };
        };
        if (card.Curse2 != "" && card.CurseCharges2 > 0) {
            if (card.TargetSide === "Self") {
                curseSelf += `<span style="color: var(--meds-color-curse);">` + card.CurseCharges2 + `</span>` + inlineIconHTML(card.Curse2);
            } else {
                curseTarget += `<span style="color: var(--meds-color-curse);">` + card.CurseCharges2 + `</span>` + inlineIconHTML(card.Curse2);
            };
        };
        if (card.Curse3 != "" && card.CurseCharges3 > 0) {
            if (card.TargetSide === "Self") {
                curseSelf += `<span style="color: var(--meds-color-curse);">` + card.CurseCharges3 + `</span>` + inlineIconHTML(card.Curse3);
            } else {
                curseTarget += `<span style="color: var(--meds-color-curse);">` + card.CurseCharges3 + `</span>` + inlineIconHTML(card.Curse3);
            };
        };
        if (auraTarget != "") {
            desc += `<p>` + (card.TargetSide == "Self" ? "Gain" : "Grant") + ` ` + auraTarget + `</p>`;
        };
        if (curseTarget != "") {
            desc += `<p>` + (card.TargetSide == "Self" ? "Suffer" : "Apply") + ` ` + curseTarget + `</p>`;
        };
        if (card.DamageSelf > 0) {
            if (card.DamageSpecialValueGlobal || card.DamageSpecialValue1 || card.DamageSpecialValue2) {
                curseSelf += `<span style="color: var(--meds-color-damage);">X</span>` + inlineIconHTML(card.DamageType);
            } else {
                curseSelf += `<span style="color: var(--meds-color-damage);">` + card.DamageSelf + `</span>` + inlineIconHTML(card.DamageType);
            };
        };
        if (card.DamageSelf2 > 0) {
            if (card.Damage2SpecialValueGlobal || card.Damage2SpecialValue1 || card.Damage2SpecialValue2) {
                curseSelf += `<span style="color: var(--meds-color-damage);">X</span>` + inlineIconHTML(card.DamageType2);
            } else {
                curseSelf += `<span style="color: var(--meds-color-damage);">` + card.DamageSelf2 + `</span>` + inlineIconHTML(card.DamageType2);
            };
        };
        if (card.AuraSelf != "" && card.AuraCharges > 0) {
            auraSelf += `<span style="color: var(--meds-color-aura);">` + card.AuraCharges + `</span>` + inlineIconHTML(card.AuraSelf);
        };
        if (card.AuraSelf2 != "" && card.AuraCharges2 > 0) {
            auraSelf += `<span style="color: var(--meds-color-aura);">` + card.AuraCharges2 + `</span>` + inlineIconHTML(card.AuraSelf2);
        };
        if (card.AuraSelf3 != "" && card.AuraCharges3 > 0) {
            auraSelf += `<span style="color: var(--meds-color-aura);">` + card.AuraCharges3 + `</span>` + inlineIconHTML(card.AuraSelf3);
        };
        if (card.CurseSelf != "" && card.CurseCharges > 0) {
            curseSelf += `<span style="color: var(--meds-color-curse);">` + card.CurseCharges + `</span>` + inlineIconHTML(card.CurseSelf);
        };
        if (card.CurseSelf2 != "" && card.CurseCharges2 > 0) {
            curseSelf += `<span style="color: var(--meds-color-curse);">` + card.CurseCharges2 + `</span>` + inlineIconHTML(card.CurseSelf2);
        };
        if (card.CurseSelf3 != "" && card.CurseCharges3 > 0) {
            curseSelf += `<span style="color: var(--meds-color-curse);">` + card.CurseCharges3 + `</span>` + inlineIconHTML(card.CurseSelf3);
        };
        if (auraSelf != "") {
            desc += `<p>` + (card.TargetSide == "Self" ? "Gain" : "You gain") + ` ` + auraSelf + `</p>`;
        };
        if (curseSelf != "") {
            desc += `<p>` + (card.TargetSide == "Self" ? "Suffer" : "You suffer") + ` ` + curseSelf + `</p>`;
        };
        if (card.Heal > 0 && !card.HealSpecialValue1 && !card.HealSpecialValueGlobal) {
            desc += `<p>` + (card.TargetSide == "Self" ? "Self heal" : "Heal") + ` <span style="color: var(--meds-color-heal);">` + card.Heal + `</span>` + inlineIconHTML("heal") + `</p>`;
        };
        if (card.HealSelf > 0 && !card.HealSelfSpecialValue1 && !card.HealSelfSpecialValueGlobal) {
            desc += `<p>Self heal <span style="color: var(--meds-color-heal);">` + card.HealSelf + `</span>` + inlineIconHTML("heal") + `</p>`;
        };
        if (card.EnergyRecharge < 0) {
            desc += `<p>Lose <span style="color: var(--meds-color-system);">` + Math.abs(card.EnergyRecharge) + `</span>` + inlineIconHTML("energy") + `</p>`;
        };
        if (card.DamageSides > 0) {
            damageSides += `<span style="color: var(--meds-color-damage);">` + card.DamageSides + `</span>` + inlineIconHTML(card.DamageType);
        };
        if (card.DamageSides2 > 0) {
            damageSides += `<span style="color: var(--meds-color-damage);">` + card.DamageSides2 + `</span>` + inlineIconHTML(card.DamageType2);
        };

        if (damageSides !== "") {
            desc += `<p>Target sides ` + damageSides + `</p>`;
        };
        if (card.HealSides > 0) {
            desc += `<p>Heal sides <span style="color: var(--meds-color-heal);">` + card.HealSides + `</span>` + inlineIconHTML("heal") + `</p>`;
        };

        if (card.KillPet) {
            desc += `<p>Kill hero's pet (<span style="color: var(--meds-color-damage);">you&nbsp;monster!</span>)</p>`;
        };
        // overcharge damage
        if (card.DamageEnergyBonus > 0) {
            desc += `<p><span style="color: var(--meds-color-repeat);">[OC]</span>&nbsp;Deal&nbsp;<span style="color: var(--meds-color-damage);">` + card.DamageEnergyBonus + `</span>` + inlineIconHTML(card.DamageType) + `</p>`;
        };
        // overcharge auracurse
        auraTarget = "";
        curseTarget = "";
        // I'm pretty sure this could be better. v. repetitive.
        if (card.AcEnergyBonus != "" && card.AcEnergyBonusQuantity > 0) {
            if (card.TargetSide == "Self") {
                // gain / suffer
                if (Object.keys(Enums.Aura).includes(card.AcEnergyBonus)) {
                    auraTarget += (auraTarget == "" ? "Gain" : "") + `&nbsp;<span style="color: var(--meds-color-aura);">` + card.AcEnergyBonusQuantity + `</span>` + inlineIconHTML(card.AcEnergyBonus);
                } else {
                    curseTarget += (curseTarget == "" ? "Suffer" : "") + `&nbsp;<span style="color: var(--meds-color-curse);">` + card.AcEnergyBonusQuantity + `</span>` + inlineIconHTML(card.AcEnergyBonus);
                };
            } else if (card.TargetSide == "Friend" && Object.keys(Enums.Aura).includes(card.AcEnergyBonus)) {
                // grant
                auraTarget += (auraTarget == "" ? "Grant" : "") + `&nbsp;&nbsp;<span style="color: var(--meds-color-aura);">` + card.AcEnergyBonusQuantity + `</span>` + inlineIconHTML(card.AcEnergyBonus);
            } else {
                // apply
                if (Object.keys(Enums.Aura).includes(card.AcEnergyBonus)) {
                    auraTarget += (auraTarget == "" ? "Apply" : "") + `&nbsp;<span style="color: var(--meds-color-aura);">` + card.AcEnergyBonusQuantity + `</span>` + inlineIconHTML(card.AcEnergyBonus);
                } else {
                    curseTarget += (curseTarget == "" ? "Apply" : "") + `&nbsp;<span style="color: var(--meds-color-curse);">` + card.AcEnergyBonusQuantity + `</span>` + inlineIconHTML(card.AcEnergyBonus);
                };
            };
        };
        if (card.AcEnergyBonus2 != "" && card.AcEnergyBonus2Quantity > 0) {
            if (card.TargetSide == "Self") {
                // gain / suffer
                if (Object.keys(Enums.Aura).includes(card.AcEnergyBonus2)) {
                    auraTarget += (auraTarget == "" ? "Gain" : "") + `&nbsp;<span style="color: var(--meds-color-aura);">` + card.AcEnergyBonus2Quantity + `</span>` + inlineIconHTML(card.AcEnergyBonus2);
                } else {
                    curseTarget += (curseTarget == "" ? "Suffer" : "") + `&nbsp;<span style="color: var(--meds-color-curse);">` + card.AcEnergyBonus2Quantity + `</span>` + inlineIconHTML(card.AcEnergyBonus2);
                };
            } else {
                // grant / apply
                if (Object.keys(Enums.Aura).includes(card.AcEnergyBonus2)) {
                    auraTarget += (auraTarget == "" ? "Grant" : "") + `&nbsp;<span style="color: var(--meds-color-aura);">` + card.AcEnergyBonus2Quantity + `</span>` + inlineIconHTML(card.AcEnergyBonus2);
                } else {
                    curseTarget += (curseTarget == "" ? "Apply" : "") + `&nbsp;<span style="color: var(--meds-color-curse);">` + card.AcEnergyBonus2Quantity + `</span>` + inlineIconHTML(card.AcEnergyBonus2);
                };
            };
        };
        if (auraTarget != "") {
            desc += `<p><span style="color: var(--meds-color-repeat);">[OC]</span>&nbsp;` + auraTarget + `</p>`;
        };
        if (curseTarget != "") {
            desc += `<p><span style="color: var(--meds-color-repeat);">[OC]</span>&nbsp;` + curseTarget + `</p>`;
        };
        // overcharge heal
        if (card.HealEnergyBonus > 0) {
            desc += `<p><span style="color: var(--meds-color-repeat);">[OC]</span>&nbsp;Heal&nbsp;<span style="color: var(--meds-color-heal);">` + card.HealEnergyBonus + `</span>` + inlineIconHTML("heal") + `</p>`;
        };
        var gainText = "";
        var lossText = "";

        if (card.GoldGainQuantity > 0) {
            gainText += card.GoldGainQuantity + inlineIconHTML("gold");
        } else if (card.GoldGainQuantity < 0) {
            lossText += card.GoldGainQuantity + inlineIconHTML("gold");
        };
        if (card.ShardsGainQuantity > 0) {
            if (gainText != "") { gainText += " and " };
            gainText += card.ShardsGainQuantity + inlineIconHTML("shards");
        } else if (card.ShardsGainQuantity < 0) {
            if (lossText != "") { lossText += " and " };
            lossText += card.ShardsGainQuantity + inlineIconHTML("shards");
        };
        if (gainText != "") {
            desc += `<p style="color: var(--meds-color-heal);">Gain ` + gainText + ` per hero</p>`;
        };
        if (lossText != "") {
            desc += `<p style="color: var(--meds-color-damage);">Lose ` + lossText + ` per hero</p>`;
        };
        if (card.EffectRepeatMaxBonus > 1) {
            desc += `<p style="color: var(--meds-color-lasts);">- Repeat up to ` + card.EffectRepeatMaxBonus + ` -</p>`;
        } else if (card.EffectRepeat > 1) {
            if (card.EffectRepeatTarget == "Chain") {
                desc += `<p style="color: var(--meds-color-lasts);">- Chain ` + (card.EffectRepeat - 1) + ` -</p>`;
            } else if (card.EffectRepeatTarget == "NoRepeat") {
                desc += `<p style="color: var(--meds-color-lasts);">- Jump ` + (card.EffectRepeat - 1) + ` (+` + card.EffectRepeatModificator + `%) -</p>`;
            } else {
                desc += `<p style="color: var(--meds-color-lasts);">- Repeat ` + (card.EffectRepeat - 1) + ` -</p>`;
            };
        };
        if (card.IgnoreBlock || card.IgnoreBlock2) {
            desc += `<p style="color: var(--meds-color-repeat);">Ignore block</p>`;
        };
        if (card.SelfKillHiddenSeconds > 0) {
            desc += `<p>Escapes</p>`;
        };
    };
    cardHTML += desc + `</div></div></foreignObject>` + (!bItem ? (`<text class="svg-text-energy" x="90" y="105" text-anchor="middle" dominant-baseline="middle">` + card.EnergyCost + `</text>`) : "") + `</g>
                    </svg>`;
    return cardHTML;
};

function inlineIconHTML(iconName) {
    return `<img src="AtO_images\\icon_` + iconName + `.png" class="img-fluid" style="max-height: 3rem; position: relative; bottom: 7px;" alt="` + iconName + `"/>`;
};

function generateCardObj() {
    var newCard = {};
    var newItem = {};
    newCard.Aura = $("#select_aura1_target").val();
    newCard.Aura2 = $("#select_aura2_target").val();
    newCard.Aura3 = $("#select_aura3_target").val();
    newCard.AuraCharges = parseIntNoNaN($("#amount_aura1_target").val());
    newCard.AuraCharges2 = parseIntNoNaN($("#amount_aura2_target").val());
    newCard.AuraCharges3 = parseIntNoNaN($("#amount_aura3_target").val());
    newCard.AuraSelf = $("#select_aura1_self").val();
    newCard.AuraSelf2 = $("#select_aura2_self").val();
    newCard.AuraSelf3 = $("#select_aura3_self").val();
    newCard.AutoplayEndTurn = false;
    newCard.AutoplayDraw = false;
    if ($("#select_autoplay").val() === "start") {
        newCard.AutoplayDraw = true;
    } else if ($("#select_autoplay").val() === "end") {
        newCard.AutoplayEndTurn = true;
    };
    newCard.AutoplayDraw = $("#check_autoplay").is(':checked');
    newCard.CardUpgraded = $("#select_card_upgraded").val()
    if ($("#select_card_upgraded").val() == "No") {
        newCard.BaseCard = $("#text_id").val();
        newCard.UpgradedFrom = "";
        newCard.UpgradesTo1 = $("#text_upgrades_to_a").val();
        newCard.UpgradesTo2 = $("#text_upgrades_to_b").val();
        newCard.UpgradesToRare = $("#text_upgrades_to_rare").val();
    } else {
        newCard.BaseCard = $("#text_base_card").val();
        newCard.UpgradedFrom = $("#text_base_card").val();
        newCard.UpgradesTo1 = "";
        newCard.UpgradesTo2 = "";
        newCard.UpgradesToRare = "";
    }
    newItem.IsEnchantment = false;
    if (["Weapon", "Armor", "Jewelry", "Accesory", "Pet"].includes($("#select_card_class").val())) {
        // console.log("we have seen cardclass item");
        newCard.CardClass = "Item";
        newCard.CardType = $("#select_card_class").val();
        newCard.CardTypeAux = [];
    } else if ($("#select_card_class").val() === "Enchantment") {
        newItem.IsEnchantment = true;
        newCard.CardClass = "Special";
        newCard.CardType = "Enchantment";
        newCard.CardTypeAux = [];
    } else {
        newCard.CardClass = $("#select_card_class").val();
        if (cardTypes.length == 0) {
            newCard.CardType = "None";
            newCard.CardTypeAux = [];
        } else {
            newCard.CardType = cardTypes[0];
            newCard.CardTypeAux = cardTypes.slice(1);
            if (cardTypes.includes("Melee_Attack") || cardTypes.includes("Ranged_Attack")) { newCard.CardTypeAux[newCard.CardTypeAux.length] = "Attack"; }
            if (cardTypes.includes("Song") || cardTypes.includes("Fire_Spell") || cardTypes.includes("Cold_Spell") || cardTypes.includes("Lightning_Spell") || cardTypes.includes("Mind_Spell") || cardTypes.includes("Shadow_Spell") || cardTypes.includes("Holy_Spell") || cardTypes.includes("Curse_Spell") || cardTypes.includes("Healing_Spell")) { newCard.CardTypeAux[newCard.CardTypeAux.length] = "Spell"; }
        };
    };
    newCard.CardName = $("#text_name").val().trim();
    newCard.CardRarity = $("#select_card_rarity").val();
    newCard.Curse = $("#select_curse1_target").val();
    newCard.Curse2 = $("#select_curse2_target").val();
    newCard.Curse3 = $("#select_curse3_target").val();
    newCard.CurseCharges = parseIntNoNaN($("#amount_curse1_target").val());
    newCard.CurseCharges2 = parseIntNoNaN($("#amount_curse2_target").val());
    newCard.CurseCharges3 = parseIntNoNaN($("#amount_curse3_target").val());
    newCard.CurseSelf = $("#select_curse1_self").val();
    newCard.CurseSelf2 = $("#select_curse2_self").val();
    newCard.CurseSelf3 = $("#select_curse3_self").val();
    newCard.Damage = parseIntNoNaN($("#amount_damage_1_target").val());
    newCard.DamageSelf = parseIntNoNaN($("#amount_damage_1_self").val());
    newCard.DamageSides = parseIntNoNaN($("#amount_damage_1_sides").val());
    newCard.DamageType = $("#select_damage_1_type").val();
    newCard.Damage2 = parseIntNoNaN($("#amount_damage_2_target").val());
    newCard.DamageSelf2 = parseIntNoNaN($("#amount_damage_2_self").val());
    newCard.DamageSides2 = parseIntNoNaN($("#amount_damage_2_sides").val());
    newCard.DamageType2 = $("#select_damage_2_type").val();
    newCard.DamageEnergyBonus = $("#select_repeat").val() == "Overcharge" ? parseIntNoNaN($("#amount_damage_overcharge").val()) : 0;
    newCard.DiscardCard = parseIntNoNaN($("#amount_discard_cards").val());
    newCard.DiscardCardAutomatic = $("#check_discard_random").is(':checked');
    newCard.DiscardCardPlace = $("#select_discard_place").val();
    if (discardCardTypes.length == 0) {
        newCard.DiscardCardType = "None";
        newCard.DiscardCardTypeAux = [];
    } else {
        newCard.DiscardCardType = discardCardTypes[0];
        newCard.DiscardCardTypeAux = discardCardTypes.slice(1);
    };
    newCard.DispelAuras = parseIntNoNaN($("#dispel_auras").val());
    newCard.DrawCard = parseIntNoNaN($("#amount_draw_cards").val());
    newCard.EffectCastCenter = $("#check_effect_cast_center").is(':checked');
    newCard.EffectCaster = $("#select_effect_caster").val();
    newCard.EffectCasterRepeat = $("#check_effect_caster_repeat").is(':checked');
    newCard.EffectPreAction = $("#select_effect_pre_action").val();
    newCard.EffectTarget = $("#select_effect_target").val();
    newCard.EffectTrail = $("#select_effect_trail").val();
    newCard.EffectTrailAngle = $("#select_effect_trail_angle").val();
    newCard.AcEnergyBonus = "";
    newCard.AcEnergyBonusQuantity = 0;
    newCard.AcEnergyBonus2 = "";
    newCard.AcEnergyBonus2Quantity = 0;
    newCard.EffectRepeat = 1;
    newCard.EffectRepeatTarget = "Same";
    newCard.EffectRepeatMaxBonus = 0;
    newCard.EffectRepeatModificator = 0;
    switch ($("#select_repeat").val()) {
        case "NoRepeat":
            break;
        case "RepeatX":
            newCard.EffectRepeat = parseIntNoNaN($("#amount_repeat").val());
            if (["AnyHero", "AnyMonster"].includes($("#select_target_type").val())) {
                newCard.EffectRepeatTarget = $("#select_repeat_target").val();
            };
            break;
        case "RepeatUpToX":
            newCard.EffectRepeatMaxBonus = parseIntNoNaN($("#amount_repeat").val());
            if (["AnyHero", "AnyMonster"].includes($("#select_target_type").val())) {
                newCard.EffectRepeatTarget = $("#select_repeat_target").val();
            };
            break;
        case "Chain":
            newCard.EffectRepeat = parseIntNoNaN($("#amount_repeat").val());
            newCard.EffectRepeatModificator = -50;
            newCard.EffectRepeatTarget = "Chain";
            break;
        case "Jump":
            newCard.EffectRepeat = parseIntNoNaN($("#amount_repeat").val());
            newCard.EffectRepeatModificator = parseIntNoNaN($("#amount_repeat_modifier").val());
            newCard.EffectRepeatTarget = "NoRepeat";
            break;
        case "Overcharge":
            newCard.AcEnergyBonus = $("#select_auracurse1_overcharge").val();
            newCard.AcEnergyBonusQuantity = parseIntNoNaN($("#amount_auracurse1_overcharge").val());
            newCard.AcEnergyBonus2 = $("#select_auracurse2_overcharge").val();
            newCard.AcEnergyBonus2Quantity = parseIntNoNaN($("#amount_auracurse2_overcharge").val());
            break;
    };
    newCard.EffectRepeatEnergyBonus = newCard.EffectRepeatMaxBonus;
    newCard.EffectTrailRepeat = $("#check_effect_trail_repeat").is(':checked');
    newCard.EnergyCost = parseIntNoNaN($("#amount_energy_cost").val());
    newCard.EnergyRecharge = parseIntNoNaN($("#amount_energy_recharge").val());
    newCard.Heal = parseIntNoNaN($("#amount_healing_target").val());
    newCard.HealAuraCurseName = $("#select_dispel_target").val();
    newCard.HealAuraCurseName2 = $("#select_dispel_target2").val();
    newCard.HealAuraCurseName3 = $("#select_dispel_target3").val();
    newCard.HealAuraCurseName4 = $("#select_dispel_target4").val();
    newCard.HealAuraCurseSelf = $("#select_dispel_self").val();
    newCard.HealCurses = parseIntNoNaN($("#heal_curses").val());
    newCard.HealEnergyBonus = $("#select_repeat").val() == "Overcharge" ? parseIntNoNaN($("#amount_healing_overcharge").val()) : 0;
    newCard.HealSelf = parseIntNoNaN($("#amount_healing_self").val());
    newCard.HealSides = parseIntNoNaN($("#amount_healing_sides").val());
    newCard.ID = $("#text_id").val().trim();
    // console.log("ID: " + newCard.ID);
    newCard.IgnoreBlock = $("#check_ignore_block").is(':checked');
    newCard.IgnoreBlock2 = $("#check_ignore_block2").is(':checked');
    newCard.IncreaseAuras = parseIntNoNaN($("#increase_auras").val());
    newCard.IncreaseCurses = parseIntNoNaN($("#increase_curses").val());
    newCard.ReduceAuras = parseIntNoNaN($("#reduce_auras").val());
    newCard.ReduceCurses = parseIntNoNaN($("#reduce_curses").val());
    newCard.Innate = $("#check_innate").is(':checked');
    newCard.LookCards = parseIntNoNaN($("#amount_look").val());
    newCard.LookCardsDiscardUpTo = parseIntNoNaN($("#amount_look_discard").val());
    newCard.LookCardsVanishUpTo = parseIntNoNaN($("#amount_look_vanish").val());
    newCard.SelfHealthLoss = parseIntNoNaN($("#amount_self_health_loss").val());
    newCard.Sound = $("#select_sound").val();
    newCard.SoundPreAction = $("#select_sound_pre_action").val();
    newCard.SoundPreActionFemale = $("#select_sound_pre_action_female").val();
    newCard.Sprite = $("#text_sprite").val();
    newCard.StealAuras = parseIntNoNaN($("#steal_auras").val());
    newCard.TransferCurses = parseIntNoNaN($("#transfer_curses").val());
    switch ($("#select_target_type").val()) {
        case "Anyone":
            newCard.TargetPosition = $("#select_target_position").val();
            newCard.TargetSide = "Anyone";
            newCard.TargetType = "Single";
            break;
        case "Self":
            newCard.TargetPosition = "Anywhere";
            newCard.TargetSide = "Self";
            newCard.TargetType = "Single";
            break;
        case "AnyHero":
            newCard.TargetPosition = $("#select_target_position").val();
            newCard.TargetSide = "Friend";
            newCard.TargetType = "Single";
            break;
        case "OtherHero":
            newCard.TargetPosition = $("#select_target_position").val();
            newCard.TargetSide = "FriendNotSelf";
            newCard.TargetType = "Single";
            break;
        case "AnyMonster":
            newCard.TargetPosition = $("#select_target_position").val();
            newCard.TargetSide = "Enemy";
            newCard.TargetType = "Single";
            break;
        case "AllHeroes":
            newCard.TargetPosition = "Anywhere";
            newCard.TargetSide = "Friend";
            newCard.TargetType = "Global";
            break;
        case "AllMonsters":
            newCard.TargetPosition = "Anywhere";
            newCard.TargetSide = "Enemy";
            newCard.TargetType = "Global";
            break;
        case "Global":
            newCard.TargetPosition = "Anywhere";
            newCard.TargetSide = "Anyone";
            newCard.TargetType = "Global";
            break;
    };
    newCard.Vanish = $("#check_vanish").is(':checked');
    newCard.GoldGainQuantity = parseIntNoNaN($("#amount_gold").val());
    newCard.ShardsGainQuantity = parseIntNoNaN($("#amount_shards").val());
    newCard.HealSelfPerDamageDonePercent = parseFloat($("#amount_vampirism").val());
    newCard.EffectRequired = $("#select_requires").val();
    newCard.AuraChargesSpecialValue1 = $("#check_sv1_aura").is(':checked');
    newCard.AuraChargesSpecialValue2 = $("#check_sv2_aura").is(':checked');
    newCard.AuraChargesSpecialValueGlobal = $("#check_sv3_aura").is(':checked');
    newCard.AuraCharges2SpecialValue1 = $("#check_sv1_aura2").is(':checked');
    newCard.AuraCharges2SpecialValue2 = $("#check_sv2_aura2").is(':checked');
    newCard.AuraCharges2SpecialValueGlobal = $("#check_sv3_aura2").is(':checked');
    newCard.AuraCharges3SpecialValue1 = $("#check_sv1_aura3").is(':checked');
    newCard.AuraCharges3SpecialValue2 = $("#check_sv2_aura3").is(':checked');
    newCard.AuraCharges3SpecialValueGlobal = $("#check_sv3_aura3").is(':checked');
    newCard.CurseChargesSpecialValue1 = $("#check_sv1_curse").is(':checked');
    newCard.CurseChargesSpecialValue2 = $("#check_sv2_curse").is(':checked');
    newCard.CurseChargesSpecialValueGlobal = $("#check_sv3_curse").is(':checked');
    newCard.CurseCharges2SpecialValue1 = $("#check_sv1_curse2").is(':checked');
    newCard.CurseCharges2SpecialValue2 = $("#check_sv2_curse2").is(':checked');
    newCard.CurseCharges2SpecialValueGlobal = $("#check_sv3_curse2").is(':checked');
    newCard.CurseCharges3SpecialValue1 = $("#check_sv1_curse3").is(':checked');
    newCard.CurseCharges3SpecialValue2 = $("#check_sv2_curse3").is(':checked');
    newCard.CurseCharges3SpecialValueGlobal = $("#check_sv3_curse3").is(':checked');
    newCard.DamageSpecialValue1 = $("#check_sv1_damage").is(':checked');
    newCard.DamageSpecialValue2 = $("#check_sv2_damage").is(':checked');
    newCard.DamageSpecialValueGlobal = $("#check_sv3_damage").is(':checked');
    newCard.Damage2SpecialValue1 = $("#check_sv1_damage2").is(':checked');
    newCard.Damage2SpecialValue2 = $("#check_sv2_damage2").is(':checked');
    newCard.Damage2SpecialValueGlobal = $("#check_sv3_damage2").is(':checked');
    newCard.HealSelfSpecialValue1 = $("#check_sv1_heal_self").is(':checked');
    newCard.HealSelfSpecialValue2 = $("#check_sv2_heal_self").is(':checked');
    newCard.HealSelfSpecialValueGlobal = $("#check_sv3_heal_self").is(':checked');
    newCard.HealSpecialValue1 = $("#check_sv1_heal").is(':checked');
    newCard.HealSpecialValue2 = $("#check_sv2_heal").is(':checked');
    newCard.HealSpecialValueGlobal = $("#check_sv3_heal").is(':checked');
    newCard.SelfHealthLossSpecialGlobal = $("#check_sv1_health_loss").is(':checked');
    newCard.SelfHealthLossSpecialValue1 = $("#check_sv2_health_loss").is(':checked');
    newCard.SelfHealthLossSpecialValue2 = $("#check_sv3_health_loss").is(':checked');
    newCard.DrawCardSpecialValueGlobal = $("#check_sv3_draw_card").is(':checked');
    newCard.EnergyRechargeSpecialValueGlobal = $("#check_sv3_energy_recharge").is(':checked');
    newCard.SpecialAuraCurseName1 = $("#select_sv1_aura").val();
    newCard.SpecialAuraCurseName2 = $("#select_sv2_aura").val();
    newCard.SpecialAuraCurseNameGlobal = $("#select_sv3_aura").val();
    newCard.SpecialValue1 = $("#select_sv1").val();
    newCard.SpecialValue2 = $("#select_sv2").val();
    newCard.SpecialValueGlobal = $("#select_sv3").val();
    newCard.SpecialValueModifier1 = parseFloat($("#amount_sv1_modifier").val());
    newCard.SpecialValueModifier2 = parseFloat($("#amount_sv2_modifier").val());
    newCard.SpecialValueModifierGlobal = parseFloat($("#amount_sv3_modifier").val());
    newCard.AddCard = parseIntNoNaN($("#amount_add_cards").val());
    newCard.AddCardChoose = parseIntNoNaN($("#amount_add_cards_choose").val());
    newCard.AddCardReducedCost = 0;
    newCard.AddCardCostTurn = false;
    newCard.AddCardFrom = "Deck";
    newCard.AddCardId = "";
    newCard.AddCardList = [];
    newCard.AddCardPlace = "Discard";
    newCard.AddCardType = "None";
    newCard.AddCardTypeAux = [];
    newCard.AddCardVanish = false
    newCard.RelatedCard = "";
    newCard.RelatedCard2 = "";
    newCard.RelatedCard3 = "";
    if (newCard.AddCard > 0) {
        newCard.AddCardChoose = parseIntNoNaN($("#amount_add_cards_choose").val());
        if ($("#select_discover_cost").val() === "nochange") {
        } else if ($("#select_discover_cost").val() === "Free") {
            newCard.AddCardReducedCost = -1;
        } else if ($("#select_discover_cost").val() === "FreeT") {
            newCard.AddCardReducedCost = -1;
            newCard.AddCardCostTurn = true;
        } else if ($("#select_discover_cost").val().slice(-1) == "T") {
            newCard.AddCardReducedCost = parseIntNoNaN($("#select_discover_cost").val().slice(1));
            newCard.AddCardCostTurn = true;
        } else {
            newCard.AddCardReducedCost = parseIntNoNaN($("#select_discover_cost").val());
            newCard.AddCardCostTurn = false;
        };
        if ($("#select_discover_what").val() === "type") {
            if (addCardTypes.length > 1) {
                newCard.AddCardType = addCardTypes[0];
                newCard.AddCardTypeAux = addCardTypes.slice(1);
            } else if (addCardTypes.length === 1) {
                newCard.AddCardType = addCardTypes[0];
                newCard.AddCardTypeAux = addCardTypes.slice(1);
            };
        } else {
            // by card id (e.g. enchant weapons)
            if (addCardList.length > 1) {
                newCard.AddCardList = addCardList;
                newCard.RelatedCard = addCardList[0];
                newCard.RelatedCard2 = addCardList[1];
                if (addCardList.length > 2) { newCard.RelatedCard3 = addCardList[2]; };
            } else if (addCardList.length == 1) {
                newCard.AddCardId = addCardList[0];
                newCard.RelatedCard = addCardList[0];
            };
        };
        newCard.AddCardFrom = $("#select_discover_where_from").val();
        newCard.AddCardPlace = $("#select_discover_where_to").val();
        newCard.AddCardVanish = $("#check_discover_vanish").is(':checked');
    };
    // I think summoning will be difficult, because I suspect that I would need another slot. Could do a jank enchantment version instead, a la blobs?
    newCard.SummonAura = $("#text_summon_aura").val();
    newCard.SummonAura2 = $("#text_summon_aura2").val();
    newCard.SummonAura3 = $("#text_summon_aura3").val();
    newCard.SummonAuraCharges = parseIntNoNaN($("#amount_summon_aura").val());
    newCard.SummonAuraCharges2 = parseIntNoNaN($("#amount_summon_aura2").val());
    newCard.SummonAuraCharges3 = parseIntNoNaN($("#amount_summon_aura3").val());
    newCard.SummonUnit = $("#text_summon_unit").val();
    newCard.SummonUnitNum = parseIntNoNaN($("#amount_summon_unit").val());
    // other, low priority
    newCard.EffectPostCastDelay = parseFloat($("#amount_effect_post_cast_delay").val());
    newCard.EffectPostTargetDelay = parseFloat($("#amount_effect_post_target_delay").val());
    newCard.EffectRepeatDelay = parseFloat($("#amount_effect_repeat_delay").val());
    newCard.EffectTrailSpeed = parseFloat($("#amount_trail_speed").val())
    newCard.IsPetAttack = $("#check_is_pet_attack").is(':checked');
    newCard.IsPetCast = $("#check_is_pet_cast").is(':checked');
    newCard.Lazy = $("#check_lazy").is(':checked');
    newCard.ModifiedByTrait = $("#check_modified_by_trait").is(':checked');
    newCard.MoveToCenter = $("#check_move_to_center").is(':checked');
    newCard.PetFront = $("#check_pet_front").is(':checked');
    newCard.PetInvert = $("#check_pet_invert").is(':checked');
    newCard.PetModel = $("#text_pet_model").val();
    newCard.PetOffset = $("#text_pet_offset").val();
    newCard.PetSize = $("#text_pet_size").val();
    newCard.Playable = $("#check_playable").is(':checked');
    newCard.PullTarget = parseIntNoNaN($("#amount_pull_target").val());
    newCard.PushTarget = parseIntNoNaN($("#amount_push_target").val());
    newCard.SelfKillHiddenSeconds = parseIntNoNaN($("#amount_self_kill_hidden").val());
    newCard.ShowInTome = $("#check_show_in_tome").is(':checked');
    newCard.Starter = $("#check_starter").is(':checked');
    newCard.Visible = $("#check_visible").is(':checked');
    // probably unnecessary?
    newCard.CardNumber = parseIntNoNaN($("#amount_card_number").val());
    newCard.CardTypeList = []; // #TODO, but probably not
    newCard.Corrupted = $("#check_corrupted").is(':checked'); // #TODO when you do monster cards?
    newCard.Description = "";
    newCard.DescriptionID = ""; // #TODO: DescriptionID
    newCard.EndTurn = $("#check_end_turn").is(':checked');
    newCard.EnergyCostForShow = parseIntNoNaN($("#amount_energy_cost_for_show").val());
    newCard.EnergyReductionPermanent = parseIntNoNaN($("#amount_energy_reduction_permanent").val());
    newCard.EnergyReductionTemporal = parseIntNoNaN($("#amount_energy_reduction_temporal").val());
    newCard.EnergyReductionToZeroPermanent = $("#check_energy_reduction_to_zero_permanent").is(':checked');
    newCard.EnergyReductionToZeroTemporal = $("#check_energy_reduction_to_zero_temporal").is(':checked');
    newCard.ExhaustCounter = parseIntNoNaN($("#amount_exhaust_counter").val());
    newCard.FlipSprite = $("#check_flip_sprite").is(':checked');
    newCard.Fluff = $("#text_fluff").val();
    newCard.FluffPercent = parseFloat($("#amount_fluff_percent").val());
    newCard.KillPet = $("#check_kill_pet").is(':checked');
    newCard.MaxInDeck = parseIntNoNaN($("#amount_max_in_deck").val());
    newCard.OnlyInWeekly = $("#check_only_in_weekly").is(':checked');
    newCard.Sku = $("#text_sku").val();
    newItem.ACG1MultiplyByEnergyUsed = $("#check_acg1multiplybyenergyused").is(':checked');
    newItem.ACG2MultiplyByEnergyUsed = $("#check_acg2multiplybyenergyused").is(':checked');
    newItem.ACG3MultiplyByEnergyUsed = $("#check_acg3multiplybyenergyused").is(':checked');
    newItem.DTTMultiplyByEnergyUsed = $("#check_dttmultiplybyenergyused").is(':checked');
    newItem.DrawMultiplyByEnergyUsed = $("#check_drawmultiplybyenergyused").is(':checked');
    newItem.UsedEnergy = (newItem.ACG1MultiplyByEnergyUsed || newItem.ACG2MultiplyByEnergyUsed || newItem.ACG3MultiplyByEnergyUsed || newItem.DTTMultiplyByEnergyUsed || newItem.DrawMultiplyByEnergyUsed);

    newItem.ActivationOnlyOnHeroes = false; // would only be used for monster cards?
    newItem.AuraCurseBonus1 = $("#select_auracursebonus1").val();
    newItem.AuraCurseBonusValue1 = parseIntNoNaN($("#amount_auracursebonusvalue1").val());
    newItem.AuraCurseBonus2 = $("#select_auracursebonus2").val();
    newItem.AuraCurseBonusValue2 = parseIntNoNaN($("#amount_auracursebonusvalue2").val());
    newItem.AuraCurseCustomAC = $("#select_auracursecustomac").val();
    newItem.AuraCurseCustomString = "";
    newItem.AuraCurseCustomModValue1 = 0;
    newItem.AuraCurseCustomModValue2 = 0;
    if ($("#select_auracursecustom").val() === "healingresist") {
        newItem.AuraCurseCustomString = "itemCustomTextAllResistHealingReceived";
        newItem.AuraCurseCustomModValue1 = parseIntNoNaN($("#amount_auracursecustomresistances").val());
        newItem.AuraCurseCustomModValue2 = parseIntNoNaN($("#amount_auracursecustomhealing").val());
    } else if ($("#select_auracursecustom").val() === "maxcharges") {
        newItem.AuraCurseCustomModValue1 = parseIntNoNaN($("#amount_auracursecustommaxcharges").val());
        if ($("#select_auracursecustomac").val() === "Dark") {
            newItem.AuraCurseCustomString = "itemCustomTextExplodeChargesMonsters";
        } else if (Object.keys(Enums.Aura).includes($("#select_auracursecustomac").val())) {
            newItem.AuraCurseCustomString = "itemCustomTextMaxChargesIncrasedOnHeroes";
        } else if (Object.keys(Enums.Curse).includes($("#select_auracursecustomac").val())) {
            newItem.AuraCurseCustomString = "itemCustomTextMaxChargesIncrasedOnEnemies";
        };
    };
    newItem.AuraCurseGain1 = $("#select_auracursegain1").val();
    newItem.AuraCurseGain2 = $("#select_auracursegain2").val();
    newItem.AuraCurseGain3 = $("#select_auracursegain3").val();
    newItem.AuraCurseGainSelf1 = $("#select_auracursegainself1").val();
    newItem.AuraCurseGainSelf2 = $("#select_auracursegainself2").val();
    newItem.AuraCurseGainSelfValue1 = parseIntNoNaN($("#amount_auracursegainselfvalue1").val());
    newItem.AuraCurseGainSelfValue2 = parseIntNoNaN($("#amount_auracursegainselfvalue2").val());
    newItem.AuraCurseGainValue1 = parseIntNoNaN($("#amount_auracursegainvalue1").val());
    newItem.AuraCurseGainValue2 = parseIntNoNaN($("#amount_auracursegainvalue2").val());
    newItem.AuraCurseGainValue3 = parseIntNoNaN($("#amount_auracursegainvalue3").val());
    newItem.AuraCurseImmune1 = $("#select_auracurseimmune1").val();
    newItem.AuraCurseImmune2 = $("#select_auracurseimmune2").val();
    newItem.CardNum = parseIntNoNaN($("#amount_cardnum").val());
    newItem.CardPlace = $("#select_carditem_cardplace").val();
    newItem.DuplicateActive = false;
    newItem.CastEnchantmentOnFinishSelfCast = false;
    newItem.CardToGain = "";
    newItem.CardToGainList = [];
    newItem.CardToGainType = $("#select_cardtogaintype").val();
    
    if ($("#select_cardtogainwhat").val() === "duplicate") {
        newItem.CardPlace = "Hand";
        newItem.DuplicateActive = true;
        newItem.CastEnchantmentOnFinishSelfCast = true;
    } else if ($("#select_cardtogainwhat").val() === "list") {
        newItem.CardPlace = $("#select_carditem_cardplace").val();

        if (addCardList.length > 1) {
            newCard.AddCardList = addCardList;
        } else if (addCardList.length == 1) {
            newCard.AddCardId = addCardList[0];
            newCard.RelatedCard = addCardList[0];
        };

        if (cardToGainList.length > 1) {
            newItem.CardToGainList = cardToGainList;
            newCard.RelatedCard = cardToGainList[0];
            newCard.RelatedCard2 = cardToGainList[1];
            if (cardToGainList.length > 2) { newCard.RelatedCard3 = cardToGainList[2]; };
        } else if (cardToGainList.length > 0) {
            newItem.CardToGain = cardToGainList[0];
            newCard.RelatedCard = cardToGainList[0];
        };
    } else {
        newItem.CardPlace = $("#select_carditem_cardplace").val();
    };
    if (newItem.CardPlace == null) { newItem.CardPlace = "Hand" };

    newItem.CostReduction = 0;
    newItem.Vanish = $("#check_cardtogain_vanish").is(':checked');
    newItem.Permanent = false;
    newItem.CostZero = false;
    if ($("#select_cardtogain_costreduction").val() === "nochange") {
    } else if ($("#select_cardtogain_costreduction").val() === "Free") {
        newItem.CostZero = true;
        newItem.Permanent = true;
    } else if ($("#select_cardtogain_costreduction").val() === "FreeT") {
        newItem.CostZero = true;
    } else if ($("#select_cardtogain_costreduction").val().slice(-1) == "T") {
        newItem.CostReduction = parseIntNoNaN($("#select_cardtogain_costreduction").val().slice(1));
    } else {
        newItem.CostReduction = parseIntNoNaN($("#select_cardtogain_costreduction").val());
        newItem.Permanent = true;
    };


    newItem.CardToReduceType = $("#select_cardtoreducetype").val();
    newItem.CardsReduced = parseIntNoNaN($("#amount_cardsreduced").val());
    newItem.CostReduceReduction = parseIntNoNaN($("#amount_costreducereduction").val());
    newItem.CostReduceEnergyRequirement = parseIntNoNaN($("#amount_costreduceenergyrequirement").val());
    newItem.ReduceHighestCost = $("#check_reducehighestcost").is(':checked');
    newItem.CostReducePermanent = $("#check_costreducepermanent").is(':checked');
    
    newItem.EnergyQuantity = parseIntNoNaN($("#amount_energyquantity").val());
    newItem.SpriteBossDrop = ""; // #TODO maybe custom Obeliskial image later?
    newItem.AuraCurseNumForOneEvent = 0;
    newItem.AuraCurseSetted = "";
    newItem.CastedCardType = "None";
    newItem.RoundCycle = 0;
    newItem.EmptyHand = false;
    newItem.ExactRound = 0;
    var sActivation = $("#select_activation").val();
    newItem.ItemTarget = $("#select_itemtarget").val();
    newItem.LowerOrEqualPercentHP = parseIntNoNaN($("#amount_lowerorequalpercenthp").val());
    newItem.TimesPerCombat = parseIntNoNaN($("#amount_timespercombat").val());
    newItem.TimesPerTurn = parseIntNoNaN($("#amount_timesperturn").val());
    newItem.DestroyEndOfTurn = false;
    newItem.DestroyStartOfTurn = false;
    if ($("#select_activation_destroy").val() === "end") {
        // destroy for items only
        newItem.DestroyAfterUse = true;
        newItem.DestroyAfterUses = parseIntNoNaN($("#amount_destroyafteruses").val());
        newItem.DestroyEndOfTurn = true;
    } else if ($("#select_activation_destroy").val() === "start") {
        // destroy for items only
        newItem.DestroyAfterUse = true;
        newItem.DestroyAfterUses = parseIntNoNaN($("#amount_destroyafteruses").val());
        newItem.DestroyStartOfTurn = true;
    } else if ($("#select_activation_destroy").val() === "afterx") {
        // destroy for items only
        newItem.DestroyAfterUse = true;
        newItem.DestroyAfterUses = parseIntNoNaN($("#amount_destroyafteruses").val());
    } else {
        newItem.DestroyAfterUse = false;
        newItem.DestroyAfterUses = 0;
    };
    newItem.UseTheNextInsteadWhenYouPlay = (newItem.IsEnchantment && sActivation === "FinishCast" && newItem.DestroyAfterUses > 0);
    newItem.ChanceToDispel = parseIntNoNaN($("#amount_chancetodispel").val());
    newItem.ChanceToDispelNum = parseIntNoNaN($("#amount_chancetodispelnum").val());

    newItem.CharacterStatModified = "None";
    newItem.CharacterStatModified2 = "None";
    newItem.CharacterStatModified3 = "None";
    newItem.CharacterStatModifiedValue = 0;
    newItem.CharacterStatModifiedValue2 = 0;
    newItem.CharacterStatModifiedValue3 = 0;
    if ($("#amount_characterstatspeed").val() != 0) {
        newItem.CharacterStatModified = "Speed";
        newItem.CharacterStatModifiedValue = parseIntNoNaN($("#amount_characterstatspeed").val());
        if ($("#amount_characterstatenergyperturn").val() != 0) {
            newItem.CharacterStatModified2 = "EnergyTurn";
            newItem.CharacterStatModifiedValue2 = parseIntNoNaN($("#amount_characterstatenergyperturn").val());
        };
    } else if ($("#amount_characterstatenergyperturn").val() != 0) {
        newItem.CharacterStatModified = "EnergyTurn";
        newItem.CharacterStatModifiedValue = parseIntNoNaN($("#amount_characterstatenergyperturn").val());
    };
    newItem.CursedItem = $("#check_curseditem").is(':checked');
    newItem.DamageFlatBonus = $("#select_damageflatbonus").val();
    // console.log($("#select_damageflatbonus").val());
    // console.log(newItem.DamageFlatBonus);
    newItem.DamageFlatBonus2 = $("#select_damageflatbonus2").val();
    newItem.DamageFlatBonus3 = $("#select_damageflatbonus3").val();
    newItem.DamageFlatBonusValue = parseIntNoNaN($("#amount_damageflatbonusvalue").val());
    newItem.DamageFlatBonusValue2 = parseIntNoNaN($("#amount_damageflatbonusvalue2").val());
    newItem.DamageFlatBonusValue3 = parseIntNoNaN($("#amount_damageflatbonusvalue3").val());
    if ((newItem.DamageFlatBonus == "None" || newItem.DamageFlatBonusValue == 0) && newItem.DamageFlatBonus2 != "None" && newItem.DamageFlatBonusValue2 != 0) {
        //damage1 not used, damage2 used
        newItem.DamageFlatBonus = newItem.DamageFlatBonus2;
        newItem.DamageFlatBonusValue = newItem.DamageFlatBonusValue2;
        newItem.DamageFlatBonus2 = "None";
        newItem.DamageFlatBonusValue2 = 0;
    };
    if ((newItem.DamageFlatBonus == "None" || newItem.DamageFlatBonusValue == 0) && newItem.DamageFlatBonus3 != "None" && newItem.DamageFlatBonusValue3 != 0) {
        //damage1 not used, damage3 used
        newItem.DamageFlatBonus = newItem.DamageFlatBonus3;
        newItem.DamageFlatBonusValue = newItem.DamageFlatBonusValue3;
        newItem.DamageFlatBonus3 = "None";
        newItem.DamageFlatBonusValue3 = 0;
    };
    if ((newItem.DamageFlatBonus2 == "None" || newItem.DamageFlatBonusValue2 == 0) && newItem.DamageFlatBonus3 != "None" && newItem.DamageFlatBonusValue3 != 0) {
        //damage2 not used, damage3 used
        newItem.DamageFlatBonus2 = newItem.DamageFlatBonus3;
        newItem.DamageFlatBonusValue2 = newItem.DamageFlatBonusValue3;
        newItem.DamageFlatBonus3 = "None";
        newItem.DamageFlatBonusValue3 = 0;
    };
    newItem.DamagePercentBonus = $("#select_damagepercentbonus").val();
    newItem.DamagePercentBonus2 = $("#select_damagepercentbonus2").val();
    newItem.DamagePercentBonus3 = $("#select_damagepercentbonus3").val();
    newItem.DamagePercentBonusValue = parseIntNoNaN($("#amount_damagepercentbonusvalue").val());
    newItem.DamagePercentBonusValue2 = parseIntNoNaN($("#amount_damagepercentbonusvalue2").val());
    newItem.DamagePercentBonusValue3 = parseIntNoNaN($("#amount_damagepercentbonusvalue3").val());
    if ((newItem.DamagePercentBonus == "None" || newItem.DamagePercentBonusValue == 0) && newItem.DamagePercentBonus2 != "None" && newItem.DamagePercentBonusValue2 != 0) {
        //damage1 not used, damage2 used
        newItem.DamagePercentBonus = newItem.DamagePercentBonus2;
        newItem.DamagePercentBonusValue = newItem.DamagePercentBonusValue2;
        newItem.DamagePercentBonus2 = "None";
        newItem.DamagePercentBonusValue2 = 0;
    };
    if ((newItem.DamagePercentBonus == "None" || newItem.DamagePercentBonusValue == 0) && newItem.DamagePercentBonus3 != "None" && newItem.DamagePercentBonusValue3 != 0) {
        //damage1 not used, damage3 used
        newItem.DamagePercentBonus = newItem.DamagePercentBonus3;
        newItem.DamagePercentBonusValue = newItem.DamagePercentBonusValue3;
        newItem.DamagePercentBonus3 = "None";
        newItem.DamagePercentBonusValue3 = 0;
    };
    if ((newItem.DamagePercentBonus2 == "None" || newItem.DamagePercentBonusValue2 == 0) && newItem.DamagePercentBonus3 != "None" && newItem.DamagePercentBonusValue3 != 0) {
        //damage2 not used, damage3 used
        newItem.DamagePercentBonus2 = newItem.DamagePercentBonus3;
        newItem.DamagePercentBonusValue2 = newItem.DamagePercentBonusValue3;
        newItem.DamagePercentBonus3 = "None";
        newItem.DamagePercentBonusValue3 = 0;
    };
    newItem.DamageToTarget = parseIntNoNaN($("#amount_damagetotarget").val());
    newItem.DamageToTargetType = $("#select_damagetotargettype").val();
    newItem.DrawCards = parseIntNoNaN($("#amount_drawcards").val());
    newItem.DropOnly = $("#check_droponly").is(':checked');
    newItem.EffectCasterDelay = parseFloat($("#amount_effect_caster_delay").val());
    newItem.EffectTargetDelay = parseFloat($("#amount_effect_target_delay").val());

    newItem.HealFlatBonus = parseIntNoNaN($("#amount_healflatbonus").val());
    newItem.HealPercentBonus = parseIntNoNaN($("#amount_healpercentbonus").val());
    newItem.HealPercentQuantity = parseIntNoNaN($("#amount_healpercentquantity").val());
    newItem.HealPercentQuantitySelf = parseIntNoNaN($("#amount_healpercentquantityself").val());
    newItem.HealQuantity = parseIntNoNaN($("#amount_healquantity").val());
    newItem.HealReceivedFlatBonus = parseIntNoNaN($("#amount_healreceivedflatbonus").val());
    newItem.HealReceivedPercentBonus = parseIntNoNaN($("#amount_healreceivedpercentbonus").val());
    newItem.MaxHealth = parseIntNoNaN($("#amount_maxhealth").val());
    newItem.ModifiedDamageType = $("#select_modifieddamagetype").val();
    newItem.OnlyAddItemToNPCs = $("#check_onlyadditemtonpcs").is(':checked');
    newItem.PassSingleAndCharacterRolls = $("#check_passsingleandcharacterrolls").is(':checked');
    newItem.PercentDiscountShop = parseIntNoNaN($("#amount_percentdiscountshop").val());
    newItem.PercentRetentionEndGame = parseIntNoNaN($("#amount_percentretentionendgame").val());
    newItem.QuestItem = $("#check_questitem").is(':checked');
    newItem.ResistModified1 = $("#select_resistmodified1").val()
    newItem.ResistModified2 = $("#select_resistmodified2").val()
    newItem.ResistModified3 = $("#select_resistmodified3").val()
    newItem.ResistModifiedValue1 = parseIntNoNaN($("#amount_resistmodifiedvalue1").val());
    newItem.ResistModifiedValue2 = parseIntNoNaN($("#amount_resistmodifiedvalue2").val());
    newItem.ResistModifiedValue3 = parseIntNoNaN($("#amount_resistmodifiedvalue3").val());
    switch (sActivation) {
        case "AuraCurseSet":
            newItem.Activation = sActivation;
            newItem.AuraCurseNumForOneEvent = parseIntNoNaN($("#amount_auracursenumforoneevent").val());
            newItem.AuraCurseSetted = $("#select_auracursesetted").val();
            newItem.RoundCycle = 0;
            newItem.ExactRound = 0;
            break;
        case "BeginTurn":
            if ($("#select_carditem_cardplace").val() === "Deck") {
                newItem.Activation = "BeginTurnAboutToDealCards";
            } else if ($("#select_carditem_cardplace").val() === "Cast") {
                newItem.Activation = "BeginTurn";
            } else {
                newItem.Activation = "BeginTurnCardsDealt";
            };
            if ($("#select_activation_roundcycle").val() === "onx") {
                newItem.ExactRound = parseIntNoNaN($("#amount_roundcycle").val());
            } else if ($("#select_activation_roundcycle").val() === "everyx") {
                newItem.RoundCycle = parseIntNoNaN($("#amount_roundcycle").val());
            };
            break;
        case "BeginRound":
        // if corruption card, CorruptionBeginRound
        case "EndRound":
        case "EndTurn":
            newItem.Activation = sActivation;
            if ($("#select_activation_roundcycle").val() === "onx") {
                newItem.ExactRound = parseIntNoNaN($("#amount_roundcycle").val());
            } else if ($("#select_activation_roundcycle").val() === "everyx") {
                newItem.RoundCycle = parseIntNoNaN($("#amount_roundcycle").val());
            };
            break;
        case "CastCard":
        case "FinishCast":
            newItem.CastedCardType = $("#select_castedcardtype").val();
            if (newItem.DuplicateActive) {
                newItem.Activation = "PreFinishCast";
            } else if (newItem.CardNum > 0) {
                newItem.Activation = "FinishFinishCast";
            } else {
                newItem.Activation = "FinishCast";
            };
            break;
        case "medsEmptyHand":
            newItem.Activation = "FinishCast";
            newItem.EmptyHand = true;
            break;
        case "BeginCombat":
            if ((newItem.AuraCurseGain1 !== "" && newItem.AuraCurseGainValue1 !== 0) || (newItem.AuraCurseGain2 !== "" && newItem.AuraCurseGainValue2 !== 0) || (newItem.AuraCurseGain3 !== "" && newItem.AuraCurseGainValue3 !== 0) || (newItem.AuraCurseGainSelf1 !== "" && newItem.AuraCurseGainSelfValue1 !== 0) || (newItem.AuraCurseGainSelf2 !== "" && newItem.AuraCurseGainSelfValue2 !== 0) || (newItem.CardNum > 0) || (newItem.CostReduceReduction !== 0 && newItem.CardsReduced !== 0) || (newItem.EnergyQuantity !== 0) || (newItem.DrawCards !== 0) || (newItem.ChanceToDispel > 0 && newItem.ChanceToDispelNum !== 0) || (newItem.DamageToTarget > 0 && newItem.DamageToTargetType !== "None") || (newItem.HealQuantity !== 0) || (newItem.HealPercentQuantity !== 0)) {
                newItem.Activation = sActivation; 
            } else {
                newItem.Activation = "PreBeginCombat"; 
            };
            break;
        case "Hitted":
        case "Damaged":
        case "Hit":
        case "Damage":
        case "Block":
        case "Blocked":
        case "Evade":
        case "Evaded":
        case "Heal":
        case "Healed":
        case "Killed":
        case "None":
        case "BeginCombatEnd":
            newItem.Activation = sActivation;
            // if corruption card, CorruptionCombatStart
            // PreBeginCombat is used in vanilla for things that don't have an actual effect, just passive stats, but idgaf
            break;
    };
    newItem.NotShowCharacterBonus = (newItem.AuraCurseSetted.length > 0 && newItem.AuraCurseNumForOneEvent > 0);
    // NaN checks?
    Object.keys(newCard).forEach((key) => {
        // console.log("KEY :" + key + " TYPE: " + typeof newCard[key]);
        if (typeof newCard[key] === typeof 0 && isNaN(newCard[key])) { newCard[key] = defaultCard[key] };
    });
    Object.keys(newItem).forEach((key) => {
        if (typeof newItem[key] === typeof 0 && isNaN(newItem[key])) { newItem[key] = defaultItem[key] };
    });

    itemObj = newItem;
    newCard.Item = "";
    newCard.ItemEnchantment = "";
    if (Object.entries(newItem).sort().toString() !== Object.entries(defaultItem).sort().toString() && (["Item", "Enchantment"].includes(newCard.CardClass) || (newCard.CardClass === "Special" && newCard.CardType === "Enchantment"))) {
        newItem.EffectCaster = $("#select_effect_caster").val();
        newItem.EffectItemOwner = $("#select_effectitemowner").val();
        newItem.EffectTarget = $("#select_effect_target").val();
        newItem.ID = $("#text_id").val().trim();
        newItem.ItemSound = $("#select_sound").val();
        //console.log("DIFFERENT!!!!!");
        //console.log(Object.entries(newItem).sort().toString());
        //console.log(Object.entries(defaultItem).sort().toString());
        if (newItem.IsEnchantment) {
            newCard.ItemEnchantment = JSON.stringify(newItem);
            newCard.Playable = true; // enchantments always playable! this prevents issues w/ copying them from monster cards
            // newCard.Corrupted = false; // likewise
        } else {
            newCard.Item = JSON.stringify(newItem);
        };
        
    };

    // console.log("ID4: " + newCard.ID);
    return newCard;
};

function neverBlank(str) {
    return (str === "" ? " " : str);
};

function neverBlankName(str) {
    return (str === "" ? "(no name)" : str);
};

function getMenuCardHTML(card) {
    //
    /*
    // name + download + delete
    var newMenuCardHTML = `<div class="input-group flex-nowrap mt--1 b-t-0">
        <button class="btn btn-lg b-t-0 btn-outline-card-` + card.CardUpgraded.toLowerCase() + (neverBlank(card.ID) === neverBlank(cardObj.ID) ? " active" : "") + ` w-100" type="button" hover-card-id="` + neverBlank(card.ID) + `">` + neverBlankName(card.CardName) + `</button>
        <button class="btn btn-lg b-t-0 btn-success" type="button" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Download" download-card-id="` + neverBlank(card.ID) + `"><i class="bi bi-download"></i></button>
        <button class="btn btn-lg b-t-0 btn-danger" type="button" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Delete" delete-card-id="` + neverBlank(card.ID) + `"><i class="bi bi-trash3-fill"></i></button>
    </div>`;


        <div class="input-group flex-nowrap mt--1">
            <button class="btn btn-lg btn-outline-card-no btn-outline-light active w-100" type="button">Elemental Proliferation</button>
            <button class="btn btn-lg btn-outline-card-a" type="button">A</button>
            <button class="btn btn-lg btn-outline-card-b" type="button">B</button>
            <button class="btn btn-lg btn-outline-card-rare" type="button">C</button>
        </div>
    */

    // disable button if
    var newMenuCardHTML = `<div class="input-group flex-nowrap mt--1 b-t-0">`;
    var upgradeA = "";
    var upgradeB = "";
    var upgradeRare = "";
    if (card.CardUpgraded === "No") {
        // this is the base card
        newMenuCardHTML += `<button class="btn btn-lg b-t-0 btn-outline-card-no` + (card.ID === cardObj.ID ? " active" : "") + ` w-100" type="button" hover-card-id="` + neverBlank(card.ID) + `">` + neverBlankName(card.CardName) + `</button>`;
        cardsAdded.push(card.ID);
        upgradeA = card.UpgradesTo1;
        upgradeB = card.UpgradesTo2;
        upgradeRare = card.UpgradesToRare;
    } else {
        if (card.BaseCard.length > 0 && customCards.hasOwnProperty(card.BaseCard)) {
            // base card exists
            newMenuCardHTML += `<button class="btn btn-lg b-t-0 btn-outline-card-no` + (card.BaseCard === cardObj.ID ? " active" : "") + ` w-100" type="button" hover-card-id="` + card.BaseCard + `">` + neverBlankName(card.CardName) + `</button>`;
            cardsAdded.push(card.BaseCard);
            upgradeA = customCards[card.BaseCard].UpgradesTo1;
            upgradeB = customCards[card.BaseCard].UpgradesTo2;
            upgradeRare = customCards[card.BaseCard].UpgradesToRare;
        } else {
            // base card does not exist
            newMenuCardHTML += `<button disabled class="btn btn-lg b-t-0 btn-outline-card-no text-secondary w-100" type="button">` + neverBlankName(card.CardName) + `</button>`;
        };
    };
    if (card.CardUpgraded === "A") {
        // this card is upgradeA
        newMenuCardHTML += `<button class="btn btn-lg b-t-0 btn-outline-card-a` + (card.ID === cardObj.ID ? " active" : "") + `" type="button" hover-card-id="` + neverBlank(card.ID) + `">A</button>`;
        cardsAdded.push(card.ID);
    } else if (upgradeA.length > 0 && customCards.hasOwnProperty(upgradeA)) {
        // upgradeA exists
        newMenuCardHTML += `<button class="btn btn-lg b-t-0 btn-outline-card-a` + (upgradeA === cardObj.ID ? " active" : "") + `" type="button" hover-card-id="` + upgradeA + `">A</button>`;
        cardsAdded.push(upgradeA);
    } else {
        // upgradeA does not exist
        newMenuCardHTML += `<button disabled class="btn btn-lg b-t-0 btn-outline-card-a text-secondary" type="button">A</button>`;
    };
    if (card.CardUpgraded === "B") {
        // this card is upgradeB
        newMenuCardHTML += `<button class="btn btn-lg b-t-0 btn-outline-card-b` + (card.ID === cardObj.ID ? " active" : "") + `" type="button" hover-card-id="` + neverBlank(card.ID) + `">B</button>`;
        cardsAdded.push(card.ID);
    } else if (upgradeB.length > 0 && customCards.hasOwnProperty(upgradeB)) {
        // upgradeB exists
        newMenuCardHTML += `<button class="btn btn-lg b-t-0 btn-outline-card-b` + (upgradeB === cardObj.ID ? " active" : "") + `" type="button" hover-card-id="` + upgradeB + `">B</button>`;
        cardsAdded.push(upgradeB);
    } else {
        // upgradeB does not exist
        newMenuCardHTML += `<button disabled class="btn btn-lg b-t-0 btn-outline-card-b text-secondary" type="button">B</button>`;
    };

    if (card.CardUpgraded === "Rare") {
        // upgradeRare is this card
        newMenuCardHTML += `<button class="btn btn-lg b-t-0 btn-outline-card-rare` + (card.ID === cardObj.ID ? " active" : "") + `" type="button" hover-card-id="` + neverBlank(card.ID) + `">C</button>`;
        cardsAdded.push(card.ID);
    } else if (upgradeRare.length > 0 && customCards.hasOwnProperty(upgradeRare)) {
        // upgradeRare exists
        newMenuCardHTML += `<button class="btn btn-lg b-t-0 btn-outline-card-rare` + (upgradeRare === cardObj.ID ? " active" : "") + `" type="button" hover-card-id="` + upgradeRare + `">C</button>`;
        cardsAdded.push(upgradeRare);
    } else {
        // upgradeRare does not exist
        newMenuCardHTML += `<button disabled class="btn btn-lg b-t-0 btn-outline-card-rare text-secondary" type="button">C</button>`;
    };

    newMenuCardHTML += `</div>`;
    return newMenuCardHTML;
};

async function getNewCardObjects() {
    uploadingCards = {};
    uploadingSprites = {};
    var first = true;
    var newCardObj = defaultCard;
    $("#btn_new_card_create").html("Create");
    $("#label_new_card_json_invalid").addClass("visually-hidden");
    const promises = [];
    const promisedSprites = [];
    var promisedSpriteNames = [];
    var incomingPromiseCardType = "card";
    var otherDone = false;
    /*// wait for all new cards to be added to the array
    await new Promise((resolve, reject) => {

    })*/
    if ($("#radio_new_card_vanilla").prop("checked")) {
        await addVanillaCard($("#select_new_card_vanilla").val());
        if (vanillaCards.hasOwnProperty($("#select_new_card_vanilla").val())) {
            // card has already been downloaded
            newCardObj = vanillaCards[$("#select_new_card_vanilla").val()];
            if (newCardObj.UpgradesTo1.length > 0) {
                await addVanillaCard(newCardObj.UpgradesTo1);
            };
            if (newCardObj.UpgradesTo2.length > 0) {
                await addVanillaCard(newCardObj.UpgradesTo2);
            };
            if (newCardObj.UpgradesToRare.length > 0) {
                await addVanillaCard(newCardObj.UpgradesToRare);
            };
            promises.push(newCardObj);
            if (newCardObj.UpgradesTo1.length > 0 && vanillaCards.hasOwnProperty(newCardObj.UpgradesTo1)) {
                promises.push(vanillaCards[newCardObj.UpgradesTo1]);
            };
            if (newCardObj.UpgradesTo2.length > 0 && vanillaCards.hasOwnProperty(newCardObj.UpgradesTo2)) {
                promises.push(vanillaCards[newCardObj.UpgradesTo2]);
            };
            if (newCardObj.UpgradesToRare.length > 0 && vanillaCards.hasOwnProperty(newCardObj.UpgradesToRare)) {
                promises.push(vanillaCards[newCardObj.UpgradesToRare]);
            };
        };
    } else if ($("#radio_new_card_custom").prop("checked") && customCards.hasOwnProperty($("#select_new_card_custom").val())) {
        newCardObj = customCards[$("#select_new_card_custom").val()];
        promises.push(newCardObj);
        if (newCardObj.UpgradesTo1.length > 0 && customCards.hasOwnProperty(newCardObj.UpgradesTo1)) {
            promises.push(customCards[newCardObj.UpgradesTo1]);
        };
        if (newCardObj.UpgradesTo2.length > 0 && customCards.hasOwnProperty(newCardObj.UpgradesTo2)) {
            promises.push(customCards[newCardObj.UpgradesTo2]);
        };
        if (newCardObj.UpgradesToRare.length > 0 && customCards.hasOwnProperty(newCardObj.UpgradesToRare)) {
            promises.push(customCards[newCardObj.UpgradesToRare]);
        };
    } else if ($("#radio_new_card_upload").prop("checked")) {
        incomingPromiseCardType = "text";
        for (var a = 0; a < $("#file_new_card_upload")[0].files.length; a++) {
            if ($("#file_new_card_upload")[0].files[a].type == "application/zip" || $("#file_new_card_upload")[0].files[a].type == "application/zip-compressed" || $("#file_new_card_upload")[0].files[a].type == "application/x-zip-compressed" || $("#file_new_card_upload")[0].files[a].type == "application/x-zip") {
                await JSZip.loadAsync($("#file_new_card_upload")[0].files[a]).then(function (incomingZip) {
                    incomingZip.forEach(async function (relativePath, file) {
                        if (file.name.length > 4 && file.name.slice(-5).toLowerCase() == ".json") {
                            try {
                                promises.push(file.async("text"));
                            } catch (err) {
                                console.log("Error parsing JSON in zip file: " + relativePath);
                            };
                        } else if (file.name.length > 3 && file.name.slice(-4).toLowerCase() == ".png") {
                            try {
                                var spriteName = file.name.toLowerCase().replace(".png", "")
                                if (spriteName.lastIndexOf("/") > 0) {
                                    spriteName = spriteName.slice(spriteName.lastIndexOf("/") + 1);
                                };
                                promisedSpriteNames.push(spriteName);
                                promisedSprites.push(file.async("base64"));
                            } catch (err) {
                                console.log("Error parsing PNG in zip file: " + relativePath);
                            };
                        };
                    });
                }, function (err) {
                    console.log("Error reading zip: " + $("#file_new_card_upload")[0].files[a].name);
                });
            } else if ($("#file_new_card_upload")[0].files[a].type == "application/json" || $("#file_new_card_upload")[0].files[a].type == "text/plain") {
                const fileText = await new Promise((resolve, reject) => {
                    const reader = new FileReader();
                    reader.onloadend = async () => {
                        resolve(reader.result);
                    };
                    reader.onerror = async (err) => {
                        console.log("Error reading file: " + $("#file_new_card_upload")[0].files[a].name);
                        reject(err);
                    };
                    reader.readAsText($("#file_new_card_upload")[0].files[a]);
                });
                try {
                    promises.push(fileText);
                } catch (err) {
                    console.log("Error parsing JSON in file: " + $("#file_new_card_upload")[0].files[a].name);
                };
            } else if ($("#file_new_card_upload")[0].files[a].type == "image/png") {
                //#TODO: png (though why would they put it here)

            } else {
                console.log("Unknown type of file: " + $("#file_new_card_upload")[0].files[a].name);
                continue;
            };
        };
    } else if ($("#radio_new_card_json").prop("checked")) {
        try {
            promises.push(cardCaseClean(JSON.parse($("#text_new_card_json").val())));
        } catch {
            $("#label_new_card_json_invalid.visually-hidden").removeClass("visually-hidden");
        };
    } else {
        promises.push(defaultCard);
    };
    Promise.all(promisedSprites).then(async (newSprites) => {
        uploadingSprites = {};
        if (newSprites.length < 1)
            return;
        for (var a = 0; a < newSprites.length; a++) {
            uploadingSprites[promisedSpriteNames[a]] = await resizeAndBlob("data:image/png;base64," + newSprites[a], 256, 256);
        };
        if (otherDone) {
            generateCardSVG(newCardObj).then((newCardSVG) => {
                var newCardHTML = `<div>` + newCardSVG + `</div><div class="d-flex mt-1 mx-auto">`;
                var more = Object.keys(uploadingCards).length - 1;
                if (newCardObj.UpgradesTo1.length > 0 && (customCards.hasOwnProperty(newCardObj.UpgradesTo1) || vanillaCards.hasOwnProperty(newCardObj.UpgradesTo1) || uploadingCards.hasOwnProperty(newCardObj.UpgradesTo1))) {
                    newCardHTML += `<img id="svg_card_new_upgrade_a" src="AtO_images\\icon_upgrade_a.png" class="mx-auto w-30p" hover-card-id="` + newCardObj.UpgradesTo1 + `" tabindex="0" role="button" aria-pressed="true" alt="upgrade A"/>`;
                    more = more - 1;
                };
                if (newCardObj.UpgradesTo2.length > 0 && (customCards.hasOwnProperty(newCardObj.UpgradesTo2) || vanillaCards.hasOwnProperty(newCardObj.UpgradesTo2) || uploadingCards.hasOwnProperty(newCardObj.UpgradesTo2))) {
                    newCardHTML += `<img id="svg_card_new_upgrade_b" src="AtO_images\\icon_upgrade_b.png" class="mx-auto w-30p" hover-card-id="` + newCardObj.UpgradesTo2 + `" tabindex="0" role="button" aria-pressed="true" alt="upgrade B"/>`;
                    more = more - 1;
                };
                if (newCardObj.UpgradesToRare.length > 0 && (customCards.hasOwnProperty(newCardObj.UpgradesToRare) || vanillaCards.hasOwnProperty(newCardObj.UpgradesToRare) || uploadingCards.hasOwnProperty(newCardObj.UpgradesToRare))) {
                    newCardHTML += `<img id="svg_card_new_upgrade_rare" src="AtO_images\\icon_upgrade_rare.png" class="mx-auto w-30p" hover-card-id="` + newCardObj.UpgradesToRare + `" tabindex="0" role="button" aria-pressed="true" alt="upgrade Rare"/>`;
                    more = more - 1;
                };
                newCardHTML += `</div>`;
                if (more > 0) {
                    newCardHTML += `<div class="mx-auto w-100 text-center">... and ` + more + ` more!</div>`;
                    // #TODO: it would be nice to instead have these listed out (rhs of card?) and hoverable.
                };
                $("#svg_card_new [hover-card-id]").popover("dispose");
                $("#svg_card_new").html(newCardHTML);
                boxfitCard("#svg_card_new");
                if ($("#svg_card_new [hover-card-id]").length > 0) {
                    setupHoverCards("#svg_card_new", "nothing");
                };
            });
        } else {
            otherDone = true;
        };
    });
    Promise.all(promises).then((newCards) => {
        uploadingCards = {};
        if (newCards.length < 1)
            return;
        var first = true;
        for (var a = 0; a < newCards.length; a++) {
            if (incomingPromiseCardType === "text") {
                newCards[a] = cardCaseClean(JSON.parse(newCards[a]));
            };
            if (newCards[a].hasOwnProperty("ID")) {
                uploadingCards[newCards[a].ID] = Object.assign({}, newCards[a]);
                if (first) {
                    newCardObj = newCards[a];
                    first = false;
                };
            };
        };
        if (customCards.hasOwnProperty(newCardObj.ID)) {
            // card already exists!
            newCardObj = customCards[newCardObj.ID];
            $("#btn_new_card_create").html(`Show in Editor`);
            if ($("#radio_new_card_custom").prop("checked")) {
                $("#btn_new_card_overwrite").addClass("visually-hidden");
            } else {
                $("#btn_new_card_overwrite.visually-hidden").removeClass("visually-hidden");
            };
            if ($("#radio_new_card_default").prop("checked")) {
                $("#btn_new_card_copy").html(`Add New Blank`);
            } else {
                $("#btn_new_card_copy").html(`Make Copy`);
            };
            $("#btn_new_card_copy.visually-hidden").removeClass("visually-hidden");
            $("#label_new_card_already_exists.visually-hidden").removeClass("visually-hidden");
        } else {
            $("#btn_new_card_create").html(`Create`);
            $("#btn_new_card_overwrite").addClass("visually-hidden");
            $("#btn_new_card_copy").addClass("visually-hidden");
            $("#label_new_card_already_exists").addClass("visually-hidden");
        };
        if (otherDone || promisedSprites.length < 1) {
            generateCardSVG(newCardObj).then((newCardSVG) => {
                var newCardHTML = `<div>` + newCardSVG + `</div><div class="d-flex mt-1 mx-auto">`;
                var more = Object.keys(uploadingCards).length - 1;
                if (newCardObj.UpgradesTo1.length > 0 && (customCards.hasOwnProperty(newCardObj.UpgradesTo1) || vanillaCards.hasOwnProperty(newCardObj.UpgradesTo1) || uploadingCards.hasOwnProperty(newCardObj.UpgradesTo1))) {
                    newCardHTML += `<img id="svg_card_new_upgrade_a" src="AtO_images\\icon_upgrade_a.png" class="mx-auto w-30p" hover-card-id="` + newCardObj.UpgradesTo1 + `" tabindex="0" role="button" aria-pressed="true" alt="upgrade A"/>`;
                    more = more - 1;
                };
                if (newCardObj.UpgradesTo2.length > 0 && (customCards.hasOwnProperty(newCardObj.UpgradesTo2) || vanillaCards.hasOwnProperty(newCardObj.UpgradesTo2) || uploadingCards.hasOwnProperty(newCardObj.UpgradesTo2))) {
                    newCardHTML += `<img id="svg_card_new_upgrade_b" src="AtO_images\\icon_upgrade_b.png" class="mx-auto w-30p" hover-card-id="` + newCardObj.UpgradesTo2 + `" tabindex="0" role="button" aria-pressed="true" alt="upgrade B"/>`;
                    more = more - 1;
                };
                if (newCardObj.UpgradesToRare.length > 0 && (customCards.hasOwnProperty(newCardObj.UpgradesToRare) || vanillaCards.hasOwnProperty(newCardObj.UpgradesToRare) || uploadingCards.hasOwnProperty(newCardObj.UpgradesToRare))) {
                    newCardHTML += `<img id="svg_card_new_upgrade_rare" src="AtO_images\\icon_upgrade_rare.png" class="mx-auto w-30p" hover-card-id="` + newCardObj.UpgradesToRare + `" tabindex="0" role="button" aria-pressed="true" alt="upgrade Rare"/>`;
                    more = more - 1;
                };
                newCardHTML += `</div>`;
                if (more > 0) {
                    newCardHTML += `<div class="mx-auto w-100 text-center">... and ` + more + ` more!</div>`;
                    // #TODO: it would be nice to instead have these listed out (rhs of card?) and hoverable.
                };
                $("#svg_card_new [hover-card-id]").popover("dispose");
                $("#svg_card_new").html(newCardHTML);
                boxfitCard("#svg_card_new");
                if ($("#svg_card_new [hover-card-id]").length > 0) {
                    setupHoverCards("#svg_card_new", "nothing");
                };
            });
        } else {
            otherDone = true;
        };
    });
};

function updateCardList() {
    $("#menu_card_list [hover-card-id]").popover("dispose");
    $("#menu_card_list").html("");
    cardsAdded = [];
    var customCardsByName = {};
    Object.keys(customCards).forEach((cardID) => {
        var cardName = customCards[cardID].CardName;
        if (customCardsByName.hasOwnProperty(cardName)) {
            for (var a = 0; a < 1000; a++) {
                if (!customCardsByName.hasOwnProperty(cardName + a)) {
                    cardName = cardName + a;
                    break;
                };
            };
        };
        customCardsByName[cardName] = cardID;
    });
    Object.keys(customCardsByName).sort().forEach(function (cardName) {
        if (!cardsAdded.includes(customCardsByName[cardName])) {
            $("#menu_card_list").append(getMenuCardHTML(customCards[customCardsByName[cardName]]));
        };
    });
    setupHoverCards("#menu_card_list", "go");
    updateCardListDisplay();
};

function updateCardListDisplay() {
    var height = $(window).height() - $("nav.navbar").height() - $("#side_menu_buttons").height();
    if (localStorage.getItem("cardview_open") === "false" && localStorage.getItem("cardlist_open") === "false") {
        // both closed
        $("#btn_menu_new.b-bl-0").removeClass("b-bl-0");
        $("#btn_menu_list.b-br-0").removeClass("b-br-0");
    } else {
        $("#btn_menu_new").addClass("b-bl-0");
        $("#btn_menu_list").addClass("b-br-0");
    };

    if (localStorage.getItem("cardview_open") === "false") {
        // card view closed
        $("#btn_menu_show.active").removeClass("active");
        $("#btn_menu_show i.bi-eye-fill").removeClass("bi-eye-fill");
        $("#btn_menu_show i").addClass("bi-eye-slash-fill");
        bsSideCardShow.hide();
    } else {
        // card view open
        $("#btn_menu_show").addClass("active");
        $("#btn_menu_show i.bi-eye-slash-fill").removeClass("bi-eye-slash-fill");
        $("#btn_menu_show i").addClass("bi-eye-fill");
        bsSideCardShow.show();
        // await delay(1000);
        height -= 524;
    };
    if (localStorage.getItem("cardlist_open") === "false") {
        // card list closed
        $("#svg_card_side.b-b-0").removeClass("b-b-0");
        $("#svg_card_side").addClass("b-b-6");
        $("#btn_menu_list.active").removeClass("active");
        bsSideCardList.hide();
    } else {
        // card list open
        $("#svg_card_side.b-b-6").removeClass("b-b-6");
        $("#svg_card_side").addClass("b-b-0");
        $("#btn_menu_list").addClass("active");
        bsSideCardList.show();
    };
    $("#menu_card_list").css({ "max-height": height - 48 });
};

function getComputedProp(el, prop) {
    return window.getComputedStyle(el, null).getPropertyValue(prop);
};

async function setupHoverCards(where, clickAction) {
    for (var a = 0; a < $(where + " [hover-card-id]").length; a++) {
        const el = $(where + " [hover-card-id]")[a];
        var hoverCardID = $(el).attr("hover-card-id");
        if (typeof hoverCardID !== 'undefined' && hoverCardID !== false) {
            const cardID = (hoverCardID === " " ? "" : hoverCardID);
            hoverCardSVGs[cardID] = "card not found!";
            if (customCards.hasOwnProperty(cardID)) {
                hoverCardSVGs[cardID] = await generateCardSVG(customCards[cardID]);
            } else if (vanillaCards.hasOwnProperty(cardID)) {
                hoverCardSVGs[cardID] = await generateCardSVG(vanillaCards[cardID]);
            } else if (uploadingCards.hasOwnProperty(cardID)) {
                hoverCardSVGs[cardID] = await generateCardSVG(uploadingCards[cardID]);
            } else {
                console.log("Card not found for setupHoverCards: " + cardID);
                return;
            };
            if (clickAction == "go") {
                $(el).on('click', function () {
                    if (customCards.hasOwnProperty($(this).attr("hover-card-id") === " " ? "" : $(this).attr("hover-card-id"))) {
                        cardObj = customCards[$(this).attr("hover-card-id") === " " ? "" : $(this).attr("hover-card-id")];
                        cardObject2Fields(cardObj);
                        updateDisplay();
                    };
                    // #TODO: clicking on vanilla card goes to it?
                });
            };
            $(el).popover({
                html: true,
                content: function () {
                    if (typeof $(el).attr("hover-card-id") !== 'undefined' && $(el).attr("hover-card-id") !== false && hoverCardSVGs.hasOwnProperty($(this).attr("hover-card-id") === " " ? "" : $(this).attr("hover-card-id"))) {
                        return `<div class="text-center" style="width: 250px;">` + hoverCardSVGs[$(this).attr("hover-card-id") === " " ? "" : $(this).attr("hover-card-id")] + `</div>`;
                    } else {
                        return `card not found!`
                    };
                    
                },
                title: "",
                sanitize: false,
                trigger: 'hover',
                placement: 'top',
                delay: { "show": 0, "hide": 0 }
            });
            $(el).on('inserted.bs.popover', function () {
                boxfitCard(".popover");
            });
        };
    };
};

function boxfitCard(where) {
    $(where + " .boxfit_card_name").boxfit({ width: 570, height: 80 });
    if ($(where + " .boxfit_card_description").length > 0) {
        $(where + " .boxfit_card_description").boxfit({ width: 530, height: 290, multiline: true, maximum_font_size: 68 });
        if ($(where + " .boxfit_card_description p img").length > 0) {
            // boxfit twice because it results in more consistent appearance
            $(where + " .boxfit_card_description p img").css("max-height", window.getComputedStyle($(where + " .boxfit_card_description p")[0], null).getPropertyValue('font-size'));
            $(where + " .boxfit_card_description p img").css("height", window.getComputedStyle($(where + " .boxfit_card_description p")[0], null).getPropertyValue('font-size'));
            $(where + " .boxfit_card_description").boxfit({ width: 530, height: 290, multiline: true, maximum_font_size: 68 });
            /*$(where + " .boxfit_card_description p img").css("max-height", window.getComputedStyle($(where + " .boxfit_card_description p")[0], null).getPropertyValue('font-size'));
            $(where + " .boxfit_card_description p img").css("height", window.getComputedStyle($(where + " .boxfit_card_description p")[0], null).getPropertyValue('font-size'));
            // still occasionally wiggy, so maybe thrice?
            $(where + " .boxfit_card_description").boxfit({ width: 530, height: 290, multiline: true, maximum_font_size: 70 });
            $(where + " .boxfit_card_description p img").css("max-height", window.getComputedStyle($(where + " .boxfit_card_description p")[0], null).getPropertyValue('font-size'));
            $(where + " .boxfit_card_description p img").css("height", window.getComputedStyle($(where + " .boxfit_card_description p")[0], null).getPropertyValue('font-size'));*/
        };
    };
    if ($(where + " .boxfit_item_description").length > 0) {
        $(where + " .boxfit_item_description").boxfit({ width: 530, height: 370, multiline: true, maximum_font_size: 68 });
        if ($(where + " .boxfit_item_description p img").length > 0) {
            // boxfit twice because it results in more consistent appearance
            $(where + " .boxfit_item_description p img").css("max-height", window.getComputedStyle($(where + " .boxfit_item_description p")[0], null).getPropertyValue('font-size'));
            $(where + " .boxfit_item_description p img").css("height", window.getComputedStyle($(where + " .boxfit_item_description p")[0], null).getPropertyValue('font-size'));
            $(where + " .boxfit_item_description").boxfit({ width: 530, height: 370, multiline: true, maximum_font_size: 68 });
        };
    };
};

function cardCaseClean(card) {
    var newCard = card;
    newCard.ID = newCard.ID.toLowerCase();
    newCard.BaseCard = newCard.BaseCard.toLowerCase();
    newCard.UpgradedFrom = newCard.UpgradedFrom.toLowerCase();
    newCard.UpgradesTo1 = newCard.UpgradesTo1.toLowerCase();
    newCard.UpgradesTo2 = newCard.UpgradesTo2.toLowerCase();
    newCard.UpgradesToRare = newCard.UpgradesToRare.toLowerCase();
    newCard.Sprite = newCard.Sprite.toLowerCase();
    newCard.AddCardId = newCard.AddCardId.toLowerCase();
    newCard.AddCardList = newCard.AddCardList.map(a => (a.toLowerCase()));
    return newCard;
};

async function addVanillaCard(cardID) {
    if (!vanillaCards.hasOwnProperty(cardID)) {
        // download card json
        const response = await fetch('/AtO_other/vanilla_cards/' + cardID + '.json');
        if (response.ok) {
            vanillaCards[cardID] = cardCaseClean(await response.json());
            // console.log("VANILLACARD ADDED: " + cardID);
            // console.log(vanillaCards[cardID]);
        } else {
            console.log("Unable to retrieve vanilla card " + cardID + "! Error: " + response.status);
        };
    };
};

async function newCardCreate(createType) {
    if (uploadingCards == {}) {
        // do nothing? shake a lil?
    } else {
        // console.log("THE ENTIRE UPLOADINGCARDS");
        // console.log(uploadingCards);
        for (var a = 0; a < Object.keys(uploadingSprites).length; a++) {
            await addCustomSprite(Object.keys(uploadingSprites)[a], uploadingSprites[Object.keys(uploadingSprites)[a]]);
            // how do you deal with duplicates? probs just overwrite tbh
        };
        for (var a = 0; a < Object.keys(uploadingCards).length; a++) {
            var newCardObj = defaultCard;
            if (createType == "show") {
                newCardObj = uploadingCards[Object.keys(uploadingCards)[a]];
                if (customCards.hasOwnProperty(newCardObj.ID)) {
                    cardObj = customCards[newCardObj.ID];
                } else {
                    // ... ??? I mean, this only arises if the user has... cleared customCards while the new card modal is open?
                    // I think just close it and let the user reopen
                }
                break;
            } else if (createType == "copy") {
                newCardObj = Object.assign({}, uploadingCards[Object.keys(uploadingCards)[a]]);
                for (var b = 2; b < 1000; b++) {
                    if (!customCards.hasOwnProperty(newCardObj.ID + b) && !vanillaCards.hasOwnProperty(newCardObj.ID + b)) {
                        newCardObj.ID = newCardObj.ID + b;
                        newCardObj.BaseCard = newCardObj.BaseCard + b;
                        if (newCardObj.UpgradedFrom.length > 0) { newCardObj.UpgradedFrom += b; };
                        if (newCardObj.UpgradesTo1.length > 0) { newCardObj.UpgradesTo1 += b; };
                        if (newCardObj.UpgradesTo2.length > 0) { newCardObj.UpgradesTo2 += b; };
                        if (newCardObj.UpgradesToRare.length > 0) { newCardObj.UpgradesToRare += b; };
                        break;
                    };
                };
                customCards[newCardObj.ID] = newCardObj;
            } else { // create, overwrite
                newCardObj = Object.assign({}, uploadingCards[Object.keys(uploadingCards)[a]]);
                // console.log("creating card: " + newCardObj.ID);
                // console.log(newCardObj);
                customCards[newCardObj.ID] = Object.assign({}, uploadingCards[Object.keys(uploadingCards)[a]]);;
                // console.log(customCards[newCardObj.ID]);
            };
            if (a === 0) { cardObj = newCardObj; };
        };
    };
    closeNewCardModal();
};

function closeNewCardModal() {
    cardObject2Fields(cardObj);
    updateDisplay();
    $("#text_new_card_json").val("");
    $("#svg_card_new").html("");
    bootstrap.Modal.getOrCreateInstance("#modal_new_card").hide();
};

async function startUp() {
    // this is literally only off in its own async function because I am a noob that doesn't know how to cleanly await generateCardSVG :(
    // (I think the answer is to just .then it?)

    db.open().then(() => {
        return db.sprites.where('type').equals('card').toArray();
    }).then((sprites) => {
        for (var a = 0; a < sprites.length; a++) {
            addCustomSprite(sprites[a]["name"], sprites[a]["blob"], true);
        };
    }).catch(Dexie.MissingAPIError, () => {
        console.log("database ERROR: could not find indexedDB API");
    }).catch((e) => {
        console.log("database ERROR: " + e);
    });

    

    if (localStorage.getItem("medsLocks") !== null) { medsLocks = JSON.parse(localStorage.getItem("medsLocks")); };
    if (localStorage.getItem("settings_advanced") == "true") { $("#check_show_advanced").prop("checked", true) };
    if (localStorage.getItem("settings_side_menu_absolute") == "false") { $("#check_side_menu_absolute").prop("checked", false) };
    resizeWindow();

    for (var a = 0; a < defaultCustomSprites.length; a++) {
        const response = await fetch('/AtO_images/card/custom/' + defaultCustomSprites[a] + '.png');
        if (response.ok) {
            // create object URL
            customSpriteObjURLs[defaultCustomSprites[a]] = URL.createObjectURL(await response.blob());
            $("#secret_sprite_container").append(`<div class="col"><img class="img-fluid rounded-2" role="button" src="` + customSpriteObjURLs[defaultCustomSprites[a]] + `" custom-sprite-id="` + defaultCustomSprites[a] + `" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="` + defaultCustomSprites[a] + `.png" aria-label="` + defaultCustomSprites[a] + `"/></div>`);
            const tooltip = bootstrap.Tooltip.getOrCreateInstance('[custom-sprite-id="' + defaultCustomSprites[a] + '"]');
            $('[custom-sprite-id="' + defaultCustomSprites[a] + '"]').on('click', function () {
                $("#text_sprite").val($(this).attr("custom-sprite-id"));
                bootstrap.Modal.getOrCreateInstance("#modal_sprite_library").hide();
                updateDisplay();
            });
        } else {
            console.log("Unable to retrieve secret sisters custom card sprite: " + defaultCustomSprites[a] + "! Error: " + response.status);
        };
    };

    if (localStorage.getItem("customCards") !== null) { customCards = JSON.parse(localStorage.getItem("customCards")); };
    if (Object.keys(customCards).length < 1) { customCards[""] = defaultCard; };

    if (localStorage.getItem("currentCardID") !== null && customCards.hasOwnProperty(localStorage.getItem("currentCardID"))) {
        cardObj = customCards[localStorage.getItem("currentCardID")];
    } else {
        // currentCardID either not stored or not found in customCards
        cardObj = customCards[Object.keys(customCards)[0]];
    };
    cardObject2Fields(cardObj);
    updateDisplay();
    $("#show_side_menu.visually-hidden").removeClass("visually-hidden");
    $("#accordion_card_data.visually-hidden").removeClass("visually-hidden");
    $("#loading_card_creator").addClass("visually-hidden");

    updateDisplay();
    if (localStorage.getItem("cardview_open") === "false") {
        $("#btn_menu_show.active").removeClass("active");
        $("#btn_menu_show i.bi-eye-fill").removeClass("bi-eye-fill");
        $("#btn_menu_show i").addClass("bi-eye-slash-fill");
        bsSideCardShow.hide();
    } else {
        bsSideCardShow.show();
    };
    if (localStorage.getItem("cardlist_open") === "false") {
        $("#svg_card_side.b-b-0").removeClass("b-b-0");
        $("#svg_card_side").addClass("b-b-6");
        $("#btn_menu_list.active").removeClass("active");
        bsSideCardList.hide();
    } else {
        bsSideCardList.show();
    };
    if (localStorage.getItem("cardview_open") === "false" && localStorage.getItem("cardlist_open") === "false") {
        $("#btn_menu_new.b-bl-0").removeClass("b-bl-0");
        $("#btn_menu_list.b-br-0").removeClass("b-br-0");
    };

    if (localStorage.getItem("seen_help") != "true") {
        localStorage.setItem("seen_help", "true");
        bootstrap.Modal.getOrCreateInstance("#modal_help").show();
    };
};

async function addCustomSprite(originalSpriteName, sprite, startup = false) {
    var spriteName = originalSpriteName.toLowerCase();
    customSprites[spriteName] = sprite;
    // revoke object URL if it already exists
    if (customSpriteObjURLs.hasOwnProperty(spriteName)) { URL.revokeObjectURL(customSprites[spriteName]); };
    // create object URL
    customSpriteObjURLs[spriteName] = URL.createObjectURL(customSprites[spriteName]);
    $("#custom_sprite_container").prepend(`<div class="col"><img class="img-fluid rounded-2" role="button" src="` + customSpriteObjURLs[spriteName] + `" custom-sprite-id="` + spriteName + `" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="` + spriteName + `.png" aria-label="` + spriteName + `"/></div>`);
    const tooltip = bootstrap.Tooltip.getOrCreateInstance('[custom-sprite-id="' + spriteName + '"]');
    $('[custom-sprite-id="' + spriteName + '"]').on('click', function () {
        $("#text_sprite").val($(this).attr("custom-sprite-id"));
        bootstrap.Modal.getOrCreateInstance("#modal_sprite_library").hide();
        updateDisplay();
    });
    // JSON
    if (!startup) {
        db.open().then(() => {
            return db.sprites.put({ name: spriteName, type: "card", blob: sprite })
        }).catch(Dexie.MissingAPIError, () => {
            console.log("database ERROR: could not find indexedDB API");
        }).catch((e) => {
            console.log("database ERROR: " + e);
        });
    };
};

function resizeAndBlob(data, newWidth, newHeight) {
    return new Promise(async function (resolve, reject) {
        var img = document.createElement('img');
        img.onload = function () {
            var canvas = document.createElement('canvas');
            var context = canvas.getContext('2d');
            canvas.width = newWidth;
            canvas.height = newHeight;
            context.drawImage(this, 0, 0, newWidth, newHeight);
            canvas.toBlob((blob) => {
                resolve(blob);
            });
        };
        img.src = data;
    });
};

function getSpriteBlob(spriteName) {
    if (uploadingSprites.hasOwnProperty(spriteName)) {
        return uploadingSprites[spriteName];
    } else if (customSprites.hasOwnProperty(spriteName)) {
        return customSprites[spriteName];
    } else if (vanillaSprites.hasOwnProperty(spriteName)) {
        return vanillaSprites[spriteName];
    } else {
        return "failure";
    };
};

function resizeWindow() {
    if (localStorage.getItem("settings_side_menu_absolute") == "false") {
        $("#nav-card > .mw-1920").css({ "max-width": $(window).width() - 350 - 48 });
    } else {
        $("#nav-card > .mw-1920").css({ "max-width": 1920 });
    };
};

function parseIntNoNaN(incoming) {
    return isNaN(parseInt(incoming)) ? 0 : parseInt(incoming);
};
