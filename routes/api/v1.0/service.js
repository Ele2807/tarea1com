var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/imc', function(req, res) {
  var imc= Number(req.body.masa)/ Math.pow(Number(req.body.altura), 2)
  //res.render('index', { title: 'Express' });
  if(imc <16){
    res.send({
      "msn" : "Delgadez severa"
    });
  }else if (imc > 16 && imc < 16.99)  {
    res.send(
    {
        "msn" : "Delgadez moderada"
    });
  }else if (imc > 17 && imc < 18.49){
      res.send(
    {
        "msn" : "Delgadez leve"
    });
  }else if (imc >= 18.5 && imc <=24.99){
      res.send(
    {
        "msn" : "normal"
    });
  }else if (imc >= 25 && imc <=29.99){
      res.send(
    {
        "msn" : "sobre peso"
    });
  }else if (imc >= 30&& imc <=39.99){
      res.send(
    {
        "msn" : "obesidad"
    });
  }else if (imc >= 40){
      res.send(
    {
        "msn" : "obesidad mordida"
    });
  }else {
      res.send(
    {
        "msn" : "error"
    });
  }

  //res.render('index', { title: 'Express' });
});

module.exports = router;
