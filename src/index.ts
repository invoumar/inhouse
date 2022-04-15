import express, { Application, Request, Response } from "express";

const port = 3000;
const app: Application = express();

app.get('/',(req:Request, res:Response)=>{
    res.json({
        message: 'Hello World',
    });
});

app.listen(port,()=>{
    console.log(`Server is starting at port:${port}`)
})

export default app;