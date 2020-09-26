# Criar a database no mysql
Create database libras_user;

# Utileze o Comando a seguir para rodar o backend

mvn spring-boot:run

# Cadastre as roles no banco de dados

INSERT INTO roles(name) VALUES('ROLE_ADMIN');
INSERT INTO roles(name) VALUES('ROLE_USER');