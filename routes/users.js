import express from 'express';

const router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
  return router;
});

export default router;