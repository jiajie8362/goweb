drop table posts;
drop table threads;
drop table sessions;
drop table users;

create table users (
  id serial PRIMARY key,
  uuid varchar(64) not null UNIQUE,
  name varchar(255),
  email varchar(255) not null UNIQUE,
  password varchar(255) not null,
  created_at TIMESTAMP not NULL
);

create table sessions (
  id serial primary key,
  uuid varchar(64) not null UNIQUE,
  email varchar(255),
  user_id integer REFERENCES users(id),
  created_at TIMESTAMP not NULL
);

create table threads (
  id serial PRIMARY key,
  uuid varchar(64) not null UNIQUE,
  topic text,
  user_id integer REFERENCES users(id),
  created_at TIMESTAMP not NULL
);

create table posts (
  id serial PRIMARY key,
  uuid varchar(64) not null UNIQUE,
  body text,
  user_id integer REFERENCES users(id),
  thread_id integer REFERENCES threads(id),
  created_at TIMESTAMP not null
)