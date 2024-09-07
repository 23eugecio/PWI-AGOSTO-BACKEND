CREATE TABLE productos(
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(100) NOT NULL UNIQUE,
    descripcion TEXT NOT NULL,
    precio FLOAT NOT NULL,
    stock INT  NOT NULL,
    fecha_de_creacion DATE DEFAULT CURRENT_DATE
)


INSERT INTO productos (nombre, descripcion, precio, stock) 
VALUES 
('cafe', 'cafe turco', 12500, 10), 
('te', 'te turco', 10200, 10), 
('raki', 'raki turco', 25600, 10)