/***********************************************************
************************************************************
*****************Dice Roller Module*************************
************************************************************
***********************************************************/

exports.roll = (args) => {

  if(args.includes("d")){
    var num = parseInt(args.substring(0,args.indexOf("d")));
    if(!(num > 0)){
      num = 1;
    }if (num > 1000){
      return "nothing, because you're just trying to break it. Ziether and GoPlayer7 ruined that for everyone.";
    }
    var rawVal = args.substring(0,args.indexOf("d"));
    var plus = 0;

    if(args.indexOf("+") > -1){

      var high = args.substring(args.indexOf("d")+1);
      high = parseInt(high.substring(0,high.indexOf("+")));
      plus = parseInt(args.substring(args.indexOf("+")));

    }else{

      var high = parseInt(args.substring(args.indexOf("d")+1));

    }

    low = 1;
    var result = 0;

    for(i = 0; i < num; i++){

      result += Math.floor(Math.random() * (high - low + 1) + low);

    }
    result += plus;

    return result;
  }else{
    var success = 0
    var advantage = 0
    var triumph = 0
    var despair = 0
    for(var i = 0; i < args.length; i++){
      switch(args[i]){
        case "b":
          r = Math.floor(Math.random() * 6) + 1
          switch(r){
            case 1:
              break;
            case 2:
              break;
            case 3:
              success++
              break;
            case 4:
              success++
              advantage++
              break;
            case 5:
              advantage += 2
              break;
            case 6:
              advantage++
              break;
            default:
              print("Die roller got weird, blue")
          }
          break;
        case "k":
          r = Math.floor(Math.random() * 6) + 1
          switch(r){
            case 1:
              break;
            case 2:
              break;
            case 3:
              success--
              break;
            case 4:
              success--
              break;
            case 5:
              advantage--
              break;
            case 6:
              advantage--
              break;
            default:
              print("Die roller got weird, black")
          }
          break;
        case "g":
          r = Math.floor(Math.random() * 6) + 1
          switch(r){
            case 1:
              break;
            case 2:
              success++
              break;
            case 3:
              success++
              break;
            case 4:
              success += 2
              break;
            case 5:
              advantage++
              break;
            case 6:
              advantage++
              break;
            case 7:
              success++
              advantage++
              break;
            case 8:
              advantage += 2
              break;
            default:
              print("Die roller got weird, green")
          }
          break;
        case "p":
          r = Math.floor(Math.random() * 6) + 1
          switch(r){
            case 1:
              break;
            case 2:
              success--
              break;
            case 3:
              success -= 2
              break;
            case 4:
              advantage--
              break;
            case 5:
              advantage--
              break;
            case 6:
              advantage--
              break;
            case 7:
              advantage -= 2
              break;
            case 8:
              success--
              advantage--
              break;
            default:
              print("Die roller got weird, purple")
          }
          break;
        case "y":
          r = Math.floor(Math.random() * 6) + 1
          switch(r){
            case 1:
              break;
            case 2:
              success++
              break;
            case 3:
              success++
              break;
            case 4:
              success += 2
              break;
            case 5:
              success += 2
              break;
            case 6:
              advantage++
              break;
            case 7:
              success++
              advantage++
              break;
            case 8:
              success++
              advantage++
              break;
            case 9:
              success++
              advantage++
              break;
            case 10:
              advantage += 2
              break;
            case 11:
              advantage += 2
              break;
            case 12:
              success++
              triumph++
              break;
            default:
              print("Die roller got weird, yellow")
          }
          break;
        case "r":
          r = Math.floor(Math.random() * 6) + 1
          switch(r){
            case 1:
              break;
            case 2:
              success--
              break;
            case 3:
              success--
              break;
            case 4:
              success -= 2
              break;
            case 5:
              success -= 2
              break;
            case 6:
              advantage--
              break;
            case 7:
              advantage--
              break;
            case 8:
              success--
              advantage--
              break;
            case 9:
              success--
              advantage--
              break;
            case 10:
              advantage -= 2
              break;
            case 11:
              advantage -= 2
              break;
            case 12:
              success--
              despair++
              break;
            default:
              print("Die roller got weird, red")
          }
          break;
        default:

      }
    }
  }
}

exports.choose = (args) => {

  var choices = args.split(",");

  if(choices.length > 0){
    var ran = Math.floor(Math.random() * choices.length);

    var output = "You asked me to choose between ";
    for (var i = 0; i < choices.length; i++){
      if(i === choices.length-1){

        output += " and " + choices[i].trim();

      }else{

        output += choices[i].trim() + ", ";

      }
    }

    output += ", and I choose " + choices[ran].trim() + ".";

    return output;

  }else{
    return "You asked me to choose between nothing, and I choose nothing because you gave me nothing.";
  }
}
