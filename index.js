function fChangeContentTo(sId){
    document.getElementById("content").innerHTML = document.getElementById(sId).innerHTML;
    document.body.getElementsByClassName("chosen")[0].className="";
    document.getElementById(sId + "button").className="chosen";
    }
