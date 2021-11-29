module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('purchase_product', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      purchase_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'purchase', key: 'id' },
      },
      product_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'product', key: 'id' },
      },
      quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('purchase_product');
  },
};
