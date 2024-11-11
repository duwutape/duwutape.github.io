const toggleTimetable = function () {
    const timetable = document.getElementById("timetable");
    if (timetable.style.opacity === "0") {
        timetable.style.opacity =  "1";
    }
    else {
        timetable.style.opacity = "0";
    }
}