function showTime() {
    var date = new Date();
    var y = date.getyears();
    var m = date.getMonths();
    var d = date.getdays();
    var session = "Am";

    if (h == 0) {
        h = 12;
    }

    if (h > 12) {
        h = h - 12;
        session = "PM";
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("MyCalendarDisplay").innerText = time;
    setTimeout(showTime, 1000);
}

showTime();