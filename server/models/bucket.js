var mongoose = require('mongoose')
var Schema = mongoose.Schema;
var BucketSchema = new Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    _users: [{type: Schema.Types.ObjectId, ref: 'User'}],
    _creator: String,
    status: {type: String, default: 'Pending'},
    created_at: {type: Date, default: Date.now()}
})

mongoose.model('Bucket', BucketSchema)