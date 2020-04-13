export function computeDijkstra(grid, startNode, finishNode) {
    console.log("Computing Dijkstra...");

    if (!grid || !startNode || !finishNode || startNode == finishNode) {
        return false;
    }

    const checkedNodes = [];
    const uncheckedNodes = getAllNodes(grid);
    startNode.hasBeenChecked = true;

    // Check all unvisited nodes
    while (Array.isArray(uncheckedNodes) && uncheckedNodes.length) {
        sortNodesByDistance(uncheckedNodes);
        const closestNode = uncheckedNodes.shift()

        // If we find and obstacle we skip it
        if (closestNode.isObstacle) {
            continue;
        }

        // If the closest node is at a distance of infinity,
        // we must be trapped and should therefore stop.
        if (closestNode.distance === Infinity) {
            uncheckAllNodes(checkedNodes);
            return checkedNodes;
        }

        closestNode.hasBeenChecked = true;
        checkedNodes.push(closestNode);

        if (isSameNode(closestNode, finishNode)) {
            uncheckAllNodes(checkedNodes);
            return checkedNodes;
        }

        updateUnvisitedNeighbors(closestNode, grid);
    }
}

// Backtracks from the finishNode to find the shortest path.
// Only works when called *after* the dijkstra method above.
export function getDijkstraShortestPath(finishNode) {
    const nodesInShortestPathOrder = [];
    let currentNode = finishNode;

    while (currentNode != null) {
        nodesInShortestPathOrder.unshift(currentNode);
        currentNode = currentNode.previousNode;
    }

    return nodesInShortestPathOrder;
}

function getAllNodes(grid) {
    const nodes = [];

    for (const row of grid) {
        for (const node of row) {
            nodes.push(node);
        }
    }

    return nodes;
}

function sortNodesByDistance(uncheckedNodes) {
    uncheckedNodes.sort((nodeA, nodeB) => nodeA.distance - nodeB.distance);
}

function updateUnvisitedNeighbors(node, grid) {
    const unvisitedNeighbors = getUnvisitedNeighbors(node, grid);

    for (const neighbor of unvisitedNeighbors) {
        neighbor.distance = node.distance + 1;
        neighbor.previousNode = node;
    }
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
        }
    });
}