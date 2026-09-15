

document.addEventListener('DOMContentLoaded', function() {
  
    // Your text to be typed
    const textToType = "Bonjour ! Je m'appelle Rintarou Okabe. Je suis un scientifique originaire de l'an 2040. Ce message a été envoyé du futur. Vous avez une mission : prévenir la Troisième Guerre mondiale. Pour ce faire, vous allez vous familiariser avec les différentes théories du voyage dans le temps. Je vous recommande de les lire dans l'ordre. Personne ne sait ce que l’avenir nous réserve, c’est pourquoi son potentiel est infini. Bonne chance! El... Psy... Congroo !";
  
    // Get the element where the text will be typed
    const typedTextElement = document.getElementById('text');
  
    // Function to type the text with a typewriter effect
    function typeText() {
      let index = 0;
      const interval = setInterval(function() {
        typedTextElement.textContent += textToType[index];
        index++;
  
        // Stop typing when the entire text is displayed
        if (index === textToType.length) {
          clearInterval(interval);
        }
      }, 37); // Adjust the interval to control the typing speed
    }
    // Check if the device is in landscape mode for phones
  function isLandscape() {
    return window.matchMedia("(orientation: landscape)").matches;
  }
  
    // Function to handle the orientation change or window resize
  function handleOrientationChange() {
    // Start typing when in landscape mode
    if (isLandscape()) {
      typeText();
      // Remove the event listener to avoid multiple calls
      window.removeEventListener('resize', handleOrientationChange);
    }
  }

  // Call the function to start typing when in landscape mode
  if (isLandscape()) {
    setTimeout(typeText, 2500);
  } else {
    // Listen for window resize event
    window.addEventListener('resize', handleOrientationChange);
  }
});


/*animation phone users*/

document.addEventListener('DOMContentLoaded', function() {
const landscapeMessage = document.getElementById('landscape-message');

    function checkOrientation() {
        const isPortrait = window.innerHeight > window.innerWidth;

        if (isPortrait) {
            landscapeMessage.style.display = 'block';
        } else {
            landscapeMessage.style.display = 'none';
        }
    }

    // Check orientation initially
    checkOrientation();

    // Listen for changes in window dimensions
    window.addEventListener('resize', checkOrientation);
});
