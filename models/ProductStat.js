import mongoose from "mongoose";

const ProductStatSchema = new mongoose.Schema(
  {
    productId : String , 
    yearlySalesTotal : Number , 
    yearlyTotalSold : Number , 
    year : Number , 
    monthlyData : [{
        month: String,
        totalSales : Number , 
        totalUnits : Number
    }],
    dailyData : [{
        dates : String ,
        totalSales : Number , 
        totalUnits : Number ,

    }]
  },
  { timestamps: true }
);

const ProductStat = mongoose.model("ProductStat", ProductStatSchema) ||mongoose.models.ProductStat;
export default ProductStat;
