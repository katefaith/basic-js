module.exports = function repeater(str, options) {
    let repeatTimes = options.repeatTimes
    const separator = (options.separator) ? options.separator : '+'
    let addition  = ( String(options.addition) && typeof options.addition != 'undefined' ) ? String(options.addition) : ''
    let additionRepeatTimes = options.additionRepeatTimes
    const additionSeparator = (options.additionSeparator) ? options.additionSeparator : ''

    while (additionRepeatTimes - 1) {
        addition = addition + additionSeparator + options.addition
        additionRepeatTimes--
    }

    const repeatedStr = str + addition
    let res = repeatedStr

    while (repeatTimes - 1) {
        res += separator + repeatedStr
        repeatTimes--
    }

    return res
};
