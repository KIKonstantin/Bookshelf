const navMenu = document.getElementById('menu-overlay');
const profMenu = document.getElementById('profile');
const menuButton = document.getElementsByClassName('menu-button')[0];
console.log(menuButton);

function menuButtonClick(x) {
    if (x.classList.contains('avatar')) {
        profMenu.classList.toggle('profOn');
    } else {
        navMenu.classList.toggle('on');
    }
    if (!menuButton.classList.contains('change')) {
        menuButton.classList.toggle("change");
    } else {
        menuButton.classList.remove('change');
        navMenu.classList.remove('on');
        profMenu.classList.remove('profOn');
    }
}