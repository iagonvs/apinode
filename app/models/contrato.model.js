module.exports = (sequelize, Sequelize) => {
    const Contrato = sequelize.define("contrato", {
      tipo_id: {
        type: Sequelize.INTEGER,
        references: {
            model: 'tipos',
             key: 'id'
        }
      },
      cpf_cnpj: {
        type: Sequelize.STRING
      },
      razao_social: {
        type: Sequelize.STRING
      },
      servico_prestado: {
        type: Sequelize.STRING
      },
      data_inicio: {
        type: Sequelize.DATE
      },
      data_fim: {
        type: Sequelize.DATE
      }
    },
    {
      paranoid: true
    });
    return Contrato;
  };
  


  
