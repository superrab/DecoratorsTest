"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MethodDecorator_1 = require("./MethodDecorator");
var PropertyDecorator_1 = require("./PropertyDecorator");
console.log("---------------------------Running Main");
// We are going to test different types of decorators
// Method decorators
console.log("Method Decorators --------------------");
var md = new MethodDecorator_1.default("HI");
md.aMethod("one", "two");
md.aLoggedOnlyMethod("three", "four");
md.aLoggedAndExecutedMethod("five", "six");
md.aLoggedAndChosenToExecuteMethod("seven", "eight");
md.aLoggedAndChosenNotToExecuteMethod("nine", "ten");
// Property decorator
console.log("Property Decorators --------------------");
var pd = new PropertyDecorator_1.default();
console.log(pd.replacedGetterSetter);
pd.replacedGetterSetter = "Something Else";
console.log(pd.replacedGetterSetter);
console.log(pd.hardReplacedGetterAndSetter);
pd.hardReplacedGetterAndSetter = "Another thing";
// Class decorator
console.log("\nClass Decorators --------------------");
console.log("---------------------------Ended Main");
