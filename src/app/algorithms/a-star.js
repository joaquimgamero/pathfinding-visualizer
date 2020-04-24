export function computeAstar(grid, startNode, finishNode) {
    if (!grid || !startNode || !finishNode || startNode == finishNode) {
        return false;
    }

    const checkedNodes = [];
    const uncheckedNodes = getAllNodes(grid);
    startNode.hasBeenChecked = true;

    // Check all unvisited nodes
    while (Array.isArray(uncheckedNodes) && uncheckedNodes.length) {
        // The node with the highest f(n) score
        let current = getWinner(uncheckedNodes);

        if (isSameNode(current, startNode)) {
            uncheckAllNodes(checkedNodes);
            return checkedNodes;
        }

        let unvisitedNeighbors = getUnvisitedNeighbors(current, grid);

        for (const neighbor of unvisitedNeighbors) {
            if (!neighbor.isObstacle) {
                const temptativeGScore = current.heuristics.gScore + heuristic(neighbor, current);
                // let newPath = false;

                if (temptativeGScore < neighbor.heuristics.gScore) {
                    neighbor.heuristics.gScore = temptativeGScore;
                    // newPath = true;
                }

                neighbor.heuristics.heuristic = heuristic(neighbor, end);
                neighbor.heuristics.fScore = neighbor.heuristics.gScore + neighbor.heuristics.heuristic;
                neighbor.previous = current;
            }
        }
    }
}

function getAllNodes(grid) {
    const nodes = [];

    for (const row of grid) {
        for (const node of row) {
            initializeHeuristics(node);
            nodes.push(node);
        }
    }

    return nodes;
}

function initializeHeuristics(node) {
    node.heuristics = {
        // gScore[n] is the cost of the cheapest path from start to n currently known.
        gScore: 0,
        // fScore[n] represents our current best guess as to how short a path from start to finish can be if it goes through n.
        fScore: 0,
        heuristic: 0
    };
}

function heuristic(nodeA, nodeB) {
    // if x = (a, b) and y = (c, d), heuristic = |a − c| + |b − d|.
    return (nodeA.x - nodeB.x) + (nodeA.y - nodeB.y);
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

    for (var i = 0; i < nodes.length; i++) {
        if (nodes[i].heuristics.fScore < nodes[winner].heuristics.fScore) {
            winner = i;
        }
    }

    return nodes[winner];
}

function isSameNode(nodeA, nodeB) {
    return nodeA.x == nodeB.x && nodeA.y == nodeB.y;
}

// This function is necessary for this Angular implementation,
// otherwise when we return the node list the final state is 
// visualized instantly and therefore no animation is possible.
// https://angular.io/guide/architecture#templates-directives-and-data-binding
function uncheckAllNodes(nodes) {
    nodes.forEach(node => {
        if (!node.isStart) {
            node.hasBeenChecked = false;
            node.distance = Infinity;
        }
    });
}