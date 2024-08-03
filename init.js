const mongoose = require("mongoose");
const chat  = require("./models/chat.js");

main().then(() => {
    console.log("connection successful");
})
.catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let allChats = [
    {
        from: "Riyaz",
        to: "Moid",
        msg: "Assalamualaikum",
        created_at: new Date(),
    },
    {
        from: "Ayesha",
        to: "Sara",
        msg: "How are you?",
        created_at: new Date(),
       
    },
    {
        from: "John",
        to: "Doe",
        msg: "Hey, what's up?",
        created_at: new Date(),
        
    },
    {
        from: "Michael",
        to: "Chris",
        msg: "Let's catch up tomorrow.",
        created_at: new Date(),
    },
    {
        from: "Linda",
        to: "Alice",
        msg: "Can you send me the files?",
        created_at: new Date(),
    }
];

chat.insertMany(allChats)