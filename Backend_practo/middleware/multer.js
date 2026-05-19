import multer from 'multer'

const storage = multer.diskStorage({
    // where file is stored 
 
    // file is stored with original name
    filename: function(req, file, callback){
        console.log(req.file)
console.log(req.body)
        
        callback(null, file.originalname)
    }
})

const upload = multer({ storage });

export default upload;