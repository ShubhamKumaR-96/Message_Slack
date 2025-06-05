
export default function crudRepository(schema){
    return {
        model:schema,
        create:async(data)=>{
            const newDoc=await model.create(data)
            return newDoc
        },
        getAll:async()=>{
            const allDocs=await model.find()
            return allDocs
        },
        getById:async(id)=>{
          const doc=await model.findById(id)
          return doc
        },
        delete:async(id)=>{
            const response=await model.findByIdAndDelete(id)
            return response
        },
        update:async(id,data)=>{
            const updateDoc=await model.findByIdAndUpdate(id,data,{new:true})
            return updateDoc
        }
    }


}