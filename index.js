/**
 * index.js
 */
const logSomething = options => ({
    ...options,
    anotherOption: 'Hello Jack!',
});

const options = logSomething({ one: '1', two: '2' });
console.log(options);
