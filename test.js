const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const animalSchema = new Schema({
    name: String,
    type: String
});

animalSchema.methods.findSimilarTypes = function(cb){
    return this.model('Animal').find({type: this.type}, cb);
}
const Animal = mongoose.model('Animal', animalSchema);

const dog = new Animal({type: 'dog'});

dog.findSimilarTypes(function(err, dogs){
    console.log(dogs);
});


