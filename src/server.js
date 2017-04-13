const http = require('http');
const html =`
<!doctype>
    <html>
        <head>
            <meta charset ="utf-8">
            <title>Node.js Basics</title>
            <style>
                body{
                margin:0;
                padding:0;
                text-align:center;
                }
                h1{
                background-color: #43853d;
                color:white;
                padding:.5em;
                font-familt:'Consolas'
                }
            </style>
        </head>
        <body>
            <h1>Node.js Basics</h1>
            <button onclick ="alert('Node.js in action')">Tap on me</button>
        </body>
</html>
`;
const css =``;
const js =``;

    http.createServer((req, res) => {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(`         `);
    }).listen(3000, () => console.log('Server works correct'));
