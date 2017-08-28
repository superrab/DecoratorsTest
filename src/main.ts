import MethodDecorated from "./MethodDecorator";
import PropertyDecorated from "./PropertyDecorator";
import ClassDecorated from "./ClassDecorator";

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
let cd : ClassDecorated = new ClassDecorated("saaaa");

// added by something weird I did
console.log((<any>ClassDecorated).extra);
console.log((<any>ClassDecorated).addedMethod());

// added with the specified way of class decorating
console.log((<any>cd).newProperty);
console.log(cd.aVar);
console.log(cd.bVar);
console.log((<any>cd).NewMethod()); // this also outputs an "undefined line, not sure why"

console.log("---------------------------Ended Main");