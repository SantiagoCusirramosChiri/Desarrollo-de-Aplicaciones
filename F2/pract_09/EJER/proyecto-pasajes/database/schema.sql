-- =====================================================
-- 🚀 CREAR BASE DE DATOS
-- =====================================================
DROP DATABASE IF EXISTS pasajes_db;
CREATE DATABASE pasajes_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE pasajes_db;

-- =====================================================
-- 👤 TABLA: usuarios
-- =====================================================
CREATE TABLE usuarios (
    id_usuario INT AUTO_INCREMENT PRIMARY KEY,
    nombre_completo VARCHAR(100) NOT NULL,
    direccion VARCHAR(200),
    email VARCHAR(100) UNIQUE NOT NULL,
    contraseña VARCHAR(255) NOT NULL,
    fecha_nacimiento DATE,
    sexo ENUM('Hombre', 'Mujer')
);

-- =====================================================
-- 🎯 TABLA: intereses
-- =====================================================
CREATE TABLE intereses (
    id_interes INT AUTO_INCREMENT PRIMARY KEY,
    nombre_interes VARCHAR(50) NOT NULL,
    categoria VARCHAR(50) DEFAULT 'Tema'
);

-- =====================================================
-- 🔗 TABLA: usuario_intereses
-- (Relación muchos a muchos entre usuarios e intereses)
-- =====================================================
CREATE TABLE usuario_intereses (
    id_relacion INT AUTO_INCREMENT PRIMARY KEY,
    id_usuario INT NOT NULL,
    id_interes INT NOT NULL,
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario) ON DELETE CASCADE,
    FOREIGN KEY (id_interes) REFERENCES intereses(id_interes) ON DELETE CASCADE,
    UNIQUE KEY unique_usuario_interes (id_usuario, id_interes)
);

-- =====================================================
-- 📋 INSERTS INICIALES DE INTERESES
-- =====================================================

-- 🧠 Temas de interés
INSERT INTO intereses (nombre_interes, categoria) VALUES
('Ciencia ficción', 'Tema'),
('Historia', 'Tema'),
('Tecnología', 'Tema'),
('Viajes', 'Tema'),
('Cine', 'Tema'),
('Arte', 'Tema'),
('Música', 'Tema'),
('Literatura', 'Tema'),
('Cocina', 'Tema'),
('Deportes', 'Tema');

-- 🎯 Aficiones
INSERT INTO intereses (nombre_interes, categoria) VALUES
('Correr', 'Aficion'),
('Leer', 'Aficion'),
('Tocar guitarra', 'Aficion'),
('Bailar', 'Aficion'),
('Ver películas', 'Aficion'),
('Jugar videojuegos', 'Aficion'),
('Fotografía', 'Aficion'),
('Hacer senderismo', 'Aficion'),
('Pintar', 'Aficion'),
('Cocinar', 'Aficion');