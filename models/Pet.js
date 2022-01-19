import mongoose from 'mongoose';
const { Schema } = mongoose;

const PetSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Please add a pet name']
  },
  age: {
    type: Number
  },
  userId: {
    type: Schema.ObjectId,
    ref: 'User'
  },
  features: {
    type: [String]
  },
  type: {
    type: String,
    required: [true, 'Please tell us which kind of pet this is!']
  }
});

// looks into pets table
const PetModel = mongoose.model('Pet', PetSchema)

export default PetModel;