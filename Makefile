install: install-server install-client

install-server:
	docker-compose -f docker-compose.builder.yml run --rm server

install-client:
	docker-compose -f docker-compose.builder.yml run --rm client

dev:
	docker-compose up