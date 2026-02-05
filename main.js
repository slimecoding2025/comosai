// Stars background
const stars = document.createElement('div');
stars.classList.add('stars');
document.body.appendChild(stars);

for (let i = 0; i < 200; i++) {
    const star = document.createElement('div');
    star.style.position = 'absolute';
    star.style.width = `${Math.random()*2}px`;
    star.style.height = star.style.width;
    star.style.background = '#fff';
    star.style.top = `${Math.random()*100}%`;
    star.style.left = `${Math.random()*100}%`;
    star.style.borderRadius = '50%';
    star.style.opacity = Math.random();
    stars.appendChild(star);
}
