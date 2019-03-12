import io from 'socket.io-client';
let socket = io.connect('http://172.20.10.8:8000');

export default socket;