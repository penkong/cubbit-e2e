upbuild: up
	up --build 

up:
	cd infra/docker && docker-compose -f docker-compose.yml -f docker-compose.dev.yml up 

down:
	cd infra/docker && docker-compose -f docker-compose.yml -f docker-compose.dev.yml down -v