const MALE = 0;
const FEMALE = 1;

var pageState = {
  currentPage: 'gender-page',
  gender: null
}

/*
* Click event for the male button on the gender page
*/
function maleClick() {
  openAgePage();
  pageState.gender = MALE;

  let condition1 = document.getElementById('condition-1');
  condition1.setAttribute('onclick', 'maleCondition1Click()');
  condition1.innerHTML = '<p>I have low levels of body fat, I can see my abs, and I want to build more muscle to look fantastic!</p>';

  let condition2 = document.getElementById('condition-2');
  condition2.setAttribute('onclick', 'maleCondition2Click()');
  condition2.innerHTML = "<p>I'm 'skinny fat' - I look skinny and definitely need more muscle but I still have fat covering my abs.</p>";

  let condition3 = document.getElementById('condition-3');
  condition3.setAttribute('onclick', 'maleConditions3and4Click()');
  condition3.innerHTML = "<p>I have a good level of muscle size, but I need to drop fat to reveal muslce definition amd six pack abs.</p>";

  let condition4 = document.getElementById('condition-4');
  condition4.setAttribute('onclick', 'maleConditions3and4Click()');
  condition4.innerHTML = "<p>I have no clue how much muscle I have with all this fat covering it, I need to lose a bunch of fat!</p>";
  condition4.style.display = 'default';

  genderizeButtons();
}

/*
* Click event for the female button on the gender page
*/
function femaleClick() {
  openAgePage();
  pageState.gender = FEMALE;

  let condition1 = document.getElementById('condition-1');
  condition1.setAttribute('onclick', 'some_function');
  condition1.innerHTML = '<p>I have a <b>slim body type<b> and want to gain lean muscle in the right areas to look my best.</p>';

  let condition2 = document.getElementById('condition-2');
  condition2.setAttribute('onclick', 'some_function');
  condition2.innerHTML = "<p>I have <b>stubborn body fat</b> - I want to slim down and increase my muscle tone.</p>";

  let condition3 = document.getElementById('condition-3');
  condition3.setAttribute('onclick', 'some_function');
  condition3.innerHTML = "<p>I have <b>20 or more pounds of fat</b> to lose - I want to drop all this fat and look my best.</p>";

  document.getElementById('condition-4').style.display = 'none';

  genderizeButtons();
}

function maleCondition1Click() {
  let goal1 = document.getElementById('goal-1');
  goal1.setAttribute('onClick', 'some_function');
  goal1.innerHTML = "<p>Do you want to focus on developing dense muscle size and lots of strength for the <b>GREEK GOD</b> Physique?</p><p>Think: hard, compact muscles with a good level of size & balanced proportions like Brad Pitt in Troy or Stephen Amell in Arrow.</p>"

  let goal2 = document.getElementById('goal-2');
  goal2.setAttribute('onClick', 'some_function');
  goal2.innerHTML = "<p>Do you want to focus on maximizing lean muscle growth for the <b>SUPERHERO PHYSIQUE</b>?</p><p>Think: big, full, well-developed muscles with great proportions like Henry Cavil in Superman or Chris Hemsworth in Thor.</p>"

  openGoalPage();
}

function maleCondition2Click() {
  let goal1 = document.getElementById('goal-1');
  goal1.setAttribute('onClick', 'some_function');
  goal1.innerHTML = "<p>My main goal is <b>DEFINITION</b>.</p><p>I want to focus mainly on fat loss to reveal great definition while I slowly build dense muscle size.</p>"

  let goal2 = document.getElementById('goal-2');
  goal2.setAttribute('onClick', 'some_function');
  goal2.innerHTML = "<p>My main goal is <b>MUSCLE GROWTH</b>.</p><p>I want to build muscle size while slowly dropping the fat covering my abs.</p>"

  openGoalPage();
}

