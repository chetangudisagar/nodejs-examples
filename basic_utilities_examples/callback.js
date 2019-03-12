// ajax -> server -> response

//search bar

// ---- CALLBACK HELL
//SAMSUNG query 
//request S, SA, SAM, SAMS
//server response may not be in the same order

// solved using promises

function ajaxWithCallBack(success, fail){
    setTimeout(
        function () {
            success('call succeeds');
        }, 2000
    );

    setTimeout(
        function () {
            fail('call fails');
        }, 5000
    );
}

ajaxWithCallBack(
    function(data) { console.log('success->',data)},
    function(error) { console.log('failure->',error)},
)