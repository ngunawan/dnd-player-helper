angular.module('app').factory('characterService', function () {

    const characterModel = {
        name: "",
        backstory: "",
        stats: {
            hit_points: 0,
            movement: 0,
            ac: 0,
            str: 0,
            dex: 0,
            con: 0,
            wis: 0,
            cha: 0,
            int: 0,
            saving_throws: {
                str: false,
                dex: false,
                con: false,
                wis: false,
                cha: false,
                int: false
            },
            skills: {
                athletics: false,
                acrobatics: false,
                sleight_of_hand: false,
                stealth: false,
                animal_handling: false,
                insight: false,
                medicine: false,
                perception: false,
                survival: false,
                deception: false,
                intimidation: false,
                performance: false,
                persuasion: false,
                arcana: false,
                history: false,
                investigation: false,
                nature: false,
                religion: false
            }
        },
        class: [],
        race: "",
        background: "",
        spells: [],
        armors: [],
        weapons: [],
        equipments: [],
        gold: 0,
        feats: []
    }

    let characterObject = angular.copy(characterModel);

    return {
        model: characterModel,
        character: characterObject,
        resetCharacter: function () {
            this.character = angular.copy(this.model);
            return this.character;
        }
    };

});
