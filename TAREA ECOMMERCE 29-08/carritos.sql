CREATE TABLE carritos(
    id INT PRIMARY KEY AUTO_INCREMENT,
    compradores_id_fk INT NOT NULL UNIQUE,
    fecha_de_creacion DATE DEFAULT CURRENT_DATE,
    FOREIGN KEY (compradores_id_fk) REFERENCEs compradores(id)
)

INSERT INTO carritos (comprador_id_fk)
VALUES
(1),(2),(3)
