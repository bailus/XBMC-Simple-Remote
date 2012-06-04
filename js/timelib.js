
(function () {
	"use strict";
	
	var Time = function (time) {
		if (time) this.set(time);
	};
	Time.prototype.set = function (time) {
		this.hours = time.hours || 0;
		this.minutes = time.minutes || 0;
		this.seconds = time.seconds || 0;
		this.milliseconds = time.milliseconds || 0;	
		if (this.milliseconds >= 1000) {
			this.seconds += Math.floor(this.milliseconds/1000);
			this.milliseconds = this.milliseconds%1000;
		}
		if (this.seconds >= 60) {
			this.minutes += Math.floor(this.seconds/60);
			this.seconds = this.seconds%60;
		}
		if (this.minutes >= 60) {
			this.hours += Math.floor(this.minutes/60);
			this.minutes = this.minutes%60;
		}
	};
	Time.prototype.console = function () {
		console.dir({'hours':this.hours,'minutes':this.minutes,'seconds':this.seconds,'milliseconds':this.milliseconds});
	};
	Time.prototype.string = function () {
		var string = '';
		if (this.hours) string += this.hours + ':';
		string += (this.minutes < 10 ? '0'+this.minutes : this.minutes);
		string += ':';
		string += (this.seconds < 10 ? '0'+this.seconds : this.seconds);
		return string;
	};
	Time.prototype.toHours = function () {
		var t = (this.milliseconds || 0) * 3600 / 1000;
		t += (this.seconds || 0) * 3600;
		t += (this.minutes || 0) * 60;
		t += (this.hours || 0);
		return t;
	};
	Time.prototype.toMinutes = function () {
		var t = (this.milliseconds || 0) * 60 / 1000;
		t += (this.seconds || 0) * 60;
		t += (this.minutes || 0);
		t += (this.hours || 0) / 60;
		return t;
	};
	Time.prototype.toSeconds = function () {
		var t = (this.milliseconds || 0) / 1000;
		t += (this.seconds || 0);
		t += (this.minutes || 0) * 60;
		t += (this.hours || 0) * 3600;
		return t;
	};
	Time.prototype.toMilliseconds = function () {
		var t = (this.milliseconds || 0);
		t += (this.seconds || 0) * 1000;
		t += (this.minutes || 0) * 60000;
		t += (this.hours || 0) * 3600000;
		return t;
	};
	Time.prototype.toString = function () {
		var str = '',
		  doubleDigit = function (n) {
			return (n < 10 && n > -10 ? '0' : '')+Math.floor(n);
		  };
		if (this.hours) str += doubleDigit(this.hours) + ':';
		str += doubleDigit(this.minutes) + ':';
		str += doubleDigit(this.seconds);
		if (this.milliseconds) str += '.' + doubleDigit(this.milliseconds);
		return str;
	};

	var ms = 120381028379879;
	console.log(ms);
	var t = new Time({
		'milliseconds': ms
	});
	console.log(''+t);
	console.log('toHours',t.toHours());
	console.log('toMinutes',t.toMinutes());
	console.log('toSeconds',t.toSeconds());
	console.log('toMilliseconds',t.toMilliseconds());
	t.console();

})();





