const express = require("express");
const { loginVerification, superLoginVerification, addClassVerification } = require("./types.js")
const { connectDB } = require('./db/index.js')
const { User } = require("./model/usermodel.js")
const { v4: uuidv4 } = require('uuid');
const { SuperUser, AddClass } = require("./model/usermodel.js")
const jwt = require("jsonwebtoken")
const cookieparser = require("cookie-parser");
const studentEnrolledmodel = require("./model/studentEnrolledmodel.js");
const multer = require('multer')
const cors = require('cors');
const path = require('path');
const { default: mongoose } = require("mongoose");
const { Files } = require("./model/filemodel.js");
const { classTimeTableModel } = require("./model/classTimeTable.js");


const app = express();

app.use(cookieparser());

app.use(express.json());
app.use(cors())
app.use('/files', express.static(path.join(__dirname, 'files')));

//Home page Route:::
app.get("/", (req, res) => {
    res.json({
        mssg: "Jai Shri Ram!!"
    });
})




//Login page Route:::
app.post("/login", async (req, res) => {
    const userPayload = req.body;
    const parsedPayload = loginVerification.safeParse(userPayload);
    if (!parsedPayload.success) {
        res.json({
            mssg: "Entered something wrong!!"
        })
        return;
    }
    else {
        const token = jwt.sign({ email: parsedPayload.data.email }, "shhhh");
        console.log(token);
        const options = {
            expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
            httpOnly: true
        }
        await User.create([{
            email: parsedPayload.data.email,
            username: parsedPayload.data.username,
            password: parsedPayload.data.password,
            token: token
        }])
        res.status(200).cookie("token", token, options).json({
            mssg: "Collection created successfully!!",
            success: true,
            token
        })
    }
})






app.post("/loginsuperuser", async (req, res) => {
    const userPayload = req.body;
    const parsedPayload = superLoginVerification.safeParse(userPayload);
    if (!parsedPayload.success) {
        res.json({
            mssg: "Entered something wrong superlogin!!"
        })
        return;
    }
    else {
        const finding = await SuperUser.find({
            email: parsedPayload.data.email
        })
        if (finding.length) {
            console.log("User already exist!!");
        }
        else {
            console.log("User Created successfull!!")
            const token = jwt.sign({ email: parsedPayload.data.email }, "shhhh");
            console.log(token);
            await SuperUser.create([{
                email: parsedPayload.data.email,
                username: parsedPayload.data.username,
                password: parsedPayload.data.password,
            }])
            res.status(200).json({
                mssg: "Collection created successfully for superlogin!!",
                token: token
            })
        }

    }
})




app.post("/addClass", async (req, res) => {
    const addClassPayload = req.body;
    const addClassParsedPayload = addClassVerification.safeParse(addClassPayload);
    console.log(addClassParsedPayload);
    if (!addClassParsedPayload.success) {
        res.json({
            mssg: "Entered something wrong addclass!!"
        })
        return;
    }
    else {

        const classId = uuidv4();
        console.log(classId);
        // Do a post req on the classTimeTable model in the db and get the timetable and send it to the classtimetable
        const classData = {
            className: addClassParsedPayload.data.className,
            accessGrant: addClassParsedPayload.data.accessGrant,
            classid: classId,
            classtimetable: null
        }
        await SuperUser.updateOne({ email: addClassParsedPayload.data.email }, { $push: { classes: classData } });
        await classTimeTableModel.create({ classid: classId, classTimeTable: [] })

        await studentEnrolledmodel.create({
            classid: classId
        })
        res.status(200).json({
            mssg: "Collection created successfully for add class!!",
            classId
        })

    }



})


