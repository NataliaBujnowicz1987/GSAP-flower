const tl = new TimelineMax();

const body = document.getElementsByTagName('body');
const pot = document.getElementById('Pot');
const stem = document.getElementById('stem');
const leafs = document.querySelectorAll('.leaf');
const flower = document.getElementById('flower');

// we set background from dark blue to sunny color
tl.set(body, { backgroundColor: '#183152' });

// animation starts here from #Pot element
tl.from(pot, 2, { opacity: 0 })
    .to(body, 1, { backgroundColor: '#F0C418' })
    .from(stem, 1, { ease: Power1.easeOut, scaleY: 0, transformOrigin: '50% 100%' })
    .staggerFromTo(leafs, 1.5, { scale: 0.4, opacity: 0 }, { scale: 1, opacity: 1 }, 0.5)
    .staggerFromTo(flower.children, 0.8,
        { scale: 0.3, opacity: 0 },
        { scale: 1, opacity: 1 },
        .3
    )
