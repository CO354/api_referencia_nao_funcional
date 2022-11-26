"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _UserController = require('../controllers/UserController'); var _UserController2 = _interopRequireDefault(_UserController);
var _loginRequired = require('../middlewares/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);

const router = new (0, _express.Router)();

// NAO DEVERIA existir colocamos so para completar o CRUD, Na aplicacao real nao existiria

router.get('/', _loginRequired2.default, _UserController2.default.index); // LISTA de usuarios
// router.get('/:id', userController.show); // LISTA USUARIO

// ESSE PRECISARIAMOS PRECISAMOS FAZER COM O USUARIO EDITE APENAS OS SEU DADOS
// PUT E DELETE, NAO PASSAMOS DINAMICAMENTE O ID
// NO STORE DEIXAMOS LIVRE PARA CRIAR UM O USUARIO CRIAR NOTAS

router.post('/', _UserController2.default.store);
router.put('/', _loginRequired2.default, _UserController2.default.update);
router.delete('/', _loginRequired2.default, _UserController2.default.delete);

exports. default = router;

/*
index ==> lista todos os usuarios  ====> get
store/create => cria um novo usuario ==> post
delete => apaga um usuario ==> DELETE
show => mostra um usuario ==> GET
update => actualiza um usuario ===> PATCH ou PUT

*/
