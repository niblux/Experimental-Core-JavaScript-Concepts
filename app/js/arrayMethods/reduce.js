const pokemon = [
    { name: "charmander", type: "fire" },
    { name: "squirtle", type: "water" },
    { name: "bulbasaur", type: "grass" }
];

const reduceItUp = (poke) => {
    console.log(Object.prototype.toString.call(poke));
    // poke.reduce((acc, { k, v }) => {
    //     // console.log('val', val);
    //     console.log('k', k.name);
    //     console.log('v', v.type);
    //     console.log('acc', acc);
    // }, [])

    // poke.reduce((acc, [k, v]) => {
    //     acc.item.push({ name: k, item: v });
    //     return acc;
    // }, []);
}

console.log(reduceItUp(pokemon));
