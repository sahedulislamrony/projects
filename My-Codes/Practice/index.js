const game = (() => {
	"strict mode";

	const box = document.getElementById("box");
	const msg = document.getElementById("msg");
	const mov = document.getElementById("moves");
	const tStat = document.getElementById("time");
	const pBtn = document.getElementById("pauseBtn");
	const rBtn = document.getElementById("resumeBtn");
	const css = document.getElementById("tiles").sheet;

	let dim;
	let imageUrl;
	let gridMap;
	let empty;
	let moveCount = 0;
	let lastMovedTile;
	let moveDisabled;

	const timer = {
		savedTime: new Date(0), // private
		t: new Date(0), // private
		get time() {
			return this.t.getTime();
		},
		set time(val) {
			this.t.setTime(val);
			tStat.innerHTML = `${this.t.getUTCMinutes()}:`.padStart(3, "0");
			tStat.innerHTML += `${this.t.getUTCSeconds()}`.padStart(2, "0");
		},
		startTime: null, // private
		get started() {
			return this.startTime instanceof Date;
		},
		reset() {
			// reset is used only in func start
			this.time = 0;
			this.savedTime.setTime(0);
			this.startTime = null;
			clearTimeout(this.tickToken);
		},
		tickToken: null, // private
		// dont use "this" in the following members
		tick() {
			if (timer.started === false) timer.startTime = new Date();
			else
				timer.time =
					new Date().getTime() -
					timer.startTime.getTime() +
					timer.savedTime.getTime();
			timer.tickToken = setTimeout(timer.tick, 1000);
		},
		pause() {
			if (timer.started === true) {
				clearTimeout(timer.tickToken);
				timer.time =
					new Date().getTime() -
					timer.startTime.getTime() +
					timer.savedTime.getTime();
				timer.savedTime.setTime(timer.time);
				timer.startTime = null;

				moveDisabled = true;
				box.style.display = "none";
				pBtn.style.display = "none";
				rBtn.style.display = "block";
				msg.innerHTML = "বিরতি";
			}
		},
		resume() {
			if (timer.started === false) {
				timer.tick();
				moveDisabled = false;
				box.style.display = "grid";
				pBtn.style.display = "block";
				rBtn.style.display = "none";
				msg.innerHTML = "";
			}
		},
	};

	const setImage = (url) => {
		imageUrl = url;
		css.rules[0].style.backgroundImage = `url(${url})`;
	};

	const moveTile = (el) => {
		const parseGridArea = (s) => {
			const [y, x] = s.split("/", 2);
			return [parseInt(x, 10), parseInt(y, 10)];
		};

		const [x, y] = parseGridArea(el.style.gridArea);

		const xy = `${empty.y}/${empty.x}`;
		el.style.gridArea = xy;
		gridMap[xy] = el;
		empty = { x, y };
		delete gridMap[`${y}/${x}`];

		// Return true if all tiles are in correct position
		for (let i = 0; i < box.children.length; i += 1) {
			const [p, q] = parseGridArea(box.children[i].style.gridArea);
			const [m, n] = parseGridArea(box.children[i].dataset.xy);
			if (p !== m || q !== n) return false;
		}
		return true;
	};

	const commitMove = (el) => {
		if (moveDisabled === true) return false;
		if (timer.started === false) {
			timer.tick();
			pBtn.style.display = "block";
		}
		const result = moveTile(el);
		if (lastMovedTile === el) {
			moveCount -= 1;
			lastMovedTile = null;
		} else {
			lastMovedTile = el;
			moveCount += 1;
		}
		mov.innerHTML = moveCount;
		return result;
	};

	const moveTileByDir = (dir) => {
		const { x: ex, y: ey } = empty;
		const m = (x, y) => commitMove(gridMap[`${y}/${x}`]);
		switch (dir) {
			case "Up":
				if (ey < dim) return m(ex, ey + 1);
				throw new Error(dir);
			case "Down":
				if (ey > 1) return m(ex, ey - 1);
				throw new Error(dir);
			case "Left":
				if (ex < dim) return m(ex + 1, ey);
				throw new Error(dir);
			case "Right":
				if (ex > 1) return m(ex - 1, ey);
				throw new Error(dir);
			default:
				throw new Error("Invalid direction");
		}
	};

	const refreshTiles = () => {
		if (dim) {
			const l = box.children[0].clientWidth;
			css.rules[0].style.backgroundSize = `${l * dim}px`;

			for (let i = 0; i < box.children.length; i += 1)
				box.children[i].style.backgroundPosition = `top ${
					-l * Math.floor(i / dim)
				}px left ${-l * (i % dim)}px`;
		}
	};

	const win = () => {
		box.innerHTML = "";
		box.style.backgroundImage = `url(${imageUrl})`;
		moveDisabled = true;
		clearTimeout(timer.tickToken);
		pBtn.style.display = "none";
		rBtn.style.display = "none";
	};

	window.addEventListener("keydown", ({ code }) => {
		try {
			if (moveTileByDir(code.slice(5))) win();
		} catch (err) {
			// do nothing
		}
	});
	window.addEventListener("resize", refreshTiles);

	const setDim = (d) => {
		dim = d;
		box.style.gridTemplate = `repeat(${d}, 1fr) / repeat(${d}, 1fr)`;
		box.innerHTML = "";

		function tileClickHandler() {
			const [y, x] = this.style.gridArea.split("/", 2);
			if ((Math.abs(x - empty.x) === 1) !== (Math.abs(y - empty.y) === 1))
				if (commitMove(this)) win();
		}

		const createTile = (x, y) => {
			const el = document.createElement("div");
			const xy = `${y}/${x}`;
			gridMap[xy] = el;
			el.style.gridArea = xy;
			el.dataset.xy = xy;
			el.addEventListener("click", tileClickHandler);
			box.append(el);
		};

		gridMap = Object.create(null);
		for (let j = 1; j < d; j += 1)
			for (let i = 1; i <= d; i += 1) createTile(i, j);
		for (let i = 1; i < d; i += 1) createTile(i, d);
		empty = { x: d, y: d };
		refreshTiles();
	};

	const start = (dimention = 4) => {
		moveDisabled = false;
		box.style.display = "grid";
		pBtn.style.display = "none";
		rBtn.style.display = "none";
		box.style.backgroundImage = "unset";
		msg.innerHTML = "";
		timer.reset();

		setDim(dimention);
		const gen = () => {
			/* Fisher–Yates shuffle */
			const l = dimention ** 2,
				x = new Uint8Array(l);
			for (let m = l; m > 0; ) {
				const i = Math.floor(Math.random() * m--);
				[x[m], x[i]] = [x[i] || i, x[m] || m];
			}
			/* Parity Check */
			const m = l - 1;
			let parity = 0,
				row = 0,
				blankRow = 0,
				ep = 0;
			for (let i = 0; i < l; i += 1) {
				if (i % dimention === 0) row += 1;
				if (x[i] === m) {
					blankRow = row;
					ep = i;
					continue;
				}
				for (let j = i + 1; j < l; j++)
					if (x[i] > x[j] && x[j] != m) parity += 1;
			}
			/* If not solvable */
			if ((parity & 1) !== (dimention & 1 ? 0 : blankRow & 1)) {
				let a, b;
				while ((a = (Math.random() * m) | 0) === ep || (b = a + 1) === ep);
				[x[a], x[b]] = [x[b], x[a]];
			}
			/* Endif */
			return x;
		};
		gen().forEach((i, p) => {
			const el = box.children.item(i);
			const [x, y] = [(p % dimention) + 1, ((p / dimention) | 0) + 1];
			if (el === null) {
				empty = { x, y };
				delete gridMap[`${y}/${x}`];
			} else {
				const xy = `${y}/${x}`;
				el.style.gridArea = xy;
				gridMap[xy] = el;
			}
		});
		moveCount = 0;
		mov.innerHTML = moveCount;
	};
	return {
		setImage,
		start,
		moveTileByDir,
		pause: timer.pause,
		resume: timer.resume,
	};
})();

game.setImage("/images/elements/H.jpg");
game.start();
