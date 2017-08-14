
class Utils {

    static IsObject(obj) {
        return Object.prototype.toString.call(obj) === "[object Object]";
    }

    static IsArray(obj) {
        return Object.prototype.toString.call(obj) === "[object Array]";
    }
    
    static IsNULL(obj) {
        return Object.prototype.toString.call(obj) === "[object Null]";
    }
    
    static IsFunction(obj) {
        return Object.prototype.toString.call(obj) === "[object Function]";
    }
    
    static IsBoolean(obj) {
        return Object.prototype.toString.call(obj) === "[object Boolean]";
    }
    
    static IsNumber(obj) {
        return Object.prototype.toString.call(obj) === "[object Number]";
    }
    
    static IsString(obj) {
        return Object.prototype.toString.call(obj) === "[object String]";
    }

    static IsUndefined(obj) {
        return Object.prototype.toString.call(obj) === "[object Undefined]";
    }
}
  
export default Utils;