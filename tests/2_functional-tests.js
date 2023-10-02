const chaiHttp = require('chai-http');
const chai = require('chai');
const assert = chai.assert;
const server = require('../server');

chai.use(chaiHttp);
// Viewing one stock: GET request to /api/stock-prices/
// Viewing one stock and liking it: GET request to /api/stock-prices/
// Viewing the same stock and liking it again: GET request to /api/stock-prices/
// Viewing two stocks: GET request to /api/stock-prices/
// Viewing two stocks and liking them: GET request to /api/stock-prices/
suite('Functional Tests', function() {
    suite("5 function get request tests", function(){
        test("Viewing one stock: GET request to /api/stock-prices/",function(done){
            chai
            .request(server)
            .get("/api/stock-prices/")
            .set("connent-type","application/json")
            .query({stock: "TSLA"})
            .end(function (err,res){
                assert.equal(res.status,200);
                assert.equal(res.body.stockData.stock,"TSLA");
                assert.exists(res.body.stockData.price,"TSLA has a price");
                done();
            });
        });
    });
});
