
const homeData = require('../JsonData/HomeData.json');
const mongooseData = require('../MongoDB/MongoDB.jsx');
const img = require('../JsonData/img.json');
const HomeHandler = async (req, res) => {
    res.status(200).json(homeData);
}

const fs = require('fs');
const { $Size } = require('sift');


const LoginHandler = async (req, res) => {
    const password = Number(req.params.password);
    await mongooseData?.findOne({
        firstName: req.params.firstName, password: req.params.password
    }).then((data) => {
        if (data?.firstName == req.params.firstName && data?.password == password) {
            res.json(data);
        } else if (data?.firstName !== req.params.firstName || data?.password !== password) {
            res.json({ error: 'invalid' });
        }
    }).catch((err) => {
        res.send(err.message);
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
                res.render('page', { name: data?.firstName, pass: data?.password });
            });
        }

    })




}



const AccountHandler = async (req, res) => {
    await mongooseData?.findOne({ firstName: req.params.firstName, _id: req.params.id }).then((data) => {
        if (req.params.id === undefined) {
            res.json({ message: "hello" });
        } else {
            res.json(data);
        }

    }).catch((err) => {
        console.error(err);
    })
}

const imgHandler = (req, res) => {
    res.json(img);
}


const UpdateHandler = async (req, res) => {
    const id = req.params.id;
    await mongooseData?.findOne({ _id: id }).then((data) => {
        if (req.body.firstName) {
            const updatedata = mongooseData?.updateMany({ _id: data?._id }, { firstName: req.body.firstName }).then((data) => {
                res?.send("<h3>successfully update your userName</h3>");
            })
        } else if (req.body.lastName) {
            const updatedata = mongooseData?.updateMany({ firstName: data?.firstName }, { lastName: req.body.lastName }).then((data) => {
                res?.send("<h1>successfully update your lastName</h1>");
            })
        } else if (req.body.password) {
            const updatedata = mongooseData?.updateMany({ firstName: data?.firstName }, { password: req.body.password }).then((data) => {
                res?.send("<h1>successfully update your password</h1>");
            })
        } else if (req.body.email) {
            const updatedata = mongooseData?.updateMany({ firstName: data?.firstName }, { email: req.body.email }).then((data) => {
                res?.send("<h1>successfully update your email</h1>");
            })
        } else if (req.body.year) {
            const updatedata = mongooseData?.updateMany({ firstName: data?.firstName }, { year: req.body.year }).then((data) => {
                res?.send("<h1>successfully update your Status</h1>");
            })
        }
    });
}

const DeleteHandler = async (req, res) => {
    await mongooseData?.deleteOne({ _id: req.body.password }).then(() => {
        res.send("<h1>successfully delete your account</h1>");
    })
}

const DeleteHandlerAll = async (req, res) => {
    await mongooseData?.deleteMany({}).then((data) => {
        res.send("<h1>successfully delete all</h1>");
    })
}

const VerifyHandler = async (req, res) => {
    const email = req.body.email;
    await mongooseData?.findOne({ email: email }).then((data) => {
        if (data === null) {
            res.send("<h4>Invalid email please create account then use collegeDekho</h4>");
        } else {
            res.json(data);
        }
    }).catch((err) => {
        res.send(err.message);
    })
}
module.exports = { HomeHandler, SiginHandler, PostSiginHandler, LoginHandler, AccountHandler, imgHandler, UpdateHandler, DeleteHandler, DeleteHandlerAll, VerifyHandler };