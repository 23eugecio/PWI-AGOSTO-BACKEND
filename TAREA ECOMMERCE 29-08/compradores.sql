CREATE TABLE compradores(
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(70) NOT NULL UNIQUE, 
    direccion VARCHAR(100) NOT NULL UNIQUE,
    telefono INT NOT NULL UNIQUE,
    fecha_de_registro DATE DEFAULT CURRENT_DATE
)


INSERT INTO compradores (nombre, email, direccion, telefono) 
VALUES 
('pedro', 'pedro@gmail.com', 'sarmiento', '123123123'),
('juan', 'juan@gmail.com', 'lavalleja', '1231232547'),
('lucas', 'lucas@gmail.com', 'rivadavia', '1231125457')



