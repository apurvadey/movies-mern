const mongoose = require('mongoose')
const Schema =  mongoose.Schema

const Movie = new Schema(
    {
        name:{type:String, required:true},
        time:{type:[String], required:true},
        rating:{type:Number, required:true}
    },
    {timestamp:true}, //createdAt, updatedAt time by default set
)

module.exports = mongoose.model('movies', Movie) //first argument name of collection
//second argument name of schema