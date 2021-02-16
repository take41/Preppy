CREATE TABLE users_table (
  "_id" serial NOT NULL,
  "username" varchar NOT NULL,
  "email" varchar NOT NULL,
  "password" varchar NOT NULL,
  "meals_id" bigint,
  CONSTRAINT "user_id" PRIMARY KEY ("_id")
); 

CREATE TABLE meals_table (
  "_id" serial NOT NULL,
  "meal_name" varchar,
  "ingredients_id" bigint,
  CONSTRAINT "meals_table_id" PRIMARY KEY ("_id")
);

CREATE TABLE ingredients_table (
  "_id" serial NOT NULL,
  "ingredients" varchar NOT NULL,
  CONSTRAINT "ingredients_table_id" PRIMARY KEY ("_id")
);

CREATE TABLE meal_and_ingredients (
  "_id" serial NOT NULL,
  "meal_id" bigint,
  "ingredient_id" bigint,
  CONSTRAINT "meal_and_ingredients_id" PRIMARY KEY ("_id")
);

CREATE TABLE users_and_meals (
  "_id" serial NOT NULL,
  "users_id" BIGINT,
  "meals_id" BIGINT,
  CONSTRAINT "users_and_meals_id" PRIMARY KEY ("_id")
);

ALTER TABLE public.users_table ADD CONSTRAINT "users_table_fk0" FOREIGN KEY ("meals_id") REFERENCES public.meals_table("_id");
ALTER TABLE public.meals_table ADD CONSTRAINT "meals_table_fk0" FOREIGN KEY ("ingredients_id") REFERENCES public.ingredients_table("_id");

ALTER TABLE public.meal_and_ingredients ADD CONSTRAINT "meal_and_ingredients_fk0" FOREIGN KEY ("meal_id") REFERENCES public.meals_table("_id");
ALTER TABLE public.meal_and_ingredients ADD CONSTRAINT "meal_and_ingredients_fk1" FOREIGN KEY ("ingredient_id") REFERENCES public.ingredients_table("_id");

ALTER TABLE public.users_and_meals ADD CONSTRAINT "users_and_meals_fk0" FOREIGN KEY("users_id") REFERENCES public.users_table("_id");
ALTER TABLE public.users_and_meals ADD CONSTRAINT "users_and_meals_fk1" FOREIGN KEY("meals_id") REFERENCES public.meals_table("_id");
-- psql -d postgres://uitvjbtp:Ki6YsYlblW-5vFkjfbjPCPaMU3Tv0IbI@ziggy.db.elephantsql.com:5432/uitvjbtp -f preppy_postgres_create.sql

-- ---Ingredients----
-- | id |   name    |
-- |----+-----------|
-- | 1  |   apple   |
-- | 2  |   noodle  |
-- | 3  |   beef    |
-- | 4  |   steak   |
-- ------------------

-- -------------Meals----------------------------
-- | id |    name        | meal_and_ingredients |  
-- |--------------------------------------------|
-- | 1  |   mac n cheese |           2          | 
-- | 2  |   ramen        |           1          |
-- | 3  |   gyro         |           3          |
-- ----------------------------------------------

-- -----------------Users---------------------------------
-- | id  |  username     | passsword | email  | meals_id  |
-- |-----------------------------------------------------|
-- |  1  |   test        |  test     | test@..|   2      |
-- |  2  |   eddy        |  qwerty   | eddy@..|   1      |
-- |  3  |   abu         |  blahblah | abu@...|   3      |
-- -------------------------------------------------------
-- ramen = 9 ingredients
-- mac n cheese = 3

-- 'INSERT INTO meal_and_ingredients (meal_id, ingredient_id) SELECT _id FROM meals_table WHERE _id = meal_id'

-- 'SELECT ingredient_id FROM meal_and_ingredients FULL OUTER JOIN ingredients_table ON meal_and_ingredients_ingredients_id = ingredients_table_id'

-- 'INSERT INTO users_table (meals_id) SELECT users_table.meals_id, meals_table._id FROM users_table LEFT OUTER JOIN meals_table._id ON meals_table._id '

-- 'SELECT users_table.meals_id, meals_table._id FROM users_table LEFT OUTER JOIN meals_table ON meals_table._id = user_table.meals_id'

-- INSERT INTO users_and_meals (meals_id) SELECT users_table._id, meals_table._id FROM users_table JOIN meals_table._id ON 

-- -------Meals + Ingredients-------------|
-- | id |    meals_id  | ingredients_id   | 
-- |--------------------------------------|
-- | 1  |       2      |       4          | 
-- | 2  |       2      |       5          |                                       
-- | 3  |       2      |       6          |         
-- ---------------------------------------|