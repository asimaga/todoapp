import express from 'express'
const app = express();
import cors from 'cors'

app.use(express.json())
app.use(cors());
app.post('/add',(req,res)=>{
    const a = parseInt(req.body.a) ;
    const b = parseInt(req.body.b) ;
     res.json({
        addition : a + b
     })

})

app.listen(3000);