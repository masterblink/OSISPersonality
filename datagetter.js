/**
 * Created by Administrador on 16/02/2017.
 */
var getCompany = function() {
    var nano = require('nano')('https://2b54d91a-d555-4f31-a6c4-485092368d0a-bluemix:67e30e875157bdd292bd7b55d3af63066dba29cc373f4447f3357c55802bb563@2b54d91a-d555-4f31-a6c4-485092368d0a-bluemix.cloudant.com'),
        db = nano.use('compania_cia'),
        result = '';

    db.get('compania_cia', function (err, body) {
        if (!err) {
            console.log(body);
            result = body;
            return body;

        }
        return result;
    });
};
getCompany();
