

setTimeout(function(){

  document.getElementById("preloader").style.display="none";
}, 1500);
function showMore() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("show");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

// Get the modal



function popupForm(){
    
    document.getElementsByTagName("nav")[0].style.WebkitFilter = 'blur(4px)';
    document.getElementsByTagName("nav")[0].style.filter= 'blur(4px)';
    
    document.getElementsByClassName("jumbotron")[0].style.WebkitFilter = 'blur(4px)';
    document.getElementsByClassName("jumbotron")[0].style.filter= 'blur(4px)';
    
    document.getElementsByClassName("container")[0].style.WebkitFilter = 'blur(4px)';
    document.getElementsByClassName("container")[0].style.filter= 'blur(4px)';
    
    document.getElementsByClassName("footer-basic")[0].style.WebkitFilter = 'blur(4px)';
    
    document.getElementsByClassName("footer-baisc")[0].style.filter= 'blur(4px)';
    
    document.getElementsByTagName("section")[0].style.WebkitFilter = 'blur(4px)';
    document.getElementsByTagName("section")[0].style.filter= 'blur(4px)';
    
    document.getElementById("loginform").style.display="block";

    
}

// Get the modal

function modalImg(x){
    

 let parent = x.parentNode;
    
    
 let index = parent.id.split("slide")[1];
    
    if(index === ""){
        
        index = 0;
    }
    else{
        index = index.split("-")[1]
    }
var modal = document.getElementsByClassName("myModal")[index];

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementsByClassName("carImg")[index];
    
var modalImg = document.getElementsByClassName("modal-content")[index];
var captionText = document.getElementsByClassName("caption")[index];
    
    document.getElementsByClassName("controllers")[0].style.display="none"
    
    document.getElementsByClassName("carousel-indicators")[0].style.display="none"
    
    

  document.getElementsByClassName("myModal")[index].style.display = "block";
    
  document.getElementsByClassName("modal-content")[index].src = img.src;
    var span = document.getElementsByClassName("close")[index];

// When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//     debugger;
//   document.getElementsByClassName("myModal")[index].style.display = "none";
//     return;
// }

}


function modalClose(x){
    
    x.parentNode.style.display = "none";
    
    document.getElementsByClassName("controllers")[0].style.display="inline-block"
    
    document.getElementsByClassName("carousel-indicators")[0].style.display="flex"
}


//jQuery plugin
(function( $ ) {
   
   $.fn.uploader = function( options ) {
     var settings = $.extend({
       MessageAreaText: "No files selected.",
       MessageAreaTextWithFiles: "File List:",
       DefaultErrorMessage: "Unable to open this file.",
       BadTypeErrorMessage: "We cannot accept this file type at this time.",
       acceptedFileTypes: ['pdf', 'jpg', 'gif', 'jpeg', 'bmp', 'tif', 'tiff', 'png', 'xps', 'doc', 'docx',
        'fax', 'wmp', 'ico', 'txt', 'cs', 'rtf', 'xls', 'xlsx']
     }, options );
  
     var uploadId = 1;
     //update the messaging 
      $('.file-uploader__message-area p').text(options.MessageAreaText || settings.MessageAreaText);
     
     //create and add the file list and the hidden input list
     var fileList = $('<ul class="file-list"></ul>');
     var hiddenInputs = $('<div class="hidden-inputs hidden"></div>');
     $('.file-uploader__message-area').after(fileList);
     $('.file-list').after(hiddenInputs);
     
    //when choosing a file, add the name to the list and copy the file input into the hidden inputs
     $('.file-chooser__input').on('change', function(){
        var file = $('.file-chooser__input').val();
        var fileName = (file.match(/([^\\\/]+)$/)[0]);

       //clear any error condition
       $('.file-chooser').removeClass('error');
       $('.error-message').remove();
       
       //validate the file
       var check = checkFile(fileName);
       if(check === "valid") {
         
         // move the 'real' one to hidden list 
         $('.hidden-inputs').append($('.file-chooser__input')); 
       
         //insert a clone after the hiddens (copy the event handlers too)
         $('.file-chooser').append($('.file-chooser__input').clone({ withDataAndEvents: true})); 
       
         //add the name and a remove button to the file-list
         $('.file-list').append('<li style="display: none;"><span class="file-list__name">' + fileName + '</span><button class="removal-button" data-uploadid="'+ uploadId +'"></button></li>');
         $('.file-list').find("li:last").show(800);
        
         //removal button handler
         $('.removal-button').on('click', function(e){
           e.preventDefault();
         
           //remove the corresponding hidden input
           $('.hidden-inputs input[data-uploadid="'+ $(this).data('uploadid') +'"]').remove(); 
         
           //remove the name from file-list that corresponds to the button clicked
           $(this).parent().hide("puff").delay(10).queue(function(){$(this).remove();});
           
           //if the list is now empty, change the text back 
           if($('.file-list li').length === 0) {
             $('.file-uploader__message-area').text(options.MessageAreaText || settings.MessageAreaText);
           }
         });
       
         //so the event handler works on the new "real" one
         $('.hidden-inputs .file-chooser__input').removeClass('file-chooser__input').attr('data-uploadId', uploadId); 
       
         //update the message area
         $('.file-uploader__message-area').text(options.MessageAreaTextWithFiles || settings.MessageAreaTextWithFiles);
         
         uploadId++;
         
       } else {
         //indicate that the file is not ok
         $('.file-chooser').addClass("error");
         var errorText = options.DefaultErrorMessage || settings.DefaultErrorMessage;
         
         if(check === "badFileName") {
           errorText = options.BadTypeErrorMessage || settings.BadTypeErrorMessage;
         }
         
         $('.file-chooser__input').after('<p class="error-message">'+ errorText +'</p>');
       }
     });
     
     var checkFile = function(fileName) {
       var accepted          = "invalid",
           acceptedFileTypes = this.acceptedFileTypes || settings.acceptedFileTypes,
           regex;

       for ( var i = 0; i < acceptedFileTypes.length; i++ ) {
         regex = new RegExp("\\." + acceptedFileTypes[i] + "$", "i");

         if ( regex.test(fileName) ) {
           accepted = "valid";
           break;
         } else {
           accepted = "badFileName";
         }
       }

       return accepted;
    };
  }; 
}( jQuery ));

//init 
$(document).ready(function(){
  $('.fileUploader').uploader({
    MessageAreaText: "No files selected. Please select a file."
  });
});


function openModal(x){
    
    
    document.getElementById("modal").style.display="block";

}


$('#deletebutton').click, function () {
  $('#modal').modal('show')
};


