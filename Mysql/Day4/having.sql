

CREATE TABLE emp (
    emp_id INT PRIMARY KEY ,
    emp_name VARCHAR(100) NOT NULL,
    department VARCHAR(50),
    salary DECIMAL(10,2),
    age INT,
    city VARCHAR(50),
    experience INT
);


INSERT INTO emp VALUES
(1, 'Arun', 'IT', 45000, 25, 'Chennai', 3),
(2, 'Priya', 'HR', 35000, 27, 'Madurai', 4),
(3, 'Kavin', 'IT', 55000, 29, 'Chennai', 6),
(4, 'Divya', 'Finance', 40000, 26, 'Salem', 3),
(5, 'Rahul', 'IT', 30000, 23, 'Trichy', 2),
(6, 'Meena', 'HR', 38000, 28, 'Chennai', 5),
(7, 'Vijay', 'Finance', 60000, 32, 'Madurai', 8),
(8, 'Sneha', 'IT', 48000, 24, 'Salem', 4),
(9, 'Bala', 'Sales', 28000, 22, 'Chennai', 1),
(10, 'Nisha', 'Sales', 32000, 26, 'Trichy', 3),
(11, 'Sanjay', 'IT', 65000, 31, 'Chennai', 9),
(12, 'Anu', 'HR', 42000, 29, 'Salem', 6),
(13, 'Deepak', 'Finance', 52000, 30, 'Chennai', 7),
(14, 'Pooja', 'Sales', 36000, 25, 'Madurai', 4),
(15, 'Ravi', 'IT', 58000, 28, 'Trichy', 7);

SELECT * FROM emp;

select department,count(*) as total_emp,min(salary) from emp  group by department having min(salary>=30000)