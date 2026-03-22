document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.querySelector('.menu_btn');
    const menuList = document.getElementById('menu_list');
    const menuToggle = document.getElementById('menu_toggle');
    
    menuBtn.addEventListener('click', function() {
        // Toggle the menu
        menuList.classList.toggle('show');
        
        // Toggle the icon
        const icon = this.querySelector('i');
        if (menuList.classList.contains('show')) {
            icon.classList.replace('fa-bars', 'fa-times');
            menuToggle.checked = true;
        } else {
            icon.classList.replace('fa-times', 'fa-bars');
            menuToggle.checked = false;
        }
    });
    
    // Close menu when clicking on links (mobile only)
    const menuLinks = menuList.querySelectorAll('a');
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 1024) {
                menuList.classList.remove('show');
                menuBtn.querySelector('i').classList.replace('fa-times', 'fa-bars');
                menuToggle.checked = false;
            }
        });
    });
});