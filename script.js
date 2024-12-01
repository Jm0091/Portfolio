!(function (n) {
  n("html").removeClass("no-js"),
    n("header a").click(function (e) {
      if (!n(this).hasClass("no-scroll")) {
        e.preventDefault();
        var t = n(this).attr("href"),
          i = n(t).offset().top;
        n("html, body").animate(
          { scrollTop: i + "px" },
          Math.abs(window.pageYOffset - n(t).offset().top) / 4
        ),
          n("header").hasClass("active") &&
            n("header, body").removeClass("active");
      }
    }),
    n("#to-top").click(function () {
      n("html, body").animate({ scrollTop: 0 }, 400);
    }),
    n("#lead-down").click(function () {
      var e = n("#lead").next().offset().top;
      n("html, body").animate({ scrollTop: e + "px" }, 400);
    }),
    n("#mobile-menu-open").click(function () {
      n("header, body").addClass("active");
    }),
    n("#mobile-menu-close").click(function () {
      n("header, body").removeClass("active");
    }),
    n("#viewMoreProjectsBtn").click(function () {
      n(".more-projects").each(function (index) {
        n(this)
          .delay(index * 200)
          .fadeIn(500)
          .css({
            opacity: 1,
            transform: "translateY(0)",
          });
      });
      n(this).fadeOut();
    });
  n("#viewMoreSkillsBtn").click(function () {
    n(".more-skills").each(function (index) {
      n(this)
        .delay(index * 200)
        .fadeIn(500)
        .css({
          opacity: 1,
          transform: "translateY(0)",
        });
    });
    n(this).fadeOut();
  });

  n("#search-bar").on("input", function () {
    const searchValue = n(this).val().toLowerCase();
    n(".tech-span").each(function () {
      const text = n(this).text().toLowerCase();
      if (text.includes(searchValue) || searchValue === "") {
        n(this).show();
      } else {
        n(this).hide();
      }
    });
  });
})(jQuery);
