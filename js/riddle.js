function submeter(jsonanswer)
{
    /* resposta do usuário */
    var answer = document.getElementById("answer").value.toLowerCase();
    console.log('answer: ' + answer);

    
    /* lógica para determinar o número do riddle atual */
    var currentLevel = window.location.pathname; // absolute path
    
    currentLevel = currentLevel.substring(currentLevel.lastIndexOf('/')+1);
    console.log('currentLevel: ' + currentLevel); // e.g. 1.html
    
    currentLevel = currentLevel.slice(0, currentLevel.length - 5);
    console.log('currentLevel: ' + currentLevel); // e.g. 1

    
    /* Lógica para obter a resposta do módulo atual */
    console.log('JSON object: ' + jsonanswer);
    console.log('JSON answer: ' + jsonanswer.answer);
    
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", "answers.json", false);
    xmlHttp.send();
    console.log('aaaaaaaaaa');
    console.log(xmlHttp.responseText);
    var jsonRead = eval(xmlHttp.responseText);
    console.log(jsonRead);

    // TODO
    if (answer == jsonanswer.answer) {
	var nextLevel = +currentLevel + 1;
	console.log('nextLevel: ' + nextLevel);

	if (nextLevel == 6) {
	    window.location.href = "../won.html";
	    console.log('carreguei won.html');
	}
	else {	
	    var nextPage = nextLevel + ".html";
	    console.log(nextPage);
	    window.location.href = nextPage;
	}

	
    }
    else {
	document.getElementById("status").innerHTML="Você errou! Tente novamente.";
    }
}
