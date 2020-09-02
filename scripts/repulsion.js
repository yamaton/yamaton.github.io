"use strict";
var repulsion;
(function (repulsion) {
    repulsion.antiGravityManhattan = (src, tgt, coeff = 100) => {
        let g = coeff;
        let dx = utils.distHoriz(src.position, tgt.position);
        let dy = utils.distVerti(src.position, tgt.position);
        // characteristic size
        let charSize = 0.5 * (Math.sqrt(src.area) + Math.sqrt(tgt.area));
        let antiGravityMagX = (dx < 1.5 * charSize) ? g / (1000 + Math.pow(dx, 2)) : 0;
        let antiGravityMagY = (dy < 1.5 * charSize) ? g / (1000 + Math.pow(dy, 2)) : 0;
        let force = {
            x: antiGravityMagX,
            y: antiGravityMagY,
        };
        return force;
    };
    repulsion.antiGravityRanged = (src, tgt, coeff = 100, rangeFactor = 3.0) => {
        let d = utils.distEuclid(src.position, tgt.position);
        // characteristic size
        let charSize = 0.5 * (Math.sqrt(src.area) + Math.sqrt(tgt.area));
        let antiGravityMag = (d < rangeFactor * charSize) ? coeff / Math.pow(d, 2) : 0;
        let unitSrcToTgt = utils.unitVec(src.position, tgt.position);
        let force = {
            x: antiGravityMag * unitSrcToTgt.x,
            y: antiGravityMag * unitSrcToTgt.y,
        };
        return force;
    };
    repulsion.antiGravity = (src, tgt, coeff = 100) => {
        let d = utils.distEuclid(src.position, tgt.position);
        let antiGravityMag = coeff / Math.pow(d, 2);
        let unitSrcToTgt = utils.unitVec(src.position, tgt.position);
        let force = {
            x: antiGravityMag * unitSrcToTgt.x,
            y: antiGravityMag * unitSrcToTgt.y,
        };
        return force;
    };
})(repulsion || (repulsion = {}));
