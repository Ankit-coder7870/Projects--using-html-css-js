let textQr = document.querySelector("#textQr");
let imgQr = document.querySelector("#imgQr");
let imgbox = document.querySelector(".imgbox");

function generateQr() {
    if (textQr.value.length > 0) {

        imgQr.src = " https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + textQr.value;
        imgbox.classList.add("show-img");
    }
    else {
        textQr.classList.add('error');
        setTimeout(()=>{
          textQr.classList.remove('error')
        },1000);
    }
}