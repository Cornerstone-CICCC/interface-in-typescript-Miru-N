type StringOrNumber = string | number;

function printInfo(value: StringOrNumber): void {
  if (typeof value === "string") {
    console.log(`String: ${value}`);
  } else {
    console.log(`Number: ${value}`);
  }
}

printInfo("Hello");
printInfo(42);