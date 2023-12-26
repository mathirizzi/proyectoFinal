import {Router} from 'express';

import ProductManager from '../ProductManager.js';

const products = new ProductManager("products.json");


const router = Router();


    router.get('/', async (req,res)=>{
        try{
           const result = await products.getProducts()
           const limit = parseInt(req.query.limit) || 10;
           const productsLimit = result.slice(0, limit);
          res.send({
            status: 'success',
            result: productsLimit
          })
    }   catch (error) {
        res.status(500).send('Error de servidor')
    }
       
})

router.get('/:pid', async (req,res)=>{
    try {
        const {pid} = req.params;   
        const resultID = await products.getProductById(parseInt(pid))
        res.send({
            status: 'success',
            result: resultID
        })
        
    } catch (error) {
        res.status(500).send('Error de servidor')
    }
})



export default router;