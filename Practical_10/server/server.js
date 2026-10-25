require('dotenv').config();const express=require('express'),mongoose=require('mongoose'),cors=require('cors');
const app=express();app.use(cors());app.use(express.json());
const Task=mongoose.model('LearningTask',new mongoose.Schema({title:{type:String,required:true},topic:{type:String,required:true},done:{type:Boolean,default:false}},{timestamps:true}));
app.get('/api/tasks',async(req,res)=>{try{res.json(await Task.find().sort({createdAt:-1}))}catch(e){res.status(500).json({error:e.message})}});
app.post('/api/tasks',async(req,res)=>{try{res.status(201).json(await Task.create(req.body))}catch(e){res.status(400).json({error:e.message})}});
app.patch('/api/tasks/:id',async(req,res)=>{try{const t=await Task.findByIdAndUpdate(req.params.id,{$set:{done:!!req.body.done}},{new:true});res.json(t)}catch(e){res.status(400).json({error:e.message})}});
app.delete('/api/tasks/:id',async(req,res)=>{try{await Task.findByIdAndDelete(req.params.id);res.json({deleted:true})}catch(e){res.status(400).json({error:e.message})}});
mongoose.connect(process.env.MONGO_URI||'mongodb://127.0.0.1:27017/jay_study_board').then(()=>app.listen(5110,()=>console.log('Study Board API: http://localhost:5110'))).catch(console.error);
