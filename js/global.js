// random colour generator
$(document).ready(function() {
	var bwSwitch = 0;
	
	// $(".button").hover(function() {
	// 	$(this).css("filter", "invert(100%)");
	// }, function() {
	// 	$(this).css("filter", "invert(0%)");
	// });

	// $(".button").hover(function() {
	// 	$(this).css("color", $("body").css("background-color"));
	// 	$(this).css("background-color", $(this).css("border-color"));
	// }, function() {
	// 	$(this).css("color", $(this).css("border-color"));
	// 	$(this).css("background-color", $("body").css("background-color"));
	// });
	
	$(".box").hover(function() {
		$(this).css("transition", "all 0.3s ease");
		$(this).css("filter", "invert(100%)");
	}, function() {
		$(this).css("transition", "all 3s ease");
		$(this).css("filter", "invert(0%)");
	});

	function cycle(element, hexDigits) {
		$(".boxes").fadeOut(500);
		$(".color-bars").fadeIn(250);
		var hexDigits = new Array
        ("0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"); 

		function rgb2hex(rgb) {
	 		rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
	 		return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
		}
		function hex(x) {
 			 return isNaN(x) ? "00" : hexDigits[(x - x % 16) / 16] + hexDigits[x % 16];
 		}
		$(".hiders").fadeOut(250);
		element.css("transition", "all 3s linear");
		random($("body"));
		// $(".color-store").fadeIn(3000);
		rgbScale();
		setInterval(function() {
			// setInterval(function() {
			// 	$(".color-store").text(rgb2hex($("body").css("background-color")));
			// 	$(".color-store").css("color", $("body").css("background-color"));
			// }, 1);
			random($("body"));
			rgbScale();
			
		}, 3000);
	}

	function cycleBoxes(element) {
		element.css("transition", "all 3s linear");
		random(element);
		setInterval(function() {
			random(element);
		}, 3000);
	};

	function boxToBars() {
		setTimeout(function() {
			$(".boxes").fadeOut(250);
		}, 0);
		setTimeout(function() {
			$(".color-bars").fadeIn(250);
		}, 250);
	};
	function barsToBox() {
		setTimeout(function() {
			$(".color-bars").fadeOut(250);
		}, 0);
		setTimeout(function() {
			$(".boxes").fadeIn(250);
		}, 250);
	};
	function dark() {
		boxToBars();
		$(".bar").css("background-color", "rgba(255,255,255,0.4)");
		$(".bar").css("border-color", "transparent");
		$(".wrapper").css("background-color", "black");
	};

	function light() {
		boxToBars();
		$(".bar").css("background-color", "rgba(0,0,0,0.4)");
		$(".bar").css("border-color", "transparent");
		$(".wrapper").css("background-color", "white");
	};
	function web() {
		boxToBars();
		$(".bar").addClass("web-bar");
		$("body").attr("title", "web");
		cycle($(".web"));
	}
	function dance() {
		cycle();
	}

	$(".classic").click(function() {
		boxToBars();
		cycle($("body"));
	});
	$(".dark").click(function() {
		dark();
		cycle($("body"));
	});
	$(".light").click(function() {
		light();
		cycle($("body"));
	});
	$(".web").click(function() {
		web();
	});


	var keyCount = 2;
	var xCount = 0;
	var blurCount = 0;
	var blur = 0;
	$(document).keyup(function(e) {
		if (e.keyCode == 38) {
			keyCount += 0.5;
			$(".scale-indicator").text(keyCount + "x");
			indicator();
		}
		else if (e.keyCode == 37) {
			xCount -= 50;
			$(".color-bars").css("left", "" + xCount + "px");
			$(".scale-indicator").text(xCount + "px");
			indicator();
		}
		else if (e.keyCode == 39) {
			xCount += 50;
			$(".color-bars").css("left", "" + xCount + "px");
			$(".scale-indicator").text(xCount + "px");
			indicator();
		}
		else if (e.keyCode == 40) {
			keyCount -= 0.5;
			$(".scale-indicator").text(keyCount + "x");
			indicator();
		}
		
		else if (e.keyCode == 27) {
			//escape key
		}
		$(".color-bars").css("transform", "scale(" + keyCount + ")");
	});
	$(document).keydown(function(e) {
		$(".scale-indicator-wrapper").fadeIn(250);
		if (e.keyCode == 66) {	// increase blur
				$(".bar").css("filter", "blur(" + blur + "px)");
				$(".scale-indicator").text(blurCount + "% blur");
				if (blurCount < 100) {
					blurCount++;
				}
				else {
					blurCount = 100;
				}
				blur = blurCount / 15;
				console.log(blur);
		}
		if (e.keyCode == 86) {  // decrease blur
				$(".bar").css("filter", "blur(" + blur + "px)");
				$(".scale-indicator").text(blurCount + "% blur");
				if (blurCount > 0) {
					blurCount--;
				}
				else {
					blurCount = 0;
				}
				blur = blurCount / 15;
				console.log(blur);
		}
	});
	
	$(document).keyup(function(e) {
		$(".scale-indicator-wrapper").delay(750).fadeOut(250);
		$(".bar").css("transition", "all 3s ease");
	})
	function indicator() {
			setTimeout(function() {
				$(".scale-indicator-wrapper").fadeIn(200);
			}, 0);
			setTimeout(function() {
				$(".scale-indicator-wrapper").fadeOut(200);
			}, 600);
		};

	$(document).ready(function() {
		cycleBoxes($(".classic"));
		cycleBoxes($(".dark"));
		cycleBoxes($(".light"));
		cycleBoxes($(".web"));
	});


	function rgbScale() {
		var rgb = $("body").css("background-color");
		var isolate1 = rgb.split("rgb(");
		var reform = isolate1[0] + isolate1[1];
		var isolate2 = reform.split(")");
		var reform2 = isolate2[0] + isolate2[1];
		var isolate = reform2.split(", ");
		var r = isolate[0];
		var g = isolate[1];
		var b = isolate[2];
		// console.log(r  + " + " + g + " + " + b);
		$(".bar").css("opacity", "1");

		if (r < 20) {
			$(".r").css("width", "20px");
		}
		else {
			$(".r").css("width", r);
		}

		if (g < 20) {
			$(".g").css("width", "20px");
		}
		else {
			$(".g").css("width", g);
		}

		if (b < 20) {
			$(".b").css("width", "20px");
		}
		else {
			$(".b").css("width", b);
		}		
	};

	function random(element) {
		var hexBase = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
		var webSafe = ["#ffffff", "#c0c0c0", "808080", "00000", "ff0000", "800000", "ffff00", "808000", "00ff00", "008000", "00ffff", "008080", "0000ff", "000080", "ff00ff", "800080"];
		var hexCode = "#";
		var index = 0;
		if (element.attr("title") == "web") {
			index = Math.floor((Math.random() * webSafe.length));
			hexCode = "#" + webSafe[index];
		}
		else {
			for (var i = 0; i < 6; i++) {
				var segment = Math.floor((Math.random() * hexBase.length));
				hexCode += hexBase[segment];
				bwSwitch += segment;
				$(".color-store").attr("value", hexCode);
			}	
		}
		// $(".color-store").text(hexCode);
		element.css("background-color", hexCode);
		bw(element);
		// console.log(hexCode);
	}
	function bw(element) {
		if (bwSwitch < 48) {
			element.css("color", "#fff");
			$(".button").css("border-color", "#fff");
		}
		else {
			element.css("color", "#000");
		}
	}

	random($("body"));
	random($(".box"));
});
