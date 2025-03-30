const mongoose = require('mongoose');
mongoose.set("strictQuery", false);
const mongoURI = 'mongodb://gofoodAdmin:06120612@cluster0-shard-00-00.6jvm1.mongodb.net:27017,cluster0-shard-00-01.6jvm1.mongodb.net:27017,cluster0-shard-00-02.6jvm1.mongodb.net:27017/gofoodMERN?ssl=true&replicaSet=atlas-l2rec8-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0'
const mongoDB = () => {
    mongoose.connect(mongoURI, { useNewUrlParser: true }, (err, result) => {
        if (err) {
            console.log("---", err);
        }
        else {
            console.log("Connected");
        }
    });
}
module.exports = mongoDB;
