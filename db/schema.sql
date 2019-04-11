create database burgers_db;

use burgers_db;

create table burgers (
    id int AUTO_INCREMENT primary key,
    burger_name varchar(30),
    devoured boolean default false
)