
const homeData = require('../JsonData/HomeData.json');
const mongooseData = require('../MongoDB/MongoDB.jsx');

const HomeHandler = async (req, res) => {
    res.status(200).json(homeData);
}


const LoginHandler = async (req, res) => {
    const password = Number(req.params.password);
    await mongooseData?.findOne({
        firstName: req.params.firstName, password: req.params.password
    }).then((data) => {
        if (data?.firstName === req.params.firstName && data?.password === password) {
            res.json(data);
        } else {
            res.json({ message: "your password is incorrect" });
        }
    }).catch((e) => {
        console.log(e);
    })
}






const SiginHandler = (req, res) => {
    res.render('Sigin');
}


const PostSiginHandler = async (req, res) => {
    await mongooseData?.findOne({ firstName: req.body.firstName, lastName: req.body.lastName }).then((data) => {
        if (data?.firstName === req.body.firstName && data?.lastName === req.body.lastName) {
            res.json({ message: "this name already exists", tip: "you try again ", data: "Enter a unique name and password" })
        } else {
            mongooseData?.insertMany({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                date: req.body.date,
                branch: req.body.Branch,
                email: req.body.email,
                year: req.body.branchss,
                password: req.body.password
            }).then((data) => {
                console.log(data);
                res.json({ message: "your form is submit", tip: `you user name is ${req.body.firstName}`, data: `your paasword is ${req.body.password} remember your password` });
            });
        }

    })




}



const AccountHandler = async (req, res) => {
    await mongooseData?.findOne({ firstName: req.params.firstName, _id: req.params.id }).then((data) => {
        res.json(data);
    })
}
module.exports = { HomeHandler, SiginHandler, PostSiginHandler, LoginHandler, AccountHandler };