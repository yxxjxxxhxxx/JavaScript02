// 3개의 random 값을 배열로 반환하는 함수 getRandomNumber
function getRandomNumber(min, max) { //최댓값도 포함, 최솟값도 포함
    let randomRGBArray = [];
    for (let i = 0; i < 3; i++) {
        let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        randomRGBArray.push(randomNumber);
    }
    console.log(randomRGBArray);
  
    return randomRGBArray; 
  }

const btn = document.getElementById('btn');     //
const color = document.querySelector('.color'); //
btn.addEventListener('click', () => {
    // console.log('button clicked!'); 실행이 되나 확인 하는 코드
    // bad case
    // const resultArray = getRandomNumber(0,255);
    // const red = resultArray[0];
    // const grren = resultArray[1];
    // const blue = resultArray[2];
    // good case
    const [r, g, b] = getRandomNumber(0, 255); //배열구조 할당 , 패킹 언패킹
 // console.log(r, g, b);

    // document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    // color.textContent = `rgb(${r}, ${g}, ${b})`;
    // color.style.color = `rgb(${r}, ${g}, ${b})`;
    const rgbColor = `rgb(${r}, ${g}, ${b})`;  
    document.body.style.backgroundColor = rgbColor; //배경색
    color.textContent = rgbColor; // 
    color.style.color = rgbColor; // style.color = 글자색
});