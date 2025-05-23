// // src/hooks/useSocket.js
// import { useEffect, useState } from 'react';
// import { io } from 'socket.io-client';
// //import Cookies from 'js-cookie';

// const useSocket = () => {
    
//     const [socket, setSocket] = useState(null);

//     useEffect(() => {

//         const token = localStorage.getItem('accessToken')
//         //console.log(token)
//         if (token) {
//             // Connect to the Socket.io server
//             const socketConnection = io('http://localhost:8000', {
//                 transports: ['websocket'],
//                 query: { token },
//             });

//             socketConnection.on('connect', () => {
//                 console.log('Connected to WebSocket server');
//             });

//             socketConnection.on('message', (message) => {
//                 console.log('Received message:', message);
//             });

//             setSocket(socketConnection);

//             // Cleanup the socket connection when the component is unmounted
//             return () => {
//                 socketConnection.disconnect();
//             };
//         }
//     }, []);

//     return socket;
// };

// export default useSocket;
