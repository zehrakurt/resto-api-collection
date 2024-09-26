const knex=require('./knex')

const Productingredients ={
    getAll:()=>{
        return knex('product_ingredients');
    },
    getById:(id)=>{
        return knex ('product_ingredients').where({id}).first()
    },
    
   update: (id, product_ingredients) => {return knex('product_ingredients').where({id})
        .update({
            ...product_ingredients,               
            updated_at: new Date()      
        })
        .returning('*');
},
delete: (id) => {
    return knex('product_ingredients').where({ id }).del().returning('*');
},

}

module.exports=Productingredients;