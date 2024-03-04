const videoElement = document.getElementById('video');
const button = document.getElementById('button');

async function selectMediaStream(){
    try {
        const mainStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mainStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch (error) {
        console.log(error)        
    }
}
button.addEventListener('click',async () => {
    // button diable
    button.disabled = true;
    // start PictureInPicture
    await videoElement.requestPictureInPicture();
    // reset button
    button.disabled = false;
});
selectMediaStream()