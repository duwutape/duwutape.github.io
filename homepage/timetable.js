const toggleTimetable = function () {
    const timetable = document.getElementById("timetable");
    if (timetable.style.visibility === "visible") {
        timetable.style.visibility =  "hidden";
    }
    else {
        timetable.style.visibility = "visible";
    }
}