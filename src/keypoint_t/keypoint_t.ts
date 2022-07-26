export class keypoint_t {
    public x: number;
    public y: number;
    public score: number;
    public level: number;
    public angle: number;
    constructor(x: number, y: number, score: number, level: number, angle: number) {
        if (typeof x === "undefined") { x = 0; }
        if (typeof y === "undefined") { y = 0; }
        if (typeof score === "undefined") { score = 0; }
        if (typeof level === "undefined") { level = 0; }
        if (typeof angle === "undefined") { angle = -1.0; }

        this.x = x;
        this.y = y;
        this.score = score;
        this.level = level;
        this.angle = angle;
    }
}