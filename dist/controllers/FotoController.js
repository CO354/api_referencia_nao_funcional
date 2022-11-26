"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _multer = require('multer'); var _multer2 = _interopRequireDefault(_multer);
var _multeConfig = require('../config/multeConfig'); var _multeConfig2 = _interopRequireDefault(_multeConfig);
var _Foto = require('../models/Foto'); var _Foto2 = _interopRequireDefault(_Foto); // Importando o model Foto, Obrigatorio

const upload = _multer2.default.call(void 0, _multeConfig2.default).single('photo');

class FotoController {
  store(req, res) {
    return upload(req, res, async (err) => { // => Construindo a funcao para reparar o erro
      if (err) {
        return res.status(400).json({
          errors: [err.code], // => selecionando o erro especifico no arrays
        });
      }
      try {
        const { originalname, filename } = req.file; // O campo que precisamos que precisa ser preenchido
        const { aluno_id } = req.body; // => O id referencia vem como o dado do body
        const foto = await _Foto2.default.create({ originalname, filename, aluno_id });

        return res.json(foto);
      } catch (e) {
        console.log(e);
        return res.status(400).json({
          errors: ['Aluno não existe'],
        });
      }
    });
  }
}

exports. default = new FotoController();
