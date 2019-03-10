import socket from '../src/Utility/socketConnection'


script.src="http://10.150.41.121:8000/socket.io/socket.io.js";

    document.onkeydown = checkKeyDown;
    document.onkeyup = checkKeyUp

    function checkKeyUp(e){
        e = e || window.event;
        if (e.keyCode == '38') {
            // up arrow
            socket.emit('stop')
        }        
        if (e.keyCode == '40') {
            // down arrow
            socket.emit('stop')
        }
        if (e.keyCode == '37') {
            // left arrow
            socket.emit('stop')
        }  
        if (e.keyCode == '39') {
            // right arrow
            socket.emit('stop')
        }    
    }

    function checkKeyDown(e) {
        e = e || window.event;
        if (e.keyCode == '38') {
            // up arrow
            socket.emit('forward')
        }
        else if (e.keyCode == '40') {
            // down arrow
            socket.emit('backward')
        }
        else if (e.keyCode == '37') {
        // left arrow
        socket.emit('left')
        }
        else if (e.keyCode == '39') {
        // right arrow
        socket.emit('right')
        }
        else if (e.keyCode == '39' && '38') {
        // right arrow
        socket.emit('upright')
        }


    }



