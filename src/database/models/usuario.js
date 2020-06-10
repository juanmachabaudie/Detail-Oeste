module.exports = (sequelize, DataTypes) => {

    let alias = 'usuarios';
    let columns = {
        id:{
            type: DataTypes.INTEGER,
            allowNull:false,
            primaryKey:true,
            autoIncrement:true,
        },
        nombreDeUsuario:{
            type: DataTypes.STRING,
            allowNull:false,
        },
        direccion:{
            type: DataTypes.STRING,
            allowNull:false,
        },
        celular:{
            type: DataTypes.INTEGER,
            allowNull:false,
        },
        mail:{
            type: DataTypes.STRING,
            allowNull:false,
        },
        clave:{
            type: DataTypes.STRING,
            allowNull:false,
        },
        isAdmin:{
            type: DataTypes.BOOLEAN,
        }
    };
    let config = {
        tableName:'usuarios',
        timestamps:false,
    };

    const usuario = sequelize.define(alias, columns, config);

    
    return usuario;
}