function swap(a, b) {
    b = a + b
    a = b - a
    b = b - a


    a += b
    b = a - b
    a = a - b


    [a, b] = [b, a]

    a ^= b
    b ^= a
    a ^= b
    
}