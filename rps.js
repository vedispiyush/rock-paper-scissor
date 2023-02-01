let array = ['stone', 'paper', 'scissors'];
let score = 0;
let rock_but = document.getElementById("st");
let paper_but = document.getElementById("p");
let scissor_but = document.getElementById("sc");

// function for computer choice

function computer() {
    let random = array[(Math.floor(Math.random() * 3))];
    return random;
}

//function for user choice

function playerchoice(youchoose) {
    let computerchoice = computer();
    const comp = document.getElementById("pc2");
    if (youchoose === computerchoice) {
        document.getElementById("para").style.display = "block";
        console.log("tie");
    }
    else {
        if (youchoose == "paper" && computerchoice == "stone") {
            document.getElementById("win").innerText = "YOU WIN";
            score += 1;
            youhover();
            console.log("win");
        }
        else if (youchoose == "stone" && computerchoice == "scissors") {
            document.getElementById("win").innerText = "YOU WIN";
            score += 1;
            youhover();
            console.log("win");

        }
        else if (youchoose == "scissors" && computerchoice == "paper") {
            document.getElementById("win").innerText = "YOU WIN";
            score += 1;
            youhover();
            console.log("win");

        }
        else {
            document.getElementById("win").innerText = "YOU LOST";
            console.log("lost");
            pchover();

        }
        if (computerchoice === "stone") {
            comp.innerHTML = `<img src="rock.png">`;
            document.getElementById("pc").style.backgroundColor = "#FFD600";


        }
        if (computerchoice === "paper") {
            comp.innerHTML = `<img src="paper.png">`;
            document.getElementById("pc").style.backgroundColor = "#CC00FF";


        }
        if (computerchoice === "scissors") {
            comp.innerHTML = `<img src="scissors.png">`;
            document.getElementById("you").style.backgroundColor = "#FF4370";


        }

        scorenew();
        res();
        blink();


    }





}
player();
let x;

function player() {
    rock_but.addEventListener('click', function () {
        x = "stone";
        playerchoice("stone");
    })
    paper_but.addEventListener('click', function () {
        x = "paper";
        playerchoice("paper");
    })
    scissor_but.addEventListener('click', function () {
        x = "scissors";
        playerchoice("scissors")
    })
}


//updated score function

function scorenew() {
    document.getElementById("zero").innerText = score;
}


// function for  disapperaring blink effect
function blink() {
    document.getElementById("para").style.display = "none";
}

//function for showing the result section
function res() {
    document.getElementById("big").style.display = "none";
    document.getElementById("result").style.display = "block";
    const image = document.getElementById("you2");
    if (x === "stone") {
        image.innerHTML = `<img src="rock.png">`;
        document.getElementById("you").style.backgroundColor = "#FFD600";
    }
    if (x === "paper") {
        image.innerHTML = `<img src="paper.png">`;
        document.getElementById("you").style.backgroundColor = "#CC00FF";

    }
    if (x === "scissors") {
        image.innerHTML = `<img src="scissors.png">`;
        document.getElementById("you").style.backgroundColor = "#FF4370";

    }


}

//function for coming back to paly area
function play() {
    document.getElementById("big").style.display = "block";
    document.getElementById("result").style.display = "none";

}

//function for rule button

function rule() {
    document.getElementById("rule1").style.display = "block";
}

//function for cross button
function cut() {
    document.getElementById("rule1").style.display = "none";
}

function youhover(){
    document.getElementById("you").style.boxShadow="0px 0px 0px 30px #031e8063";
    document.getElementById("pc").style.boxShadow="0px 0px 0px 0px #031e8063";

}
function pchover(){
    document.getElementById("pc").style.boxShadow="0px 0px 0px 30px #031e8063";
    document.getElementById("you").style.boxShadow="0px 0px 0px 0px #031e8063";
}