const MyApp= require('./app.js')

const port=5000

MyApp.listen(port, ()=>{
    console.log(`API corriendo en el puerto: ${port}`)
})