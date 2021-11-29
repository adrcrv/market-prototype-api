module.exports = {
  username: process.env.DATABASE_USERNAME || 'postgres',
  password: process.env.DATABASE_PASSWORD || 'postgres',
  database: process.env.DATABASE_NAME || 'market_prototype',
  host: process.env.DATABASE_HOST || 'localhost',
  port: +(process.env.DATABASE_PORT || 5432),
  dialect: process.env.DATABASE_DIALECT || 'postgres',
  define: {
    freezeTableName: true,
    underscored: true,
    underscoredAll: true,
    timestamp: true,
  },
};
