/***********************************************************
************************************************************
*****************Zug Facts Module***************************
************************************************************
***********************************************************/

var fs = require('fs');

var filepath = "./zugfacts.txt";

exports.addZugFacts = (isStaff, id, fact)=> {
	if(isStaff || id === "211484197938921472" /*Zug*/ || id === "213060666016137217" /*Beez*/ || id === "211505620224966656" /*TLN*/){
		try{
			var output = fact.trim() + "\r\n";
			fs.appendFile(filepath, output, function(err){
			//bot.sendMessage(message, messages);
			});
			return "Zug fact approved.";
		}catch(e){
			return e + " Please contact Beez.";
		}
	}else{
		return "You don't have permission to do that.";
	}
}

exports.getZugFact = () => {
	try{
		var contents = fs.readFileSync(filepath, 'utf8');
		var facts = contents.split('\r\n');

		var numZugFacts = facts.length - 1;

		var ran = Math.floor(Math.random() * numZugFacts);
		return facts[ran];
	}catch(e){
		return e + " Please contact DreaM.";
	}
}
