-- database: banco.db
CREATE TABLE usuarios (
    id,
    nome,
    email
);

INSERT INTO usuarios (id, nome, email)
VALUES (1, 'Viana', 'viana@email.com');

SELECT * FROM usuarios;