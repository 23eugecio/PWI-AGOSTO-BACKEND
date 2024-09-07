CREATE TABLE carritos_productos(
    id INT PRIMARY KEY AUTO_INCREMENT,
    carrito_id_fk INT NOT NULL,
    producto_id_fk INT NOT NULL,
    cantidad INT NOT NULL,
    fecha_agregado DATE DEFAULT CURRENT_DATE,
    FOREIGN KEY (carrito_id_fk) REFERENCES carritos(id),
    FOREIGN KEY (producto_id_fk) REFERENCES productos(id)
)
INSERT INTO carritos_productos (`carrito_id`, `producto_id`, `cantidad`) VALUES (`3`, `1`, `2`),(`3`, `2`, `1`),(`3`, `2`, `1`)

INSERT INTO carritos_productos (`carrito_id`, `producto_id`, `cantidad`) VALUES (`1`, `2`, `1`),(`2`, `3`, `1`),(`2`, `1`, `1`)

INSERT INTO carritos_productos (`carrito_id`, `producto_id`, `cantidad`) VALUES (`1`, `1`, `1`),(`2`, `2`, `1`),(`3`, `3`, `1`)
