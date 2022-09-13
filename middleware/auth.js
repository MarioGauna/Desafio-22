export default function auth(req,res,next){
    if(!isAdmin){
        res.status(404).json({"error": "Funcion Habilitada solo para Administradores"})
    } else {
        next()
    }
}