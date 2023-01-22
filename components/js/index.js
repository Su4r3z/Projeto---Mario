const  buttonTrailer = document.querySelector('.btn-trailer');
const modal = document.querySelector('.modal');
const buttonCloseModal = document.querySelector('.close-modal');
const video = document.getElementById('video');
const linkVideo = video.src;


function modalAlter() {
    modal.classList.toggle('aberto');
}

buttonTrailer.addEventListener("click", () => {
    modalAlter()
    video.setAttribute('src', linkVideo);
});



buttonCloseModal.addEventListener("click", () => {
    modalAlter()
    video.setAttribute("src","")

});

