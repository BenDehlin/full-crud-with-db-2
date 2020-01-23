UPDATE people 
SET (name, age, notes, gender) = ($2, $3, $4, $5) 
WHERE person_id = $1;
Select * FROM people;