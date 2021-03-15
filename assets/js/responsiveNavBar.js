(function(){
    function mobileMenuToggle() {
        let mobileMenu = document.getElementById("myLinks");
        if (mobileMenu.style.display === "flex") {
            mobileMenu.style.display = "none";
        } else {
            mobileMenu.style.display = "flex";
        }
    }
    let toggleBtn = getById('toggler');
    toggleBtn.addEventListener('click', (ev) => {
        ev.preventDefault();
        mobileMenuToggle();
    });
    document.querySelectorAll('#myLinks a').forEach(a => a.addEventListener('click', mobileMenuToggle));
})();


