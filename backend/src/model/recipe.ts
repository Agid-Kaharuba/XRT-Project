import mongoose from "mongoose";

const recipeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    steps: {
        type: [Object],
        required: false
    },
    ingredients: {
        type: [String],
        required: false
    },
    category: {
        type: String,
        required: true
    }
});

export default mongoose.model('Recipe', recipeSchema);