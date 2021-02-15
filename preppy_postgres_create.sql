SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

CREATE TABLE public.users_table (
  "_id" serial NOT NULL,
  "username" varchar NOT NULL,
  "email" varchar NOT NULL,
  "password" varchar NOT NULL,
  "meals_id" bigint,
  CONSTRAINT "user_id" PRIMARY KEY ("_id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE public.meals_table (
  "_id" serial NOT NULL,
  "meal_name" varchar,
  "ingredients_id" bigint,
  CONSTRAINT "meals_table_id" PRIMARY KEY ("_id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE public.ingredients_table (
  "_id" serial NOT NULL,
  "ingredients" varchar NOT NULL,
  CONSTRAINT "ingredients_table_id" PRIMARY KEY ("_id")
) WITH (
  OIDS=FALSE
);

ALTER TABLE public.users_table ADD CONSTRAINT "users_table_fk0" FOREIGN KEY ("meals_id") REFERENCES public.meals_table("_id");
ALTER TABLE public.meals_table ADD CONSTRAINT "meals_table_fk0" FOREIGN KEY ("ingredients_id") REFERENCES public.ingredients_table("_id");
