const pad = function (num, len, sym) {
    return num.toString().padStart(len, sym);
}

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const scriptInit = function (name) {
    const script = document.createElement('script');
    script.src = `./js/${name}.js`;
    script.async = true;
    document.head.appendChild(script);
}

scriptInit("highlight");
scriptInit("timetable");