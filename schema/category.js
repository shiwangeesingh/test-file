var{mongoose, conn} = require("../connection");
const categorySchema = mongoose.Schema({
    categoryName : {
        type: String,
        require:true,
        default:""
    },
    status : {
        type: Number,
        require:true,
        default:1  //1 for active 0 for inactive
    },
    categoryImage : {
        type: String,
        require:true,
        default:""
    }
},
 {
    strict: true,
    collection: 'category',
    versionKey: false,
    timestamps: true,
});
exports.ProductModel = conn.model('category', categorySchema);
