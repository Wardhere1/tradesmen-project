FROM postgres:latest

ENV POSTGRES_DB mydb

ENV POSTGRES_USER myuser

ENV POSTGRES_PASSWORD mypassword

COPY ./*.sql /docker-entrypoint-initdb.d/


