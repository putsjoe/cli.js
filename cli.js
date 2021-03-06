document.onload = document.getElementById("cli").focus();

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
    cli.style.outline = "blue thick solid";
    
    var v1 = document.getElementById("view1");
    var v2 = document.getElementById("view2");
    
    switch(inp) {
    
        case "trade": case "t": 
            v1.innerHTML = "hello";
            v2.innerHTML = "Jello"; 
        break;
        default:
            CLI.wrong();
    }
}

function View (id) {
    this.id = id;
    this.init = function() {
        var vw = document.getElementById(this.id);
        vw.style.width = "28%";
        vw.style.float = "left";
        vw.style.height = "75%";
        vw.style.padding = "5%";
        vw.style.border = "orange solid 1px";
    }
}


var view = { Iam:"A View - Used for presenting data", 
        
        init : function() {
            var vw = document.getElementById("");
            vw.style.width = "28%";
            vw.style.float = "left";
            vw.style.height = "75%";
            vw.style.padding = "5%";
        }
    
    };

function CLI (id) {
    this.id = id;
    this.Iam = "The CLI - This is a CLI object"; 
    this.init = function() {
        var cli = document.getElementById("cli");
        cli.style.border = "none";
        cli.style.padding = "25px";
        cli.style.fontSize = "22";
        cli.style.width = "100%";
        cli.style.maxWidth = "100%";
        cli.style.overflow = "hidden";
        cli.style.outline = "blue thick solid";
    }
    this.wrong = function() {
            document.getElementById("cli").style.outline = "red thick solid";
    }
    
}

/*
var CLI = { Iam:"The CLI - This is a CLI object", 
        init : function() {
            var cli = document.getElementById("cli");
            cli.style.border = "none";
            cli.style.padding = "25px";
            cli.style.fontSize = "22";
            cli.style.width = "100%";
            cli.style.maxWidth = "100%";
            cli.style.overflow = "hidden";
            cli.style.outline = "blue thick solid";
        },
        wrong : function () {
            document.getElementById("cli").style.outline = "red thick solid";
        }
    };
*/
    
