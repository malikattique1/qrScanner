




$(document).ready(function () {
    // var qrcode = new QRCode(document.getElementById("qrcode"), {
    //     width: 100,
    //     height: 100
    // });

    // function makeCode() {
    //     var elText = document.getElementById("text");
    //     //   var elText2 = document.getElementById("text2");
    //     //   var elText3 = document.getElementById("text3");
    //     var elImage = document.getElementById("image");
    //     var elColor = document.getElementById("color");

    //     //   var combinedValue = elText.value + "\n" + elText2.value + "\n" + elText3.value;
    //     var combinedValue = elText.value;


    //     // QR code options
    //     var options = {
    //         text: combinedValue,
    //         width: 100,
    //         height: 100,
    //         colorDark: elColor.value,
    //         image: elImage.files[0]
    //     };

    //     if (options.image) {
    //         var reader = new FileReader();
    //         reader.onload = function (e) {
    //             options.image = e.target.result;
    //             qrcode.makeCode(JSON.stringify(options));
    //         };
    //         reader.readAsDataURL(options.image);
    //     } else {
    //         qrcode.makeCode(JSON.stringify(options));
    //     }
    // }

    // makeCode();

    // // $("#text, #text2, #text3, #image, #color").on("input", function() {
    // //   makeCode();
    // // });
    // $("#text, #image, #color").on("input", function () {
    //     makeCode();
    // });






    // var qrCodeElement = document.getElementById("qrcode");

    // function generateQRCode() {
    //   var text = document.getElementById("text").value;
    //   var color = document.getElementById("color").value;

    //   var qrCode = new QRious({
    //     value: text,
    //     size: 200,
    //     foreground: color,
    //     background: "#ffffff"
    //   });

    //   qrCodeElement.innerHTML = ''; // Clear existing content

    //   var qrCodeImage = document.createElement("img");
    //   qrCodeImage.src = qrCode.toDataURL();
    //   qrCodeImage.className = "qrCode";
    //   qrCodeElement.appendChild(qrCodeImage);
    // }

    // $("#createBtn").on("click", function() {
    //   generateQRCode();
    // });





    var qrCodeElement = document.getElementById("qrcode");
    generateQRCode();


    function generateQRCode() {
        //   var text = document.getElementById("text").value || document.getElementById("url").value;
        //   var url = document.getElementById("url").value;


        var textInput = document.getElementById("text");
        var urlInput = document.getElementById("url");
        var text = textInput.value || urlInput.value;


        // var color1 = document.getElementById("color1");
        var color2 = document.getElementById("color2");
        var color = color1.value || color2.value;
        console.log("color",color)
        console.log("color1",color1)
        console.log("color2",color2)

        // var color = document.getElementById("color").value;


        var logoImageInput = document.getElementById("image1");

        var qrCode = new QRious({
            value: text,
            size: 200,
            foreground: color,
            background: "#ffffff"
        });

        qrCodeElement.innerHTML = ''; // Clear existing content

        var qrCodeImage = document.createElement("img");
        qrCodeImage.src = qrCode.toDataURL();
        qrCodeImage.className = "qrCode";
        qrCodeElement.appendChild(qrCodeImage);

        if (logoImageInput.files && logoImageInput.files[0]) {
            var logoImage = document.createElement("img");
            logoImage.src = URL.createObjectURL(logoImageInput.files[0]);
            logoImage.className = "logo";
            logoImage.style.width = "20px";
            logoImage.style.height = "20px";
            qrCodeElement.appendChild(logoImage);
        }
    }

    $("#createBtn").on("click", function () {
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


