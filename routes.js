var controllercalculadora = require ('./calculadoracontroller.js');
module.exports= function(app){
    app.post('/Asumar',controllercalculadora.Sumar);
    app.post('/Arestar',controllercalculadora.Restar);
    app.post('/Amulti',controllercalculadora.Multi);
    app.post('/Adiv',controllercalculadora.Div);
    app.get('*', function(req, res){
        res.sendfile('/.login.html');
    });
};