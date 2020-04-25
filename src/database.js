const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://ed:ed@cluster0-jyx3d.mongodb.net/test?retryWrites=true&w=majority',{

useNewUrlParser: true ,
useUnifiedTopology: true 
})

.then(() => console.log ('Connecting DB'))
.catch(e => comsole.log(e));