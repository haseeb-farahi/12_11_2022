// Step 3 creating Schema for storing our data in Mongo db
var mongoose = require('mongoose');

var imageSchema = new mongoose.Schema({
    name:String,
    desc:String,

    img:{
        data:Buffer,
        ContentType:String
    }
},{timestamps:true}
)
module.exports = new mongoose.model('Image',imageSchema);