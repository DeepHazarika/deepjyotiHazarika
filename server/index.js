const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

const Ads = require("./models/ads");
const Companies = require("./models/companies");

app.use(express.json());
app.use(cors());

// mongoose.connect(process.env.MONGO_URL);

mongoose.connect(
  "mongodb+srv://deep:password12345@Project.zb93n9o.mongodb.net/project?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
  }
);

app.get("/companies", async (req, res) => {
  try {
    const data = await Companies.find();
    const query = req.query.q;
    let ress;
    data.map(item => {
      if (item.name.toLocaleLowerCase() === query.toLowerCase()) ress = item;
    });
    if (ress) {
      let r = await Ads.find({
        companyId: ress._id,
      });
      if (r) {
        return res.json({
          Company: ress,
          Ad: r,
        });
      } else
        return res.json({
          Company: ["No Data"],
          Ad: ["No Data"],
        });
    } else
      return res.json({
        Company: ["No Data"],
        Ad: ["No Data"],
      });
  } catch (error) {
    console.log(error);
  }
});

app.listen(3001, () => {
  console.log("Server Started");
});
