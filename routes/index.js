var express = require('express');
var router = express.Router();
var productHelpers=require('../helpers/productHelpers')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/get-coordinates',function(req,res){
  console.log('Hello WOrld');
})

router.post('/post-coordinates',async function(req,res){
  console.log("This route is beif=gn called successfully",req.body.message)
  let product= await productHelpers.pushLatLogn(req.body.message)
  res.json({
    "message":product,
  });
})
module.exports = router;
