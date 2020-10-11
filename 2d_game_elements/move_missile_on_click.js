shootRight.addEventListener('click', () => {
    const basMis = getElementById('missile_right');
    print(basMis)
    basMis.style.display = 'block'
    // basMis.style.left = `40px`;
    // basMis.style.top = '0px'
    interval = setInterval(() =>{

        // basicMissile.classList.remove('caco-return--anim');
        // basicMissile.classList.add('caco-turn--anim');
        left1 += distance;
        basMis.style.left = `${left1}px`;
        checkPosition(basMis);
        colliderOnExit(basMis, target);
        let popup = basMis;
        let rect = popup.getBoundingClientRect();
        let reset = rect.x
        print(reset)
        if (reset > 160) {
            clearInterval(interval);
            left1 -= reset;
            left1 += 20;
            basMis.style.left = `${0}px`;
        }
    }, 20)