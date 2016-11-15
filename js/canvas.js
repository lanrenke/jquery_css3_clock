window.onload = function() {

	var canvas_1 = document.getElementById('canvas_1');
	var canvas_2 = document.getElementById('canvas_2');
	var canvas_3 = document.getElementById('canvas_3');
	var canvas_4 = document.getElementById('canvas_4');
	var canvas_5 = document.getElementById('canvas_5');
	var canvas_6 = document.getElementById('canvas_6');

	if(canvas_1.getContext) {
		var canvas_content_1 = canvas_1.getContext('2d');
		var canvas_content_2 = canvas_2.getContext('2d');
		var canvas_content_3 = canvas_3.getContext('2d');
		var canvas_content_4 = canvas_4.getContext('2d');
		var canvas_content_5 = canvas_5.getContext('2d');
		var canvas_content_6 = canvas_6.getContext('2d');

		canvas_content_1.fillStyle = "rgb(200,0,0)";
		canvas_content_1.fillRect(10, 10, 55, 50);

		canvas_content_1.fillStyle = "rgba(0,0, 200,0.5)";
		canvas_content_1.fillRect(30, 30, 55, 50);

		canvas_content_1.fillRect(80, 50, 100, 100); //绘制一个填充的矩形
		canvas_content_1.clearRect(100, 70, 60, 60); //清除指定矩形区域，让清除部分完全透明
		canvas_content_1.strokeRect(105, 75, 50, 50); //绘制一个矩形的边框

		//三角形
		canvas_content_2.beginPath();
		canvas_content_2.moveTo(75, 50);
		canvas_content_2.lineTo(100, 75);
		canvas_content_2.lineTo(100, 25);
		canvas_content_2.fill();

		//笑脸
		canvas_content_3.beginPath();
		canvas_content_3.arc(75, 75, 50, 0, Math.PI * 2, true); // 绘制
		canvas_content_3.moveTo(110, 75);
		canvas_content_3.arc(75, 75, 35, 0, Math.PI, false); // 口(顺时针)
		canvas_content_3.moveTo(65, 65);
		canvas_content_3.arc(60, 65, 5, 0, Math.PI * 2, true); // 左眼
		canvas_content_3.moveTo(95, 65);
		canvas_content_3.arc(90, 65, 5, 0, Math.PI * 2, true); // 右眼
		canvas_content_3.stroke();

		// 填充三角形
		canvas_content_4.beginPath();
		canvas_content_4.moveTo(25, 25);
		canvas_content_4.lineTo(105, 25);
		canvas_content_4.lineTo(25, 105);
		canvas_content_4.fill();

		// 描边三角形
		canvas_content_4.beginPath();
		canvas_content_4.moveTo(125.5, 125.5);
		canvas_content_4.lineTo(125.5, 45.5);
		canvas_content_4.lineTo(45.5, 125.5);
		canvas_content_4.closePath();
		canvas_content_4.stroke();

		canvas_content_4.beginPath();
		canvas_content_4.moveTo(185, 50);
		canvas_content_4.arc(175, 50, 10, 0, Math.PI, false);
		canvas_content_4.stroke();

		//圆形arc函数
		for(var i = 0; i < 4; i++) {
			for(var j = 0; j < 3; j++) {
				canvas_content_5.beginPath();
				var x = 25 + j * 50; // x 坐标值
				var y = 25 + i * 50; // y 坐标值
				var radius = 20; // 圆弧半径
				var startAngle = 0; // 开始点
				var endAngle = Math.PI + (Math.PI * j) / 2; // 结束点
				var anticlockwise = i % 2 == 0 ? false : true; // 顺时针或逆时针

				canvas_content_5.arc(x, y, radius, startAngle, endAngle, anticlockwise);

				if(i > 1) {
					canvas_content_5.fill();
				} else {
					canvas_content_5.stroke();
				}
			}
		}

		// 贝尔赛曲线
		canvas_content_6.beginPath();
		canvas_content_6.moveTo(75, 25);
		canvas_content_6.quadraticCurveTo(25, 25, 25, 62.5);
		canvas_content_6.quadraticCurveTo(25, 100, 50, 100);
		canvas_content_6.quadraticCurveTo(50, 120, 30, 125);
		canvas_content_6.quadraticCurveTo(60, 120, 65, 100);
		canvas_content_6.quadraticCurveTo(125, 100, 125, 62.5);
		canvas_content_6.quadraticCurveTo(125, 25, 75, 25);
		canvas_content_6.stroke();

	} else {
		alert("您的浏览器不支持canvas！");
	}

}