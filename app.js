
var express = require('express')
let ejs = require('ejs');
var app = express()
app.set('view engine', 'ejs')


var toDay = new Date()
var day=''
var option ={
    weekday:"long",
    day:'numeric',
    month:'long'
}
day = toDay.toLocaleDateString('en-US', option)
app.get('/',(req,res)=>{
    
    res.render('index',{day:day})

    // if(toDay.getDay()== 5 ){
    //     day = 'جمعه'
        
    // }else{
    //     day ='روز کاری هفته'
    // }
    // res.render('index',{day:day})

    // res.write(`Today date is ${toDay.getDate()}`)
    // res.send('This is Home page')
    // res.send()
    // res.sendFile(__dirname + '/index.html')
    // res.render('index',{vToDay:toDay})
    

    // switch(toDay.getDay()){
    //     case 0:
    //         day = 'یکشنبه'
    //         res.render('index',{day:day})

    
    //     case 1:
    //         day = 'دوشنبه'
    //          res.render('index',{day:day})
    
   
    //     case 2:
    //         day = 'سه شنبه'
    //         res.render('index',{day:day})    
            
    
    //     case 3:
    //         day = 'چهارشنبه'
    //         res.render('index',{day:day}) 


    
    //     case 4:
    //         day = 'پنجشنبه'
    //         res.render('index',{day:day})   

    //     case 5:
    //         day = 'جمعه'
    //         res.render('index',{day:day}) 
            
    //     case 6:
    //         day = 'شنبه'
    //         res.render('index',{day:day}) 

    //          }

             
    
})

app.get('/books',(req,res)=>{
    // res.sendFile(__dirname + '/books.html')


})

app.listen(4002, ()=>{
    console.log('Our server is runing on port 4002')
})