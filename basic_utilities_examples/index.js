console.log('app startednhjkijukj');
debugger;

console.time('t1');

setTimeout(
    function(){
        console.log('timeout occured');
        console.timeEnd('t1');
    },
    2000
);

console.log('app finished');