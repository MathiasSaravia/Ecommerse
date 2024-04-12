function searchFilter(products, string) {
    if (!string.trim()) {
        return products;
    } else {
        return products.filter(product => product.name.toLowerCase().includes(string.toLowerCase()));
    }
}

