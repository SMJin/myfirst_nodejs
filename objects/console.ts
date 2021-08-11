console.log("HELLO WORLD!");

/* 글로벌(전역) 객체 */
console.log(global);

/* 글로벌(전역) 변수 */
console.log('현재 실행한 파일의 이름 : %s', __filename);
console.log("현재 실행한 파일의 패스 : %s", __dirname);

/* log level */
console.log("console log");         // 개발
console.info("console info");       // 정보
console.warn("console warning");    // 정보
console.error("console error");     // 심각한 에러

console.assert(2 === 3, 'not same!');
console.assert(2 === 2, 'same!');

const student = { name: 'right', age: 26, club: {name : 'yacht', count: {count: 2}} }
console.log(student);
console.table(student);
console.dir(student);
console.dir(student, {showHidden: true, colors: false, depth: 0});
console.dir(student, {showHidden: true, colors: true, depth: 1});
console.dir(student, {showHidden: true, colors: true, depth: 2});

/* measuring time */
console.time('for loop');
for (let i=0; i<100; i++) { }
console.timeEnd('for loop');

    /* counting */
    function a() {
        console.count('a function');
    }
    a();
    a();
    a();
    console.countReset('a function');
    console.log('count reset...');
    a();

    /* trace */
    function f1() {
        f2();
    }
    function f2() {
        f3();
    }
    function f3() {
        console.log('f3');
        console.trace();
    }
    f1();