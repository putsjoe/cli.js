function run() { 
    var cli = document.getElementById("cli");
    var input = cli.value.split(" ");
    cli.value = "";
    var inp = input[0];
    //console.log(input);
    document.getElementById("cli").style.outline = "blue thick solid";
    
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

