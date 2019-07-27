$(document).ready(function() {
    $('.counter').each(function() {
        var $this = $(this),
            countTo = $this.attr('data-count');
        $({ countNum: $this.text() }).animate({
            countNum: countTo
        }, {
            duration: 1000,
            easing: 'linear',
            step: function() {
                $this.text(Math.floor(this.countNum));
            },
            complete: function() {
                $this.text(this.countNum);
            }
        });
    });
});


$(document).ready(function() {
    $('.carousel-control-prev').hover(function() {
            $('img', this).attr("src", "img/arrow-left-hover.png");
        },
        function() {
            $('img', this).attr("src", "img/arrow-left.png");
        });

});

$(document).ready(function() {
    $('.carousel-control-next').hover(function() {
            $('img', this).attr("src", "img/arrow-right-hover.png");
        },
        function() {
            $('img', this).attr("src", "img/arrow-right.png");
        });

});

$(document).ready(function() {
    $('.service').hover(function() {
            $('.service-line', this).attr("src", "img/line-hover.png");
        },
        function() {
            $('.service-line', this).attr("src", "img/line.png");
        });

});


$(document).ready(function() {
    $('.service-1').hover(function() {
            $('.service-img-1').attr("src", "img/web-design-hover.png");
        },
        function() {
            $('.service-img-1').attr("src", "img/web-design.png");
        });

});

$(document).ready(function() {
    $('.service-2').hover(function() {
            $('.service-img-2').attr("src", "img/development-hover.png");
        },
        function() {
            $('.service-img-2').attr("src", "img/development.png");
        });

});

$(document).ready(function() {
    $('.service-3').hover(function() {
            $('.service-img-3').attr("src", "img/customization-hover.png");
        },
        function() {
            $('.service-img-3').attr("src", "img/customization.png");
        });

});

$(document).ready(function() {
    $('.service-4').hover(function() {
            $('.service-img-4').attr("src", "img/marketing-hover.png");
        },
        function() {
            $('.service-img-4').attr("src", "img/marketing.png");
        });

});

$(document).ready(function() {
    $('#buttonAll').click(function() {
        $('.block-projects').removeClass('display-none');
    });
});

$(document).ready(function() {
    $('#buttonWebDesign').click(function() {
        $('.block-projects').each(function() {
            if ($(this).hasClass('projects-web-design')) {
                $(this).removeClass('display-none');
            } else {
                $(this).addClass('display-none');
            }
        })
    });
});

$(document).ready(function() {
    $('#buttonMobileApp').click(function() {
        $('.block-projects').each(function() {
            if ($(this).hasClass('projects-mobile-app')) {
                $(this).removeClass('display-none');
            } else {
                $(this).addClass('display-none');
            }
        })
    });
});

$(document).ready(function() {
    $('#buttonIllustration').click(function() {
        $('.block-projects').each(function() {
            if ($(this).hasClass('projects-illustration')) {
                $(this).removeClass('display-none');
            } else {
                $(this).addClass('display-none');
            }
        })
    });
});

$(document).ready(function() {
    $('#buttonPhotography').click(function() {
        $('.block-projects').each(function() {
            if ($(this).hasClass('projects-photography')) {
                $(this).removeClass('display-none');
            } else {
                $(this).addClass('display-none');
            }
        })
    });
});

$(document).ready(function() {
    $('.projects-block-container').hover(function() {
        $(this).find('.loupe-img').hover(function() {
            $('.loupe-img').attr("src", "img/loupe-img-hover.png");
        }, function() {
            $('.loupe-img').attr("src", "img/loupe-img.png");
        });
        $(this).find('.link-img').hover(function() {
            $('.link-img').attr("src", "img/link-img-hover.png");
        }, function() {
            $('.link-img').attr("src", "img/link-img.png");
        });
    })
});