
const express = require('express');
const jwt=require('jsonwebtoken');

const payload={
    name:"Gaurav",
    userType:"owner"
}

const secretKey = 'GGGHFFJGYUFHFF';

const options = {
    expiresIn: '1h',
    algorithm: 'HS256'
};


const token = jwt.sign(payload, secretKey, options);

console.log(token);


const app = express();

app.use(express.json());

app.post('/users', (req, res) => {
    res.send("Hello world");
})




app.listen(3000, () => {
    console.log('Server running on port 3000');
});
