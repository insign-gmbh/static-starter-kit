$(document).ready(function() {
	if ($('span.replace')){
		$replace = $('span.replace');
		var verben = [
			"funktionale",
			"schöne",
			"schlanke",
			"intelligente",
			"innovative",
			"benutzerfreundliche",
			"überraschende",
			"freundliche",
			"neue",
			"komplexe",
			"einfache",
			"kleine",
			"grosse",
			"warme",
			"durchdachte",
			"verhaltene",
			"nutzbare",
			"starke",
			"spannende",
			"einladende",
			"sichere",
			"konkrete",
			"abstrakte",
			"bestechende",
			"fertige"
		];
		var i = 0;
		$replace.text(verben[i]);
		setInterval(function() {
			if (i < verben.length) {
				i++;
			} else {
				i = 0;
			}
			console.log(i);
			$replace.text(verben[i]);
		}, 3000);
	}
});

$(window).load(function() {
	$('.flexslider').flexslider();
});