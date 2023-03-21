// Class storing all attributes of an individual creature
class Creature {
    constructor(statsObj) {
        this.hitDiceNumber = statsObj.hitDiceNumber
        this.hitDiceValue = statsObj.hitDiceValue
        this.hitPlus = statsObj.hitPlus

        this.health = this.rollHealth()
    }

    // Rolls a random value of health using stored health parameters
    rollHealth() {
        let health = 0
        for (let i = 0; i < this.hitDiceNumber; i++) {
            health += Math.floor(Math.random() * this.hitDiceValue)
        }
        health += this.hitPlus
        return health
    }

    // Creature loses health equal to the value inputted
    takeDamage(value) {
        this.health -= value
    }
}

// Class storing all attributes of a creature group
class CreatureGroup {
    constructor(creatureStats, groupSize) {
        this.stats = creatureStats
        this.groupSize = groupSize

        this.members = {}

        this.create()
    }

    // Retrieves the stats of a creature
    // Creates the group members based on the group size
    create() {
        const colours = ['red', 'green', 'yellow', 'orange', 'blue']

        for (let i = 0; i < this.groupSize; i++) {
            this.members[colours[i]] = new Creature(this.stats)
        }
    }
}