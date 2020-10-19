//TODO list:
// -Make menu persistent between pages. Use session storage? Need to figure out how to cast the 'dropdown-btn' names to strings to store.


/* Loop for dropdown buttons */
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;



for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
	
	
    var dropdownContent = this.nextElementSibling;

//	dropdownContent.style.display = sessionStorage.getItem("MenuClick" + i);

    if (dropdownContent.style.display === "block") {
    dropdownContent.style.display = "none";
	sessionStorage.setItem("MenuClick" + i, "none");
	}

    else {
    dropdownContent.style.display = "block";
	sessionStorage.setItem("MenuClick" + i, "block");
    }

  });
}
