import express from 'express';
import { userRouter } from './router/user';
import { zapRouter } from './router/zap';
import cors from 'cors';

import { prisma } from 'zapier-database';

const app = express()


app.use(express.json());
app.use(cors())
app.get('/', (req, res) => {
  res.json({ message: 'Hello from the primary backend!' });
});



app.use("/api/v1/user",userRouter )
app.use("/api/v1/zap", zapRouter )


app.listen(3000, () => {
  console.log('Primary backend is running on port 3000');
}
);