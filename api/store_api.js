app.get('/api/wechat-disable&', function(req, res, next) {

  //{"access_token":"j9fzC-igrS5wdjz5-HipkHGEkx1REvEWJlcKeH5QMXOIfpty6L_NxpKEczCZTXaD2s05AX_X5NIA8YHrXDgGA3Hptl-d334O7UTta_wyAnAkO_A2fh5GEQxaQ6L-45zzXGWcAAAIRH","expires_in":7200}
//https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx6279c92b6033c8a0&redirect_uri=https%3A%2F%2Fchong.qq.com%2Fphp%2Findex.php%3Fd%3D%26c%3DwxAdapter%26m%3DmobileDeal%26showwxpaytitle%3D1%26vb2ctag%3D4_2030_5_1194_60&response_type=code&scope=snsapi_base&state=123#wechat_redirect

  async.waterfall([
    function(callback) {
      var now = new Date();
      if(!access_token || access_token.length <=0 || timestamp<now)
      {
        var url = 'https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=wxde6d67b03d7f4f8f&secret=b15a3c7dba2f5f079512d3e189ff4d42';
        request.get(url, function(e, r, result) {
          if (e) return next(e);
          var json_result = JSON.parse(result);
          access_token = json_result['access_token'];
          timestamp = new Date();
          callback(e,access_token);
        });
      }
    },
    function(token, callback){
      var url = 'https://api.weixin.qq.com/cgi-bin/ticket/getticket?access_token='+token+'&type=jsapi';
      request.get(url, function(e, r, result) {
        if (e) return next(e);
        var json_result = JSON.parse(result);
        var ticket = json_result['ticket'];
        //console.log(ticket);
        //timestamp = new Date();
        callback(e,ticket);
      });
    },
    function(ticket){
      var nonce = makeid();
      var crypto = require('crypto')
        , shasum = crypto.createHash('sha1');
      var ts = new Date();
      var ts_stamp = ts.getTime().toString().substring(0,10);
      var string1 = 'jsapi_ticket='+ticket+'&noncestr='+nonce+'&timestamp='+ts_stamp+'&url=stoven.me';
      //console.log(string1);
      shasum.update(string1);
      var signiture = shasum.digest('hex');

      //console.log(signiture);
      res.send({
        noncestr: nonce,
        timestamp: ts_stamp,
        signiture: signiture
      });
    }
  ]);
});


