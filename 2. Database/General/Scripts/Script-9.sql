SHOW DATABASES;
CREATE DATABASE mapdonalds;
USE mapdonalds;
SELECT DATABASE();
USE employees;
USE employees;
DROP DATABASE mapdonalds;
CREATE DATABASE mapdonalds;
USE mapdonalds;

CREATE TABLE burgers(
	id int PRIMARY KEY,
	name varchar(50),
	price int,
	gram int,
	kcal int,
	protein int
	);

DESC burgers;

INSERT INTO burgers (id, name, price, gram, kcal, protein)
values( 1, '빅맨', 5300, 223, 583, 27);

SELECT *
FROM burgers;  

INSERT INTO burgers
VALUES 
	(2, '베이컨 톰메이러 디럭스', 6200, 242, 545, 27),
	(3, '맨스파이시 상하이 버거', 5300, 235, 494, 20),
	(4, '슈비두밥 버거', 6200, 269, 563, 21),
	(5, '더블 쿼터파운드 치즈', 7000, 275, 770, 50);

SELECT name, price 
FROM burgers;

SET sql_safe_updates =0;

UPDATE burgers b 
SET price = 1000;

UPDATE burgers b 
SET price = 500
WHERE name = '빅맨';

SELECT * FROM burgers;

SET sql_safe_updates = 1;

UPDATE burgers b 
SET price = 500
WHERE id = 1;

DELETE FROM burgers 
WHERE id = 4;

DROP TABLE burgers;

CREATE DATABASE cafe;
USE cafe;
SELECT database();

CREATE TABLE coffees(
	id int PRIMARY KEY,
	name varchar(50),
	price int);

DROP DATABASE cafe;

DROP DATABASE starbuuks;

CREATE DATABASE starbuuks;
USE starbuuks;
SELECT database();
CREATE TABLE coffees (
	id int PRIMARY KEY,
	name varchar(20),
	price int);

INSERT INTO coffees
VALUES 
	(1, '아메리카노', 3800),
	(2, '카페라떼', 4000),
	(3, '콜드브루', 3500),
	(4, '카페모카', 4500),
	(5, '카푸치노', 5000);

SELECT * FROM coffees;

UPDATE coffees c 
SET price = 5200
WHERE id = 5;

DELETE FROM coffees 
WHERE id = 3;

SELECT * FROM coffees;

DROP table burgers;

SELECT * FROM burgers;

SELECT *
FROM burgers
WHERE price < 5500;

SELECT *
FROM burgers
WHERE protein < 25;

SELECT *
FROM burgers b 
WHERE price < 5500 AND protein > 25;

SELECT *
FROM burgers b 
WHERE NOT protein > 25;

SELECT 100 + 20;

SELECT 100 - 20;

SELECT 100 * 20;

SELECT 100 / 20;

SELECT 100 % 20;

SELECT 3 + 5 * 2;

SELECT (3 + 5) * 2;

SELECT TRUE OR TRUE AND FALSE;

CREATE DATABASE university;
USE university;
SELECT database();

CREATE TABLE students (
	id int PRIMARY KEY,
	nickname varchar(50),
	math int,
	english int,
	programming int);

INSERT INTO students
VALUES 
	(1, 'Sparkels', 98, 96, 93),
	(2, 'Soldier', 82, 66, 98),
	(3, 'Lapooheart', 84, 70, 82),
	(4, 'Slick', 87, 99, 98),
	(5, 'Smile', 75, 73, 70),
	(6, 'Jellyboo', 84, 82, 70),
	(7, 'Bagel', 97, 91, 87),
	(8, 'Queen', 99, 100, 88);

SELECT *
FROM students
WHERE math >= 90 AND english >= 90 AND programming >= 90;

SELECT *
FROM students s 
WHERE math < 75 OR s.english < 75 OR s.programming < 75;

SELECT *, (math + english + programming) / 3
FROM students;

SELECT nickname AS 닉네임, (math + s.english + s.programming) AS 총점, (math + english + programming) / 3 AS 평균
FROM students s 
WHERE (math + s.english + s.programming) >= 270;








































