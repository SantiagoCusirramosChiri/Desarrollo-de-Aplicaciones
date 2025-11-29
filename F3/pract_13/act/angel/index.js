var admin = require("firebase-admin");
var serviceAccount = require("./proyectokey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://proyecto-actividades-1e7f7-default-rtdb.firebaseio.com/"
});

var db = admin.database();
var ref = db.ref("server/data");
var usersRef = ref.child("nodejs");
usersRef.set({
  usuarios: {
    name: "paco juarez",
    age: 28,
    salary: 2304.54
  }
});
