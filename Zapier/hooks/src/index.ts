import express from "express";


const app = express();





//password logic 
app.post("/hooks/catch/:userId/:zapId", (req, res) => {
    const userId = req.params.userId;
    const zapId = req.params.zapId;

    // Check if the password is correct

    // store it in a database or something

    //push it n  to a queue (kafka /redis)
})






app.listen(3000, () => {
  console.log("Hooks listening on port 3000!");
}
);