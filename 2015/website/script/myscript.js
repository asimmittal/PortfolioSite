$(function () {

    /*****************************************************************
     * mock data for portfolio grid 
     *****************************************************************/
    var data = [
        {
            title: "NIMBLE SCHEDULE",
            description: "Enterprise shift management application",
            figure: "img/projects/nimble_title.jpg",
            url: "projects/nimble/index.html",
            year: "2015"
        },
        {
            title: "EMMERSIV",
            description: "Therapy tool for kids with Autism",
            figure: "img/projects/emmersiv_title.jpg",
            url: "projects/emmersiv/index.html",
            year: "2015"
        },
        
        {
            title: "SYNAPTIC",
            description: "Collaboration tool for Radiology",
            figure: "img/projects/ge_title.jpg",
            url: "projects/ge/index.html",
            year: "2012"
        },
        {
            title: "KINEMED",
            description: "Gestural interface for the OR",
            figure: "img/projects/kinemed_title.jpg",
            url: "projects/kinemed/index.html",
            year: "2011"
        },
        {
            title: "SECRET MENU",
            description: "Mobile app for the global foodie",
            figure: "img/projects/secretmenu_title.jpg",
            url: "projects/secretmenu/index.html",
            year: "2013"
        },
        {
            title: "FIDDLE",
            description: "Interactive surfaces for public spaces",
            figure: "img/projects/fiddle_title.jpg",
            url: "projects/fiddle/index.html",
            year: "2011"

        },
        
        {
            title: "COOLSTONE",
            description: "Turn a phone into a trackpad",
            figure: "img/projects/coolstone_title.jpg",
            url: "projects/coolstone/index.html",
            year: "2011"
        },

        {
            title: "DepthSelect",
            description: "Leveraging pressure to resolve pick ambiguity",
            figure: "img/projects/depthselect_title.jpg",
            url: "projects/depthselect/index.html"
        },
        
        {
            title: "Multitouch++",
            description: "Improving multitouch on Android",
            figure: "img/projects/multitouch_title.jpg",
            url: "projects/multitouch/index.html"
        }

    ];

    /*****************************************************************
     * Populate grid
     *****************************************************************/
    var src = $("#tileMetaTemplate").html();
    var template = Handlebars.compile(src);

    data.forEach(function (item) {
        var tileHTML = template(item);
        var current = $(".portfolioRow").html();
        $(".portfolioRow").html(current + tileHTML);
    });


    // Check if the the url being requested was a hash url that matches
    // an existing project
    var pageUrl = $(location).attr('href');
    var index = pageUrl.indexOf("/#");
    if (index > 0) {
        var hashtag = pageUrl.substring(index + 2).toUpperCase();
        data.forEach(function (item) {
            if (item.title.toUpperCase() === hashtag) {
                var html = jQuery('html');
                $("#itemIframe").attr("src", item.url);
                $("#itemPage").show();
                $("#itemPageContent").show();
                html.css("overflow", "hidden");
                return;
            }
        });
    }

    /*****************************************************************
     * Event handler for click on a tile item in the portfolio
     * This event handler is defined inside the ready method because
     * it's association depends on the DOM being completely populated
     *****************************************************************/
    $(".tile").click(function () {
        var id = $(this).attr('id');
        var html = jQuery('html');
        $("#itemIframe").attr("src", id);
        $("#itemPage").show();
        $("#itemPageContent").show();

        html.css("overflow", "hidden");
    });

});

//End of ready function


/*****************************************************************
 * Event handler for click on the X (close) on the item page
 *****************************************************************/
$("#btnClose").click(function () {
    var html = jQuery('html');
    $("#itemIframe").attr("src", "");
    $("#itemPageContent").hide();
    $("#itemPage").fadeOut();
    html.css("overflow", "auto");
});

/*****************************************************************
 * Event handler for click on the gray area when the item page
 * is visible
 *****************************************************************/
$("#itemPage").click(function () {
    var isVisible = ($("#itemPageContent").css("display") == "none") ? false : true;
    if (isVisible) {
        var html = jQuery('html');
        $("#itemIframe").attr("src", "");
        $("#itemPageContent").hide();
        $("#itemPage").fadeOut();
        html.css("overflow", "auto");
    }
});


