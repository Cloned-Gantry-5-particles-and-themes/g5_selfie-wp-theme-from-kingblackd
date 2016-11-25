// JavaScript Document
"use strict";
//Preloader
(function($) {

    $(window).load(function() {
        $("#intro-loader").delay(1000).fadeOut();
        $(".mask").delay(1000).fadeOut("slow");
    });



})(jQuery);



(function($) {
    $(document).ready(function() {

        $('#carouselSecond').utilCarousel({
            responsiveMode: 'itemWidthRange',
            itemWidthRange: [160, 180],
            autoPlay: true,
            interval: 3000,
            itemAnimation: 'util-fade-in'
        });

        $(".selfie-single-row").each(function() {
            $(this).wrapInner("<div class='homepage-container-design-inner homepage-container-design-inner-selfie'></div>");
        });

        $(".portfolio-items").magnificPopup({
            type: "image",
            delegate: ".icon-view",
            gallery: {
                enabled: true
            },
            callbacks: {
                change: function() {
                    if (this.isOpen) {
                        this.wrap.addClass('mfp-open');
                    }
                }
            }
        });


        $(".process-timeline-container").each(function() {
            $(this).mouseover(function() {
                $(this).find(".process-timeline-faceone").addClass("process-timeline-faceone-hover");
                $(this).find(".process-timeline-facetwo").addClass("process-timeline-facetwo-hover");
            }).mouseout(function() {
                $(this).find(".process-timeline-faceone").removeClass("process-timeline-faceone-hover");
                $(this).find(".process-timeline-facetwo").removeClass("process-timeline-facetwo-hover");
            });
        });


        $(".selfie-services-image-scale").each(function() {
            $(this).mouseover(function() {
                $(this).find(".selfie-services-icon-first").addClass("selfie-services-icon-first-hover");
                $(this).find(".selfie-services-icon-second").addClass("selfie-services-icon-second-hover");
            }).mouseout(function() {
                $(this).find(".selfie-services-icon-first").removeClass("selfie-services-icon-first-hover");
                $(this).find(".selfie-services-icon-second").removeClass("selfie-services-icon-second-hover");
            });
        });

        $("div.overout")
            .mouseover(function() {
                i += 1;
                $(this).find("span").text("mouse over x " + i);
            })
            .mouseout(function() {
                $(this).find("span").text("mouse out ");
            });


        if ($('.skillBar li').length > 0) {
            $('.skillBar li').each(function() {
                $(this).appear(function() {
                    $(this).animate({
                        opacity: 1,
                        left: "0px"
                    }, 2000);
                    var b = $(this).find("span").attr("data-width");
                    $(this).find("span").animate({
                        width: b + "%"
                    }, 2200, "easeOutBounce")
                })
            });
        }


        //Elements Appear from top
        $('.item_top').each(function() {
            $(this).appear(function() {
                $(this).delay(400).animate({
                    opacity: 1,
                    top: "0px"
                }, 1000);
            });
        });
        //Elements Appear from bottom
        $('.item_bottom').each(function() {
            $(this).appear(function() {
                $(this).delay(400).animate({
                    opacity: 1,
                    bottom: "0px"
                }, 1000);
            });
        });
        //Elements Appear from left
        $('.item_left').each(function() {
            $(this).appear(function() {
                $(this).delay(400).animate({
                    opacity: 1,
                    left: "0px"
                }, 1000);
            });
        });

        //Elements Appear from left
        $('.process-timeline-color-five , .process-timeline-color-one').each(function() {
            $(this).appear(function() {
                $(this).delay(400).animate({
                    opacity: 1
                }, 1000);
            });
        });

        //Elements Appear from left
        $('.process-timeline-color-six , .process-timeline-color-two').each(function() {
            $(this).appear(function() {
                $(this).delay(600).animate({
                    opacity: 1
                }, 1000);
            });
        });


        //Elements Appear from left
        $('.process-timeline-color-seven ,.process-timeline-color-three').each(function() {
            $(this).appear(function() {
                $(this).delay(800).animate({
                    opacity: 1
                }, 1000);
            });
        });


        //Elements Appear from left
        $('.process-timeline-color-eight ,.process-timeline-color-four').each(function() {
            $(this).appear(function() {
                $(this).delay(1000).animate({
                    opacity: 1
                }, 1000);
            });
        });

        $('.note.item_resume').each(function() {
            $(this).appear(function() {
                $(this).animate({
                    opacity: 1
                }, 400);
            });
        });

        //Elements Appear from right
        $('.item_right').each(function() {
            $(this).appear(function() {
                $(this).delay(400).animate({
                    opacity: 1,
                    right: "0px"
                }, 1000);
            });
        });
        //Elements Appear in fadeIn effect
        $('.item_fade_in').each(function() {
            $(this).appear(function() {
                $(this).delay(400).animate({
                    opacity: 1,
                    right: "0px"
                }, 1500);
            });
        });

        $(window).load(function() {
            $('body').scrollspy({
                target: '.nav-menu',
                offset: 95
            })
        });

        processLine.init();
        $('.section-content .media-container').fitVids();
        //Clients
        $("#left_scroll a").attr({
            href: 'javascript:slide("left");',
        });
        $("#right_scroll a").attr({
            href: 'javascript:slide("right");',
        });
        if (!(/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i).test(navigator.userAgent || navigator.vendor || window.opera)) {
            $('.clients').waypoint(function() {
                $('#carousel_ul').children().each(function(index) {
                    $(this).delay(300 * index).animate({
                        opacity: "1",
                        marginTop: "0"
                    }, 300);
                });
            }, {
                offset: "85%"
            });
        } else {
            $('.clients #carousel_ul').children().css({
                opacity: "1",
                marginTop: "0"
            });
        }
        /*===================================================================================*/
        /*  PROFOLIO                                                                         */
        /*===================================================================================*/
        var portfolio = portfolio || {},
            $portfolioItems = $('#portfolio-items'),
            $filtrable = $('#portfolio-filter');
        /*===================================================================================*/
        /*  PROFOLIO INIT FULL WIDTH                                                         */
        /*===================================================================================*/
        portfolio.fullWidth = function() {
            $(window).load(function() {
                $portfolioItems.isotope({
                    animationEngine: 'best-available',
                    animationOptions: {
                        duration: 250,
                        easing: 'easeInOutSine',
                        queue: false
                    }
                });
            });
            $filtrable.find('a').click(function(e) {
                var currentOption = $(this).data('cat');
                $filtrable.find('a').removeClass('active');
                $(this).addClass('active');
                if (currentOption !== '*') {
                    currentOption = '.' + currentOption;
                }
                $portfolioItems.isotope({
                    filter: currentOption
                });
                return false;
            });
        };
        /*===================================================================================*/
        /*  PROFOLIO INIT AJAX                                                               */
        /*===================================================================================*/
        portfolio.ajax = function() {
            function portfolioInit() {
                var newHash = "",
                    $mainContent = $("#portfolio-ajax"),
                    $pageWrap = $("#portfolio-wrap"),
                    root = '#!projects/',
                    rootLength = root.length,
                    url;
                $portfolioItems.find(".full-page").click(function() {
                    window.location.hash = $(this).attr("href");
                    $(document.body).addClass('noscroll');
                    return false;
                });
                //binding keypress function
                $("#portfolio-wrap").bind("keydown", function(e) {
                    if (e.keyCode == 37) {
                        $('.single-portfolio').remove();
                        window.location.hash = $("#portfolio-items .current").next().find('.full-page').attr("href");
                        return false;
                    } else if (e.keyCode == 39) {
                        $('.single-portfolio').remove();
                        window.location.hash = $("#portfolio-items .current").prev().find('.full-page').attr("href");
                        return false;
                    } else if (e.keyCode == 27) {
                        $('#portfolio-wrap').fadeOut('100', function() {
                            $('.single-portfolio').remove();
                        });
                        history.pushState('', document.title, window.location.pathname);
                        window.location.hash = '#_';
                        return false;
                    }
                });
                $(window).bind('hashchange', function() {
                    newHash = window.location.hash;
                    url = newHash.replace(/[#\!]/g, '');
                    if (newHash.substr(0, rootLength) == root) {
                        if ($pageWrap.is(':hidden')) {
                            $pageWrap.slideDown('3000', function() {});
                        }
                        $pageWrap.niceScroll({
                            cursorcolor: "#666",
                            cursorwidth: 6,
                            cursorborder: 0,
                            cursorborderradius: 0
                        });
                        $pageWrap.append('<div id="preloader"></div>');
                        $mainContent.load(url + " .single-portfolio", function(xhr, statusText, request) {
                            if (statusText == "success") {
                                setTimeout(function() {
                                    $('.single-portfolio .media-container').fitVids();
                                    $pageWrap.find('#preloader').remove();
                                }, 300);
                            }
                            if (statusText == "error") {
                                $mainContent.html('<div class="row pad-top pad-bottom"><div class="col-md-12 pad-top pad-bottom"><div class="alert-message error"><p>The Content cannot be loaded.</p></div></div></div>');
                                $pageWrap.find('#preloader').remove();
                            }
                            closeProject();
                            nextProject();
                            prevProject();
                        });
                        $("#portfolio-items article").removeClass("current");
                        $("#portfolio-items .full-page[href='" + newHash + "']").parent().addClass("current");
                        var projectIndex = $('#portfolio-items').find('article.current').index();
                        var projectLength = $('#portfolio-items article').length - 1;
                        if (projectIndex == projectLength) {
                            jQuery('#next-project').addClass('disabled');
                            jQuery('#prev-project').removeClass('disabled');
                        } else if (projectIndex == 0) {
                            jQuery('#prev-project').addClass('disabled');
                            jQuery('#next-project').removeClass('disabled');
                        } else {
                            jQuery('#prev-project, #next-project').removeClass('disabled');
                        }
                    } else if (newHash == '') {
                        $('#portfolio-wrap').fadeOut('100', function() {
                            $('.single-portfolio').remove();
                        });
                    }
                });
                $(window).trigger('hashchange');
            }

            function closeProject() {
                $('#close-project').on('click', function() {
                    $('#portfolio-wrap').fadeOut('100', function() {
                        $('.single-portfolio').remove();
                    });
                    history.pushState('', document.title, window.location.pathname);
                    window.location.hash = '#_';
                    $(document.body).removeClass('noscroll');
                    return false;
                });
            }

            function nextProject() {
                $("#next-project").on("click", function() {
                    $('.single-portfolio').remove();
                    window.location.hash = $("#portfolio-items .current").next().find('.full-page').attr("href");
                    return false;
                });
            }

            function prevProject() {
                $("#prev-project").on("click", function() {
                    $('.single-portfolio').remove();
                    window.location.hash = $("#portfolio-items .current").prev().find('.full-page').attr("href");
                    return false;
                });
            }
            if ($portfolioItems.length) {
                portfolioInit();
            }
        };

        function initColorBox() {
            //How to assign the Colorbox event to elements
            $(".cb-img").colorbox({
                rel: 'cb-img',
                transition: "fade",
                width: "80%",
                height: "80%"
            });
            $(".ajax").colorbox();
            $(".cb-youtube").colorbox({
                iframe: true,
                innerWidth: "80%",
                innerHeight: "80%"
            });
            $(".cb-vimeo").colorbox({
                iframe: true,
                innerWidth: "80%",
                innerHeight: "80%"
            });
            $(".cb-iframe").colorbox({
                iframe: true,
                width: "80%",
                height: "80%"
            });
            $(".callbacks").colorbox({
                onOpen: function() {
                    alert('onOpen: colorbox is about to open');
                },
                onLoad: function() {
                    alert('onLoad: colorbox has started to load the targeted content');
                },
                onComplete: function() {
                    alert('onComplete: colorbox has displayed the loaded content');
                },
                onCleanup: function() {
                    alert('onCleanup: colorbox has begun the close process');
                },
                onClosed: function() {
                    alert('onClosed: colorbox has completely closed');
                }
            });
        }
        portfolio.fullWidth();
        portfolio.ajax();
        initColorBox();

        /*Pie Chart*/
        $(function() {
            $('.chart').appear(function() {
                $('.chart').easyPieChart({
                    easing: 'easeOutBounce',
                    barColor: "#999999",
                    size: "100",
                    trackColor: false,
                    scaleColor: false,
                    lineWidth: 2,
                    animate: 2000,
                    onStep: function(from, to, percent) {
                        $(this.el).find('.percent').text(Math.round(percent));
                    }
                });
            });
        });

        /*Skill*/
        $('.skillBar li').each(function() {
            $(this).appear(function() {
                $(this).animate({
                    opacity: 1,
                    left: "0px"
                }, 2000);
                var b = $(this).find("span").attr("data-width");
                $(this).find("span").animate({
                    width: b + "%"
                }, 2200, "easeOutBounce")
            })
        });


        /* Start Package select */

        $(function() {
            $(".package").click(function() {
                $('.package-container .package').each(function() {
                    $(".package").removeClass("package-active");
                })
                $('.packages > div').each(function() {
                    $(".packages > div").removeClass("package-show");
                    $(".packages > div").addClass("package-hide");
                })
                var $currentTab = $(this);
                var $tabAria = $currentTab.attr('aria-controls');
                $currentTab.addClass("package-active");
                $("#" + $tabAria).removeClass("package-hide");
                $("#" + $tabAria).addClass("package-show");
            });
        });
        /* End Package select */

        // Contact Form Request
        $(".validate").validate();
        var form = $('#contactform');
        var submit = $('#contactForm_submit');
        var alertx = $('.form-respond');
        // form submit event
        $(document).on('submit', '#contactform', function(e) {
            e.preventDefault(); // prevent default form submit
            // sending ajax request through jQuery
            $.ajax({
                url: 'sendemail.php',
                type: 'POST',
                dataType: 'html',
                data: form.serialize(),
                beforeSend: function() {
                    alertx.fadeOut();
                    submit.html('Sending....'); // change submit button text
                },
                success: function(data) {
                    form.fadeOut(300);
                    alertx.html(data).fadeIn(1000); // fade in response data
                    setTimeout(function() {
                        alertx.html(data).fadeOut(300);
                        $('#name, #email,#phone, #message').val('');
                        form.fadeIn(1800);
                    }, 4000);
                },
                error: function(e) {
                    console.log(e)
                }
            });
        });
        // Minify the Nav Bar
        jQuery(document).scroll(function() {
            var position = jQuery(document).scrollTop();
            var headerHeight = jQuery('#g-header').outerHeight();
            var headerHeightHalf = (headerHeight / 2) - 80;

            if (jQuery('#g-header').length > 0) {
                var headerTop = jQuery('#g-header').offset().top;
            }
            if (position >= headerHeight - headerHeightHalf) {
                jQuery('#g-navigation').addClass('minified');
            } else {
                jQuery('#g-navigation').removeClass('minified');
            }
            if (position > headerTop + headerHeightHalf + 75) {
                jQuery('#g-navigation').addClass('darken');
            } else {
                jQuery('#g-navigation').removeClass('darken');
            }
            $('nav li').each(function() {
                var currentLink = $(this);
                var refElement = $(currentLink.find('a').attr("href"));
                if (refElement.position().top <= position &&
                    refElement.position().top + refElement.height() > position) {
                    $('nav li').removeClass("active");
                    currentLink.addClass("active");
                } else {
                    currentLink.find('a').removeClass("active");
                }
            });
        });
        //Back To Top
        $(window).scroll(function() {
            if ($(window).scrollTop() > 400) {
                $(".g-totop").fadeIn(200);
            } else {
                $(".g-totop").fadeOut(200);
            }
        });
    });
})(jQuery);

//Navigation Scrolling
$(function() {
    $('.g-toplevel li a').click(function(event) {
        var el = $(this).attr('href');
        var $anchor = $(this);
        if (el == "#g-header") {
            $('html, body').stop().animate({
                scrollTop: $(el).offset().top
            }, 2000, 'easeInOutExpo');
            event.preventDefault();
        } else {
            $('html, body').stop().animate({
                scrollTop: $(el).offset().top + 1
            }, 2000, 'easeInOutExpo');
            event.preventDefault();
        }
    });
});
// Scroll nav Scrolling
$(function() {
    $('a.scroll').click(function(event) {
        var el = $(this).attr('href');
        $('html, body').stop().animate({
            scrollTop: $(el).offset().top + 1
        }, 2000, 'easeInOutExpo');
        event.preventDefault();
    });
});


/*Parallax*/

(function($) {
    $(window).bind('load', function() {
        parallaxInit();
    });
})(jQuery);



function parallaxInit() {
    jQuery('#number').parallax("50%", 0.3); /*add as necessary*/
    jQuery('#skill').parallax("50%", 0.3); /*add as necessary*/
    jQuery('#clients').parallax("50%", 0.3); /*add as necessary*/
}



var onMobile = false;
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
    onMobile = true;
}

/*-----------------------------------
Counter
-----------------------------------*/
$(function() {
    "use strict";
    $(".counters-item").appear(function() {
        $(".counters-item-number [data-to]").each(function() {
            var count = $(this).attr('data-to');
            $(this).delay(6000).countTo({
                from: 50,
                to: count,
                speed: 3000,
                refreshInterval: 50,
            });
        });
    });
});

//Process Bar
var processLine;
(function($) {
    processLine = {
        el: ".identity-mobile-device.selfie-mobile-put-animation .process-node , .identity-pc-device .process-node",
        init: function() {
            processLine.bind();
        },
        bind: function() {
            $(window).scroll(function() {
                processLine.check();
            });
        },
        check: function() {
            $(processLine.el).each(function() {
                if ($(this).offset().top < $(window).scrollTop() + $(window).height() - 200) {
                    $(this).closest("li").addClass("active").find(".line").addClass("active");
                    $(this).addClass("active");
                } else {
                    $(this).removeClass("active");
                    $(this).closest("li").removeClass("active").find(".line").removeClass("active");
                }
            });
        }
    }
})(jQuery);