app.post('/uploadtimetable', async (req, res) => {
    const title = req.body.title;
    const classid = req.body.classid;
    const timeSlot = req.body.timeslot;
    console.log(title);
    await classTimeTableModel.updateOne({ classid: classid }, { $push: { classTimeTable: { title: title, status: 0, timeSlot: timeSlot } } });
    res.json({
<<<<<<< HEAD
        mssg: "On click successfull uploadtimetable"
=======
        mssg:"On click successfull uploadtimetable"
>>>>>>> 1a5d5b5381dacc5fcd23fa3349db0f77bdc9abd8
    })
})
app.post("/enrollclass", async (req, res) => {
    const payloadclassid = req.body.classid;
    const payloademail = req.body.email;
    const temp = await classTimeTableModel.findOne({ classid: payloadclassid });
    /* console.log(temp); */
    const timetableobj = (temp.classTimeTable).map((c) => {
        /* if (c.classid == payloadclassid) {
            return c.classtimetable;
        } */
        return (
            [
<<<<<<< HEAD
                c.title, c.timeSlot, c.status
=======
                c.title,c.timeSlot,c.status
>>>>>>> 1a5d5b5381dacc5fcd23fa3349db0f77bdc9abd8
            ]
        )
    })
  

<<<<<<< HEAD

=======
>>>>>>> 1a5d5b5381dacc5fcd23fa3349db0f77bdc9abd8
    await User.updateOne({ email: payloademail }, { classTimeTable: timetableobj });

    await studentEnrolledmodel.updateOne({ classid: payloadclassid }, { $push: { studentsInThisClass: payloademail } })

<<<<<<< HEAD
    await Files.create({ title: [], email: payloademail, classid: payloadclassid });
=======
    await Files.create({title:[],email:payloademail,classid:payloadclassid});
>>>>>>> 1a5d5b5381dacc5fcd23fa3349db0f77bdc9abd8



    const scoreField = {
        email: payloademail,
        scoreOfThisStudent: 0
    }


    await studentEnrolledmodel.updateOne({ classid: payloadclassid }, { $push: { score: scoreField } });

    res.json({
        mssg: "Enrolled successfully!! time table added to a particular student database!!",

    })
})


app.post("/gettimetable", async (req, res) => {
    const email = req.body.email;
    console.log(email)
    const gotUser = await User.findOne({ email: email })

<<<<<<< HEAD

=======
    
>>>>>>> 1a5d5b5381dacc5fcd23fa3349db0f77bdc9abd8
    res.json({
        timetable: gotUser.classTimeTable
    }) 
})


app.post("/userupdatestatus", async (req, res) => {
    const buttonId = req.body.id;
    const studentToken = req.body.token;
    console.log(studentToken)
    let temp = await User.find({ token: studentToken })
    console.log(temp);
    const toBeUpdatedClassTimeTable = (temp[0].classTimeTable);
    console.log(toBeUpdatedClassTimeTable);
    const uploadedArray = toBeUpdatedClassTimeTable.map((item, index) => {
        if (index == buttonId) {
            item[2] = 1
            return item
        }
        else{
            return item
        }
    })
    
   console.log(uploadedArray)


    await User.updateOne({token:studentToken},{classTimeTable:uploadedArray})
    //   (toBeUpdatedClassTimeTable[`${buttonId}`].status) = 1;
    //  await User.updateOne({ token: studentToken }, { classTimeTable: temp[0].classTimeTable })


    //  // //Next work is in this route whenever the student want to mark anything done this must send a response to the teacher that work has been uploaded and teacher should send back the response of the number of points that is to be given to the user..

    res.json({
        mssg: "Updated!!"
    })
})

app.get('/leaderboard', async (req, res) => {
    res.json({
        mssg: "Leaderboard is pending!!"
    })
})
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './files')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now();
        cb(null, uniqueSuffix + "." + file.originalname)
    }
})

