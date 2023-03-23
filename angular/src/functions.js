// Class containing all data manipulation functions
class CalculatorFunctions {
    // Method to return stats object of a creature type
    returnStats(creatureName) {
        let stats = {
            hitPlus: 0,
            hitDiceValue: 0,
            hitDiceNumber: 0,

            DEX: 0
        }

        return stats
    }
    // Method to calculate the group sizes for each creature type
    calcGroupSize(nCreature, nGroup) {
        let gSize = Math.floor(nCreature / nGroup)
        let remainder = nCreature % nGroup

        let groupSizes = new Array(nGroup).fill(gSize)
        for (let i = 0; i < remainder; i++) {
            groupSizes[i]++
        }
        return groupSizes
    }

    // Method to divide the creatures into their respective groups
    allocateCreatureGroups(entryData) {
        let data = {}

        for (let creatureRow of entryData) {

            const name = creatureRow.name
            const stats = this.returnStats(name)

            let number = creatureRow.number
            let nGroups = creatureRow.n_groups

            let groupSizes = this.calcGroupSize(number, nGroups)
            if (length(groupSizes) > 1) {
                let i = 1
                for (let groupSize in groupSizes) {
                    let groupName = name + i.toString()
                    data[groupName] = new CreatureGroup(groupName, stats, groupSize)
                    i++
                }
            } else {
                data[name] = new CreatureGroup(name, stats, 1)
            }
        }

        return data
    }
}