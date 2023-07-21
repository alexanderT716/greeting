// sorts input array from least to greatest
function sortArray (array) {
    let sorted = array.sort((x, y) => {
        return x -y;
});
    return sorted;
}