function maleConditions3and4Click() {
  let goal1 = document.getElementById('goal-1');
  goal1.setAttribute('onClick', 'some_function');
  goal1.innerHTML = "<p>My main goal is to <b>DROP FAT</b> slowly.</p><p>About 1 pound per week while focusing on increasing muscle density and strength for a chiseled physique.</p>"

  let goal2 = document.getElementById('goal-2');
  goal2.setAttribute('onClick', 'some_function');
  goal2.innerHTML = "<p>My main goal is to do an <b>AGGRESSIVE CUT</b> and lose fat faster.</p><p>I'm not worried about getting more strength and size. I just want to get lean fast.</p>"

  openGoalPage();
}
/*
*
*/
function ageButtonClick() {
  openConditionPage();
}

function genderizeButtons() {
  let ageButtons = document.getElementsByClassName('age-buttons');
  for (i = 0; i < ageButtons.length; i++) {
    if (pageState.gender === MALE) {
      ageButtons[i].classList.remove('female-color');
      ageButtons[i].classList.add('male-color');
    } else {
      ageButtons[i].classList.remove('male-color');
      ageButtons[i].classList.add('female-color');
    }
  }

  let conditionButtons = document.getElementsByClassName('condition-buttons');
  for (i = 0; i < conditionButtons.length; i++) {
    if (pageState.gender === MALE) {
      conditionButtons[i].classList.remove('female-color');
      conditionButtons[i].classList.add('male-color');
    } else {
      conditionButtons[i].classList.remove('male-color');
      conditionButtons[i].classList.add('female-color');
    }
  }

  let goalButtons = document.getElementsByClassName('goal-buttons');
  for (i = 0; i < goalButtons.length; i++) {
    if (pageState.gender === MALE) {
      goalButtons[i].classList.remove('female-color');
      goalButtons[i].classList.add('male-color');
    } else {
      goalButtons[i].classList.remove('male-color');
      goalButtons[i].classList.add('female-color');
    }
  }
}

function openGenderPage() {
  deActivateAllTabs();
  activateNavTab(document.getElementById('gender-tab'));

  document.getElementById(pageState.currentPage).style.display = 'none';
  document.getElementById('gender-page').style.display = 'block';

  pageState.currentPage = 'gender-page';
}

function openAgePage() {
  deActivateAllTabs();
  activateNavTab(document.getElementById('gender-tab'));
  activateNavTab(document.getElementById('age-tab'));

  document.getElementById(pageState.currentPage).style.display = 'none';
  document.getElementById('age-page').style.display = 'block';

  pageState.currentPage = 'age-page';
}

function openConditionPage() {
  deActivateAllTabs();
  activateNavTab(document.getElementById('gender-tab'));
  activateNavTab(document.getElementById('age-tab'));
  activateNavTab(document.getElementById('condition-tab'));

  document.getElementById(pageState.currentPage).style.display = 'none';
  document.getElementById('condition-page').style.display = 'block';

  pageState.currentPage = 'condition-page';
}

function openGoalPage() {
  deActivateAllTabs();
  activateNavTab(document.getElementById('gender-tab'));
  activateNavTab(document.getElementById('age-tab'));
  activateNavTab(document.getElementById('condition-tab'));
  activateNavTab(document.getElementById('goals-tab'));

  document.getElementById(pageState.currentPage).style.display = 'none';
  document.getElementById('goal-page').style.display = 'block';

  pageState.currentPage = 'goal-page';
}

/*
* navbarTab - the html element representing the nav bar tab
* that needs to be activated
*/
var activateNavTab = function(navBarTab) {
  if (navBarTab.classList.contains('off-color')) {
    navBarTab.classList.remove('off-color');
  }

  navBarTab.classList.add('active');
}

/*
* navbarTab - the html element representing the nav bar tab
* that needs to be deactivated
*/
var deActivateNavTab = function(navBarTab) {
  if (navBarTab === document.getElementById('age-tab') || navBarTab === document.getElementById('goal-tab')) {
    navBarTab.classList.add('off-color');
  }
  navBarTab.classList.remove('active');
  navBarTab.style.cursor = 'default';
}

function deActivateAllTabs() {
  deActivateNavTab(document.getElementById('gender-tab'));
  deActivateNavTab(document.getElementById('age-tab'));
  deActivateNavTab(document.getElementById('condition-tab'));
  deActivateNavTab(document.getElementById('goals-tab'));
}
