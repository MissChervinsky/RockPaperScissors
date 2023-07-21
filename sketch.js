let HumanWins = 0;
let RobotWins = 0;
let PlayersTie = 0;
//let currentWinner;
let TotalGames = 0;
let hand = ["💎", "📜", "✂"];
//            0      1     2
let robochoice;
let humanchoice;

function setup() {
  createCanvas(300, 350);
  textAlign(CENTER);

  
    //Lets Play a Game
  G = createButton("Lets Play");
  G.position(120, 320);
  G.mousePressed(GStart);
  
}

function buttons(){//Button for A
  A = createButton("Human Won");
  A.position(10, 25);
  A.mousePressed(HWins);

  // Button for B
  B = createButton("Robot Won");
  B.position(102, 25);
  B.mousePressed(RWins);

  // Button for Tie
  T = createButton("It's A Tie");
  T.position(185, 25);
  T.mousePressed(Tie);

  //Lets Play a Game
  G = createButton("Lets Play");
  G.position(120, 320);
  G.mousePressed(GStart);}

function draw() {
  background(220);
  noStroke();
  //green human side
  fill('#C6E4B9');
  rect(0,0,100,400);

  //grey robot side
  fill('#CACACA');
  rect(100,0,100,400);
  
  
  
  
  line(27, 30, 220, 30);

  fill('black')
  textSize(30);
  text("Scores:", 150, 29);
  text(HumanWins, 50, 90);
  text(RobotWins, 150, 90);
  text(PlayersTie, 250, 90);
    // There are two ways to show Total Game Count. The first is to make a variable called TotalGames and each time a score is made, add to it by one.
  text("Total Games: " + TotalGames, 30, 310); 
  



  currentLead();
}
function GStart() {
  autoGame();
  //Button for A
  R = createButton("💎");
  R.position(35, 180);
  R.mousePressed(Rock);

  P = createButton("📜");
  P.position(135, 180);
  P.mousePressed(Paper);

  S = createButton("✂");
  S.position(235, 180);
  S.mousePressed(Scissors);
}

function autoGame() {
  robochoice = hand[round(random(2))];
}
function Rock() {
  autoGame()
  if (robochoice == "📜") {
    console.log("💎" + " vs " + robochoice);
    console.log("You Lose! Robot Went Paper");

    RWins();
  } else if (robochoice == "✂") {
    console.log("💎" + " vs " + robochoice);
    console.log("You Win! Robot Went Scissors");

    HWins();
  }
  if (robochoice == "💎") {
    console.log("💎" + " vs " + robochoice);
    console.log("Its a Tie. Robot Went Rock");

    Tie();
  }
}
function Paper() {
  autoGame()
  humanchoice = "📜";
  if (robochoice == "✂") {
    console.log("📜" + " vs " + robochoice);
    console.log("You Lose! Robot Went Scissors");

    RWins();
  } else if (robochoice == "💎") {
    console.log("📜" + " vs " + robochoice);
    console.log("You win! Robot Went Rock");
    HWins();
  } else if (robochoice == "📜") {
    console.log("📜" + " vs " + robochoice);
    console.log("Its a Tie! Robot Went Paper");
    Tie();
  }
}
function Scissors() {
  autoGame()
  humanchoice = "✂";
  if (robochoice == "📜") {
    console.log("✂" + " vs " + robochoice);
    console.log("You win! Robot Went Paper");
    HWins();
  } else if (robochoice == "💎") {
    console.log("✂" + " vs " + robochoice);
    console.log("You Lose! Robot Went Rock");
    RWins();
  } else if (robochoice == "✂") {
    console.log("✂" + " vs " + robochoice);
    console.log("Its a tie! Robot Went Scissors");
    Tie();
  }
}

function HWins() {
  ++HumanWins;
  ++TotalGames;
}
function RWins() {
  ++RobotWins;
  ++TotalGames;
}
function Tie() {
  ++PlayersTie;
  ++TotalGames;
}

function currentLead() {
  if (PlayersTie == 0 && HumanWins == 0 && RobotWins == 0) {
    //show no crown
  }
  // if Player A's Wins are Greater than Player B's AND Player A Wins is greater than (Ties - B Wins). Show a crown over A Won.
  else if (HumanWins > RobotWins) {
    text("👑", 50, 55);
  } else if (RobotWins > HumanWins) {
    text("👑", 150, 55);
  } else if (
    // Player B Wins is Equal to Player A wins. Or Player A Wins - Player B Wins is equal to 0. Show a crown over Tie
    RobotWins == HumanWins ||    HumanWins - RobotWins == 0
  ) {
    text("👑", 250, 55);
  } else {
    text("👑", 250, 55);
  }
}
