console.log('app startednhjkijukj');

for (let i=0 ; i< 10 ; i++){
    
    // (function(j){
    //     setTimeout(
    //         function () { console.log(j) },
    //         i * 100);     
    // })(i);
    
    setTimeout(
        function () {console.log(i)},
        i * 100);

    console.log(i);
}

console.log('app finished');