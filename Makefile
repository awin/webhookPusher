tagname ?= "yarekt/webhookpusher"

all: build dtest

test:
	@./node_modules/.bin/mocha

build:
	docker build -t $(tagname):latest .

dtest:
	docker run --rm -it $(tagname) make test

.PHONY: test
