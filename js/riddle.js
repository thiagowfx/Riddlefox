function submeter() {
    document.getElementById("status").innerHTML="Você errou! Tente novamente.";

    var answer = document.getElementById("answer");
    var currentLevel = window.location.pathname;
    console.log(currentLevel)
    currentLevel = currentLevel.substring(currentLevel.lastIndexOf('/')+1);
    console.log(currentLevel);
    // answer.value
}
