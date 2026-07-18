# 📘 Module 10: JavaScript Arrays

## 📖 Overview

This module covers the fundamentals of **JavaScript Arrays**. It includes array creation, accessing elements, modifying values, using built-in array methods, sorting, reversing, and traversing arrays using different looping techniques.

By completing this module, I built a strong foundation for working with collections of data in JavaScript.

---

## 📚 Topics Covered

### 🔹 Array Basics

- What is an Array?
- Creating Arrays
- Storing Multiple Values
- Accessing Elements by Index
- Updating Array Elements

Example:

```javascript
const players = ["Abul", "Babul", "Cabul"];

console.log(players[0]);

players[1] = "Ebul";
```

---

### 🔹 Array Length

Find the total number of elements inside an array.

```javascript
const fruits = ["Mango", "Lychee", "Papaya"];

console.log(fruits.length);
```

---

### 🔹 Array Methods

#### `push()`

Adds one or more elements to the end.

```javascript
friends.push("Rahim");
```

---

#### `pop()`

Removes the last element.

```javascript
friends.pop();
```

---

#### `shift()`

Removes the first element.

```javascript
friends.shift();
```

---

#### `unshift()`

Adds an element to the beginning.

```javascript
friends.unshift("Karim");
```

---

#### `includes()`

Checks whether an element exists.

```javascript
numbers.includes(45);
```

---

#### `indexOf()`

Returns the index of an element.

```javascript
numbers.indexOf(45);
```

---

#### `concat()`

Combines two or more arrays.

```javascript
const allNumbers = arr1.concat(arr2);
```

---

#### `join()`

Converts an array into a string.

```javascript
numbers.join(", ");
```

---

#### `Array.isArray()`

Checks whether a variable is an array.

```javascript
Array.isArray(numbers);
```

---

## ✂️ slice()

Returns a portion of an array.

- Does **not** modify the original array.

```javascript
const part = numbers.slice(2, 5);
```

---

## ✂️ splice()

Adds, removes, or replaces elements.

- **Modifies** the original array.

```javascript
numbers.splice(2, 2, 100, 200);
```

---

## 🔄 Reverse Array

### Using `reverse()`

```javascript
numbers.reverse();
```

---

### Using `unshift()`

```javascript
const reversed = [];

for (const item of numbers) {
    reversed.unshift(item);
}
```

---

### Using Reverse `for` Loop

```javascript
const reversed = [];

for (let i = numbers.length - 1; i >= 0; i--) {
    reversed.push(numbers[i]);
}
```

---

## 🔃 Sorting Arrays

### Sort Strings

```javascript
fruits.sort();
```

---

### Sort Numbers (Ascending)

```javascript
numbers.sort((a, b) => a - b);
```

---

### Sort Numbers (Descending)

```javascript
numbers.sort((a, b) => b - a);
```

---

## 🔁 Looping Through Arrays

### `for...of`

```javascript
for (const number of numbers) {
    console.log(number);
}
```

---

### `for`

```javascript
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
```

---

### `while`

```javascript
let i = 0;

while (i < numbers.length) {
    console.log(numbers[i]);
    i++;
}
```

---

# 📝 Important Concepts

- Arrays store multiple values in a single variable.
- Array indexing starts from **0**.
- Last index = `length - 1`.
- Arrays can contain different data types.
- Some array methods modify the original array, while others return a new one.

---

# 📊 Array Methods Summary

| Method | Purpose | Changes Original Array |
|---------|---------|:----------------------:|
| `push()` | Add to end | ✅ |
| `pop()` | Remove last element | ✅ |
| `shift()` | Remove first element | ✅ |
| `unshift()` | Add to beginning | ✅ |
| `includes()` | Check existence | ❌ |
| `indexOf()` | Find index | ❌ |
| `concat()` | Merge arrays | ❌ |
| `join()` | Convert to string | ❌ |
| `slice()` | Copy part of array | ❌ |
| `splice()` | Add/Remove/Replace | ✅ |
| `reverse()` | Reverse array | ✅ |
| `sort()` | Sort array | ✅ |

---

# 🎯 Learning Outcomes

After completing this module, I can:

- ✅ Create and initialize arrays
- ✅ Access and update array elements
- ✅ Find the length of an array
- ✅ Add and remove elements
- ✅ Search for elements
- ✅ Merge arrays
- ✅ Convert arrays into strings
- ✅ Extract and modify array data
- ✅ Reverse arrays using multiple techniques
- ✅ Sort strings and numbers correctly
- ✅ Traverse arrays using `for`, `for...of`, and `while` loops
- ✅ Understand mutable and immutable array methods

---

# 📂 Project Structure

```
module-10/
│
├── array-basics.js
├── array-length.js
├── array-methods.js
├── push-pop.js
├── shift-unshift.js
├── slice-splice.js
├── reverse-array.js
├── sort-array.js
├── for-of-loop.js
├── for-loop-array.js
├── while-loop-array.js
└── README.md
```

---

# 🛠 Technologies Used

- JavaScript (ES6)
- Visual Studio Code
- Node.js

---

# 📌 Module Status

- ✅ Array Basics
- ✅ Array Length
- ✅ Array Methods
- ✅ `push()`
- ✅ `pop()`
- ✅ `shift()`
- ✅ `unshift()`
- ✅ `includes()`
- ✅ `indexOf()`
- ✅ `concat()`
- ✅ `join()`
- ✅ `slice()`
- ✅ `splice()`
- ✅ `reverse()`
- ✅ `sort()`
- ✅ `for...of`
- ✅ `for`
- ✅ `while`

**🎉 Module 10 Completed Successfully!**

---

## 👨‍💻 Author

**Arafat Islam**

Aspiring Full-Stack Web Developer | Learning JavaScript step by step and building a strong programming foundation.