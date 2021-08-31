const express=require('express')
const app=express()
const day= new Date()
const logger=(req, res, next)=>{

    // console.log(day.getHours())
    // console.log(day.getDay())
    if ((day.getDay()==0 || day.getDay() ==6) ||
    (day.getHours()>17 || day.getHours()<6 )){
        return res.sendFile(__dirname+"/public/closed.html")
    }
    next()
}

// app.user(logger)
app.get('/', logger,(req,res)=>{
    res.sendFile(__dirname+"/public/index.html")
})
app.get('/service',  logger,(req,res)=>{
    res.sendFile(__dirname+"/public/services.html")
})
app.get('/contact', logger, (req,res)=>{
    res.sendFile(__dirname+"/public/contact.html")
})
app.get('/style.css', (req,res)=>{
    res.sendFile(__dirname+"/style.css")
})
app.get('/hello', (req,res)=>{
    res.sendFile(__dirname+"/public/a.html")
})


const port=5000
app.listen(port,()=>{
    console.log(`server running on port ${port}`)
})