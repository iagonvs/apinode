module.exports = (sequelize, Sequelize) => {
    const Uf = sequelize.define("uf", {
      nome: {
        type: Sequelize.STRING
      },
    });
    return Uf;
  };
  
  
  