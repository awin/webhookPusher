Webhook Pusher
==============

This project has a makefile, so:
- To build, test and generate coverage simply do `make`
- To push to docker repository do `make push`

Parameter examples and defaults are:
- tag=latest
- repo=registry.hub.docker.com
- name=yarekt/webhookpusher

Application that receives webhooks and pushes the contents to Pusher

To test try:

curl --data-binary "foo=1" http://10.161.1.26:5000/webhook/travis

Run with:

workdocker run -d --name whp -e APPID=xxx -e SECRET=xxx -e KEY=xxx -p 5000:5000 yarekt/webhookpusher