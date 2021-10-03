'use strict';

const path = require('path');
const redoc = require('redoc-express');
const router = require('express').Router();

const definition = require('../../scripts/swaggerDefinition');

router.use('/', require('./root'));

router.get('/docs/openapi.yaml', (req, res) => res.sendFile(path.join(__dirname, '../../../', 'openapi.yaml')));
router.get('/docs', redoc({
  title: definition.info.title,
  specUrl: '/docs/openapi.yaml',
}));

router.use('/users', require('./users'));

module.exports = router;
