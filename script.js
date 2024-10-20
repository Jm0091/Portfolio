$(document).ready(function () {
  GridOfTheHeader();

  $(window).resize(function () {
    var windowHeight = $(window).height();
    var windowWidth = $(window).width();
    $("#container").css({
      width: windowWidth + "px",
      height: windowHeight + "px",
    });

    // Now update the lines:
    GridOfTheHeader();
  });

  function GridOfTheHeader() {
    var container = $("#lines");
    var linesDiv = $("#lines");
    var containerWidth = container.width();
    var containerHeight = container.height();

    //console.log("containerHeight: " + containerHeight);
    //console.log("widthcontainerWidth: " + containerWidth);

    var numHorizontalLines = Math.floor(containerHeight / 14);
    var numVerticalLines = Math.floor(containerWidth / 14);

    //console.log("numHorizontalLines: " + numHorizontalLines);
    //console.log("numHorizontalLines: " + numVerticalLines);

    for (var i = 1; i <= numHorizontalLines; i++) {
      var line = $('<div class="line horizontal"></div>');
      line.css("top", i * 14);
      linesDiv.append(line);
    }

    for (var i = 1; i <= numVerticalLines; i++) {
      var line = $('<div class="line vertical"></div>');
      line.css("left", i * 14);
      linesDiv.append(line);
    }
  }

  $(".navbar-nav>li>a").on("click", function () {
    $(".navbar-collapse").collapse("hide");
  });

  //$('#container').hide();

  var scrollPosition = 0;

  // Save scroll position before opening the modal
  $("#projectModal").on("show.bs.modal", function () {
    scrollPosition = $(window).scrollTop();
  });

  // Restore scroll position after the modal is shown
  $("#projectModal").on("shown.bs.modal", function () {
    $(window).scrollTop(scrollPosition);
  });

  // Ensure scroll position is restored after modal is hidden
  $("#projectModal").on("hidden.bs.modal", function () {
    $(window).scrollTop(scrollPosition);
  });

  //NEW CODE ----
  const hexagons = document.querySelectorAll(".hexagon");

  hexagons.forEach((hex) => {
    hex.addEventListener("click", (event) => {
      // Future logic when a hexagon is clicked
      console.log("Hexagon clicked:", event.target.alt);
      // Transition to the next part of the UI
    });
  });
});
