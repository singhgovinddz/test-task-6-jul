import express, { Express, Request, Response } from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import accountRouter from './src/routes/account.route';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.use('/account', accountRouter);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
