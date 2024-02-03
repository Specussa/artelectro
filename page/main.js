$( document ).ready(function() {
    const solutions_slider = new Swiper('.solutions_slider', {
        spaceBetween: 20,
        navigation: {
            nextEl: '.solutions_next',
            prevEl: '.solutions_prev',
        },
        pagination: {
            el: '.solutions_pagination',
        },
        breakpoints: {
            // when window width is >= 320px
            320: {
            slidesPerView: 1,
            },
            // when window width is >= 480px
            768: {
            slidesPerView: 3,
            },
            // when window width is >= 640px
            900: {
            slidesPerView: 4,
            }
        }
    })
    const project_slider = new Swiper('.project_slider', {
        slidesPerView: 1,
        navigation: {
            nextEl: '.project_next',
            prevEl: '.project_prev',
        },
        pagination: {
            el: '.project_pagination',
        },
    })
    const suppliers_slider = new Swiper('.suppliers_slider', {
        spaceBetween: 20,
        navigation: {
            nextEl: '.suppliers_next',
            prevEl: '.suppliers_prev',
        },
        pagination: {
            el: '.suppliers_pagination',
        },
        breakpoints: {
            // when window width is >= 320px
            320: {
            slidesPerView: 1,
            },
            // when window width is >= 480px
            768: {
            slidesPerView: 3,
            },
            // when window width is >= 640px
            900: {
            slidesPerView: 4,
            }
        }
    })
    const supplierst_slider = new Swiper('.supplierst_slider', {
        spaceBetween: 20,
        navigation: {
            nextEl: '.supplierst_next',
            prevEl: '.supplierst_prev',
        },
        pagination: {
            el: '.supplierst_pagination',
        },
        breakpoints: {
            // when window width is >= 320px
            320: {
            slidesPerView: 1,
            },
            // when window width is >= 480px
            768: {
            slidesPerView: 3,
            },
            // when window width is >= 640px
            900: {
            slidesPerView: 4,
            }
        }
    })
    const about_galereya = new Swiper('.about_galereya', {
        spaceBetween: 20,
		loop: true,
        navigation: {
            nextEl: '.about_next',
            prevEl: '.about_prev',
        },
        pagination: {
            el: '.about_pagination',
        },
        breakpoints: {
            // when window width is >= 320px
            320: {
            slidesPerView:1,
            },
            // when window width is >= 480px
            480: {
            slidesPerView: 2,
            },
            // when window width is >= 640px
            768: {
            slidesPerView: 3,

            }
        }
    })
    const news_slider = new Swiper('.news_slider', {
        spaceBetween: 20,
        navigation: {
            nextEl: '.news_next',
            prevEl: '.news_prev',
        },
        pagination: {
            el: '.news_pagination',
        },
        breakpoints: {
            // when window width is >= 320px
            320: {
            slidesPerView: 1,
            },
            // when window width is >= 480px
            480: {
            slidesPerView: 2,
            },
            // when window width is >= 640px
            768: {
            slidesPerView: 3,
            }
        }
    })
    const products_slider = new Swiper('.products_slider', {
        spaceBetween: 20,
        navigation: {
            nextEl: '.products_next',
            prevEl: '.products_prev',
        },
        pagination: {
            el: '.products_pagination',
        },
        breakpoints: {
            // when window width is >= 320px
            320: {
            slidesPerView: 1,
            },
            // when window width is >= 480px
            480: {
            slidesPerView: 2,
            },
            // when window width is >= 640px
            768: {
            slidesPerView: 3,
            }
        }
    })
    const project_page_sl = new Swiper('.project_page_sl', {
        spaceBetween: 20,
        navigation: {
            nextEl: '.project_sl_next',
            prevEl: '.project_sl_prev',
        },
        pagination: {
            el: '.project_sl_pagination',
        },
        breakpoints: {
            // when window width is >= 320px
            320: {
            slidesPerView: 1,
            },
            // when window width is >= 480px
            480: {
            slidesPerView: 2,
            },
            // when window width is >= 640px
            768: {
            slidesPerView: 3,
            }
        }
    })
    const single_galereya = new Swiper('.single_galereya', {
        slidesPerView: 1,
        navigation: {
            nextEl: '.galerey_next',
            prevEl: '.galerey_prev',
        },
        pagination: {
            el: '.galerey_pagination',
        },
    })
    $(document).click(function (e) {
        if ($(e.target).closest(".language_selected").length) {
            $('.language_choice').toggleClass('active');
            return;
        }
        if ($(e.target).closest(".header_message").length) {
            $('.message_selected').toggleClass('active');
            return;
        }
        // клик снаружи элемента
        $('.language_choice, .message_selected').removeClass('active');
    });
    $( "body" ).on( "click", ".faq_name", function(e) {
        e.preventDefault();
        $(".faq_name").parent('.faq_item').toggleClass('active');
        $(".faq_name").not(this).parent('.faq_item').removeClass('active');
    });
    $( "body" ).on( "click", ".openpopup", function(e) {
        e.preventDefault();
		if($(this).data('id') == 'news_popup'){
            $.ajax({
                url: "/local/templates/artelektro/popup_news/",
                type: 'GET',
                data: {"PID": $(this).data('page'),idblock: $(this).data('idblock')}, 
                success: function (response) {
					$('div#news_popup').html(response);
                }
            });
		}
        $('.overlay, #'+$(this).data('id')).addClass('active');
        $('.mobile_nav').removeClass('active');
    });
	$( "body" ).on( "click", "ul a", function(e) {
		if($(this).attr('href') == '#open_popup'){
			e.preventDefault();
			$('.overlay, #consult').addClass('active');
			$('.mobile_nav').removeClass('active');	
		}
    });
    $( "body" ).on( "click", ".close, .overlay", function(e) {
        e.preventDefault();
        $('.overlay, .popup, .mobile_nav').removeClass('active');
		$('div#news_popup').html('');
    });
    $( "body" ).on( "click", ".project_slider_item img", function(e) {
        e.preventDefault();
        $('.project_slider_item .img > img').attr('src',$(this).attr('src'));
    });
    $( ".time_block" ).hover(
        function() {
            $( this ).children('input').attr('type', 'time');
        }, function() {
            
        }
    );
    $('.file_block input').on('change', function() {
        var splittedFakePath = this.value.split('\\');
        console.log(splittedFakePath[splittedFakePath.length - 1]);
        $(this).next('span').text(splittedFakePath[splittedFakePath.length - 1]);
    });
    if (document.documentElement.clientWidth < 768) {
        $('.mobile_nav').append('<div class="close"><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none"><path d="M6.93341 20.5834L5.41675 19.0667L11.4834 13.0001L5.41675 6.93341L6.93341 5.41675L13.0001 11.4834L19.0667 5.41675L20.5834 6.93341L14.5167 13.0001L20.5834 19.0667L19.0667 20.5834L13.0001 14.5167L6.93341 20.5834Z" fill="#BABABF"/></svg></div>');
        $('.mobile_nav').append('<div class="mobile_content"></div>');
        $('.mobile_content').append($('.header_bottom nav').html());
        $('.mobile_content').append('<div class="phone_block">'+$('.phone_block').html()+'</div>');
        $('.mobile_content').append('<div class="social flex">'+$('.header_info .social').html()+'</div>');
        $('.mobile_content').append('<div class="header_btn_block">'+$('.header_btn_block').html()+'</div>');
        $('.mobile_nav li.child>a').append('<div class="open"><svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="none"><path d="M16.5015 6.33106L9.00146 13.8311L1.50146 6.33106L2.83272 4.99981L9.00146 11.1686L15.1702 4.99981L16.5015 6.33106Z" fill="#63A48D"/></svg></div>');
        $( "body" ).on( "click", ".mobile_nav .child .open", function(e) {
            e.preventDefault();
            $(this).closest('.child').toggleClass('active');
        });
        $( "body" ).on( "click", ".burger", function(e) {
            e.preventDefault();
            $('.mobile_nav, .overlay').addClass('active');
        });
        
        $('.form_bottom_file .col_4:last-child').before('<div class="col_4">'+$('.form_bottom_file .col_4:nth-child(4)').html()+'</div>');
        $('.form_bottom_file .col_4:nth-child(4)').remove();
    }
    var calendar_slider = new Swiper(".calendar_slider", {
        slidesPerView: 1,
        allowTouchMove:false,
        effect: "fade",
    });
    var mount_slider = new Swiper(".mount_slider", {
        slidesPerView: 1,
        effect: "fade",
        allowTouchMove:false,
        navigation: {
            nextEl: ".calendar_header .next",
            prevEl: ".calendar_header .prev",
        },
        thumbs: {
            swiper: calendar_slider,
        },
    });
    $( "body" ).on( "click", ".calendar_block .dey .item", function(e) {
        e.preventDefault();
        $(this).toggleClass('active');
    });
	$(window).on("load", function() {
	if($('.home_top')){
		var bl = $('.home_top').height(),
		vid = $('video').height();
		if(vid > bl){
			console.log(vid - bl);
			var t = (vid - bl)/2;
			$('.video').css('top','-'+t+'px');
		}else{
			$('.video, video').css('height','100%');
			$('.video, video').css('width','initial');
			var w = $('.home_top').width(),
			vw = $('video').width();
			var wb = (vw - w)/2
			$('video').css('left','-'+wb+'px');
		}
		$('.video').css('opacity','0.3');
	}
	});


//Проверка полей
function valid_input($form){
	$form.find('.required').each(function() {
		if ($(this).val() != '') {
			// Если поле не пустое удаляем класс-указание
			$(this).removeClass('errore');
		} else {
			// Если поле пустое добавляем класс-указание
			$(this).addClass('errore');
		}
	});
	if($form.find('input[type="checkbox"]')){
		if(!$form.find('input[type="checkbox"]').is(':checked')) { 
			$form.find('.accept').addClass('errore');
		}else{
			$form.find('.accept').removeClass('errore');
		}
	}
	sizeEmpty = $form.find('.errore').length;
	return sizeEmpty;
}

$(".ajax_form .btn").on("click", function(event) {
	event.preventDefault();
	var form = $(this).closest('form');
	var sizeEmpty = valid_input(form);

	if(sizeEmpty == 0){
		form_data = new FormData();
		//загрузка файла
		if(form.find("input[type='file']").length){
			var file_obj = form.find("input[type='file']").prop('files');
			for(i=0; i<file_obj.length; i++) {
				form_data.append('file[]', file_obj[i]);
			}
		}
		form.find('input[type=text], input[type=time]').each(function() {
			form_data.append(this.name, $(this).val());
		});
		$.ajax({
			url: '/local/templates/artelektro/mail/mail.php',
			type: 'POST',
             async: false,
             cache: false,
             contentType: false,
             processData: false,
			data: form_data,
			success: function (response) {
				console.log(response);
				form.find('input[type=text], input[type=time]').val('');
				$('.popup').removeClass('active');
				$('.overlay, #trank').addClass('active');
			}
		});
	}
});




});
 


