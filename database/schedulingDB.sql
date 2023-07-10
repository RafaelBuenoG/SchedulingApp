drop database if exists scheduling;
create database if not exists scheduling CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

use scheduling;

create table user(
id varchar(255) primary key,
name varchar(30) not null,
email varchar(50) not null,
phone varchar(30) not null,
password varchar(70) not null,
birthdate date not null,
username varchar(20)
);

create table establishment(
id varchar(255) primary key,
name varchar(30) not null,
city varchar(50) not null,
addressLine varchar(50) not null,
postalCode varchar(15) not null,
phone varchar(30) not null,
user varchar(255) not null,

foreign key (user) references user(id)
);

create table area(
id varchar(255) primary key,
name varchar(30) not null,
image varchar(200),
establishment varchar(255) not null,

foreign key (establishment) references establishment(id)
);

create table service(
id varchar(255) primary key,
name varchar(30) not null,
description varchar(200) not null,
price double not null,
image varchar(200),
user varchar(255) not null,
area varchar(255) not null,

foreign key (user) references user(id),
foreign key (area) references area(id)
);

create table schedule(
id varchar(255) primary key,
date date not null,
time time not null,
user varchar(255) not null,
service varchar(255) not null,

foreign key (user) references user(id),
foreign key (service) references service(id)
);

create table ordered(
id varchar(255) primary key,
schedule varchar(255) not null,
establishment varchar(255) not null,

foreign key (schedule) references schedule(id),
foreign key (establishment) references establishment(id)
);