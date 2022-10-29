interface IPoint_t{
    x: number;
    y: number;
    level: number;
    score: number;
    angle: number;
}

export class point_t implements IPoint_t {
    public x: number;
    public y: number;
    level: number;
    score: number;
    angle: number;
    constructor(){}
}