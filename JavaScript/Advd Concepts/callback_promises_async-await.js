function printString(string) {
  setTimeout(() => {
    console.log(string);
  }, Math.floor(Math.random() * 100) + 1);
}

let printAll = () => {
  printString("A");
  printString("B");
  printString("C");
};

printAll(); // prints string in random order as setTimeout() is an async fn.

// ---------------------------------------------------------------------------

// Using Callbacks
function printString(string, cb) {
  setTimeout(() => {
    console.log(string);
    cb();
  }, Math.floor(Math.random() * 100) + 1);
}

// Now string can be consoled like as done in sync code but causes problem called Callback Hell.
let printAll = () => {
  printString("A", () => {
    printString("B", () => {
      printString("C", () => {});
    });
  });
};

printAll();

// -----------------------------------------------------------------

// Using Promises (then..catch)
function printString(string) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(string);
      resolve();
    }, Math.floor(Math.random() * 100) + 1);
  });
}

let printAll = () => {
  printString("A")
    .then(() => {
      return printString("B");
    })
    .then(() => {
      return printString("C");
    });
};

printAll();

// ------------------------------------------------------

// using async await
function printString(string) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(string);
      resolve();
    }, Math.floor(Math.random() * 100) + 1);
  });
}

async function printAll() {
  await printString("A");
  await printString("B");
  await printString("C");
}

printAll();

// -------------------------------------------------------------

// Concatenate Strings using callbacks, promises, async await

// Callbacks
function addString(prev, curr, cb) {
  setTimeout(() => {
    cb(prev + " " + curr);
  }, Math.floor(Math.random() * 100) + 1);
}

function concatenate() {
  addString("", "A", (result) => {
    addString(result, "B", (result) => {
      addString(result, "C", (result) => {
        console.log(result);
      });
    });
  });
}

concatenate();

// ---------------------------------------------------

// Promises
function addString(prev, curr) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(prev + "" + curr);
    }, Math.floor(Math.random() * 100) + 1);
  });
}

function concatenate() {
  addString("", "A")
    .then((result) => addString(result, "B"))
    .then((result) => addString(result, "C"))
    .then((result) => console.log(result));
}

concatenate();

// -------------------------------------------------------

// async await
function addString(prev, curr) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(prev + " " + curr);
    }, Math.floor(Math.random() * 100) + 1);
  });
}

concatenate = async () => {
  let result = await addString("", "A");
  result = await addString(result, "B");
  result = await addString(result, "C");
  console.log(result);
};

concatenate();
