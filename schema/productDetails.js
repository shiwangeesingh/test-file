var{mongoose, conn} = require("../connection");
let  productDetailsSchema  = mongoose.Schema(
    {
        productId : {     
            type: mongoose.Schema.Types.ObjectId,
                    ref: 'product',
                    default : null
            },
        color : {
            type: String,
            require:true,
            default:""
        },
        type: {
            type: String,
            require:true,
            default:""
        },
        price: {
            type: String,
            require:true,
            default:""
        },
        discount: {
            type: String,
            require:true,
            default:""
        },
        quantity: {
            type: String,
            require:true,
            default:""
        },  
        productImage: {
            type: Array,
            require:true,
            default:[]
        },
    },
    {
        strict: true,
        collection: 'productDetails',
        versionKey: false,
        timestamps: true,
    });
exports.ProductDetailModel = conn.model('productDetails', productDetailsSchema);