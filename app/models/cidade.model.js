module.exports = (sequelize, Sequelize) => {
    const Cidade = sequelize.define("cidade", {
      nome: {
        type: Sequelize.STRING
      },
      uf_id: {
        type: Sequelize.INTEGER,
        references: {
            model: 'ufs',
             key: 'id'
        }
      },
    });
    return Cidade;
  };
  
  
  