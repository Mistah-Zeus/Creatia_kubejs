
    /**
     * 1. Argument: The top ingredient of the brewing stand
     * 2. Argument: The bottom ingredient of the brewing stand
     * 3. Argument: The result of the brewing
     */

MoreJS.registerPotionBrewing(event => {

//base potions
    event.addCustomBrewing(
        "confluence:blinkroot",
        Ingredient.customNBT("minecraft:potion", (nbt) => {
            return nbt.contains("Potion") && nbt.Potion == "minecraft:water";
        }),
        Item.of("minecraft:potion", { Potion: "kubejs:blinkroot_infused" }) // This is a custom made potion. It's not vanilla
    );
    event.addCustomBrewing(
            "confluence:daybloom",
            Ingredient.customNBT("minecraft:potion", (nbt) => {
                return nbt.contains("Potion") && nbt.Potion == "minecraft:water";
            }),
            Item.of("minecraft:potion", { Potion: "kubejs:daybloom_infused" }) // This is a custom made potion. It's not vanilla
        );
    event.addCustomBrewing(
        "confluence:shiverthorn",
        Ingredient.customNBT("minecraft:potion", (nbt) => {
            return nbt.contains("Potion") && nbt.Potion == "minecraft:water";
        }),
        Item.of("minecraft:potion", { Potion: "kubejs:shiverthorn_infused" }) // This is a custom made potion. It's not vanilla
    );
event.addCustomBrewing(
        "confluence:fireblossom",
        Ingredient.customNBT("minecraft:potion", (nbt) => {
            return nbt.contains("Potion") && nbt.Potion == "minecraft:water";
        }),
        Item.of("minecraft:potion", { Potion: "kubejs:firebossom_infused" }) // This is a custom made potion. It's not vanilla
    );
event.addCustomBrewing(
        "confluence:deathweed",
        Ingredient.customNBT("minecraft:potion", (nbt) => {
            return nbt.contains("Potion") && nbt.Potion == "minecraft:water";
        }),
        Item.of("minecraft:potion", { Potion: "kubejs:deathweed_infused" }) // This is a custom made potion. It's not vanilla
    );
event.addCustomBrewing(
        "confluence:moonglow",
        Ingredient.customNBT("minecraft:potion", (nbt) => {
            return nbt.contains("Potion") && nbt.Potion == "minecraft:water";
        }),
        Item.of("minecraft:potion", { Potion: "kubejs:moonglow_infused" }) // This is a custom made potion. It's not vanilla
    );
event.addCustomBrewing(
        "confluence:waterleaf",
        Ingredient.customNBT("minecraft:potion", (nbt) => {
            return nbt.contains("Potion") && nbt.Potion == "minecraft:water";
        }),
        Item.of("minecraft:potion", { Potion: "kubejs:waterleaf_infused" }) // This is a custom made potion. It's not vanilla
    );

//fire+blink+moon
event.addCustomBrewing(
        "confluence:fireblossom",
        Ingredient.customNBT("minecraft:potion", (nbt) => {
            return nbt.contains("Potion") && nbt.Potion == "kubejs:blinkroot_moonglow_infused";
        }),
        Item.of("minecraft:potion", { Potion: "kubejs:fireblossom_blinkroot_moonglow_infused" }) // This is a custom made potion. It's not vanilla
    );
event.addCustomBrewing(
        "confluence:moonglow",
        Ingredient.customNBT("minecraft:potion", (nbt) => {
            return nbt.contains("Potion") && nbt.Potion == "kubejs:firblossom_blinkroot_infused";
        }),
        Item.of("minecraft:potion", { Potion: "kubejs:fireblossom_blinkroot_moonglow_infused" }) // This is a custom made potion. It's not vanilla
    );
event.addCustomBrewing(
        "confluence:fireblossom",
        Ingredient.customNBT("minecraft:potion", (nbt) => {
            return nbt.contains("Potion") && nbt.Potion == "kubejs:blinkroot_infused";
        }),
        Item.of("minecraft:potion", { Potion: "kubejs:fireblossom_blinkroot_infused" }) // This is a custom made potion. It's not vanilla
    );
event.addCustomBrewing(
        "confluence:moonglow",
        Ingredient.customNBT("minecraft:potion", (nbt) => {
            return nbt.contains("Potion") && nbt.Potion == "kubejs:blinkroot_infused";
        }),
        Item.of("minecraft:potion", { Potion: "kubejs:blinkroot_moonglow_infused" }) // This is a custom made potion. It's not vanilla
    );
event.addCustomBrewing(
        "confluence:fireblossom",
        Ingredient.customNBT("minecraft:potion", (nbt) => {
            return nbt.contains("Potion") && nbt.Potion == "kubejs:moonglow_infused";
        }),
        Item.of("minecraft:potion", { Potion: "kubejs:fireblossom_moonglow_infused" }) // This is a custom made potion. It's not vanilla
    );
event.addCustomBrewing(
        "confluence:moonglow",
        Ingredient.customNBT("minecraft:potion", (nbt) => {
            return nbt.contains("Potion") && nbt.Potion == "kubejs:fireblossom_infused";
        }),
        Item.of("minecraft:potion", { Potion: "kubejs:fireblossom_moonglow_infused" }) // This is a custom made potion. It's not vanilla
    );
event.addCustomBrewing(
        "confluence:blinkroot",
        Ingredient.customNBT("minecraft:potion", (nbt) => {
            return nbt.contains("Potion") && nbt.Potion == "kubejs:firebloosom_moonglow_infused";
        }),
        Item.of("minecraft:potion", { Potion: "kubejs:fireblossom_blinkroot_moonglow_infused" }) // This is a custom made potion. It's not vanilla
    );

//fire+death+blink
event.addCustomBrewing(
        "confluence:deathweed",
        Ingredient.customNBT("minecraft:potion", (nbt) => {
            return nbt.contains("Potion") && nbt.Potion == "kubejs:fireblossom_blinkroot_infused";
        }),
        Item.of("minecraft:potion", { Potion: "kubejs:_deathweed_fireblossom_blinkroot_infused" }) // This is a custom made potion. It's not vanilla
    );
//fire+blink
event.addCustomBrewing(
        "confluence:fireblossom",
        Ingredient.customNBT("minecraft:potion", (nbt) => {
            return nbt.contains("Potion") && nbt.Potion == "kubejs:blinkroot_infused";
        }),
        Item.of("minecraft:potion", { Potion: "kubejs:fireblossom_blinkroot_infused" }) // This is a custom made potion. It's not vanilla
    );
event.addCustomBrewing(
        "confluence:blinkroot",
        Ingredient.customNBT("minecraft:potion", (nbt) => {
            return nbt.contains("Potion") && nbt.Potion == "kubejs:blinkroot_infused";
        }),
        Item.of("minecraft:potion", { Potion: "kubejs:fireblossom_blinkroot_infused" }) // This is a custom made potion. It's not vanilla
    );
//fire+water
event.addCustomBrewing(
        "confluence:waterleaf",
        Ingredient.customNBT("minecraft:potion", (nbt) => {
            return nbt.contains("Potion") && nbt.Potion == "kubejs:fireblossom_infused";
        }),
        Item.of("minecraft:potion", { Potion: "kubejs:waterleaf_fireblossom_infused" }) // This is a custom made potion. It's not vanilla
    );
event.addCustomBrewing(
        "confluence:fireblossom",
        Ingredient.customNBT("minecraft:potion", (nbt) => {
            return nbt.contains("Potion") && nbt.Potion == "kubejs:watherleaf_infused";
        }),
        Item.of("minecraft:potion", { Potion: "kubejs:waterleaf_fireblossom_infused" }) // This is a custom made potion. It's not vanilla
    );
//blink+shiver+moon
event.addCustomBrewing(
        "confluence:shiverthorn",
        Ingredient.customNBT("minecraft:potion", (nbt) => {
            return nbt.contains("Potion") && nbt.Potion == "kubejs:blinkroot_moonglow_infused";
        }),
        Item.of("minecraft:potion", { Potion: "kubejs:shiverthorn_blinkroot_moonglow_infused" }) // This is a custom made potion. It's not vanilla
    );
event.addCustomBrewing(
        "confluence:blinkroot",
        Ingredient.customNBT("minecraft:potion", (nbt) => {
            return nbt.contains("Potion") && nbt.Potion == "kubejs:shiverthorn_moonglow_infused";
        }),
        Item.of("minecraft:potion", { Potion: "kubejs:shiverthorn_blinkroot_moonglow_infused" }) // This is a custom made potion. It's not vanilla
    );
event.addCustomBrewing(
        "confluence:shiverthorn",
        Ingredient.customNBT("minecraft:potion", (nbt) => {
            return nbt.contains("Potion") && nbt.Potion == "kubejs:blinkroot_infused";
        }),
        Item.of("minecraft:potion", { Potion: "kubejs:shiverthorn_blinkroot_infused" }) // This is a custom made potion. It's not vanilla
    );
event.addCustomBrewing(
        "confluence:blinkroot",
        Ingredient.customNBT("minecraft:potion", (nbt) => {
            return nbt.contains("Potion") && nbt.Potion == "kubejs:shiverthorn_infused";
        }),
        Item.of("minecraft:potion", { Potion: "kubejs:shiverthorn_blinkroot_infused" }) // This is a custom made potion. It's not vanilla
    );
event.addCustomBrewing(
        "confluence:shiverthorn",
        Ingredient.customNBT("minecraft:potion", (nbt) => {
            return nbt.contains("Potion") && nbt.Potion == "kubejs:blinkroot_moonglow_infused";
        }),
        Item.of("minecraft:potion", { Potion: "kubejs:shiverthorn_blinkroot_moonglow_infused" }) // This is a custom made potion. It's not vanilla
    );
event.addCustomBrewing(
        "confluence:moonglow",
        Ingredient.customNBT("minecraft:potion", (nbt) => {
            return nbt.contains("Potion") && nbt.Potion == "kubejs:shiverthorn_blinkroot_infused";
        }),
        Item.of("minecraft:potion", { Potion: "kubejs:shiverthorn_blinkroot_moonglow_infused" }) // This is a custom made potion. It's not vanilla
    );

//moon+shiver+water
event.addCustomBrewing(
        "confluence:moonglow",
        Ingredient.customNBT("minecraft:potion", (nbt) => {
            return nbt.contains("Potion") && nbt.Potion == "kubejs:waterleaf_shiverthorn_infused";
        }),
        Item.of("minecraft:potion", { Potion: "kubejs:moonglow_waterleaf_shiverthron_infused" }) // This is a custom made potion. It's not vanilla
    );//end product
event.addCustomBrewing(
        "confluence:moonglow",
        Ingredient.customNBT("minecraft:potion", (nbt) => {
            return nbt.contains("Potion") && nbt.Potion == "kubejs:waterleaf_infused";
        }),
        Item.of("minecraft:potion", { Potion: "kubejs:waterleaf_moonglow_infused" }) // This is a custom made potion. It's not vanilla
    );
event.addCustomBrewing(
        "confluence:waterleaf",
        Ingredient.customNBT("minecraft:potion", (nbt) => {
            return nbt.contains("Potion") && nbt.Potion == "kubejs:moonglow_infused";
        }),
        Item.of("minecraft:potion", { Potion: "kubejs:waterleaf_moonglow_infused" }) // This is a custom made potion. It's not vanilla
    );
event.addCustomBrewing(
        "confluence:shiverthorn",
        Ingredient.customNBT("minecraft:potion", (nbt) => {
            return nbt.contains("Potion") && nbt.Potion == "kubejs:waterleaf_moonglow_infused";
        }),
        Item.of("minecraft:potion", { Potion: "kubejs:moonglow_waterleaf_shiverthron_infused" }) // This is a custom made potion. It's not vanilla
    );
event.addCustomBrewing(
        "confluence:moonglow",
        Ingredient.customNBT("minecraft:potion", (nbt) => {
            return nbt.contains("Potion") && nbt.Potion == "kubejs:shivethorninfused";
        }),
        Item.of("minecraft:potion", { Potion: "kubejs:shiverthorn_moonglow_infused" }) // This is a custom made potion. It's not vanilla
    );
event.addCustomBrewing(
        "confluence:shiverthorn",
        Ingredient.customNBT("minecraft:potion", (nbt) => {
            return nbt.contains("Potion") && nbt.Potion == "kubejs:moonglow_infused";
        }),
        Item.of("minecraft:potion", { Potion: "kubejs:shiverthorn_moonglow_infused" }) // This is a custom made potion. It's not vanilla
    );
event.addCustomBrewing(
        "confluence:waterleaf",
        Ingredient.customNBT("minecraft:potion", (nbt) => {
            return nbt.contains("Potion") && nbt.Potion == "kubejs:shiverthorn_moonglow_infused";
        }),
        Item.of("minecraft:potion", { Potion: "kubejs:moonglow_waterleaf_shiverthron_infused" }) // This is a custom made potion. It's not vanilla
    );
//day+blink
event.addCustomBrewing(
        "confluence:blinkroot",
        Ingredient.customNBT("minecraft:potion", (nbt) => {
            return nbt.contains("Potion") && nbt.Potion == "kubejs:daybloom_infused";
        }),
        Item.of("minecraft:potion", { Potion: "kubejs:blinkroot_daybloom_infused" }) // This is a custom made potion. It's not vanilla
    );
event.addCustomBrewing(
        "confluence:daybloom",
        Ingredient.customNBT("minecraft:potion", (nbt) => {
            return nbt.contains("Potion") && nbt.Potion == "kubejs:blinkroot_infused";
        }),
        Item.of("minecraft:potion", { Potion: "kubejs:blinkroot_daybloom_infused" }) // This is a custom made potion. It's not vanilla
    );
//shiver+water
event.addCustomBrewing(
        "confluence:waterleaf",
        Ingredient.customNBT("minecraft:potion", (nbt) => {
            return nbt.contains("Potion") && nbt.Potion == "kubejs:shiverthorn_infused";
        }),
        Item.of("minecraft:potion", { Potion: "kubejs:waterleaf_shiverthron_infused" }) // This is a custom made potion. It's not vanilla
    );
event.addCustomBrewing(
        "confluence:shiverthorn",
        Ingredient.customNBT("minecraft:potion", (nbt) => {
            return nbt.contains("Potion") && nbt.Potion == "kubejs:waterleaf_infused";
        }),
        Item.of("minecraft:potion", { Potion: "kubejs:waterleaf_shiverthorn_infused" }) // This is a custom made potion. It's not vanilla
    );
//death+shiver
event.addCustomBrewing(
        "confluence:deathweed",
        Ingredient.customNBT("minecraft:potion", (nbt) => {
            return nbt.contains("Potion") && nbt.Potion == "kubejs:shiverthorn_infused";
        }),
        Item.of("minecraft:potion", { Potion: "kubejs:deathweed_shiverthron_infused" }) // This is a custom made potion. It's not vanilla
    );
event.addCustomBrewing(
        "confluence:shiverthorn",
        Ingredient.customNBT("minecraft:potion", (nbt) => {
            return nbt.contains("Potion") && nbt.Potion == "kubejs:deathweed_infused";
        }),
        Item.of("minecraft:potion", { Potion: "kubejs:deathweed_shiverthorn_infused" }) // This is a custom made potion. It's not vanilla
    );
//blink+moon
event.addCustomBrewing(
        "confluence:blinkroot",
        Ingredient.customNBT("minecraft:potion", (nbt) => {
            return nbt.contains("Potion") && nbt.Potion == "kubejs:moonglow_infused";
        }),
        Item.of("minecraft:potion", { Potion: "kubejs:blinkroot_moonglow_infused" }) // This is a custom made potion. It's not vanilla
    );
event.addCustomBrewing(
        "confluence:moonglow",
        Ingredient.customNBT("minecraft:potion", (nbt) => {
            return nbt.contains("Potion") && nbt.Potion == "kubejs:blinkroot_infused";
        }),
        Item.of("minecraft:potion", { Potion: "kubejs::blinkroot_moonglow_infused" }) // This is a custom made potion. It's not vanilla
    );
//moon+death
event.addCustomBrewing(
        "confluence:moonglow",
        Ingredient.customNBT("minecraft:potion", (nbt) => {
            return nbt.contains("Potion") && nbt.Potion == "kubejs:deathweed_infused";
        }),
        Item.of("minecraft:potion", { Potion: "kubejs:moonglow_deathweed_infused" }) // This is a custom made potion. It's not vanilla
    );
event.addCustomBrewing(
        "confluence:deathweed",
        Ingredient.customNBT("minecraft:potion", (nbt) => {
            return nbt.contains("Potion") && nbt.Potion == "kubejs:moonglow_infused";
        }),
        Item.of("minecraft:potion", { Potion: "kubejs:moonglow_deathweed_infused" }) // This is a custom made potion. It's not vanilla
    );
//moon+day
event.addCustomBrewing(
        "confluence:moonglow",
        Ingredient.customNBT("minecraft:potion", (nbt) => {
            return nbt.contains("Potion") && nbt.Potion == "kubejs:daybloom_infused";
        }),
        Item.of("minecraft:potion", { Potion: "kubejs:moonglow_daybloom_infused" }) // This is a custom made potion. It's not vanilla
    );
event.addCustomBrewing(
        "confluence:daybloom",
        Ingredient.customNBT("minecraft:potion", (nbt) => {
            return nbt.contains("Potion") && nbt.Potion == "kubejs:moonglow_infused";
        }),
        Item.of("minecraft:potion", { Potion: "kubejs:moonglow_daybloom_infused" }) // This is a custom made potion. It's not vanilla
    );
});