var word = "";
var animals = ["dog","cat","mouse","alligator","peacock","cow","platypus","dolphin","freddie"];
var places = ["mars","canada","maine","honolulu","berkeley"];
var pirate = ["arrr","landlubber","matey","ahoy"];
var poet = ["poe","shakespeare"];
var guesses = 6;
var guessedLetters = [];

function startGame(){
    var opt = document.getElementById("option").value;
    if(opt == "Animals"){
        word = animals[Math.floor(Math.random() * animals.length)];
    }else if(opt == "Places"){
        word = places[Math.floor(Math.random() * places.length)];
    }else if(opt == "Pirate Words"){
        word = pirate[Math.floor(Math.random() * pirate.length)];
    }else if(opt == "Dead Poets"){
        word = poet[Math.floor(Math.random() * poet.length)];
    }
    var blank = "";
    for(var i = 0; i < word.length; i++){
        blank += "_ ";
    }
    document.getElementById("word").innerHTML = blank;
    /*word = "";
    guesses = 6;
    guessedLetters = [];*/
}

function printWord(){
    var newWord = "";
    for(var i = 0; i < word.length; i++){
        if(guessedLetters.indexOf(word[i]) > -1){
            newWord += word[i] + " ";
        }else{
            newWord += "_ ";
        }
    }
    return newWord;
}

function guessLetter(letter){
    if(word.indexOf(letter) == -1){
        guesses--;
    }
    if(guesses > 0){
        guessedLetters += letter;
        var answer = printWord();
        document.getElementById("word").innerHTML = answer;
        if(answer.indexOf("_ ") == -1){
            document.getElementById("end").innerHTML = "You Win!"
        }
    }else{
        document.getElementById("word").innerHTML = word;
        document.getElementById("end").innerHTML = "Game Over";
    }
}