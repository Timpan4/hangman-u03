const words = ["fisk", "hund", "banan", "chasacademy"]
const numbers = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven"];
let keys = document.querySelectorAll(".key");
let alive = true;
let triesLeft = 16;

//array to remove duplicates
function removeA(arr) {
    var what, a = arguments,
        L = a.length,
        ax;
    while (L > 1 && arr.length) {
        what = a[--L];
        while ((ax = arr.indexOf(what)) !== -1) {
            arr.splice(ax, 1);
        }
    }
    return arr;
}

// step 1: select random word
const selectRandom = (arr) => {
    let amount = arr.length;
    return arr[Math.floor(Math.random() * amount)];
}
var selectedWord = selectRandom(words).split("");
var wordLength = selectedWord.length;
var selectedWord2 = selectedWord;

// step 2: display how many letters in that word
let theword = document.querySelector(".theword");

for (i = 0; i < wordLength; i++) {
    theword.innerHTML += '<div class="letters ' + numbers[i] + '">_</div>';
}

// step 3: Be able to press a button to select a letter + gray out the button for the selected letter
var selectedLetters = []
document.querySelector("h1").textContent = "Tries left: " + triesLeft;
for (j = 0; j < keys.length; j++) {
    keys[j].addEventListener("click", function () {
        if (event.target.className != "key red" && alive) {
            event.target.className = "key red";
            selectedLetters.push(event.target.textContent.toLowerCase());
            let unique = [...new Set(selectedLetters)];
            console.log(unique);
            let correctLetters = [];
            // step 4: compare selected letter with letters in the selected word
            triesLeft--;
            console.log(triesLeft);
            for (k = 0; k < selectedWord.length; k++) {
                for (h = 0; h < unique.length; h++) {
                    // step 5: if letter match: display all correct letters.
                    if (selectedWord[k] == unique[h]) {
                        document.querySelector("." + numbers[k]).textContent = selectedWord[k];
                        correctLetters.push(selectedWord[k]);
                        correctLetters = [...new Set(correctLetters)];
                    }
                }
            }
            document.querySelector("h1").textContent = "Tries left: " + triesLeft;
            //code that broke everything and i might come back and check it later
            // for (y = 0; y < correctLetters.length; y++) {
            //     removeA(selectedWord2, correctLetters[y]);
            // }
            // for (u = 0; u < selectedWord2.length; u++) {
            //     if (unique.includes(selectedWord2[u])) {
            //         triesLeft++;
            //     }
            // }


            let theletters = document.querySelectorAll(".letters");
            let newletters = [];
            for (g = 0; g < theletters.length; g++) {
                newletters.push(theletters[g].textContent);
            }
            if (newletters.includes("_") && triesLeft == 0) {
                alive = false;
                alert("you died");
            }
            if (!newletters.includes("_")) {
                alive = false;
                alert("you won!");
            }
        }

    });
}

//step 6: repeat step 3-5 until dude is dead or correct word found and finish the game