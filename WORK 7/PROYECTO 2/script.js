function updateClock() {
    var now = new Date();
    var hours = now.getHours().toString().padStart(2, '0');
    var minutes = now.getMinutes().toString().padStart(2, '0');
    var seconds = now.getSeconds().toString().padStart(2, '0');
    var time = hours + ':' + minutes + ':' + seconds;
    
    document.getElementById('clock').textContent = time;

    var day = now.getDate().toString().padStart(2, '0');
    var month = (now.getMonth() + 1).toString().padStart(2, '0');
    var year = now.getFullYear();
    var date = day + '/' + month + '/' + year;

    document.getElementById('date').textContent = date;
}

setInterval(updateClock, 1000);