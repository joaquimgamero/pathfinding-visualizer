import { NodeType } from '../enums/nodeType.enum'

export class Node {
    public x: number;
    public y: number;
    public type: NodeType;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.type = NodeType.Empty;
    }

    get isStartNode(): boolean {
        return this.type === NodeType.Start;
    }

    get isEndNode(): boolean {
        return this.type === NodeType.End;
    }
}