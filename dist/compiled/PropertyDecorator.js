"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Using a decorator we can replace the existing getter and setter for the property and do some
 * annoying things.
 */
function ReplaceGetterSetter(target, key) {
    // original property value
    var _val = target[key];
    // Create new property with getter and setter
    Object.defineProperty(target, key, {
        get: function () { return "You can't get the original value (" + _val + ") anymore!"; },
        set: function (newVal) { _val = newVal + "IADDEDTHIS!"; }
    });
}
/**
 * Uses a factory to achieve the same results as above.
 */
function HardCodedReplacedGetterAndSetter(getVal, setVal) {
    return function (target2, key2) {
        Object.defineProperty(target2, key2, {
            get: function () { return "Have " + getVal + " instead!"; },
            set: function (newVal) { console.log("I won't let you set it to " + setVal + "!"); }
        });
    };
}
var PropertyDecorated = (function () {
    function PropertyDecorated() {
    }
    __decorate([
        ReplaceGetterSetter
    ], PropertyDecorated.prototype, "replacedGetterSetter", void 0);
    __decorate([
        HardCodedReplacedGetterAndSetter("GETTER", "SETTER")
    ], PropertyDecorated.prototype, "hardReplacedGetterAndSetter", void 0);
    return PropertyDecorated;
}());
exports.default = PropertyDecorated;
