export default class Timer {
	constructor() {
		this.timer = {};
		this.setListeners();
	}

	startTimer() {
		chrome.alarms.clearAll();
		chrome.alarms.create("peaceful-alarm", {delayInMinutes: 1});
	}
	
	setListeners() {
		

		chrome.alarms.onAlarms.addListener((alarm) => {
			chrome.notifications.create("alarmNotification", {type: 'basic', message: "Your alarm is up" });
			chrome.alarms.clearAll();
		});
	}
}
