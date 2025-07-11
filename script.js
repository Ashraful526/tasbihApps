let count = 0;
let tasbih = 0;
let goal = 0;
const maxCount = 100;   
const tasbihPerGoal = 10;

const countDisplay = document.getElementById('count');
const tasbihDisplay = document.getElementById('tasbih');
const goalDisplay = document.getElementById('goal');
const countButton = document.getElementById('countButton');
const resetButton = document.getElementById('resetButton');

countButton.addEventListener('click', () => {
  count++;
  if (count >= maxCount) {
    count = 0;
    tasbih++;
    if (tasbih % tasbihPerGoal === 0) {
      goal++;
    }
     
  }
  show();
 
});

resetButton.addEventListener('click', () => {
  count = 0;
  tasbih = 0;
  goal = 0;
  show();
});

function show() {
  countDisplay.textContent = count;
  tasbihDisplay.textContent = tasbih;
  goalDisplay.textContent = goal;
}
