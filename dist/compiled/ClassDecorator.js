"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Adds an extra property and method addedMethod() to the class but not to instances.
 * I am not sure this is the way you are supposed to use a class decorator.
 */
function AddExtraPropertyToClass(target) {
    target.extra = "Extra!";
    target.addedMethod = function () { return "An added method!"; };
}
/**
 * This is the recommended way to create a class decorator.
 *
 * Override the constructor. I think the "T extends 'an object that has a new() with varags:any[]'"" must be
 * special TypeScript syntax. We end up taking in an object fitting such structure, i.e. a class.
 * The original constructor is still run first it seems.
 */
function AddProps(constructor) {
    return (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.newProperty = "new property";
            _this.hello = "override";
            _this.aVar = "new value";
            return _this;
        }
        class_1.prototype.NewMethod = function () {
            console.log("A new method");
        };
        return class_1;
    }(constructor));
}
var ClassDecorated = (function () {
    function ClassDecorated(s) {
        this.aVar = "A Var";
        this.aVar = s;
        this.bVar = "bbbb";
    }
    ClassDecorated = __decorate([
        AddProps,
        AddExtraPropertyToClass
    ], ClassDecorated);
    return ClassDecorated;
}());
exports.default = ClassDecorated;
