try{
const user = JSON.parse('{"name":Luis, "edad":25}');
} catch {
    console.log("Hay un error convirtiendo a json");
}
console.log("final del sistema");

try{
    console.log("intentando abrir archivo");
    throw new Error("archivo no encontrado");
    } catch (error){
        console.log("error: ",error.message);
    }
    finally{
    console.log("termino el proceso de abrir el archivo");
    }

try {
    console.log("intentando abrir archivo");
    throw new Error("Archivo no encontrado")
} catch (error) {
    console.log("Error: ", error.message);
} finally {
    console.log("Termino el proceso de abrir archivo");
}