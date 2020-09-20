const request = require("request");

url = "http://127.0.0.1";

const openPort = () => {
	window.open("C:ProgramData/SteelSeries/SteelSeries Engine 3/coreProps.json");
};

const sendGenericEvent = (eventName, handlers, dataValue) => {
	console.log("Sending generic event. Event Name is '" + eventName + "'.");

	var json = {
		game: this.gameName,
		event: eventName,
		handlers: handlers,
	};

	var _control = this;
	this.sendAjaxRequest(
		"/bind_game_event",
		json,
		function () {
			console.log("Updated event. Sending trigger command!");

			var json = {
				game: _control.gameName,
				event: eventName,
				data: {
					value: dataValue,
				},
			};

			_control.sendAjaxRequest(
				"/game_event",
				json,
				function () {
					console.log("Finished event update and trigger.");
				},
				function () {}
			);
		},
		function () {}
	);
};
const sendTextAnimation = () => {
	var handlers = [
		{
			"device-type": "screened",
			zone: "one",
			mode: "screen",
			datas: [
				{
					"has-text": true,
					suffix: "Watching",
					"length-millis": 500,
				},
				{
					"has-text": true,
					suffix: `${channel}`,
					"length-millis": 500,
					repeats: 20,
				},
			],
		},
	];

	var mouseScreenEventName = "MOUSE_SCREEN";

	this.sendGenericEvent(mouseScreenEventName, handlers, "");
};
