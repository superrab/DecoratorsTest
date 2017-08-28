import MethodDecorated from "./MethodDecorator";
import PropertyDecorated from "./PropertyDecorator";

console.log("---------------------------Running Main");

// We are going to test different types of decorators

// Method decorators
console.log("Method Decorators --------------------")
let md : MethodDecorated = new MethodDecorated("HI");
md.aMethod("one", "two");
md.aLoggedOnlyMethod("three", "four");
md.aLoggedAndExecutedMethod("five", "six");
md.aLoggedAndChosenToExecuteMethod("seven", "eight");
md.aLoggedAndChosenNotToExecuteMethod("nine", "ten");

// Property decorator
console.log("Property Decorators --------------------")
let pd : PropertyDecorated = new PropertyDecorated();
console.log(pd.replacedGetterSetter);
pd.replacedGetterSetter = "Something Else";
console.log(pd.replacedGetterSetter);

console.log(pd.hardReplacedGetterAndSetter);
pd.hardReplacedGetterAndSetter = "Another thing";

// Class decorator
console.log("\nClass Decorators --------------------")

console.log("---------------------------Ended Main");