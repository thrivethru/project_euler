// Project Euler
// Problem 19
// Counting Sundays

// You are given the following information, but you may prefer to do some research for yourself.

// 1 Jan 1900 was a Monday.
// Thirty days has September,
// April, June and November.
// All the rest have thirty-one,
// Saving February alone,
// Which has twenty-eight, rain or shine.
// And on leap years, twenty-nine.
// A leap year occurs on any year evenly divisible by 4, but not on a century unless it is divisible by 400.
// How many Sundays fell on the first of the month during the twentieth century (1 Jan 1901 to 31 Dec 2000)?

// 2000 is a leap year

// day = 0 // 1 Jan 1900 = Monday
// day % 7 === 0 // Monday
// day % 7 === 6 // Sunday

// day = 366 = 1 Jan 1901

function isSunday(day) {
	if (day % 7 === 6) return true;
	return false;
}

function isLeapYear(year) {
	if (year % 100 === 0) {
		if (year % 400 === 0) return true;
		return false;
	}
	if (year % 4 === 0) return true;
	return false;
}

function countSundays() {
	var day = 366;
	var sundays = 0;
	var daysPerMonth = [31,28,31,30,31,30,31,31,30,31,30,31];

	for (var year = 1901; year < 2001; year++) {
		if (isLeapYear(year)) daysPerMonth[1] = 29;
		for (var month = 0; month < 12; month++) {
			if (isSunday(day)) sundays++;
			day += daysPerMonth[month];
		}
		daysPerMonth[1] = 28;
	}
	console.log("There were " + sundays + " Sundays that fell on the first of the month during the twentieth century");
}

countSundays();