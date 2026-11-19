create database student_management;
use student_management;


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



TRUNCATE TABLE student_course;
insert into stu_course values(1,'Arun','HTML','Kumar','9876543210'),(1,'Arun','CSS','Priya','9876543211'),(2,'Divya','HTML','Kumar','9876543210'),(3,'Rahul','JavaScript','Ravi','9876543212'),(4,'Priya','React','Meena','9876543213');

select * from stu_course;

create table students (
    student_id int primary key,
    student_name varchar(50)
);

insert into students values(1,'Arun'),(2,'Divya'),(3,'Rahul'),(4,'Priya');


insert into courses values
(101,'HTML','Kumar','9876543210'),
(102,'CSS','Priya','9876543211'),
(103,'JavaScript','Ravi','9876543212'),
(104,'React','Meena','9876543213');

create table stu_courses (
    student_id int,
    course_id int,
    primary key(student_id,course_id),
    foreign key(student_id) references students(student_id),
    foreign key(course_id) references courses(course_id)
);

insert into student_courses values
(1,101),(1,102),(2,101),(3,103),(4,104);

create table trainers (
    trainer_id int primary key,
    trainer_name varchar(50),
    trainer_phone varchar(15)
);

insert into trainers values (1,'Kumar','9876543210'),(2,'Priya','9876543211'),(3,'Ravi','9876543212'),(4,'Meena','9876543213');


insert into courses_3nf values
(101,'HTML',1),
(102,'CSS',2),
(103,'JavaScript',3),
(104,'React',4);

select
s.student_name,
c.course_name,
t.trainer_name
from students as  sjoin student_courses sc on s.student_id = sc.student_id
join courses_3nf c on sc.course_id = c.course_id
join trainers t on c.trainer_id = t.trainer_id;