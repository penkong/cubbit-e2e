upbuild:
	cd infra/docker && docker-compose -f docker-compose.yml -f docker-compose.dev.yml --compatibility up --build 

up:
	cd infra/docker && docker-compose -f docker-compose.yml -f docker-compose.dev.yml --compatibility up 

down:
	cd infra/docker && docker-compose -f docker-compose.yml -f docker-compose.dev.yml down -v