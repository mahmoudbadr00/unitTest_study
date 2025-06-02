const theArray = require("../matchers_5");

describe("length function with toBe", () => {
  test("if the array length = 5", () => {
    expect(theArray.length).toBe(5); // this is matcher
  });
});


describe("length function with toHaveLength", () => {
  test("if the array length = 5", () => {
    expect(theArray).toHaveLength(5); // this is anther matcher
  });
});


describe("length function with toContain", () => {
  test("if the array contain number 5", () => {
    expect(theArray).toContain(5); // this is anther matcher
  });
});

//not

describe("length function with not", () => {
  test("if the array contain number 5", () => {
    expect(theArray).not.toContain(7); // this is anther matcher
  });
});


/////

  test("check if the array have only numbers", () => {
    for (let i = 0; i < theArray.length; i++) {
        expect(isNaN(theArray[0])).toBe(false)
    }
  });

  // the same thing : 
  test("check if the array have only numbers", () => {
    for (let i = 0; i < theArray.length; i++) {
        expect(isNaN(theArray[0])).toBeFalsy()
    }
  });
  // the same thing : 
  test("check if the array have only numbers", () => {
    for (let i = 0; i < theArray.length; i++) {
        expect(isNaN(theArray[0])).not.toBeTruthy()
    }
  });


  ////////////

  test("check if the second index of array >1", () => {
        expect(theArray[1]).toBeGreaterThan(1)
  });

  test("check if the first index of array >=1", () => {
        expect(theArray[0]).toBeGreaterThanOrEqual(1)
  });


  test("check if the first index of array <1", () => {
        expect(theArray[0]).toBeLessThan(5)
  });

  test("check if the first index of array <=1", () => {
        expect(theArray[0]).toBeLessThanOrEqual(1)
  });

  // undefined

  test("check if undefined", () => {
    let a;
        expect(a).toBeUndefined()
  });

  // toMatch
test("check for substring in string", () => {
    let a = "hi Mahmoud, how are you";
        expect(a).toMatch(/Mahmoud/) // as reg Exp
  });


// toHaveProperty
test("check for object to Have Property", () => {
    let a = {
        name:"ali",
        age:22
    };
        expect(a).toHaveProperty("age")
  });

  // toHaveProperty = specific value
test("check for object to Have Property", () => {
    let a = {
        name:"ali",
        age:22
    };
        expect(a).toHaveProperty("age", 22)
  });


  ///////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////

  //***************** Create A Matcher *********************//

  expect.extend({
    toBeLargerThan(received,target){
        const pass = received > target;
        if (pass) {
            return{
                message : ()=> `Expected ${received} to be larger than ${target}`,
                pass:true,
            }
        } else {
            return{
                message : ()=> `Expected ${received} to be larger than ${target}`,
                pass:false,
            }
        }
    }
  });

  // use my Matcher 
  test("check number > number",()=>{
    expect(10).toBeLargerThan(5)
  })

  // another one :::

  expect.extend({
    toBeInBetween(received, start, end){
        const pass = received > start && received < end;
        if (pass) {
            return{
                message : ()=> `Expected ${received} to be between ${start} and ${end}`,
                pass:true,
            }
        } else {
            return{
                message : ()=> `Expected ${received} to be between ${start} and ${end}`,
                pass:false,
            }
        }
    }
  });

  // use my Matcher 
  test("check number between two numbers",()=>{
    expect(7).toBeInBetween(5,10)
  })