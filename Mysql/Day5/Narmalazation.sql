CREATE DATABASE hospital;
USE hospital;


CREATE TABLE hospital (
    patient_id INT,
    patient_name VARCHAR(50),
    doctor_name VARCHAR(50),
    staff_name VARCHAR(50),
    disease VARCHAR(50),
    department VARCHAR(50),
    payment INT
);

INSERT INTO hospital VALUES
(1,'Arun','Kumar','Priya','Fever','General',1000),
(2,student_course(2,'Divya','Ravi','Meena','Diabetes','Cardiology',2000),
(3,'Rahul','Kumar','Priya','Cold','General',500),
(4,'Meena','Suresh','Anu','Heart Disease','Cardiology',3000),
(5,'Karthik','Ravi','Meena','Fever','General',1000),


-- 2NF
CREATE TABLE patients (
    patient_id INT PRIMARY KEY,
    patient_name VARCHAR(50),
    disease VARCHAR(50)
);

INSERT INTO patients VALUES
(1,'Arun','Fever'),
(2,'Divya','Diabetes'),
(3,'Rahul','Cold'),
(4,'Meena','Heart Disease'),
(5,'Karthik','Fever');


CREATE TABLE doctors (
    doctor_id INT PRIMARY KEY,
    doctor_name VARCHAR(50),
    department VARCHAR(50)
);

INSERT INTO doctors VALUES
(101,'Kumar','General'),
(102,'Ravi','Cardiology'),
(103,'Suresh','Cardiology');


-- 3NF
CREATE TABLE departments (
    department_id INT PRIMARY KEY,
    department_name VARCHAR(50)
);

INSERT INTO departments VALUES
(1,'General'),
(2,'Cardiology');


CREATE TABLE staff (
    staff_id INT PRIMARY KEY,
    staff_name VARCHAR(50)
);

INSERT INTO staff VALUES
(201,'Priya'),
(202,'Meena'),
(203,'Anu');


CREATE TABLE payments (
    payment_id INT PRIMARY KEY,
    patient_id INT,
    amount INT,
    FOREIGN KEY (patient_id) REFERENCES patients(patient_id)
);

INSERT INTO payments VALUES
(301,1,1000),
(302,2,2000),
(303,3,500),
(304,4,3000),
(305,5,1000);
