const express = require('express')

const app = new express()
const port = process.env.PORT || 3000

app.get('/salud', async(req, res) => {
    //const _id = req.params.id
    //consejos tomados de 
    //https://www.centromedicociudadjardin.com/consejos/consejos-para-conseguir-una-buena-salud.html
    const algunosConsejos = ["Realización de deporte. El deporte es una de las mejores maneras de mantenernos jóvenes y en perfectas condiciones",
        "El descanso otro punto que se tiene que tener en cuenta, y es que es importante que durmamos entre siete u ocho horas diarias para que nuestro organismo esté en perfectas condicione",
        "Mantener una alimentación que debe ser variada. Seguir una dieta en la que estén presentes diferentes tipos de alimentos es esencial para conseguir una buena salud.",
        "Debemos decantarnos por las grasas monoinsaturadas y por las poliinsaturadas que nuestro cuerpo aprovechará al máximo y las cuales nos ayudarán a mantenernos en perfecto estado.",
        "No saltarnos ninguna comida es esencial para estar en plena forma. Pasar hambre es lo peor que podemos hacer a la hora de mantenernos sanos.",
        "Incluir en la dieta frutas y verduras es esencial para mantenernos en plena forma."
    ];
    try {
        const consejo = algunosConsejos[Math.floor(((algunosConsejos.length - 1) * Math.random()))]

        //console.log((algunosConsejos.length - 1) * Math.random()) 
        res.status(200).send({ "mensaje": consejo })
    } catch (e) {
        res.status(500).send(e.message)
    }
})

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})