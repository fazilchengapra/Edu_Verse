var btn = document.getElementById('btn');
var btn2 = document.getElementById('btn2');
var essentialL = document.querySelector('.essential-monthly'); // Corrected selector
var essentialR = document.querySelector('.essential-annual');  // Corrected selector
var eliteL = document.querySelector('.elite-monthly');         // Added for elite section
var eliteR = document.querySelector('.elite-annual');          // Added for elite section

function leftClick() {
    btn.style.left = '0';
    essentialL.style.display = 'block';  // Show monthly
    essentialR.style.display = 'none';   // Hide annual
}

function rightClick() {
    btn.style.left = '110px';
    essentialL.style.display = 'none';   // Hide monthly
    essentialR.style.display = 'block';  // Show annual
}

function EleftClick() {
    btn2.style.left = '0';
    eliteL.style.display = 'block';      // Show monthly
    eliteR.style.display = 'none';       // Hide annual
}

function ErightClick() {
    btn2.style.left = '110px';
    eliteL.style.display = 'none';       // Hide monthly
    eliteR.style.display = 'block';      // Show annual
}
