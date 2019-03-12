import io from 'socket.io-client';
let socket = io.connect('http://10.150.10.234:8000');

export default socket;