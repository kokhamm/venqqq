document.addEventListener('DOMContentLoaded', function(){

    // Scroll to anchor
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            if(this.classList.contains('signup')){
                this.classList.add('signup__clicked');
                setTimeout(()=>{
                    this.classList.remove('signup__clicked');
                }, 1000);
            };
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Open mobile burger menu
    document.querySelector('.toggle').addEventListener('click', function(event) {
        event.stopPropagation();
    
        var headerMobile = document.querySelector('.header__mobile');
        if (headerMobile.classList.contains('on')) {
            headerMobile.classList.remove('on');
        } else {
            headerMobile.classList.add('on');
        }
    
        var body = document.querySelector('body');
        if (body.classList.contains('stopper')) {
            body.classList.remove('stopper');
        } else {
            body.classList.add('stopper');
        }
    });

    // scroll to anchor when click mobile burger menu anchor link
    var anchorLinks = document.querySelectorAll('.anchor__link-mob');
    anchorLinks.forEach(function(anchorLink) {
        anchorLink.addEventListener('click', function() {
            var headerMobile = document.querySelector('.header__mobile');
            var body = document.querySelector('body');
            var checkbox = document.querySelector('#checkbox');

            if (headerMobile) {
                headerMobile.classList.remove('on');
            }

            if (body) {
                body.classList.remove('stopper');
            }

            if (checkbox) {
                checkbox.checked = false;
            }
        });
    });

    // Animation for header sign up button on click
    let headerSignup = document.querySelectorAll('.signup, .sign');
    if(headerSignup){
        headerSignup.forEach(function(signUp){
            signUp.addEventListener('click', function(e){
                e.preventDefault();
                let href = this.getAttribute('href');
                if(this.classList.contains('signup')){
                    this.classList.add('signup__clicked');
                    setTimeout(()=>{
                        window.location.href = href;
                    }, 600);
                    setTimeout(()=>{
                        this.classList.remove('signup__clicked');
                    }, 1000);
                } else if(this.classList.contains('sign')){
                    this.classList.add('sign__clicked');
                    setTimeout(()=>{
                        window.location.href = href;
                    }, 600);
                    setTimeout(()=>{
                        this.classList.remove('sign__clicked');
                    }, 1000);
                }
            });
        });
        
    };

    // Animation for header links
    let headerLinks = document.querySelectorAll('.header__link');
    let headerMenu = document.querySelector('.header__links');
    let headerBefore = document.querySelector('.header__before');

    if(headerLinks && headerMenu && headerBefore){
        headerMenu.addEventListener('mouseenter', function(){
            headerBefore.classList.add('li-on');
            headerLinks.forEach(function(link){
                link.addEventListener('mouseenter', function(){
                    headerBefore.style.width = this.offsetWidth + 20 + 'px';
                    headerBefore.style.left = this.offsetLeft - 10 + 'px';
                });
            });
        });
        headerMenu.addEventListener('mouseleave', function(){
            headerBefore.classList.remove('li-on');
        });
    }

    // sliders
    var swiper1 = new Swiper('.mySwiperOne',{
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        spaceBetween: 32,
        slidesPerView: 1,
        breakpoints: {
            1100:{
                slidesPerView: 3,
                slidesPerGroup: 3,
                mousewheel:{
                    forceToAxis: true,
                },
            },
        },
    });
    var swiper2 = new Swiper('.mySwiperTwo', {
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        spaceBetween: 32,
        slidesPerView: 1,
        autoHeight: true,
    });
});