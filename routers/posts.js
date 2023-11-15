const express = require('express');
const router = express.Router();
router.use(express.urlencoded());
const postsController = require('../controllers/postsController');
const authController = require('../controllers/authController');
const multer = require('multer');
const upload = multer({ dest: 'public/imgs/posts' });
const authenticateJWT = require('../middlewares/authMiddleware');


//rotte
router.get('/', postsController.home);
router.get('/posts', postsController.index);
router.get('/posts/create', postsController.create);
router.get('/posts/:slug', postsController.show);
router.get('/posts/:slug/download', postsController.download);
//rotta autenticate
router.post('/auth/login', authController.authenticateUser);
router.post('/posts/', authenticateJWT, upload.single('image'), postsController.store);

//errori
const errorHandler = require('../middlewares/errorHandler');
const notFoundHandler = require('../middlewares/notFoundHandler');
router.use(errorHandler);
router.use(notFoundHandler);

module.exports = router;
