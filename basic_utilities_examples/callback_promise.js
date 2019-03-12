// ajax -> server -> response

//search bar

// ---- CALLBACK HELL
//SAMSUNG query 
//request S, SA, SAM, SAMS
//server response may not be in the same order

// solved using promises

const ajaxWithPromise = () => {
    return new Promise(
        function(resolve,reject){
            setTimeout(
                function () {
                    resolve('call succeeds');
                }, 2000
            );
        
            setTimeout(
                function () {
                    reject('call fails');
                }, 5000
            );
        }
    )
}

// ajaxWithPromise().then(
//     function(data) { console.log('success->',data)}
// ).catch(
//     function(error) { console.log('failure->',error)}
// );

ajaxWithPromise().then(
    (data) => { console.log('success->',data)}
).catch(
    (error) => { console.log('failure->',error)}
);