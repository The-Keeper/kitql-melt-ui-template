/**
 * Just a quick hacked together class to make it possible to subscribe to counter updates one at a
 * time to work with the async iterators. There's almost certainly a better way of doing this, and
 * in production you would probably subscribe to some sort of message queue or something.
 */
export class Counter {
	public value: number = 0;
	private listeners: ((value: number) => void)[] = [];

	constructor(public id: string) {}

	public increment(amount = 1) {
		this.setValue(this.value + amount);
	}

	public toJSON() {
		return { id: this.id, value: this.value };
	}

	public change(): Promise<number> {
		return new Promise((resolve) => {
			this.listeners.push(resolve);
		});
	}

	private setValue(value: number) {
		this.value = value;
		this.notifyListeners(value);
	}

	private notifyListeners(value: number) {
		const listeners = this.listeners;
		this.listeners = [];
		for (let listener of listeners) {
			listener(value);
		}
	}
}

export const counters = new Map<string, Counter>();
export function getCounter(id: string): Counter {
	let counter = counters.get(id);
	if (!counter) {
		counter = new Counter(id);
		counters.set(id, counter);
	}
	return counter;
}
