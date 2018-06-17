const data = [
 {
   "Name": "Acid Spray",
   "Rank": "Prime Forging Technique",
   "Activation Time": "1 action",
   "Range": "10 feet",
   "Duration": "Instant",
   "Description": "You spray a quick stream of acid toward a creature within range. The creature must succeed on a Dexterity saving throw or suffer 1d10 acid damage.",
   "Higher Level": "This power’s damage increases by 1d10 when you reach 5th level (2d10), 11th level (3d10), and 17th level (4d10)."
 },
 {
   "Name": "Amplify Ability",
   "Rank": "Prime Forging Technique",
   "Activation Time": "1 action",
   "Range": "Touch",
   "Duration": "1 minute",
   "Description": "You inject a booster into one willing creature. Once during the duration, the target can roll a d4 and add the number rolled to one ability check of its choice. It can roll the die before or after making the ability check. The effect then ends.",
   "Higher Level": ""
 },
 {
   "Name": "Analyze Device",
   "Rank": "Prime Clairsentient Talent/Forging Technique",
   "Activation Time": "1 minute",
   "Range": "Touch",
   "Duration": "Instant",
   "Description": "You discover all commands, workings, and electronic or mechanical functions of one automaton, construct, device, machine, or vehicle. You gain basic knowledge on how to activate and operate the device. You still need to make the appropriate checks to use advanced functions or access data from the device (at the GM’s discretion).",
   "Higher Level": ""
 },
 {
   "Name": "Assault Drone",
   "Rank": "Rank 2 Forging Technique",
   "Activation Time": "1 bonus action",
   "Range": "50 feet",
   "Duration": "1 minute",
   "Description": "You launch a small plasma cutter drone that you can control within range and lasts for the duration or until you use this power again. When you first activate this power, you can move the drone to any point within range and make a melee forging attack against a creature within 5 feet of the drone. On a hit, the target takes radiant damage equal to 1d8 + your forging ability modifier.\nAs a bonus action on your turn, you can move the drone up to 20 feet and repeat the attack against a creature within 5 feet of it.",
   "Higher Level": "At Higher Ranks. When you use this power at rank 3 or higher, the damage increases by 1d8 for every two ranks above rank 2."
 },
 {
   "Name": "Augment Ability",
   "Rank": "Rank 2 Alteration Talent/Forging Technique",
   "Activation Time": "1 action",
   "Range": "Touch",
   "Duration": "Concentration, up to 1 hour",
   "Description": "You touch a willing creature and it gains physical or mental enhancement. Choose one of the following benefits; the target gains that benefit until the effect ends.\nAgility. The target has advantage on Dexterity checks. It also doesn’t take damage from falling 20 feet or less if it isn’t incapacitated.\nAllure. The target has advantage on Charisma checks. Braun. The target has advantage on Strength checks, and his or her carrying capacity doubles.\nCunning. The target has advantage on Intelligence checks.\nEndurance. The target has advantage on Constitution checks. It also gains 2d6 temporary hit points, which are lost when the effect ends.\nFocus. The target has advantage on Wisdom checks.\n",
   "Higher Level": "At Higher Ranks. When you use this power at rank 3 or higher, you can target one additional creature for each rank above 2."
 },
 {
   "Name": "Barrier",
   "Rank": "Rank 1 Forging Technique",
   "Activation Time": "1 action",
   "Range": "60 feet",
   "Duration": "Concentration, up to 10 minutes",
   "Description": "A force field appears and surrounds a creature of your choice within range, granting it a +2 bonus to AC for the duration.",
   "Higher Level": ""
 },
 {
   "Name": "Black Hat",
   "Rank": "Rank 2 Clairsentient Talent/Forging Technique",
   "Activation Time": "1 action",
   "Range": "Self",
   "Duration": "Concentration, up to 1 minute",
   "Description": "You’re able to quickly analyze electronic data and transmissions within a computer system. You gain advantage on all Intelligence checks using a hacker’s kit to break data encryption or security within an unfamiliar system. This power also allows you to hack into and break through rank 2 and lower warding talents such as magnetic seal or programmed trigger by making an Intelligence check using a hacker’s kit against the owner’s channeling or forging save DC.",
   "Higher Level": "At Higher Ranks. When you use this power at rank 3 or higher, you can hack into the effects of talents or techniques used to ward electrical systems such as system lock. The target power’s rank must be equal to or lower than the rank at which you choose to activate this power."
 },
 {
   "Name": "Blindness/Deafness",
   "Rank": "Rank 2 Alteration Talent/Forging Technique",
   "Activation Time": "1 action",
   "Range": "30 feet",
   "Duration": "1 minute",
   "Description": "You can blind or deafen an enemy. Choose one creature that you can see within range to make a Constitution saving throw. If it fails, the target is either blinded or deafened (your choice) for the duration. At the end of each of its turns, the target can make a Constitution saving throw. On a success, the effect ends.",
   "Higher Level": "At Higher Ranks. When you use this power at rank 3 or higher, you can target one additional creature for each rank above 2."
 },
 {
   "Name": "Bolster",
   "Rank": "Rank 2 Forging Technique",
   "Activation Time": "1 action",
   "Range": "30 feet",
   "Duration": "8 hours",
   "Description": "You inject a boosting stim into your allies, providing a temporary increase in toughness and resilience. Choose up to three creatures within range. Each target’s hit point maximum and current hit points increase by 5 for the duration.",
   "Higher Level": "At Higher Ranks. When you use this power at rank 3 or higher, a target’s hit points increase by an additional 5 for each rank above 2."
 },
 {
   "Name": "Cortex Link",
   "Rank": "Rank 2 Forging Technique",
   "Activation Time": "1 action",
   "Range": "Touch",
   "Duration": "1 hour",
   "Description": "You place a device onto a willing creature that bonds with your implant, creating a psychosomatic link between you and the target for the duration. While the target is within 60 feet of you, it gains a +1 bonus to AC and saving throws, and it has resistance to all damage. Also, each time it takes damage, you take the same amount of damage. You can also sense surface emotions from the target but cannot discern specific thoughts.\nThis effect ends and the device disintegrates if you drop to 0 hit points or if you and the target become separated by more than 60 feet. It also ends if the technique is activated again on either you or the target. You can also dismiss this effect as an action.",
   "Higher Level": ""
 },
 {
   "Name": "Data Ghost",
   "Rank": "Rank 2 Clairsentient Talent/ Forging Technique (C)",
   "Activation Time": "1 action",
   "Range": "Self",
   "Duration": "Concentration, up to 1 hour",
   "Description": "You create a digital mask to hide your presence on any computer system or network. This power can be used to target up to six companions and yourself. For the duration of this power, any Intelligence check made in an effort to locate the presence or activity of these targets within a particular computer system is made at a -10 penalty.\nIn addition, any activity performed by you or your chosen targets during the duration of this power is immediately erased from the system when the effect ends.",
   "Higher Level": ""
 },
 {
   "Name": "Deflect Elements",
   "Rank": "Prime Forging Technique",
   "Activation Time": "1 action",
   "Range": "Touch",
   "Duration": "Concentration, up to 1 minute",
   "Description": "You place a small field generator on one willing creature. Once before the end of the duration, that creature will receive a +2 bonus to their next saving throw versus any elemental damage type (fire, frost, lightning, thunder). The effect then ends.",
   "Higher Level": ""
 },
 {
   "Name": "Detect Truth",
   "Rank": "Rank 2 Psychogenic Talent/Forging Technique",
   "Activation Time": "1 action",
   "Range": "60 feet",
   "Duration": "10 minutes",
   "Description": "You create a zone of psychic waves that prohibits deception in a 15-foot-radius sphere centered on a point of your choice within range. Until the effect ends, a creature that enters the affected area for the first time on a turn or starts its turn there must make a Charisma saving throw. On a failed save, a creature can’t speak a deliberate lie while in the radius. You know whether each creature succeeds or fails on its saving throw.\nAn affected creature is aware of the power and can thus avoid answering questions to which it would normally respond with a lie. Such a creature can be evasive as long as it remains within the boundaries of the truth.",
   "Higher Level": ""
 },
 {
   "Name": "Detoxify",
   "Rank": "Rank 2 Forging Technique",
   "Activation Time": "1 action",
   "Range": "Touch",
   "Duration": "1 hour",
   "Description": "You supply a creature with a special antitoxin. If it is poisoned, you neutralize the poison. If more than one poison afflicts the target, you neutralize one poison that you know is present, or you neutralize one at random.\nFor the duration, the target has advantage on saving throws against being poisoned, and has resistance to poison damage.",
   "Higher Level": ""
 },
 {
   "Name": "Electric Surge",
   "Rank": "Prime Forging Technique",
   "Activation Time": "1 action",
   "Range": "60 feet",
   "Duration": "Instant",
   "Description": "You launch a spike of surging electricity toward a target within range. Make a ranged forging attack. The target gains no benefit from cover from this attack. On a hit, the target takes 1d8 lightning damage and loses their cover until the start of their next turn.",
   "Higher Level": "This power’s damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8)."
 },
 {
   "Name": "Enhance Weapon",
   "Rank": "Rank 2 Forging Technique",
   "Activation Time": "1 bonus action",
   "Range": "Touch",
   "Duration": "Concentration, up to 1 hour",
   "Description": "You touch a mundane weapon, charging it with energy from your rig. Until the effect ends, that weapon becomes a forge enhanced weapon with a +1 bonus to attack rolls and damage rolls.",
   "Higher Level": "At Higher Ranks. When you use this power at rank 4 or higher, the bonus increases to +2. When you use this power at rank 6 or higher, the bonus increases to +3."
 },
 {
   "Name": "Esper Sense",
   "Rank": "Rank 1 Clairsentient Talent/Forging Technique (C)",
   "Activation Time": "1 action",
   "Range": "Self",
   "Duration": "Concentration, up to 10 minutes",
   "Description": "For the duration, you sense the presence of any esper powers within 30 feet of you. If you sense a power in this way, you can use your action to see a faint aura around any visible creature or object in the area that bears the power’s effects, and you learn its domain, if any.\nThe power can penetrate barriers, but it is blocked by 1 foot of stone or metal, or 3 feet of earth, or plant material.",
   "Higher Level": ""
 },
 {
   "Name": "Field Salve",
   "Rank": "Rank 1 Forging Technique",
   "Activation Time": "1 action",
   "Range": "60 feet",
   "Duration": "Instant",
   "Description": "You send micro drones to administer healing to your allies. Three creatures of your choice that you can see within range regain hit points equal to 1d4 + your forging ability modifier. This ability has no effect on constructs or automatons.",
   "Higher Level": "At Higher Ranks. When you use this power at rank 2 or higher, the healing increases by 1d4 for each rank above 1."
 },
 {
   "Name": "Gamma Vision",
   "Rank": "Prime Forging Technique",
   "Activation Time": "1 action",
   "Range": "Self",
   "Duration": "10 minutes",
   "Description": "Your implant alters your ability to see enhanced spectrums of light. You gain darkvision with a range of 40 feet. Deactivating this ability requires an action. While in sunlight or very bright light, you are at a disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight.",
   "Higher Level": ""
 },
 {
   "Name": "Impedance",
   "Rank": "Rank 1 Forging Technique",
   "Activation Time": "1 action",
   "Range": "30 feet",
   "Duration": "Concentration, up to 1 minute",
   "Description": "A pack of micro-drones deter and distract up to three creatures of your choice within range that you can see. Each creature must make a Wisdom saving throw. For the duration, any target that fails this saving throw suffers a -2 penalty to all attack rolls and saving throws.",
   "Higher Level": "At Higher Ranks. When you use this power at rank 2 or higher, you can target one additional creature for each rank above 1."
 },
 {
   "Name": "Infravision",
   "Rank": "Rank 2 Forging Technique",
   "Activation Time": "1 action",
   "Range": "Touch",
   "Duration": "8 hours",
   "Description": "You touch a willing creature to grant it the ability to see the infrared spectrum. For the duration, that creature has infravision ut to a range of 60 feet. While under the power’s effect, the creature can switch between infravision and normal vision instantly, without requiring the use of any actions.",
   "Higher Level": ""
 },
 {
   "Name": "Intercept Directive",
   "Rank": "Rank 1 Clairsentient Talent/Forging Technique",
   "Activation Time": "1 bonus action",
   "Range": "Self",
   "Duration": "Concentration, up to 1 minute",
   "Description": "You are able to read and understand the electronic command patterns either within or being exchanged between automatons and constructs. Until the effect ends, you have advantage to Dexterity and Wisdom saving throws against attacks from any threat of this type.",
   "Higher Level": ""
 },
 {
   "Name": "Laser Blast",
   "Rank": "Rank 1 Forging Technique",
   "Activation Time": "1 action",
   "Range": "120 feet",
   "Duration": "Instant",
   "Description": "You fire a high powered laser beam toward a creature of your choice within range. Make a ranged forging attack against the target. On a hit, the target takes 4d6 radiant damage. In addition, the next attack roll made against this target before the end of your next turn has advantage.",
   "Higher Level": "At Higher Ranks. When you use this power at rank 2 or higher, the damage increases by 1d6 for each rank above 1."
 },
 {
   "Name": "Loading Arm",
   "Rank": "Rank 1 Forging Technique",
   "Activation Time": "1 action",
   "Range": "Touch",
   "Duration": "Concentration, up to 1 minute",
   "Description": "You forge a cybernetic attachment over the limb of a willing creature. For the duration, the target has advantage to Strength (Athletics) checks made to move, lift, or carry objects and does so as if they were one category size larger.",
   "Higher Level": ""
 },
 {
   "Name": "Mass Treatment",
   "Rank": "Rank 2 Forging Technique",
   "Activation Time": "10 minutes",
   "Range": "30 feet",
   "Duration": "Instant",
   "Description": "You medically treat up to six creatures of your choice that you can see within range. Each creature regains hit points equal to 2d8 + your forging ability modifier. This power has no effect on automatons or constructs.",
   "Higher Level": "At Higher Ranks. When you use this power at rank 3 or higher, the healing increases by 1d8 for each rank above 2."
 },
 {
   "Name": "Mend",
   "Rank": "Rank 1 Forging Technique",
   "Activation Time": "1 action",
   "Range": "Touch",
   "Duration": "Instant",
   "Description": "A creature you touch regains hit points equal to 1d8 + your forging ability modifier. This ability has no effect on automatons or constructs.",
   "Higher Level": "At Higher Ranks. When you use this power at rank 2 or higher, the healing increases by 1d8 for each rank above 1."
 },
 {
   "Name": "Minor Remedy",
   "Rank": "Rank 2 Forging Technique",
   "Activation Time": "1 action",
   "Range": "Touch",
   "Duration": "Instant",
   "Description": "You administer treatment to a creature and can end either one disease or one condition afflicting it. The condition can be blinded, deafened, paralyzed, or poisoned.",
   "Higher Level": ""
 },
 {
   "Name": "Paralyzer",
   "Rank": "Rank 2 Forging Technique",
   "Activation Time": "1 action",
   "Range": "60 feet",
   "Duration": "Concentration, up to 1 minute",
   "Description": "You generate an electrical stun net over a target of your choice. The target must succeed on a Constitution saving throw or be paralyzed for the duration. At the end of each of its turns, the target can make another Constitution saving throw. On a success, the effect ends on the target.",
   "Higher Level": "At Higher Ranks. When you use this power at rank 3 or higher, you can target one additional humanoid for each rank above 2. The humanoids must be within 30 feet of each other when you target them."
 },
 {
   "Name": "Plasma Blade",
   "Rank": "Rank 2 Forging Technique",
   "Activation Time": "1 bonus action",
   "Range": "Self",
   "Duration": "Concentration, up to 10 minutes",
   "Description": "You generate a small plasma cutting blade from a device of your design that can be worn or carried. The blade is similar in size and shape of a short blade, and it lasts for the duration. You can deactivate and reactivate the blade again as a bonus action.\nYou can use your action to make a melee forging attack with the plasma blade. On a hit, the target takes 3d6 radiant damage.",
   "Higher Level": ""
 },
 {
   "Name": "Quick Repair",
   "Rank": "Rank 2 Forging Technique",
   "Activation Time": "1 action",
   "Range": "Touch",
   "Duration": "Instant",
   "Description": "You repair an automaton, construct, or mechanical device, or planetary vehicle that you can touch. It regains hit points equal to 1d8 + your forging ability modifier.",
   "Higher Level": "At Higher Ranks. When you use this power at rank 2 or higher, the healing increases by 1d8 for each rank above 1."
 },
 {
   "Name": "Remote Connection",
   "Rank": "Rank 1 Clairsentient Talent/Forging Technique",
   "Activation Time": "1 action",
   "Range": "90 feet",
   "Duration": "Concentration, up to 10 minutes",
   "Description": "You can use a nearby device as if it were right in front of you. Choose any electronic device within range that is not being worn or carried and that has a user function such as controls or a keypad. When you activate this power, a virtual set of controls appear before you, allowing you to use the device as if you were accessing it physically.\nYou can only use this power on one device at a time. This power has no effect on a device that is currently in use by another user.",
   "Higher Level": ""
 },
 {
   "Name": "Security Scanner",
   "Rank": "Rank 2 Forging Technique",
   "Activation Time": "1 action",
   "Range": "120 feet",
   "Duration": "Instant",
   "Description": "You sense the presence of any trap within range that is within line of sight. A trap, for the purpose of this power, includes anything that would inflict a sudden or unexpected effect you consider harmful or undesirable, which was specifically intended as such by its creator.\nThus, the power would sense an area covered with pressure sensitive mines, a sensor grid, hidden weapon mounts, or those with affected by esper powers such as security trigger or programmed trigger. It would not reveal a natural weakness in the floor, faulty wiring, an unstable ceiling or platform, or a rusted railing.\nThis power merely reveals that a trap is present. You don’t learn the location of each trap, but you do learn the general nature of the danger posed by a trap you sense.",
   "Higher Level": ""
 },
 {
   "Name": "Sensory Boost",
   "Rank": "Rank 1 Forging Technique",
   "Activation Time": "1 action",
   "Range": "30 feet",
   "Duration": "Concentration, up to 1 minute",
   "Description": "You provide a sensory upgrade to up to three creatures of your choice within range. Each creature gains a +2 bonus to attack rolls and saving throws before the end of the effect’s duration.",
   "Higher Level": "At Higher Ranks. When you use this power at rank 2 or higher, you can target one additional creature for each rank above 1."
 },
 {
   "Name": "Sensory Jammer",
   "Rank": "Rank 1 Forging Technique",
   "Activation Time": "1 bonus action",
   "Range": "30 feet",
   "Duration": "1 minute",
   "Description": "You create a sensory masking effect around a creature within range, making them difficult to pinpoint and attack. Until the effect ends, any creature who targets the affected creature with an attack or a harmful power must first make a Wisdom saving throw. On a failed save, the creature must choose a new target or lose the attack or power. This technique doesn’t protect the chosen creature from area effects, such as the crushing force of a gravity well.\nIf the warded creature makes an attack or activates a power that affects an enemy creature, the technique’s effect ends.",
   "Higher Level": ""
 },
 {
   "Name": "Sonic Burst",
   "Rank": "Prime Forging Technique",
   "Activation Time": "1 action",
   "Range": "Self (5 feet radius)",
   "Duration": "Instant",
   "Description": "You emit burst of sonic energy centered upon you. Each creature in a 5 foot radius must make a Constitution saving throw or suffer 1d6 thunder damage. You are excluded from this effect. In addition, the technique emits a thunderous boom that can be heard from 150 feet away.",
   "Higher Level": "This power’s damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6)."
 },
 {
   "Name": "Spiral Defender",
   "Rank": "Rank 1 Forging Technique",
   "Activation Time": "1 reaction, which you take when you are targeted by an attack but before the roll is made.",
   "Range": "Self",
   "Duration": "Instant",
   "Description": "As a reaction, you activate a group of small energy shields that spiral upward around your body to deflect an incoming attack from a target you choose. The target’s attack has disadvantage to its attack roll.",
   "Higher Level": ""
 },
 {
   "Name": "Spoof Command",
   "Rank": "Rank 2 Clairsentient Talent/Forging Technique (C)",
   "Activation Time": "1 action",
   "Range": "30 feet",
   "Duration": "Concentration, up to 10 minutes",
   "Description": "You attempt to bluff the security protocol of an automaton or construct you can see within range. This power has no effect on targets with an Intelligence of 2 or less. The target must make an Intelligence saving throw, and does so with advantage if you or your companions are fighting it. If it fails the saving throw, it regards you as a friendly acquaintance for the duration. The effect immediately ends if you or your companions attack the target. When the effect ends, the target knows it was under the effect of this power.",
   "Higher Level": "At Higher Ranks. When you use this power at rank 4 or higher, you can target one additional automaton or construct for each rank above 2. They must be within 30 feet of each other when you target them."
 },
 {
   "Name": "Stabilize",
   "Rank": "Prime Forging Technique",
   "Activation Time": "1 action",
   "Range": "Touch",
   "Duration": "Instant",
   "Description": "When you activate this power on a living creature with 0 hit points, that creature becomes stable. This technique has no effect on automatons or constructs.",
   "Higher Level": ""
 },
 {
   "Name": "Static Circle",
   "Rank": "Prime Forging Technique",
   "Activation Time": "1 action",
   "Range": "Self",
   "Duration": "Instant",
   "Description": "You extend your arms outward, emitting short streams of electrostatic energy. Each creature of your choice within 5 feet of you must succeed on a Constitution saving throw or take 1d6 lightning damage.",
   "Higher Level": "This power’s power increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6)."
 },
 {
   "Name": "Target Scrambler",
   "Rank": "Rank 1 Alteration Talent/Forging Technique",
   "Activation Time": "1 action",
   "Range": "Touch",
   "Duration": "Concentration, up to 10 minutes",
   "Description": "You place a device on one willing creature. Until the effect ends, they become a blur to the targeting sensors of the AI often found in automatons and constructs.\nCreatures of those types have disadvantage on attack rolls against the target. The target also can’t be frightened or possessed by them. If the target is already frightened or possessed by such a creature, the target has advantage on any new saving throw against the relevant effect.",
   "Higher Level": ""
 },
 {
   "Name": "Trauma",
   "Rank": "Rank 1 Forging Technique",
   "Activation Time": "1 action",
   "Range": "Touch",
   "Duration": "Instant",
   "Description": "You cause a rupture to form on the creature’s body. Make a melee forging attack against a creature you can reach. On a hit, the target takes 3d10 necrotic damage.",
   "Higher Level": "At Higher Ranks. When you use this power at rank 2 or higher, the damage increases by 1d10 for each rank above 1."
 },
 {
   "Name": "Virtual Display",
   "Rank": "Prime Clairsentient Talent/Forging Technique",
   "Activation Time": "1 action",
   "Range": "90 feet",
   "Duration": "Concentration, up to 1 minute",
   "Description": "You can view the on-screen contents of any digital data display you can see within range. The information appears before you in a translucent display that only you can see.",
   "Higher Level": ""
 },
 {
   "Name": "Voltaic Charge",
   "Rank": "Rank 1 Forging Technique",
   "Activation Time": "1 bonus action",
   "Range": "Self",
   "Duration": "Concentration, up to 1 minute",
   "Description": "You imbue your weapons with charged electrical energy. Until the effect ends, your weapon attacks deal an extra 1d4 lightning damage on a hit.",
   "Higher Level": ""
 }
]

// export default data
