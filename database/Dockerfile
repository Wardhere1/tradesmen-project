FROM postgres:latest
ENV POSTGRES_DB newtradematchdb
ENV POSTGRES_USER myuser
ENV POSTGRES_PASSWORD mypassword
COPY ./*.sql /docker-entrypoint-initdb.d/


