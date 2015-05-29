var assert = require('assert');
require('blanket');

describe("Integration", function() {
    describe("Travis Webhook", function() {
        var expressMock = function() {
            return {
                use: function() {},
                get: function() {},
                listen: function() {}
            }
        };
        var router = {
            post: function() {}
        };
        expressMock.Router = function() {
            return router;
        };

        var resMock = {
            header: function() {},
            json: function() {}
        };

        it("Attaching handler works", function(done) {
            var handlerMock = {
                handle: function() {
                    done();
                }
            }

            expressMock.Router = function() {
                return {
                    post: function(endpoint, handlerFunction) {
                        assert.equal(endpoint, "foo");
                        handlerFunction({body:""}, resMock);
                    }
                }
            }

            var server = require("../lib/server")(expressMock);
            server.attachHandler("foo", handlerMock);
        });
    });
});