//Visit the wiki for more info - https://kubejs.com/

ServerEvents.recipes(event => {
  event.recipes.create.mixing('minecraft:diamond', 'minecraft:coal_block')
event.recipes.create.mixing('minecraft:oak_log', ['minecraft:oak_sapling', 'minecraft:oak_sapling']).heated()
event.recipes.create.mixing('confulence:ammo_reservation_potion', ['minecraft:oak_sapling', 'minecraft:oak_sapling']).heated()
event.recipes.create.mixing('confulence:archery_potion', ['minecraft:oak_sapling', 'minecraft:oak_sapling']).heated()
event.recipes.create.mixing('confulence:battle_potion', ['minecraft:oak_sapling', 'minecraft:oak_sapling']).heated()
event.recipes.create.mixing('confulence:biome_sight_potion', ['minecraft:oak_sapling', 'minecraft:oak_sapling']).heated()
event.recipes.create.mixing('confulence:builder_potion', ['minecraft:oak_sapling', 'minecraft:oak_sapling']).heated()
event.recipes.create.mixing('confulence:calming_potion', ['minecraft:oak_sapling', 'minecraft:oak_sapling']).heated()
event.recipes.create.mixing('confulence:crate_potion', ['minecraft:oak_sapling', 'minecraft:oak_sapling']).heated()
event.recipes.create.mixing('confulence:dangersense_potion', ['minecraft:oak_sapling', 'minecraft:oak_sapling']).heated()
event.recipes.create.mixing('confulence:endurance_potion', ['minecraft:oak_sapling', 'minecraft:oak_sapling']).heated()
event.recipes.create.mixing('confulence:featherfall_potion', ['minecraft:oak_sapling', 'minecraft:oak_sapling']).heated()
event.recipes.create.mixing('confulence:fishing_potion', ['minecraft:oak_sapling', 'minecraft:oak_sapling']).heated()
event.recipes.create.mixing('confulence:flipper_potion', ['minecraft:oak_sapling', 'minecraft:oak_sapling']).heated()
event.recipes.create.mixing('confulence:gills_potion', ['minecraft:oak_sapling', 'minecraft:oak_sapling']).heated()
event.recipes.create.mixing('confulence:gravitation_potion', ['minecraft:oak_sapling', 'minecraft:oak_sapling']).heated()
event.recipes.create.mixing('confulence:greater_luck_potion', ['minecraft:oak_sapling', 'minecraft:oak_sapling']).heated()
event.recipes.create.mixing('confulence:heartreach_potion', ['minecraft:oak_sapling', 'minecraft:oak_sapling']).heated()
event.recipes.create.mixing('confulence:hunter_potion', ['minecraft:oak_sapling', 'minecraft:oak_sapling']).heated()
event.recipes.create.mixing('confulence:inferno_potion', ['minecraft:oak_sapling', 'minecraft:oak_sapling']).heated()
event.recipes.create.mixing('confulence:ironskin_potion', ['minecraft:oak_sapling', 'minecraft:oak_sapling']).heated()
event.recipes.create.mixing('confulence:lesser_luck_potion', ['minecraft:oak_sapling', 'minecraft:oak_sapling']).heated()
event.recipes.create.mixing('confulence:lifeforce_potion', ['minecraft:oak_sapling', 'minecraft:oak_sapling']).heated()
event.recipes.create.mixing('confulence:luck_potion', ['minecraft:oak_sapling', 'minecraft:oak_sapling']).heated()
event.recipes.create.mixing('confulence:magic_power_potion', ['minecraft:oak_sapling', 'minecraft:oak_sapling']).heated()
event.recipes.create.mixing('confulence:mana_regeneration_potion', ['minecraft:oak_sapling', 'minecraft:oak_sapling']).heated()
event.recipes.create.mixing('confulence:mining_potion', ['minecraft:oak_sapling', 'minecraft:oak_sapling']).heated()
event.recipes.create.mixing('confulence:night_owl_potion', ['minecraft:oak_sapling', 'minecraft:oak_sapling']).heated()
event.recipes.create.mixing('confulence:obsidian_skin_potion', ['minecraft:oak_sapling', 'minecraft:oak_sapling']).heated()
event.recipes.create.mixing('confulence:rage_potion', ['minecraft:oak_sapling', 'minecraft:oak_sapling']).heated()
event.recipes.create.mixing('confulence:shine_potion', ['minecraft:oak_sapling', 'minecraft:oak_sapling']).heated()
event.recipes.create.mixing('confulence:sonar_potion', ['minecraft:oak_sapling', 'minecraft:oak_sapling']).heated()
event.recipes.create.mixing('confulence:spelunker_potion', ['minecraft:oak_sapling', 'minecraft:oak_sapling']).heated()
event.recipes.create.mixing('confulence:summoning_potion', ['minecraft:oak_sapling', 'minecraft:oak_sapling']).heated()
event.recipes.create.mixing('confulence:thorns_potion', ['minecraft:oak_sapling', 'minecraft:oak_sapling']).heated()
event.recipes.create.mixing('confulence:titan_potion', ['minecraft:oak_sapling', 'minecraft:oak_sapling']).heated()
event.recipes.create.mixing('confulence:water_walking_potion', ['minecraft:oak_sapling', 'minecraft:oak_sapling']).heated()
event.recipes.create.mixing('confulence:wrath_potion', ['minecraft:oak_sapling', 'minecraft:oak_sapling']).heated()




event.shapeless(
Item.of('confluence:silt_block'), // arg 1: output
['minecraft:sand','minecraft:clay'])// arg 2:input
event.shapeless(
Item.of('confluence:marine_gravel'), // arg 1: output
['minecraft:gravel','minecraft:kelp','minecraft:sand'])// arg 2:input
event.shapeless(
Item.of('confluence:slush'), // arg 1: output
['minecraft:snow_block','minecraft:ice','minecraft:gravel'])
event.shapeless(
Item.of('minecraft:andesite'), // arg 1: output
['minecraft:cobblestone'])

event.replaceInput(
  {input: 'minecraft:amethyst_shard'}, // Arg 1: the filter
  'minecraft:amethyst_shard',            // Arg 2: the item to replace
  '#c:gems/amethyst'         // Arg 3: the item to replace it with
  // Note: tagged fluid ingredients do not work on Fabric, but tagged items do.
)
event.replaceInput(
  {input: 'confluence:amethyst' }, // Arg 1: the filter
  'confluence:amethyst',            // Arg 2: the item to replace
  '#c:gems/amethyst'         // Arg 3: the item to replace it with
  // Note: tagged fluid ingredients do not work on Fabric, but tagged items do.
)


event.remove({id:'minecraft:diamond_chestplate'})
event.remove({id:'minecraft:diamond_boots'})
event.remove({id:'minecraft:diamond_leggings'})
event.remove({id:'minecraft:diamond_helmet'})
event.remove({id:'minecraft:diamond_sword'})
event.remove({id:'minecraft:diamond_axe'})
event.remove({id:'minecraft:diamond_shovel'})
event.remove({id:'minecraft:diamond_pickaxe'})
event.remove({id:'minecraft:gold_chestplate'})
event.remove({id:'minecraft:gold_boots'})
event.remove({id:'minecraft:gold_leggings'})
event.remove({id:'minecraft:gold_helmet'})
event.remove({id:'minecraft:gold_sword'})
event.remove({id:'minecraft:gold_axe'})
event.remove({id:'minecraft:gold_shovel'})
event.remove({id:'minecraft:gold_pickaxe'})
event.remove({id:'minecraft:leather_chestplate'})
event.remove({id:'minecraft:leather_boots'})
event.remove({id:'minecraft:leather_leggings'})
event.remove({id:'minecraft:leather_helmet'})
})
