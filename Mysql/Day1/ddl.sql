create database wherhouse;
use  wherhouse;
create table  wherehouse(
id int primary key auto_increment unique,
wherehousename varchar(20) not null,
wherehouseportnumber int unique,
wherehouselocation varchar(30)  unique,
wherehouseprice int ,
wherehousearea varchar(10)
);

create table product(
id int primary key auto_increment unique,
productname varchar(30) not null,
productcode varchar(30) unique,
productcategory varchar (50) not null,
productprice decimal(10,2) check (productprice>0),
productstock int default 0,
productbrand VARCHAR(50)DEFAULT 'Generic',
productmanufacturedate DATE,
productexpirydate DATE,
productisavailable BOOLEAN DEFAULT TRUE,
productcreatedat TIMESTAMP DEFAULT CURRENT_TIMESTAMP


);
 create table employee (
 id int primary key auto_increment unique,
 employeename VARCHAR(100) NOT NULL,
 employeeemail VARCHAR(100)UNIQUE,
 employeesalary DECIMAL(10,2) CHECK ( employeesalary > 10000),
 employeedepartment VARCHAR(50) DEFAULT 'IT',
employeejoiningdate DATE NOT NULL,
 employeestatus VARCHAR(20) DEFAULT 'Active',
 employeecreatedat   TIMESTAMP DEFAULT CURRENT_TIMESTAMP
 
 );
 
 create table students(
  id int primary key auto_increment unique,
  studentname VARCHAR(100) NOT NULL,
  studentage INT CHECK (studentage >= 18),
  studentemail VARCHAR(100) UNIQUE,
  studentcity VARCHAR(50) DEFAULT 'Chennai',
  studentadmissiondate DATE
 
 );
 
 
