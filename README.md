
# Knights Travails

A JavaScript project from The Odin Project.

## Description

Knights Travails finds the shortest possible path a knight can take to move from one square to another on a standard 8x8 chessboard.

The project uses a graph-based approach and the Breadth-First Search (BFS) algorithm to explore possible knight moves and find the shortest route.

## How It Works

- Each chessboard square is represented by coordinates [x, y].
- A knight has 8 possible L-shaped moves.
- Invalid moves outside the chessboard are ignored.
- BFS explores possible positions level by level.
- A queue manages positions waiting to be explored.
- A Set tracks visited positions to avoid revisiting them.
- A Map remembers previous positions to reconstruct the shortest path.

## Technologies Used

- JavaScript
- Node.js
- Breadth-First Search (BFS)
- Graphs
- Queue
- Set
- Map

## Installation

Clone the repository:

```bash
git clone git@github.com:YOUR_USERNAME/knights-travails.git
```

Navigate into the project:

```bash
cd knights-travails
```

## Run the Project

```bash
npm start
```

## Usage

Call the knightMoves() function with a starting position and destination.

```javascript
knightMoves([0, 0], [3, 3]);
```

Example output:

```text
You made it in 2 moves! Here's your path:
[ 0, 0 ]
[ 2, 1 ]
[ 3, 3 ]
```

## Examples

```javascript
knightMoves([0, 0], [1, 2]);
knightMoves([0, 0], [3, 3]);
knightMoves([0, 0], [7, 7]);
knightMoves([3, 3], [4, 3]);
```

There may be multiple shortest paths between two positions. Any valid shortest path is acceptable.

## Learning Outcomes

- Understanding graph representation.
- Practising Breadth-First Search.
- Working with queues.
- Using Set and Map.
- Tracking visited nodes.
- Reconstructing shortest paths.
- Improving problem-solving skills.

## Author

Hiba Fathima
