const multer = require('multer');

const upload = multer({
    dest: 'public/imageProduct/'
});



exports.uploadImage2 = upload.single('img');

exports.createImage = async (req, res, next) => {

        console.log("data file ", req.file);
       
        try {            
            
            res.json("esta aqui");
    
        } catch (error) {
            next(error);
            
        }
    
};
   




//module.exports = createImage, uploadImage2;




