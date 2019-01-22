window.addEventListener('DOMContentLoaded', function() {
    let div = document.querySelector('div'),
     timerId = setInterval(editTime, 1000);
    function editTime() {
        let time = new Date;
        time = `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`;
        time = time.split(':');
        for (let i = 0; i < time.length; i++) {
            if (time[i].length < 2) {
                time[i] = 0 + time[i];
            } 
        }
        div.textContent = time.join(':');
    }
    
});