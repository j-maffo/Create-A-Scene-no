// Kids at a playground
// Moon set sun rise change to sky
// Kids go on swing
// Kids kick ball
// Kids run back home

// Canvas Set Up
var cnv = document.getElementById("myCanvas");
var c = cnv.getContext("2d");
cnv.width = 600;
cnv.height = 500;

// Variables
// Sky Variables
let rValSky = 173;
let gValSky = 216;
let bValSky = 230;
// Grass Variables
let rValGrass = 71;
let gValGrass = 129;
let bValGrass = 71;
let dayGrass = `rgb(${rValGrass}, ${gValGrass}, ${bValGrass})`;

// Kid Variables
let kid1X = 350;
let kid1Y = 300;
let kid2X = 450;
let kid2Y = 300;

// Sun and Moon Variables
let sunY = 60;
let moonY = 380;

// Ball Variables
let ballX = 45;
let ballY = 350;
let soccerBallImg = document.getElementById("soccer-ball");
// Squirrel Variables
let squirrelImg = document.getElementById("squirrel");
let squirrelY = 340;

// text variables
let textColour = "black";

requestAnimationFrame(draw);

function draw() {
  // Sky- Night // cange colours
  let skyColour = `rgb(${rValSky},${gValSky},${bValSky})`;
  c.fillStyle = skyColour;
  c.fillRect(0, 0, 600, 500);

  // Sun
  c.fillStyle = "yellow";
  c.beginPath();
  c.arc(200, sunY, 25, 0, 2 * Math.PI);
  c.fill();
  // Moon
  c.fillStyle = "rgb(172, 171, 192)";
  c.beginPath();
  c.arc(200, moonY, 25, 0, 2 * Math.PI);
  c.fill();

  // Stars // appears
  function drawStars() {
    c.fillStyle = "rgb(241, 241, 213)";
    let x = 285;
    let y = 129;
    c.beginPath();
    c.moveTo(x, y); // tip
    c.lineTo((x += 2.5), (y += 5)); // top right corner
    c.lineTo((x += 5), y); // mid right tip
    c.lineTo((x -= 3.5), (y += 2.5)); // mid right corner
    c.lineTo((x += 1.5), (y += 5)); // low right tip
    c.lineTo((x -= 5.5), (y -= 2.5)); // center corner
    c.lineTo((x -= 5.5), (y += 2.5)); // low left tip
    c.lineTo((x += 1.5), (y -= 5)); // mid left corner
    c.lineTo((x -= 3.5), (y -= 2.5)); // mid left tip
    c.lineTo((x += 5), y); // top left corner
    c.lineTo((x += 2.5), (y -= 5.5)); // tip
    c.fill();
    c.fillStyle = "rgb(241, 241, 213)";
    x = 565;
    y = 125;
    c.beginPath();
    c.moveTo(x, y); // tip
    c.lineTo((x += 2.5), (y += 5)); // top right corner
    c.lineTo((x += 5), y); // mid right tip
    c.lineTo((x -= 3.5), (y += 2.5)); // mid right corner
    c.lineTo((x += 1.5), (y += 5)); // low right tip
    c.lineTo((x -= 5.5), (y -= 2.5)); // center corner
    c.lineTo((x -= 5.5), (y += 2.5)); // low left tip
    c.lineTo((x += 1.5), (y -= 5)); // mid left corner
    c.lineTo((x -= 3.5), (y -= 2.5)); // mid left tip
    c.lineTo((x += 5), y); // top left corner
    c.lineTo((x += 2.5), (y -= 5.5)); // tip
    c.fill();
    c.fillStyle = "rgb(241, 241, 213)";
    x = 99;
    y = 99;
    c.beginPath();
    c.moveTo(x, y); // tip
    c.lineTo((x += 2.5), (y += 5)); // top right corner
    c.lineTo((x += 5), y); // mid right tip
    c.lineTo((x -= 3.5), (y += 2.5)); // mid right corner
    c.lineTo((x += 1.5), (y += 5)); // low right tip
    c.lineTo((x -= 5.5), (y -= 2.5)); // center corner
    c.lineTo((x -= 5.5), (y += 2.5)); // low left tip
    c.lineTo((x += 1.5), (y -= 5)); // mid left corner
    c.lineTo((x -= 3.5), (y -= 2.5)); // mid left tip
    c.lineTo((x += 5), y); // top left corner
    c.lineTo((x += 2.5), (y -= 5.5)); // tip
    c.fill();
    c.fillStyle = "rgb(241, 241, 213)";
    x = 328;
    y = 19;
    c.beginPath();
    c.moveTo(x, y); // tip
    c.lineTo((x += 2.5), (y += 5)); // top right corner
    c.lineTo((x += 5), y); // mid right tip
    c.lineTo((x -= 3.5), (y += 2.5)); // mid right corner
    c.lineTo((x += 1.5), (y += 5)); // low right tip
    c.lineTo((x -= 5.5), (y -= 2.5)); // center corner
    c.lineTo((x -= 5.5), (y += 2.5)); // low left tip
    c.lineTo((x += 1.5), (y -= 5)); // mid left corner
    c.lineTo((x -= 3.5), (y -= 2.5)); // mid left tip
    c.lineTo((x += 5), y); // top left corner
    c.lineTo((x += 2.5), (y -= 5.5)); // tip
    c.fill();
  }

  // Grass Floor // changes colours
  let dayGrass = `rgb(${rValGrass}, ${gValGrass}, ${bValGrass})`;
  let grassColour = dayGrass;
  c.fillStyle = grassColour;
  c.fillRect(0, 350, 600, 200);

  // Swing

  // Swing bar
  c.fillStyle = "rgb(93, 154, 211)";
  c.fillRect(350, 200, 15, 160);
  c.fillStyle = "rgb(93, 154, 211)";
  c.fillRect(550, 200, 15, 160);
  c.fillStyle = "rgb(93, 154, 211)";
  c.fillRect(350, 200, 200, 15);

  // Swing ropes
  c.linewidth = 3;
  c.strokeStyle = "rgb(49, 33, 6)";
  c.beginPath();
  c.moveTo(380, 215); // upper bar
  c.lineTo(380, 300); // seat top
  c.stroke();

  c.linewidth = 3;
  c.strokeStyle = "rgb(49, 33, 6)";
  c.beginPath();
  c.moveTo(420, 215); // upper bar
  c.lineTo(420, 300); // seat top
  c.stroke();

  c.linewidth = 3;
  c.strokeStyle = "rgb(49, 33, 6)";
  c.beginPath();
  c.moveTo(480, 215); // upper bar
  c.lineTo(480, 300); // seat top
  c.stroke();

  c.linewidth = 3;
  c.strokeStyle = "rgb(49, 33, 6)";
  c.beginPath();
  c.moveTo(520, 215); // upper bar
  c.lineTo(520, 300); // seat top
  c.stroke();

  // Swing Seats
  c.fillStyle = "rgb(160, 121, 54)";
  c.fillRect(380, 300, 40, 10);

  c.fillStyle = "rgb(160, 121, 54)";
  c.fillRect(480, 300, 40, 10);

  // Playbox // rectangles and line inside
  c.fillStyle = "rgb(95, 19, 19)";
  // Side 1
  c.beginPath();
  c.moveTo(90, 400); // Upper left corner
  c.lineTo(95, 415); // Lower left corner
  c.lineTo(196, 431); // Lower right corner
  c.lineTo(193, 415); // Upper right corner
  c.lineTo(90, 400); // Upper left corner
  c.fill();
  // Side 2
  c.beginPath();
  c.moveTo(193, 415); // Upper left corner
  c.lineTo(310, 416); // Upper right corner
  c.lineTo(309, 425); // Lower right corner
  c.lineTo(195, 431); // Lower left corner
  c.lineTo(193, 415); // Upper left corner
  c.fill();
  // Side 3 // darker red
  c.beginPath();
  c.moveTo(310, 416); // Upper right corner
  c.lineTo(190, 400); // Upper left corner
  c.lineTo(192, 414); // Lower left corner
  c.lineTo(307, 420); // Lower right corner
  c.lineTo(310, 416); // Upper right corner
  c.fill();
  // Side 4 // darker red
  c.beginPath();
  c.moveTo(190, 400); // Upper right corner
  c.lineTo(90, 400); // Upper left corner
  c.lineTo(90, 414); // Lower left corner
  c.lineTo(193, 414); // Lower right corner
  c.lineTo(190, 400); // Upper right corner
  c.fill();

  // Sand -
  c.fillStyle = "rgb(129, 96, 38)"; //light
  c.beginPath();
  c.moveTo(95, 405); // Upper left corner
  c.lineTo(190, 405); // Lower left corner
  c.lineTo(290, 420); // Lower right corner
  c.lineTo(196, 423); // Upper right corner
  c.lineTo(95, 405);
  c.fill();

  // Tree

  // Leaves
  c.fillStyle = "rgb(13, 77, 50)";
  c.beginPath();
  c.arc(105, 170, 45, 0, 2 * Math.PI);
  c.fill();

  c.fillStyle = "rgb(21, 102, 58)";
  c.beginPath();
  c.arc(140, 215, 30, 0, 2 * Math.PI);
  c.fill();

  // Trunk
  c.fillStyle = "rgb(87, 44, 15)";
  c.fillRect(100, 190, 10, 170);

  c.fillRect(110, 250, 20, 5);
  c.fillRect(130, 240, 5, 15);

  // Squirrel
  c.drawImage(squirrelImg, 100, squirrelY, 30, 30);

  // Ball // move to the right
  function drawBall(x, y) {
    // socer ball is 30 other bal is 50 50
    c.drawImage(soccerBallImg, x, y, 30, 30);
  }
  drawBall(ballX, ballY);

  // Kids - Stick figure
  function drawKid1(x, y) {
    // Head
    c.fillStyle = "rgb(119, 81, 50)";
    c.beginPath();
    c.arc(x, y, 25, 0, 2 * Math.PI);
    c.fill();

    // Eyes
    // Left eye
    c.linewidth = 5;
    c.strokeStyle = "black";
    c.beginPath();
    c.moveTo(x - 10, y - 10);
    c.lineTo(x - 10, y);
    c.stroke();
    // Right eye
    c.linewidth = 5;
    c.strokeStyle = "black";
    c.beginPath();
    c.moveTo(x + 10, y - 10); // eye
    c.lineTo(x + 10, y); // eye
    c.stroke();
    // Mouth
    c.fillStyle = "black";
    c.beginPath();
    c.arc(x, y + 12, 5, 0, 2 * Math.PI);
    c.fill();
    // Torso
    c.linewidth = 5;
    c.strokeStyle = "black";
    c.beginPath();
    c.moveTo(x, y + 25); // chin
    c.lineTo(x, y + 125); // pelvis
    c.stroke();
    // Legs
    c.linewidth = 5;
    c.strokeStyle = "black";
    c.beginPath();
    c.moveTo(x, y + 125); // pelvis
    c.lineTo(x - 20, y + 160); // left foot
    c.stroke();

    c.linewidth = 5;
    c.strokeStyle = "black";
    c.beginPath();
    c.moveTo(x, y + 125); // pelvis
    c.lineTo(x + 20, y + 160); // right foot
    c.stroke();
    // Hands
    c.linewidth = 5;
    c.strokeStyle = "black";
    c.beginPath();
    c.moveTo(x, y + 50); // mid torso
    c.lineTo(x + 30, y + 90); // right hand
    c.stroke();

    c.linewidth = 5;
    c.strokeStyle = "black";
    c.beginPath();
    c.moveTo(x, y + 50); // mid torso
    c.lineTo(x - 30, y + 90); // left hand
    c.stroke();

    // Hair
    let blondHair = document.getElementById("blond-img");
    c.drawImage(blondHair, x - 50, y - 32, 90, 90);
  }
  drawKid1(kid1X, kid1Y);
  function drawKid2(x, y) {
    // Head
    c.fillStyle = "rgb(231, 188, 168)";
    c.beginPath();
    c.arc(x, y, 25, 0, 2 * Math.PI);
    c.fill();

    // Eyes
    // Left eye 2
    c.fillStyle = "rgb(52, 94, 33)";
    c.beginPath();
    c.arc(x - 10, y - 5, 5, 0, 2 * Math.PI);
    c.fill();
    // Right eye 2
    c.fillStyle = "rgb(52, 94, 33)";
    c.beginPath();
    c.arc(x + 10, y - 5, 5, 0, 2 * Math.PI);
    c.fill();

    // Mouth
    c.linewidth = 3;
    c.strokeStyle = "black";
    c.beginPath();
    c.moveTo(x - 7, y + 7);
    c.lineTo(x + 8, y + 7);
    c.stroke();

    // Torso
    c.linewidth = 5;
    c.strokeStyle = "black";
    c.beginPath();
    c.moveTo(x, y + 25); // chin 2
    c.lineTo(x, y + 125); // pelvis 2
    c.stroke();

    // Legs
    c.linewidth = 5;
    c.strokeStyle = "black";
    c.beginPath();
    c.moveTo(x, y + 125); // pelvis 2
    c.lineTo(x - 20, y + 160); // left foot 2
    c.stroke();

    c.linewidth = 5;
    c.strokeStyle = "black";
    c.beginPath();
    c.moveTo(x, y + 125); // pelvis 2
    c.lineTo(x + 20, y + 160); // right foot 2
    c.stroke();
    // 450, 300
    // Hands
    c.linewidth = 5;
    c.strokeStyle = "black";
    c.beginPath();
    c.moveTo(x, y + 50); // mid torso
    c.lineTo(x + 30, y + 90); // right hand
    c.stroke();

    c.linewidth = 5;
    c.strokeStyle = "black";
    c.beginPath();
    c.moveTo(x, y + 50); // mid torso
    c.lineTo(x - 30, y + 90); // left hand
    c.stroke();

    // Hair
    let shortHair = document.getElementById("short-img");
    c.drawImage(shortHair, x - 40, y - 40, 75, 64);
  }
  drawKid2(kid2X, kid2Y);

  // Sun Animation
  sunY += 0.5;
  if (sunY >= 380) {
    sunY = 380;
    moonY -= 0.5;
  }
  // Changing Sky Colour
  rValSky -= 0.25;
  if (rValSky < 24) {
    rValSky = 24;
  }
  gValSky -= 0.25;
  if (gValSky < 24) {
    gValSky = 24;
  }
  bValSky -= 0.25;
  if (bValSky < 83) {
    bValSky = 83;
  }

  // Changing Grass Colour
  rValGrass -= 0.25;
  if (rValGrass < 20) {
    rValGrass = 20;
  }
  gValGrass -= 0.15;
  if (gValGrass < 80) {
    gValGrass = 80;
  }
  bValGrass -= 0.25;
  if (bValGrass < 20) {
    bValGrass = 20;
  }

  // Night Sky Animation
  if (moonY <= 60) {
    moonY = 60;
    drawStars();
    textColour = "grey";
  }

  // Kid walking animation
  kid1X -= 2;
  kid2X -= 2;
  if (kid1X < -60) {
    kid1X = cnv.width + 60;
  }
  if (kid2X < -60) {
    kid2X = kid1X + 100;
  }

  // Squirrel Animation
  squirrelY -= 1;
  if (squirrelY < 160) {
    squirrelY = 160;
  }
  // ball animation
  ballX += 1;
  if (ballX >= cnv.width) {
    ballX = -50;
  }
  // Text
  c.fillStyle = textColour;
  c.font = "20px 'Courier New', Courier, monospace";
  c.fillText("Lost at the Park...", 20, 20);
  requestAnimationFrame(draw);
}
