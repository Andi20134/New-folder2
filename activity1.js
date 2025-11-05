function showCalendar() {
    const calendarDiv = document.getElementById("MyCalendarDisplay");
    const today = new Date();
    const month = today.getMonth();
    const year = today.getFullYear();

    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    let calendarHTML = `<h2>${monthNames[month]} ${year}</h2>`;
    calendarHTML += "<table><tr>";

    const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    for (let day of dayNames) {
        calendarHTML += `<th>${day}</th>`;
    }
    calendarHTML += "</tr><tr>";

    for (let i = 0; i < firstDay; i++) {
        calendarHTML += "<td></td>";
    }

    for (let date = 1; date <= daysInMonth; date++) {
        if ((firstDay + date - 1) % 7 === 0 && date !== 1) {
            calendarHTML += "</tr><tr>";
        }
        calendarHTML += `<td>${date}</td>`;
    }

    calendarHTML += "</tr></table>";
    calendarDiv.innerHTML = calendarHTML;
}