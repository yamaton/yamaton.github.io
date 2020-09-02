"use strict";
// Minimum spanning tree
var graph;
(function (graph) {
    ;
    /** Kruskal for MST O(E log E)
     */
    graph.kruskal = (g) => {
        const uf = new unionfind.UnionFind(g.vertices);
        const sortedEdges = g.edges.sort((e1, e2) => e1.weight - e2.weight);
        let res = [];
        for (let e of sortedEdges) {
            let v1 = e.pair.first;
            let v2 = e.pair.second;
            if (!uf.areConnected(v1, v2)) {
                uf.connect(v1, v2);
                res.push(e);
            }
        }
        return res;
    };
})(graph || (graph = {}));
