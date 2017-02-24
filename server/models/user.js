var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var UserSchema = new Schema({
    name: String,
    _buckets: [{type: Schema.Types.ObjectId, ref: 'Bucket'}]
})

mongoose.model('User', UserSchema);