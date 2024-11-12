const inRange = function(i, low, high) {
    return i >= low && i <= high;
}

const getTableCell = function(t, day) {
    let cell;
    if      (inRange(t, 800, 859)) cell = 1
    else if (inRange(t, 900, 959)) cell = 2
    else if (inRange(t, 1000, 1059)) cell = 3
    else if (inRange(t, 1100, 1159)) cell = 4
    else if (inRange(t, 1200, 1259)) cell = 5
    else if (inRange(t, 1300, 1359)) cell = 6
    else if (inRange(t, 1400, 1459)) cell = 7
    else if (inRange(t, 1500, 1559)) cell = 8
    else if (inRange(t, 1600, 1659)) cell = 9
    else if (inRange(t, 1700, 1759)) cell = 10;
    return `${day}${cell}`;
}

const markActive = function() {
    const date = new Date();

    const day = days[date.getDay()].toLowerCase();
    const hour = pad(date.getHours(), 2, 0);
    const minute = pad(date.getMinutes(), 2, 0);
    const time = `${hour}${minute}`;

    const target = document.getElementById(getTableCell(time, day));
    const color = target.className;

    const old_hour = pad(date.getHours() - 1, 2, 0);
    const old_time = `${old_hour}${minute}`;
    const old_target = document.getElementById(getTableCell(old_time, day));
    const old_color = old_target.className;

    if (target) {

        if (color === "red") {
            target.style.background = "rgba(206, 40, 40, 0.6)";
        }
        else if (color === "purple") {
            target.style.background = "rgba(137, 60, 158, 0.6)";
        }
        else if (color === "blue") {
            target.style.background = "rgba(0, 60, 158, 0.6)";
        }
        else {
            target.style.background = "rgba(52, 57, 64, 0.6)";
        }
        target.style.border = "1px red solid";
        target.style.fontWeight = "bold";
    }

    if (old_target) {
        if (old_color === "red") {
            old_target.style.background = "rgba(255, 51, 51, 0.2)";
        }
        else if (old_color === "purple") {
            old_target.style.background = "rgba(172, 76, 198, 0.2)";
        }
        else if (old_color === "blue") {
            old_target.style.background = "rgba(0, 76, 198, 0.2)";
        }
        else {
            old_target.style.background = "none";
        }
        old_target.style.border = "1px black solid";
        old_target.style.fontWeight = "normal";
    }
}

window.onload = markActive();
setInterval(markActive, 60000);