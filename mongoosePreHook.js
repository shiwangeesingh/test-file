const {ProductModel} = require('./schema/products')
exports.preHook = async ((req,res)=>{
    try{
        ProductModel.pre("save", (next) => {
            const currentDate = new Date
            console.log("currentDate is :", currentDate)
            next()
          })
    }
    catch{
        console.log("Error Caught!")
    }
})
