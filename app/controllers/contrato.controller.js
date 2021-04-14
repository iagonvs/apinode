const db = require("../models");
const Contrato = db.contrato;
const Op = db.Sequelize.Op;


exports.create = (req, res) => {

    if (!req.body.cpf_cnpj) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
        return;
      }
    
      // Create a Contrato
      const contrato = {
        cpf_cnpj: req.body.cpf_cnpj,
        razao_social: req.body.razao_social,
        servico_prestado: req.body.servico_prestado,
        data_inicio: req.body.data_inicio,
        data_fim: req.body.data_fim,
      };
    
      // Save Contrato in the database
      Contrato.create(contrato)
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Erro ao criar o contrato de pessoa."
          });
        });
  
};


exports.findAll = (req, res) => {
    const cpf_cnpj = req.query.cpf_cnpj;
  var condition = cpf_cnpj ? { cpf_cnpj: { [Op.like]: `%${cpf_cnpj}%` } } : null;

  Contrato.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Ocorreu um erro ao retornar os contratos de pessoa."
      });
    });
  
};

exports.findOne = (req, res) => {
    const id = req.params.id;

  Contrato.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Erro ao retornar o contrato do id=" + id
      });
    });
  
};

// Update a Contrato by the id in the request
exports.update = (req, res) => {

    const id = req.params.id;

  Contrato.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "O contrato foi atualizado."
        });
      } else {
        res.send({
          message: `Ocorreu um erro na atualização do contrato de id=${id}. Talvez o contrato nao exista ou o body esta vazio.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Ocorreu um erro na atualização do contrato de id=" + id
      });
    });
  
};

// Delete a Contrato with the specified id in the request
exports.delete = (req, res) => {

    const id = req.params.id;

  Contrato.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Contrato foi deletado!"
        });
      } else {
        res.send({
          message: `Não deletou o contrato do id=${id}. Talvez o contrato nao exista.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Não deletou o contrato do id=" + id
      });
    });
  
};

// Delete all Contrato from the database.
exports.deleteAll = (req, res) => {
    Contrato.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} Todos os contratos foram deletados!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Um erro ocorreu ao tentar deletar todos os contratos"
          });
        });
  
};