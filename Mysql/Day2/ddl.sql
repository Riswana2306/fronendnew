create table  employees (
id int primary key auto_increment,
name varchar (20) ,
salary int ,
department varchar (20) default 'IT',
joinningdate date,
city varchar(10) default 'Chennai'
);
alter table employees rename column name to employee_name;

alter table employees modify salary decimal(12,2);

alter table employees add column email varchar(100);


create table products (
product_id int primary key auto_increment,
product_name varchar(100) not null unique,
price decimal(10,2) not null check (price > 0),
category varchar(50) default 'general',
stock int default 0 check (stock >= 0),
manufacturing_date date not null
);
rename table products to product_details;
alter table product_details rename column price to product_price;
alter table product_details  drop column manufacturing_date;


create table patients (
    id int primary key auto_increment,
    patient_name varchar(100),
    age INT,
    gender varchar(10),
    disease varchar(100),
    admission_date date,
    doctor_name varchar(100)
);

alter table  patients rename column  disease to  diagnosis;
alter table  patients add column contact_number varchar(15);
rename table  patients to patient_records;

create table courses (
    course_id int primary key,
    course_name varchar(100),
    duration int default 3,
    fees decimal(10,2) check (fees > 0),
    trainer_name varchar(100),
    start_date date
);

alter table courses add column course_status varchar(20);

alter table courses rename column trainer_name to instructor_name;

alter table courses modify column duration varchar(20);

alter table courses drop column start_date;





create table customers (
    customer_id int primary key auto_increment,
    name varchar(100),
    email varchar(100),
    city varchar(50),
    age int,
    registration_date date
);
alter table customers modify customer_id int not null auto_increment;
 
 insert into customers ( name, email, city, age, registration_date) values ( 'Riswana', 'riswana@gmail.com', 'chennai', 23, now(),('afrin','afrin@gmail.com','coimbatore',);
 select * from customers;


