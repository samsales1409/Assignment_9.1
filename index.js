//Object creation
function createObject() {
    //creation object constructoe
    var myObject = new Object();
    myObject.name = "bala";
    myObject.height = 180;
    myObject.aboutYourSelf = function () {
        return "I am " + this.name + ". I am " + this.height + " cm height";
    }
    return myObject;
}

var me = createObject();
console.log(me.aboutYourSelf());
