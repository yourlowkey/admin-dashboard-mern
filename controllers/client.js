import Product from "../models/Product.js";
import ProductStat from "../models/ProductStat.js";

export const GetProducts =async (req,res)=>{
    try {
        const products = await Product.find()
        const productsWithStat = await Promise.all(
            products.map(async(product)=>{
                const stat = await ProductStat.find({
                    productId : product._id                   
                })
                return {
                    ...product._doc,
                    stat
                }
            })
        )
        res.status(200).json(productsWithStat)
    }catch (err) {
        res.status(404).json({message : err.message})
    }
}