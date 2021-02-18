        //---------------Slider Picture Puzzle---------------//
        
        //---------------draw on canvas---------------//
        
        let context = document.getElementById('puzzle').getContext('2d');
        
        let img = new Image();
        img.src = 'https://images.wallpapersden.com/image/download/batman-detective-comics-dc-comics_ZmVoZ2eUmZqaraWkpJRpbWWtaW1l.jpg';
        img.addEventListener('load', drawTiles, false);
        
        let boardSize = document.getElementById('puzzle').width;
        let tileCount = document.getElementById('scale').value;
        
        let tileSize = boardSize / tileCount;
        
        let tileLocation = new Object;
        tileLocation.x = 0;
        tileLocation.y = 0;
        
        let tileEmpty = new Object;
        tileEmpty.x = 0;
        tileEmpty.y = 0;
        
        let solved = false;
        
        let boardParts;
        setBoard();
        
        //---------------difficulty---------------//
        
        document.getElementById('scale').onchange = function() {
          tileCount = this.value;
          tileSize = boardSize / tileCount;
          setBoard();
          drawTiles();
        };
        
        document.getElementById('puzzle').onclick = function(e) {
          tileLocation.x = Math.floor((e.pageX - this.offsetLeft) / tileSize);
          tileLocation.y = Math.floor((e.pageY - this.offsetTop) / tileSize);
          if (distance(tileLocation.x, tileLocation.y, tileEmpty.x, tileEmpty.y) == 1) {
            slideTile(tileEmpty, tileLocation);
            drawTiles();
          }
          if (solved) {
            setTimeout(function() {alert("Awesome Job!");}, 500);
          }
        };
        
        function setBoard() {
          boardParts = new Array(tileCount);
          for (let i = 0; i < tileCount; ++i) {
            boardParts[i] = new Array(tileCount);
            for (let j = 0; j < tileCount; ++j) {
              boardParts[i][j] = new Object;
              boardParts[i][j].x = (tileCount - 1) - i;
              boardParts[i][j].y = (tileCount - 1) - j;
            }
          }
          tileEmpty.x = boardParts[tileCount - 1][tileCount - 1].x;
          tileEmpty.y = boardParts[tileCount - 1][tileCount - 1].y;
          solved = false;
        }
        
        function drawTiles() {
          context.clearRect ( 0 , 0 , boardSize , boardSize );
          for (let i = 0; i < tileCount; ++i) {
            for (let j = 0; j < tileCount; ++j) {
              let x = boardParts[i][j].x;
              let y = boardParts[i][j].y;
              if(i != tileEmpty.x || j != tileEmpty.y || solved == true) {
                context.drawImage(img, x * tileSize, y * tileSize, tileSize, tileSize,
                    i * tileSize, j * tileSize, tileSize, tileSize);
              }
            }
          }
        }
        
        function distance(x1, y1, x2, y2) {
          return Math.abs(x1 - x2) + Math.abs(y1 - y2);
        }
        
        function slideTile(toLoc, fromLoc) {
          if (!solved) {
            boardParts[toLoc.x][toLoc.y].x = boardParts[fromLoc.x][fromLoc.y].x;
            boardParts[toLoc.x][toLoc.y].y = boardParts[fromLoc.x][fromLoc.y].y;
            boardParts[fromLoc.x][fromLoc.y].x = tileCount - 1;
            boardParts[fromLoc.x][fromLoc.y].y = tileCount - 1;
            toLoc.x = fromLoc.x;
            toLoc.y = fromLoc.y;
            checkSolved();
          }
        }
        
        function checkSolved() {
          let flag = true;
          for (let i = 0; i < tileCount; ++i) {
            for (let j = 0; j < tileCount; ++j) {
              if (boardParts[i][j].x != i || boardParts[i][j].y != j) {
                flag = false;
              }
            }
          }
          solved = flag;
        }