function createPerson (name) {
const obj = {};
obj.name = name,
obj.introduceSelf = function() {
    console.log (`Hi! i'm ${this.name}.`)
}
return obj
}