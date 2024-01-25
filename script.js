function reg() {
        let name = document.getElementById("t1").value;
        let surname = document.getElementById("t2").value;
        let country = document.getElementById("sel1").value;
        let date = document.getElementById("sel").value;
        let email = document.getElementById("t3").value;
        let pass = document.getElementById("t4").value;

        let user = {
                userPass: pass,
                userName: name,
                userSname: surname,
                userCountry: country,
                userDate: date
        }
        localStorage.setItem(email, JSON.stringify(user));
        window.location.href = 'signIN.html';
    }


function signIn(){
        let email = document.getElementById("t13").value;
        let pass = document.getElementById("t14").value;
        let storedUser = JSON.parse(localStorage.getItem(email));
        let a1 = storedUser ? storedUser.userPass : null;
        let welcomeText = "Name: " + storedUser.userName;
        console.log(a1);
        if (pass === a1) {
                localStorage.setItem('UN', storedUser.userName)  
                localStorage.setItem('US', storedUser.userSname) 
                localStorage.setItem('UC', storedUser.userCountry) 
                localStorage.setItem('UD', storedUser.userDate) 
                localStorage.setItem('UE', email)       
        
                window.location.href = 'page.html';
        } else {
                console.log("ERROR_01");
        }
}
