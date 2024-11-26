// Searching a product
document.getElementById('product-search').addEventListener('keyup', () => {
    const searchValue = document.getElementById('product-search').value.toLowerCase();
    console.log(searchValue);

    const productsContainer = document.getElementById('products');
    const products = productsContainer.querySelectorAll('div');

    console.log(products[0].querySelector('p').textContent.toLowerCase());
    for(let i = 0; i < products.length; i++ ) {
        const product = products[i].querySelector('p').textContent.toLowerCase();
        if(product.indexOf(searchValue) !== -1){
            products[i].style.display = 'block';
        } else {
            products[i].style.display = 'none';
        }
    }
})