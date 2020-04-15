import { Node } from '../models/node';
import { AlgorithmType } from '../enums/algorithmType.enum';

export class AlgorithmResponse {
    public objectiveFound: boolean;
    public checkedNodes: Array<Node>;
    public nodesInShortestPathOrder: Array<Node>;
    public type: AlgorithmType;

    constructor(checkedNodes: Array<Node>, path: Array<Node>, type: AlgorithmType) {
        this.checkedNodes = checkedNodes;
        this.objectiveFound = checkedNodes.some((node: Node) => node.isFinish);
        this.nodesInShortestPathOrder = path;
        this.type = type;
    }

    public get checkedNodesQuantity(): number {
        return this.checkedNodes.length;
    }

    public get pathLength(): number {
        return this.nodesInShortestPathOrder.length;
    }
}
