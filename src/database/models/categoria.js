module.exports = (sequelize, DataTypes) => {

    let alias = 'categorias';
    let columns = {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        tipo: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    };
    let config = {
        tableName: 'categorias',
        timestamps: false,
    };

    const categoria = sequelize.define(alias, columns, config);

    categoria.associate = (modelos) => {
        // hasMany
        categoria.hasMany(modelos.productos, {
            as: 'productos',
            foreignKey: 'id_categoria'
        });
    }

    return categoria;
}