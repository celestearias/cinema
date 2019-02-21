//este archivo es una libreria

var Item = require('./pelicula');
module.exports = class _Pelicula {
   constructor( ) {

   }
Guardar(req,res) { //guardar es un metodo|| requeste/respond
	Item.create( //create es una palabra reservada e Item es la ibreria de mongoose
			{
    NOMBRE: req.body.NOMBRE,
    DURACIONMINUTOS: req.body.DURACIONMINUTOS,
    GENERO: req.body.GENERO,
    IDIOMAAUDIO: req.body.IDIOMAAUDIO,
    IDIOMASUB: req.body.IDIOMASUB,
    SINOPSIS: req.body.SINOPSIS,
    CLASIFICACION: req.body.CLASIFICACION,
    PRECIO: req.body.PRECIO,
    HORAINICIO: req.body.HORAINICIO,
    FECHA: req.body.FECHA,
    MINUTOINICIO: req.body.MINUTOINICIO,
    ASIENTOS: req.body.ASIENTOS,
    IMAGEN: req.body.IMAGEN,
    ESTADO: req.body.ESTADO
            }, 
			function(err, item) {
				if (err)
                    {
					res.send(err);}
				
          else{
                Item.find(function(err, item) {
				 	if (err)
				 		res.send(err)
				  res.json(item);
				});
                
                
          }
               	
			});
    
    
    
}
    
 Modificar(req,res) {
		Item.update( {_id : req.body.id}, //mongoose por si solo hace id para cada pelicula, con esto las buscamos
					{$set:
			{
   NOMBRE: req.body.NOMBRE,
    DURACIONMINUTOS: req.body.DURACIONMINUTOS,
    GENERO: req.body.GENERO,
    IDIOMAAUDIO: req.body.IDIOMAAUDIO,
    IDIOMASUB: req.body.IDIOMASUB,
    SINOPSIS: req.body.SINOPSIS,
    CLASIFICACION: req.body.CLASIFICACION,
    PRECIO: req.body.PRECIO,
    HORAINICIO: req.body.HORAINICIO,
    FECHA: req.body.FECHA,
    MINUTOINICIO: req.body.MINUTOINICIO,
    ASIENTOS: req.body.ASIENTOS,
    IMAGEN: req.body.IMAGEN,
    ESTADO: req.body.ESTADO
            }}, 
			function(err, item) {
				if (err)
                    {
					res.send(err);}
				// Obtine y devuelve todas las personas tras crear una de ellas
          else{
                Item.find(function(err, item) {
				 	if (err)
				 		res.send(err)
				  res.json(item);
				});
                
                
          }
               	
			});
    
    
    
}   
    
    Eliminar(req,res) {
	Item.remove({_id : req.body.id}, 
			function(err, item) {
				if (err)
                    {
					res.send(err);}
				// Obtine y devuelve todas las personas tras crear una de ellas
          else{
                Item.find(function(err, item) {
				 	if (err)
				 		res.send(err)
				  res.json(item);
				});    
          }
               	
			});
    
    
    
}
Seleccionartodos(req,res) {
		Item.find(
		function(err, item) {
			if (err)
                
                {
				res.send(err)
                }else{
                
                
					res.json(item); // devuelve todas las Personas en JSON	
          //item con min es el vector que contiene todas las peliculas
                    	 
                }
				}
			);
    
    
    
}
    
    Seleccionarporfecha(req,res) {
	Item.find({FECHA:req.body.FECHA}, function(err, item) { //igual que el anterior pero tiene un filtro
			if (err){
				res.send(err)}
        else{
            
					res.json(item); // devuelve todas las Personas en JSON		
				
        }
    
    
    
    
    
    
    
    }
			);
    
    
    
}
    
    Seleccionarporid(req,res) {
	Item.find({_id:req.body._id}, function(err, item) {
			if (err){
				res.send(err)}
        else{
            
					res.json(item); // devuelve todas las Personas en JSON		
				
        }
    
    
    
    
    
    
    
    }
			);
    
    
}
    
    Seleccionarpornombre(req,res) {
	Item.find({NOMBRE:req.body.NOMBRE}, function(err, item) {
			if (err){
				res.send(err)}
        else{
            
					res.json(item); // devuelve todas las Personas en JSON		
				
        }
    
    
    
    
    
    
    
    }
			);
    
    
    
}
}