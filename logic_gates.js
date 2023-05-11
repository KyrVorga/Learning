function ANDGate(a, b) {
	if (a == 1 && b == 1) {
		return 1;
	} else {
		return 0;
	}
}

function ORGate(a, b) {
	if (a == 1 || b == 1) {
		return 1;
	} else {
		return 0;
	}
}

function ANDTable() {
	return truth_table;
}

function main() {
	ANDTable();
	ORTable();
}

main();
