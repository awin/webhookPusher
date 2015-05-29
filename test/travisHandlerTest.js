var assert = require('assert');
require('blanket');

describe("Pusher", function() {
    describe("Handler", function() {
        it("handles a request", function() {
            var MockPusher = function() {
                return {
                    trigger: function(channel, event, body) {
                        assert.equal(channel, "travis");
                        assert.equal(event, "build");
                    }
                }
            };
            var handler = require("../lib/travisHandler")(MockPusher);
            handler.setExtractor({extract: function(){}});

            handler.handle("");
        });
    });
});