function getManufacturer(x) {

    let list = document.getElementById("dropdownModel");

    while (list.hasChildNodes()) {
        list.removeChild(list.firstChild);
    }

    let optionElement = document.createElement("option");

    optionElement.innerText = "All";


    document.getElementById("dropdownModel").appendChild(optionElement);


    let cars = [
        {
            "brand": "Acura",
            "models": [
                "2.2CL",
                "2.3CL",
                "3.0CL",
                "3.2CL",
                "ILX",
                "Integra",
                "Legend",
                "MDX",
                "NSX",
                "RDX",
                "3.5 RL",
                "RL",
                "RSX",
                "SLX",
                "2.5TL",
                "3.2TL",
                "TL",
                "TSX",
                "Vigor",
                "ZDX"
            ]
        },
            {
                "brand": "Alfa Romeo",
                "models": [
                    "164",
                    "8C Competizione",
                    "GTV-6",
                    "Milano",
                    "Spider"
                ]
            },
            {
                "brand": "AMC",
                "models": [
                    "Alliance",
                    "Concord",
                    "Eagle",
                    "Encore",
                    "Spirit"
                ]
            },
            {
                "brand": "Aston Martin",
                "models": [
                    "DB7",
                    "DB9",
                    "DBS",
                    "Lagonda",
                    "Rapide",
                    "V12 Vantage",
                    "V8 Vantage",
                    "Vanquish",
                    "Virage"
                ]
            },
            {
                "brand": "Audi",
                "models": [
                    "100",
                    "200",
                    "4000",
                    "5000",
                    "80",
                    "90",
                    "A3",
                    "A4",
                    "A5",
                    "A6",
                    "A7",
                    "A8",
                    "allroad",
                    "Cabriolet",
                    "Coupe",
                    "Q3",
                    "Q5",
                    "Q7",
                    "Quattro",
                    "R8",
                    "RS 4",
                    "RS 5",
                    "RS 6",
                    "S4",
                    "S5",
                    "S6",
                    "S7",
                    "S8",
                    "TT",
                    "TT RS",
                    "TTS",
                    "V8 Quattro"
                ]
            },
            {
                "brand": "Avanti",
                "models": [
                    "Convertible",
                    "Coupe",
                    "Sedan"
                ]
            },
            {
                "brand": "Bentley",
                "models": [
                    "Arnage",
                    "Azure",
                    "Brooklands",
                    "Continental",
                    "Corniche",
                    "Eight",
                    "Mulsanne",
                    "Turbo R"
                ]
            },
            {
                "brand": "BMW",
                "models": [
                    "128i",
                    "135i",
                    "135is",
                    "318i",
                    "318iC",
                    "318iS",
                    "318ti",
                    "320i",
                    "323ci",
                    "323i",
                    "323is",
                    "323iT",
                    "325Ci",
                    "325e",
                    "325es",
                    "325i",
                    "325is",
                    "325iX",
                    "325xi",
                    "328Ci",
                    "328i",
                    "328iS",
                    "328xi",
                    "330Ci",
                    "330i",
                    "330xi",
                    "335d",
                    "335i",
                    "335is",
                    "335xi",
                    "ActiveHybrid 3",
                    "325",
                    "524td",
                    "525i",
                    "525xi",
                    "528e",
                    "528i",
                    "528iT",
                    "528xi",
                    "530i",
                    "530iT",
                    "530xi",
                    "533i",
                    "535i",
                    "535i Gran Turismo",
                    "535xi",
                    "540i",
                    "545i",
                    "550i",
                    "550i Gran Turismo",
                    "ActiveHybrid 5",
                    "633CSi",
                    "635CSi",
                    "640i",
                    "640i Gran Coupe",
                    "645Ci",
                    "650i",
                    "650i Gran Coupe",
                    "L6",
                    "733i",
                    "735i",
                    "735iL",
                    "740i",
                    "740iL",
                    "740Li",
                    "745i",
                    "745Li",
                    "750i",
                    "750iL",
                    "750Li",
                    "760i",
                    "760Li",
                    "ActiveHybrid 7",
                    "Alpina B7",
                    "840Ci",
                    "850Ci",
                    "850CSi",
                    "850i",
                    "L7",
                    "1 Series M",
                    "M Coupe",
                    "M Roadster",
                    "M3",
                    "M5",
                    "M6",
                    "X5 M",
                    "X6 M",
                    "ActiveHybrid X6",
                    "X1",
                    "X3",
                    "X5",
                    "X6",
                    "Z3",
                    "Z4",
                    "Z8"
                ]
            },
            {
                "brand": "Buick",
                "models": [
                    "Century",
                    "Electra",
                    "Enclave",
                    "Encore",
                    "LaCrosse",
                    "Le Sabre",
                    "Lucerne",
                    "Park Avenue",
                    "Rainier",
                    "Reatta",
                    "Regal",
                    "Rendezvous",
                    "Riviera",
                    "Roadmaster",
                    "Skyhawk",
                    "Skylark",
                    "Somerset",
                    "Terraza",
                    "Verano"
                ]
            },
            {
                "brand": "Cadillac",
                "models": [
                    "Allante",
                    "ATS",
                    "Brougham",
                    "Catera",
                    "Cimarron",
                    "CTS",
                    "De Ville",
                    "DTS",
                    "Eldorado",
                    "Escalade",
                    "Escalade ESV",
                    "Escalade EXT",
                    "Fleetwood",
                    "Seville",
                    "SRX",
                    "STS",
                    "XLR",
                    "XTS"
                ]
            },
            {
                "brand": "Chevrolet",
                "models": [
                    "Astro",
                    "Avalanche",
                    "Aveo",
                    "Aveo5",
                    "Beretta",
                    "Blazer",
                    "Camaro",
                    "Caprice",
                    "Captiva Sport",
                    "Cavalier",
                    "Celebrity",
                    "Chevette",
                    "Citation",
                    "Cobalt",
                    "Colorado",
                    "Corsica",
                    "Corvette",
                    "Cruze",
                    "El Camino",
                    "Equinox",
                    "Express Van",
                    "G Van",
                    "HHR",
                    "Impala",
                    "Kodiak C4500",
                    "Lumina",
                    "Lumina APV",
                    "LUV",
                    "Malibu",
                    "Metro",
                    "Monte Carlo",
                    "Nova",
                    "Prizm",
                    "S10 Blazer",
                    "S10 Pickup",
                    "Silverado and other C/K1500",
                    "Silverado and other C/K2500",
                    "Silverado and other C/K3500",
                    "Sonic",
                    "Spark",
                    "Spectrum",
                    "Sprint",
                    "SSR",
                    "Suburban",
                    "Tahoe",
                    "Tracker",
                    "TrailBlazer",
                    "TrailBlazer EXT",
                    "Traverse",
                    "Uplander",
                    "Venture",
                    "Volt"
                ]
            },
            {
                "brand": "Chrysler",
                "models": [
                    "200",
                    "300",
                    "300M",
                    "Aspen",
                    "Caravan",
                    "Cirrus",
                    "Concorde",
                    "Conquest",
                    "Cordoba",
                    "Crossfire",
                    "E Class",
                    "Fifth Avenue",
                    "Grand Voyager",
                    "Imperial",
                    "Intrepid",
                    "Laser",
                    "LeBaron",
                    "LHS",
                    "Neon",
                    "New Yorker",
                    "Newport",
                    "Pacifica",
                    "Prowler",
                    "PT Cruiser",
                    "Sebring",
                    "TC by Maserati",
                    "Town &amp; Country",
                    "Voyager"
                ]
            },
            {
                "brand": "Daewoo",
                "models": [
                    "Lanos",
                    "Leganza",
                    "Nubira"
                ]
            },
            {
                "brand": "Daihatsu",
                "models": [
                    "Charade",
                    "Rocky"
                ]
            },
            {
                "brand": "Datsun",
                "models": [
                    "200SX",
                    "210",
                    "280ZX",
                    "300ZX",
                    "310",
                    "510",
                    "720",
                    "810",
                    "Maxima",
                    "Pickup",
                    "Pulsar",
                    "Sentra",
                    "Stanza"
                ]
            },
            {
                "brand": "DeLorean",
                "models": [
                    "DMC-12"
                ]
            },
            {
                "brand": "Dodge",
                "models": [
                    "400",
                    "600",
                    "Aries",
                    "Avenger",
                    "Caliber",
                    "Caravan",
                    "Challenger",
                    "Charger",
                    "Colt",
                    "Conquest",
                    "D/W Truck",
                    "Dakota",
                    "Dart",
                    "Daytona",
                    "Diplomat",
                    "Durango",
                    "Dynasty",
                    "Grand Caravan",
                    "Intrepid",
                    "Journey",
                    "Lancer",
                    "Magnum",
                    "Mirada",
                    "Monaco",
                    "Neon",
                    "Nitro",
                    "Omni",
                    "Raider",
                    "Ram 1500 Truck",
                    "Ram 2500 Truck",
                    "Ram 3500 Truck",
                    "Ram 4500 Truck",
                    "Ram 50 Truck",
                    "RAM C/V",
                    "Ram SRT-10",
                    "Ram Van",
                    "Ram Wagon",
                    "Ramcharger",
                    "Rampage",
                    "Shadow",
                    "Spirit",
                    "Sprinter",
                    "SRT-4",
                    "St. Regis",
                    "Stealth",
                    "Stratus",
                    "Viper"
                ]
            },
            {
                "brand": "Eagle",
                "models": [
                    "Medallion",
                    "Premier",
                    "Summit",
                    "Talon",
                    "Vision"
                ]
            },
            {
                "brand": "Ferrari",
                "models": [
                    "308 GTB Quattrovalvole",
                    "308 GTBI",
                    "308 GTS Quattrovalvole",
                    "308 GTSI",
                    "328 GTB",
                    "328 GTS",
                    "348 GTB",
                    "348 GTS",
                    "348 Spider",
                    "348 TB",
                    "348 TS",
                    "360",
                    "456 GT",
                    "456M GT",
                    "458 Italia",
                    "512 BBi",
                    "512M",
                    "512TR",
                    "550 Maranello",
                    "575M Maranello",
                    "599 GTB Fiorano",
                    "599 GTO",
                    "612 Scaglietti",
                    "California",
                    "Enzo",
                    "F355",
                    "F40",
                    "F430",
                    "F50",
                    "FF",
                    "Mondial",
                    "Testarossa"
                ]
            },
            {
                "brand": "FIAT",
                "models": [
                    "2000 Spider",
                    "500",
                    "Bertone X1/9",
                    "Brava",
                    "Pininfarina Spider",
                    "Strada",
                    "X1/9"
                ]
            },
            {
                "brand": "Fisker",
                "models": [
                    "Karma"
                ]
            },
            {
                "brand": "Ford",
                "models": [
                    "Aerostar",
                    "Aspire",
                    "Bronco",
                    "Bronco II",
                    "C-MAX",
                    "Club Wagon",
                    "Contour",
                    "Courier",
                    "Crown Victoria",
                    "E-150 and Econoline 150",
                    "E-250 and Econoline 250",
                    "E-350 and Econoline 350",
                    "Edge",
                    "Escape",
                    "Escort",
                    "Excursion",
                    "EXP",
                    "Expedition",
                    "Expedition EL",
                    "Explorer",
                    "Explorer Sport Trac",
                    "F100",
                    "F150",
                    "F250",
                    "F350",
                    "F450",
                    "Fairmont",
                    "Festiva",
                    "Fiesta",
                    "Five Hundred",
                    "Flex",
                    "Focus",
                    "Freestar",
                    "Freestyle",
                    "Fusion",
                    "Granada",
                    "GT",
                    "LTD",
                    "Mustang",
                    "Probe",
                    "Ranger",
                    "Taurus",
                    "Taurus X",
                    "Tempo",
                    "Thunderbird",
                    "Transit Connect",
                    "Windstar",
                    "ZX2 Escort"
                ]
            },
            {
                "brand": "Freightliner",
                "models": [
                    "Sprinter"
                ]
            },
            {
                "brand": "Geo",
                "models": [
                    "Metro",
                    "Prizm",
                    "Spectrum",
                    "Storm",
                    "Tracker"
                ]
            },
            {
                "brand": "GMC",
                "models": [
                    "Acadia",
                    "Caballero",
                    "Canyon",
                    "Envoy",
                    "Envoy XL",
                    "Envoy XUV",
                    "Jimmy",
                    "Rally Wagon",
                    "S15 Jimmy",
                    "S15 Pickup",
                    "Safari",
                    "Savana",
                    "Sierra C/K1500",
                    "Sierra C/K2500",
                    "Sierra C/K3500",
                    "Sonoma",
                    "Suburban",
                    "Syclone",
                    "Terrain",
                    "TopKick C4500",
                    "Typhoon",
                    "Vandura",
                    "Yukon",
                    "Yukon XL"
                ]
            },
            {
                "brand": "Honda",
                "models": [
                    "Accord",
                    "Civic",
                    "CR-V",
                    "CR-Z",
                    "CRX",
                    "Accord Crosstour",
                    "Crosstour",
                    "Del Sol",
                    "Element",
                    "Fit",
                    "Insight",
                    "Odyssey",
                    "Passport",
                    "Pilot",
                    "Prelude",
                    "Ridgeline",
                    "S2000"
                ]
            },
            {
                "brand": "HUMMER",
                "models": [
                    "H1",
                    "H2",
                    "H3",
                    "H3T"
                ]
            },
            {
                "brand": "Hyundai",
                "models": [
                    "Accent",
                    "Azera",
                    "Elantra",
                    "Elantra Coupe",
                    "Elantra Touring",
                    "Entourage",
                    "Equus",
                    "Excel",
                    "Genesis",
                    "Genesis Coupe",
                    "Santa Fe",
                    "Scoupe",
                    "Sonata",
                    "Tiburon",
                    "Tucson",
                    "Veloster",
                    "Veracruz",
                    "XG300",
                    "XG350"
                ]
            },
            {
                "brand": "Infiniti",
                "models": [
                    "EX35",
                    "EX37",
                    "FX35",
                    "FX37",
                    "FX45",
                    "FX50",
                    "G20",
                    "G25",
                    "G35",
                    "G37",
                    "I30",
                    "I35",
                    "J30",
                    "JX35",
                    "M30",
                    "M35",
                    "M35h",
                    "M37",
                    "M45",
                    "M56",
                    "Q45",
                    "QX4",
                    "QX56"
                ]
            },
            {
                "brand": "Isuzu",
                "models": [
                    "Amigo",
                    "Ascender",
                    "Axiom",
                    "Hombre",
                    "i-280",
                    "i-290",
                    "i-350",
                    "i-370",
                    "I-Mark",
                    "Impulse",
                    "Oasis",
                    "Pickup",
                    "Rodeo",
                    "Stylus",
                    "Trooper",
                    "Trooper II",
                    "VehiCROSS"
                ]
            },
            {
                "brand": "Jaguar",
                "models": [
                    "S-Type",
                    "X-Type",
                    "XF",
                    "XJ12",
                    "XJ6",
                    "XJR",
                    "XJR-S",
                    "XJS",
                    "XJ Vanden Plas",
                    "XJ",
                    "XJ8",
                    "XJ8 L",
                    "XJ Sport",
                    "XK8",
                    "XK",
                    "XKR"
                ]
            },
            {
                "brand": "Jeep",
                "models": [
                    "Cherokee",
                    "CJ",
                    "Comanche",
                    "Commander",
                    "Compass",
                    "Grand Cherokee",
                    "Grand Wagoneer",
                    "Liberty",
                    "Patriot",
                    "Pickup",
                    "Scrambler",
                    "Wagoneer",
                    "Wrangler"
                ]
            },
            {
                "brand": "Kia",
                "models": [
                    "Amanti",
                    "Borrego",
                    "Forte",
                    "Forte Koup",
                    "Optima",
                    "Rio",
                    "Rio5",
                    "Rondo",
                    "Sedona",
                    "Sephia",
                    "Sorento",
                    "Soul",
                    "Spectra",
                    "Spectra5",
                    "Sportage"
                ]
            },
            {
                "brand": "Lamborghini",
                "models": [
                    "Aventador",
                    "Countach",
                    "Diablo",
                    "Gallardo",
                    "Jalpa",
                    "LM002",
                    "Murcielago"
                ]
            },
            {
                "brand": "Lancia",
                "models": [
                    "Beta",
                    "Zagato"
                ]
            },
            {
                "brand": "Land Rover",
                "models": [
                    "Defender",
                    "Discovery",
                    "Freelander",
                    "LR2",
                    "LR3",
                    "LR4",
                    "Range Rover",
                    "Range Rover Evoque",
                    "Range Rover Sport"
                ]
            },
            {
                "brand": "Lexus",
                "models": [
                    "CT 200h",
                    "ES 250",
                    "ES 300",
                    "ES 300h",
                    "ES 330",
                    "ES 350",
                    "GS 300",
                    "GS 350",
                    "GS 400",
                    "GS 430",
                    "GS 450h",
                    "GS 460",
                    "GX 460",
                    "GX 470",
                    "HS 250h",
                    "IS 250",
                    "IS 250C",
                    "IS 300",
                    "IS 350",
                    "IS 350C",
                    "IS F",
                    "LFA",
                    "LS 400",
                    "LS 430",
                    "LS 460",
                    "LS 600h",
                    "LX 450",
                    "LX 470",
                    "LX 570",
                    "RX 300",
                    "RX 330",
                    "RX 350",
                    "RX 400h",
                    "RX 450h",
                    "SC 300",
                    "SC 400",
                    "SC 430"
                ]
            },
            {
                "brand": "Lincoln",
                "models": [
                    "Aviator",
                    "Blackwood",
                    "Continental",
                    "LS",
                    "Mark LT",
                    "Mark VI",
                    "Mark VII",
                    "Mark VIII",
                    "MKS",
                    "MKT",
                    "MKX",
                    "MKZ",
                    "Navigator",
                    "Navigator L",
                    "Town Car",
                    "Zephyr"
                ]
            },
            {
                "brand": "Lotus",
                "models": [
                    "Elan",
                    "Elise",
                    "Esprit",
                    "Evora",
                    "Exige"
                ]
            },
            {
                "brand": "Maserati",
                "models": [
                    "430",
                    "Biturbo",
                    "Coupe",
                    "GranSport",
                    "GranTurismo",
                    "Quattroporte",
                    "Spyder"
                ]
            },
            {
                "brand": "Maybach",
                "models": [
                    "57",
                    "62"
                ]
            },
            {
                "brand": "Mazda",
                "models": [
                    "323",
                    "626",
                    "929",
                    "B-Series Pickup",
                    "CX-5",
                    "CX-7",
                    "CX-9",
                    "GLC",
                    "MAZDA2",
                    "MAZDA3",
                    "MAZDA5",
                    "MAZDA6",
                    "MAZDASPEED3",
                    "MAZDASPEED6",
                    "Miata MX5",
                    "Millenia",
                    "MPV",
                    "MX3",
                    "MX6",
                    "Navajo",
                    "Protege",
                    "Protege5",
                    "RX-7",
                    "RX-8",
                    "Tribute"
                ]
            },
            {
                "brand": "McLaren",
                "models": [
                    "MP4-12C"
                ]
            },
            {
                "brand": "Mercedes-Benz",
                "models": [
                    "190D",
                    "190E",
                    "240D",
                    "300CD",
                    "300CE",
                    "300D",
                    "300E",
                    "300TD",
                    "300TE",
                    "C220",
                    "C230",
                    "C240",
                    "C250",
                    "C280",
                    "C300",
                    "C320",
                    "C32 AMG",
                    "C350",
                    "C36 AMG",
                    "C43 AMG",
                    "C55 AMG",
                    "C63 AMG",
                    "CL500",
                    "CL550",
                    "CL55 AMG",
                    "CL600",
                    "CL63 AMG",
                    "CL65 AMG",
                    "CLK320",
                    "CLK350",
                    "CLK430",
                    "CLK500",
                    "CLK550",
                    "CLK55 AMG",
                    "CLK63 AMG",
                    "CLS500",
                    "CLS550",
                    "CLS55 AMG",
                    "CLS63 AMG",
                    "260E",
                    "280CE",
                    "280E",
                    "400E",
                    "500E",
                    "E300",
                    "E320",
                    "E320 Bluetec",
                    "E320 CDI",
                    "E350",
                    "E350 Bluetec",
                    "E400 Hybrid",
                    "E420",
                    "E430",
                    "E500",
                    "E550",
                    "E55 AMG",
                    "E63 AMG",
                    "G500",
                    "G550",
                    "G55 AMG",
                    "G63 AMG",
                    "GL320 Bluetec",
                    "GL320 CDI",
                    "GL350 Bluetec",
                    "GL450",
                    "GL550",
                    "GLK350",
                    "ML320",
                    "ML320 Bluetec",
                    "ML320 CDI",
                    "ML350",
                    "ML350 Bluetec",
                    "ML430",
                    "ML450 Hybrid",
                    "ML500",
                    "ML550",
                    "ML55 AMG",
                    "ML63 AMG",
                    "R320 Bluetec",
                    "R320 CDI",
                    "R350",
                    "R350 Bluetec",
                    "R500",
                    "R63 AMG",
                    "300SD",
                    "300SDL",
                    "300SE",
                    "300SEL",
                    "350SD",
                    "350SDL",
                    "380SE",
                    "380SEC",
                    "380SEL",
                    "400SE",
                    "400SEL",
                    "420SEL",
                    "500SEC",
                    "500SEL",
                    "560SEC",
                    "560SEL",
                    "600SEC",
                    "600SEL",
                    "S320",
                    "S350",
                    "S350 Bluetec",
                    "S400 Hybrid",
                    "S420",
                    "S430",
                    "S500",
                    "S550",
                    "S55 AMG",
                    "S600",
                    "S63 AMG",
                    "S65 AMG",
                    "300SL",
                    "380SL",
                    "380SLC",
                    "500SL",
                    "560SL",
                    "600SL",
                    "SL320",
                    "SL500",
                    "SL550",
                    "SL55 AMG",
                    "SL600",
                    "SL63 AMG",
                    "SL65 AMG",
                    "SLK230",
                    "SLK250",
                    "SLK280",
                    "SLK300",
                    "SLK320",
                    "SLK32 AMG",
                    "SLK350",
                    "SLK55 AMG",
                    "SLR",
                    "SLS AMG",
                    "Sprinter"
                ]
            },
            {
                "brand": "Mercury",
                "models": [
                    "Capri",
                    "Cougar",
                    "Grand Marquis",
                    "Lynx",
                    "Marauder",
                    "Mariner",
                    "Marquis",
                    "Milan",
                    "Montego",
                    "Monterey",
                    "Mountaineer",
                    "Mystique",
                    "Sable",
                    "Topaz",
                    "Tracer",
                    "Villager",
                    "Zephyr"
                ]
            },
            {
                "brand": "Merkur",
                "models": [
                    "Scorpio",
                    "XR4Ti"
                ]
            },
            {
                "brand": "MINI",
                "models": [
                    "Cooper Clubman",
                    "Cooper S Clubman",
                    "Cooper Countryman",
                    "Cooper S Countryman",
                    "Cooper Coupe",
                    "Cooper S Coupe",
                    "Cooper",
                    "Cooper S",
                    "Cooper Roadster",
                    "Cooper S Roadster"
                ]
            },
            {
                "brand": "Mitsubishi",
                "models": [
                    "3000GT",
                    "Cordia",
                    "Diamante",
                    "Eclipse",
                    "Endeavor",
                    "Expo",
                    "Galant",
                    "i",
                    "Lancer",
                    "Lancer Evolution",
                    "Mighty Max",
                    "Mirage",
                    "Montero",
                    "Montero Sport",
                    "Outlander",
                    "Outlander Sport",
                    "Precis",
                    "Raider",
                    "Sigma",
                    "Starion",
                    "Tredia",
                    "Van"
                ]
            },
            {
                "brand": "Nissan",
                "models": [
                    "200SX",
                    "240SX",
                    "300ZX",
                    "350Z",
                    "370Z",
                    "Altima",
                    "Armada",
                    "Axxess",
                    "Cube",
                    "Frontier",
                    "GT-R",
                    "Juke",
                    "Leaf",
                    "Maxima",
                    "Murano",
                    "Murano CrossCabriolet",
                    "NV",
                    "NX",
                    "Pathfinder",
                    "Pickup",
                    "Pulsar",
                    "Quest",
                    "Rogue",
                    "Sentra",
                    "Stanza",
                    "Titan",
                    "Van",
                    "Versa",
                    "Xterra"
                ]
            },
            {
                "brand": "Oldsmobile",
                "models": [
                    "88",
                    "Achieva",
                    "Alero",
                    "Aurora",
                    "Bravada",
                    "Custom Cruiser",
                    "Cutlass",
                    "Cutlass Calais",
                    "Cutlass Ciera",
                    "Cutlass Supreme",
                    "Firenza",
                    "Intrigue",
                    "Ninety-Eight",
                    "Omega",
                    "Regency",
                    "Silhouette",
                    "Toronado"
                ]
            },
            {
                "brand": "Peugeot",
                "models": [
                    "405",
                    "504",
                    "505",
                    "604"
                ]
            },
            {
                "brand": "Plymouth",
                "models": [
                    "Acclaim",
                    "Arrow",
                    "Breeze",
                    "Caravelle",
                    "Champ",
                    "Colt",
                    "Conquest",
                    "Gran Fury",
                    "Grand Voyager",
                    "Horizon",
                    "Laser",
                    "Neon",
                    "Prowler",
                    "Reliant",
                    "Sapporo",
                    "Scamp",
                    "Sundance",
                    "Trailduster",
                    "Voyager"
                ]
            },
            {
                "brand": "Pontiac",
                "models": [
                    "1000",
                    "6000",
                    "Aztek",
                    "Bonneville",
                    "Catalina",
                    "Fiero",
                    "Firebird",
                    "G3",
                    "G5",
                    "G6",
                    "G8",
                    "Grand Am",
                    "Grand Prix",
                    "GTO",
                    "J2000",
                    "Le Mans",
                    "Montana",
                    "Parisienne",
                    "Phoenix",
                    "Safari",
                    "Solstice",
                    "Sunbird",
                    "Sunfire",
                    "Torrent",
                    "Trans Sport",
                    "Vibe"
                ]
            },
            {
                "brand": "Porsche",
                "models": [
                    "911",
                    "924",
                    "928",
                    "944",
                    "968",
                    "Boxster",
                    "Carrera GT",
                    "Cayenne",
                    "Cayman",
                    "Panamera"
                ]
            },
            {
                "brand": "RAM",
                "models": [
                    "1500",
                    "2500",
                    "3500",
                    "4500"
                ]
            },
            {
                "brand": "Renault",
                "models": [
                    "18i",
                    "Fuego",
                    "Le Car",
                    "R18",
                    "Sportwagon"
                ]
            },
            {
                "brand": "Rolls-Royce",
                "models": [
                    "Camargue",
                    "Corniche",
                    "Ghost",
                    "Park Ward",
                    "Phantom",
                    "Silver Dawn",
                    "Silver Seraph",
                    "Silver Spirit",
                    "Silver Spur"
                ]
            },
            {
                "brand": "Saab",
                "models": [
                    "9-2X",
                    "9-3",
                    "9-4X",
                    "9-5",
                    "9-7X",
                    "900",
                    "9000"
                ]
            },
            {
                "brand": "Saturn",
                "models": [
                    "Astra",
                    "Aura",
                    "ION",
                    "L100",
                    "L200",
                    "L300",
                    "LS",
                    "LW1",
                    "LW2",
                    "LW200",
                    "LW300",
                    "Outlook",
                    "Relay",
                    "SC1",
                    "SC2",
                    "Sky",
                    "SL",
                    "SL1",
                    "SL2",
                    "SW1",
                    "SW2",
                    "Vue"
                ]
            },
            {
                "brand": "Scion",
                "models": [
                    "FR-S",
                    "iQ",
                    "tC",
                    "xA",
                    "xB",
                    "xD"
                ]
            },
            {
                "brand": "smart",
                "models": [
                    "fortwo"
                ]
            },
            {
                "brand": "SRT",
                "models": [
                    "Viper"
                ]
            },
            {
                "brand": "Sterling",
                "models": [
                    "825",
                    "827"
                ]
            },
            {
                "brand": "Subaru",
                "models": [
                    "Baja",
                    "Brat",
                    "BRZ",
                    "Forester",
                    "Impreza",
                    "Impreza WRX",
                    "Justy",
                    "L Series",
                    "Legacy",
                    "Loyale",
                    "Outback",
                    "SVX",
                    "Tribeca",
                    "XT",
                    "XV Crosstrek"
                ]
            },
            {
                "brand": "Suzuki",
                "models": [
                    "Aerio",
                    "Equator",
                    "Esteem",
                    "Forenza",
                    "Grand Vitara",
                    "Kizashi",
                    "Reno",
                    "Samurai",
                    "Sidekick",
                    "Swift",
                    "SX4",
                    "Verona",
                    "Vitara",
                    "X-90",
                    "XL7"
                ]
            },
            {
                "brand": "Tesla",
                "models": [
                    "Roadster",
                    "Model S"
                ]
            },
            {
                "brand": "Toyota",
                "models": [
                    "4Runner",
                    "Avalon",
                    "Camry",
                    "Celica",
                    "Corolla",
                    "Corona",
                    "Cressida",
                    "Echo",
                    "FJ Cruiser",
                    "Highlander",
                    "Land Cruiser",
                    "Matrix",
                    "MR2",
                    "MR2 Spyder",
                    "Paseo",
                    "Pickup",
                    "Previa",
                    "Prius",
                    "Prius C",
                    "Prius V",
                    "RAV4",
                    "Sequoia",
                    "Sienna",
                    "Solara",
                    "Starlet",
                    "Supra",
                    "T100",
                    "Tacoma",
                    "Tercel",
                    "Tundra",
                    "Van",
                    "Venza",
                    "Yaris"
                ]
            },
            {
                "brand": "Triumph",
                "models": [
                    "TR7",
                    "TR8"
                ]
            },
            {
                "brand": "Volkswagen",
                "models": [
                    "Beetle",
                    "Cabrio",
                    "Cabriolet",
                    "CC",
                    "Corrado",
                    "Dasher",
                    "Eos",
                    "Eurovan",
                    "Fox",
                    "GLI",
                    "Golf R",
                    "GTI",
                    "Golf",
                    "Rabbit",
                    "Jetta",
                    "Passat",
                    "Phaeton",
                    "Pickup",
                    "Quantum",
                    "R32",
                    "Routan",
                    "Scirocco",
                    "Tiguan",
                    "Touareg",
                    "Vanagon"
                ]
            },
            {
                "brand": "Volvo",
                "models": [
                    "240",
                    "260",
                    "740",
                    "760",
                    "780",
                    "850",
                    "940",
                    "960",
                    "C30",
                    "C70",
                    "S40",
                    "S60",
                    "S70",
                    "S80",
                    "S90",
                    "V40",
                    "V50",
                    "V70",
                    "V90",
                    "XC60",
                    "XC70",
                    "XC90"
                ]
            },
            {
                "brand": "Yugo",
                "models": [
                    "GV",
                    "GVC",
                    "GVL",
                    "GVS",
                    "GVX"
                ]
            }
        ]

    for (let car of cars) {

        if (car.brand === x){



            for (let model of car.models) {

                //<option value="">All
                let optionElement = document.createElement("option");

                optionElement.innerText = model;
                optionElement.value = model;


                document.getElementById("dropdownModel").appendChild(optionElement);


            }
        }

    }

}


