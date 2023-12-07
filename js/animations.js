document.addEventListener('DOMContentLoaded', function(){
    gsap.registerPlugin(ScrollTrigger);

    gsap.from('.header',{
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: "power1.out",
    });
    gsap.from('.hero',{
        opacity: 0,
        duration: 1,
    });
    gsap.to(".hero__context",{
        opacity: 1,
        ease: "power1.out",
        delay: 0.5,
    });
    document.querySelectorAll('.faq__item').forEach(item => {
        item.addEventListener('click', function() {
            let box = this.querySelector('.faq__box');
            let shelf = this.querySelector('.faq__shelf');
            let plus = this.querySelector('.faq__plus');
            
            if (!box.classList.contains('active')) {
                // Анімація відкриття
                gsap.fromTo(box, { height: 0, opacity: 0 }, { height: 'auto', opacity: 1, duration: 0.4 });
                gsap.to(shelf,{
                    'padding-bottom': '3.2rem',
                    duration: 0.4
                });
                box.classList.add('active');
                plus.classList.add('turn');
            } else {
                // Анімація закриття
                gsap.to(box, { height: 0, opacity: 0, duration: 0.4 });
                gsap.to(shelf,{
                    'padding-bottom': '0',
                    duration: 0.4
                });
                box.classList.remove('active');
                plus.classList.remove('turn');
            }
        });
    });
    gsap.from('.benefits__item-subtext',{
        opacity: 0,
        stagger: 0.2,
        scrollTrigger: {
            trigger: '.benefits__item-subtext',
            start: 'top 50%',
            end: 'top 0%',
            scrub: 2,
        },
    });
    gsap.from('.benefits__ani',{
        opacity: 0,
        y: 50,
        stagger: 0.2,
        scrollTrigger: {
            trigger: '.benefits__ani',
            start: 'top 80%',
        },
    });
    gsap.from('.benefits__item-img', {
        x: -200,
        opacity: 0,
        stagger: 0.3,
        rotation: -180,
        scrollTrigger: {
            trigger: '.benefits__item-img',
            start: 'top 50%',
            end: 'top 0%',
            scrub: 2,
            pin: '.benefits',
        }
    });
    // Закріплення ('pin') секції '.setup'
    ScrollTrigger.create({
        trigger: '.setup',
        start: '20% top',
        end: '80%',
        scrub: 3, // Збільшено час "scrub"
        pin: true,
    });
    
    gsap.utils.toArray('.setup__item').forEach((item, index, array) => {
        ScrollTrigger.create({
            trigger: item,
            start: '30% center',
            end: () => `+=${item.offsetHeight * 2}`, // Збільшено відстань між start і end
            onEnter: () => updateClasses(index),
            onEnterBack: () => updateClasses(index),
            // markers: true,
        });
    });
    function updateClasses(activeIndex) {
        gsap.utils.toArray('.setup__item').forEach((item, index) => {
            item.classList.toggle('setup__item-active', index === activeIndex);
        });
    }
    gsap.from('.cases__item',{
        opacity: 0,
        stagger: 0.3,
        duration: 1,
        scrollTrigger: {
            trigger: '.cases__item',
            start: 'top 60%',
        }
    });
    gsap.from('.nums__col',{
        height:0,
        stagger: 0.2,
        duration: 2,
        scrollTrigger: {
            trigger: '.nums__col',
            start: 'top 100%',
        }
    });
    gsap.from('.contact__item',{
        opacity:0,
        x:-150,
        stagger: 0.3,
        duration: 0.7,
        scrollTrigger: {
            trigger: '.contact__item',
            start: 'top 60%',
        }
    });
    gsap.from('.green-gradi-item',{
        y: 100,
        stagger: 0.06,
        delay: 0.3,
        duration: 0.6,
        ease: "power1.inOut",
        
    });
    gsap.from('.cta__ani',{
        opacity:0,
        y:150,
        stagger: 0.3,
        duration: 0.7,
        scrollTrigger: {
            trigger: '.cta__ani',
            start: 'top 60%',
        }
    });
    gsap.from('.cases__ani',{
        opacity:0,
        y:150,
        stagger: 0.3,
        duration: 0.7,
        scrollTrigger: {
            trigger: '.cases__ani',
            start: 'top 70%',
        }
    });
    gsap.from('.testi__ani',{
        opacity:0,
        stagger: 0.3,
        duration: 0.7,
        scrollTrigger: {
            trigger: '.testi__ani',
            start: 'top 70%',
        }
    });
    gsap.from('.pac__ani',{
        opacity:0,
        stagger: 0.3,
        duration: 0.7,
        scrollTrigger: {
            trigger: '.pac__ani',
            start: 'top 70%',
        }
    });
    gsap.from('.pac__ite',{
        opacity:0,
        y:250,
        stagger: 0.2,
        duration: 0.7,
        scrollTrigger: {
            trigger: '.pac__ite',
            start: 'top 80%',
        }
    });
});
