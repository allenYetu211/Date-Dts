let timeType = {
    LTS  : 'h:mm:ss A',
    LT   : 'h:mm A',
    L    : 'MM/DD/YYYY',
    LL   : 'MMMM D, YYYY',
    LLL  : 'MMMM D, YYYY h:mm A',
    LLLL : 'dddd, MMMM D, YYYY h:mm A'
}

const dtsMoment = (...theArg) => {
     disposeConfig.apply(null,theArg)
}

const disposeConfig = (date, type) => {
    let time = new Date()
    if (date !== undefined && Object.time != 'Invalid Date') {
        throw 'please input correct param!'
    }
    let config = createLocalTime(time,date, type)
    createInstance(config)
}

const createLocalTime = (time, date, type) =>  {
    let Date = time
    let dts = {
        _y:  Date.getFullYear(),                                  // 年
        _m:  disposeTime(Date.getMonth() + 1),                    // 月
        _d:  disposeTime(Date.getDate()),                         // 日期
        _dy:  Date.getDay() === 0 ? 7 : Date.getDay(),            // 星期
        _h:  disposeTime(Date.getHours()),                        // 时
        _mt: disposeTime(Date.getMinutes()),                      // 分
        _se: disposeTime(Date.getSeconds()),                      // 秒
        _tp: Date.getTime(),                                      // 时间戳
        _input: date,
        _type : type
    }
    return dts
}

const createInstance = (config) => {
    let res = new TimeCycle(config)
    window.res = res
    return res
}

// const createLocalTime = (time) =>  {
//     let Date = time
//     let dts = {
//         _y:  Date.getFullYear(),                                  // 年
//         _m:  disposeTime(Date.getMonth() + 1),                    // 月
//         _d:  disposeTime(Date.getDate()),                         // 日期
//         _dy:  Date.getDay() === 0 ? 7 : Date.getDay(),            // 星期
//         _h:  disposeTime(Date.getHours()),                        // 时
//         _mt: disposeTime(Date.getMinutes()),                      // 分
//         _se: disposeTime(Date.getSeconds()),                      // 秒
//         _tp: Date.getTime()                                       // 时间戳
//     }
//     return dts
// }
const disposeTime = (param) => {
    return param < 10 ? '0' + param : param
}

const verificationTime = (date) => {
    let _d = new Date(date)
    if (toString(_d) === 'Invalid Date') {
        throw ': Parameter input correct parameter!'
    }
    let dts = createLocalTime(_d)
    dts.momentLTS = `${dts._y}/${dts._m}/${dts._d}`
    dts.momentHMS = `${dts._h}:${dts._mt}:${dts._se}`
    return dts
}

const copyConfig = (to, from) => {
    Object.keys(from).map(e => {
        if (from[e] !== undefined) {
            to[e] = from[e]
        }
    })
}

class TimeCycle {
    constructor(config) {
        copyConfig(this, config)
        this.verificationConfig(config)

    }

    verificationConfig(config) {
        if (!!config._type)   {
            timeType[config._type]
        }
    }

    getTime() {

    }

}




export default dtsMoment