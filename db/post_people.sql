INSERT INTO people (name, age, notes, gender)
  VALUES ($1, $2, $3, $4);
SELECT * FROM people;