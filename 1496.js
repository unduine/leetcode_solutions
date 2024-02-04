
var isPathCrossing = function(path) {
  let x = 0;
  let y = 0;
  let visited = new Set();
  let instruction = {
    "N": [1, 0],
    "E": [0, 1],
    "S": [-1, 0],
    "W": [0, -1]
  };

  for (let i of path) {
    visited.add(`${x},${y}`);
    const [dx, dy] = instruction[i];
    x += dx;
    y += dy;
    if (visited.has(`${x},${y}`)) return true;
  }
  return false;
};

// var isPathCrossing2 = function(path) {
//     let x = 0;
//     let y = 0;
//     const visited = {
//         0: {
//             0: true
//         }
//     }

//     for (let i of path) {
//         if (i == "N") x += 1;
//         if (i == "E") y += 1;
//         if (i == "S") x -= 1;
//         if (i == "W") y -= 1;
//     
//         if (visited[x] && visited[x][y]) return true;
//         if (!visited[x]) {
//             visited[x] = {};
//         }
//         visited[x][y] = true;
//     }
//     return false;
// };

