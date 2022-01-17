const dataBase = require("../models");

class NivelController {

    static async pegaTodosOsNiveis(req, res) {
      try {
        const todosOsNiveis = await dataBase.Niveis.findAll()
        return res.status(200).json(todosOsNiveis)
      } catch (error) {
        return res.status(500).json(error.message);
      }
    }

    static async pegaUmNivel(req, res) {
        const { id } = req.params;
        try {
          const umNivel = await dataBase.Niveis.findOne({
            where: { id: Number(id) },
          });
          return res.status(200).json(umNivel);
        } catch (error) {
          return res.status(500).json(error.message);
        }
      }
    
      static async criaNivel(req, res) {
        const novoNivel = req.body;
        try {
          const novoNivelCriado = await dataBase.Niveis.create(novoNivel);
          return res.status(200).json(novoNivelCriado);
        } catch (error) {
          return res.status(500).json(error.message);
        }
      }
    
      static async atualizaNivel(req, res) {
        const novosDados = req.body;
        const { id } = req.params;
        try {
          await dataBase.Niveis.update(novosDados, { where: { id: Number(id) } });
          const nivelAtualizado = await dataBase.Niveis.findOne({
            where: {
              id: Number(id),
            },
          });
          return res.status(200).json(nivelAtualizado);
        } catch (error) {
          return res.status(500).json(error.message);
        }
      }
    
      static async deletaNivel(req, res) {
          const {id} = req.params
          try {
            await dataBase.Niveis.destroy({where: { id: Number(id)}})
            return res.status(200).json({ mensagem : `id ${id} deletado`})
        } catch (error) {
              return res.status(500).json(error.message)
          }
      }
    }
    
    module.exports = NivelController;