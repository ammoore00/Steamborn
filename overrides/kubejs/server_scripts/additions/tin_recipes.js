// Adds recipes and block drops to tin

onEvent('block.loot_tables', (event) => {
    event.addSimpleBlock('kubejs:andesite_tin_ore', 'kubejs:raw_tin');
    event.addSimpleBlock('kubejs:beige_limestone_tin_ore', 'kubejs:raw_tin');
    event.addSimpleBlock('kubejs:conglomerate_tin_ore', 'kubejs:raw_tin');
    event.addSimpleBlock('kubejs:deepslate_tin_ore', 'kubejs:raw_tin');
    event.addSimpleBlock('kubejs:diorite_tin_ore', 'kubejs:raw_tin');
    event.addSimpleBlock('kubejs:gabbro_tin_ore', 'kubejs:raw_tin');
    event.addSimpleBlock('kubejs:granite_tin_ore', 'kubejs:raw_tin');
    event.addSimpleBlock('kubejs:granodiorite_tin_ore', 'kubejs:raw_tin');
    event.addSimpleBlock('kubejs:grey_limestone_tin_ore', 'kubejs:raw_tin');
    event.addSimpleBlock('kubejs:limestone_tin_ore', 'kubejs:raw_tin');
    event.addSimpleBlock('kubejs:mudstone_tin_ore', 'kubejs:raw_tin');
    event.addSimpleBlock('kubejs:phyllite_tin_ore', 'kubejs:raw_tin');
    event.addSimpleBlock('kubejs:rhyolite_tin_ore', 'kubejs:raw_tin');
    event.addSimpleBlock('kubejs:sandstone_tin_ore', 'kubejs:raw_tin');
    event.addSimpleBlock('kubejs:siltstone_tin_ore', 'kubejs:raw_tin');
    event.addSimpleBlock('kubejs:slate_tin_ore', 'kubejs:raw_tin');
    event.addSimpleBlock('kubejs:tin_ore', 'kubejs:raw_tin');
    event.addSimpleBlock('kubejs:white_granite_tin_ore', 'kubejs:raw_tin');
})

onEvent('recipes', (event) => {
    // ------ Processing Recipes ------ //
    event.smelting('kubeJS:tin_nugget', 'kubeJS:raw_tin');
    event.blasting('kubeJS:tin_nugget', 'kubeJS:raw_tin');

    // ------ Compacting Recipes ------ //
    event.shaped('kubejs:tin_ingot', [
        'NNN',
        'NNN',
        'NNN'
    ], {
        N: 'kubejs:tin_nugget'
    });

    event.shapeless('9x kubejs:tin_nugget', 'kubejs:tin_ingot');

    event.shaped('kubejs:raw_tin_block', [
        'RRR',
        'RRR',
        'RRR'
    ], {
        R: 'kubejs:raw_tin'
    });

    event.shapeless('9x kubejs:raw_tin', 'kubejs:raw_tin_block');
})