---

layout: post
title: "50 Javascript Snippets you need to know right now"
date: 2021-12-01 19:00:00 +0530
categories: javascript
excerpt: 50 Javascript snippets every dev should know for writing better code.

---

![banner](https://abhirajb.hashnode.dev/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1639639655433%2F0GNgzN5XQ.png%3Fw%3D1600%26h%3D840%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=1920&q=75)

One of the most popular languages to learn is JavaScript. "If you're only going to learn one programming language, learn JavaScript," as many people advise.
In an interview, Quincy Larson, the founder of FreeCodeCamp, was asked which language developers should learn first. "JavaScript," he replied.
"The world is being eaten by software, and JavaScript is eating software." With each passing year, JavaScript gains in popularity, and no one knows what will finally replace it. If you don't have a compelling need to learn a new language (for example, if your employment requires you to maintain non-JavaScript code), my humble advise is to concentrate on improving your JavaScript skills."

If this sounds compelling to you, here are 50 Javascript snippets you can keep at your fingertips to write better code, faster.

1️⃣ all

This snippet returns true if the predicate function returns true for all elements in a collection and false otherwise. You can omit the second argument 'fn' if you want to use Boolean as a default value.
```js
const all = (arr, fn = Boolean) => arr.every(fn);

all([4, 2, 3], x => x > 1); // true
all([1, 2, 3]); // true
```

2️⃣ arrayToCSV

This snippet converts the elements to strings with comma-separated values.
```js
const arrayToCSV = (arr, delimiter = ',') =>
  arr.map(v => v.map(x => `"${x}"`).join(delimiter)).join('\n');
  
arrayToCSV([['a', 'b'], ['c', 'd']]); // '"a","b"\n"c","d"'
arrayToCSV([['a', 'b'], ['c', 'd']], ';'); // '"a";"b"\n"c";"d"'
```

3️⃣ arrayToHtmlList

This snippet converts the elements of an array into list tags and appends them to the list of the given ID.
```js
const arrayToHtmlList = (arr, listID) =>
  (el => (
    (el = document.querySelector('#' + listID)),
    (el.innerHTML += arr.map(item => `<li>${item}</li>`).join(''))
  ))();
  
arrayToHtmlList(['item 1', 'item 2'], 'myListID');
```

4️⃣ bifurcate

This snippet splits values into two groups and then puts a truthy element of filter in the first group, and in the second group otherwise.

You can use Array.prototype.reduce()and Array.prototype.push()to add elements to groups based on filter.
```js
const bifurcate = (arr, filter) =>
  arr.reduce((acc, val, i) => (acc[filter[i] ? 0 : 1].push(val), acc), [[], []]);
bifurcate(['beep', 'boop', 'foo', 'bar'], [true, true, false, true]); 
// [ ['beep', 'boop', 'bar'], ['foo'] ]
```

5️⃣ byteSize

This snippet returns the length of a string in bytes.
```js
const byteSize = str => new Blob([str]).size;

byteSize('😀'); // 4
byteSize('Hello World'); // 11
```

6️⃣ capitalize

This snippet capitalizes the first letter of a string.
```js
const capitalize = string =>
    `${string?.[0]?.toLocaleUpperCase() ?? ""}${string?.slice(1) ?? ""}`;
```

7️⃣ dayOfYear

This snippet gets the day of the year from a Dateobject.
```js
const dayOfYear = date =>
  Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);

dayOfYear(new Date()); // 272
```

8️⃣ decapitalize

This snippet turns the first letter of a string into lowercase.
```js
const decapitalize = ([first, ...rest]) =>
  first.toLowerCase() + rest.join('')

decapitalize('FooBar'); // 'fooBar'
decapitalize('FooBar'); // 'fooBar'
```

9️⃣ countOccurrences

This snippet counts the occurrences of a value in an array.
```js
const countOccurrences = value => array =>
    array.filter(item => item === value).length;
```

🔟 default
This snippet assigns default values for all properties in an object that are undefined.
```js
const defaults = (obj, ...defs) => Object.assign({}, obj, ...defs.reverse(), obj);

defaults({ a: 1 }, { b: 2 }, { b: 6 }, { a: 3 }); // { a: 1, b: 2 }
```

1️⃣1️⃣ allEqual
This snippet checks whether all elements of the array are equal.
```js
const allEqual = arr => arr.every(val => val === arr[0]);

allEqual([1, 2, 3, 4, 5, 6]); // false
allEqual([1, 1, 1, 1]); // true
```

1️⃣2️⃣ approximatelyEqual
This snippet checks whether two numbers are approximately equal to each other, with a small difference.
```js
const approximatelyEqual = (v1, v2, epsilon = 0.001) => Math.abs(v1 - v2) < epsilon;

approximatelyEqual(Math.PI / 2.0, 1.5708); // true
```

1️⃣3️⃣ attempt
This snippet executes a function, returning either the result or the caught error object.
```js
const attempt = (fn, ...args) => {
  try {
    return fn(...args);
  } catch (e) {
    return e instanceof Error ? e : new Error(e);
  }
};
var elements = attempt(function(selector) {
  return document.querySelectorAll(selector);
}, '>_>');
if (elements instanceof Error) elements = []; // elements = []
```

1️⃣4️⃣ bifurcateBy
This snippet splits values into two groups, based on a predicate function. If the predicate function returns a truthy value, the element will be placed in the first group. Otherwise, it will be placed in the second group.

You can use Array.prototype.reduce()and Array.prototype.push()to add elements to groups, based on the value returned by fnfor each element.
```js
const bifurcateBy = (arr, fn) =>
  arr.reduce((acc, val, i) => (acc[fn(val, i) ? 0 : 1].push(val), acc), [[], []]);
  
bifurcateBy(['beep', 'boop', 'foo', 'bar'], x => x[0] === 'b'); 
// [ ['beep', 'boop', 'bar'], ['foo'] ]
```

1️⃣5️⃣ bottomVisible
This snippet checks whether the bottom of a page is visible.
```js
const bottomVisible = () =>
  document.documentElement.clientHeight + window.scrollY >=
  (document.documentElement.scrollHeight || document.documentElement.clientHeight);

bottomVisible(); // true
```

1️⃣6️⃣ castArray
This snippet converts a non-array value into array.
```js
const castArray = val => (Array.isArray(val) ? val : [val]);

castArray('foo'); // ['foo']
castArray([1]); // [1]
```

1️⃣7️⃣ compact
This snippet removes false values from an array.
```js
const compact = arr => arr.filter(Boolean);

compact([0, 1, false, 2, '', 3, 'a', 'e' * 23, NaN, 's', 34]); 
// [ 1, 2, 3, 'a', 's', 34 ]
```

1️⃣8️⃣ currentURL
This snippet returns the current URL.
```js
const currentURL = () => window.location.href;

currentURL(); // 'https://abhiraj.mdx.one'
```

1️⃣9️⃣ defer
This snippet delays the execution of a function until the current call stack is cleared.
```js
const defer = (fn, ...args) => setTimeout(fn, 1, ...args);

defer(console.log, 'a'), console.log('b'); // logs 'b' then 'a'
```

2️⃣0️⃣ degreesToRads
This code snippet can be used to convert a value from degrees to radians.
```js
const degreesToRads = deg => (deg * Math.PI) / 180.0;

degreesToRads(90.0); // ~1.5708
```


2️⃣1️⃣ average
This snippet returns the average of two or more numerical values.
```js
const average = (...nums) => nums.reduce((acc, val) => acc + val, 0) / nums.length;
average(...[1, 2, 3]); // 2
average(1, 2, 3); // 2
```

2️⃣2️⃣ averageBy
This snippet returns the average of an array after initially doing the mapping of each element to a value using a given function.
```js
const averageBy = (arr, fn) =>
  arr.map(typeof fn === 'function' ? fn : val => val[fn]).reduce((acc, val) => acc + val, 0) /
  arr.length;
  
averageBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], o => o.n); // 5
averageBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], 'n'); // 5
```

2️⃣3️⃣ capitalizeEveryWord
This snippet capitalizes the first letter of every word in a given string.
```js
const capitalizeEveryWord = str => str.replace(/\b[a-z]/g, char => char.toUpperCase());

capitalizeEveryWord('hello world!'); // 'Hello World!'
```

2️⃣4️⃣ Create Directory
This snippet uses existsSync() to check whether a directory exists and then mkdirSync() to create it if it doesn’t.
```js
const fs = require('fs');
const createDirIfNotExists = dir => (!fs.existsSync(dir) ? fs.mkdirSync(dir) : undefined);
createDirIfNotExists('test'); 
// creates the directory 'test', if it doesn't exist
```

2️⃣5️⃣ deepFlatten
This snippet flattens an array recursively.
```js
const deepFlatten = arr => [].concat(...arr.map(v => (Array.isArray(v) ? deepFlatten(v) : v)));

deepFlatten([1, [2], [[3], 4], 5]); // [1,2,3,4,5]
```

2️⃣6️⃣ difference
This snippet finds the difference between two arrays.
```js
const difference = (a, b) => {
  const s = new Set(b);
  return a.filter(x => !s.has(x));
};

difference([1, 2, 3], [1, 2, 4]); // [3]
```

2️⃣7️⃣ differenceBy
This method returns the difference between two arrays, after applying a given function to each element of both lists.
```js
const differenceBy = (a, b, fn) => {
  const s = new Set(b.map(fn));
  return a.filter(x => !s.has(fn(x)));
};

differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor); // [1.2]
differenceBy([{ x: 2 }, { x: 1 }], [{ x: 1 }], v => v.x); // [ { x: 2 } ]
```

2️⃣8️⃣ differenceWith
This snippet removes the values for which the comparator function returns false.
```js
const differenceWith = (arr, val, comp) => arr.filter(a => val.findIndex(b => comp(a, b)) === -1);

differenceWith([1, 1.2, 1.5, 3, 0], [1.9, 3, 0], (a, b) => Math.round(a) === Math.round(b)); 
// [1, 1.2]
```

2️⃣9️⃣ digitize
This snippet gets a number as input and returns an array of its digits.
```js
const digitize = n => [...`${n}`].map(i => parseInt(i));

digitize(431); // [4, 3, 1]
```

3️⃣0️⃣ distance
This snippet returns the distance between two points by calculating the Euclidean distance.
```jsx
const distance = (x0, y0, x1, y1) => Math.hypot(x1 - x0, y1 - y0);

distance(1, 1, 2, 3); // 2.23606797749979
```

3️⃣1️⃣ Drop Elements
This snippet returns a new array with n elements removed from the left.
```js
const drop = (arr, n = 1) => arr.slice(n);

drop([1, 2, 3]); // [2,3]
drop([1, 2, 3], 2); // [3]
drop([1, 2, 3], 42); // []
```
3️⃣2️⃣ dropRight
This snippet returns a new array with n elements removed from the right.
```js
const dropRight = (arr, n = 1) => arr.slice(0, -n);

dropRight([1, 2, 3]); // [1,2]
dropRight([1, 2, 3], 2); // [1]
dropRight([1, 2, 3], 42); // []
```
3️⃣3️⃣ dropRightWhile
This snippet removes elements from the right side of an array until the passed function returns true.
```js
const dropRightWhile = (arr, func) => {
  while (arr.length > 0 && !func(arr[arr.length - 1])) arr = arr.slice(0, -1);
  return arr;
};

dropRightWhile([1, 2, 3, 4], n => n < 3); // [1, 2]
```
3️⃣4️⃣ dropWhile
This snippet removes elements from an array until the passed function returns true.
```js
const dropWhile = (arr, func) => {
  while (arr.length > 0 && !func(arr[0])) arr = arr.slice(1);
  return arr;
};

dropWhile([1, 2, 3, 4], n => n >= 3); // [3,4]
```
3️⃣5️⃣ elementContains
This snippet checks whether the parent element contains the child.
```js
const elementContains = (parent, child) => parent !== child && parent.contains(child);

elementContains(document.querySelector('head'), document.querySelector('title')); // true
elementContains(document.querySelector('body'), document.querySelector('body')); // false
```
3️⃣6️⃣ Filter Duplicate Elements
This snippet removes duplicate values in an array.
```js
const filterNonUnique = arr => arr.filter(i => arr.indexOf(i) === arr.lastIndexOf(i));

filterNonUnique([1, 2, 2, 3, 4, 4, 5]); // [1, 3, 5]
```
3️⃣7️⃣ findKey
This snippet returns the first key that satisfies a given function.
```js
const findKey = (obj, fn) => Object.keys(obj).find(key => fn(obj[key], key, obj));

findKey(
  {
    barney: { age: 36, active: true },
    fred: { age: 40, active: false },
    pebbles: { age: 1, active: true }
  },
  o => o['active']
); // 'barney'
```
3️⃣8️⃣ findLast
This snippet returns the last element for which a given function returns a truthy value.
```js
const findLast = (arr, fn) => arr.filter(fn).pop();

findLast([1, 2, 3, 4], n => n % 2 === 1); // 3
```
3️⃣9️⃣ insertAfter
This snippet can be used to insert an HTML string after the end of a particular element.
```js
const insertAfter = (el, htmlString) => el.insertAdjacentHTML('afterend', htmlString);

insertAfter(document.getElementById('myId'), '<p>after</p>'); // <div id="myId">...</div> <p>after</p>
```
4️⃣0️⃣ insertBefore
This snippet can be used to insert an HTML string before a particular element.
```js
const insertBefore = (el, htmlString) => el.insertAdjacentHTML('beforebegin', htmlString);

insertBefore(document.getElementById('myId'), '<p>before</p>'); // <p>before</p> <div id="myId">...</div>
```

4️⃣1️⃣ flatten
This snippet flattens an array up to a specified depth using recursion.
```js
const flatten = (arr, depth = 1) =>
  arr.reduce((a, v) => a.concat(depth > 1 && Array.isArray(v) ? flatten(v, depth - 1) : v), []);

flatten([1, [2], 3, 4]); // [1, 2, 3, 4]
flatten([1, [2, [3, [4, 5], 6], 7], 8], 2); // [1, 2, 3, [4, 5], 6, 7, 8]
```
4️⃣2️⃣ forEachRight
This snippet executes a function for each element of an array starting from the array’s last element.
```js
const forEachRight = (arr, callback) =>
  arr
    .slice(0)
    .reverse()
    .forEach(callback);
    
forEachRight([1, 2, 3, 4], val => console.log(val)); // '4', '3', '2', '1'
```
4️⃣3️⃣ forOwn
This snippet iterates on each property of an object and iterates a callback for each one respectively.
```js
const forOwn = (obj, fn) => Object.keys(obj).forEach(key => fn(obj[key], key, obj));
forOwn({ foo: 'bar', a: 1 }, v => console.log(v)); // 'bar', 1
```
4️⃣4️⃣ Get Time From Date
This snippet can be used to get the time from a Dateobject as a string.
```js
const getColonTimeFromDate = date => date.toTimeString().slice(0, 8);

getColonTimeFromDate(new Date()); // "08:38:00"
```
4️⃣5️⃣ Get Days Between Dates
This snippet can be used to find the difference in days between two dates.
```js
const getDaysDiffBetweenDates = (dateInitial, dateFinal) =>
  (dateFinal - dateInitial) / (1000 * 3600 * 24);
  
getDaysDiffBetweenDates(new Date('2019-01-13'), new Date('2019-01-15')); // 2
```
4️⃣6️⃣ getStyle
This snippet can be used to get the value of a CSS rule for a particular element.
```js
const getStyle = (el, ruleName) => getComputedStyle(el)[ruleName];

getStyle(document.querySelector('p'), 'font-size'); // '16px'
```
4️⃣7️⃣ getType
This snippet can be used to get the type of a value.
```js
const getType = v =>
  v === undefined ? 'undefined' : v === null ? 'null' : v.constructor.name.toLowerCase();
  
getType(new Set([1, 2, 3])); // 'set'
```
4️⃣8️⃣ hasClass
This snippet checks whether an element has a particular class.
```js
const hasClass = (el, className) => el.classList.contains(className);
hasClass(document.querySelector('p.special'), 'special'); // true
```
4️⃣9️⃣ head
This snippet returns the head of a list.
```js
const head = arr => arr[0];

head([1, 2, 3]); // 1
```
5️⃣0️⃣ hide
This snippet can be used to hide all elements specified.
```js
const hide = (...el) => [...el].forEach(e => (e.style.display = 'none'));

hide(document.querySelectorAll('img')); // Hides all <img> elements on the page
```

This post was inspired by one of my Twitter threads. Do follow me on Twitter to never miss out on tech content.

[Here](https://twitter.com/RainboeStrykr/status/1471374845258518530)

### Thank you for reading

If you liked this post, subscribe to my newsletter to never miss out on my blogs, product launches and tech news.

[Abhiraj's Dev-letter](https://getrevue.co/profile/abhiraj)
