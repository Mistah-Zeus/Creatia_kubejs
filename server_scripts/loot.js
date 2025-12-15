LootJS.lootTables(event => {

/*event
    .getLootTable("confluence:chests/underground_cabins")
    .firstPool()
    .addEntry(LootEntry.of("confluence:life_crystal").withWeight(2))
event
    .getLootTable("confluence:chests/underground_chests")
    .firstPool()
    .addEntry(LootEntry.of("confluence:life_crystal").withWeight(2))
event
    .getLootTable("confluence:chests/cave_chests")
    .firstPool()
    .addEntry(LootEntry.of("confluence:life_crystal").withWeight(2))


    //modify the marine_gravel loot table
    event
        .getLootTable("confluence:gameplay/extract/with_marine_gravel")
        .firstPool()
        .addEntry(LootEntry.of("minecraft:cod").withWeight(30000))
    event
        .getLootTable("confluence:gameplay/extract/with_marine_gravel")
        .firstPool()
        .addEntry(LootEntry.of("minecraft:salmon").withWeight(30000))
    event
        .getLootTable("confluence:gameplay/extract/with_marine_gravel")
        .firstPool()
        .addEntry(LootEntry.of("minecraft:kelp").withWeight(30000))
    event
        .getLootTable("confluence:gameplay/extract/with_marine_gravel")
        .firstPool()
        .addEntry(LootEntry.of("minecraft:seagrass").withWeight(30000))
    event
        .getLootTable("confluence:gameplay/extract/with_marine_gravel")
        .firstPool()
        .addEntry(LootEntry.of("minecraft:tropical_fish").withWeight(30000))
    event
        .getLootTable("confluence:gameplay/extract/with_marine_gravel")
        .firstPool()
        .addEntry(LootEntry.of("minecraft:trident").withWeight(300))

event
    .getLootTable("confluence:gameplay/extract/with_marine_gravel")
    .firstPool()
    .modifyItemEntry(itemEntry => {
        if (itemEntry.item.id === "confluence:platinum_coin") {
            itemEntry.setWeight(10)
        }

        return itemEntry
    })
event
        .getLootTable("confluence:gameplay/extract/with_marine_gravel")
        .firstPool()
        .modifyItemEntry(itemEntry => {
            if (itemEntry.item.id === "confluence:golden_coin") {
                itemEntry.setWeight(1000)
            }

            return itemEntry
        })
event
        .getLootTable("confluence:gameplay/extract/with_marine_gravel")
        .firstPool()
        .modifyItemEntry(itemEntry => {
            if (itemEntry.item.id === "confluence:silver_coin") {
                itemEntry.setWeight(10000)
            }

            return itemEntry
        })
event
        .getLootTable("confluence:gameplay/extract/with_marine_gravel")
        .firstPool()
        .modifyItemEntry(itemEntry => {
            if (itemEntry.item.id === "confluence:copper_coin") {
                itemEntry.setWeight(1000000)
            }

            return itemEntry
        })
event
        .getLootTable("confluence:gameplay/extract/with_marine_gravel")
        .firstPool()
        .modifyItemEntry(itemEntry => {
            if (itemEntry.item.id === "confluence:tr_amethyst") {
                itemEntry.setWeight(10000)
            }

            return itemEntry
        })
event
        .getLootTable("confluence:gameplay/extract/with_marine_gravel")
        .firstPool()
        .modifyItemEntry(itemEntry => {
            if (itemEntry.item.id === "confluence:sapphire") {
                itemEntry.setWeight(10000)
            }

            return itemEntry
        })
event
        .getLootTable("confluence:gameplay/extract/with_marine_gravel")
        .firstPool()
        .modifyItemEntry(itemEntry => {
            if (itemEntry.item.id === "confluence:topaz") {
                itemEntry.setWeight(10000)
            }

            return itemEntry
        })
event
        .getLootTable("confluence:gameplay/extract/with_marine_gravel")
        .firstPool()
        .modifyItemEntry(itemEntry => {
            if (itemEntry.item.id === "confluence:amber") {
                itemEntry.setWeight(10000)
            }

            return itemEntry
        })
event
        .getLootTable("confluence:gameplay/extract/with_marine_gravel")
        .firstPool()
        .modifyItemEntry(itemEntry => {
            if (itemEntry.item.id === "confluence:ruby") {
                itemEntry.setWeight(10000)
            }

            return itemEntry
        })
event
        .getLootTable("confluence:gameplay/extract/with_marine_gravel")
        .firstPool()
        .modifyItemEntry(itemEntry => {
            if (itemEntry.item.id === "confluence:tr_emerald") {
                itemEntry.setWeight(10000)
            }

            return itemEntry
        })
event
        .getLootTable("confluence:gameplay/extract/with_marine_gravel")
        .firstPool()
        .modifyItemEntry(itemEntry => {
            if (itemEntry.item.id === "minecraft:diamond") {
                itemEntry.setWeight(10000)
            }

            return itemEntry
        })
event
        .getLootTable("confluence:gameplay/extract/with_marine_gravel")
        .firstPool()
        .modifyItemEntry(itemEntry => {
            if (itemEntry.item.id === "confluence:raw_tin") {
                itemEntry.setWeight(33333)
            }

            return itemEntry
        })
event
        .getLootTable("confluence:gameplay/extract/with_marine_gravel")
        .firstPool()
        .modifyItemEntry(itemEntry => {
            if (itemEntry.item.id === "confluence:raw_lead") {
                itemEntry.setWeight(33333)
            }

            return itemEntry
        })
event
        .getLootTable("confluence:gameplay/extract/with_marine_gravel")
        .firstPool()
        .modifyItemEntry(itemEntry => {
            if (itemEntry.item.id === "confluence:raw_silver") {
                itemEntry.setWeight(33333)
            }

            return itemEntry
        })
event
        .getLootTable("confluence:gameplay/extract/with_marine_gravel")
        .firstPool()
        .modifyItemEntry(itemEntry => {
            if (itemEntry.item.id === "confluence:raw_tungsten") {
                itemEntry.setWeight(33333)
            }

            return itemEntry
        })
event
        .getLootTable("confluence:gameplay/extract/with_marine_gravel")
        .firstPool()
        .modifyItemEntry(itemEntry => {
            if (itemEntry.item.id === "confluence:raw_platinum") {
                itemEntry.setWeight(33333)
            }

            return itemEntry
        })
event
        .getLootTable("confluence:gameplay/extract/with_marine_gravel")
        .firstPool()
        .modifyItemEntry(itemEntry => {
            if (itemEntry.item.id === "minecraft:raw_copper") {
                itemEntry.setWeight(33333)
            }

            return itemEntry
        })
event
        .getLootTable("confluence:gameplay/extract/with_marine_gravel")
        .firstPool()
        .modifyItemEntry(itemEntry => {
            if (itemEntry.item.id === "minecraft:raw_iron") {
                itemEntry.setWeight(33333)
            }

            return itemEntry
        })
event
        .getLootTable("confluence:gameplay/extract/with_marine_gravel")
        .firstPool()
        .modifyItemEntry(itemEntry => {
            if (itemEntry.item.id === "minecraft:raw_gold") {
                itemEntry.setWeight(33333)
            }

            return itemEntry
        })
event
        .getLootTable("confluence:gameplay/extract/with_marine_gravel")
        .firstPool()
        .modifyItemEntry(itemEntry => {
            if (itemEntry.item.id === "minecraft:prismarine_shard") {
                itemEntry.setWeight(55555)
            }

            return itemEntry
        })
event
        .getLootTable("confluence:gameplay/extract/with_marine_gravel")
        .firstPool()
        .modifyItemEntry(itemEntry => {
            if (itemEntry.item.id === "minecraft:prismarine_crystals") {
                itemEntry.setWeight(55555)
            }

            return itemEntry
        })
event
        .getLootTable("confluence:gameplay/extract/with_marine_gravel")
        .firstPool()
        .modifyItemEntry(itemEntry => {
            if (itemEntry.item.id === "minecraft:nautilus_shell") {
                itemEntry.setWeight(55555)
            }

            return itemEntry
        })
event
        .getLootTable("confluence:gameplay/extract/with_marine_gravel")
        .firstPool()
        .modifyItemEntry(itemEntry => {
            if (itemEntry.item.id === "minecraft:sniffer_egg") {
                itemEntry.setWeight(5000)
            }

            return itemEntry
        })
event
        .getLootTable("confluence:gameplay/extract/with_marine_gravel")
        .firstPool()
        .modifyItemEntry(itemEntry => {
            if (itemEntry.item.id === "confluence:hiem") {
                itemEntry.setWeight(33333)
            }

            return itemEntry
        })
}))*/