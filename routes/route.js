const express = require('express');
const router = express.Router();
const contact = require('../models/contacts');

//retrieving contacts
router.get('/contacts',function(request,response,next){
    contact.find(function(error,contacts){
       response.json(contacts);
    })
});

//add contact
router.post('/contact',function(request,response,next){
    let newContact = new contact({
        first_name:request.body.first_name,
        last_name:request.body.last_name,
        phone:request.body.phone,
    });
    newContact.save(function(error,contact){
        if(error){
            response.json({msg:'Failed to add contact'});
        }else{
            response.json({msg:'successfully added contact'});
        }
    })
});

//delete contacts
router.delete('/contact/:id',function(request,response,next){
    contact.remove({_id: request.params.id}, function(error,result){
      if(error){
          response.json(error);
      }  
      else{
          response.json(result);
      }
    })
});

module.exports= router;