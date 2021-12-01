var express = require('express'); 
const costume_controlers= require('../controllers/costume'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var costume_controller = require('../controllers/costume'); 

// A little function to check if we have an authorized user and continue on or 
// redirect to login. 
const secured = (req, res, next) => { 
    if (req.user){ 
      return next(); 
    } 
    req.session.returnTo = req.originalUrl; 
    res.redirect("/login"); 
  } 

/// API ROUTE /// 
 
// GET resources base. 
router.get('/', costume_controlers.costume_view_all_Page ); 
 
/// COSTUME ROUTES /// 
 
// POST request for creating a Costume.  
router.post('/costumes', costume_controller.costume_create_post); 
 
// DELETE request to delete Costume. 
router.delete('/costumes/:id', costume_controller.costume_delete); 
 
// PUT request to update Costume. 
router.put('/costumes/:id', costume_controller.costume_update_put); 
 
// GET request for one Costume. 
router.get('/costumes/:id', costume_controller.costume_detail); 
 
// GET request for list of all Costume items. 
router.get('/costumes', costume_controller.costume_list); 
 
/* GET costumes */ 
router.get('/costume', costume_controlers.costume_view_all_Page ); 

/* GET detail costume page */ 
router.get('/detail', costume_controlers.costume_view_one_Page); 

/* GET create costume page */ 
router.get('/create', costume_controlers.costume_create_Page); 

/* GET create update page */ 
router.get('/update', secured, costume_controlers.costume_update_Page); 

/* GET create costume page */ 
router.get('/delete', costume_controlers.costume_delete_Page);



module.exports = router; 