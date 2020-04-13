import { NodeType } from '../enums/nodeType.enum'

export class Node {
    public x: number;
    public y: number;
    public type: NodeType;
    public distance: number;
    public hasBeenChecked: boolean;
    public previousNode: Node;
    public isRoute: boolean;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.type = NodeType.Empty;
        this.distance = Infinity;
        this.hasBeenChecked = false;
        this.previousNode = null;
        this.isRoute = false;
    }

    public reset() {
        this.type = NodeType.Empty;
        this.hasBeenChecked = false;
        this.isRoute = false;
        this.distance = Infinity;
    }

    get isStartNode(): boolean {
        return this.type === NodeType.Start;
    }

    get isEndNode(): boolean {
        return this.type === NodeType.Finish;
    }

    get markAsChecked(): boolean {
        return this.type === NodeType.Empty && this.hasBeenChecked;
    }
}