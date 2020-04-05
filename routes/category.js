var express = require('express');
var router = express.Router();

// Require controller modules.
var category_controller = require('../controllers/categoryController');

/// CATEGORY ROUTES ///

// GET CATEGORY home page.
router.get('/', category_controller.category_list);

// GET request for creating a CATEGORY.
router.get('/create', category_controller.category_create_get);

// POST request for creating CATEGORY.
router.post('/create', category_controller.category_create_post);

// GET request to delete CATEGORY.
router.get('/:id/delete', category_controller.category_delete_get);

// POST request to delete CATEGORY.
router.post('/:id/delete', category_controller.category_delete_post);

// GET request to update CATEGORY.
router.get('/:id/update', category_controller.category_update_get);

// POST request to update CATEGORY.
router.post('/:id/update', category_controller.category_update_post);

// GET request for one CATEGORY.
router.get('/:id', category_controller.category_detail);

// GET request for list of all CATEGORY items.
router.get('/', category_controller.category_list);

module.exports = router;
