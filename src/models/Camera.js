module.exports = (sequelize, DataTypes) => {
    const Camera = sequelize.define('Camera', {
        name: DataTypes.STRING,
        color: DataTypes.STRING, 
        image_resolution:DataTypes.STRING,
        brand: DataTypes.STRING,
        price: DataTypes.STRING,   
    })
    return Camera
}