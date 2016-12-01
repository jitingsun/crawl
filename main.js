var read=require('./read');
var save=require('./save');
var async=require('async');
var url='http://top.baidu.com/buzz?b=26&c=1&fr=topcategory_c1';
var movies;
async.series([
   function (cb) {
       read(url,function (err,items) {
           movies=items;
           cb();
       })
   },
    function (cb) {
        save(movies,cb);
    }
],function (err, result) {
    console.log('success');
    process.exit();
});