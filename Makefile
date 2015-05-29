all:
	echo hello?

test:
	@./node_modules/.bin/mocha

.PHONY: test
