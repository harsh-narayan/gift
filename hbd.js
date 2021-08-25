function sub() {
    var plan = document.getElementsByName('plan');
    var mail = document.getElementById("mail").value;
    var p;
    for(var i=0; i<plan.length; ++i){
        if(plan[i].checked)
            p = plan[i].value;
    }


    window.alert("thank you for subscribing to " + p + ". i wil communicate with you through " + mail + " plan. Send a screenshot of this to me on whatsapp to verify the purchase.");
}
