require("dotenv").config();
const express = require('express');
const connectDB = require("./config/db")
const app = express();
const PORT = 5000;
connectDB();
app.use(express.json());


app.get("/", (req, res) => res.send("🎧 VibeCheck API is Live"));

//
app.use("/api/v1/auth", require("./routes/auth"));
app.use("/api/v1/vibes", require("./routes/vibes"));
// const sampleVibes = [
//     {id:1,user:"Hruthik",vibe:'Explore new things',mood:'Relaxed'},
//     {id:2,user:"Anjali",vibe:'will create chaos',mood:'Hyper-active'},
//     {id:3,user:"Mahanth",vibe:'workout beast mode',mood:'Calm'}
// ];


//root route
// app.get('/',(req,res) => {
//     res.send("Hello welcome to vibecheck-api");
// });

// //get all vibes
// app.get('/api/v1/vibes',(req,res) =>{
//     res.status(200).json(sampleVibes);
// });


// //
// app.get('/api/v1/vibes/:id',(req,res) => {
//     const vibeId = parseInt(req.params.id);
//     const vibe = sampleVibes.find(v => v.id === vibeId);

//     if(!vibe){
//         return res.status(404).json({ "success": false, "message": "That vibe is off the grid, not found." });
//     }
//     res.status(200).json(vibe);
// });


//server
app.listen(PORT, () => {
    console.log(`Server blasting off on port:${PORT}`);
});