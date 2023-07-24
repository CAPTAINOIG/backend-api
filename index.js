const express = require ('express')
const app = express()
const bodyParser = require ('body-parser')
app.use(bodyParser.urlencoded({extended:true})) 
const cors = require ('cors')
app.use(cors())
app.use(express.json())



let studentDetails = [
    {
        Id: 1,
        Firstname: "Abdullahi",
        Lastname: "Samsudeen",
        Othername: "Oluwasegun",
        Email: "oluwasegun@gmail.com",
        PhoneNumber: +2348076467387,
        School: "University of Oxford",
        Age: "25",
        Password: 366500,
        Color: "Fair",
        Country: "England",
        City: "London",
    },
      {
        Id: 2,
        Firstname: "Adediran",
        Lastname:"Tunmise",
         Othername: "Aduke",
        Email: "aduke@gmail.com",
        PhoneNumber: +2349065875436,
        School: "Ottwa College",
        Age: "25",
         Password: 458696,
        Color: "Fair",
        Country: "Canada",
        City: "Ottawa"
    },
      {
        Id: 3,
        Firstname: "Ajenifuja",
        Lastname:"sodiq",
         Othername: "sodeeqfeelz",
        Email: "sodeeqfeelz@gmail.com",
        PhoneNumber: +2348077643217,
        School: "Kwara State Polytechnic",
        Age: "23",
        Password: 123,
        Color: "Fair",
        Country: "Nigeria",
        City: "Ogbomoso"
    },
      {
        Id: 4,
        Firstname: "Ademola",
        Lastname:"Oyindamola",
         Othername: "Ajoke",
        Email: "ajoke@gmail.com",
        PhoneNumber: +2348065478943,
        School: "SQI College of ICT",
        Age: "26",
        Password: 505050,
        Color: "Chocolate",
        Country: "Nigeria",
        City: "Osun"
    },
      {
        Id: 5,
        Firstname: "Ademola",
        Lastname:"Adegoke",
         Othername: "segun",
         PhoneNumber: +2348072785387,
        Email: "adegoke@gmail.com",
        School: "Kwara Polytechnic",
        Age: "28",
        Password: 668875,
        Color: "Fair",
        Country: "Nigeria",
        City: "Kwara"
    },
      {
        Id: 6,
        Firstname: "Ifeanyi",
        Lastname:"Ubah",
         Othername: "Oluwasegun",
        Email: "ubah@gmail.com",
        PhoneNumber: +2348076398747,
        School: "University of Nigeria, Nsukka",
        Age: "26",
        Password: 123273,
        Color: "Dark",
        Country: "Nigeria",
        City: "Gwagalada"
    },
      {
        Id: 7,
        Firstname: "Ige",
        Lastname:"Adeoye",
         Othername: "Titus",
        Email: "titus@gmail.com",
        PhoneNumber: +234807982287,
        School: "Al-Hikam University",
        Age: "24",
        Password: 165023,
        Color: "Dark",
        Country: "Country",
        City: "Osogbo"
    },
      {
        Id: 8,
        Firstname: "Adeoye",
        Lastname:"Ife",
         Othername: "Oluwasegun",
        Email: "ife@gmail.com",
        PhoneNumber: +2348076467387,
        School: "SQI",
        Age: "25",
        Password: 100023,
        Color: "Ife",
        Country: "Nigeria",
        City: "Edo"
    },
      {
        Id: 9,
        Firstname: "Lara",
        Lastname:"Zamani",
         Othername: "Ife",
        Email: "ife@gmail.com",
        PhoneNumber: +2348986467387,
        School: "SQI",
        Age: "23",
        Password: 110923,
        Color: "Fair",
        Country: "Nigeria",
        City: "Kwara"
    },
      {
        Id: 10,
        Firstname: "Bisi",
        Lastname:"Deoye",
         Othername: "Oluwaseun",
        Email: "olu@mail.com",
        PhoneNumber: +2348039767387,
        School: "SQI",
        Age: "23",
        Password: 980123,
        Color: "Dark",
        Country: "Nigeria",
        City: "Lagos"
    },
    {
      Id: 11,
      Firstname: "Abdullahi",
      Lastname: "Samsudeen",
      Othername: "Oluwasegun",
      Email: "oluwasegun@gmail.com",
      PhoneNumber: +2348076467387,
      School: "University of Oxford",
      Age: "25",
      Password: 366500,
      Color: "Fair",
      Country: "England",
      City: "London",
  },
    {
      Id: 12,
      Firstname: "Adediran",
      Lastname:"Tunmise",
       Othername: "Aduke",
      Email: "aduke@gmail.com",
      PhoneNumber: +2349065875436,
      School: "Ottwa College",
      Age: "25",
       Password: 458696,
      Color: "Fair",
      Country: "Canada",
      City: "Ottawa"
  },
    {
      Id: 13,
      Firstname: "Ajenifuja",
      Lastname:"sodiq",
       Othername: "sodeeqfeelz",
      Email: "sodeeqfeelz@gmail.com",
      PhoneNumber: +2348077643217,
      School: "Kwara State Polytechnic",
      Age: "23",
      Password: 123,
      Color: "Fair",
      Country: "Nigeria",
      City: "Ogbomoso"
  },
    {
      Id: 14,
      Firstname: "Ademola",
      Lastname:"Oyindamola",
       Othername: "Ajoke",
      Email: "ajoke@gmail.com",
      PhoneNumber: +2348065478943,
      School: "SQI College of ICT",
      Age: "26",
      Password: 505050,
      Color: "Chocolate",
      Country: "Nigeria",
      City: "Osun"
  },
    {
      Id: 15,
      Firstname: "Ademola",
      Lastname:"Adegoke",
       Othername: "segun",
       PhoneNumber: +2348072785387,
      Email: "adegoke@gmail.com",
      School: "Kwara Polytechnic",
      Age: "28",
      Password: 668875,
      Color: "Fair",
      Country: "Nigeria",
      City: "Kwara"
  },
    {
      Id: 16,
      Firstname: "Ifeanyi",
      Lastname:"Ubah",
       Othername: "Oluwasegun",
      Email: "ubah@gmail.com",
      PhoneNumber: +2348076398747,
      School: "University of Nigeria, Nsukka",
      Age: "26",
      Password: 123273,
      Color: "Dark",
      Country: "Nigeria",
      City: "Gwagalada"
  },
    {
      Id: 17,
      Firstname: "Ige",
      Lastname:"Adeoye",
       Othername: "Titus",
      Email: "titus@gmail.com",
      PhoneNumber: +234807982287,
      School: "Al-Hikam University",
      Age: "24",
      Password: 165023,
      Color: "Dark",
      Country: "Country",
      City: "Osogbo"
  },
    {
      Id: 18,
      Firstname: "Adeoye",
      Lastname:"Ife",
       Othername: "Oluwasegun",
      Email: "ife@gmail.com",
      PhoneNumber: +2348076467387,
      School: "SQI",
      Age: "25",
      Password: 100023,
      Color: "Ife",
      Country: "Nigeria",
      City: "Edo"
  },
    {
      Id: 19,
      Firstname: "Lara",
      Lastname:"Zamani",
       Othername: "Ife",
      Email: "ife@gmail.com",
      PhoneNumber: +2348986467387,
      School: "SQI",
      Age: "23",
      Password: 110923,
      Color: "Fair",
      Country: "Nigeria",
      City: "Kwara"
  },
    {
      Id: 20,
      Firstname: "Bisi",
      Lastname:"Deoye",
       Othername: "Oluwaseun",
      Email: "olu@mail.com",
      PhoneNumber: +2348039767387,
      School: "SQI",
      Age: "23",
      Password: 980123,
      Color: "Dark",
      Country: "Nigeria",
      City: "Lagos"
  },
]

app.get("/student", (req, res)=>{
    res.send(studentDetails)
    console.log(studentDetails);
})



app.listen("2020", ()=>{
    console.log("connected");
})