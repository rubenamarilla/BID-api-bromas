const mongoose = require("mongoose");

const JokeSchema = mongoose.Schema({
    setup: {
        type: String,
        minlength: [10, "The setup should be at least 10 characters long"]
    },
    punchline: {
        type: String,
        minlength: [3, "The punchline should be at least 3 characters long"]
    }
});

const Joke = mongoose.model("Joke", JokeSchema);

module.exports = Joke;