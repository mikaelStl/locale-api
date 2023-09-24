import { Model, DataTypes } from 'sequelize';
import sequelize from '../database/sequelize';

class User extends Model {
    public nome!: string;
    public email!: string;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

User.init(
    {
        nome: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            primaryKey: true
        }
    },
    {
        sequelize,
        modelName: 'User',
        tableName: 'Users',
    }
);

async function sync() {
    await User.sync();
    console.log('SYNCED');
}

sync();

export default User;