const knex=require('./knex')
const { SHOW_DELETED } = require('../const');

const Product ={
    getAll: (query) => {
        const { categoryId, showDeleted } = query; 

        if (showDeleted === SHOW_DELETED.TRUE) {
            return knex('products').where('category_id', categoryId);
        } else if (showDeleted === SHOW_DELETED.ONLY_DELETED) {
            return knex('products').where('category_id', categoryId).whereNotNull('deleted_at');
        } else {
            return knex('products').where('category_id', categoryId).whereNull('deleted_at');
        }
    },
    
    getById:(id)=>{
        return knex ('products').where({id}).first()
    },
   create:(product)=>{
    return knex('products').insert(product).returning('*')
   },
    
   update: (id, product) => {return knex('products').where({id})
        .update({
            ...product,               
            updated_at: new Date()      
        })
        .returning('*');
},
    delete:(id)=>{
        return knex ('products').where({id}).update({deleted_at:new Date()}).returning('*')
    },
}

module.exports=Product;