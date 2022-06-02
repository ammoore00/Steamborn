settings.logAddedRecipes = true;
settings.logRemovedRecipes = true;
settings.logSkippedRecipes = false;
settings.logErroringRecipes = true;

onEvent("block.tags", (event) => {
    // Add overgrown stone to dirt tag
    event.add("minecraft:dirt", "unearthed:overgrown_granite");
    event.add("minecraft:dirt", "unearthed:overgrown_diorite");
    event.add("minecraft:dirt", "unearthed:overgrown_andesite");
  });