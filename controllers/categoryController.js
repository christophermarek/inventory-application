var Category = require("../models/category");

const { body,validationResult } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');

//Send home page
exports.index = function(req, res) {
    res.render('index', { title: 'Express' });
};

// Display list of all Category.
exports.category_list = function(req, res) {
  Category.find({}, function(err, categories) {
      if(err) return console.error(err);
      res.render('index', { title: 'Category List', category_list: categories });
  });
};

// Display detail page for a specific Category.
exports.category_detail = function(req, res) {
  Category.findById(req.params.id, function(err, categoryData) {
    if (err) return console.error(err);
      res.render('category', {title: 'Category View', name: categoryData.name, description: categoryData.description, url: categoryData.url});
  });
};

// Display Category create form on GET.
exports.category_create_get = function(req, res) {
  res.render('category_form', { title: 'Create Category'});
};

// Handle Category create on POST.
exports.category_create_post = function(req, res) {
    var category = new Category({ name: req.body.name, description: req.body.description});
    category.save(function (err) {
      if (err) { return console.error(err); }
      res.redirect('index');
    });
    
};

// Display Category delete form on GET.
exports.category_delete_get = function(req, res, next) {
   
};

// Handle Category delete on POST.
exports.category_delete_post = function(req, res, next) {
  console.log(req.body.id);
   Category.findByIdAndRemove(req.body.id, function deleteAuthor(err) {
     if (err) { return next(err); }
      res.redirect('/category');
  })
};

// Display Category update form on GET.
exports.category_update_get = function(req, res) {
  res.send("NOT IMPLEMENTED: Category update GET");
};

// Handle Category update on POST.
exports.category_update_post = function(req, res) {
  res.send("NOT IMPLEMENTED: Category update POST");
};
