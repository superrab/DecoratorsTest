
/**
 * Adds an extra property and method addedMethod() to the class but not to instances.
 * I am not sure this is the way you are supposed to use a class decorator.
 */
function AddExtraPropertyToClass(target: any) : void {
    target.extra = "Extra!";
    target.addedMethod = function() { return "An added method!"; }
}

/**
 * This is the recommended way to create a class decorator.
 * 
 * Override the constructor. I think the "T extends 'an object that has a new() with varags:any[]'"" must be
 * special TypeScript syntax. We end up taking in an object fitting such structure, i.e. a class.
 * The original constructor is still run first it seems.
 */
function AddProps<T extends {new(...args:any[]):{}}>(constructor:T) {
    return class extends constructor {
        public newProperty : string = "new property";
        public hello : string = "override";
        public aVar : string = "new value";

        NewMethod() : void {
            console.log("A new method");
        }
    }
}

@AddProps
@AddExtraPropertyToClass
export default class ClassDecorated {
    public aVar : string = "A Var";
    public bVar : string;

    constructor(s : string) {
        this.aVar = s;
        this.bVar = "bbbb";
    }
}