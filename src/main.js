// const dbConnection = require('./connections/dbConnection');

// console.log(dbConnection().then(con=>console.log(con)))

const ProductRepository = require('./repository/productRepository')

const productRepository = new ProductRepository();

const main = async () => {
    // let savedProduct = await productRepository.saveProduct({
    //     productId:2,
    //     productName:'Ipad12',
    //     price:44562.5,
    //     description:'IpadPro'
    // })
    // console.log('Saved Product --->',savedProduct);

    // let updatedProduct = await productRepository.updateProduct({
    //     productId:2,
    //     productName:'Ipad12',
    //     price:34500.0,
    //     description:'IpadPro'
    // })

    // let deletedProduct = await productRepository.deleteProduct(2)
    // console.log('Deleted Product --->',deletedProduct);

    const products = await productRepository.findAllProducts()
    console.log('Products List ',products)

}
main();