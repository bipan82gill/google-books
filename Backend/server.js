const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/api-routes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extended:true}));
app.use(express.json());

if(process.env.NODE_ENV === "production"){
    app.use(express.static("Client/build"));
}
app.use(routes);

app.listen(PORT, function(){
    console.log(`Server is running http://localhost:${PORT}`)
});