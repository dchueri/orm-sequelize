const dataBase = require("../models");

class TurmaController {

    static async pegaTodasAsTurmas(req, res) {
      try {
        const todasAsTurmas = await dataBase.Turmas.findAll()
        return res.status(200).json(todasAsTurmas)
      } catch (error) {
        return res.status(500).json(error.message);
      }
    }

    static async pegaUmaTurma(req, res) {
        const { id } = req.params;
        try {
          const umaTurma = await dataBase.Turmas.findOne({
            where: { id: Number(id) },
          });
          return res.status(200).json(umaTurma);
        } catch (error) {
          return res.status(500).json(error.message);
        }
      }
    
      static async criaTurma(req, res) {
        const novaTurma = req.body;
        try {
          const novaTurmaCriada = await dataBase.Turmas.create(novaTurma);
          return res.status(200).json(novaTurmaCriada);
        } catch (error) {
          return res.status(500).json(error.message);
        }
      }
    
      static async atualizaTurma(req, res) {
        const novosDados = req.body;
        const { id } = req.params;
        try {
          await dataBase.Turmas.update(novosDados, { where: { id: Number(id) } });
          const turmaAtualizada = await dataBase.Turmas.findOne({
            where: {
              id: Number(id),
            },
          });
          return res.status(200).json(turmaAtualizada);
        } catch (error) {
          return res.status(500).json(error.message);
        }
      }
    
      static async deletaTurma(req, res) {
          const {id} = req.params
          try {
            await dataBase.Turmas.destroy({where: { id: Number(id)}})
            return res.status(200).json({ mensagem : `id ${id} deletado`})
        } catch (error) {
              return res.status(500).json(error.message)
          }
      }
    }
    
    module.exports = TurmaController;