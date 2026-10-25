function checkLogin() {
            
            var correctUser = "admin";
            var correctPass = "1234";
            
            var enteredUser = document.getElementById("username").value;
            var enteredPass = document.getElementById("password").value;

           
            if (enteredUser === correctUser && enteredPass === correctPass) {
                 document.getElementById("result").innerHTML = "Login Successful! ";
                document.getElementById("result").style.color = "green";
            } else {
               document.getElementById("result").innerHTML = "Invalid Username or Password! ";
                document.getElementById("result").style.color = "red";
            }
        }