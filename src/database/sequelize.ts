import { Sequelize } from "sequelize";
// import { PG_DATABASE, PG_HOST, PG_PASSWORD, PG_PORT, PG_USER } from './config';

const sequelize = new Sequelize('aula-node', 'postgres', 'postgres',{
    host: 'localhost',
    dialect: 'postgres'
});

const connect = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');        
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

connect();

export default sequelize;