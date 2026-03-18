document.addEventListener('DOMContentLoaded', () => {
    const jumpList = document.getElementById('jumpList');
    const prevSlide = document.getElementById('prevSlide');
    const nextSlide = document.getElementById('nextSlide');
    const totalSlides = 24;

    const bodySlideAttr = document.body.getAttribute('data-slide');
    const currentSlide = bodySlideAttr ? parseInt(bodySlideAttr, 10) : 1;
    const depth = parseInt(document.body.getAttribute('data-depth') || '0', 10);

    const slideMap = {
        1:  'index.html',
        2:  'pages/02_History/index.html',
        3:  'pages/03_iCSI_Opens/index.html',
        4:  'pages/04_Facility_Photos/index.html',
        5:  'pages/05_Program_Track/index.html',
        6:  'pages/06_Why_This_Works/index.html',
        7:  'pages/07_Topics_Overview/index.html',
        8:  'pages/08_Curriculum_OnPrem/index.html',
        9:  'pages/09_OnPrem_Drawbacks/index.html',
        10: 'pages/10_Portable_Activities/index.html',
        11: 'pages/11_Solution_Guide/index.html',
        12: 'pages/12_Why_Notion/index.html',
        13: 'pages/12_Cyber_Range/index.html',
        14: 'pages/13_AI_Evolution/index.html',
        15: 'pages/14_Complex_Infrastructure/index.html',
        16: 'pages/15_Manual_Route/index.html',
        17: 'pages/16_Student_AI_Training/index.html',
        18: 'pages/17_Instructor_AI_Usage/index.html',
        19: 'pages/18_Before_Times/index.html',
        20: 'pages/19_Agentic_Curriculum/index.html',
        21: 'pages/20_How_Built/index.html',
        22: 'pages/21_Agentic_Costs/index.html',
        23: 'pages/22_Resources/index.html',
        24: 'pages/23_Thank_You/index.html'
    };

    function resolveURL(targetSlide) {
        const path = slideMap[targetSlide];
        if (!path) return null;
        if (depth === 0) {
            return path;
        } else {
            // depth 1: inside pages/XX_Name/
            if (targetSlide === 1) {
                return '../../index.html';
            } else {
                // path = 'pages/XX_Name/index.html' → '../XX_Name/index.html'
                const folder = path.split('/')[1];
                return '../' + folder + '/index.html';
            }
        }
    }

    // Render pagination
    for (let i = 1; i <= totalSlides; i++) {
        const li = document.createElement('li');
        if (i === currentSlide) li.classList.add('active');

        const btn = document.createElement('button');
        btn.textContent = i;
        btn.setAttribute('aria-label', `Go to slide ${i}`);

        btn.addEventListener('click', () => {
            if (i !== currentSlide) {
                const url = resolveURL(i);
                if (url) window.location.href = url;
            }
        });

        li.appendChild(btn);
        jumpList.appendChild(li);
    }

    // Prev/Next chevrons
    prevSlide.addEventListener('click', () => {
        if (currentSlide > 1) {
            document.querySelectorAll('.pagination-list button')[currentSlide - 2].click();
        } else {
            prevSlide.style.transform = 'translateY(-50%) translateX(-10px)';
            setTimeout(() => { prevSlide.style.transform = ''; }, 200);
        }
    });

    nextSlide.addEventListener('click', () => {
        if (currentSlide < totalSlides) {
            document.querySelectorAll('.pagination-list button')[currentSlide].click();
        } else {
            nextSlide.style.transform = 'translateY(-50%) translateX(10px)';
            setTimeout(() => { nextSlide.style.transform = ''; }, 200);
        }
    });

    // Panorama lightbox
    const modal = document.querySelector('.pano-modal');
    if (modal) {
        const modalImg = modal.querySelector('img');
        const closeBtn = modal.querySelector('.pano-close');

        document.querySelectorAll('.panorama-img').forEach(img => {
            img.addEventListener('click', () => {
                modalImg.src = img.src;
                modal.classList.add('active');
            });
        });

        closeBtn.addEventListener('click', () => modal.classList.remove('active'));
        modal.addEventListener('click', (e) => {
            if (e.target === modal) modal.classList.remove('active');
        });
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') modal.classList.remove('active');
        });
    }
});
