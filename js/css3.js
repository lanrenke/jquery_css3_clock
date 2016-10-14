$(document).ready(function() {
	function time_set() {
		var circle_width = parseFloat($(".box").width());
		$("#time").css({
			"width": circle_width,
			"height": circle_width,
			"top": -circle_width
		});
		//时针
		var hour_width = 0.04 * circle_width;
		var hour_height = 6 * hour_width;
		var hour_top = (circle_width / 2) - hour_height;
		var hour_left = (circle_width - hour_width) / 2;
		$(".hour").css({
			"width": hour_width + "px",
			"height": hour_height + "px",
			"top": hour_top + "px",
			"left": hour_left + "px"
		});
		//分针
		var min_width = 0.02 * circle_width;
		var min_height = 20 * min_width;
		var min_top = (circle_width / 2) - min_height;
		var min_left = (circle_width - min_width) / 2;
		$(".min").css({
			"width": min_width + "px",
			"height": min_height + "px",
			"top": min_top + "px",
			"left": min_left + "px"
		});
		//秒针
		var second_width = 0.02 * circle_width;
		var second_height = 18 * second_width;
		var second_top = (circle_width / 2) - second_height;
		var second_left = (circle_width - second_width) / 2;
		$(".second").css({
			"width": second_width + "px",
			"height": second_height + "px",
			"top": second_top + "px",
			"left": second_left + "px"
		});
		//圆点
		var point_length = 0.06 * circle_width;
		var point_side = (circle_width - point_length) / 2;
		$(".point").css({
			"width": point_length + "px",
			"height": point_length + "px",
			"top": +point_side + "px",
			"left": point_side + "px"
		});
	}
	time_set();
	
	//监控
	$(window).resize(function() {
		time_set();
	});
	//时钟
	setInterval(function() {
		var time = new Date();
		var seconds = time.getSeconds();
		var min = time.getMinutes();
		var hours = time.getHours();
		var sdegree = seconds * 6;
		var mdegree = min * 6 + (seconds / 10);
		var hdegree = hours * 30 + (min / 2);
		var srotate = "rotate(" + sdegree + "deg)"
		var mrotate = "rotate(" + mdegree + "deg)"
		var hrotate = "rotate(" + hdegree + "deg)"
		$(".second").css({
			"-moz-transform": srotate,
			"-webkit-transform": srotate,
			"-ms-transform": srotate
		});
		$(".min").css({
			"-moz-transform": mrotate,
			"-webkit-transform": mrotate,
			"-ms-transform": mrotate
		});
		$(".hour").css({
			"-moz-transform": hrotate,
			"-webkit-transform": hrotate,
			"-ms-transform": hrotate
		});
	}, 1000);
});