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

/**
 * Instead of executing the decorated method just show passed arguments instead.
 */
function LogOnly(target : any, propertyKey: string, descriptor: PropertyDescriptor): PropertyDescriptor {
    var oldDescriptor : any = descriptor.value;

    descriptor.value = function() {
        console.log(`Instead of calling '${propertyKey}' I'll just show you the args: `, arguments, "\n");
    };

    return descriptor;
}

/**
 * Logs the params and the target and then executes the original method
 */
function LogAndExecute(target : any, propertyKey: string, descriptor: PropertyDescriptor): PropertyDescriptor {
    var oldDescriptor : any = descriptor.value;

    descriptor.value = function() {
        console.log(`Called: '${propertyKey}' with args: `, arguments, "\n");
        
        return oldDescriptor.apply(this, arguments);;
    };

    return descriptor;
}

/**
 * Logs the args and executes the method conditionally depending on shouldExecute.
 * 
 * Exemplifies use of a Decorator Factory
 */
function LogAndMaybeExecute(shouldExecute ?: boolean) 
    : (target : any, propertyKey: string, descriptor: PropertyDescriptor) => PropertyDescriptor {

    // Create a closure over shouldExecute that is used in the returned decorator function

    return (target : any, propertyKey: string, descriptor: PropertyDescriptor): PropertyDescriptor => {
      var oldDescriptor = descriptor.value;

      descriptor.value = function () {
        console.log(`Called: '${propertyKey}' with args: `, arguments, "\n");
        
        let ret : any = null;
        if (shouldExecute) {
            ret = oldDescriptor.apply(this, arguments);
        }

        return ret;
      }

      return descriptor;
    }
}

export default class MethodDecorated {
    public aVar : string;

    constructor(val ?: string) {
        if (val) {
            this.aVar = val;
        }
    }

    aMethod(arg1 : string, arg2 : string) {
        console.log(`Executed aMethod()\n`);
    }

    @LogOnly
    aLoggedOnlyMethod(arg1 : string, arg2 : string) {
        console.log(`Executed aDecoratedMethod()\n`);
    }

    @LogAndExecute
    aLoggedAndExecutedMethod(arg1 : string, arg2 : string) {
        console.log(`Executed aLoggedAndExecutedMethod()\n`);
    }

    @LogAndMaybeExecute(true)
    aLoggedAndChosenToExecuteMethod(arg1 : string, arg2 : string) {
        console.log(`Executed aLoggedAndChosenToExecuteMethod()\n`);
    }

    @LogAndMaybeExecute(false)
    aLoggedAndChosenNotToExecuteMethod(arg1 : string, arg2 : string) {
        console.log(`Executed aLoggedAndChosenNotToExecuteMethod()\n`);
    }
}