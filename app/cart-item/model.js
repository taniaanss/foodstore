const mongoose = require('mongoose');
const {model, Schema} = mongoose;

let cartItem = Schema({

    name: {
        type: String,
        minlength: [5, 'Panjang nama makanan minimal 5 karakter'],
        required: [true, 'Field harus diisi']
    },

    qty: {
        type: Number,
        min: [1, 'Panjang QTY minimal 1 karakter'],
        required: [true, 'Field harus diisi']
    },

    price: {
        type: Number,
        default: 0
    },

    image_url: String,

    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },

    product: {
        type: Schema.Types.ObjectId,
        ref: 'Product'
    }
});

module.exports = model('CartItem', cartItem);