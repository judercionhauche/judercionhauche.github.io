const redBtn = document.getElementById('q1-btn-red');
const yellowBtn = document.getElementById('q1-btn-yellow');
const greenBtn = document.getElementById('q1-btn-green');
const lightblueBtn = document.getElementById('q1-btn-lightblue');
const blueBtn = document.getElementById('q1-btn-blue');
const container = document.getElementById('q1-container');

redBtn.addEventListener('click', () => {
  container.style.backgroundColor = '#EF476F';
});

yellowBtn.addEventListener('click', () => {
  container.style.backgroundColor = '#FFD166';
});

greenBtn.addEventListener('click', () => {
  container.style.backgroundColor = '#06D6A0';
});

lightblueBtn.addEventListener('click', () => {
  container.style.backgroundColor = '#118AB2';
});

blueBtn.addEventListener('click', () => {
  container.style.backgroundColor = '#073B4C';
});
