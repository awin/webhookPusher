tagname ?= "yarekt/webhookpusher"

all: build test xunit coverage

internal_test:
	@./node_modules/.bin/mocha

internal_xunit:
	@./node_modules/.bin/mocha -R xunit | grep "<"

internal_coverage:
	@./node_modules/.bin/mocha --require blanket -R html-cov

build:
	docker build -t $(tagname):latest .

test:
	docker run --rm $(tagname) make internal_test

xunit:
	docker run --rm $(tagname) make internal_xunit > xunit.xml

coverage:
	docker run --rm $(tagname) make internal_coverage > coverage.html

.PHONY: dtest test build
