var express=require('express');
var path=require('path');
var Movies=require('./db').Movies;
var app=express();
app.set('view engine','html');
app.set('views',path.join(__dirname,'views'));
app.engine('.html',require('ejs').__express);
var Job = require('cron').CronJob;
var job = new Job('* * * * * *', function () {

});
job.start();
app.get('/',function (req, res) {
    Movies.find({},function (err,movies) {
        res.render('index',{movies})
    });
});
app.listen(12315);