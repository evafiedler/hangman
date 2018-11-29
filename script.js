var word = "";
var animals = ["dog","cat","mouse","alligator","peacock","cow","platypus","dolphin","freddie","squirrel","centipede","leopard","giraffe"];
var places = ["mars","canada","maine","honolulu","berkeley","babylon","kazakhstan","zimbabwe","oslo","constantinople","sumeria","persia"];
var poet = ["poe","shakespeare","frost","brooks","dickinson","angelou","hughes","silverstein","wilde","eliot","stevenson"];
var religion = ["zoroastrianism","christianity","judaism","islam","jainism","buddhism","hinduism","shinto","mazdakism","asatru"];
var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var guesses = 6;
var guessedLetters = "";
var wrongLetters = "";

function setUp(){
    for(var i = 0; i < alphabet.length; i++){
        var button = document.createElement("button");
        button.innerHTML = alphabet[i].toUpperCase();
        button.setAttribute("id", alphabet[i]);
        button.setAttribute("class", "w3-button w3-dark-grey");
        button.setAttribute("onClick", "guessLetter(this.id)");
        document.getElementById("buttonDiv").appendChild(button);
    }
}

function startGame(){
    word = "";
    guesses = 6;
    guessedLetters = "";
    wrongLetters = "";
    document.getElementById("guessedLetters").innerHTML = "";
    document.getElementById("end").innerHTML = "";
    document.getElementById("wrong").innerHTML = "";
    for(var a = 0; a < alphabet.length; a++){
        document.getElementById(alphabet[a]).disabled = false;
    }

    var opt = document.getElementById("option").value;
    if(opt === "Choose a Category"){
        alert("Please choose a category before continuing");
    }else{
        if(opt === "Animals"){
            word = animals[Math.floor(Math.random() * animals.length)];
        }else if(opt === "Places"){
            word = places[Math.floor(Math.random() * places.length)];
        }else if(opt === "Religions"){
            word = religion[Math.floor(Math.random() * religion.length)];
        }else if(opt === "Dead Poets"){
            word = poet[Math.floor(Math.random() * poet.length)];
        }

        var blank = "";
        for(var i = 0; i < word.length; i++){
            blank += "_ ";
        }

        document.getElementById("word").innerHTML = blank;
        document.getElementById("guesses").innerHTML = "Guesses Left: " + guesses;
        document.getElementById("picture").src = "images/gallow.PNG";
    }

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
    var opt = document.getElementById("option").value;
    if(opt === "Choose a Category"){
        alert("Please choose a category before continuing");
    }else{
        if(word.indexOf(letter) === -1){
            guesses--;
            document.getElementById("picture").src = "images/h" + guesses + ".PNG";
            wrongLetters += letter;
            document.getElementById("wrong").innerHTML = "Incorrect Guesses:";
            document.getElementById("guessedLetters").innerHTML = wrongLetters;
        }

        document.getElementById(letter).disabled = true;
        document.getElementById("guesses").innerHTML = "Guesses Left: " + guesses;


        if(guesses > 0){
            guessedLetters += letter;
            var answer = printWord();
            document.getElementById("word").innerHTML = answer;
            if(answer.indexOf("_ ") === -1){
                document.getElementById("end").innerHTML = "You Win!";
                document.getElementById("end").style.color = "Green";
                for(var i = 0; i < alphabet.length; i++){
                    document.getElementById(alphabet[i]).disabled = true;
                }
            }
        }else{
            document.getElementById("word").innerHTML = word;
            document.getElementById("end").innerHTML = "Game Over";
            document.getElementById("end").style.color = "Red";
            for(var a = 0; a < alphabet.length; a++){
                document.getElementById(alphabet[a]).disabled = true;
            }
        }
    }
}

