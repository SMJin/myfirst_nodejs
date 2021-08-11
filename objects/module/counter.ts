let counter = 0;

function increase() {
    counter ++;
}

function getCount() {
    return counter;
}

module.exports.increase = increase;
module.exports.getCount = getCount;

// console.log(module);