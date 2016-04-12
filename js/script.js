$(document).ready(function(){
	
	$("#drivers").hover(function(){
	     $("#bod").removeClass('bg1').addClass('bg2');
	}, function(){
		$("#bod").removeClass('bg2').addClass('bg1');
	});

	$("#teams").hover(function(){
	     $("#bod").removeClass('bg1').addClass('bg3');
	}, function(){
		$("#bod").removeClass('bg3').addClass('bg1');
	});

	$("#races").hover(function(){
	     $("#bod").removeClass('bg1').addClass('bg4');
	}, function(){
		$("#bod").removeClass('bg4').addClass('bg1');
	});

	$("#slidediv").hide();

	$(window).load(function(){

	$("#toggle").click(function(){
		$("#slidediv").slideToggle(400);
	});
});
});


//Map

jQuery(function($) {
    // Asynchronously Load the map API 
    var script = document.createElement('script');
    script.src = "http://maps.googleapis.com/maps/api/js?sensor=falsee&callback=initialize";
    document.body.appendChild(script);
});

function initialize() {
    var map;
    var bounds = new google.maps.LatLngBounds();

    var mapOptions = {
        mapTypeId: 'roadmap',
        center: {lat: 50.334314, lng: 6.942625},
        zoom: 4
    };

                   
    // Display a map on the page
    map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
    // map.setTilt(45);
        
    // Multiple Markers
    var markers = [
        ['Nurburgring, Germany', 50.334314,6.942625],
        ['Silverstone, UK', 52.073485,-1.014696],
        ['Albert Park, Australia', -37.841483,144.952576],
        ['Sepang, Malaysia', 2.759773,101.731804],
        ['Shanghai, China', 31.339760,121.221622],
        ['Sakhir, Bahrain', 26.031875,50.512916],
        ['Barcelona, Spain', 41.568303,2.257358],
        ['Monte Carlo, Monaco', 43.734389,7.425394],
        ['Montreal, Canada', 45.500047, -73.582032],
        ['Budapest, Hungary', 47.581798, 19.251045],
        ['Spa, Belgian', 50.436939, 5.972774],
        ['Monza, Italy', 45.622032, 9.284773],
        ['Marina Bay, Singapore', 1.306143, 103.828166],
        ['Suzuka, Japan', 34.845836, 136.538958],
        ['Sochi, Russia', 43.409570, 39.968142],
        ['Austin, USA', 30.134864, -97.635921],
        ['Mexico City, Mexico', 19.404478, -99.090687],
        ['Sao Paulo, Brazil', -23.579507, -46.684765],
        ['Yas Marina, Abu Dhabi', 24.475100, 54.603911]
    ];
                        
    // Info Window Content
    var infoWindowContent = [
        ['<div class="info_content">' +
        '<h3>Nurburgring, Germany</h3>' +
        '<p>Nürburgring is a 150,000-capacity motorsports complex around the village of Nürburg, Rhineland-Palatinate, Germany.</p>' + '</div>'],
        ['<div class="info_content">' +
        '<h3>Silverstone, UK</h3>' +
        '<p>Silverstone is the current home of the British Grand Prix, which it first hosted in 1948. The 1950 British Grand Prix at Silverstone was the first race in the newly created World Championship of Drivers.</p>' +
        '</div>'],
        ['<div class="info_content">' +
        '<h3>Albert Park, Australia</h3>' +
        '<p> The Grand Prix is the oldest surviving motor racing competition held in Australia having been held 79 times since it was first run at Phillip Island in 1928.</p>' +
        '</div>'],
        ['<div class="info_content">' +
        '<h3>Sepang International Circuit, Malaysia</h3>' +
        '<p> First included in the Formula One World Championship in 1999, the current Malaysian Grand Prix is held at the Sepang International Circuit at Sepang, Malaysia. FIA-sanctioned racing in Malaysia has existed since the 1960s. Since 2011, the race has been officially known as the Malaysia Grand Prix</p>' +
        '</div>'],
        ['<div class="info_content">' +
        '<h3>Shanghai Audi International Circuit, China</h3>' +
        '<p> The Chinese Gran Prix is currently held at the Shanghai International Circuit, Jiading, Shanghai, designed by Hermann Tilke. When completed in 2004, it was the most expensive Formula One circuit facility, costing $240 million.</p>' +
        '</div>'],
        ['<div class="info_content">' +
        '<h3>Bahrain International Circuit, Bahrain</h3>' +
        '<p>The Bahrain International Circuit is a motorsport venue opened in 2004 and used for drag racing, GP2 and the annual Bahrain Grand Prix. The 2004 Grand Prix was the first held in the Middle East.</p>' +
        '</div>'],
        ['<div class="info_content">' +
        '<h3>Barcelona-Catalunya Circuit, Spain</h3>' +
        '<p>The Spanish Grand Prix is a Formula One race currently held at the Circuit de Barcelona-Catalunya in Barcelona. The race is one of the oldest in the world still contested, celebrating its centenary in 2013.</p>' +
        '</div>'],
        ['<div class="info_content">' +
        '<h3>Circuit de Monaco, Monaco</h3>' +
        '<p> Run since 1929, the Monaco Grand Prix is widely considered to be one of the most important and prestigious automobile races in the world and, alongside the Indianapolis 500 and the 24 Hours of Le Mans, it forms the Triple Crown of Motorsport. The circuit has been called "an exceptional location of glamour and prestige.</p>' +
        '</div>'],
        ['<div class="info_content">' +
        '<h3>‎Circuit Gilles Villeneuve, Canada</h3>' +
        '<p>The Canadian Grand Prix, is an annual auto race held in Canada since 1961.[1] It has been part of the Formula One World Championship since 1967. It was first staged at Mosport Park in Bowmanville, Ontario as a sports car event, before alternating between Mosport and Circuit Mont-Tremblant, Quebec after Formula One took over the event.</p>' +
        '</div>'],
        ['<div class="info_content">' +
        '<h3>‎Hungaroring, Hungary</h3>' +
        '<p>The Hungarian Grand Prix is a motor race held annually in Hungary. Since 1986, the race has been a round of the FIA Formula One World Championship.</p>' +
        '</div>'],
        ['<div class="info_content">' +
        '<h3>‎Circuit de Spa-Francorchamps, Belgian</h3>' +
        '<p>The first national race of Belgium was held in 1925 at the Spa regions race course, an area of the country that had been associated with motor sport since the very early years of racing.</p>' +
        '</div>'],
        ['<div class="info_content">' +
        '<h3>‎Autodromo Nazionale Monza, Italy</h3>' +
        '<p>The Italian Grand Prix was also one of the inaugural Formula One championship races in 1950, and has been held every year since then.</p>' +
        '</div>'],
        ['<div class="info_content">' +
        '<h3>‎Marina Bay Street Circuit, Singapore</h3>' +
        '<p>The event takes place in Singapore on the Marina Bay Street Circuit and was the inaugural F1 night race and the first street circuit in Asia.</p>' +
        '</div>'],
        ['<div class="info_content">' +
        '<h3>‎Suzuka Circuit, Japan</h3>' +
        '<p>Historically, Japan has been one of the last races of the season, and as such the Japanese Grand Prix has been the venue for many title-deciding races, with 13 World Champions being crowned over the 30 World Championship Japanese Grands Prix that have been hosted.</p>' +
        '</div>'],
        ['<div class="info_content">' +
        '<h3>‎Sochi Autodrom, Russia</h3>' +
        '<p>In 2010, it was officially announced that the Russian city of Sochi, which was also preparing to host the 2014 Winter Olympics, will host a new event on the F1 schedule beginning in the 2014 Formula One season under a seven-year deal.</p>' +
        '</div>'],
        ['<div class="info_content">' +
        '<h3>‎Circuit of the Americas, USA</h3>' +
        '<p>The race held since 1908, later became part of the Formula One World Championship. Over 44 editions, the race has been held at ten locations, since 2012 at the Circuit of the Americas in Austin, Texas.</p>' +
        '</div>'],
        ['<div class="info_content">' +
        '<h3>‎Autodromo Hermanos, Mexico</h3>' +
        '<p>It first appeared as a non-championship event in 1962 before being held as a championship event from 1963-1970 and 1986-1992. The Grand Prix is scheduled to return in 2015 at the Mexico City circuit.</p>' +
        '</div>'],
        ['<div class="info_content">' +
        '<h3>‎Autódromo José Carlos Pace, Brazil</h3>' +
        '<p>The Brazilian Grand Prix is a Formula One championship race which is currently held at the Autódromo José Carlos Pace in Interlagos neighborhood, Socorro district, São Paulo.</p>' +
        '</div>'],
        ['<div class="info_content">' +
        '<h3>Yas Marina‎, Abu Dhabi</h3>' +
        '<p>The Abu Dhabi Grand Prix is a Formula One race. It was announced in early 2007 at the Abu Dhabi F1 Festival in the United Arab Emirates. The first race took place on November 1, 2009, held at the Hermann Tilke designed Yas Marina Circuit.</p>' +
        '</div>']



    ];
        
    // Display multiple markers on a map
    var infoWindow = new google.maps.InfoWindow(), marker, i;
    
    // Loop through our array of markers & place each one on the map  
    for( i = 0; i < markers.length; i++ ) {
        var position = new google.maps.LatLng(markers[i][1], markers[i][2]);
        bounds.extend(position);
        marker = new google.maps.Marker({
            position: position,
            map: map,
            title: markers[i][0]
        });
        
        // Allow each marker to have an info window    
        google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
                infoWindow.setContent(infoWindowContent[i][0]);
                infoWindow.open(map, marker);
            }
        })(marker, i));
       // Automatically center the map fitting all markers on the screen
        // map.fitBounds(bounds);
    }
 
}

javascriptUrlsToIgnore="maps.googleapis.com"

$(document).ready(function() {
	$('.popup-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
			}
		}
	});
});


//Contact Form

function validateForm() {
    
    var name = document.forms["contact"]["name"].value;
    if (name == null || name == "") {
        document.getElementById("errorname").innerHTML = "Please Enter Your Name!";
        
    } else {
        document.getElementById("errorname").innerHTML = "";
    }

    var email = document.forms["contact"]["email"].value;
    if (email == null || email == "") {
        document.getElementById("erroremail").innerHTML = "Please Enter Your Email Address!";
    } else {
        document.getElementById("erroremail").innerHTML = "";
    }

    var message = document.forms["contact"]["message"].value;
    if (message == null || message == "") {
        document.getElementById("errormessage").innerHTML = "Please Enter A Message!";
    } else {
        document.getElementById("errormessage").innerHTML = "";
    }
    return false;
}






