const multer = require('multer');
const path = require('path')

module.exports = {
    storage: multer.diskStorage({
        destination: path.resolve(__dirname,'..','..','uploads'),  //onde será salva a imagem
        filename: (req,file,cb)=>{
            const ext = path.extname(file.originalname)
           
            const name = path.basename(file.originalname, ext)
            const nameWithougSpace = name.replace(" ",'_')
            
            cb(null,`${nameWithougSpace}-${Date.now()}${ext}`)
        } //como o nome do arquivo será salvo
    })
}