module.exports = (sequelize, Sequelize) => {
    const Prestador = sequelize.define("prestador", {
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
      email: {
        type: Sequelize.STRING
      },
      cep: {
        type: Sequelize.STRING
      },
      logradouro: {
        type: Sequelize.STRING
      },
      numero: {
        type: Sequelize.STRING
      },
      complemento: {
        type: Sequelize.STRING
      },
      bairro: {
        type: Sequelize.STRING
      },
      cidade_id: {
        type: Sequelize.INTEGER,
        references: {
            model: 'cidades',
             key: 'id'
        }
      }
    },
      {
        paranoid: true
      });
    return Prestador;
  };
  


  
