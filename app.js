const express= require("express");
const addDays= require("date-fns/addDays");

const app= express();

app.get("/", (request, response) => {
    let todayDate= new Date();
    let result= addDays(new Date(todayDate.getFullYear(), todayDate.getMonth(), todayDate.getDate()), 100)
    let response.send(`${result.getDate()}/${result.getMonth()+1}/${result.getFullYear()}`)
});

module.exports= app;