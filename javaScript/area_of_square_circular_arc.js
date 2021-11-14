function squareArea(length) {
    var radius = 2 * length / Math.PI;
    var area = radius * radius;
    return Math.round(area * 100) / 100;
}