var canvas = new fabric.Canvas("myCanvas");
var x = document.getElementById("myAudio");
function new_image() {
    fabric.image.fromURL("BirthdayImage.jpg", function (Img) {
        blockImageObject = Img;
        blockImageObject.scaleToHeight(510); blockImageObject.scaleToWidth(700);
        blockImageObject.set({ top: 0, left: 0 })
        canvas.add(blockImageObject)
    })
}
function playSound() {
    x.play();
}
