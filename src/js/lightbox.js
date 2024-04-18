// create an element of the type div
const lightbox = document.createElement('div');
// make this to select element inside of class
lightbox.id = "lightbox"
// append to end of body
document.body.appendChild(lightbox);
// if apply styles to it we can see how it will look like
// need to select all of our images from all img tag
const images = document.querySelectorAll('img');
// loop though images, click event listners
images.forEach(image => {
    image.addEventListener('click', e => {
        lightbox.classList.add("active");
        // need to add image to lightbox and create a new element
        const img = document.createElement('img');
        // new image is the same as our current image
        img.src = image.src;
        // fixing when multiple images show up in
        // when it has a child we want to remove the child
        // loop though and remove all the child elements and at the end add our new image 
        while (lightbox.firstChild){
            lightbox.removeChild(lightbox.firstChild);
        // append
    }
        lightbox.appendChild(img);
    })
});
// to close the images
lightbox.addEventListener('click', e =>{
    // back image check for what we click on
    // check if it not equal to current target what we added the event listner, close the bock on the black area
    // if (e.target !== e.currentTarget) return
    // need to remove the active
    lightbox.classList.remove('active');
});
// problem with both images shown never since we never remove anything from lightbox
// if we click on an image it closes it, since we are not checking if we click on the black section
