-- SET statement_timeout = 0;
-- SET lock_timeout = 0;
-- SET idle_in_transaction_session_timeout = 0;
-- SET client_encoding = 'UTF8';
-- SET standard_conforming_strings = on;
-- SELECT pg_catalog.set_config('search_path', '', false);
-- SET check_function_bodies = false;
-- SET xmloption = content;
-- SET client_min_messages = warning;
-- SET row_security = off;

-- CREATE TABLE public.user (
--   "_id" serial NOT NULL,
--   "username" varchar NOT NULL,
--   "email" varchar NOT NULL,
--   "password" varchar NOT NULL,
--   "meals_id" bigint,
-- ) WITH (
--   OIDS=FALSE
-- );

-- CREATE TABLE public.meals (
--   "_id" serial NOT NULL,
--   "username" varchar NOT NULL,
--   "email" varchar NOT NULL,
--   "password" varchar NOT NULL,
--   "meals_id" bigint,
-- ) WITH (
--   OIDS=FALSE
-- );

-- CREATE TABLE public.ingredients (
--   "_id" serial NOT NULL,
--   "meal_name" varchar NOT NULL,
--   "ingredients_id" bigint,
-- ) WITH (
--   OIDS=FALSE
-- );


-- user tble
-- -----------------
-- _id
-- username,
-- email,
-- pass word,
-- meals _id (FK)

-- meals tble
-- -------------
-- _id,
-- meal,
-- ingredients (FK)

-- ingredients tble
-- ---------------------
-- _id,
-- ingredient nme,