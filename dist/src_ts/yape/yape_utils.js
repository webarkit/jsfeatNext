export function precompute_directions(step, dirs, R) {
    var i = 0;
    var x, y;
    x = R;
    for (y = 0; y < x; y++, i++) {
        x = (Math.sqrt((R * R - y * y)) + 0.5) | 0;
        dirs[i] = (x + step * y);
    }
    for (x--; x < y && x >= 0; x--, i++) {
        y = (Math.sqrt((R * R - x * x)) + 0.5) | 0;
        dirs[i] = (x + step * y);
    }
    for (; -x < y; x--, i++) {
        y = (Math.sqrt((R * R - x * x)) + 0.5) | 0;
        dirs[i] = (x + step * y);
    }
    for (y--; y >= 0; y--, i++) {
        x = (-Math.sqrt((R * R - y * y)) - 0.5) | 0;
        dirs[i] = (x + step * y);
    }
    for (; y > x; y--, i++) {
        x = (-Math.sqrt((R * R - y * y)) - 0.5) | 0;
        dirs[i] = (x + step * y);
    }
    for (x++; x <= 0; x++, i++) {
        y = (-Math.sqrt((R * R - x * x)) - 0.5) | 0;
        dirs[i] = (x + step * y);
    }
    for (; x < -y; x++, i++) {
        y = (-Math.sqrt((R * R - x * x)) - 0.5) | 0;
        dirs[i] = (x + step * y);
    }
    for (y++; y < 0; y++, i++) {
        x = (Math.sqrt((R * R - y * y)) + 0.5) | 0;
        dirs[i] = (x + step * y);
    }
    dirs[i] = dirs[0];
    dirs[i + 1] = dirs[1];
    return i;
}
export function third_check(Sb, off, step) {
    var n = 0;
    if (Sb[off + 1] != 0)
        n++;
    if (Sb[off - 1] != 0)
        n++;
    if (Sb[off + step] != 0)
        n++;
    if (Sb[off + step + 1] != 0)
        n++;
    if (Sb[off + step - 1] != 0)
        n++;
    if (Sb[off - step] != 0)
        n++;
    if (Sb[off - step + 1] != 0)
        n++;
    if (Sb[off - step - 1] != 0)
        n++;
    return n;
}
export function is_local_maxima(p, off, v, step, neighborhood) {
    var x, y;
    if (v > 0) {
        off -= step * neighborhood;
        for (y = -neighborhood; y <= neighborhood; ++y) {
            for (x = -neighborhood; x <= neighborhood; ++x) {
                if (p[off + x] > v)
                    return false;
            }
            off += step;
        }
    }
    else {
        off -= step * neighborhood;
        for (y = -neighborhood; y <= neighborhood; ++y) {
            for (x = -neighborhood; x <= neighborhood; ++x) {
                if (p[off + x] < v)
                    return false;
            }
            off += step;
        }
    }
    return true;
}
export function perform_one_point(I, x, Scores, Im, Ip, dirs, opposite, dirs_nb) {
    var score = 0;
    var a = 0, b = (opposite - 1) | 0;
    var A = 0, B0 = 0, B1 = 0, B2 = 0;
    var state = 0;
    A = I[x + dirs[a]];
    if ((A <= Ip)) {
        if ((A >= Im)) {
            B0 = I[x + dirs[b]];
            if ((B0 <= Ip)) {
                if ((B0 >= Im)) {
                    Scores[x] = 0;
                    return;
                }
                else {
                    b++;
                    B1 = I[x + dirs[b]];
                    if ((B1 > Ip)) {
                        b++;
                        B2 = I[x + dirs[b]];
                        if ((B2 > Ip))
                            state = 3;
                        else if ((B2 < Im))
                            state = 6;
                        else {
                            Scores[x] = 0;
                            return;
                        }
                    }
                    else {
                        b++;
                        B2 = I[x + dirs[b]];
                        if ((B2 > Ip))
                            state = 7;
                        else if ((B2 < Im))
                            state = 2;
                        else {
                            Scores[x] = 0;
                            return;
                        }
                    }
                }
            }
            else {
                b++;
                B1 = I[x + dirs[b]];
                if ((B1 > Ip)) {
                    b++;
                    B2 = I[x + dirs[b]];
                    if ((B2 > Ip))
                        state = 3;
                    else if ((B2 < Im))
                        state = 6;
                    else {
                        Scores[x] = 0;
                        return;
                    }
                }
                else if ((B1 < Im)) {
                    b++;
                    B2 = I[x + dirs[b]];
                    if ((B2 > Ip))
                        state = 7;
                    else if ((B2 < Im))
                        state = 2;
                    else {
                        Scores[x] = 0;
                        return;
                    }
                }
                else {
                    Scores[x] = 0;
                    return;
                }
            }
        }
        else {
            B0 = I[x + dirs[b]];
            if ((B0 > Ip)) {
                Scores[x] = 0;
                return;
            }
            b++;
            B1 = I[x + dirs[b]];
            if ((B1 > Ip)) {
                Scores[x] = 0;
                return;
            }
            b++;
            B2 = I[x + dirs[b]];
            if ((B2 > Ip)) {
                Scores[x] = 0;
                return;
            }
            state = 1;
        }
    }
    else {
        B0 = I[x + dirs[b]];
        if ((B0 < Im)) {
            Scores[x] = 0;
            return;
        }
        b++;
        B1 = I[x + dirs[b]];
        if ((B1 < Im)) {
            Scores[x] = 0;
            return;
        }
        b++;
        B2 = I[x + dirs[b]];
        if ((B2 < Im)) {
            Scores[x] = 0;
            return;
        }
        state = 0;
    }
    for (a = 1; a <= opposite; a++) {
        A = I[x + dirs[a]];
        switch (state) {
            case 0:
                if ((A > Ip)) {
                    B1 = B2;
                    b++;
                    B2 = I[x + dirs[b]];
                    if ((B2 < Im)) {
                        Scores[x] = 0;
                        return;
                    }
                    {
                        score -= A + B1;
                        state = 0;
                        break;
                    }
                    ;
                }
                if ((A < Im)) {
                    if ((B1 > Ip)) {
                        Scores[x] = 0;
                        return;
                    }
                    if ((B2 > Ip)) {
                        Scores[x] = 0;
                        return;
                    }
                    B1 = B2;
                    b++;
                    B2 = I[x + dirs[b]];
                    if ((B2 > Ip)) {
                        Scores[x] = 0;
                        return;
                    }
                    {
                        score -= A + B1;
                        state = 8;
                        break;
                    }
                    ;
                }
                if ((B1 <= Ip)) {
                    Scores[x] = 0;
                    return;
                }
                if ((B2 <= Ip)) {
                    Scores[x] = 0;
                    return;
                }
                B1 = B2;
                b++;
                B2 = I[x + dirs[b]];
                if ((B2 > Ip)) {
                    score -= A + B1;
                    state = 3;
                    break;
                }
                ;
                if ((B2 < Im)) {
                    score -= A + B1;
                    state = 6;
                    break;
                }
                ;
                {
                    Scores[x] = 0;
                    return;
                }
            case 1:
                if ((A < Im)) {
                    B1 = B2;
                    b++;
                    B2 = I[x + dirs[b]];
                    if ((B2 > Ip)) {
                        Scores[x] = 0;
                        return;
                    }
                    {
                        score -= A + B1;
                        state = 1;
                        break;
                    }
                    ;
                }
                if ((A > Ip)) {
                    if ((B1 < Im)) {
                        Scores[x] = 0;
                        return;
                    }
                    if ((B2 < Im)) {
                        Scores[x] = 0;
                        return;
                    }
                    B1 = B2;
                    b++;
                    B2 = I[x + dirs[b]];
                    if ((B2 < Im)) {
                        Scores[x] = 0;
                        return;
                    }
                    {
                        score -= A + B1;
                        state = 9;
                        break;
                    }
                    ;
                }
                if ((B1 >= Im)) {
                    Scores[x] = 0;
                    return;
                }
                if ((B2 >= Im)) {
                    Scores[x] = 0;
                    return;
                }
                B1 = B2;
                b++;
                B2 = I[x + dirs[b]];
                if ((B2 < Im)) {
                    score -= A + B1;
                    state = 2;
                    break;
                }
                ;
                if ((B2 > Ip)) {
                    score -= A + B1;
                    state = 7;
                    break;
                }
                ;
                {
                    Scores[x] = 0;
                    return;
                }
            case 2:
                if ((A > Ip)) {
                    Scores[x] = 0;
                    return;
                }
                B1 = B2;
                b++;
                B2 = I[x + dirs[b]];
                if ((A < Im)) {
                    if ((B2 > Ip)) {
                        Scores[x] = 0;
                        return;
                    }
                    {
                        score -= A + B1;
                        state = 4;
                        break;
                    }
                    ;
                }
                if ((B2 > Ip)) {
                    score -= A + B1;
                    state = 7;
                    break;
                }
                ;
                if ((B2 < Im)) {
                    score -= A + B1;
                    state = 2;
                    break;
                }
                ;
                {
                    Scores[x] = 0;
                    return;
                }
            case 3:
                if ((A < Im)) {
                    Scores[x] = 0;
                    return;
                }
                B1 = B2;
                b++;
                B2 = I[x + dirs[b]];
                if ((A > Ip)) {
                    if ((B2 < Im)) {
                        Scores[x] = 0;
                        return;
                    }
                    {
                        score -= A + B1;
                        state = 5;
                        break;
                    }
                    ;
                }
                if ((B2 > Ip)) {
                    score -= A + B1;
                    state = 3;
                    break;
                }
                ;
                if ((B2 < Im)) {
                    score -= A + B1;
                    state = 6;
                    break;
                }
                ;
                {
                    Scores[x] = 0;
                    return;
                }
            case 4:
                if ((A > Ip)) {
                    Scores[x] = 0;
                    return;
                }
                if ((A < Im)) {
                    B1 = B2;
                    b++;
                    B2 = I[x + dirs[b]];
                    if ((B2 > Ip)) {
                        Scores[x] = 0;
                        return;
                    }
                    {
                        score -= A + B1;
                        state = 1;
                        break;
                    }
                    ;
                }
                if ((B2 >= Im)) {
                    Scores[x] = 0;
                    return;
                }
                B1 = B2;
                b++;
                B2 = I[x + dirs[b]];
                if ((B2 < Im)) {
                    score -= A + B1;
                    state = 2;
                    break;
                }
                ;
                if ((B2 > Ip)) {
                    score -= A + B1;
                    state = 7;
                    break;
                }
                ;
                {
                    Scores[x] = 0;
                    return;
                }
            case 5:
                if ((A < Im)) {
                    Scores[x] = 0;
                    return;
                }
                if ((A > Ip)) {
                    B1 = B2;
                    b++;
                    B2 = I[x + dirs[b]];
                    if ((B2 < Im)) {
                        Scores[x] = 0;
                        return;
                    }
                    {
                        score -= A + B1;
                        state = 0;
                        break;
                    }
                    ;
                }
                if ((B2 <= Ip)) {
                    Scores[x] = 0;
                    return;
                }
                B1 = B2;
                b++;
                B2 = I[x + dirs[b]];
                if ((B2 > Ip)) {
                    score -= A + B1;
                    state = 3;
                    break;
                }
                ;
                if ((B2 < Im)) {
                    score -= A + B1;
                    state = 6;
                    break;
                }
                ;
                {
                    Scores[x] = 0;
                    return;
                }
            case 7:
                if ((A > Ip)) {
                    Scores[x] = 0;
                    return;
                }
                if ((A < Im)) {
                    Scores[x] = 0;
                    return;
                }
                B1 = B2;
                b++;
                B2 = I[x + dirs[b]];
                if ((B2 > Ip)) {
                    score -= A + B1;
                    state = 3;
                    break;
                }
                ;
                if ((B2 < Im)) {
                    score -= A + B1;
                    state = 6;
                    break;
                }
                ;
                {
                    Scores[x] = 0;
                    return;
                }
            case 6:
                if ((A > Ip)) {
                    Scores[x] = 0;
                    return;
                }
                if ((A < Im)) {
                    Scores[x] = 0;
                    return;
                }
                B1 = B2;
                b++;
                B2 = I[x + dirs[b]];
                if ((B2 < Im)) {
                    score -= A + B1;
                    state = 2;
                    break;
                }
                ;
                if ((B2 > Ip)) {
                    score -= A + B1;
                    state = 7;
                    break;
                }
                ;
                {
                    Scores[x] = 0;
                    return;
                }
            case 8:
                if ((A > Ip)) {
                    if ((B2 < Im)) {
                        Scores[x] = 0;
                        return;
                    }
                    B1 = B2;
                    b++;
                    B2 = I[x + dirs[b]];
                    if ((B2 < Im)) {
                        Scores[x] = 0;
                        return;
                    }
                    {
                        score -= A + B1;
                        state = 9;
                        break;
                    }
                    ;
                }
                if ((A < Im)) {
                    B1 = B2;
                    b++;
                    B2 = I[x + dirs[b]];
                    if ((B2 > Ip)) {
                        Scores[x] = 0;
                        return;
                    }
                    {
                        score -= A + B1;
                        state = 1;
                        break;
                    }
                    ;
                }
                {
                    Scores[x] = 0;
                    return;
                }
            case 9:
                if ((A < Im)) {
                    if ((B2 > Ip)) {
                        Scores[x] = 0;
                        return;
                    }
                    B1 = B2;
                    b++;
                    B2 = I[x + dirs[b]];
                    if ((B2 > Ip)) {
                        Scores[x] = 0;
                        return;
                    }
                    {
                        score -= A + B1;
                        state = 8;
                        break;
                    }
                    ;
                }
                if ((A > Ip)) {
                    B1 = B2;
                    b++;
                    B2 = I[x + dirs[b]];
                    if ((B2 < Im)) {
                        Scores[x] = 0;
                        return;
                    }
                    {
                        score -= A + B1;
                        state = 0;
                        break;
                    }
                    ;
                }
                {
                    Scores[x] = 0;
                    return;
                }
            default:
                break;
        }
    }
    Scores[x] = (score + dirs_nb * I[x]);
}
export class lev_table_t {
    dirs;
    dirs_count;
    scores;
    radius;
    constructor(w, h, r) {
        this.dirs = new Int32Array(1024);
        this.dirs_count = precompute_directions(w, this.dirs, r) | 0;
        this.scores = new Int32Array(w * h);
        this.radius = r | 0;
    }
}
//# sourceMappingURL=yape_utils.js.map