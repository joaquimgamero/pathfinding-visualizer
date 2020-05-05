export function computeDepthFirst(grid, startNode, finishNode) {
    if (!grid || !startNode || !finishNode || isSameNode(startNode, finishNode)) {
        return false;
    }

    startNode.hasBeenChecked = true;
    const checkedNodes = [];
    const uncheckedNodes = [startNode];

    // Check all unvisited nodes
    while (Array.isArray(uncheckedNodes) && uncheckedNodes.length) {
        const currentNode = uncheckedNodes.pop();

        // If we find and obstacle we skip it
        if (currentNode.isObstacle) {
            continue;
        }

        currentNode.hasBeenChecked = true;
        checkedNodes.push(currentNode);

        if (isSameNode(currentNode, finishNode)) {
            return checkedNodes;
        }

        const currentNeighbors = getUnvisitedNeighbors(currentNode, grid);

        for (const neighbor of currentNeighbors) {
            neighbor.previousNode = currentNode;
            uncheckedNodes.push(neighbor);
        }
    }

    return checkedNodes;
}

export function getDepthFirstShortestPath(finishNode) {
    const nodesInShortestPathOrder = [];
    let currentNode = finishNode;

    while (currentNode != null) {
        nodesInShortestPathOrder.unshift(currentNode);
        currentNode = currentNode.previousNode;
    }

    return nodesInShortestPathOrder;
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
