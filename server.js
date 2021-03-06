var express = require('express'),
    handlebars = require('hbs'),
    consolidate = require('consolidate'),
    path = require('path'),
    routes = require('./app/routes'),
    app = express();



app.configure(function () {
    app.set('port', 8080);
    app.set('view engine', 'hbs');
    app.engine('hbs', consolidate.handlebars);
    app.set('views', __dirname + '/app/templates');
    app.set('view options', {layout: false});
    app.use(express.logger());
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(express.compress());
    //TODO handle environment configurations the right way
    console.log('Using local configuration');
    app.use(express.static(path.join(__dirname, './app')));
    console.log('Server loaded in local configuration');

});

app.use(app.router);

app.get('/', routes.home);
app.get('/about', routes.about);

app.listen(app.get('port'), function(req, res, err){
    console.log('Fuel app reporting for duty on port ' + app.get('port'));
});

module.exports = app;





