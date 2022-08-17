/*
string을 사용하는 방식
1. (single quote) 홑 따옴표
2. (double quote) 쌍 따옴표
3. (backtick), 템프릿 리터럴
*/

const novel = 'The little Prince';
const author = "Saint-Exupery";

// 템플릿 리터럴(Template literal) 방식
console.log(`My favorite novel is ${novel} 
by ${author}`); //
//변수를 동적 바인딩(binding), 줄바꿈 가능 

// 템플릿 리터럴 이전의 줄바꿈 방식 \n
const address = 
    'Homer J. Simson\n' + '742 Evergreen Terrace\n' +
    'Springfield';
console.log(address);

function createOAuthString(host, clientId, scope) {
    return host + '/login/oauth/authorize?client_id=' + clientId + '&scope=' + scope
  }
  
createOAuthString('https://github.com', 'abc123', 'repo,user');
// == 다른 파일의 어떤 코드 라인
createOAuthString('https://github.com', 'xyz123', 'repo,admin');