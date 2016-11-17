window.onload = function() {

	var canvas_1 = document.getElementById('canvas_1');

	if(canvas_1.getContext) {
		var canvas_content_1 = canvas_1.getContext('2d');
		var canvas_content_2 = document.getElementById('canvas_2').getContext('2d');
		var canvas_content_3 = document.getElementById('canvas_3').getContext('2d');
		var canvas_content_4 = document.getElementById('canvas_4').getContext('2d');
		var canvas_content_5 = document.getElementById('canvas_5').getContext('2d');
		var canvas_content_6 = document.getElementById('canvas_6').getContext('2d');
		var canvas_content_7 = document.getElementById('canvas_7').getContext('2d');
		var canvas_content_8 = document.getElementById('canvas_8').getContext('2d');
		var canvas_content_9 = document.getElementById('canvas_9').getContext('2d');
		var canvas_content_10 = document.getElementById('canvas_10').getContext('2d');
		var canvas_content_11 = document.getElementById('canvas_11').getContext('2d');
		var canvas_content_12 = document.getElementById('canvas_12').getContext('2d');
		var canvas_content_13 = document.getElementById('canvas_13').getContext('2d');
		var canvas_content_14 = document.getElementById('canvas_14').getContext('2d');
		var canvas_content_15 = document.getElementById('canvas_15').getContext('2d');

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

		//色块
		for(var i = 0; i < 6; i++) {
			for(var j = 0; j < 6; j++) {
				canvas_content_7.fillStyle = 'rgb(' + Math.floor(255 - 42.5 * i) + ',' +
					Math.floor(255 - 42.5 * j) + ',0)';
				canvas_content_7.fillRect(j * 25, i * 25, 25, 25);
			}
		}

		//圆环色块
		for(var i = 0; i < 6; i++) {
			for(var j = 0; j < 6; j++) {
				canvas_content_8.strokeStyle = 'rgb(0,' + Math.floor(255 - 42.5 * i) + ',' +
					Math.floor(255 - 42.5 * j) + ')';
				canvas_content_8.beginPath();
				canvas_content_8.arc(12.5 + j * 25, 12.5 + i * 25, 10, 0, Math.PI * 2, true);
				canvas_content_8.stroke();
			}
		}

		// 画背景
		canvas_content_9.fillStyle = '#FD0';
		canvas_content_9.fillRect(0, 0, 75, 75);
		canvas_content_9.fillStyle = '#6C0';
		canvas_content_9.fillRect(75, 0, 75, 75);
		canvas_content_9.fillStyle = '#09F';
		canvas_content_9.fillRect(0, 75, 75, 75);
		canvas_content_9.fillStyle = '#F30';
		canvas_content_9.fillRect(75, 75, 75, 75);
		canvas_content_9.fillStyle = '#FFF';

		// 设置透明度值
		canvas_content_9.globalAlpha = 0.2;

		// 画半透明圆
		for(var i = 0; i < 7; i++) {
			canvas_content_9.beginPath();
			canvas_content_9.arc(75, 75, 10 + 10 * i, 0, Math.PI * 2, true);
			canvas_content_9.fill();
		}

		// 画背景
		canvas_content_9.fillStyle = 'rgb(255,221,0)';
		canvas_content_9.fillRect(150, 0, 150, 37.5);
		canvas_content_9.fillStyle = 'rgb(102,204,0)';
		canvas_content_9.fillRect(150, 37.5, 150, 37.5);
		canvas_content_9.fillStyle = 'rgb(0,153,255)';
		canvas_content_9.fillRect(150, 75, 150, 37.5);
		canvas_content_9.fillStyle = 'rgb(255,51,0)';
		canvas_content_9.fillRect(150, 112.5, 150, 37.5);

		// 画半透明矩形
		for(var i = 0; i < 10; i++) {
			//由于上面设置了透明度，所以效果不明显,写在一个canvas的弊端，设置了全局变量
			canvas_content_9.fillStyle = 'rgba(255,255,255,' + (i + 1) / 10 + ')';
			for(var j = 0; j < 4; j++) {
				canvas_content_9.fillRect(155 + i * 14, 5 + j * 37.5, 14, 27.5);
			}
		}

		var canvas_img = new Image();
		canvas_img.src = 'img/你的名字11.png';
		canvas_img.onload = function() {

			var img = canvas_content_10.createPattern(canvas_img, 'no-repeat');
			canvas_content_10.fillStyle = img;
			//			canvas_content_10.fillRect(0,0,100,100);
			canvas_content_10.drawImage(canvas_img, 0, 0);
		}

		//渐变
		var lingrad = canvas_content_11.createLinearGradient(0, 0, 0, 150);
		lingrad.addColorStop(0, '#00ABEB');
		lingrad.addColorStop(0.5, '#fff');

		var lingrad2 = canvas_content_11.createLinearGradient(0, 50, 0, 95);
		lingrad2.addColorStop(0.5, '#000');
		lingrad2.addColorStop(1, 'rgba(0,0,0,0)');

		canvas_content_11.fillStyle = lingrad;
		canvas_content_11.strokeStyle = lingrad2;

		canvas_content_11.fillRect(10, 10, 130, 130);
		canvas_content_11.strokeRect(50, 50, 50, 50);

		//sava和restore函数
		canvas_content_12.fillRect(0, 0, 150, 150); // 使用默认设置绘制一个矩形
		canvas_content_12.save(); // 保存默认状态

		canvas_content_12.fillStyle = '#09F' // 在原有配置基础上做改变
		canvas_content_12.fillRect(15, 15, 120, 120); // 使用新的设置绘制一个矩形

		canvas_content_12.save(); // 保存当前状态
		canvas_content_12.fillStyle = '#FFF' // 再次改变配置
		canvas_content_12.globalAlpha = 0.5;
		canvas_content_12.fillRect(30, 30, 90, 90); // 使用新的配置绘制一个矩形

		canvas_content_12.restore(); // 重新加载之前的状态
		canvas_content_12.fillRect(45, 45, 60, 60); // 使用上一次的配置绘制一个矩形

		canvas_content_12.restore(); // 加载默认配置
		canvas_content_12.fillRect(60, 60, 30, 30); // 使用加载的配置绘制一个矩形

		//translate
		canvas_content_13.fillRect(0, 0, 300, 200);
		for(var i = 0; i < 3; i++) {
			for(var j = 0; j < 3; j++) {
				canvas_content_13.save();
				canvas_content_13.strokeStyle = "#9CFF00";
				canvas_content_13.translate(50 + j * 100, 50 + i * 100);
				drawSpirograph(canvas_content_13, 20 * (j + 2) / (j + 1), -8 * (i + 3) / (i + 1), 10);
				canvas_content_13.restore();
			}
		}

		function drawSpirograph(ctx, R, r, O) {
			var x1 = R - O;
			var y1 = 0;
			var i = 1;
			ctx.beginPath();
			ctx.moveTo(x1, y1);
			do {
				if(i > 20000) break;
				//这里的函数，还不懂
				var x2 = (R + r) * Math.cos(i * Math.PI / 72) - (r + O) * Math.cos(((R + r) / r) * (i * Math.PI / 72))
				var y2 = (R + r) * Math.sin(i * Math.PI / 72) - (r + O) * Math.sin(((R + r) / r) * (i * Math.PI / 72))
				ctx.lineTo(x2, y2);
				x1 = x2;
				y1 = y2;
				i++;
			} while (x2 != R - O && y2 != 0);
			ctx.stroke();
		}

		//圆形斑点
		canvas_content_14.translate(75, 75);

		for(var i = 1; i < 6; i++) { // Loop through rings (from inside to out)
			canvas_content_14.save();
			canvas_content_14.fillStyle = 'rgb(' + (51 * i) + ',' + (255 - 51 * i) + ',255)';

			for(var j = 0; j < i * 6; j++) { // draw individual dots
				//旋转角度这里 Math.PI*2就是整一个圆的大小，除于多少个圆点，这样就可以对应的旋转多少角度。
				canvas_content_14.rotate(Math.PI * 2 / (i * 6));
				canvas_content_14.beginPath();
				canvas_content_14.arc(0, i * 12.5, 5, 0, Math.PI * 2, true);
				canvas_content_14.fill();
			}

			canvas_content_14.restore();
		}

		//动画
		var sun = new Image();
		var moon = new Image();
		var earth = new Image();

		function init() {
			sun.src = 'https://mdn.mozillademos.org/files/1456/Canvas_sun.png';
			moon.src = 'https://mdn.mozillademos.org/files/1443/Canvas_moon.png';
			earth.src = 'https://mdn.mozillademos.org/files/1429/Canvas_earth.png';
			window.requestAnimationFrame(draw);
		}

		function draw() {

			canvas_content_15.globalCompositeOperation = 'destination-over';
			canvas_content_15.clearRect(0, 0, 150, 150); // clear canvas

			canvas_content_15.fillStyle = 'rgba(0,0,0,0.4)';
			canvas_content_15.strokeStyle = 'rgba(0,153,255,0.4)';
			canvas_content_15.save();
			canvas_content_15.translate(75, 75);

			// Earth
			var time = new Date();
			canvas_content_15.rotate(((2 * Math.PI) / 60) * time.getSeconds() + ((2 * Math.PI) / 60000) * time.getMilliseconds());
			canvas_content_15.translate(52.5, 0);
			canvas_content_15.fillRect(0, -6, 12, 30); // Shadow
			canvas_content_15.drawImage(earth, -12, -12);

			// Moon
			canvas_content_15.save();
			canvas_content_15.rotate(((2 * Math.PI) / 6) * time.getSeconds() + ((2 * Math.PI) / 6000) * time.getMilliseconds());
			canvas_content_15.translate(0, 28.5);
			canvas_content_15.drawImage(moon, -1.525, -1.525);
			canvas_content_15.restore();

			canvas_content_15.restore();

			canvas_content_15.beginPath();
			canvas_content_15.arc(75, 75, 52.5, 0, Math.PI * 2, false); // Earth orbit
			canvas_content_15.stroke();

			canvas_content_15.drawImage(sun, 0, 0, 150, 150);

			window.requestAnimationFrame(draw);
		}
		init();

	} else {
		alert("您的浏览器不支持canvas！");
	}

}