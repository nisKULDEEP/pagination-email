const mongoose = require("mongoose");
const app = require("./index");

mongoose
  .connect(
    "mongodb+srv://niskuldeep:asd%401998@cluster0.brhhe.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  )
  .then(console.log("DB Connected"));

const PORT = 3030;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
