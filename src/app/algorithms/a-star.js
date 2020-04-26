export function computeAstar(grid, startNode, finishNode) {
    if (!grid || !startNode || !finishNode || isSameNode(startNode, finishNode)) {
        return false;
    }

    initializeHeuristics(grid);

    const openSet = [startNode];
    const closedSet = [];
    const checkedNodes = [];

    // Check all unvisited nodes
    while ((Array.isArray(openSet) && openSet.length)) {
        const current = getWinner(openSet);
        current.hasBeenChecked = true;
        checkedNodes.push(current);

        if (isSameNode(current, finishNode)) {
            return checkedNodes;
        }

        removeFromArray(openSet, current);
        closedSet.push(current);

        const neighbors = getUnvisitedNeighbors(current, grid);

        for (const neighbor of neighbors) {
            if (closedSet.includes(neighbor) || neighbor.isObstacle) {
                continue;
            }

            const temptativeGScore = current.heuristics.gScore + heuristic(neighbor, current);
            let isBetterPath = false;

            if (openSet.includes(neighbor) && temptativeGScore < neighbor.heuristics.gScore) {
                neighbor.heuristics.gScore = temptativeGScore;
                isBetterPath = true;
            } else {
                neighbor.heuristics.gScore = temptativeGScore;
                isBetterPath = true;
                openSet.push(neighbor);
            }

            if (isBetterPath) {
                neighbor.heuristics.heuristic = heuristic(neighbor, finishNode);
                neighbor.heuristics.fScore = neighbor.heuristics.gScore + neighbor.heuristics.heuristic;
                neighbor.previousNode = current;
            }
        }
    }
}

// Backtracks from the finishNode to find the shortest path.
// Only works when called *after* the dijkstra method above.
export function getAstarShortestPath(finishNode) {
    const nodesInShortestPathOrder = [];
    let currentNode = finishNode;

    while (currentNode != null) {
        nodesInShortestPathOrder.unshift(currentNode);
        currentNode = currentNode.previousNode;
    }

    return nodesInShortestPathOrder;
}

function initializeHeuristics(grid) {
    for (const row of grid) {
        for (const node of row) {
            node.heuristics = {
                // gScore[n] is the cost of the cheapest path from start to n currently known.
                gScore: 0,
                // fScore[n] represents our current best guess as to how short a path from start to finish can be if it goes through n.
                fScore: 0,
                // heuristic(n) estimates the cost to reach goal from node n.
                heuristic: 0
            };
        }
    }
}

function heuristic(nodeX, nodeY) {
    // If x = (a, b) and y = (c, d), heuristic = sqrt(|a − c| ^ 2 + |b − d| ^ 2).
    const a = nodeX.x - nodeY.x;
    const b = nodeX.y - nodeY.y;

    return Math.sqrt(a ** 2 + b ** 2);
}

function getUnvisitedNeighbors(node, grid) {
    const neighbors = [];
    const row = node.x - 1;
    const col = node.y - 1;

    // North node
    if (row > 0) {
        neighbors.push(grid[row - 1][col]);
    }
    // East node
    if (col < grid[0].length - 1) {
        neighbors.push(grid[row][col + 1]);
    }
    // South node
    if (row < grid.length - 1) {
        neighbors.push(grid[row + 1][col]);
    }
    // West node
    if (col > 0) {
        neighbors.push(grid[row][col - 1]);
    }

    return neighbors.filter(neighbor => !neighbor.hasBeenChecked);
}

function getWinner(nodes) {
    let winner = 0;

    for (let i = 0; i < nodes.length; i++) {
        if (nodes[i].heuristics.fScore < nodes[winner].heuristics.fScore) {
            winner = i;
        }
    }

    return nodes[winner];
}

function isSameNode(nodeA, nodeB) {
    return nodeA.x == nodeB.x && nodeA.y == nodeB.y;
}

function removeFromArray(array, element) {
    for (let i = array.length - 1; i >= 0; i--) {
        if (array[i] == element) {
            array.splice(i, 1);
        }
    }
}