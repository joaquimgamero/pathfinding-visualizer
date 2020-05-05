export function computeBreadthFirst(grid, startNode, finishNode) {
    if (!grid || !startNode || !finishNode || isSameNode(startNode, finishNode)) {
        return false;
    }

    startNode.hasBeenChecked = true;
    const checkedNodes = [];
    // const uncheckedNodes = getAllNodes(grid);
    const uncheckedNodes = [startNode];

    let counter = 0;

    // Check all unvisited nodes
    while ((Array.isArray(uncheckedNodes) && uncheckedNodes.length) && counter < 10000) {
        console.log(uncheckedNodes);
        const currentNode = uncheckedNodes.shift();

        // If we find and obstacle we skip it
        if (currentNode.isObstacle) {
            continue;
        }

        // If the closest node is at a distance of infinity,
        // we must be trapped and should therefore stop.
        // if (closestNode.distance === Infinity) {
        //     return checkedNodes;
        // }

        currentNode.hasBeenChecked = true;
        checkedNodes.push(currentNode);

        if (isSameNode(currentNode, finishNode)) {
            return checkedNodes;
        }

        const currentNeighbors = getUnvisitedNeighbors(currentNode, grid);

        for (const neighbor of currentNeighbors) {
            neighbor.previousNode = currentNode;
            neighbor.hasBeenChecked = true;
            uncheckedNodes.push(neighbor);
        }

        counter++;
    }
}

export function getBreadthFirstShortestPath(finishNode) {
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
