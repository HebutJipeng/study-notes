class triangle {
	constructor(tri1, tri2) {
		this.tri1 = tri1
		this.tri2 = tri2
	}

	intersection() {
		let minx = Math.max(this.tri1.x1, this.tri2.x1)
		let maxx = Math.min(this.tri1.x2, this.tri2.x2)
		let miny = Math.max(this.tri1.y1, this.tri2.y1)
		let maxy = Math.min(this.tri1.y2, this.tri2.y2)

		if (minx > maxx || miny > maxy) {
			return  -1
		} else {
			return (maxy - miny) * (maxx - minx)
		}
	}
}

/**
 * 测试用例1
 * 期望: 1
 * 输出: 1
 */

let t1 = {
	x1: 1,
	x2: 2,
	y1: 1,
	y2: 2,
}

let t2 = {
	x1: 1,
	x2: 3,
	y1: 1,
	y2: 3,
}

let test1 = new triangle(t1, t2)
console.log(test1.intersection())

/**
 * 测试用例2
 * 期望: -1
 * 输出: -1
 */

let t1 = {
	x1: -1,
	x2: 3,
	y1: 1,
	y2: -2,
}

let t2 = {
	x1: 1,
	x2: 3,
	y1: 2,
	y2: 3,
}

let test1 = new triangle(t1, t2)
console.log(test1.intersection())
