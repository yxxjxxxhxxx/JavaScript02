const countValue = document.getElementById('value');
// console.log(countValue);

const countButtons = document.querySelectorAll('button');
//console.log(countButtons);

let count = 0;

countButtons.forEach((button) => {
    
    button.addEventListener('click', (event) => {
        //console.log(event);
        const curTarget = event.currentTarget;
        //console.dir(curTarget); //classList property 확인

        // 어떤 버튼이 클릭되었는지 확인할 수 있는 sign
        const styles = curTarget.classList[1];
        console.log(styles);
        
        // nested ternary operator(중첩된 삼항 연산자)
        count = styles !== 'reset' ? (count = styles === 'decrease' ? --count : ++count) : 0; //'reset이 아닐때 동작': 'reset일때 동작 하는 부분'
        
        // change a countValue color
        let cvColor = '';
        cvColor = count !== 0 ? (cvColor =count > 0 ? 'green' : 'red') : 'gray';

        countValue.textContent = count;
        countValue.style.color = cvColor;


    });
});












































// 철련님 코드
// increase.onclick = () => {
//     const current = parseInt(number.innerText, 10);   
//     number.innerText = current + 1;
//   };
  
//   decrease.onclick = () => {
//     const current = parseInt(number.innerText, 10);
//     number.innerText = current - 1;
//   };
  
//   reset.onclick = () => {
//       const current = parseInt(number.innerText, 10)
//       number.innerText =  current +- current;
//   };
  
  
//   // 
  
  
//   <!DOCTYPE html>
//   <html>
//     <head>
//       <title>Parcel Sandbox</title>
//       <meta charset="UTF-8" />
//       <script defer src="index1.js"></script>
//   </head>
  
  
//     <body>
//       <h2 id="number">0</h2>
//       <div>
//         <button id="increase">+1</button>
//         <button id="decrease">-1</button>
//         <button id="reset">reset</button>
//       </div>
  
      
//     </body>
//   </html>
// _______________________________________________________________
// ====HTML===
// 정일 코드
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
//     <link rel="stylesheet" href="style.css">
//     <script defer src="app.js"></script>
// </head>
// <body>
//     <div class = "counter">
//         <h1 class = "one">Counter</h1>
//         <h1 class = "number" id="numbersss">0</h1>
//         <button class = "box" id="decrease" onclick="decrease()">decrease</button>
//         <button class = "box" id="reset" onclick="reset()">reset</button>
//         <button class = "box" id="increase" onclick="increase()">increase</button>
//     </div>

// </body>
// </html>

// ====CSS======= 
// let number = document.getElementById('numbersss');

// let result = 0;

// const color = () => { if(result === 0){
//     number.style.color = "black";
// } else if ( result > 0 ){
//     number.style.color = "green";
// } else if ( result < 0 ){
//     number.style.color = "red";
// }}

// let increase = () => {
//     result++ ;
//     color();
//     number.textContent = `${result}`;
// }

// let decrease = () => {
//     result-- ;
//     color();
//     number.textContent = `${result}`;
// }

// let reset = () => {
//     result = 0;
//     color();
//     number.textContent = `${result}`;
// }

// 지영 코드
// <!DOCTYPE html>
// <html lang="en">

// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <link href="./style.css" ref="stylesheet">
//     <script defer src="./app.js"></script>
//     <title>Counter</title>
// </head>

// <body>
//     <main>
//         <div class="container">
//             <h3>Conter</h3><br>
//             <div id='result'>0</div>
//             <input type="button" onclick='count("plus")' value='+' />
//             <input type='button' onclick='count("minus")' value='-' />
//             <input type='button' onclick='count("reset")' value='reset' />
//         </div>
//     </main>

// </body>

// </html>

// function count(type) {
//   // 결과를 표시할 element
//   const resultElement = document.getElementById("result");

//   // 현재 화면에 표시된 값
//   let number = resultElement.innerText;

//   // 더하기/빼기/초기화
//   if (type === "plus") {
//     number = parseInt(number) + 1;
//     resultElement.style.color = "green";
//   } else if (type === "minus") {
//     number = parseInt(number) - 1;
//     resultElement.style.color = "red";
//   } else if (type === "reset") {
//     number = 0;
//     resultElement.style.color = "black";
//   }

//   // 결과 출력
//   resultElement.innerText = number;
// }