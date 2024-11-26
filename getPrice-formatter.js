function getPrice(product) {
    const gid = window.Clerk._config.globals.customer_group;
    if (product.customer_group_prices) {
        const map = JSON.parse(product.customer_group_prices);
        if (map[gid]) {
            return map[gid];
        } else {
            return product.price;
        }
    } else {
        return product.price;
    }
}
