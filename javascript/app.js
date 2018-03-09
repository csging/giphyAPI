// $(document).ready(function() {
//     var topics = ["dogs", "pokemon", "memes", "futurama", "dank memes", "super smash bros", "cannabis"]
//     var stillImg;
//     var animateImg;

//     function renderButtons() {
//         $("#buttons-view").empty();
//         for (var i = 0; i < topics.length; i++) {
//             var a = $("<button>");
//             a.addClass("btn btn-info");
//             a.attr("id", "topix");
//             a.attr("data-name", topics[i]);
//             a.val(topics[i]);
//             a.text(topics[i]);
//             $("#buttons-view").append(a);
//             // console.log(a);
//         }
//     };

//     function submit() {
//         event.preventDefault();
//         var newTopic = $("#search-input").val().trim();
//         topics.push(newTopic);
//         $("#search-input").val('');
//         renderButtons();
//     };


//     $("#submitBtn").on("click", function(event) {
//         submit();
//     });

//     renderButtons();


//     function displayGifs() {

//         var person = $(this).attr("data-name");
//         console.log(person);

//         var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + person + "&api_key=JIBAJQxj1zGsIokhhVP2eNIpXrBQXYhi&limit=10";


//         $.ajax({
//             url: queryURL,
//             method: "GET"
//         })

//         .then(function(response) {
//             $("#gifs-appear-here").empty();

//             console.log(response.data);

//             var results = response.data;

//             for (var i = 0; i < results.length; i++) {

//                 var gifDiv = $("<div class='newGif'>");
//                 stillImg = response['data'][i]['images']['fixed_height_still']['url'];
//                 animateImg = response['data'][i]['images']['fixed_height']['url'];
//                 console.log("still: " + stillImg, "playing: " + animateImg);

//                 var rating = results[i].rating;
//                 var p = $("<p>").text("Rating: " + rating);
//                 var image = $("<img>");

//                 image.attr("src", stillImg);

//                 image.attr("data-still", stillImg);
//                 image.attr("data-animate", animateImg);
//                 image.attr("data-state", 'still');
//                 image.addClass('gifs');
//                 // console.log(image);

//                 gifDiv.append(p);
//                 gifDiv.append(image);

//                 $("#gifs-appear-here").prepend(gifDiv);

//             }
//         });

//     };

//     function playPause() {
//         var state = $(this).attr("data-state");

//         if (state === "still") {
//             $(this).attr("src", $(this).attr("data-animate"));
//             $(this).attr("data-state", "animate");
//         } else {
//             $(this).attr("src", $(this).attr("data-still"));
//             $(this).attr("data-state", "still");
//         }
//     };

//     $(document).on("click", "#topix", displayGifs);
//     $(document).on("click", "img", playPause);
// });