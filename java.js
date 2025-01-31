//.......................add-item-in-cart....................................
    // Select all the "Add to Cart" buttons
    const addToCartButtons = document.querySelectorAll('.images a');
    
    //Select the cart icon in the top navigation bar
    const cartIcon= document.querySelector('.top-navbar .icons a i');
    
    let cartCount = 0;
    
    addToCartButtons.forEach(button => {
        button.addEventListener('click',()=>{
        cartCount++;
        cartIcon.textContent = cartCount;
        });
    });
    
     //........................change-items................//
     const footerImages = document.querySelectorAll('.footer .images img');
    
     const foodbarImages = document.querySelector('.foodbar img');
    
     footerImages.forEach(image => {
        image.addEventListener('click', () =>{
            // Update the source of the foodbar image
            foodbarImages.src = image.src;
        });
     });
    
     //..................remove-animation............
     const itemImages = document.querySelectorAll('.item-img');
    
     itemImages.forEach(img => {
        img.addEventListener('click',
            () => {
                // Remove the 'animated' class from all images
          itemImages.forEach(img => img.classList.remove('animated'));
    // Add the 'animated' class to the clicked image
          img.classList.add('animated');
            });
     });
    
    // .......................toggle-light-dark-mode...........
    
     const themeSwitch = document.getElementById('theme-switch');
     const body = document.body;
    
     themeSwitch.addEventListener('change', function ()  {
        body.classList.toggle('dark-mode');
     });