
function imageToBase64(imagePath){
    const image=fs.readFileSync(imagePath)
    return image.toString('base64')
}

export default imageToBase64