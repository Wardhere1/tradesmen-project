FROM postgres:latest

ENV POSTGRES_PASSWORD password

ENV POSTGRES_DB tradematch

COPY ./*.sql /docker-entrypoint-initdb.d/


