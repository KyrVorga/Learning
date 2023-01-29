function Heat(initialTemp, desiredTemp, volume, specificHeat) {
	return (desiredTemp - initialTemp) * specificHeat * volume;
}

let energy = Heat(20, 2000, 2000, 0.5);
console.log(energy);

function Density(initialDensity, desiredDensity, volume, specificHeat) {
	return (1 - desiredDensity / initialDensity) * volume * specificHeat;
}

energy = Density(7000, 3500, 2000, 0.5);
console.log(energy);

function Density2(mass, changeOfDensity, specificHeat, changeInTemp) {
	return mass * changeOfDensity * specificHeat * changeInTemp;
}
console.log(Density2(4, 300, 1.7));

function calculateEnergy(mass, densityChange, specificHeat) {
	var energy = mass * densityChange * specificHeat;
	return energy;
}
energy = calculateEnergy(4, 300, 1.7);
console.log(energy);
