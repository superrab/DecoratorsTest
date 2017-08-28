
/**
 * Using a decorator we can replace the existing getter and setter for the property and do some
 * annoying things.
 */
function ReplaceGetterSetter(target : any, key: string): void {
    // original property value
    var _val = target[key];

    // Create new property with getter and setter
    Object.defineProperty(target, key, {
      get: function () { return `You can't get the original value (${_val}) anymore!`; },
      set: function (newVal : any) { _val = newVal + "IADDEDTHIS!"; }
    });
}

/**
 * Uses a factory to achieve the same results as above.
 */
function HardCodedReplacedGetterAndSetter(getVal : string, setVal : string) 
    : (target : any, key: string) => void {
        
     return (target2 : any, key2: string) : void => {

        Object.defineProperty(target2, key2, {
        get: function () { return `Have ${getVal} instead!`; },
        set: function (newVal : any) { console.log(`I won't let you set it to ${setVal}!`); }
        });

     };
}

export default class PropertyDecorated {
   
    @ReplaceGetterSetter
    public replacedGetterSetter : string;

    @HardCodedReplacedGetterAndSetter("GETTER", "SETTER")
    public hardReplacedGetterAndSetter : string;
}