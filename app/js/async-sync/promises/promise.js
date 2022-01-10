const prom = (val) => {
    return new Promise((resolve, reject) => {
        // run some code
        if (val > 5) {
            return resolve(val);
        } else {
            return reject('Promise Rejected')
        }
    });
}

console.log(prom(7));

const foo = 'bar'

const promThen = new Promise((resolve, reject) => {
    foo === 'bar' ? resolve(foo) : reject('It is not BAR');
});

console.dir(promThen, { depth: null });

const thenRes = promThen.then(res => {
    return Promise.resolve(res)
})

console.log('thenRes', thenRes);