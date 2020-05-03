module.exports = (sequelize, DataTypes) => {

    let alias = 'marcas';
    let columns = {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    };
    let config = {
        tableName: 'marcas',
        timestamps: false,
    };

    const marca = sequelize.define(alias, columns, config);

    marca.associate = (modelos) => {
        // hasMany
        marca.hasMany(modelos.productos, {
            as: 'productos',
            foreignKey: 'id_marca'
        });
    }

    return marca;
}