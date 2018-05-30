
var models= require('../models');
module.exports=function(app){
     // Api routes to dispaly all of the Burgers
     app.get("/", function(req, res) {
        // findAll returns all entries for a table when used with no options
        db.Burgers.findAll({}).then(function(data) {
              // We have access to the Burgers as an argument inside of the callback function
         var burgerOject={
           burger:data
         }
         // pass burgerObject to handlebars
              res.render("index",burgerOject);
        }).catch((err) => {
          res.status(500).json({
              error: err.message}
            );
        });
          })};
          // API route to insert a new burger
  app.post('/api/Burgers', function(req, res) {
    db.Burger.create({
      burger_name: req.body.burger
    }).then(function(results) {
      res.json(results);
      res.redirect('/');
    })
    .catch(function(err) {
      // Whenever a validation or flag fails, an error is thrown
      // We can "catch" the error to prevent it from being "thrown", which could crash our node app
        res.json(err);
      });;
  });
// API route to update a burger devoured state as true.
  app.put("/api/Burgers:id", function(req, res) {

// Update takes in an object describing the properties we want to update, and
    // we use where to describe which objects we want to update
    db.Burgers.update({
      
      devoured: req.body.devoured
    }, {
      where: {
        id: req.params.id
      }
    }).then(function(dbBurgers) {
      res.json(dbBurgers);
    })
      .catch(function(err) {
      // Whenever a validation or flag fails, an error is thrown
      // We can "catch" the error to prevent it from being "thrown", which could crash our node app
        res.json(err);
      });
// API route to delete a burger.
app.delete("/api/Burgers:id", function(req,res){
  db.Burgers.destroy({
    where:{
      id:req.params.id
    }
    
  }).then(function(dbBurgers){
    res.json(dbBurgers);
  })
  .catch(function(err) {
    
      res.json(err);
    });
})

  });

    