function getTownByRegion(region) {

    let list = document.getElementById("dropdownTown");

    while (list.hasChildNodes()) {
        list.removeChild(list.firstChild);
    }

    let towns = [
        {
            "name": "Айтос",
            "region": "Бургас",
            "population": 22500
        },
        {
            "name": "Аксаково",
            "region": "Варна",
            "population": 8206
        },
        {
            "name": "Алфатар",
            "region": "Силистра",
            "population": 1608
        },
        {
            "name": "Антоново",
            "region": "Търговище",
            "population": 1437
        },
        {
            "name": "Априлци",
            "region": "Ловеч",
            "population": 2867
        },
        {
            "name": "Ардино",
            "region": "Кърджали",
            "population": 3973
        },
        {
            "name": "Асеновград",
            "region": "Пловдив",
            "population": 52896
        },
        {
            "name": "Ахелой",
            "region": "Бургас",
            "population": 2109
        },
        {
            "name": "Ахтопол",
            "region": "Бургас",
            "population": 1436
        },
        {
            "name": "Балчик",
            "region": "Добрич",
            "population": 12726
        },
        {
            "name": "Банкя",
            "region": "София град",
            "population": 11662
        },
        {
            "name": "Банско",
            "region": "Благоевград",
            "population": 8170
        },
        {
            "name": "Баня",
            "region": "Пловдив",
            "population": 3329
        },
        {
            "name": "Батак",
            "region": "Пазарджик",
            "population": 3266
        },
        {
            "name": "Батановци",
            "region": "Перник",
            "population": 2230
        },
        {
            "name": "Белене",
            "region": "Плевен",
            "population": 8318
        },
        {
            "name": "Белица",
            "region": "Благоевград",
            "population": 3184
        },
        {
            "name": "Белово",
            "region": "Пазарджик",
            "population": 3876
        },
        {
            "name": "Белоградчик",
            "region": "Видин",
            "population": 5452
        },
        {
            "name": "Белослав",
            "region": "Варна",
            "population": 8129
        },
        {
            "name": "Берковица",
            "region": "Монтана",
            "population": 13708
        },
        {
            "name": "Благоевград",
            "region": "Благоевград",
            "population": 75397
        },
        {
            "name": "Бобов дол",
            "region": "Кюстендил",
            "population": 6040
        },
        {
            "name": "Бобошево",
            "region": "Кюстендил",
            "population": 1330
        },
        {
            "name": "Божурище",
            "region": "Софийска",
            "population": 5420
        },
        {
            "name": "Бойчиновци",
            "region": "Монтана",
            "population": 1487
        },
        {
            "name": "Болярово",
            "region": "Ямбол",
            "population": 1245
        },
        {
            "name": "Борово",
            "region": "Русе",
            "population": 2252
        },
        {
            "name": "Ботевград",
            "region": "Софийска",
            "population": 21407
        },
        {
            "name": "Брацигово",
            "region": "Пазарджик",
            "population": 4262
        },
        {
            "name": "Брегово",
            "region": "Видин",
            "population": 2572
        },
        {
            "name": "Брезник",
            "region": "Перник",
            "population": 4092
        },
        {
            "name": "Брезово",
            "region": "Пловдив",
            "population": 1894
        },
        {
            "name": "Брусарци",
            "region": "Монтана",
            "population": 1188
        },
        {
            "name": "Бургас",
            "region": "Бургас",
            "population": 206722
        },
        {
            "name": "Бухово",
            "region": "София град",
            "population": 2913
        },
        {
            "name": "Българово",
            "region": "Бургас",
            "population": 2001
        },
        {
            "name": "Бяла",
            "region": "Варна",
            "population": 2263
        },
        {
            "name": "Бяла",
            "region": "Русе",
            "population": 8921
        },
        {
            "name": "Бяла Слатина",
            "region": "Враца",
            "population": 12627
        },
        {
            "name": "Бяла Черква",
            "region": "Велико Търново",
            "population": 2606
        },
        {
            "name": "Варна",
            "region": "Варна",
            "population": 348136
        },
        {
            "name": "Велики Преслав",
            "region": "Шумен",
            "population": 8937
        },
        {
            "name": "Велико Търново",
            "region": "Велико Търново",
            "population": 71156
        },
        {
            "name": "Велинград",
            "region": "Пазарджик",
            "population": 24800
        },
        {
            "name": "Ветово",
            "region": "Русе",
            "population": 4831
        },
        {
            "name": "Ветрен",
            "region": "Пазарджик",
            "population": 3152
        },
        {
            "name": "Видин",
            "region": "Видин",
            "population": 51699
        },
        {
            "name": "Враца",
            "region": "Враца",
            "population": 62000
        },
        {
            "name": "Вълчедръм",
            "region": "Монтана",
            "population": 3568
        },
        {
            "name": "Вълчи дол",
            "region": "Варна",
            "population": 3425
        },
        {
            "name": "Върбица",
            "region": "Шумен",
            "population": 3595
        },
        {
            "name": "Вършец",
            "region": "Монтана",
            "population": 6251
        },
        {
            "name": "Габрово",
            "region": "Габрово",
            "population": 60364
        },
        {
            "name": "Генерал Тошево",
            "region": "Добрич",
            "population": 6963
        },
        {
            "name": "Главиница",
            "region": "Силистра",
            "population": 1881
        },
        {
            "name": "Глоджево",
            "region": "Русе",
            "population": 3506
        },
        {
            "name": "Годеч",
            "region": "Софийска",
            "population": 4332
        },
        {
            "name": "Горна Оряховица",
            "region": "Велико Търново",
            "population": 33156
        },
        {
            "name": "Гоце Делчев",
            "region": "Благоевград",
            "population": 20358
        },
        {
            "name": "Грамада",
            "region": "Видин",
            "population": 1481
        },
        {
            "name": "Гулянци",
            "region": "Плевен",
            "population": 3424
        },
        {
            "name": "Гурково",
            "region": "Стара Загора",
            "population": 2996
        },
        {
            "name": "Гълъбово",
            "region": "Стара Загора",
            "population": 8675
        },
        {
            "name": "Две могили",
            "region": "Русе",
            "population": 4252
        },
        {
            "name": "Дебелец",
            "region": "Велико Търново",
            "population": 3919
        },
        {
            "name": "Девин",
            "region": "Смолян",
            "population": 6587
        },
        {
            "name": "Девня",
            "region": "Варна",
            "population": 9259
        },
        {
            "name": "Джебел",
            "region": "Кърджали",
            "population": 3200
        },
        {
            "name": "Димитровград",
            "region": "Хасково",
            "population": 39934
        },
        {
            "name": "Димово",
            "region": "Видин",
            "population": 1193
        },
        {
            "name": "Добринище",
            "region": "Благоевград",
            "population": 2668
        },
        {
            "name": "Добрич",
            "region": "Добрич",
            "population": 96881
        },
        {
            "name": "Долна баня",
            "region": "Софийска",
            "population": 4793
        },
        {
            "name": "Долна Митрополия",
            "region": "Плевен",
            "population": 3417
        },
        {
            "name": "Долна Оряховица",
            "region": "Велико Търново",
            "population": 2884
        },
        {
            "name": "Долни Дъбник",
            "region": "Плевен",
            "population": 4520
        },
        {
            "name": "Долни чифлик",
            "region": "Варна",
            "population": 7056
        },
        {
            "name": "Доспат",
            "region": "Смолян",
            "population": 2343
        },
        {
            "name": "Драгоман",
            "region": "Софийска",
            "population": 3300
        },
        {
            "name": "Дряново",
            "region": "Габрово",
            "population": 8028
        },
        {
            "name": "Дулово",
            "region": "Силистра",
            "population": 7063
        },
        {
            "name": "Дунавци",
            "region": "Видин",
            "population": 2597
        },
        {
            "name": "Дупница",
            "region": "Кюстендил",
            "population": 37416
        },
        {
            "name": "Дългопол",
            "region": "Варна",
            "population": 4847
        },
        {
            "name": "Елена",
            "region": "Велико Търново",
            "population": 5693
        },
        {
            "name": "Елин Пелин",
            "region": "Софийска",
            "population": 7278
        },
        {
            "name": "Елхово",
            "region": "Ямбол",
            "population": 10492
        },
        {
            "name": "Етрополе",
            "region": "Софийска",
            "population": 10951
        },
        {
            "name": "Завет",
            "region": "Разград",
            "population": 3250
        },
        {
            "name": "Земен",
            "region": "Перник",
            "population": 1749
        },
        {
            "name": "Златарица",
            "region": "Велико Търново",
            "population": 2723
        },
        {
            "name": "Златица",
            "region": "Софийска",
            "population": 5018
        },
        {
            "name": "Златоград",
            "region": "Смолян",
            "population": 7220
        },
        {
            "name": "Ивайловград",
            "region": "Хасково",
            "population": 3685
        },
        {
            "name": "Игнатиево",
            "region": "Варна",
            "population": 4288
        },
        {
            "name": "Искър",
            "region": "Плевен",
            "population": 3462
        },
        {
            "name": "Исперих",
            "region": "Разград",
            "population": 9080
        },
        {
            "name": "Ихтиман",
            "region": "Софийска",
            "population": 13591
        },
        {
            "name": "Каблешково",
            "region": "Бургас",
            "population": 2898
        },
        {
            "name": "Каварна",
            "region": "Добрич",
            "population": 11832
        },
        {
            "name": "Казанлък",
            "region": "Стара Загора",
            "population": 50850
        },
        {
            "name": "Калофер",
            "region": "Пловдив",
            "population": 2921
        },
        {
            "name": "Камено",
            "region": "Бургас",
            "population": 5334
        },
        {
            "name": "Каолиново",
            "region": "Шумен",
            "population": 1790
        },
        {
            "name": "Карлово",
            "region": "Пловдив",
            "population": 24288
        },
        {
            "name": "Карнобат",
            "region": "Бургас",
            "population": 18301
        },
        {
            "name": "Каспичан",
            "region": "Шумен",
            "population": 3186
        },
        {
            "name": "Кермен",
            "region": "Сливен",
            "population": 1738
        },
        {
            "name": "Килифарево",
            "region": "Велико Търново",
            "population": 2365
        },
        {
            "name": "Китен",
            "region": "Бургас",
            "population": 1131
        },
        {
            "name": "Клисура",
            "region": "Пловдив",
            "population": 1093
        },
        {
            "name": "Кнежа",
            "region": "Плевен",
            "population": 11060
        },
        {
            "name": "Козлодуй",
            "region": "Враца",
            "population": 13677
        },
        {
            "name": "Койнаре",
            "region": "Плевен",
            "population": 4541
        },
        {
            "name": "Копривщица",
            "region": "Софийска",
            "population": 2348
        },
        {
            "name": "Костандово",
            "region": "Пазарджик",
            "population": 4299
        },
        {
            "name": "Костенец",
            "region": "Софийска",
            "population": 6633
        },
        {
            "name": "Костинброд",
            "region": "Софийска",
            "population": 11849
        },
        {
            "name": "Котел",
            "region": "Сливен",
            "population": 5880
        },
        {
            "name": "Кочериново",
            "region": "Кюстендил",
            "population": 2288
        },
        {
            "name": "Кресна",
            "region": "Благоевград",
            "population": 3656
        },
        {
            "name": "Криводол",
            "region": "Враца",
            "population": 3259
        },
        {
            "name": "Кричим",
            "region": "Пловдив",
            "population": 8605
        },
        {
            "name": "Крумовград",
            "region": "Кърджали",
            "population": 4943
        },
        {
            "name": "Крън",
            "region": "Стара Загора",
            "population": 3382
        },
        {
            "name": "Кубрат",
            "region": "Разград",
            "population": 7750
        },
        {
            "name": "Куклен",
            "region": "Пловдив",
            "population": 5999
        },
        {
            "name": "Кула",
            "region": "Видин",
            "population": 3222
        },
        {
            "name": "Кърджали",
            "region": "Кърджали",
            "population": 49326
        },
        {
            "name": "Кюстендил",
            "region": "Кюстендил",
            "population": 48135
        },
        {
            "name": "Левски",
            "region": "Плевен",
            "population": 10922
        },
        {
            "name": "Летница",
            "region": "Ловеч",
            "population": 3483
        },
        {
            "name": "Ловеч",
            "region": "Ловеч",
            "population": 37568
        },
        {
            "name": "Лозница",
            "region": "Разград",
            "population": 2297
        },
        {
            "name": "Лом",
            "region": "Монтана",
            "population": 24522
        },
        {
            "name": "Луковит",
            "region": "Ловеч",
            "population": 9583
        },
        {
            "name": "Лъки",
            "region": "Пловдив",
            "population": 2402
        },
        {
            "name": "Любимец",
            "region": "Хасково",
            "population": 7681
        },
        {
            "name": "Лясковец",
            "region": "Велико Търново",
            "population": 8629
        },
        {
            "name": "Мадан",
            "region": "Смолян",
            "population": 6578
        },
        {
            "name": "Маджарово",
            "region": "Хасково",
            "population": 724
        },
        {
            "name": "Малко Търново",
            "region": "Бургас",
            "population": 2397
        },
        {
            "name": "Мартен",
            "region": "Русе",
            "population": 3704
        },
        {
            "name": "Мездра",
            "region": "Враца",
            "population": 10927
        },
        {
            "name": "Мелник",
            "region": "Благоевград",
            "population": 334
        },
        {
            "name": "Меричлери",
            "region": "Хасково",
            "population": 1812
        },
        {
            "name": "Мизия",
            "region": "Враца",
            "population": 3282
        },
        {
            "name": "Момин проход",
            "region": "Софийска",
            "population": 1611
        },
        {
            "name": "Момчилград",
            "region": "Кърджали",
            "population": 8317
        },
        {
            "name": "Монтана",
            "region": "Монтана",
            "population": 45191
        },
        {
            "name": "Мъглиж",
            "region": "Стара Загора",
            "population": 3479
        },
        {
            "name": "Неделино",
            "region": "Смолян",
            "population": 4273
        },
        {
            "name": "Несебър",
            "region": "Бургас",
            "population": 13710
        },
        {
            "name": "Николаево",
            "region": "Стара Загора",
            "population": 3147
        },
        {
            "name": "Никопол",
            "region": "Плевен",
            "population": 3907
        },
        {
            "name": "Нова Загора",
            "region": "Сливен",
            "population": 24074
        },
        {
            "name": "Нови Искър",
            "region": "София град",
            "population": 14005
        },
        {
            "name": "Нови пазар",
            "region": "Шумен",
            "population": 13652
        },
        {
            "name": "Обзор",
            "region": "Бургас",
            "population": 2480
        },
        {
            "name": "Омуртаг",
            "region": "Търговище",
            "population": 9195
        },
        {
            "name": "Опака",
            "region": "Търговище",
            "population": 2776
        },
        {
            "name": "Оряхово",
            "region": "Враца",
            "population": 5562
        },
        {
            "name": "Павел баня",
            "region": "Стара Загора",
            "population": 2843
        },
        {
            "name": "Павликени",
            "region": "Велико Търново",
            "population": 10952
        },
        {
            "name": "Пазарджик",
            "region": "Пазарджик",
            "population": 77103
        },
        {
            "name": "Панагюрище",
            "region": "Пазарджик",
            "population": 17929
        },
        {
            "name": "Перник",
            "region": "Перник",
            "population": 79044
        },
        {
            "name": "Перущица",
            "region": "Пловдив",
            "population": 5139
        },
        {
            "name": "Петрич",
            "region": "Благоевград",
            "population": 31141
        },
        {
            "name": "Пещера",
            "region": "Пазарджик",
            "population": 20467
        },
        {
            "name": "Пирдоп",
            "region": "Софийска",
            "population": 7536
        },
        {
            "name": "Плачковци",
            "region": "Габрово",
            "population": 1811
        },
        {
            "name": "Плевен",
            "region": "Плевен",
            "population": 112840
        },
        {
            "name": "Плиска",
            "region": "Шумен",
            "population": 1014
        },
        {
            "name": "Пловдив",
            "region": "Пловдив",
            "population": 368853
        },
        {
            "name": "Полски Тръмбеш",
            "region": "Велико Търново",
            "population": 4586
        },
        {
            "name": "Поморие",
            "region": "Бургас",
            "population": 14003
        },
        {
            "name": "Попово",
            "region": "Търговище",
            "population": 16047
        },
        {
            "name": "Пордим",
            "region": "Плевен",
            "population": 2111
        },
        {
            "name": "Правец",
            "region": "Софийска",
            "population": 4321
        },
        {
            "name": "Приморско",
            "region": "Бургас",
            "population": 3546
        },
        {
            "name": "Провадия",
            "region": "Варна",
            "population": 13145
        },
        {
            "name": "Първомай",
            "region": "Пловдив",
            "population": 14091
        },
        {
            "name": "Раднево",
            "region": "Стара Загора",
            "population": 13329
        },
        {
            "name": "Радомир",
            "region": "Перник",
            "population": 14342
        },
        {
            "name": "Разград",
            "region": "Разград",
            "population": 35177
        },
        {
            "name": "Разлог",
            "region": "Благоевград",
            "population": 12820
        },
        {
            "name": "Ракитово",
            "region": "Пазарджик",
            "population": 8648
        },
        {
            "name": "Раковски",
            "region": "Пловдив",
            "population": 15586
        },
        {
            "name": "Рила",
            "region": "Кюстендил",
            "population": 2783
        },
        {
            "name": "Роман",
            "region": "Враца",
            "population": 3013
        },
        {
            "name": "Рудозем",
            "region": "Смолян",
            "population": 3625
        },
        {
            "name": "Русе",
            "region": "Русе",
            "population": 160511
        },
        {
            "name": "Садово",
            "region": "Пловдив",
            "population": 2407
        },
        {
            "name": "Самоков",
            "region": "Софийска",
            "population": 27348
        },
        {
            "name": "Сандански",
            "region": "Благоевград",
            "population": 28342
        },
        {
            "name": "Сапарева баня",
            "region": "Кюстендил",
            "population": 4128
        },
        {
            "name": "Свети Влас",
            "region": "Бургас",
            "population": 4092
        },
        {
            "name": "Свиленград",
            "region": "Хасково",
            "population": 18802
        },
        {
            "name": "Свищов",
            "region": "Велико Търново",
            "population": 32132
        },
        {
            "name": "Своге",
            "region": "Софийска",
            "population": 8084
        },
        {
            "name": "Севлиево",
            "region": "Габрово",
            "population": 24558
        },
        {
            "name": "Сеново",
            "region": "Русе",
            "population": 1449
        },
        {
            "name": "Септември",
            "region": "Пазарджик",
            "population": 8504
        },
        {
            "name": "Силистра",
            "region": "Силистра",
            "population": 38364
        },
        {
            "name": "Симеоновград",
            "region": "Хасково",
            "population": 6988
        },
        {
            "name": "Симитли",
            "region": "Благоевград",
            "population": 7199
        },
        {
            "name": "Славяново",
            "region": "Плевен",
            "population": 4351
        },
        {
            "name": "Сливен",
            "region": "Сливен",
            "population": 96598
        },
        {
            "name": "Сливница",
            "region": "Софийска",
            "population": 7268
        },
        {
            "name": "Сливо поле",
            "region": "Русе",
            "population": 3322
        },
        {
            "name": "Смолян",
            "region": "Смолян",
            "population": 30785
        },
        {
            "name": "Смядово",
            "region": "Шумен",
            "population": 4049
        },
        {
            "name": "Созопол",
            "region": "Бургас",
            "population": 5236
        },
        {
            "name": "Сопот",
            "region": "Пловдив",
            "population": 9125
        },
        {
            "name": "София",
            "region": "София град",
            "population": 1281148
        },
        {
            "name": "Средец",
            "region": "Бургас",
            "population": 9161
        },
        {
            "name": "Стамболийски",
            "region": "Пловдив",
            "population": 11662
        },
        {
            "name": "Стара Загора",
            "region": "Стара Загора",
            "population": 149439
        },
        {
            "name": "Стражица",
            "region": "Велико Търново",
            "population": 5323
        },
        {
            "name": "Стралджа",
            "region": "Ямбол",
            "population": 6349
        },
        {
            "name": "Стрелча",
            "region": "Пазарджик",
            "population": 4226
        },
        {
            "name": "Суворово",
            "region": "Варна",
            "population": 5054
        },
        {
            "name": "Сунгурларе",
            "region": "Бургас",
            "population": 3292
        },
        {
            "name": "Сухиндол",
            "region": "Велико Търново",
            "population": 1996
        },
        {
            "name": "Съединение",
            "region": "Пловдив",
            "population": 5788
        },
        {
            "name": "Сърница",
            "region": "Пазарджик",
            "population": 3590
        },
        {
            "name": "Твърдица",
            "region": "Сливен",
            "population": 6082
        },
        {
            "name": "Тервел",
            "region": "Добрич",
            "population": 6764
        },
        {
            "name": "Тетевен",
            "region": "Ловеч",
            "population": 10185
        },
        {
            "name": "Тополовград",
            "region": "Хасково",
            "population": 5474
        },
        {
            "name": "Троян",
            "region": "Ловеч",
            "population": 22179
        },
        {
            "name": "Трън",
            "region": "Перник",
            "population": 2552
        },
        {
            "name": "Тръстеник",
            "region": "Плевен",
            "population": 4536
        },
        {
            "name": "Трявна",
            "region": "Габрово",
            "population": 9621
        },
        {
            "name": "Тутракан",
            "region": "Силистра",
            "population": 9567
        },
        {
            "name": "Търговище",
            "region": "Търговище",
            "population": 39836
        },
        {
            "name": "Угърчин",
            "region": "Ловеч",
            "population": 2731
        },
        {
            "name": "Хаджидимово",
            "region": "Благоевград",
            "population": 2702
        },
        {
            "name": "Харманли",
            "region": "Хасково",
            "population": 19617
        },
        {
            "name": "Хасково",
            "region": "Хасково",
            "population": 77365
        },
        {
            "name": "Хисаря",
            "region": "Пловдив",
            "population": 7264
        },
        {
            "name": "Цар Калоян",
            "region": "Разград",
            "population": 3742
        },
        {
            "name": "Царево",
            "region": "Бургас",
            "population": 6268
        },
        {
            "name": "Чепеларе",
            "region": "Смолян",
            "population": 5332
        },
        {
            "name": "Червен бряг",
            "region": "Плевен",
            "population": 13958
        },
        {
            "name": "Черноморец",
            "region": "Бургас",
            "population": 2186
        },
        {
            "name": "Чипровци",
            "region": "Монтана",
            "population": 1835
        },
        {
            "name": "Чирпан",
            "region": "Стара Загора",
            "population": 16517
        },
        {
            "name": "Шабла",
            "region": "Добрич",
            "population": 3488
        },
        {
            "name": "Шивачево",
            "region": "Сливен",
            "population": 3833
        },
        {
            "name": "Шипка",
            "region": "Стара Загора",
            "population": 1355
        },
        {
            "name": "Шумен",
            "region": "Шумен",
            "population": 89365
        },
        {
            "name": "Ябланица",
            "region": "Ловеч",
            "population": 2799
        },
        {
            "name": "Якоруда",
            "region": "Благоевград",
            "population": 5512
        },
        {
            "name": "Ямбол",
            "region": "Ямбол",
            "population": 77150
        }
    ]
    let option = document.createElement('option');

    option.innerText= 'All';


    document.getElementById('dropdownTown').appendChild(option);


    for (let town of towns) {




        if (town.region === region){

            let option = document.createElement('option');

            option.innerText= town.name;


            document.getElementById('dropdownTown').appendChild(option);

        }
    }
}


function hideToUpload() {

    document.getElementById('upload-form').style.display= 'none';
}




