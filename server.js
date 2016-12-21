const net = require('net');

let server = net.createServer((client) => {
    console.log('클라이언트가 연결되었습니다.');
});

server.listen(8888, 'localhost', ()=>{
    console.log('서버가 연결대기중입니다.')
});