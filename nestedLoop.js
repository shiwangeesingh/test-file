import { modelNames } from "mongoose";

// there are multiple ways of finding nested data 
// 1. $elemMatch with find or aggregate
// 2. simply initializing the value as an object with the help of dot
// 3. $unwind with aggregate
//1 way

async function getNestedData1(){
    try{
        let data = await ModelName.find({ArrayName: {$elemMatch:{key:value}}})
    }
    catch{
       // throw error 
    }
}

// 2nd way
async function getNestedData2(){
    try{
        let data = await ModelName.find({'ArrayName.key': value})
    }
    catch{
       // throw error 
    }
}

//3rd way
async function getNestedData3(){
    try{
        let data = await ModelName.aggregate([{
            $unwind:{
                path: ArrayName
            }
        }])
    }
    catch{
       // throw error 
    }
}