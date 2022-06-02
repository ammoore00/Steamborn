settings.logAddedRecipes = true;
settings.logRemovedRecipes = true;
settings.logSkippedRecipes = false;
settings.logErroringRecipes = true;

onEvent("block.tags", (event) => {
    // Stop endermen griefing
    event.removeAll("minecraft:enderman_holdable");
  
    // Make netherite blocks wither immune
    event.add("minecraft:wither_immune", "minecraft:netherite_block");
  });