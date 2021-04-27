const express = require("express");
const app = express();


//Home Page Route always use "/" for home
app.get("/", function(req, res) {
    res.send("Welcome to my website")
})

app.get("/about/:team/:personell", function(req, res) {
    const title = req.params.team;
    const author = req.params.personell;
    res.send("About Us Page: " + title + "!!! Employee name: " + author);
    // console.log("Hello You have console to the Hello page")

});

app.get("/services", function(req, res) {
    res.send("This are our First Class Services");
});


// Error 404 Route
app.get("*", function(req, res) {
    res.send("Error!! That route doesn't exist.. You are lost");
});

app.listen(3000, function() {
    console.log("Gaming Website has started up!!! made by Brian Muhindi Mwangi.");
});