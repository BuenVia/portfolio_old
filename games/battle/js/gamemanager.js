let gameManager = {
   setGameStart: function(classType) {
    this.resetPlayer(classType);
    this.setPreFight();
   },
   resetPlayer: function(classType) {
    switch (classType) {
        case "Fighter 1":
            player = new Player(classType, 200, 0 , 200, 100, 50);
            break;
        case "Fighter 2":
            player = new Player(classType, 100, 0 , 100, 150, 200);
            break;
        case "Fighter 3":
            player = new Player(classType, 150, 0 , 50, 180, 80);
            break;
        case "Fighter 4":
            player = new Player(classType, 170, 0 , 50, 100, 200);
            break;
    }
    let getInterface = document.querySelector('.interface');
    getInterface.innerHTML = '<img src="images/fighters/' + classType.toLowerCase() + '.jpg" class="img-avatar"><div><h3>' + 
    classType + '</h3><p class="health-player">Health: ' + player.health + '</p><p>Mana: ' + player.mana + 
    '</p><p>Strength: ' + player.strength + '</p><p>Agility: ' + player.agility + '</p><p>Speed: ' + player.speed + '</p></div>';
   },
   setPreFight: function() {
        let getHeader = document.querySelector('.header');
        let getActions = document.querySelector('.actions');
        let getArena = document.querySelector('.arena');
        getHeader.innerHTML = '<p>Find an enemy!</p>';
        getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="gameManager.setFight()">Search for an enemy!</a>';
        getArena.style.visibility = 'visible';
   },
   setFight: function() {
    let getHeader = document.querySelector('.header');
    let getActions = document.querySelector('.actions');
    let getEnemy = document.querySelector('.enemy');
    // Create enemy
    let enemy00 = new Enemy('Goro', 100, 0 , 50, 200, 100);
    let enemy01 = new Enemy('Shang Tsung', 200, 0 , 50, 100, 200);
    let chooseRandomEnemy = Math.floor(Math.random() * Math.floor(2));
    switch (chooseRandomEnemy) {
        case 0:
            enemy = enemy00;
            break;
        case 1:
            enemy = enemy01;
            break;
   }
   getHeader.innerHTML = '<p>Choose your move!</p>';
   getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="PlayerMoves.calcAttack()">Attack!</a>';
   getEnemy.innerHTML = '<img src="images/enemies/' + enemy.enemyType.toLowerCase() + '.jpg" class="img-avatar"><div><h3>' + 
   enemy.enemyType + '</h3><p class="health-enemy">Health: ' + enemy.health + '</p><p>Mana: ' + enemy.mana + 
   '</p><p>Strength: ' + enemy.strength + '</p><p>Agility: ' + enemy.agility + '</p><p>Speed: ' + enemy.speed + '</p></div>';
}
}