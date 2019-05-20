let Hero = function (image, top, left, size) {
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;

    this.getElement = function () {
        return '<img width="' + this.size + '"' +
            ' height="' + this.size + '"' +
            ' src="' + this.image + '"' +
            ' style="top: ' + this.top + 'px; left:' + this.left + 'px;position:absolute;" />';
    };
    this.moveRight = function (a) {

        this.left += a
    };
    this.moveLeft = function (b) {
        this.left -= b;
    };
    this.moveUp = function (c) {
        this.top -= c;
    };
    this.moveDown = function (d) {
        this.top += d;
    };
};

let hero2 = new Hero("pikachu.png", 0, 0, 200);
let hero = new Hero("anh1.png", 0, 0, 200);

function start() {
    if (hero.left < window.innerWidth - hero.size && hero.top=== 0 ) {
        hero.moveRight(1);
    } else if (hero.top < window.innerHeight  - hero.size && hero.left === window.innerWidth-hero.size) {
        hero.moveDown(10);
    }
     else if (hero.left >= 0) {
        hero.moveLeft(10);
    }
    else if (hero.top>=0) {
        hero.moveUp(10);
    }
    document.getElementById('game').innerHTML = hero.getElement();
    setTimeout(start, 1);
}

start();

function start2() {
    if (hero2.left < window.innerWidth - hero2.size && hero2.top=== 0 ) {
        hero2.moveRight(2);
    } else if (hero2.top < window.innerHeight - hero2.size && hero2.left === window.innerWidth-hero2.size) {
        hero2.moveDown(10);
    }
    else if (hero2.left >= 0) {
        hero2.moveLeft(5);
    }
    else if (hero2.top>=0) {
        hero2.moveUp(5);
    }
    document.getElementById('game2').innerHTML = hero2.getElement();
    setTimeout(start2, 1);
}

start2();


