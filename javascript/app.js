var topics;
var stillImg;
var animateImg;
var queryURL = "http://api.giphy.com/v1/gifs/trending?api_key=JIBAJQxj1zGsIokhhVP2eNIpXrBQXYhi";
$(document).ready(function() {
    topics = ["dogs", "pokemon", "memes", "dank memes", "super smash bros", "cannabis"]

    function renderButtons() {
        $("#buttons-view").empty();
        console.log(topics);
        for (var i = 0; i < topics.length; i++) {

            var a = $("<button>");
            a.addClass("searchTerm btn btn-info gif");
            a.attr("data-name", topics[i]);
            a.val(topics[i]);
            a.text(topics[i]);
            $("#buttons-view").append(a);
            console.log(a);
        }
    };

    function submit() {
        event.preventDefault();
        var newTopic = $("#search-input").val().trim();
        topics.push(newTopic);
        renderButtons();
    };


    $("#add-search").on("click", function(event) {
        submit();
    });

    renderButtons();



    $("button").on("click", function() {

        $("#gifs-appear-here").empty();

        var person = $(this).attr("data-name");
        console.log(person);

        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + person + "&api_key=JIBAJQxj1zGsIokhhVP2eNIpXrBQXYhi&limit=10";


        $.ajax({
                url: queryURL,
                method: "GET"
            })
            // After the data comes back from the API
            .then(function(response) {

                console.log(response.data);

                var results = response.data;

                for (var i = 0; i < results.length; i++) {

                    var gifDiv = $("<div class='gif'>");
                    stillImg = response['data'][i]['images']['fixed_height_still']['url'];
                    animateImg = response['data'][i]['images']['fixed_height']['url'];
                    console.log("still: " + stillImg, "playing: " + animateImg);

                    var rating = results[i].rating;
                    var p = $("<p>").text("Rating: " + rating);
                    var image = $("<img>");
                    image.attr("src", results[i].images.fixed_height.url);

                    image.attr("data-still", stillImg);
                    image.attr("data-animate", animateImg);
                    image.attr("data-state", "still");
                    // image.addClass('gif');
                    console.log(image);
                    gifDiv.append(p);
                    gifDiv.append(image);

                    $("#gifs-appear-here").prepend(gifDiv);

                }
            });
    });


    // $(".gif").on("click", function() {
    //     var state = $(this).attr("data-state");

    //     if (state === "still") {
    //         $(this).attr("src", $(this).attr(animateImg));
    //         $(this).attr("data-state", "animate");
    //     } else {
    //         $(this).attr("src", $(this).attr(stillImg));
    //         $(this).attr("data-state", "still");
    //     }
    // });


});