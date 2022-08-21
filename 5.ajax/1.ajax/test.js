const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');

xhr.onreadystatechange = () => {
    if (xhr.readyState === 2) {
        console.log(`HEADERS_RECEIVED ${xhr.readyState}`);
    }

    // 데이터 응답,(로딩) 완료와 같음 == onload
    if (xhr.readyState === 4 && xhr.status === 200) {
        console.log(`LOADING, ${xhr.readyState}`);
        console.log(`response data: ${xhr.responseText}`);
        const responseData = xhr.responseText;
        const parsedData = JSON.parse(responseData);
        console.log(parsedData);
    }
};

xhr.onprogress = () => console.log(`LOADING, ${xhr.readyState}`);
xhr.onload = () => console.log(`DONE, ${xhr.readyState}`);

// 실제 요청 전송
xhr.send();
