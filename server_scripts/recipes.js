//Visit the wiki for more info - https://kubejs.com/

ServerEvents.recipes(event => {
event.recipes.create.mixing([Fluid.of('minecraft:water'), 'minecraft:dead_bush'], ['#minecraft:saplings', '#minecraft:saplings'])





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
