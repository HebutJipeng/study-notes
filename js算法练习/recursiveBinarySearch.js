function recursive(array, value, leftPosition, rightPosition) {
    if (leftPosition > rightPosition) {
        return -1;
    }

    var middlePivot = Math.floor((leftPosition + rightPosition) / 2);

    if (middlePivot === value) {
        return middlePivot;
    } else if (middlePivot > value) {
        return recursive(array, value, leftPosition, middlePivot - 1);
    } else {
        return recursive(array, value, middlePivot + 1, rightPosition);
    }
}
