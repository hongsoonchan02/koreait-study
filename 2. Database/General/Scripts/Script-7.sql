CREATE TABLE db_tcl (
	id varchar(50)
);

INSERT INTO db_tcl value('test1');
INSERT INTO db_tcl value('test2');
INSERT INTO db_tcl value('test3');

SELECT * FROM db_tcl;
COMMIT;

UPDATE db_tcl
SET id = 'test3';
ROLLBACK;