module.exports = (sequelize, DataTypes) => {

    let alias = 'productos';
    let columns = {
        id:{
            type: DataTypes.INTEGER,
            allowNull:false,
            primaryKey:true,
            autoIncrement:true,
        },
        nombre:{
            type: DataTypes.STRING,
            allowNull:false,
        },
        id_marca:{
            type: DataTypes.INTEGER,
            allowNull:false,
        },
        id_categoria:{
            type: DataTypes.INTEGER,
            // allowNull:false,
        },
        clasificacion:{
            type: DataTypes.STRING,
            // allowNull:false,
        },
        descripcion:{
            type: DataTypes.TEXT,
            // allowNull:false,
        },
        presentacion:{
            type: DataTypes.STRING,
            // allowNull:false,
        },
        stock:{
            type: DataTypes.INTEGER,
            // allowNull:false,
        },
        precio:{
            type: DataTypes.INTEGER,
            allowNull:false,
        }
    };
    let config = {
        tableName:'productos',
        timestamps:false,
    };

    const producto = sequelize.define(alias, columns, config);

    producto.associate = (modelos) => {
		// belongsTo 
		producto.belongsTo(modelos.marcas, {
			as: 'marca',
			foreignKey: 'id_marca'
        }),
        producto.belongsTo(modelos.categorias, {
			as: 'categoria',
			foreignKey: 'id_categoria'
        });
    }
    
    return producto;
}