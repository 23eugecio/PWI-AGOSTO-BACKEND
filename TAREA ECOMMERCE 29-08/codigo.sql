CREATE TABLE compradores(
    compradores_id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(70) NOT NULL UNIQUE, 
    direcccion VARCHAR(100) NOT NULL UNIQUE,
    telefono INT NOT NULL UNIQUE,
    fecha_de_registro DATE DEFAULT CURRENT_DATE
)

CREATE TABLE carritoS(
    carritos_id INT PRIMARY KEY AUTO_INCREMENT,
    comprador_id INT NOT NULL UNIQUE,
    fecha_de_creacion DATE DEFAULT CURRENT_DATE
)