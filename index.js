
// This is a JavaScript function named toggleSnow.
// It's responsible for toggling the visibility of elements with the class "snowWrapper."
function toggleSnow() {
    // Get all elements with the class "snowWrapper" and store them in the variable 'divs.'
    var divs = document.getElementsByClassName('snowWrapper');

    // Loop through each element with the class "snowWrapper."
    for (var i = 0; i < divs.length; i++) {
        // Check if the current element's display property is NOT 'none'.
        if (divs[i].style.display !== 'none') {
            // If it's NOT 'none', set the display property to 'none' (hide the element).
            divs[i].style.display = 'none';
        } else {
            // If it IS 'none', set the display property to 'block' (show the element).
            divs[i].style.display = 'block';
        }
    }
}

// Get a reference to the HTML element with the ID "toggleButton" and store it in the 'button' variable.
var button = document.getElementById('toggleButton');

// Assign a function to run when the "onclick" event of the 'button' element is triggered.
// In this case, we are assigning the 'toggleSnow' function.
button.onclick = toggleSnow;

