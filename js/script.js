




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









    var options = {
        text: 'Sample Text',
        width: 200,
        height: 200,
        colorDark: '#000000',
        colorLight: '#ffffff',
        correctLevel: QRCode.CorrectLevel.H,
        logo: null,
        logoWidth: 0,
        logoHeight: 0,
        logoBackgroundColor: '#ffffff',
        eyeColorDark: '#0000ff',
        eyeColorLight: '#ff0000',
    };

    var qrcode = new QRCode('qrcode', options); // Create the QR code immediately

    document.addEventListener('DOMContentLoaded', function () {
        qrcode.clear(); // Clear the existing QR code
        qrcode.makeCode(options.text); // Generate the QR code with the default text
    });






    var options = {
        text: 'Sample Text',
        width: 200,
        height: 200,
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
    var qrcode = null; // Keep track of the current QR code

    function generateQRCode() {

        // if (qrcode) {
        //   qrcode.clear(); // Clear the existing QR code
        // }

        var textInput = document.getElementById('text');
        var urlInput = document.getElementById('url');
        var text = textInput.value || urlInput.value;
        options.text = text;
        if (!text) {
            return;
        }

        var color1 = document.getElementById('color1');
        var color2 = document.getElementById('color2');
        var color3 = document.getElementById('color3');

        if (color1.value.trim() !== '#000000') {
            options.colorDark = color1.value;
        } else if (color2.value.trim() !== '#000000') {
            options.colorDark = color2.value;
        } else if (color3.value.trim() !== '#000000') {
            options.colorDark = color3.value;
        } else {
            options.colorDark = '#000000';
        }

        var backgroundcolor1 = document.getElementById('backgroundcolor1');
        var backgroundcolor2 = document.getElementById('backgroundcolor2');
        var backgroundcolor3 = document.getElementById('backgroundcolor3');

        if (backgroundcolor1.value.trim() !== '#000000') {
            options.colorLight = backgroundcolor1.value;
        } else if (backgroundcolor2.value.trim() !== '#000000') {
            options.colorLight = backgroundcolor2.value;
        } else if (backgroundcolor3.value.trim() !== '#000000') {
            options.colorLight = backgroundcolor3.value;
        } else {
            options.colorLight = '#ffffff';
        }


        var eyecolor1 = document.getElementById('eyecolor1');
        var eyecolor2 = document.getElementById('eyecolor2');
        var eyecolor3 = document.getElementById('eyecolor3');
        console.log(eyecolor1.value)
        if (eyecolor1.value.trim() !== '#000000') {
            options.eyeColorDark = eyecolor1.value;
        } else if (eyecolor2.value.trim() !== '#000000') {
            options.eyeColorDark = eyecolor2.value;
        } else if (eyecolor3.value.trim() !== '#000000') {
            options.eyeColorDark = eyecolor3.value;
        } else {
            options.eyeColorDark = '#0000ff';
        }




        var logoImageInput1 = document.getElementById('image1');
        var logoImageInput2 = document.getElementById('image2');
        var logoImageInput3 = document.getElementById('image3');


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

        // Clear data values of not(targetDiv)
        $('.left-side').not(targetDiv).find('input').val('');
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
    $('input[name="colorType1"],input[name="colorType2"],input[name="colorType3"],input[name="colorType4"],input[name="colorType5"]').on('change', function () {
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
        link.download = "qrcode.png"; // Set the download file name
        // Append the link to the document body
        document.body.appendChild(link);
        // Trigger the link click to start the download
        link.click();
        // Remove the link from the document body
        document.body.removeChild(link);
    }

    // Attach click event handler to the download button
    $("#downloadBtn").on("click", function () {
        downloadQRCode();
    });











});


