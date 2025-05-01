// Default export

function logger(params) {
  console.time("Params");
  console.log(params);
  console.time();
}

export default logger;

const objA = {
  a: 1,
  b: 2,
  c: {
    j: 123,
    g: 321,
  },

  showInfo() {},
};

const objB = objA;

objB.a = 10;

JSON.parse(JSON.stringify(objA));
