const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    const htmlResponse = `
        <html>
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Document</title>
            </head>
            <body>
                <h1>Soy un broyecto en back end en vercel </h1>
            </body>
        </html>
`;
    res.send(htmlResponse);
})

app.listen(port, () => {
    console.log(`port runing in http://localhost:${port}`);
});