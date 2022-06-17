module.exports = (sequelize, dataTypes) => {
    const alias = "Movie";
    const cols = {
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: dataTypes.STRING(500),
            allowNull: false,
        },
        rating: {
            type: dataTypes.DECIMAL(3, 1).UNSIGNED,
            allowNull: false,
        },
        awards: {
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: false, 
            defaultValue: 0
        }, 
        release_date: {
           type: dataTypes.DATE,
           allowNull: false
        },
        length: {
            type: dataTypes.INTEGER, 
            allowNull: false
        },
        genre_id:{
            type: dataTypes.INTEGER, 
            allowNull: false
        }

    };
    const config = {
        tableName: "movies",
        underscored: true,


    };
    const Movie = sequelize.define(alias, cols, config)
    return Movie
}