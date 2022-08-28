const resultElement = document.querySelector('result');
const dbtn = document.getElementById('dbtn');
const rbtn = document.getElementById('rbtn');
const ibtn = document.getElementById('ibtn');     
const color = document.querySelector('.result'); 
let countNumber = 0


ibtn.addEventListener('click', () => {
    console.log('증가 버튼 클릭됨');
    countNumber++;
    color.style.color = colorFunction(); 
    color.textContent = countNumber;
});

dbtn.addEventListener('click', () => {
    countNumber--;
    color.style.color = colorFunction();
    color.textContent = countNumber;
});

rbtn.addEventListener('click', () => {
    countNumber = 0;
    color.style.color = colorFunction();
    color.textContent = countNumber;
});


function colorFunction() {
    if (countNumber < 0) {
        return 'red';
    }
    else if (countNumber === 0) {
        return 'black';
    }
    else {
        return 'green';
    }
}


color.textContent = countNumber;
