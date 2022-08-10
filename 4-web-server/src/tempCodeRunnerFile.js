
    // render is used to render file meaning template engine
    res.render('index',{
        title:'mahir'
    })
})

app.listen(3000,()=>{
    console.log("server of template engine started");
})