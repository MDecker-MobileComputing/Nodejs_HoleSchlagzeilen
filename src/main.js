import axios from "axios";

console.log();

const url = "https://api.el-decker.de/schlagzeilen.php";

try {

    const konfigObjekt = {};

    const antwort = await axios.get( url, konfigObjekt );


} catch ( fehler ) { // 4xx und 5xx als Response-Code

    console.log( `Fehler bei HTTP-Request": `, fehler.message, fehler.response.data );
}

console.log();
