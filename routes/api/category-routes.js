const router = require('express').Router();
const { response } = require('express');
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  Category.findAll({
    include: [Product]
  })
    .then(response => res.json(response))
    .catch(error => console.error(error))
  // be sure to include its associated Products
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  Category.findByPk(req.params.id, {
    include: [Product]
  })
    .then(response => res.json(response))
    .catch(error => console.error(error))
  // be sure to include its associated Products
});

router.post('/', (req, res) => {
  // create a new category
  Category.create(req.body)
    .then(response => res.json(response))
    .catch(error => console.error(error))
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(
    { category_name: req.body.category_name },
    {
      where: {
        id: req.params.id
      }
    }
  )
    .then(response => res.json(response))
    .catch(error => console.error(error))
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy(
    {
      where: {
        id: req.params.id
      }
    }
  )
    .then(response => res.json(response))
    .catch(error => console.error(error))
});

module.exports = router;
