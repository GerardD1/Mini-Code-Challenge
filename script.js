function logRectInfo(topLeft, bottomRight) {
    let width = bottomRight[0] - topLeft[0];
    let length = bottomRight[1] - topLeft[1];
    let area = length * width;
    let perimeter = 2 * (length + width);
    console.log(`The area is ${area}, and the perimeter is ${perimeter}.`);
}

logRectInfo([4,3], [7,5]);