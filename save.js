var Movies=require('./db').Movies;
Movies.remove({},function (err,callback) {
});
module.exports=function (items, callback) {
    Movies.create(items,callback);
};