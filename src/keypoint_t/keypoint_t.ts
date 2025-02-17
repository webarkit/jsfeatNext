export class keypoint_t {
    public x: number;
    public y: number;
    public score: number;
    public level: number;
    public angle: number;
    constructor(x: number = 0, y: number = 0, score: number = 0, level: number = 0, angle: number = -1.0) {
        this.x = x;
        this.y = y;
        this.score = score;
        this.level = level;
        this.angle = angle;
    }
}
