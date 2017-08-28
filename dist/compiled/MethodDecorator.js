"use strict";
/*
    This is an example of a method decorator. It takes the properties of the
    decorated method and modifies or injects behavior to its execution
    using reflection.

    I suspect the decorator evaluation works as follows on a method (at time of class eval):

        1. If the decorator function returns an Object (PropertyDescriptor,) then just call that code right away. Usually
            this will be replacing the original PropertyDescriptor value with additional functionality wrapping the old one.

        2. If the decorator function returns a function then execute the returned function right away (this does the same
            thing as in #1 but has additional information from the closure.)

*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Instead of executing the decorated method just show passed arguments instead.
 */
function LogOnly(target, propertyKey, descriptor) {
    var oldDescriptor = descriptor.value;
    descriptor.value = function () {
        console.log("Instead of calling '" + propertyKey + "' I'll just show you the args: ", arguments, "\n");
    };
    return descriptor;
}
/**
 * Logs the params and the target and then executes the original method
 */
function LogAndExecute(target, propertyKey, descriptor) {
    var oldDescriptor = descriptor.value;
    descriptor.value = function () {
        console.log("Called: '" + propertyKey + "' with args: ", arguments, "\n");
        return oldDescriptor.apply(this, arguments);
        ;
    };
    return descriptor;
}
/**
 * Logs the args and executes the method conditionally depending on shouldExecute.
 *
 * Exemplifies use of a Decorator Factory
 */
function LogAndMaybeExecute(shouldExecute) {
    // Create a closure over shouldExecute that is used in the returned decorator function
    return function (target, propertyKey, descriptor) {
        var oldDescriptor = descriptor.value;
        descriptor.value = function () {
            console.log("Called: '" + propertyKey + "' with args: ", arguments, "\n");
            var ret = null;
            if (shouldExecute) {
                ret = oldDescriptor.apply(this, arguments);
            }
            return ret;
        };
        return descriptor;
    };
}
var MethodDecorated = (function () {
    function MethodDecorated(val) {
        if (val) {
            this.aVar = val;
        }
    }
    MethodDecorated.prototype.aMethod = function (arg1, arg2) {
        console.log("Executed aMethod()\n");
    };
    MethodDecorated.prototype.aLoggedOnlyMethod = function (arg1, arg2) {
        console.log("Executed aDecoratedMethod()\n");
    };
    MethodDecorated.prototype.aLoggedAndExecutedMethod = function (arg1, arg2) {
        console.log("Executed aLoggedAndExecutedMethod()\n");
    };
    MethodDecorated.prototype.aLoggedAndChosenToExecuteMethod = function (arg1, arg2) {
        console.log("Executed aLoggedAndChosenToExecuteMethod()\n");
    };
    MethodDecorated.prototype.aLoggedAndChosenNotToExecuteMethod = function (arg1, arg2) {
        console.log("Executed aLoggedAndChosenNotToExecuteMethod()\n");
    };
    __decorate([
        LogOnly
    ], MethodDecorated.prototype, "aLoggedOnlyMethod", null);
    __decorate([
        LogAndExecute
    ], MethodDecorated.prototype, "aLoggedAndExecutedMethod", null);
    __decorate([
        LogAndMaybeExecute(true)
    ], MethodDecorated.prototype, "aLoggedAndChosenToExecuteMethod", null);
    __decorate([
        LogAndMaybeExecute(false)
    ], MethodDecorated.prototype, "aLoggedAndChosenNotToExecuteMethod", null);
    return MethodDecorated;
}());
exports.default = MethodDecorated;
