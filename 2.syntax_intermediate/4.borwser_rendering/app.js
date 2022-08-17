const headingEl = document.querySelector('h1');
console.log(headingEl);
console.log(typeof headingEl);

console.log(headingEl instanceof HTMLHeadingElement);
console.log(headingEl instanceof Node);

console.log(headingEl.firstChild); // text node
