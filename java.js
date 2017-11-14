"use strict";

function startGame() {
	myGameArea.start();
	draw();
}

var myGameArea = {
	canvas : document.createElement("canvas"),
	start : function() {
		this.canvas.width = 480;
		this.canvas.height = 480;
		this.context = this.canvas.getContext("2d");
		document.body.insertBefore(this.canvas, document.body.childNodes[0]);
	}
};

function draw() {
	var canvas = document.getElementsByTagName('canvas')[0];
		if (canvas.getContext) {
			var ctx = canvas.getContext("2d");

			ctx.beginPath();
			ctx.moveTo(25, 25);
			ctx.line(105, 25);
			ctx.lineTo(25, 105);
			ctx.Fill();
		}
}