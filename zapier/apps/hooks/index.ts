import { PrismaClient } from "@prisma/client";
import { prisma } from 'database';
import express from "express";

const client = new PrismaClient();
const app = express();


app.use(express.json());


//password logic 
app.post("/hooks/catch/:userId/:zapId", async(req, res) => {
    const userId = req.params.userId;
    const zapId = req.params.zapId;
    const body = req.body;

    // Check if the password is correct

    // store it in a database or something

    await client.$transaction(async tx => {
        const run = await client.zapRun.create({
            data: {
              zapId:zapId,
              metadata:body}
            })

        await client.zapRunOutbox.create({

            data: { zapRunId: run.id  },
          });

})





})






app.listen(3000, () => {
  console.log("Hooks listening on port 3000!");
}
);