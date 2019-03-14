import io from 'socket.io-client';
let socket = io.connect('http://10.150.50.100:8000');

export default socket;