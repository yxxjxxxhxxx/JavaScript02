/**
 * Destructuring
 * 
 * 구조(배열 or 객체 등 어떠한 자료구조)
 * Destructuring assignment(분해 할당)은 객체의 프로퍼티나 배열을 여러 개의 변수로 분해해주는 것
 * -> 더 간결한 코드의 작성을 도와주는 문법
 * 
 * 1. Object Destructuring
 * 2. Array Destructuring
 */

// 1. Object Destructuring
/*
    book 객체 생성, id는 1, title은 'The Great Gatsby', pudDate는 10/04/1925
*/

const book = {
    id: 1,
    title: 'The Great Gatsby',
    pubDate: '10/04/1925', 
};

// 기존의 방식
// const id = book.id;
// const title = book.title;
// const pubDate = book.pubDate;

// Object Destructuring 방식
// const { bookId, bookTitle, bookPubDate } = book;
// console.log(bookId, bookTitle, bookPubDate); // undefined

// 변수는 객체의 프로퍼티명과 동일한 이름으로 작성해야함
// const { id, title, pubDate } = book;
// console.log(id, title, pubDate);
// console.log(book); // destructuring은 원본 객체를 수정하지 않음

// 다른 이름으로 지정하고 싶은 경우,
const { id: bookId, title: bookTitle, pubDate: bookPubDate } = book;
console.log(bookId, bookTitle, bookPubDate);

// 중첩된 객체도 destructuring가능
const anotherBook = {
    id: 2,
    title: 'The old man and the sea',
    pubDate: '08/09/1952',
    author: {
        firstName: 'Ernest',
        lastName: 'Hemingway',
    },
};

// const { 
//     id, 
//     title, 
//     pubDate, 
//     author: { firstName, lastName } 
// } = anotherBook;

// console.log(author); // 접근 불가.
// console.log(firstName, lastName);

const {
    author,
    author: { firstName: myFirstName, lastName: myLastName },
} = anotherBook;

console.log(author); // 접근 가능
console.log(myFirstName, myLastName);

// 2. Array Destructuring : 배열의 요소들을 개별 변수들로 분해
const date = ['1970', '12', '01'];

// JS Array는 순서를 보장받아야하기 때문에 기존 방식에서는 인덱싱을 통해 분해
// const year = date[0];
// const month = date[1];
// const day = date[2];

// Array Destructuring 방식
const [year, month, day] = date;
console.log(year, month, day);

// 중첩 배열의 destructuring
const nestedArray = [1, 2, [true, 'hoya'], 5];
console.log(nestedArray);

const [one, two, [isTrue, userName], five] = nestedArray;
console.log(one, two, isTrue, userName, five);

/**
 * movie 객체 생성
 * movieTitle: 'Spidernam no way home'
 * movieActor: 객체, firstName: 'Tom', lastName: 'Holland'
 * hashTags: 배열, 'honey fun', 'handsome', 'thrill'
 * 
 * 출력 : console.log(movieDate, movieActor, firstName, tag1, tag2);
 */

 const movie = {
    movieTitle: 'Spiderman no way home',
    movieActor: {
        firstName: 'Tom',
        lastName: 'Holland',
    },
    hashTags: ['honey fun', 'handsome', 'thrill'],
};

const {
    movieTitle,
    movieDate = new Date(), // 날짜 관련 객체
    movieActor, // 객체만 따로 분해하고 싶을 때
    movieActor: { firstName }, // 내부에서 별도로 destructuring
    hashTags: [tag1, tag2],
} = movie;

console.log(movieDate, movieActor, firstName, tag1, tag2);