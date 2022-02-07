const express = require("express");
const app = express();
const fs = require("fs");

app.use(express.json());
let cats = fs.readFileSync("./cats.json", "utf-8");
let catsObj = JSON.parse(cats);

app.get("/", (req, res) => {
  res.status(200).json({
    status: "success",
    data: {
      cats: catsObj.length,
      catsObj,
    },
  });
});

// get cat by id
app.get("/:id", (req, res) => {
  if (req.params.id < 0 || req.params.id >= catsObj.length) {
    res.status(404).json({
      status: "fail",
      message: "No cat found with this id",
    });
    return;
  }

  let id = req.params.id;
  const cat = catsObj[id];
  res.status(200).json({
    status: "success",
    data: {
      cat,
    },
  });
});

// to post cat
app.post("/", (req, res) => {
  const cat = {
    id: catsObj[catsObj.length - 1].id + 1,
    name: req.body.name,
    age: req.body.age,
    breed: req.body.breed,
  };

  catsObj.push(cat);

  const catStr = JSON.stringify(catsObj);
  fs.writeFileSync("./cats.json", catStr);

  res.status(200).json({
    status: "success",
    data: {
      cats: catsObj.length,
      catsObj,
    },
  });
});

// delete cat
app.delete("/:id", (req, res) => {
  try {
    if (req.params.id < 0 || req.params.id >= catsObj.length) {
      res.status(404).json({
        status: "fail",
        message: "No cat found with this id",
      });
      return;
    }

    const id = req.params.id * 1;

    catsObj = catsObj.filter((cat) => {
      return cat.id !== id;
    });

    for (let i = id; i < catsObj.length; i++) {
      catsObj[i].id = catsObj[i].id - 1;
    }

    fs.writeFileSync("./cats.json", JSON.stringify(catsObj));
    res.status(200).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    res.status(500).json({
      status: "Internal Server error",
      err: err,
    });
  }
});

// update cat
app.put("/:id", (req, res) => {
  if (req.params.id < 0 || req.params.id >= catsObj.length) {
    res.status(404).json({
      status: "fail",
      message: "No cat found with this id",
    });
    return;
  }
  const id = req.params.id * 1;
  const { name, breed, age } = req.body;
  let cat = catsObj[id];
  cat = {
    id,
    name,
    breed,
    age,
  };

  catsObj[id] = cat;
  fs.writeFileSync("./cats.json", JSON.stringify(catsObj));
  res.status(200).json({
    status: "success",
  });
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
