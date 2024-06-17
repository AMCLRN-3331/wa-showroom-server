//Рулим моделями из БД (Может меняться)

const { defaultValueSchemable } = require('sequelize/lib/utils');//???
const sequelize = require('../db');
const { DataTypes } = require('sequelize');

const User = sequelize.define('user', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    email: { type: DataTypes.STRING, unique: true },
    password: { type: DataTypes.STRING },
    role: { type: DataTypes.STRING, defaultValue: "USER" },
});

const Booking = sequelize.define('booking', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
    number: { type: DataTypes.BIGINT, allowNull: false },
    //time_start: { type: DataTypes.DATE, allowNull: false },
    // booking_id: {type: DataTypes.STRING, defaultValue: "ItemInBooking"},
    // auto_id: {type: DataTypes.STRING, defaultValue: "ItemInBooking"},
    // user_id: {type: DataTypes.STRING, defaultValue: "ItemInBooking"},
});

const Auto = sequelize.define('auto', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.TEXT, allowNull: false },
    price: { type: DataTypes.INTEGER, allowNull: false },
    year: { type: DataTypes.INTEGER, allowNull: false },
    count: { type: DataTypes.INTEGER, allowNull: false },
    country: { type: DataTypes.STRING, allowNull: false },
    power: { type: DataTypes.INTEGER, allowNull: false },
    volume: { type: DataTypes.INTEGER, allowNull: false },
    speed: { type: DataTypes.INTEGER, allowNull: false },
    weight: { type: DataTypes.INTEGER, allowNull: false },
    consumption: { type: DataTypes.FLOAT, allowNull: false },

});

const Model = sequelize.define('model', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, unique: true, allowNull: false },
    description: { type: DataTypes.INTEGER, allowNull: true },
    // brand_id: {type: DataTypes.INTEGER, allowNull: false},
},
    {
        timestamps: false
    });

const Brand = sequelize.define('brand', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, unique: true, allowNull: false },
    image: { type: DataTypes.STRING, allowNull: true },
},
    {
        timestamps: false
    });

const Body = sequelize.define('body', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, unique: true, allowNull: false },
},
    {
        timestamps: false
    });

const Color = sequelize.define('colors', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, unique: true, allowNull: false },
},
    {
        timestamps: false
    });

const Gearbox = sequelize.define('gearbox', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, unique: true, allowNull: false },
},
    {
        timestamps: false
    });

const Image = sequelize.define('image', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, unique: false, allowNull: false },
    // auto_id: {type: DataTypes.STRING, defaultValue: "IMAGE"}
},
    {
        timestamps: false
    });

// const AutoColors = sequelize.define('auto_color', {
//     id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
// }, {
//     timestamps: false
// });

User.hasMany(Booking);
Booking.belongsTo(User);

User.hasMany(Booking);
Booking.belongsTo(User);

Auto.hasMany(Image, { as: 'images' });
Image.belongsTo(Auto);

Auto.hasMany(Booking);
Booking.belongsTo(Auto);

Brand.hasMany(Model);
Model.belongsTo(Brand);

Model.hasMany(Auto, { as: 'model' });
Auto.belongsTo(Model);

Brand.hasMany(Auto, { as: 'brand' });
Auto.belongsTo(Brand);

Auto.hasMany(Color, { as: "colors" });
Color.belongsTo(Auto);

Body.hasMany(Auto);
Auto.belongsTo(Body);

Gearbox.hasMany(Auto);
Auto.belongsTo(Gearbox);

module.exports = {
    User,
    Booking,
    Auto,
    Model,
    Brand,
    Body,
    Color,
    Gearbox,
    Image
}