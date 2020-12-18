module.exports= function(app,db){
    app.post('/todos',(req, res) => {
        // Write the code that will create the Todo item
        res.send('You made a new Todo!')
    })
}
