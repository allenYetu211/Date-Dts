let timeType = {
    LTS  : 'h:mm:ss A',
    LT   : 'h:mm A',
    L    : 'MM/DD/YYYY',
    LL   : 'MMMM D, YYYY',
    LLL  : 'MMMM D, YYYY h:mm A',
    LLLL : 'dddd, MMMM D, YYYY h:mm A'
}

const dtsMoment = (...theArg) => {
    return disposeConfig.apply(null,theArg)
}

const disposeConfig = (...theArg) => {
    if (theArg.length === 0 ) {
        return createLocalTime(new window.Date())
    } else if (theArg.length === 1) {
        return verificationTime(theArg[0])
    }
}

const createLocalTime = (time) =>  {
    let Date = time
    let dts = {
        _y:  Date.getFullYear(),                                  // 年
        _m:  disposeTime(Date.getMonth() + 1),                    // 月
        _d:  disposeTime(Date.getDate()),                         // 日期
        _dy:  Date.getDay() === 0 ? 7 : Date.getDay(),            // 星期
        _h:  disposeTime(Date.getHours()),                        // 时
        _mt: disposeTime(Date.getMinutes()),                      // 分
        _se: disposeTime(Date.getSeconds()),                      // 秒
        _tp: Date.getTime()                                       // 时间戳
    }
    return dts
}
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


const verifyConfig = (to , from ) =>{
   for (let i in from) {
       if (from[i] !== undefined) {
           to[i] = from[i]
       }
   }
   return to
 }


class TimeCycle {
    constructor(config) {
        // verifyConfig(this, config)
        this._d = new Date(
            config._d != null ? config._d.getTime() : NaN
        )
    }


}

export default dtsMoment