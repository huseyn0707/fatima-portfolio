const cards = document.querySelectorAll(
'.card, .publication-card'
);

window.addEventListener('scroll',()=>{

    cards.forEach(card=>{

        const top =
        card.getBoundingClientRect().top;

        if(top < window.innerHeight - 100){

            card.style.opacity = "1";
            card.style.transform =
            "translateY(0px)";

        }

    });

});
const cursor =
document.querySelector('.cursor');

document.addEventListener('mousemove',(e)=>{

    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';

});
const hoverItems =
document.querySelectorAll(
'a, button, .card, .publication-card'
);

hoverItems.forEach(item=>{

    item.addEventListener('mouseenter',()=>{

        cursor.style.width = '50px';
        cursor.style.height = '50px';
        cursor.style.background =
        'rgba(143,92,255,0.2)';

    });

    item.addEventListener('mouseleave',()=>{

        cursor.style.width = '20px';
        cursor.style.height = '20px';
        cursor.style.background = 'transparent';

    });

});
window.addEventListener('load',()=>{

    const loader =
    document.querySelector('.loader');

    setTimeout(()=>{

        loader.style.opacity = '0';

        loader.style.visibility = 'hidden';

    },1500);

});
window.addEventListener('scroll',()=>{

const scrollTop=
document.documentElement.scrollTop;

const height=
document.documentElement.scrollHeight-
document.documentElement.clientHeight;

const scrolled=
(scrollTop/height)*100;

document.querySelector(
'.scroll-progress'
).style.width=scrolled+'%';

});