/*****************************************************************
 * Event handler for when the "hamburger" menu icon is clicked in
 * mobile width mode. 
 *
 * Animate the navigation menu into view. slide the rest of the 
 * content down as well (works only when the 
 * width is less: mobile mode)
 *****************************************************************/
$("#btnNavToggle").click(function () {
    var status = $("#navMenu").css('display').toLowerCase();
    var navHeight = $("#navMenu").height();
    var curPosContent = $("#content").css('margin-top');

    if (status == "none") {
        $("#navMenu").slideDown(120);
        $("#content").animate({
            marginTop: "+=" + navHeight
        }, 120);
    } else {
        $("#navMenu").slideUp(120);
        $("#content").animate({
            marginTop: "-=" + navHeight
        }, 120);
    }

    return false;
});

/*****************************************************************
 * Event handler for scrolling along the page
 *
 * Monitor window scrolls, make minor adjustments to the nav bar
 * when scrolled beyond a certain point
 *****************************************************************/
$(window).scroll(function () {
    if ($(window).width() > 768) {
        var scroll = $(window).scrollTop();
        if (scroll > 60) $(".navbar-default").css("background-color", "#4FC7E8");
        else $(".navbar-default").css("background-color", "transparent");
    } else $(".navbar-default").css("background-color", "#4FC7E8");
});


/*****************************************************************
 * Event handler when a navigation link is clicked
 * Slowly scroll the page to the desired section after click
 ******************************************************************/
$(".navlink").click(function () {
    var elemId = $(this).attr("href").replace("#", "") + "_sect";
    if (document.getElementById(elemId) != null) {
        elemId = "#" + elemId;
        var top = $(elemId).offset().top - 20;
        $("html,body").animate({
            scrollTop: top
        }, 'slow');
        $("html,body").animate({
            scrollTop: top
        }, 'slow');
    }
});

/*****************************************************************
 * Email related
 ******************************************************************/
$("#btnEmail").click(function () {
    sendMail();
});

function sendMail() {
    var url = "http://www.justhost.com/justmail?";
    var sender = document.getElementById("sender").value;
    var email = document.getElementById("senderAddr").value;
    var msg = document.getElementById("message").value;
    var sendto = "webmaster@asimmittal.net";

    if (sender.trim().length > 0 && checkMail(email) && msg.trim().length > 0) {

        document.getElementById('sender').style.borderColor = "#4FC7E8";
        document.getElementById('message').style.borderColor = "#4FC7E8";
        document.getElementById('senderAddr').style.borderColor = "#4FC7E8";
        mailSuccessAnim();

        $.get(url, {
            sendtoemail: sendto,
            name: sender,
            addr: email,
            message: msg,
            redirect: ''
        }, function (result) {
            console.log("RESULT:" + result);
        });

    } else {
        document.getElementById('sender').style.borderColor = (sender.trim().length == 0) ? "red" : "#4FC7E8";
        document.getElementById('message').style.borderColor = (msg.trim().length == 0) ? "red" : "#4FC7E8";
        document.getElementById('senderAddr').style.borderColor = (checkMail(email) == false) ? "red" : "#4FC7E8";
    }
}

function checkMail(email) {
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (filter.test(email)) return true;
    return false;
}


function mailSuccessAnim() {
    $("#btnEmail").hide();
    $("#loader").show();
    setTimeout(function () {
        setTimeout(function () {
            resetContactForm();
        }, 1000);
    }, 1000);
}

function resetContactForm() {
    $("#loader").hide();
    $("#btnEmail").show();
    $("#mailIcon").attr("class", "glyphicon glyphicon-envelope");
    $("#mailIcon").css("background", "transparent");
    $("#mailIcon").css("color", "#4FC7E8");
    $("#mailIcon").css("border-color", "#4FC7E8");
    $("#sender").val("");
    $("#message").val("");
    $("#senderAddr").val("");
    $("html,body").animate({
        scrollTop: 0
    }, 'slow');
}
