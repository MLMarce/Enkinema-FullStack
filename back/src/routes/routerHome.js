const {Router} = require('express');
const { getHome, postHome } = require('../controllers/controllerHome');
const routerHome = Router();

routerHome.get('/', getHome)
routerHome.post('/', postHome)



module.exports = routerHome