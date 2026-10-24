const express=require('express'),http=require('http'),cors=require('cors');const {Server}=require('socket.io');
const app=express();app.use(cors());app.get('/',(_,res)=>res.json({app:'Pulse Chat',status:'online'}));
const server=http.createServer(app);const io=new Server(server,{cors:{origin:'http://localhost:5172'}});
const history=[];
io.on('connection',socket=>{socket.emit('history',history);socket.on('join',raw=>{const name=String(raw||'Guest').trim().slice(0,24)||'Guest';socket.data.name=name;io.emit('system',`${name} joined the room`)});socket.on('message',raw=>{const text=String(raw||'').trim().slice(0,500);if(!text)return;const msg={id:Date.now()+'-'+Math.random(),name:socket.data.name||'Guest',text,time:new Date().toLocaleTimeString()};history.push(msg);if(history.length>50)history.shift();io.emit('message',msg)});socket.on('disconnect',()=>{if(socket.data.name)io.emit('system',`${socket.data.name} left the room`)})});
server.listen(5112,()=>console.log('Pulse Chat Socket.IO: http://localhost:5112'));
