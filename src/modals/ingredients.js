const knex=require('./knex')

const İngredients ={
    getAll:()=>{
   return knex('ingredients').whereNull('deleted_at')
    },
    getById:(id)=>{
        return knex ('ingredients').where({id}).first()
    },

    
   update: (id, ingredients) => {return knex('ingredients').where({id})
        .update({
            ...ingredients,               
            updated_at: new Date()      
        })
        .returning('*');
},
    delete:(id)=>{
        return knex ('ingredients').where({id}).update({deleted_at:new Date()}).returning('*')
    },
}

module.exports=İngredients