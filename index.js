
const knightMovesList = [
  [2, 1],
  [2, -1],
  [-2, 1],
  [-2, -1],
  [1, 2],
  [1, -2],
  [-1, 2],
  [-1, -2],
];

function isValidPosition([x, y]) {
  return x >= 0 && x <= 7 && y >= 0 && y <= 7;
}

function positionKey(position) {
  return `${position[0]},${position[1]}`;
}

function knightMoves(start, end) {
  if (!isValidPosition(start) || !isValidPosition(end)) {
    throw new Error("Positions must be between 0 and 7.");
  }

  const queue = [start];
  const visited = new Set();
  const previous = new Map();

  visited.add(positionKey(start));

  let front = 0;

  while (front < queue.length) {
    const current = queue[front];
    front++;

    if (positionKey(current) === positionKey(end)) {
      const path = [];
      let position = current;

      while (position !== null) {
        path.unshift(position);
        position = previous.get(positionKey(position)) ?? null;
      }

      return path;
    }

    for (const [dx, dy] of knightMovesList) {
      const next = [current[0] + dx, current[1] + dy];
      const nextKey = positionKey(next);

      if (!isValidPosition(next) || visited.has(nextKey)) {
        continue;
      }

      visited.add(nextKey);
      previous.set(nextKey, current);
      queue.push(next);
    }
  }

  return null;
}

function displayPath(start, end) {
  const path = knightMoves(start, end);

  if (path === null) {
    console.log("No path found.");
    return;
  }

  console.log(
    `You made it in ${path.length - 1} moves! Here's your path:`
  );

  path.forEach((position) => {
    console.log(position);
  });
}

// Test cases
displayPath([0, 0], [1, 2]);

console.log("----------------");

displayPath([0, 0], [3, 3]);

console.log("----------------");

displayPath([0, 0], [7, 7]);

console.log("----------------");

displayPath([3, 3], [4, 3]);
