import { NodeType } from '../enums/nodeType.enum'
import { GridService } from '../services/grid.service';

export class Node {
    public x: number;
    public y: number;
    public type: NodeType;
    public distance: number;
    public hasBeenChecked: boolean;
    public previousNode: Node;
    public isRoute: boolean;

    constructor(x: number, y: number, private gridService: GridService) {
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
        this.distance = Infinity;
        this.hasBeenChecked = false;
        this.previousNode = null;
        this.isRoute = false;
    }

    public makeUnknown() {
        this.hasBeenChecked = false;
        this.distance = Infinity;
    }

    public removeScanned() {
        this.hasBeenChecked = false;
    }

    public removeRoute() {
        this.isRoute = false;
    }

    public removeObstacle() {
        if (this.type === NodeType.Obstacle) {
            this.toggleType(NodeType.Obstacle);
        }
    }

    public toggleType(nodeType: NodeType) {
        if (this.isLegendNode) { return false; }

        switch (nodeType) {
            case NodeType.Obstacle:
                if (this.type != NodeType.Start && this.type != NodeType.Finish) {
                    this.type = this.type == NodeType.Empty ? NodeType.Obstacle : NodeType.Empty;
                }
                break;
            case NodeType.Start:
                this.gridService.createStartNode(this.x, this.y);
                break;
            case NodeType.Finish:
                this.gridService.createFinishNode(this.x, this.y);
                this.type = NodeType.Finish;
                break;
            case NodeType.Empty:
                this.type = NodeType.Empty;
                break;
            default:
                break;
        }
    }

    get isStart(): boolean {
        return this.type === NodeType.Start;
    }

    get isFinish(): boolean {
        return this.type === NodeType.Finish;
    }

    get isObstacle(): boolean {
        return this.type == NodeType.Obstacle;
    }

    get markAsChecked(): boolean {
        return this.hasBeenChecked;
    }

    get isLegendNode(): boolean {
        return this.x <= 0 && this.y <= 0;
    }
}