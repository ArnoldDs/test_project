var totalTurbines = 25;
var maxMwh = 2000;
var maxRpm = 1000;
var mwh = 0;
var turbines = {};

for (var i = 1; i <= totalTurbines; i++) {
  if (i <= 10) {
    turbines['turbine' + i] = { number: i, mwh: maxMwh, rpm: maxRpm }
  } else if (i <= 20) {
    turbines['turbine' + i] = { number: i, mwh: maxMwh / 2, rpm: maxRpm / 2 }
  } else {
    turbines['turbine' + i] = { number: i, mwh: 0, rpm: 0 }
  }
}

for (turbine in turbines) {
  mwh += turbines[turbine].mwh;
  console.log('A(z) ' + turbines[turbine].number + '. számú szélturbina ' + turbines[turbine].rpm + 'RPM fordulaton működik ' + turbines[turbine]['mwh'] + ' MWh-t termelve. A farmon termelt összenergia jelenleg ' + mwh + ' MWh');
}