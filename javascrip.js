const imagenes1 = document.querySelectorAll('.img-galeria')
const imagenesLight = document.querySelector('.agregar-imagen')
const contendorLight = document.querySelector('.imagen-light')
const menus1 = document.querySelector('.menus')




imagenes1.forEach(imagen =>{
    imagen1.addEventListener('click', ()=>{
        aparecerimagen(imagen.getAttribute('src'))
        
    })
})


contendorLight.addEventListener('click', (e)=>{
    if(e.target !== imagenesLight){
        contendorLight.classList.toggle('show')
        imagenesLight.classList.toggle('showImage')
        menus1.style.opacity = '1'
    }

})





const aparecerimagen = (imagen)=>{
    imagenesLight.src = imagen;
    contendorLight.classList.toggle('show')
    imagenesLight.classList.toggle('showImage')
    menus1.style.opacity = '0'

}