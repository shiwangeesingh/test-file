var{mongoose, conn} = require("../connection");
let  productSchema  = mongoose.Schema(
    {
        categoryId : {     
            type: mongoose.Schema.Types.ObjectId,
                    ref: 'category',
                    default : null
            },
        itemName : {
            type: String,
            require:true,
            default:""
        },
        type: {
            type: String,
            require:true,
            default:""
        },
        productFrontImage: {
            type: String,
            require:true,
            default:""
        },
        currentDate: {
            type: String,
            require:true,
            default:""
        },
    },
    {
        strict: true,
        collection: 'product',
        versionKey: false,
        timestamps: true,
    });
exports.ProductModel = conn.model('product', productSchema);