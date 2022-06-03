// Adds tin
// Ore, Raw, Raw Block, Crushed, Nugget, Ingot, Sheet, Block

events.listen('block.registry', function (event) {
    event.create('tin_ore')
        .material('stone')
        .hardness('3')
})