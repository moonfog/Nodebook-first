var censoredwords = ["sad","bad","mad"];
var customcensoredwords = [];

function censor (inStr)  {
	for (idx in censoredwords){
		inStr = inStr.replace(censoredwords[idx],"******");
	}
	
	for (idx in customcensoredwords){
		inStr.replace(customcensoredwords[idx],"******");
	}
	
	return inStr;
}

function addCensoredWord(word) {
	customcensoredwords.push(word);
} 

function getCensoredWords(){
	return censoredwords.concat(customcensoredwords);
}

exports.censor = censor;
exports.addCensoredWord = addCensoredWord;
exports.getCensoredWords = getCensoredWords;