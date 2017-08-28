"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MethodDecorator_1 = require("./MethodDecorator"); // import default class
console.log("---------------------------Running Main");
// We are going to test different types of decorators
// Method decorator
var md = new MethodDecorator_1.default("HI");
md.aMethod("one", "two");
md.aLoggedOnlyMethod("three", "four");
md.aLoggedAndExecutedMethod("five", "six");
md.aLoggedAndChosenToExecuteMethod("seven", "eight");
md.aLoggedAndChosenNotToExecuteMethod("nine", "ten");
// Method decorator factory
// Property decorator
// Class decorator
console.log("---------------------------Ended Main");
