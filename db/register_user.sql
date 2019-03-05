INSERT INTO heloUsers (username, password)
VALUES ($1, $2)
RETURNING *;