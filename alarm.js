console.log("Hello world!");

let alarm_submit = document.getElementById("alarm_submit")
let alarm_cancle = document.getElementById("alarm_cancle")

alarm_submit.addEventListener("click", () => {
    console.log("Hello !");
    let alarm = document.getElementById("alarm")
    // console.log(alarm.value)


    let alarm_date = new Date(alarm.value)
    console.log(alarm_date.toLocaleTimeString('en-US', { hour12: true }))

    let now = new Date()
    let time_now = alarm_date - now
    console.log(time_now)

    setInterval(() => {
        let sec_alarm = document.getElementById("sec_alarm")
        let second_alarm = document.getElementById("second_alarm")
        sec_alarm.innerHTML = `Alarm ringing in ${time_now} Seconds`
        second_alarm.innerHTML = `Your alarm timing is ${alarm_date.toLocaleTimeString('en-US', { hour12: true })}`
    }, 1000)

    if (time_now => 0) {
        setTimeout(() => {
            var audio = new Audio("Unstoppable English Song Download Mp3(SongsZilla.Net).mp3")
            audio.play()
            alarm_cancle.addEventListener("click", () => {

                audio.pause()

            })
        }, time_now)

    }
    alarm.value = ""

})


