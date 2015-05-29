name ?= yarekt/webhookpusher
tag ?= latest
repo ?= registry.hub.docker.com

all: build test xunit coverage

internal_test:
	@./node_modules/.bin/mocha

internal_xunit:
	@./node_modules/.bin/mocha -R xunit | grep "<"

internal_coverage:
	@./node_modules/.bin/mocha --require blanket -R html-cov

build:
	docker build -t $(name):$(tag) .

push:
	docker tag -f $(name):$(tag) $(repo)/$(name):$(tag)
	docker push $(repo)/$(name):$(tag)

test:
	docker run --rm $(name):$(tag) make internal_test

xunit:
	docker run --rm $(name):$(tag) make internal_xunit > xunit.xml

coverage:
	docker run --rm $(name):$(tag) make internal_coverage > coverage.html

.PHONY: dtest test build
