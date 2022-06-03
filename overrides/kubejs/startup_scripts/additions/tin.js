// Adds tin
// Ore, Raw, Raw Block, Crushed, Nugget, Ingot, Sheet, Block

onEvent('block.registry', function (event) {
    event.create('andesite_tin_ore').material('stone').hardness('3').tagBlock('minecraft:mineable/pickaxe');
    event.create('beige_limestone_tin_ore').material('stone').hardness('3').tagBlock('minecraft:mineable/pickaxe');
    event.create('conglomerate_tin_ore').material('stone').hardness('3').tagBlock('minecraft:mineable/pickaxe');
    event.create('deepslate_tin_ore').material('stone').hardness('3').tagBlock('minecraft:mineable/pickaxe');
    event.create('diorite_tin_ore').material('stone').hardness('3').tagBlock('minecraft:mineable/pickaxe');
    event.create('gabbro_tin_ore').material('stone').hardness('3').tagBlock('minecraft:mineable/pickaxe');
    event.create('granite_tin_ore').material('stone').hardness('3').tagBlock('minecraft:mineable/pickaxe');
    event.create('granodiorite_tin_ore').material('stone').hardness('3').tagBlock('minecraft:mineable/pickaxe');
    event.create('grey_limestone_tin_ore').material('stone').hardness('3').tagBlock('minecraft:mineable/pickaxe');
    event.create('limestone_tin_ore').material('stone').hardness('3').tagBlock('minecraft:mineable/pickaxe');
    event.create('mudstone_tin_ore').material('stone').hardness('3').tagBlock('minecraft:mineable/pickaxe');
    event.create('phyllite_tin_ore').material('stone').hardness('3').tagBlock('minecraft:mineable/pickaxe');
    event.create('rhyolite_tin_ore').material('stone').hardness('3').tagBlock('minecraft:mineable/pickaxe');
    event.create('sandstone_tin_ore').material('stone').hardness('3').tagBlock('minecraft:mineable/pickaxe');
    event.create('siltstone_tin_ore').material('stone').hardness('3').tagBlock('minecraft:mineable/pickaxe');
    event.create('slate_tin_ore').material('stone').hardness('3').tagBlock('minecraft:mineable/pickaxe');
    event.create('tin_ore').material('stone').hardness('3').tagBlock('minecraft:mineable/pickaxe');
    event.create('white_granite_tin_ore').material('stone').hardness('3').tagBlock('minecraft:mineable/pickaxe');

    event.create('raw_tin_block').material('stone').hardness('5').displayName('Block of Raw Tin').tagBlock('minecraft:mineable/pickaxe');
})

onEvent('item.registry', function (event) {
    event.create('raw_tin');
    event.create('crushed_tin_ore');
    event.create('tin_ingot');
    event.create('tin_nugget');
    event.create('tin_sheet');
})