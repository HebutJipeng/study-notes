const queue = () => {
	const list = [];
	let index = 0;

	const next = () => {
		if (index >= list.length - 1) return;

		const cur = list[++index];
		cur(next);
	}

	const add = (...fn) => {
		list.push(...fn);
	}

	const run = (...args) => {
		const cur = list[index];
		typeof cur === 'function' && cur(next);
	}

	return {
		add,
		run,
	}
}

const async = (x) => {
	return (next) => {
		setTimeout(() => {
			console.log(x);
			next();
		}, 1000)
	}
}

const q = queue()
const funs = '123456'.split('').map(x => async(x))
q.add(...funs)
q.run()