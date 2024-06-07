// Importa las funciones que necesitas del SDK de Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// Configuración de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyD6ReeBQEpiXY-UACEPeFa1-byPosv1Qhc",
    authDomain: "datacloud-e8cc6.firebaseapp.com",
    projectId: "datacloud-e8cc6",
    storageBucket: "datacloud-e8cc6.appspot.com",
    messagingSenderId: "189691709104",
    appId: "1:189691709104:web:47676c840609cbd6b01d75",
    measurementId: "G-9G4PLRZX9W"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

document.getElementById('student-form').addEventListener('submit', async function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const boleta = document.getElementById('boleta').value;
    const edad = document.getElementById('edad').value;
    const semestre = document.getElementById('semestre').value;
    const carrera = document.getElementById('carrera').value;

    try {
        await addDoc(collection(db, "students"), {
            name: name,
            boleta: boleta,
            edad: edad,
            semestre: semestre,
            carrera: carrera
        });
        document.getElementById('status').innerText = "Datos guardados correctamente";
    } catch (error) {
        console.error("Error al guardar los datos: ", error);
    }
});
