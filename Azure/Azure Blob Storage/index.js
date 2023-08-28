const cloudinary = require("cloudinary").v2;
require('dotenv').config()

//Using cloudinary -> Need to transition to Azure Blob storage

cloudinary.config({ 
    cloud_name: process.env.CLOUD_NAME, 
    api_key: process.env.CLOUD_API_KEY, 
    api_secret: process.env.CLOUD_SECRET,
    secure: true
  });

module.exports = cloudinary;