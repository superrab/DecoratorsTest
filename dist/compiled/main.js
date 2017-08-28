"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MethodDecorator_1 = require("./MethodDecorator");
var PropertyDecorator_1 = require("./PropertyDecorator");
var ClassDecorator_1 = require("./ClassDecorator");
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
var cd = new ClassDecorator_1.default("saaaa");
// added by something weird I did
console.log(ClassDecorator_1.default.extra);
console.log(ClassDecorator_1.default.addedMethod());
// added with the specified way of class decorating
console.log(cd.newProperty);
console.log(cd.aVar);
console.log(cd.bVar);
// console.log((<any>cd).NewMethod());
console.log("---------------------------Ended Main");
