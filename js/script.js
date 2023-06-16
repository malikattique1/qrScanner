$(document).ready(function() {
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
        reader.onload = function(e) {
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
    $("#text, #image, #color").on("input", function() {
        makeCode();
      });
  });
















// fromText = document.querySelector(".from-text"),
//     toText = document.querySelector(".to-text"),
//     exchageIcon = document.querySelector(".exchange"),
//     selectTag = document.querySelectorAll("select"),
//     icons = document.querySelectorAll(".row i");
// translateBtn = document.querySelector("#translate"),


//     selectTag.forEach((tag, id) => {
//         console.log("tagx", tag);
//         console.log("id", id);
//         for (let country_code in countries) {
//             let selected =
//                 id === 0 ? (country_code === "en-GB" ? "selected" : "") :
//                     id === 1 ? (country_code === "hi-IN" ? "selected" : "") :
//                         id === 2 ? (country_code === "en-GB" ? "selected" : "") :
//                             id === 3 ? (country_code === "hi-IN" ? "selected" : "") :
//                                 "";
//             let option = `<option ${selected} value="${country_code}">${countries[country_code]}</option>`;
//             tag.insertAdjacentHTML("beforeend", option);
//         }
//     });


// fromText.addEventListener("keyup", translateText);

// function translateText() {
//     let text = fromText.value.trim(),
//         translateFrom = selectTag[0].value,
//         translateTo = selectTag[1].value;
//     if (!text) {
//         toText.value = "";
//         return;
//     }
//     toText.setAttribute("placeholder", "Translating...");
//     let apiUrl = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${translateFrom}|${translateTo}`;
//     fetch(apiUrl)
//         .then(res => res.json())
//         .then(data => {
//             toText.value = data.responseData.translatedText;
//             toText.setAttribute("placeholder", "Translation");
//         });
// }

// function translateTextImg() {
//     let fromText = document.getElementById("from-text2");
//     let toText = document.getElementById("to-text2");
//     let selectTag = document.querySelectorAll("select");
//     console.log("selectTags", selectTag)
//     // return
//     if (!fromText.value) {
//         toText.value = "";
//     }
//     let text = fromText.value.trim();
//     console.log(text);
//     let translateFrom = selectTag[2].value;
//     let translateTo = selectTag[3].value;
//     if (!text) return;
//     toText.setAttribute("placeholder", "Translating...");
//     let apiUrl = `https://api.mymemory.translated.net/get?q=${text}&langpair=${translateFrom}|${translateTo}`;
//     fetch(apiUrl)
//         .then(res => res.json())
//         .then(data => {
//             toText.value = data.responseData.translatedText;
//             data.matches.forEach(data => {
//                 if (data.id === 0) {
//                     toText.value = data.translation;
//                 }
//             });
//             toText.setAttribute("placeholder", "Translation");
//         });
// }



// // undo Redo

// redoStack = [];
// undoStack = [];
// function undoOperation() {
//     console.log(undoStack)
//     if (undoStack.length >= 0) {
//         console.log("insideundo")
//         console.log("undoStack", undoStack)
//         var currentSentence = fromText.value;
//         var words = currentSentence.split(" ");
//         poppedWord = words.pop();
//         console.log("pw", poppedWord)
//         undoStack.push(poppedWord);
//         redoStack.push(poppedWord);
//         console.log("undoStack", undoStack)
//         console.log("redoStack", redoStack)
//         var newSentence = words.join(" ");
//         fromText.value = newSentence;
//     }
// }

// function redoOperation() {
//     if (redoStack.length >= 0) {
//         console.log("insideredo")
//         console.log("redoStack", redoStack)
//         var poppedWord = redoStack.pop();
//         var currentSentence = fromText.value;
//         var words = currentSentence.split(" ");
//         words.push(poppedWord);
//         var newSentence = words.join(" ");
//         fromText.value = newSentence;
//         undoStack.push(poppedWord);
//     }
// }


// // copy & volume

// icons.forEach(icon => {
//     icon.addEventListener("click", ({ target }) => {
//         let fromText = document.querySelector(".from-text");
//         let toText = document.querySelector(".to-text");
//         let fromText2 = document.getElementById("from-text2");
//         let toText2 = document.getElementById("to-text2");
//         console.log(target)
//         if (target.className === "fas fa-copy") {
//             // if (target.classList.contains("fa-copy")) {
//             if (target.id == "from") {
//                 navigator.clipboard.writeText(fromText.value);
//             }
//             else {
//                 navigator.clipboard.writeText(toText.value);
//             }

//         }
//         if (target.className === "fas fa-copy2 fa-copy") {
//             // if (target.classList.contains("fa-copy2")) {
//             if (target.id == "from") {
//                 navigator.clipboard.writeText(fromText2.value);
//             }
//             else {
//                 navigator.clipboard.writeText(toText2.value);
//             }

//         }
//         if (target.classList.contains("fa-volume-up")) {
//             // console.log("speak")
//             let utterance;
//             if (target.id == "from") {
//                 utterance = new SpeechSynthesisUtterance(fromText.value);
//                 utterance.lang = selectTag[0].value;
//             } else {
//                 utterance = new SpeechSynthesisUtterance(toText.value);
//                 utterance.lang = selectTag[1].value;
//             }
//             // console.log(utterance)
//             speechSynthesis.speak(utterance);
//         }
//         if (target.classList.contains("fa-rotate-left")) {
//             console.log("back")
//             undoOperation();

//         }
//         if (target.classList.contains("fa-rotate-right")) {
//             console.log("redo");
//             redoOperation();

//         }
//     });
// });





// //microphone

// // const recordButton = document.querySelector('.recordButton');
// // const outputText = document.querySelector('.from-text');
// // let recognition;

// // if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
// //     const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
// //     recognition = new SpeechRecognition();

// //     recognition.continuous = true;
// //     recognition.interimResults = true;
// //     recognition.lang = 'en-US';

// //     recognition.onstart = function () {
// //         console.log('Speech recognition started...');
// //     };

// //     recognition.onresult = function (event) {
// //         let transcript = '';
// //         for (let i = event.resultIndex; i < event.results.length; i++) {
// //             if (event.results[i].isFinal) {
// //                 transcript += event.results[i][0].transcript;
// //             }
// //         }
// //         outputText.textContent = transcript;
// //     };

// //     recognition.onend = function () {
// //         console.log('Speech recognition ended.');
// //     };
// //     recordButton.addEventListener('click', function () {
// //         if (recognition.recognizing) {
// //             recognition.stop();
// //             recordButton.textContent = 'Record';
// //         } else {
// //             recognition.start();
// //             recordButton.textContent = 'Stop';
// //             outputText.textContent = 'Listening...';
// //         }
// //     });
// // } else {
// //     console.log('Web Speech API is not supported in this browser.');
// // }

// const recordButton = document.querySelector('.recordButton');
// const outputText = document.querySelector('.from-text');
// let recognition;

// recordButton.addEventListener('click', function () {
//   if ('WebSocket' in window) {
//     const socket = new WebSocket('wss://api.deepgram.com/v1/listen');
//     const apiKey = 'aac5147ab287f4da3bddf58f256ad59cc5ee57ca';

//     socket.onopen = function () {
//       console.log('WebSocket connection opened.');

//       // Send configuration message to start recognition
//       const message = JSON.stringify({
//         action: 'start',
//         uid: 'c2efa3ec-83ad-4f1a-8bfa-8390cffcd58b',
//         format: 'plain',
//         options: {
//           language: 'en-US',
//           punctuate: true,
//           words: true,
//         },
//         apikey: apiKey,
//       });
//       socket.send(message);

//       outputText.textContent = 'Listening...';
//     };

//     socket.onmessage = function (event) {
//       const data = JSON.parse(event.data);

//       // Check if it's a transcription message
//       if (data.type === 'transcription') {
//         const transcript = data.payload.text;
//         outputText.textContent = transcript;
//       }
//     };

//     socket.onerror = function (error) {
//       console.error('WebSocket error:', error);
//     };

//     socket.onclose = function () {
//       console.log('WebSocket connection closed.');
//     };

//     recordButton.addEventListener('click', function () {
//       socket.close();
//       recordButton.textContent = 'Record';
//     });
//   } else {
//     console.log('WebSockets are not supported in this browser.');
//   }
// });


// // Translation history

// let history = [];
// let currentIndex = -1;
// const undoButton = document.querySelector(".fa-rotate-left");
// const redoButton = document.querySelector(".fa-rotate-right");
// const historyContainer = document.getElementById("historyContainer");
// fromText.addEventListener("keyup", translate);

// async function translate() {
//     const text = fromText.value.trim();
//     if (!text) {
//         toText.value = "";
//         return;
//     }
//     const translation = await performTranslation(text);
//     toText.value = translation;
//     addToHistory(text, translation);
//     updateUndoRedoButtons();
//     updateHistoryContainer();
// }

// function performTranslation(text) {
//     let translateFrom = selectTag[0].value;
//     let translateTo = selectTag[1].value;
//     console.log("translateFrom", translateFrom)
//     let apiUrl = `https://api.mymemory.translated.net/get?q=${text}&langpair=${translateFrom}|${translateTo}`;
//     return fetch(apiUrl)
//         .then(res => res.json())
//         .then(data => {
//             let translation = data.responseData.translatedText;
//             data.matches.forEach(data => {
//                 if (data.id === 0) {
//                     translation = data.translation;
//                 }
//             });
//             console.log("translation", translation)
//             return translation;
//         });
// }
// function addToHistory(from, to) {
//     history.splice(currentIndex + 1);
//     history.push({ from, to });
//     currentIndex = history.length - 1;
// }


// function updateUndoRedoButtons() {
//     undoButton.disabled = currentIndex === -1;
//     redoButton.disabled = currentIndex === history.length - 1;
// }
// // function updateHistoryContainer() {
// //     historyContainer.innerHTML = "";
// //     history.forEach((item, index) => {
// //         const translationDiv = document.createElement("div");
// //         var translateFrom = selectTag[0].options[selectTag[0].selectedIndex];
// //         var selectedTextTranslateFrom = translateFrom.textContent;
// //         var translateTo = selectTag[1].options[selectTag[1].selectedIndex];
// //         var selectedTextTranslateTo = translateTo.textContent;
// //         translationDiv.innerHTML = `
// //   <div class="left-content">
// //     <div id="languages">${selectedTextTranslateFrom} <i class="fas fa-arrow-right"></i> ${selectedTextTranslateTo}</div> <div id="fromtrans">${item.from}</div><div id="totrans">${item.to}</div><br>
// //   </div>
// //   <div class="right-content">
// //     <div class="save-icon-container"><i class="fas fa-star" id=star-${index}></i><i class="fas fa-ellipsis-v" id=ellipsis-${index} style="margin-left:10px;"></i>
// //     </div>
// //   </div>
// // `;


// //         translationDiv.classList.add("translation-item");
// //         if (index === currentIndex) {
// //             translationDiv.classList.add("active");
// //         }
// //         // historyContainer.appendChild(translationDiv);
// //         historyContainer.insertBefore(translationDiv, historyContainer.firstChild);

// //         const starIcon = document.getElementById(`star-${index}`);
// //         starIcon.addEventListener("click", function () {
// //             const savedContainer = document.getElementById("savedContainer");
// //             const historyContainer = document.getElementById("historyContainer");
// //             const isStarred = this.classList.contains("starred");

// //             if (isStarred) {
// //                 const translationDivToRemove = savedContainer.querySelector(`[data-translation-id="${index}"]`);

// //                 if (translationDivToRemove) {
// //                     translationDivToRemove.parentNode.removeChild(translationDivToRemove);

// //                     const historyElementToRemove = historyContainer.querySelector(`#star-${index}`);
// //                     console.log("historyElementToRemove", historyElementToRemove)
// //                     if (historyElementToRemove) {
// //                         const starIconInHistory = historyElementToRemove
// //                         starIconInHistory.classList.remove("starred");
// //                         starIconInHistory.style.color = "";
// //                     }
// //                 }
// //             } else {
// //                 const starredTranslationDiv = translationDiv.cloneNode(true);
// //                 const starIcon = starredTranslationDiv.querySelector(".fa-star");
// //                 starIcon.classList.add("starred");

// //                 starredTranslationDiv.setAttribute("data-translation-id", index);
// //                 savedContainer.insertBefore(starredTranslationDiv, savedContainer.firstChild);
// //                 starredTranslationDiv.classList.remove("active");

// //                 starIcon.addEventListener("click", function () {
// //                     savedContainer.removeChild(starredTranslationDiv);

// //                     const historyElementToRemove = historyContainer.querySelector(`#star-${index}`);
// //                     console.log("historyElementToRemove", historyElementToRemove)
// //                     if (historyElementToRemove) {
// //                         const starIconInHistory = historyElementToRemove
// //                         starIconInHistory.classList.remove("starred");
// //                         starIconInHistory.style.color = "";
// //                     }
// //                 });


           




// //             }
// //             this.classList.toggle("starred");
            
// //         });



// //         const ellipsisIcon = translationDiv.querySelector(`#ellipsis-${index}`);
// //         ellipsisIcon.addEventListener("click", function () {
// //             const historyElementToRemove = historyContainer.querySelector(`.translation-item:nth-child(${index + 1})`);
// //             if (historyElementToRemove) {
// //                 historyContainer.removeChild(historyElementToRemove);
// //                 history.splice(index, 1);
// //                 updateHistoryContainer();
// //             }
// //         });


// //     });





// // }

// function updateHistoryContainer() {
//     historyContainer.innerHTML = "";
//     history.forEach((item, index) => {
//         const translationDiv = document.createElement("div");
//         var translateFrom = selectTag[0].options[selectTag[0].selectedIndex];
//         var selectedTextTranslateFrom = translateFrom.textContent;
//         var translateTo = selectTag[1].options[selectTag[1].selectedIndex];
//         var selectedTextTranslateTo = translateTo.textContent;
//         translationDiv.innerHTML = `
//             <div class="left-content">
//                 <div id="languages">${selectedTextTranslateFrom} <i class="fas fa-arrow-right"></i> ${selectedTextTranslateTo}</div>
//                 <div id="fromtrans">${item.from}</div>
//                 <div id="totrans">${item.to}</div><br>
//             </div>
//             <div class="right-content">
//                 <div class="save-icon-container">
//                     <i class="fas fa-star" id=star-${index}></i>
//                     <i class="fas fa-ellipsis-v" id=ellipsis-${index} style="margin-left:10px;"></i>
//                 </div>
//             </div>
//         `;

//         translationDiv.classList.add("translation-item");
//         if (index === currentIndex) {
//             translationDiv.classList.add("active");
//         }

//         historyContainer.insertBefore(translationDiv, historyContainer.firstChild);

//         const starIcon = document.getElementById(`star-${index}`);
//         starIcon.addEventListener("click", function () {
//             const savedContainer = document.getElementById("savedContainer");
//             const historyContainer = document.getElementById("historyContainer");
//             const isStarred = this.classList.contains("starred");

//             if (isStarred) {
//                 const translationDivToRemove = savedContainer.querySelector(`[data-translation-id="${index}"]`);

//                 if (translationDivToRemove) {
//                     translationDivToRemove.parentNode.removeChild(translationDivToRemove);

//                     const historyElementToRemove = historyContainer.querySelector(`#star-${index}`);
//                     if (historyElementToRemove) {
//                         const starIconInHistory = historyElementToRemove;
//                         starIconInHistory.classList.remove("starred");
//                         starIconInHistory.style.color = "";
//                     }
//                 }
//             } else {
//                 const starredTranslationDiv = translationDiv.cloneNode(true);
//                 const starIcon = starredTranslationDiv.querySelector(".fa-star");
//                 starIcon.classList.add("starred");

//                 starredTranslationDiv.setAttribute("data-translation-id", index);
//                 savedContainer.insertBefore(starredTranslationDiv, savedContainer.firstChild);
//                 starredTranslationDiv.classList.remove("active");

//                 starIcon.addEventListener("click", function () {
//                     savedContainer.removeChild(starredTranslationDiv);
//                     const historyElementToRemove = historyContainer.querySelector(`#star-${index}`);
//                     if (historyElementToRemove) {
//                         const starIconInHistory = historyElementToRemove;
//                         starIconInHistory.classList.remove("starred");
//                         starIconInHistory.style.color = "";
//                     }
//                 });



//                 const ellipsisIconstarredsaved = savedContainer.querySelector(`#ellipsis-${index}`);
//                 const translationDivToRemove = savedContainer.querySelector(`[data-translation-id="${index}"]`);
//                 ellipsisIconstarredsaved.addEventListener("click", function () {
//                     console.log("cc")
//                     const translationItemToRemove = translationDivToRemove
//                     showDeleteConfirmationsaved(index, translationItemToRemove);
//                 });
//                 function showDeleteConfirmationsaved(index, translationItemToRemove) {
//                     const confirmation = confirm("Are you sure you want to delete this saved translation?");
//                     const translationDivToRemove = savedContainer.querySelector(`[data-translation-id="${index}"]`);
//                     if (confirmation) {
//                         translationDivToRemove.parentNode.removeChild(translationItemToRemove);
//                         const historyElementToRemove = historyContainer.querySelector(`#star-${index}`);
//                         if (historyElementToRemove) {
//                             const starIconInHistory = historyElementToRemove;
//                             starIconInHistory.classList.remove("starred");
//                             starIconInHistory.style.color = "";
//                         }
//                     }
//                 }




//             }

//             this.classList.toggle("starred");
//         });

//         const ellipsisIcon = translationDiv.querySelector(`#ellipsis-${index}`);
//         ellipsisIcon.addEventListener("click", function () {
//             console.log("cc")
//             const translationItemToRemove = this.parentNode.parentNode.parentNode;
//             showDeleteConfirmation(index, translationItemToRemove);
//         });

//         function showDeleteConfirmation(index, translationItemToRemove) {
//             const confirmation = confirm("Are you sure you want to delete this translation?");
//             if (confirmation) {
//                 historyContainer.removeChild(translationItemToRemove);
//                 history.splice(index, 1);
//                 updateHistoryContainer();
//             }
//         }



    

//     });
// }





// function undo() {
//     if (currentIndex > 0) {
//         currentIndex--;
//         const translation = history[currentIndex].to;
//         toText.value = translation;
//         updateUndoRedoButtons();
//         updateHistoryContainer();
//     }
// }
// function redo() {
//     if (currentIndex < history.length - 1) {
//         currentIndex++;
//         const translation = history[currentIndex].to;
//         toText.value = translation;
//         updateUndoRedoButtons();
//         updateHistoryContainer();
//     }
// }
// undoButton.addEventListener("click", undo);
// redoButton.addEventListener("click", redo);



// // clear History

// const clearHistoryElement = document.getElementById("clearhistory");
// clearHistoryElement.addEventListener("click", function () {
//     const historyContainer = document.getElementById("historyContainer");
//     const confirmed = confirm("Are you sure you want to clear all history?");
//     if (confirmed) {
//         while (historyContainer.firstChild) {
//             historyContainer.removeChild(historyContainer.firstChild);
//         }
//     }
// });

// const clearSavedHistoryElement = document.getElementById("clearsavedhistory");
// clearSavedHistoryElement.addEventListener("click", function () {
//     const savedContainer = document.getElementById("savedContainer");
//     const confirmed = confirm("Are you sure you want to clear all saved history?");
//     if (confirmed) {
//         while (savedContainer.firstChild) {
//             savedContainer.removeChild(savedContainer.firstChild);
//         }
//     }
// });






// // phrasebook

// const phraseBookButtons = document.querySelectorAll(".phrasebook-button");
// const panel = document.querySelector("#panel2");
// const phrasebookContent = document.querySelector(".phrasebookcontent");
// phraseBookButtons.forEach(button => {
//     button.addEventListener("click", function () {
//         phraseBookButtons.forEach(btn => btn.classList.remove("selected"));
//         this.classList.add("selected");

//         panel.style.display = "block";
//         phrasebookContent.style.display = "block";
//         phrasebookContent.innerHTML = "";

//         const category = this.dataset.category;
//         const categoryContent = getCategoryContent(category);

//         for (const phrase of categoryContent) {
//             const phraseElement = document.createElement("p");
//             phraseElement.textContent = phrase;
//             phrasebookContent.appendChild(phraseElement);
//         }
//     });
// });

// function getCategoryContent(category) {
//     switch (category) {
//         case "essential":
//             return essential;
//         case "travel":
//             return travel;
//         case "medical":
//             return medical;
//         // Add more cases for other categories if needed
//         default:
//             return [];
//     }
// }


















$(document).ready(function () {


    $("#enterContent").click(function () {
        $("#textdiv").toggle("slow");
    });

    $("#enterColor").click(function () {
        $("#colordiv").toggle("slow");
    });

    $("#enterImage").click(function () {
        $("#imagediv").toggle("slow");
    });



    $(".select-with-search").select2();
    $(".select-with-search").on("select2:open", function() {
        $(".select2-search__field").attr("placeholder", "Search Languages");
      });
      
      
    $(".select-with-search2").select2();
    $(".select-with-search2").on("select2:open", function() {
        $(".select2-search__field").attr("placeholder", "Search Languages");
      });
    var firstSelect = $("#firstselect");
    console.log("firstSelect", firstSelect)
    firstSelect.on("select2:open", function () {
        $(".select2-dropdown--below").addClass("select2-dropdown--right").removeClass("select2-dropdown--left");
    });

    var secondSelect = $("#secondselect");
    secondSelect.on("select2:open", function () {
        $(".select2-dropdown--below").addClass("select2-dropdown--left").removeClass("select2-dropdown--right");
    });
    console.log("secondSelect", secondSelect)

    var thirdSelect = $("#thirdselect");
    thirdSelect.on("select2:open", function () {
        $(".select2-dropdown--below").addClass("select2-dropdown--right").removeClass("select2-dropdown--left");
    });

    var fourthSelect = $("#fourthselect");
    fourthSelect.on("select2:open", function () {
        $(".select2-dropdown--below").addClass("select2-dropdown--left").removeClass("select2-dropdown--right");
    });

    textTranslateBtn = document.querySelector("#textTranslateBtn");
    imgTranslateBtn = document.querySelector("#imgTranslateBtn");
    $("#textTranslateBtn").click(function () {
        $(".container2").hide("slow");
        $(".container3").hide("slow");
        $(".container4").hide("slow");
        $(".container5").hide("slow");


        $("#textInput").show("slow");
        $(".container").show("slow");
        $(".container3").show("slow");


    });
    $("#imgTranslateBtn").click(function () {

        $(".container").hide("slow");
        $(".container3").hide("slow");
        $(".container4").hide("slow");
        $(".container5").hide("slow");


        $("#imgInput").show("slow");
        $(".container2").show("slow");
        $(".container3").show("slow");


    });
    $("#historyBtn").click(function () {

        $(".container").hide("slow");
        $(".container2").hide("slow");
        $(".container3").hide("slow");
        $(".container5").hide("slow");


        $(".container4").show("slow");
        $("#history").show("slow");

    });

    $("#savedBtn").click(function () {

        $(".container").hide("slow");
        $(".container2").hide("slow");
        $(".container3").hide("slow");
        $(".container4").hide("slow");


        $(".container5").show("slow");
        $("#saved").show("slow");


    });


    $("#flip").click(function () {
        button = $(this).find("i")
        if (button.hasClass("fas fa-chevron-down")) {
            button.removeClass("fas fa-chevron-down");
            button.addClass("fas fa-chevron-up");
        } else {
            button.removeClass("fas fa-chevron-up");
            button.addClass("fas fa-chevron-down");
        }

        $("#panel").toggle("slow");
        $(".container3").show("slow");

    });

    $('.exchange').on('click', function () {
        var spans = $('.select2-selection__rendered');

        if (spans.length >= 2) {
            var englishSpan = spans.eq(0);
            var urduSpan = spans.eq(1);

            var englishText = englishSpan.text().trim();
            var urduText = urduSpan.text().trim();

            englishSpan.text(urduText);
            urduSpan.text(englishText);
        }

        var fromText = $('.from-text');
        var toText = $('.to-text');

        var tempText = fromText.val();
        var tempLang = $('.select-with-search').eq(0).val();
        console.log("tempText", tempText);
        console.log("tempLang", tempLang);

        fromText.val(toText.val());
        toText.val(tempText);
        $('.select-with-search').eq(0).val($('.select-with-search').eq(1).val());
        $('.select-with-search').eq(1).val(tempLang);
    });




    $('#exchange2').on('click', function () {
        var spans = $('.select2-selection__rendered');
        console.log("spans", spans)
        if (spans.length >= 2) {
            var englishSpan = spans.eq(2);
            var urduSpan = spans.eq(3);

            var englishText = englishSpan.text().trim();
            var urduText = urduSpan.text().trim();

            englishSpan.text(urduText);
            urduSpan.text(englishText);
        }

        var fromText = $('#from-text2');
        var toText = $('#to-text2');

        var tempText = fromText.val();
        var tempLang = $('.select-with-search2').eq(0).val();
        console.log("tempText", tempText);
        console.log("tempLang", tempLang);

        fromText.val(toText.val());
        toText.val(tempText);
        $('.select-with-search2').eq(0).val($('.select-with-search2').eq(1).val());
        $('.select-with-search2').eq(1).val(tempLang);
    });




    document.getElementById("uploadButton").addEventListener("click", function () {
        document.getElementById("upload").click();
    });



    document.getElementById("upload").addEventListener("change", function (e) {
        document.querySelector(".imgwrapper").style.display = "block";
        var file = e.target.files[0];
        var reader = new FileReader();

        reader.onload = function (event) {
            var imageUrl = event.target.result;
            var imageElement = document.createElement("img");
            imageElement.src = imageUrl;
            imageElement.classList.add("uploaded-image");

            document.getElementById("imageContainer").innerHTML = "";
            document.getElementById("imageContainer").appendChild(imageElement);
            document.querySelector(".uploaded-image").style.width = "60%";

            document.getElementById("copyButton").style.display = "none";

            performOCR(imageUrl);

        };

        reader.readAsDataURL(file);
    });

    function performOCR(imageUrl) {
        Tesseract.recognize(imageUrl, "eng")
            .then(result => {
                var extractedText = result.text;
                document.getElementById("copyButton").style.display = "";

                var fromText = document.querySelector("#from-text2");

                fromText.value = extractedText;

                console.log("fromText", fromText)

                translateTextImg();
                fromText.addEventListener("keyup", translateTextImg);


                document.getElementById("copyButton").addEventListener("click", function () {
                    var textarea = document.createElement("textarea");
                    textarea.value = extractedText;
                    document.body.appendChild(textarea);
                    textarea.select();
                    document.execCommand("copy");
                    document.body.removeChild(textarea);
                    alert("Text copied!");
                });
            })
            .catch(error => {
                console.error("OCR failed:", error);
                alert("OCR failed. Please try again.");
            });
    }


    $('select').change(function () {
        translateText();
        translateTextImg();
    });



});


