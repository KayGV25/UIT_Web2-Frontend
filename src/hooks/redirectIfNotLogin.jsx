export function redirectIfNotLogin(){
    window.onload = function(){
        let username = window.sessionStorage.getItem('username');
        if(username != null ){
            console.log("ok")
        }
        else {
            return window.location.href = "/login";  // Redirect to login page if user is not logged in.
        }
    }
}