DROP DATABASE IF EXISTS NodeTest;
CREATE DATABASE IF NOT EXISTS NodeTest;
use NodeTest;
create table test_table(
    id int(11),name varchar(255)
);
insert into test_table values(1,'testname');
