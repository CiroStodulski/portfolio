var express = require('express');
var app = express();
app.use(express.static(__dirname + '/app/dist/aplicacao')); //aqui você define onde está o index.html da sua aplicação.
var port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('Umbler listening on port %s', port);
});

//app.get('/', (req, res)=> res.send('batata'));