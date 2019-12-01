$(function() {
	var video = $("#video");
	video = video.get(0);

	var changeBtn = $("#change");
	$(document).on("click", "#change", function() {
		if(changeBtn.hasClass("play")) {
			changeBtn.removeClass("play");
			changeBtn.addClass("pause");
		} else {
			changeBtn.removeClass("pause");
			changeBtn.addClass("play");
		}
	})

	$(document).on("click", "#change.play", function() {
		video.play();
	});

	$(document).on("click", "#change.pause", function() {
		video.pause();
	});

	$("#mute").on("click", function() {
		video.muted = video.muted ? false : true;
	});

	
	// シークバー
	video.addEventListener("timeupdate", seekbar, false);
	
	function seekbar() {
		// 動画全体の時間を取得（秒）
		var fullTime = video.duration;
		var now = video.currentTime;
		// 動画全体に対する現在の位置
		var setPos = (now / fullTime) * 100;
		
		$("#currentTime").css({"width": setPos + "px"});
		
		var seekbar = $("#seekbar")[0];
		seekbar.value = setPos;
	}
	
	var seekbar = $("#seekbar")[0];
	seekbar.addEventListener("change", function() {
		video.currentTime = seekbar.value;
	});
	
	
	//全画面実行
	var fullscreen = document.getElementById("fullscreen");
	var videoContainer = document.getElementById("videoContainer");
	var fullScreenEnabled = !!(document.fullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled || document.webkitSupportsFullscreen || document.webkitFullscreenEnabled);
	
	if(!fullScreenEnabled) {
		fullscreen.style.display = "none";
	}
	fullscreen.addEventListener("click", function(e) {
		handleFullScreen();
	});
	var isFullScreen = function() {
		return !!(document.fullscreen || document.webkitIsFullScreen || document.mozFullScreen || document.msFullscreenElement || document.fullscreenElement);
	}
	var setFullScreenData = function(state) {
		videoContainer.setAttribute("data-fullscreen", !!state)
	}
	var handleFullScreen = function() {
		if(isFullScreen()) {
			if(document.exitFullscreen) document.exitFullscreen();
			else if (document.mozCancelFullScreen) document.mozCancelFullScreen();
			else if (document.webkitCancelFullScreen) document.webkitCancelFullScreen();
			else if (document.msExitFullscreen) document.msExitFullscreen();

		} else {
			if(videoContainer.requestFullScreen) videoContainer.requestFullscreen();
			else if (videoContainer.mozRequestFullScreen) videoContainer.mozRequestFullScreen();
			else if (videoContainer.webkitRequestFullScreen) videoContainer.webkitRequestFullScreen();
			else if (videoContainer.msRequestFullscreen) videoContainer.msRequestFullscreen();
		}
	}
	document.addEventListener('fullscreenchange', function (e) {
		setFullScreenData(!!(document.fullScreen || document.fullscreenElement));
	});
	document.addEventListener('webkitfullscreenchange', function () {
		setFullScreenData(!!document.webkitIsFullScreen);
	});
	document.addEventListener('mozfullscreenchange', function () {
		setFullScreenData(!!document.mozFullScreen);
	});
	document.addEventListener('msfullscreenchange', function () {
		setFullScreenData(!!document.msFullscreenElement);
	});

});