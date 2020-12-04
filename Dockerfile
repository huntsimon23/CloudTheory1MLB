FROM postgres:10
RUN apt-get update
RUN apt-get -y install postgresql-10-plv8
ENV POSTGRES_PASSWORD=mysecretpassword