document.onload = document.getElementById("cli").focus();
var cli = document.getElementById("cli");
cli.style.border = "none";
cli.style.padding = "25px";
cli.style.fontSize = "22";
cli.style.width = "100%";
cli.style.maxWidth = "100%";
cli.style.overflow = "hidden";
cli.style.outline = "blue thick solid";

var clidiv = document.getElementById("clidiv");
clidiv.style.width = "50%";
clidiv.style.margin = "auto auto";
clidiv.style.borderRadius = "2px";

document.getElementById("enter").style.display = "none";

var v1 = document.getElementById("view1");
var v2 = document.getElementById("view2");
v1.style.width = "28%";
v1.style.float = "left";
v1.style.height = "75%";
v1.style.padding = "5%";
v2.style.width = "28%";
v2.style.float = "left";
v2.style.height = "75%";
v2.style.padding = "5%";

function run() { 
    var cli = document.getElementById("cli");
    var input = cli.value.split(" ");
    cli.value = "";
    var inp = input[0];
    //console.log(input);
    //document.getElementById("cli").style.outline = "blue thick solid";
    cli.style.outline = "blue thick solid";
    
    var v1 = document.getElementById("view1");
    var v2 = document.getElementById("view2");
    
    switch(inp) {
    
        case "trade": case "t": 
            v1.innerHTML = "hello";
            v2.innerHTML = "Jello"; 
        break;
        default:
            //document.getElementById("cli").style.outline = "red thick solid";
            cli.style.outline = "red thick solid";
    }
}


var CLI = { Iam:"CLI object" };