const upload = multer({ storage: storage })
app.post('/uploadfiles', upload.single('file'), async (req, res) => {
    const fileName = req.file.filename;
<<<<<<< HEAD
    /*    console.log("From the file name"+fileName) */
    const email = req.query.email;
    const response = await Files.updateOne({ email: email }, { $push: { title: fileName } })
    /* console.log(response)
    console.log(email) */
=======
    console.log("From the file name"+fileName)
    const email=req.query.email;
    const response=await Files.updateOne({email:email},{$push:{title:fileName}})
    console.log(response)
    console.log(email)
>>>>>>> 1a5d5b5381dacc5fcd23fa3349db0f77bdc9abd8
})


app.post("/getfiles", async (req, res) => {
    const email = req.body.email;
    const classesTeacherEnrolled = await SuperUser.find({ email: email });

    console.log(classesTeacherEnrolled);
    let classesTeacherEnrolledFinal = (classesTeacherEnrolled[0].classes).map((obj) => obj.className);
    console.log(classesTeacherEnrolledFinal)

    res.json({
        mssg: "Classes found",
        classes: classesTeacherEnrolledFinal
    })




})

<<<<<<< HEAD
app.post("/gotfiles", async (req, res) => {
=======
app.post("/gotfiles", async(req,res)=>{
>>>>>>> 1a5d5b5381dacc5fcd23fa3349db0f77bdc9abd8
    const filename = await Files.find()
})


app.post("/classRender", async (req, res) => {
    const email = req.body.email
    const FindSuperUser = await SuperUser.find({ email: email });
    const classes = FindSuperUser[0].classes
    const classTitle = classes.map((item, index) => {
        return item.className
    })
    console.log(classTitle)
    console.log(classes)





    res.send(classTitle)




})

app.post("/navigateTeacher", async (req, res) => {
    const className = req.body.className
    const navigateTeacher = await SuperUser.find({ "classes.className": className })
    const navigationClass = navigateTeacher[0].classes.map((item, index) => {
        if (className == item.className) {
            res.json({ classid: item.classid })
            console.log(item.classid)

        }
    })

})

app.post("/viewFile", async (req, res) => {
    const email = req.body.email;
    const response = await SuperUser.find({ email: email });
    const classesArray = response[0].classes;
    console.log(response[0].classes);
    const arrayId = classesArray.map((item, index) => {
        return item.classid;
    });

    // Using Promise.all() to await all the asynchronous operations
    const toSend = await Promise.all(arrayId.map(async (item, index) => {
        const titleArray = await Files.find({ classid: item });
        // Accessing titles of each file in titleArray
        const titles = titleArray.map(file => {
            return file.title; // Accessing title property of each file object
        });
        console.log(titles);
        return titles; // Return titles to accumulate them for sending
    }));



    res.json({ mess: "hello",arr: toSend.flat()  }); // Flatten toSend array before sending
});


app.post("/handleUrl",async(req,res)=>{
    const item = req.body.item
    console.log(item);
    res.redirect(`/${item}`)

})




app.post('/alottimetable', async (req, res) => {
    const classid = req.body.classid;
    const temp = await classTimeTableModel.find({ classid: classid });
    if (temp.length != 0) {
        const timeslot = temp[0].classTimeTable

        console.log(timeslot);

        const timeSlotArray = timeslot.map((item) => {
            return item.timeSlot
        })
        console.log(timeSlotArray);
        res.json({ timeSlot: timeSlotArray })
    }


    //alg alg entry bnakke timeslot ko check kro aur usko ui pe render krwaaa.

})

app.post("/getStudent", async (req, res) => {
    //class id should be set to a spacific button is click than we should getted backend

    const classId = req.body.classId;
    const gotStudent = await studentEnrolledmodel.find({ classid: classId });

    const gotStudentFinal = gotStudent[0].studentsInThisClass;

    res.json({
        mssg: "Done!!",
        gotStudentFinal
    })
})
connectDB()
    .then(() => {
        app.listen(3000, () => {
            console.log("Server is UP!!");
        })
    })
    .catch((e) => {
        console.log("DB connection failed!!");
    })

