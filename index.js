const express = require('express');
require("./config");
const Product = require('./product');
const app = express();
const cors = require('cors');

app.use(express.json());

app.use(cors({
 origin : ["localhost:5000", "http://localhost:5000", 'http://localhost:3000', "localhost:3000"]

}))
app.post("/create", async (req, resp) => {
    let data = new Product(req.body);
    const result = await data.save();
    resp.send(result);
});

app.get("/list", async (req, resp) => {
    let data = await Product.find().sort({  createdAt: -1 });
    resp.send(data);
})

app.delete("/delete/:_id", async (req, resp) => {
    console.log(req.params)

    //delete it will id
    let data = await Product.deleteOne(req.params);
    resp.send(data);
})


app.put("/update/:_id",async (req, resp) => {
    // console.log(req.params)
    let data = await Product.updateOne(
        req.params,
        {$set: req.body}
    );
    resp.send(data);
})

app.listen(5000,()=>{
    console.log("Server Started")

});
