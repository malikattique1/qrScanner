




$(document).ready(function () {

    // var qrCodeElement = document.getElementById("qrcode");
    // generateQRCode();


    // function generateQRCode() {
    //     //   var text = document.getElementById("text").value || document.getElementById("url").value;
    //     //   var url = document.getElementById("url").value;


    //     var textInput = document.getElementById("text");
    //     var urlInput = document.getElementById("url");
    //     var text = textInput.value || urlInput.value;


    //     var color1 = document.getElementById("color1");
    //     var color2 = document.getElementById("color2");
    //     var color3 = document.getElementById("color3");
    //     // var color4 = document.getElementById("color4");
    //     // var color = color2.value || color1.value ;
    //     // var color = color1.value.trim() !== "#000000" ? color1.value : color2.value;
    //     if (color1.value.trim() !== "#000000") {
    //         color = color1.value;
    //       } else if (color2.value.trim() !== "#000000") {
    //         color = color2.value;
    //       } else if (color3.value.trim() !== "#000000") {
    //         color = color3.value;
    //       }
    //        else {
    //         color = "#000000";
    //       }

    //     var backgroundcolor1 = document.getElementById("backgroundcolor1");
    //     var backgroundcolor2 = document.getElementById("backgroundcolor2");
    //     var backgroundcolor3 = document.getElementById("backgroundcolor3");
    //     if (backgroundcolor1.value.trim() !== "#000000") {
    //         backgroundcolor = backgroundcolor1.value;
    //       } else if (backgroundcolor2.value.trim() !== "#000000") {
    //         backgroundcolor = backgroundcolor2.value;
    //       } else if (backgroundcolor3.value.trim() !== "#000000") {
    //         backgroundcolor = backgroundcolor3.value;
    //       }
    //       else {
    //         backgroundcolor = "#ffffff";
    //       }

    //     var logoImageInput = document.getElementById("image1");

    //     var qrCode = new QRious({
    //         value: text,
    //         size: 200,
    //         foreground: color,
    //         background: backgroundcolor
    //     });

    //     qrCodeElement.innerHTML = ''; // Clear existing content

    //     var qrCodeImage = document.createElement("img");
    //     qrCodeImage.src = qrCode.toDataURL();
    //     qrCodeImage.className = "qrCode";
    //     qrCodeElement.appendChild(qrCodeImage);

    //     if (logoImageInput.files && logoImageInput.files[0]) {
    //         var logoImage = document.createElement("img");
    //         logoImage.src = URL.createObjectURL(logoImageInput.files[0]);
    //         logoImage.className = "logo";
    //         logoImage.style.width = "20px";
    //         logoImage.style.height = "20px";
    //         qrCodeElement.appendChild(logoImage);
    //     }
    // }

    // $("#createBtn").on("click", function () {
    //     generateQRCode();
    // });



    function handleRangeChange() {
        var rangeValue = parseInt(rangeInput.value);
        options.width = rangeValue;
        options.height = rangeValue;
        generateQRCode();
      }
      
    var rangeInput = document.getElementById('range');
    rangeInput.addEventListener('input', handleRangeChange);







    var options = {
        text: ' ',
        width: 300,
        height: 300,
        colorDark: '#000000',
        colorLight: '#ffffff',
        correctLevel: QRCode.CorrectLevel.H,
        // logo: null,
        logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhs0k91D_L-fOJHyofE_jKGGBQBQ70bzd_ow&usqp=CAU',
        logoWidth: 20,
        logoHeight: 20,
        logoBackgroundColor: '#ffffff',
        eyeColorDark: '#0000ff',
        eyeColorLight: '#ff0000',
    };

    var qrcode = new QRCode('qrcode', options);

    document.addEventListener('DOMContentLoaded', function () {

        qrcode.clear(); 
        qrcode.makeCode(options.text); 
    });














    var options = {
        text: 'Sample Text',
        width: 300,
        height: 300,
        colorDark: '#000000',
        colorLight: '#ffffff',
        correctLevel: QRCode.CorrectLevel.H,
        logo: null,
        logoWidth: 50,
        logoHeight: 50,
        logoBackgroundColor: '#ffffff',
        eyeColorDark: '#0000ff',
        eyeColorLight: '#ff0000',
    };
    var qrcode = null; 

    function generateQRCode() {

        // if (qrcode) {
        //   qrcode.clear(); // Clear the existing QR code
        // }



    
        var rangeValue = parseInt(rangeInput.value);
        options.width = rangeValue;
        options.height = rangeValue;





        var textInput = document.getElementById('text');

        var urlInput = document.getElementById('url');

        var contactInputs = document.getElementsByClassName('contactInfo');
        var contactInputstexts = ''; 
        for (var i = 0; i < contactInputs.length; i++) {
            var inputValue = contactInputs[i].value;
            console.log("inputValue", inputValue);
            if (inputValue !== '') {
                contactInputstexts += inputValue+'\n'; 
            }
        }

        var wifiInputs = document.getElementsByClassName('wifiInfo');
        var wifiInputstexts = ''; 
        for (var i = 0; i < wifiInputs.length; i++) {
            var inputValue = wifiInputs[i].value;
            console.log("inputValue", inputValue);
            if (inputValue !== '') {
                wifiInputstexts += inputValue+'\n'; 
            }
        }

        
        var locationInputs = document.getElementsByClassName('locationInfo');
        var locationInputstexts = ''; 
        for (var i = 0; i < locationInputs.length; i++) {
            var inputValue = locationInputs[i].value;
            console.log("inputValue", inputValue);
            if (inputValue !== '') {
                locationInputstexts += inputValue+'\n'; 
            }
        }

        var calendarInputs = document.getElementsByClassName('calendarInfo');
        var calendarInputstexts = ''; 
        for (var i = 0; i < calendarInputs.length; i++) {
            var inputValue = calendarInputs[i].value;
            console.log("inputValue", inputValue);
            if (inputValue !== '') {
                calendarInputstexts += inputValue+'\n'; 
            }
        }


    

        var text = textInput.value || urlInput.value || contactInputstexts || wifiInputstexts  || locationInputstexts || calendarInputstexts;




        options.text = text;
        if (!text) {
            return;
        }

        var color1 = document.getElementById('color1');
        var color2 = document.getElementById('color2');
        var color3 = document.getElementById('color3');
        var color4 = document.getElementById('color4');
        var color5 = document.getElementById('color5');
        var color6 = document.getElementById('color6');



        if (color1.value.trim() !== '#000000') {
            options.colorDark = color1.value;
        } else if (color2.value.trim() !== '#000000') {
            options.colorDark = color2.value;
        } else if (color3.value.trim() !== '#000000') {
            options.colorDark = color3.value;
        }
        else if (color4.value.trim() !== '#000000') {
            options.colorDark = color4.value;
        }
        else if (color5.value.trim() !== '#000000') {
            options.colorDark = color5.value;
        }
        else if (color6.value.trim() !== '#000000') {
            options.colorDark = color6.value;
        }else {
            options.colorDark = '#000000';
        }

        var backgroundcolor1 = document.getElementById('backgroundcolor1');
        var backgroundcolor2 = document.getElementById('backgroundcolor2');
        var backgroundcolor3 = document.getElementById('backgroundcolor3');
        var backgroundcolor4 = document.getElementById('backgroundcolor4');
        var backgroundcolor5 = document.getElementById('backgroundcolor5');
        var backgroundcolor6 = document.getElementById('backgroundcolor6');


        if (backgroundcolor1.value.trim() !== '#000000') {
            options.colorLight = backgroundcolor1.value;
        } else if (backgroundcolor2.value.trim() !== '#000000') {
            options.colorLight = backgroundcolor2.value;
        } else if (backgroundcolor3.value.trim() !== '#000000') {
            options.colorLight = backgroundcolor3.value;
        }
        else if (backgroundcolor4.value.trim() !== '#000000') {
            options.colorLight = backgroundcolor4.value;
        }else if (backgroundcolor5.value.trim() !== '#000000') {
            options.colorLight = backgroundcolor5.value;
        }else if (backgroundcolor6.value.trim() !== '#000000') {
            options.colorLight = backgroundcolor6.value;
        } else {
            options.colorLight = '#ffffff';
        }


        var eyecolor1 = document.getElementById('eyecolor1');
        var eyecolor2 = document.getElementById('eyecolor2');
        var eyecolor3 = document.getElementById('eyecolor3');
        var eyecolor4 = document.getElementById('eyecolor4');
        var eyecolor5 = document.getElementById('eyecolor5');
        var eyecolor6 = document.getElementById('eyecolor6');

        console.log(eyecolor1.value)
        if (eyecolor1.value.trim() !== '#000000') {
            options.eyeColorDark = eyecolor1.value;
        } else if (eyecolor2.value.trim() !== '#000000') {
            options.eyeColorDark = eyecolor2.value;
        } else if (eyecolor3.value.trim() !== '#000000') {
            options.eyeColorDark = eyecolor3.value;
        }
        else if (eyecolor4.value.trim() !== '#000000') {
            options.eyeColorDark = eyecolor4.value;
        }else if (eyecolor5.value.trim() !== '#000000') {
            options.eyeColorDark = eyecolor5.value;
        }else if (eyecolor6.value.trim() !== '#000000') {
            options.eyeColorDark = eyecolor6.value;
        } else {
            options.eyeColorDark = '#0000ff';
        }




        var logoImageInput1 = document.getElementById('image1');
        var logoImageInput2 = document.getElementById('image2');
        var logoImageInput3 = document.getElementById('image3');
        var logoImageInput4 = document.getElementById('image4');
        var logoImageInput5 = document.getElementById('image5');
        var logoImageInput6 = document.getElementById('image6');



        if (logoImageInput1.files && logoImageInput1.files[0]) {
            options.logo = logoImageInput1.files[0];
            options.logoWidth = 50;
            options.logoHeight = 50;
        }
        else if (logoImageInput2.files && logoImageInput2.files[0]) {
            options.logo = logoImageInput2.files[0];
            options.logoWidth = 50;
            options.logoHeight = 50;
        }
        else if (logoImageInput3.files && logoImageInput3.files[0]) {
            options.logo = logoImageInput3.files[0];
            options.logoWidth = 50;
            options.logoHeight = 50;
        }
        else if (logoImageInput4.files && logoImageInput4.files[0]) {
            options.logo = logoImageInput4.files[0];
            options.logoWidth = 50;
            options.logoHeight = 50;
        }
        else if (logoImageInput5.files && logoImageInput5.files[0]) {
            options.logo = logoImageInput5.files[0];
            options.logoWidth = 50;
            options.logoHeight = 50;
        }
        else if (logoImageInput6.files && logoImageInput6.files[0]) {
            options.logo = logoImageInput6.files[0];
            options.logoWidth = 50;
            options.logoHeight = 50;
        }
        else {
            options.logo = null;
            options.logoWidth = 0;
            options.logoHeight = 0;
        }

        var qrcodeElement = document.getElementById('qrcode');
        qrcodeElement.innerHTML = ''; // Clear existing content

        qrcode = new QRCode(qrcodeElement, options);

        var canvas = document.createElement('canvas');
        var context = canvas.getContext('2d');
        canvas.width = options.width;
        canvas.height = options.height;
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(qrcodeElement.firstChild, 0, 0);

        if (logoImageInput1.files && logoImageInput1.files[0]) {
            var existingLogoImage = document.querySelector('.logo');
            if (existingLogoImage) {
                existingLogoImage.remove();
            }

            var logoImage = document.createElement('img');
            logoImage.src = URL.createObjectURL(logoImageInput1.files[0]);
            logoImage.className = 'logo';
            logoImage.style.width = '20px';
            logoImage.style.height = '20px';
            qrcodeElement.appendChild(logoImage);
        }
        else if (logoImageInput2.files && logoImageInput2.files[0]) {
            var existingLogoImage = document.querySelector('.logo');
            if (existingLogoImage) {
                existingLogoImage.remove();
            }

            var logoImage = document.createElement('img');
            logoImage.src = URL.createObjectURL(logoImageInput2.files[0]);
            logoImage.className = 'logo';
            logoImage.style.width = '20px';
            logoImage.style.height = '20px';
            qrcodeElement.appendChild(logoImage);
        }
        else if (logoImageInput3.files && logoImageInput3.files[0]) {
            var existingLogoImage = document.querySelector('.logo');
            if (existingLogoImage) {
                existingLogoImage.remove();
            }

            var logoImage = document.createElement('img');
            logoImage.src = URL.createObjectURL(logoImageInput3.files[0]);
            logoImage.className = 'logo';
            logoImage.style.width = '20px';
            logoImage.style.height = '20px';
            qrcodeElement.appendChild(logoImage);
        }
        else if (logoImageInput4.files && logoImageInput4.files[0]) {
            var existingLogoImage = document.querySelector('.logo');
            if (existingLogoImage) {
                existingLogoImage.remove();
            }

            var logoImage = document.createElement('img');
            logoImage.src = URL.createObjectURL(logoImageInput4.files[0]);
            logoImage.className = 'logo';
            logoImage.style.width = '20px';
            logoImage.style.height = '20px';
            qrcodeElement.appendChild(logoImage);
        }
        else if (logoImageInput5.files && logoImageInput5.files[0]) {
            var existingLogoImage = document.querySelector('.logo');
            if (existingLogoImage) {
                existingLogoImage.remove();
            }

            var logoImage = document.createElement('img');
            logoImage.src = URL.createObjectURL(logoImageInput5.files[0]);
            logoImage.className = 'logo';
            logoImage.style.width = '20px';
            logoImage.style.height = '20px';
            qrcodeElement.appendChild(logoImage);
        }
        else if (logoImageInput6.files && logoImageInput6.files[0]) {
            var existingLogoImage = document.querySelector('.logo');
            if (existingLogoImage) {
                existingLogoImage.remove();
            }

            var logoImage = document.createElement('img');
            logoImage.src = URL.createObjectURL(logoImageInput6.files[0]);
            logoImage.className = 'logo';
            logoImage.style.width = '20px';
            logoImage.style.height = '20px';
            qrcodeElement.appendChild(logoImage);
        }
    }

    document.getElementById('createBtn').addEventListener('click', function () {
        generateQRCode();
    });






    $('.link').on('click', function () {
        var content = $(this).text();
        var convertedText = content.toLowerCase();
        var targetDiv = $('#' + convertedText);
        $('.left-side').not(targetDiv).hide();
        targetDiv.show();

        $('.left-side').not(targetDiv).find('input').val('');
    });

    $('.link').on('click', function () {
        var content = $(this).text();
        var convertedText = content.toLowerCase();
        var targetDiv = $('#' + convertedText);
        $('.left-side').not(targetDiv).hide();
        targetDiv.show();
      
        $('.left-side').not(targetDiv).find('input').val('');
        // Remove underline from previously selected link
        $('.link').removeClass('selected');
        // Add underline to the clicked link
        $(this).addClass('selected');
      });
      




    $("#enterContent").click(function () {
        $("#textDiv").toggle("slow");
    });

    $("#enterColor").click(function () {
        $("#colordiv").toggle("slow");
    });

    $("#enterImage").click(function () {
        $("#imagediv").toggle("slow");
    });
    $("#enterImage11").click(function () {
        $("#imagediv11").toggle("slow");
    });





    $("#enterWebsite").click(function () {
        $("#websiteDiv").toggle("slow");
    });

    $("#enterColor2").click(function () {
        $("#colordiv2").toggle("slow");
    });

    $("#enterImage2").click(function () {
        $("#imagediv2").toggle("slow");
    });
    $("#enterImage22").click(function () {
        $("#imagediv22").toggle("slow");
    });





    $("#enterContact").click(function () {
        $("#contactDiv").toggle("slow");
    });

    $("#enterColor3").click(function () {
        $("#colordiv3").toggle("slow");
    });

    $("#enterImage3").click(function () {
        $("#imagediv3").toggle("slow");
    });
    $("#enterImage33").click(function () {
        $("#imagediv33").toggle("slow");
    });





    $("#enterWifi").click(function () {
        $("#wifiDiv").toggle("slow");
    });

    $("#enterColor4").click(function () {
        $("#colordiv4").toggle("slow");
    });

    $("#enterImage4").click(function () {
        $("#imagediv4").toggle("slow");
    });
    $("#enterImage44").click(function () {
        $("#imagediv44").toggle("slow");
    });



    $("#enterLocation").click(function () {
        $("#locationDiv").toggle("slow");
    });

    $("#enterColor5").click(function () {
        $("#colordiv5").toggle("slow");
    });

    $("#enterImage5").click(function () {
        $("#imagediv5").toggle("slow");
    });
    $("#enterImage55").click(function () {
        $("#imagediv55").toggle("slow");
    });



    $("#enterCalendar").click(function () {
        $("#calendarDiv").toggle("slow");
    });

    $("#enterColor6").click(function () {
        $("#colordiv6").toggle("slow");
    });

    $("#enterImage6").click(function () {
        $("#imagediv6").toggle("slow");
    });
    $("#enterImage66").click(function () {
        $("#imagediv66").toggle("slow");
    });













    $('.singleColor').each(function () {
        $(this).prop('checked', true);
    });

    $('.singlecolor, .backgroundcolor').show();
    $('.gradientcolor, .gradientcolor, .eyecolor,.eyecolorlabel, .eyecolor input').hide();

    // Event handler for colorType radio buttons
    $('input[name="colorType1"],input[name="colorType2"],input[name="colorType3"],input[name="colorType4"],input[name="colorType5"],input[name="colorType6"]').on('change', function () {
        if ($(this).attr('id') === 'singleColor') {
            $('.singlecolor, .backgroundcolor').show();
            $('.gradientcolor, .eyecolor,.eyecolorlabel, .eyecolor input').hide();
        } else if ($(this).attr('id') === 'gradientColor') {
            $('.singlecolor, .gradientcolor').show();
            $('.eyecolor, .eyecolorlabel, .eyecolor input').hide();
        }
    });

    // Event handler for customEyeColor checkbox
    $('.customEyeColor').on('change', function () {
        if ($(this).is(':checked')) {
            $('.eyecolorlabel,.eyecolor, .eyecolor input').show();
        } else {
            $('.eyecolorlabel,.eyecolor, .eyecolor input').hide();
        }
    });





















    function downloadQRCode() {
        var qrCodeElement = $("#qrcode");
        var qrCodeImgSrc = qrCodeElement.find("img").attr("src");

        var link = document.createElement("a");
        link.href = qrCodeImgSrc;
        link.download = "qrcode.png";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    $("#downloadBtn").on("click", function () {
        downloadQRCode();
    });

















});


