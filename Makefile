tagname ?= "yarekt/webhookpusher"

all: build test cover

internal_test:
	@./node_modules/.bin/mocha

internal_cover:
	@./node_modules/.bin/mocha -R xunit | grep "<"

build:
	docker build -t $(tagname):latest .

test:
	docker run --rm $(tagname) make internal_test

cover:
	docker run --rm $(tagname) make internal_cover > cover.xml

.PHONY: dtest test build
