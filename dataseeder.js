var nano = require('nano')('https://2b54d91a-d555-4f31-a6c4-485092368d0a-bluemix:67e30e875157bdd292bd7b55d3af63066dba29cc373f4447f3357c55802bb563@2b54d91a-d555-4f31-a6c4-485092368d0a-bluemix.cloudant.com');

// clean up the database we created previousl
nano.db.destroy('compania_cia', function() {
  // create a new database
  nano.db.create('compania_cia', function() {
    // specify the database we are going to use
    var prints = nano.use('compania_cia');
    // and insert a document in it
    prints.insert({ 'compania_cia': [
        {
            "cia_codcia": 1,
            "cia_nomcia": "OSIS SAC",
            "cia_sigcia": "OSIS",
            "cia_numruc": "20213332636",
            "cia_dircia": "Calle Maranga con Hermanos Catari 110, Urb Maranga, San Miguel, Lima",
            "cia_numtlf": {
                "numtlf": [
                    ""
                ]
            },
            "cia_nomcon": "",
            "cia_corcon": "",
            "cia_pagweb": "http://www.osisonline.com",
            "cia_fecing": "16-02-2017",
            "cia_fecact": "16-02-2017"
        },
        {
            "cia_codcia": 2,
            "cia_nomcia": "ME PIDO POLLO SAC",
            "cia_sigcia": "ME PIDO POLLO",
            "cia_numruc": "20213332637",
            "cia_dircia": "Calle Maranga con Hermanos Catari 110, Urb Maranga, San Miguel, Lima",
            "cia_numtlf": {
                "numtlf": [
                    ""
                ]
            },
            "cia_nomcon": "",
            "cia_corcon": "",
            "cia_pagweb": "http://www.mepidopollo.com",
            "cia_fecing": "16-02-2017",
            "cia_fecact": "16-02-2017"
        }
    	]}, 'compania_cia', function(err, body, header) {
      if (err) {
        console.log('Error creando documento - ', err.message);
        return;
      }
      console.log('Todos los registros fueron insertados.')
      console.log(body);
    });
  });
});