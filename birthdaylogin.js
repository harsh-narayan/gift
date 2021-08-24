function gethints(){
    document.getElementById("hints").style.display = "block";
    document.getElementById("hintcont").style.display = "none";
}

function closes(){
    document.getElementById("hints").style.display = "none";
    document.getElementById("hintcont").style.display = "block";
}

function login(){
    var uname = document.getElementById("uname").value;
    var pword = document.getElementById("pword").value;

    if(pword === "sat3237679" && uname === "boobies")
    {
        window.location.href="happybirthdayameesha.html";

    }

    else
    {
        if(uname === "boobies")
            window.alert("The username is right. But what is the Password?")

        else if(pword === "sat3237679")
        window.alert("The Password is right. But what is the Username?")

        else
        window.alert("Enter a valid username and password");

    }
}