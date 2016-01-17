function run() { 
    var cli = document.getElementById("cli");
    var input = cli.value.split(" ");
    cli.value = "";
    var inp = input[0];
    //console.log(input);
    document.getElementById("cli").style.outline = "blue thick solid";
    
    switch(inp) {
    
    case "trade": case "t": trade(); break;
    case "help": case "?": help(); break;;
    case "buy":
        if (input[1] && input[2]) { 
            console.log("Both present");
            firstin = input[1];
            secin = input[2];
            buyer(firstin,secin);
        }
        else {  buyhelp();  }
    break;;
    case "sell":
        if (input[1] && input[2]) { 
            console.log("Both present");
            firstin = input[1];
            secin = input[2];
            seller(firstin,secin);
        }
        else {  sellhelp();  }
    break;;
    case "credit": credit(); break;;
    case "play": play(input[1]); break;;
    case "seed": showbtm(localStorage.getItem("seed")); break;;
    case "oven": case "o": oven(); break;;
    case "move": move(); break;;
    default:
        document.getElementById("cli").style.outline = "red thick solid";
      break;;
    }
}

