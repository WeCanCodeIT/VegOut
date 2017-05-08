$(function () {
    $('#viewAllButton').on('click', function () {
        var $listItems = $("li");
        $listItems.css("display", "block");
    }
    )
})

$(function () {
    $('#findButton').on('click', function () {
        //get search term from input box
        var $searchTerm = $("#veggieInput").val();


        ////variable for all list items (recipes)
        var $listItems = $("li");

        $listItems.each(function () {
            if ($(this).text().includes($searchTerm)) {
                $(this).css("display", "block");
            }
            else {
                $(this).css("display", "none");
            }


        })

    })

})

