module.exports = (sequelize, Sequelize) => {
    const Tipo = sequelize.define("tipo", {
      nome: {
        type: Sequelize.STRING
      },
    });
    return Tipo;
  };
  
  
  