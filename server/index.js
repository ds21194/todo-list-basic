const express = require('express');
const app = express();

app.get('/', (request, response) => {
    // response.send("hello world!");

    if(request.query.thoughts === "something"){
        response.render("");
    }
    else{
        response.send("Uf");
    }
});

app.listen(3001, ()=>{
    console.log("app is listening on port 3001");
});
