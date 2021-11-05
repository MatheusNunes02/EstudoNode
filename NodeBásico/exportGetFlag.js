module.exports = function getFlag(flag, array){
    let indexFlag = array.indexOf(flag);
    let flagValue = array[indexFlag+1]
    return flagValue
}