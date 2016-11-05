#!/usr/bin/env node

function f() {
  new Promise((resolve) => setTimeout(resolve, 1000)).then(
    () => {
      console.log("0");
      setTimeout(() => console.log("1"), 1000);
    }
  );
  setTimeout(() => console.log("2"), 0);
  console.log("3")
};

f()
