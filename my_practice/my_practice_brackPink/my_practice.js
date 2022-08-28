const select = document.querySelector('select');
//console.log(select);

const paragraph = document.querySelector('p');
//console.log(paragraph);

select.addEventListener('change', setResult);

function setResult() {
    const choice = select.value;
    if (choice === 'one') { // 값이 1번이면.
        paragraph.textContent = '로제가 짱!';
    } else if(choice === 'two') { //2번이면
        paragraph.textContent = '리사가 짱 !';
    } else if (choice === 'three'){ 
        paragraph.textContent ='제니가 짱 !';   
    } else { //1번, 2번이 아닐경우 (3번일경우)
        paragraph.textContent ='지수가 짱 !';
    } 
}