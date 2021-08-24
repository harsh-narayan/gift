function gethints(){
    document.getElementById("hints").style.display = "block";
    document.getElementById("hintcont").style.display = "none";
}

function closes(){
    document.getElementById("hints").style.display = "none";
    document.getElementById("hintcont").style.display = "block";
}

function login(){
    window.location.href="happybirthdayameesha.html";
    var uname = document.getElementById("uname").value;
    var pword = document.getElementById("pword").value;

    if(pword === "sat3237679" && uname === "boobies")
    {

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