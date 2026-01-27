INSERT INTO employees 
values(NULL,
	   '짱구',
	   5,
	   'M',
	   '개발팀',
	   9800,
	   5);

UPDATE employees SET salary = 3500 WHERE id = 1;

DELETE FROM employees WHERE id = 1;

SELECT * FROM employees WHERE dept = '개발팀' AND salary >= 3000;

SELECT * FROM employees WHERE dept = '기획팀' OR dept = '마케팅팀';

SELECT * FROM employees WHERE name LIKE '김%';

SELECT e.name, p.position_name
FROM employees e
JOIN position p
ON e.id = p.id;