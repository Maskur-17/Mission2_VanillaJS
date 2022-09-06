var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function() {
        that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";

    var plane = document.getElementById("plane");
    var bird1 = document.getElementById("bird1");
    var bird2 = document.getElementById("bird2");
    var bird3 = document.getElementById("bird3");
    var bird4 = document.getElementById("bird4");
    var bird5 = document.getElementById("bird5");
    var bird6 = document.getElementById("bird6");
    var bird7 = document.getElementById("bird7");
    var bird8 = document.getElementById("bird8");
    var moveX = 0;
    var speedX = 1;
    var posX = 0;

    function movePlane() {
        plane.style.transform = `translateX(${posX}px)`;
        posX--;
        if (posX == -1350)
            posX = 0

    }

    function movebird1() {
        bird1.style.transform = `translateX(${moveX}px)`;
        moveX = moveX + speedX
        if (moveX > 100 || moveX < -300) {
            speedX *= -1
        }
    }

    function movebird2() {
        bird2.style.transform = `translateX(${moveX}px)`;
        moveX = moveX + speedX
        if (moveX > 200 || moveX < -200) {
            speedX *= -1
        }
    }

    function movebird3() {
        bird3.style.transform = `translateX(${moveX}px)`;
        moveX = moveX + speedX
        if (moveX > 200 || moveX < -200) {
            speedX *= -1
        }
    }

    function movebird4() {
        bird4.style.transform = `translateX(${moveX}px)`;
        moveX = moveX + speedX
        if (moveX > 200 || moveX < -200) {
            speedX *= -1
        }
    }

    function movebird5() {
        bird5.style.transform = `translateX(${moveX}px)`;
        moveX = moveX + speedX
        if (moveX > 200 || moveX < -200) {
            speedX *= -1
        }
    }

    function movebird6() {
        bird6.style.transform = `translateX(${moveX}px)`;
        moveX = moveX + speedX
        if (moveX > 200 || moveX < -200) {
            speedX *= -1
        }
    }

    function movebird7() {
        bird7.style.transform = `translateX(${moveX}px)`;
        moveX = moveX + speedX
        if (moveX > 200 || moveX < -200) {
            speedX *= -1
        }
    }

    function movebird8() {
        bird8.style.transform = `translateX(${moveX}px)`;
        moveX = moveX + speedX
        if (moveX > 200 || moveX < -200) {
            speedX *= -1
        }
    }

    document.body.appendChild(css);
    setInterval(movePlane, 10);
    setInterval(movebird1, 10);
    setInterval(movebird2, 100);
    setInterval(movebird3, 100);
    setInterval(movebird4, 100);
    setInterval(movebird5, 100);
    setInterval(movebird6, 100);
    setInterval(movebird7, 100);
    setInterval(movebird8, 100);
};