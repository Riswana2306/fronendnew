create database college_db;
use college_db;
create table student(
id int primary key auto_increment unique,
  studentname VARCHAR(100) NOT NULL,
  studentage INT CHECK (studentage >= 18),
  studentemail VARCHAR(100) UNIQUE,
  studentmobile int not null,
  studentcourse varchar(20) default 'fullstack',
  studentcity VARCHAR(50) DEFAULT 'Chennai',
  studentadmissiondate DATE
);


