"use strict";
var utils;
(function (utils) {
    utils.arrMax = (xs) => xs.reduce((acc, x) => Math.max(acc, x), -Infinity);
    utils.arrMin = (xs) => xs.reduce((acc, x) => Math.min(acc, x), Infinity);
    utils.arrSum = (xs) => xs.reduce((acc, x) => acc + x, 0);
    utils.arrMean = (xs) => utils.arrSum(xs) / xs.length;
    const arrMetaBy = (xs, f, reduce) => {
        let ys = xs.map(f);
        let ymax = reduce(ys);
        let res = Array();
        for (let i in xs) {
            if (ys[i] == ymax) {
                res.push(xs[i]);
            }
        }
        return res;
    };
    utils.arrMaxBy = ({ xs, f }) => {
        return arrMetaBy(xs, f, utils.arrMax);
    };
    utils.arrMinBy = ({ xs, f }) => {
        return arrMetaBy(xs, f, utils.arrMin);
    };
    utils.vectorMean = (vec) => {
        let x = utils.arrMean(vec.map(v => v.x));
        let y = utils.arrMean(vec.map(v => v.y));
        return { x: x, y: y };
    };
    const closestPointDirMeta = (xs, ref, f) => {
        let minDist = Infinity;
        let res = [];
        for (let p of xs) {
            let d = Math.abs(f(p) - ref);
            if (d == minDist) {
                res.push(p);
            }
            else if (d < minDist) {
                minDist = d;
                res = [p];
            }
        }
        return utils.vectorMean(res);
    };
    utils.closestPointDirX = (xs, ref) => {
        return closestPointDirMeta(xs, ref, p => p.x);
    };
    utils.closestPointDirY = (xs, ref) => {
        return closestPointDirMeta(xs, ref, p => p.y);
    };
    utils.rightmostPoint = (points) => {
        return utils.vectorMean(utils.arrMaxBy({ xs: points, f: p => p.x }));
    };
    utils.leftmostPoint = (points) => {
        return utils.vectorMean(utils.arrMinBy({ xs: points, f: p => p.x }));
    };
    utils.topmostPoint = (points) => {
        return utils.vectorMean(utils.arrMinBy({ xs: points, f: p => p.y }));
    };
    utils.bottommostPoint = (points) => {
        return utils.vectorMean(utils.arrMaxBy({ xs: points, f: p => p.y }));
    };
    utils.distHoriz = (pointA, pointB) => {
        return Math.abs(pointA.x - pointB.x);
    };
    utils.distVerti = (pointA, pointB) => {
        return Math.abs(pointA.y - pointB.y);
    };
    utils.distEuclid = (pointA, pointB) => {
        return Math.hypot(pointA.x - pointB.x, pointA.y - pointB.y);
    };
    const cloestPointMeta = (body1, body2, edgeA, edgeB, distFunc) => {
        let one1 = edgeA(body1.vertices);
        let another1 = edgeB(body1.vertices);
        let one2 = edgeA(body2.vertices);
        let another2 = edgeB(body2.vertices);
        let res = [one1, another1, Infinity];
        let dist = Infinity;
        for (let p1 of [one1, another1]) {
            for (let p2 of [one2, another2]) {
                let d = distFunc(p1, p2);
                if (d < dist) {
                    dist = d;
                    res = [p1, p2, dist];
                }
            }
        }
        return res;
    };
    utils.cloestPointPairX = (body1, body2) => {
        return cloestPointMeta(body1, body2, utils.leftmostPoint, utils.rightmostPoint, utils.distHoriz);
    };
    utils.cloestPointPairY = (body1, body2) => {
        return cloestPointMeta(body1, body2, utils.topmostPoint, utils.bottommostPoint, utils.distVerti);
    };
    utils.range = (size) => {
        size = Math.floor(size);
        return [...Array(size).keys()];
    };
    utils.randRange = (lo, hi, unit = 1) => {
        let a = Math.floor(lo);
        let b = Math.floor(hi);
        return a + Math.floor(Math.random() * (b - a) / unit) * unit;
    };
    // https://stackoverflow.com/questions/25582882/javascript-math-random-normal-distribution-gaussian-bell-curve
    utils.randn = () => {
        let u = 0;
        let v = 0;
        while (u === 0)
            u = Math.random(); //Converting [0,1) to (0,1)
        while (v === 0)
            v = Math.random();
        let num = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
        num = num / 10.0 + 0.5; // Translate to 0 -> 1
        if (num > 1 || num < 0)
            return utils.randn(); // resample between 0 and 1
        return num - 0.5;
    };
    utils.unitVec = (from, to) => {
        let d = utils.distEuclid(from, to);
        return {
            x: (to.x - from.x) / d,
            y: (to.y - from.y) / d,
        };
    };
    utils.normalize = (v) => {
        let norm = Math.hypot(v.x, v.y);
        return {
            x: v.x / norm,
            y: v.y / norm,
        };
    };
    utils.negate = (v) => {
        return { x: -v.x, y: -v.y };
    };
    utils.makeUnorderedPair = (a, b) => {
        if (b < a) {
            [a, b] = [b, a];
        }
        return { first: a, second: b };
    };
    utils.getWidth = (block) => {
        let xs = block.vertices.map(v => v.x);
        return utils.arrMax(xs) - utils.arrMin(xs);
    };
    utils.getHeight = (block) => {
        let ys = block.vertices.map(v => v.y);
        return utils.arrMax(ys) - utils.arrMin(ys);
    };
    utils.areSameHeight = (foo, bar) => {
        return utils.getHeight(foo) == utils.getHeight(bar);
    };
    utils.areSameWidth = (foo, bar) => {
        return utils.getWidth(foo) == utils.getWidth(bar);
    };
})(utils || (utils = {}));
