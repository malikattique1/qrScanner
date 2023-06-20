$(document).ready(function () {
    var qrcode = new QRCode(document.getElementById("qrcode"), {
        width: 100,
        height: 100
    });

    function makeCode() {
        var elText = document.getElementById("text");
        //   var elText2 = document.getElementById("text2");
        //   var elText3 = document.getElementById("text3");
        var elImage = document.getElementById("image");
        var elColor = document.getElementById("color");

        //   var combinedValue = elText.value + "\n" + elText2.value + "\n" + elText3.value;
        var combinedValue = elText.value;


        // QR code options
        var options = {
            text: combinedValue,
            width: 100,
            height: 100,
            colorDark: elColor.value,
            image: elImage.files[0]
        };

        if (options.image) {
            var reader = new FileReader();
            reader.onload = function (e) {
                options.image = e.target.result;
                qrcode.makeCode(JSON.stringify(options));
            };
            reader.readAsDataURL(options.image);
        } else {
            qrcode.makeCode(JSON.stringify(options));
        }
    }

    makeCode();

    // $("#text, #text2, #text3, #image, #color").on("input", function() {
    //   makeCode();
    // });
    $("#text, #image, #color").on("input", function () {
        makeCode();
    });
});





























$(document).ready(function () {




    $("#enterContent").click(function () {
        $("#textDiv").toggle("slow");
    });

    $("#enterColor").click(function () {
        $("#colordiv").toggle("slow");
    });

    $("#enterImage").click(function () {
        $("#imagediv").toggle("slow");
    });


    $('.link').on('click', function () {
        var content = $(this).text();
        console.log(content)
        var convertedText = content.toLowerCase();
        var targetDiv = $('#' + convertedText);
        $('.left-side').not(targetDiv).hide();
        targetDiv.show();

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










    // // Set the initial state
    // $('#singleColor').prop('checked', true);
    // $('#singlecolor, #backgroundcolor').show();
    // $('#gradientcolor, #gradientcolor, #eyecolor,#eyecolorlabel, #eyecolor input').hide();

    // // Event handler for colorType radio buttons
    // $('input[name="colorType"]').on('change', function() {
    //   if ($(this).attr('id') === 'singleColor') {
    //     $('#singlecolor, #backgroundcolor').show();
    //     $('#gradientcolor, #eyecolor,#eyecolorlabel, #eyecolor input').hide();
    //   } else if ($(this).attr('id') === 'gradientColor') {
    //     $('#singlecolor, #gradientcolor').show();
    //     $('#eyecolor, #eyecolorlabel, #eyecolor input').hide();
    //   }
    // });

    // // Event handler for customEyeColor checkbox
    // $('#customEyeColor').on('change', function() {
    //   if ($(this).is(':checked')) {
    //     $('#eyecolorlabel,#eyecolor, #eyecolor input').show();
    //   } else {
    //     $('#eyecolorlabel,#eyecolor, #eyecolor input').hide();
    //   }
    // });




    $('.singleColor').each(function () {
        $(this).prop('checked', true);
    });

    $('.singlecolor, .backgroundcolor').show();
    $('.gradientcolor, .gradientcolor, .eyecolor,.eyecolorlabel, .eyecolor input').hide();

    // Event handler for colorType radio buttons
    $('input[name="colorType1"],input[name="colorType2"],input[name="colorType3"]').on('change', function () {
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












});


