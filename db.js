var mongoose=require('mongoose');
mongoose.connect('mongodb://127.0.0.1/crawl-sun');
var MoviesSchema=new mongoose.Schema({
    name:String,
    url:String
});
exports.Movies=mongoose.model('Movies',MoviesSchema);
