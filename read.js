/**
 * @param url 是抓取的网页url地址
 * @param callback 回调函数，有2个参数，1是错误对象，2是读取的对象数组
 * 1 请求url地址，得到响应体转成utf8字符串，再用cheerio从中提取出对象数组
 */
var request=require('request');
var iconv=require('iconv-lite');
var cheerio=require('cheerio');
module.exports=function (url,callback) {
    request({url,encoding:null},function (err,response,body) {
      body=iconv.decode(body,'gbk');
        var $=cheerio.load(body);
        var items=[];
        $('.keyword .list-title').each(function () {
            var $me=$(this);
            items.push({
                name:$me.text(),
                url:$me.attr('href')
            });
        });
        callback(err,items);
    })
};
module.exports('http://top.baidu.com/buzz?b=26&c=1&fr=topcategory_c1',function (err, items) {

});