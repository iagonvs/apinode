const db = require("../models");
const Tipo = db.tipo;
const Op = db.Sequelize.Op;


exports.create = (req, res) => {

    if (!req.body.nome) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
        return;
      }
    
      // Create a Tipo
      const tipo = {
        nome: req.body.nome,
      };
    
      // Save Tipo in the database
      Tipo.create(tipo)
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Erro ao criar o tipo de pessoa."
          });
        });
  
};

exports.createOnInit = () => {
    let data_pf =
        {
            nome: 'Pessoa Fisica'
        }
    let data_pj =         
        {
            nome: 'Pessoa Juridica'
        }
    
    Tipo.create(data_pf)
    Tipo.create(data_pj)
}

exports.findAll = (req, res) => {
    const nome = req.query.nome;
  var condition = nome ? { nome: { [Op.like]: `%${nome}%` } } : null;

  Tipo.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Ocorreu um erro ao retornar os tipos de pessoa."
      });
    });
  
};

exports.findOne = (req, res) => {
    const id = req.params.id;

  Tipo.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Erro ao retornar o tipo do id=" + id
      });
    });
  
};

// Update a Tipo by the id in the request
exports.update = (req, res) => {

    const id = req.params.id;

  Tipo.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "O tipo foi atualizado."
        });
      } else {
        res.send({
          message: `Ocorreu um erro na atualização do tipo de id=${id}. Talvez o tipo nao exista ou o body esta vazio.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Ocorreu um erro na atualização do tipo de id=" + id
      });
    });
  
};

// Delete a Tipo with the specified id in the request
exports.delete = (req, res) => {

    const id = req.params.id;

  Tipo.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Tipo foi deletado!"
        });
      } else {
        res.send({
          message: `Não deletou o tipo do id=${id}. Talvez o tipo nao exista.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Não deletou o tipo do id=" + id
      });
    });
  
};

// Delete all Tipo from the database.
exports.deleteAll = (req, res) => {
    Tipo.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} Todos os tipos foram deletados!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Um erro ocorreu ao tentar deletar todos os tipos"
          });
        });
  
};