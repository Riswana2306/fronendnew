create database college;
use college;
create table courses (
    course_id int primary key,
    course_name varchar(50),
    trainer_name varchar(50),
    trainer_phone varchar(15)
);
create table stu_course (
    student_id int ,
    student_name varchar(50),
    course_name varchar(50),
    trainer_name varchar(50),
    trainer_phone varchar(15),
    primary key(student_id, course_name)
);

create table trainers (
    trainer_id int primary key,
    trainer_name varchar(50),
    trainer_phone varchar(15)
);
