/*
 *
 * Author : Homer Gaines
 * URL : designdonation.org
 * Copyright : 2014
 * Version : 2.0
 *
 *
 * */


$(document).ready(function () {

    var activeTopNavBtn;
    var activeSectionBtn;
    var newPos;
    var activeBtn;
    var pleaseWait;

    $('#nav a, #logo').click(function () {

        $('#nav a').removeClass('active');
        $('#' + activeTopNavBtn).addClass('active');

        activeTopNavBtn = $(this).attr('id');

        if (activeTopNavBtn == 'logo') {

            activeTopNavBtn = $('#about-Link').attr('id');
            return false;

        } else {

            activeTopNavBtn = $(this).attr('id');
            return false;

        }

        goHere();

    });



    function goHere() {

        if (activeTopNavBtn == 'about-Link') {

            newPos = "about";

        } else if (activeTopNavBtn == 'projects-Link') {

            newPos = "projects";

        } else if (activeTopNavBtn == 'help-Link') {

            newPos = "footer";

        }

        $('html, body').animate({
            scrollTop: $('#' + newPos).offset().top - 50
        }, 1000, 'easeInOutQuart', function () {});

    }



    $(window).on('scroll', function () {
        var y_scroll_pos = window.pageYOffset;
        var topNavIsThere = $('#nav').is(':visible');

        if (y_scroll_pos > 0 && topNavIsThere) {

            $('#header').addClass('shortHeader');
            $('#logo').addClass('shortLogo');
            $('#nav').addClass('shortNav');

        } else if (y_scroll_pos < 250) {

            $('#header').removeClass('shortHeader');
            $('#nav').removeClass('shortNav');
            pleaseWait = window.setTimeout(delayTallLogo, 100);

        }

        /* */

        if (y_scroll_pos <= 498) {

            activeBtn = "about-Link"

        } else if (y_scroll_pos > 500 && y_scroll_pos < 710) {

            activeBtn = "projects-Link"

        } else if (y_scroll_pos >= 800) {

            activeBtn = "help-Link"

        }

        $("#" + activeBtn).addClass('active');


    });

    function delayTallLogo() {
        $('#logo').removeClass('shortLogo');
    }

    var thisYear = new Date();
    var copyRightYr = thisYear.getFullYear();
    $('#copyright').html("Â© 2010 - " + copyRightYr + " Homer Gaines");

})
