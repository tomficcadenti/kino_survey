
/*
* Click event for the male button on the gender page
*/
function maleClick() {
  genderToAgePageChange();
  //put tagging functions here
}

/*
* Click event for the female button on the gender page
*/
function femaleClick() {
  genderToAgePageChange();
  //put tagging functions here
}

/*
* Controls page changes when the user is moving from the gender
* section to the age section
*/
function genderToAgePageChange() {
  //hide gender page
  document.getElementById('gender-page').style.display = "none";

  //show age page
  document.getElementById('age-page').style.display = "block";

  //update nav bar
  document.getElementById("age-tab").classList.remove('off-color');
  document.getElementById("age-tab").classList.add('active');
  document.getElementById("gender-tab").style.cursor = "pointer";
}

/*
* Controls page changes when the tries to return to the gender
* section from another section
*/
function genderNavBarClick() {
  var genderPage = document.getElementById('gender-page');

  if (genderPage.style.display === "none") {
    //update pages -- TODO: set all future tabs to none
    document.getElementById('age-page').style.display = "none";
    document.getElementById('gender-page').style.display = "block";

    //update navbar -- TODO: make changes to future tabs
    document.getElementById("age-tab").classList.remove('active');
    document.getElementById("age-tab").classList.add('off-color');
    document.getElementById("gender-tab").style.cursor = "default";
  }
}
