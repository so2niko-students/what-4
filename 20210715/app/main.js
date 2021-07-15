function sum(a, b) {
  return a + b;
}

function multi(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function subtraction(a, b) {
  return a - b;
}

const testObj = {
  one: 1,
  two: 2,
};

// sum
NTest(sum, 2, 1, 1);
NTest(sum, 0, 0, 0);
NTest(sum, 3, testObj.one, testObj.two);
NTest(sum, 553.5, 550, 3.5);
NTest(sum, 9, 4.5, 4.5);
NTest(sum, 9.5, 2.3, 7.2);
NTest(sum, Infinity, Infinity, 1);
NTest(sum, -2, -1, -1);
NTest(sum, 1, 1);
NTest(sum, 3, 1, 1, 1);
NTest(sum, [1, 2], [1], [2]);
NTest(sum, 0, "0", 0);
NTest(sum, 1, "1", 0);
NTest(sum, NaN, NaN, NaN);
NTest(sum, null, null, null);

// multi
NTest(multi, 1, 1, 1);
NTest(multi, 0, 0, 0);
NTest(multi, 2, 1, 2);
NTest(multi, 0, 1, 0);
NTest(multi, -2, 1, -2);
NTest(multi, Infinity, Infinity, Infinity);
NTest(multi, Infinity, Infinity, 1);
NTest(multi, 6, -3, -2);
NTest(multi, 19, 2, 9.5);
NTest(multi, 0, "0", 0);
NTest(multi, 1, 1);
NTest(multi, NaN, NaN, NaN);
NTest(multi, null, null, null);

// divide
NTest(divide, 1, 1, 1);
NTest(divide, 0.5, 1, 2);
NTest(divide, Infinity, 1, 0);
NTest(divide, -0.5, 1, -2);
NTest(divide, Infinity, Infinity, 1);
NTest(divide, 5, -10, -2);
NTest(divide, -5, -10, 2);
NTest(divide, 0, "0", 0);
NTest(divide, 1, 1);
NTest(divide, Infinity, 0, 0);
NTest(divide, NaN, "str", "str");
NTest(divide, 0.26315789473, 2.5, 9.5);
NTest(divide, Infinity, Infinity, Infinity);
NTest(divide, NaN, NaN, NaN);
NTest(divide, null, null, null);

// subtraction
NTest(subtraction, 0, 1, 1);
NTest(subtraction, 3, 5, 2);
NTest(subtraction, 0, -2, -2);
NTest(subtraction, -4, -2, 2);
NTest(subtraction, -2, -2, 0);
NTest(subtraction, 2, 0, -2);
NTest(subtraction, 5, 2.5, -2.5);
NTest(subtraction, 7.5, 5, -2.5);
NTest(subtraction, -57.5, -55, 2.5);
NTest(subtraction, 0, "0", 0);
NTest(subtraction, NaN, "str", "str");
NTest(subtraction, 1, 1);
NTest(subtraction, -1, 1, 1, 1);

function NTest(func, result, ...args) {
  const callResult = func(...args);
  const passFailed = callResult === result ? "PASS" : "FAILED";
  const str = `${passFailed}: ${func.name}(${args}) Expected: ${result}, Received: ${callResult}`;

  const styles = {
    PASS: "background-color: green; padding: 5px; color: white;",
    FAILED: "background-color: red; padding: 5px;",
  };
  console.log("%c%s", styles[passFailed], str);
}
