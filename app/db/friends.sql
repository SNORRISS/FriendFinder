create database friendsdb;
use friendsdb;
create table friends(
id int(10) auto_increment not null,
primary key (id),
name varchar(30) not null,
picture text not null,
q1 int(2),
q2 int(2),
q3 int(2),
q4 int(2),
q5 int(2)
);