var video = document.getElementById("video");
function darplay(){
    let img = document.getElementById('imagemIframe')
    img.style = "display:none;"
    let vid = document.getElementById('video')
    vid.style = "display:block;"
    vid.setAttribute('autoplay')
}