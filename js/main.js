$(document).ready(function(){$(".header__burger").click(function(r){$(".header__burger,.header__menu").toggleClass("active"),$("body").toggleClass("lock"),$(".btn-close").toggleClass("lock")})});let currentScroll=145;$(window).scroll(function(){var r=$(window).scrollTop();$(".header__menu").hasClass("active")||(0==r?($(".header").css("transform","translateY(0)"),currentScroll=90):r<currentScroll?$(".header").css("transform","translateY(0)"):($(".header").css("transform","translateY(-100%)"),currentScroll=r))});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsibWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuXHQkKCcuaGVhZGVyX19idXJnZXInKS5jbGljayhmdW5jdGlvbihldmVudCkge1xyXG5cdFx0JCgnLmhlYWRlcl9fYnVyZ2VyLC5oZWFkZXJfX21lbnUnKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XHJcblx0XHQkKCdib2R5JykudG9nZ2xlQ2xhc3MoJ2xvY2snKTtcclxuXHRcdCQoJy5idG4tY2xvc2UnKS50b2dnbGVDbGFzcygnbG9jaycpO1xyXG5cdH0pO1xyXG59KTtcclxuXHJcblxyXG5sZXQgY3VycmVudFNjcm9sbCA9IDE0NTtcclxuXHJcbiQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24gKCkge1xyXG4gICBsZXQgc2Nyb2xsID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xyXG4gICAgaWYgKCEkKCcuaGVhZGVyX19tZW51JykuaGFzQ2xhc3MoJ2FjdGl2ZScpKSB7ICAgICAgXHJcbiAgICAgICAgaWYgKHNjcm9sbCA9PSAwKSB7XHJcbiAgICAgICAgICAkKCcuaGVhZGVyJykuY3NzKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlWSgwKScpO1xyXG4gICAgICAgICAgY3VycmVudFNjcm9sbCA9IDkwO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoc2Nyb2xsIDwgY3VycmVudFNjcm9sbCkge1xyXG4gICAgICAgICAgJCgnLmhlYWRlcicpLmNzcygndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZVkoMCknKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgJCgnLmhlYWRlcicpLmNzcygndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZVkoLTEwMCUpJyk7XHJcbiAgICAgICAgIGN1cnJlbnRTY3JvbGwgPSBzY3JvbGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KTtcclxuXHJcblxyXG4vLyAkKHdpbmRvdykub24oXCJzY3JvbGxcIiwgZnVuY3Rpb24oKSB7XHJcbi8vICAgICAkKEhUTUxCb2R5RWxlbWVudC5oZWFkZXIpLnRvZ2dsZUNsYXNzKFwiYWN0aXZlXCIsICQodGhpcykuc2Nyb2xsVG9wKCkgPiAkKHdpbmRvdykuaGVpZ2h0KCkpO1xyXG4vLyB9KTtcclxuXHJcbi8vICQod2luZG93KS5vbihcInNjcm9sbFwiLCBmdW5jdGlvbigpIHtcclxuLy8gICAgIHZhciBzY3JvbGxQb3MgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XHJcbi8vICAgICBpZiAoc2Nyb2xsUG9zIDw9IDApIHtcclxuLy8gICAgICAgICAkKCcubmF2JykuYWRkQ2xhc3MoJ3RvcC1vZi1wYWdlJyk7XHJcbi8vICAgICB9IGVsc2Uge1xyXG4vLyAgICAgICAgICQoJy5uYXYnKS5yZW1vdmVDbGFzcygndG9wLW9mLXBhZ2UnKTtcclxuLy8gICAgIH1cclxuLy8gfSk7XHJcblxyXG5cclxuLy8gZnVuY3Rpb24gdG9nZ2xlU2Nyb2xsQ2xhc3MoKSB7XHJcbi8vICAgICB2YXIgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnbmF2JylbMF07XHJcbi8vICAgICB3aW5kb3cucGFnZVlPZmZzZXQgPiAwID8gbmF2LmNsYXNzTGlzdC5yZW1vdmUoJ2ZhZGUnKSA6IG5hdi5jbGFzc0xpc3QuYWRkKCdiZycpXHJcbi8vICAgfVxyXG4vLyAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBmdW5jdGlvbigpIHt0b2dnbGVTY3JvbGxDbGFzcygpfSk7XHJcbi8vICAgdG9nZ2xlU2Nyb2xsQ2xhc3MoKTsiXSwibmFtZXMiOlsiJCIsImRvY3VtZW50IiwicmVhZHkiLCJjbGljayIsImV2ZW50IiwidG9nZ2xlQ2xhc3MiLCJjdXJyZW50U2Nyb2xsIiwid2luZG93Iiwic2Nyb2xsIiwic2Nyb2xsVG9wIiwiaGFzQ2xhc3MiLCJjc3MiXSwibWFwcGluZ3MiOiJBQUFBQSxFQUFFQyxVQUFVQyxNQUFNLFdBQ2pCRixFQUFFLG1CQUFtQkcsTUFBTSxTQUFTQyxHQUNuQ0osRUFBRSxpQ0FBaUNLLFlBQVksVUFDL0NMLEVBQUUsUUFBUUssWUFBWSxRQUN0QkwsRUFBRSxjQUFjSyxZQUFZLFlBSzlCLElBQUlDLGNBQWdCLElBRXBCTixFQUFFTyxRQUFRQyxPQUFPLFdBQ2QsSUFBSUEsRUFBU1IsRUFBRU8sUUFBUUUsWUFDakJULEVBQUUsaUJBQWlCVSxTQUFTLFlBQ2YsR0FBVkYsR0FDRlIsRUFBRSxXQUFXVyxJQUFJLFlBQWEsaUJBQzlCTCxjQUFnQixJQUNQRSxFQUFTRixjQUNsQk4sRUFBRSxXQUFXVyxJQUFJLFlBQWEsa0JBRTlCWCxFQUFFLFdBQVdXLElBQUksWUFBYSxxQkFDL0JMLGNBQWdCRSJ9
