const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:271017/paytm");

const userSchema = moongoose.Schema({
    username: String;
    password: String;
    firstName: String;
    lastName: String;
});

const User = mongoose.model("User", userSchema);

model.export = {
    User
}