// Enemies our player must avoid
var Enemy = function(y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = -1000;
    this.y = y;

    this.speed = Math.floor((Math.random() * 8) + 5);

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    //console.log(this.x, this.y);
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += this.speed;
    // Enemy goes off canvas, bring it back and randomized its speed.
    if (this.x > 600) {
        this.x = Math.floor((Math.random() * (-1000)) - 500);
        this.speed = Math.floor((Math.random() * 8) + 2);
    };
};

var checkCollisions = function() {
    allEnemies.forEach(function(enemy) {

        if (enemy.x < player.x + 101 &&
            enemy.x + 101 > player.x &&
            enemy.y < player.y + 70 &&
            70 + enemy.y > player.y) {
                // collision detected!
                player.x = 200;
                player.y = 390;;
            }
        });
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function() {
    this.x = 200;
    this.y = 390;

    this.sprite = 'images/char-boy.png';
};

Player.prototype.update = function(dt) {
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Make the player move.
Player.prototype.handleInput = function(key) {
    if (key === "left") {
        if (this.x === 0) {
            this.x = 0;
        }
        else
            this.x -= 100;
    }
    else if (key === "up") {
        if (this.y === 30) {
            this.y = 390;
        }
        else
            this.y = this.y - 90;
    }
    else if (key === "right") {
        if (this.x === 400) {
            this.x = 400;
        }
        else
            this.x += 100;
    }
    else if (key === "down") {
        if (this.y === 390) {
            this.y = 390;
        }
        else
            this.y += 90;
    };
};

// Now instantiate your objects.
var enemie_0 = new Enemy(45), enemie_1 = new Enemy(140), enemie_2 = new Enemy(225), 
    enemie_3 = new Enemy(45), enemie_4 = new Enemy(140), enemie_5 = new Enemy(225), 
    enemie_6 = new Enemy(45), enemie_7 = new Enemy(140), enemie_8 = new Enemy(225);

// Place all enemy objects in an array called allEnemies
var allEnemies = [enemie_0, enemie_1, enemie_2, enemie_3, enemie_4, enemie_5, enemie_6, enemie_7, enemie_8];

// Place the player object in a variable called player
var player = new Player();


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});