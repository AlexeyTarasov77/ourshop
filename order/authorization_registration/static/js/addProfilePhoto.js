const defoltImage = document.querySelector('.profile')
const imageInput = document.getElementById('image-input')

defoltImage.addEventListener('click', () => {
    imageInput.click()
})

imageInput.addEventListener('change', () => {
    const selectedFile = imageInput.files[0];
    console.log(selectedFile)
    if(selectedFile) {
        defoltImage.src = URL.createObjectURL(selectedFile)
    }
})



