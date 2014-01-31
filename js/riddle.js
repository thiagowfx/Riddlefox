function submeter()
{
    /* resposta do usuário */
    var answer = document.getElementById("answer").value.toLowerCase();
    console.log('answer: ' + answer);

    
    /* lógica para determinar o número do riddle atual */
    var currentLevel = window.location.pathname; // absolute path
    currentLevel = currentLevel.substring(currentLevel.lastIndexOf('/')+1);
    currentLevel = currentLevel.slice(0, currentLevel.length - 5);

    /* número do próximo riddle */
    var nextLevel = +currentLevel + 1;

    /* Lógica para obter a resposta do módulo atual */
    // var xmlHttp = new XMLHttpRequest();
    // xmlHttp.open("GET", "answers.json", false);
    // xmlHttp.send();
    // console.log(xmlHttp.responseText);
    
    var answers1 = {
	"0": "",
	"1": ["firefox","mozilla firefox"],
	"2": ["opensuse","suse","suse linux"],
	"3": ["donald knuth","knuth"],
	"4": ["lisp"],
	"5": ["wep"]
    };

    /* Avalia se a resposta do usuário está correta. */
    var jsonAnswer = answers1;
    var answerCorrect = false;
    
    for (i = 0; i < jsonAnswer[currentLevel].length; ++i) {
	if ( answer == jsonAnswer[currentLevel][i] ) {
	    answerCorrect = true;
	    break;
	}
    }

    /* Decide qual ação deverá ser tomada, em relação à resposta do usuário. */
    if (answerCorrect) {
	/* Fases já se esgotaram? */
	if (nextLevel == 6) {
	    window.location.href = "../won.html";
	}
	
	/* Ir para a próxima fase. */
	else {
	    var nextPage = nextLevel + ".html";
	    window.location.href = nextPage;
	}
    }    
    else {
	/* Alerta o usuário sobre sua resposta errada. */
	document.getElementById("status").innerHTML="Você errou! Tente novamente.";
    }
}
