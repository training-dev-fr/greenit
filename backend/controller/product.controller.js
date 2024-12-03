const { Product } = require("./../model/product.model.js");
const fs = require('fs');
const client = require('https');

exports.productByPage = async (req, res) => {
    let productList = await Product.findAll({
        limit: 101,
        offset: 101 * (req.params.page - 1),
        attributes: ['id', 'name', 'price', 'picture', 'avgRating', 'countRating']
    });
    res.status(200).json(productList);
}

exports.download = async (req, res) => {
    let productList = await Product.findAll({
        attributes: ['id', 'picture']
    });
    for (let product of productList) {
        if (!fs.existsSync("." + product.picture)) {
            client.get("https://via.placeholder.com/150?text=" + product.picture.replace("./pictures/", "").replace(".jpg", ""), (res) => {
                if (res.statusCode === 200) {
                    res.pipe(fs.createWriteStream("." + product.picture));
                } else {

                }

            });
        }
    }
        // fs.readdir('./pictures', (err, files) => {
        //     if (err) throw err;
        //     for(let file of files){
        //         fs.rename('./pictures/'+file,'./pictures/'+file + '.jpg',() => {})
        //     }
        // });

    }