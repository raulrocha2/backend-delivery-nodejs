import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors'
import { routes } from './routes'
const app = express()
const port = 3000;

app.use(express.json());

app.use(routes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof Error) {
    return res.status(400).json({
      message: err.message
    });

    return res.status(500).json({
      status: "error",
      message: "Internal server error"
    })
  }
})

app.listen(port, () => console.log(`App listening on port ${port}!`))