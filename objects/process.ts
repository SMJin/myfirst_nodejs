console.log("argv 속성의 파라미터 수 : " + process.argv.length);
console.log(process.argv);

if (process.argv.length > 2) {
    console.log('세 번째 파라미터 값 : ' + process.argv[2]);
}

process.argv.forEach((item, index) => {
    console.log(index + " : " + item);
});

console.log('OS 환경 변수의 값 : ' + process.env['OS']);

setTimeout(() => {
    console.log('setTimeout');
}, 0);

process.nextTick(() => {
    console.log('nextTick');
});

for (let i=0; i<5; i++) {
    console.log('for loop');
}

const os = require('os');

console.log(os.EOL === '\n');
console.log('if true, you are mac');
console.log(os.EOL === '\r\n');
console.log('if true, you are window');

console.log(os.totalmem());
console.log(os.freemem());
console.log(os.type());
console.log(os.userInfo());
console.log(os.homedir());
console.log(os.hostname());