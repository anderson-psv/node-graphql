module.exports = {
    discountPrice(product) {
        if(product.discount) {
            return parseFloat(product.price * (1 - product.discount)).toFixed(2);
        }
        else {
            return product.price;
        }
    }
}
