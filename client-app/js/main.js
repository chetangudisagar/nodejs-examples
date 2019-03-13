const baseUrl = 'http://localhost:3000';

const getAllEmployee = () => {
    $.getJSON(`${baseUrl}/employee`).then(
        (data) => {
            console.log(data);
        }
    ).catch(
        err => console.log(err)
    );
}

const userLogin = (user) => {
    $.post(`${baseUrl}/login`,user).then(
        data => {
            console.log(data);
            if(data.access_token) {
                localStorage.setItem('token',data.access_token);
                alert('success!! your token is - ' + token);
            } else {
                alert('invalid login');
            }
        }
    ).catch(
        err => console.log(data)
    );    
}

$(document).ready(function(){
    $('form').submit(function(e){
        e.preventDefault();
        console.log($(this).serialize());
        userLogin($(this).serialize());
    })
});