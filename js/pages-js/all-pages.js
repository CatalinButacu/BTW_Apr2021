function imgOnLoad() {
    for (var e = document.getElementsByTagName("img"), t = 0; t < e.length; t++) e[t].getAttribute("data-src") && e[t].setAttribute("src", e[t].getAttribute("data-src"))
}! function () {
    var e = document.getElementsByClassName("header-video"),
        t = !1;
    if (0 < e.length && window.innerWidth > 1250) {
        var o = (e = e[0]).querySelectorAll("source");

        function i() {
            1 == t && $(window).scrollTop() < 600 && (t = !1, videoPromise = e.play())
        }
        o[o.length - 1].addEventListener("error", function (t) {
            var o = $(e).parent().find(".fallback-gif")[0];
            $(o).removeAttr("hidden"), o.innerHTML = e.innerHTML, e.parentNode.replaceChild(o, e)
        }, !1), $(window).on("mousemove scroll click", function () {
            i()
        }), e.onended = function () {
            setTimeout(function () {
                t = !0
            }, 500)
        }, setTimeout(function () {
            t = !0, i()
        }, 1500)
    }
    var n = $(".vert-loader");
    "true" == localStorage.getItem("page") ? setTimeout(function () {
        n.removeClass("show"), setTimeout(function () {
            n.removeClass("active")
        }, 750)
    }, 50) : n.removeClass("show active");
    var s, a = $(".notificator"),
        r = $(".notifier-collapse"),
        l = $(".close-notificator");
    if (0 < a.length && 0 < l.length) {
        var c = "true" == sessionStorage.getItem("notificationHidden");
        r.on("click", function () {
            a.toggleClass("large"), clearTimeout(s)
        }), l.on("click", function () {
            sessionStorage.setItem("notificationHidden", "true"), a.removeClass("show"), clearTimeout(s)
        }), $(window).on("scroll", function () {
            var e = $(window).height() / 5;
            $(window).scrollTop() > e && 0 == c && (c = !0, a.addClass("show large"), s = setTimeout(function () {
                a.removeClass("large")
            }, 1e4))
        })
    }
}(), window.onload = function () {
    imgOnLoad()
}, window.onbeforeunload = function () {
    window.scrollTo(0, 0)
}, jQuery(function (e) {
    var t = e("body");
    t.show();
    var o, i = window.innerWidth,
        n = e(window),
        s = e("#mastfoot").outerHeight();
    e(".l-header, .l-horizontal, .info-buttons-wrapper").addClass("show");
    var a, r = e(".container-load").innerWidth(),
        l = (n.innerWidth() - r) / 2;

    function c(e) {
        (e = e || window.event).preventDefault && e.preventDefault(), e.returnValue = !1
    }

    function d(e) {
        if (e.keyCode || e.which) return c(e), !1
    }

    function u() {
        window.removeEventListener && window.removeEventListener("DOMMouseScroll", c, !1), window.onmousewheel = document.onmousewheel = null, window.onwheel = null, window.ontouchmove = null, document.onkeydown = null
    }

    function p(e, t) {
        if ("function" == typeof jQuery && e instanceof jQuery && (e = e[0]), null != e) {
            var o = e.getBoundingClientRect();
            return 0 <= o.top && 0 <= o.left && o.bottom <= (window.innerHeight + t || document.documentElement.clientHeight + t) && o.right <= (window.innerWidth || document.documentElement.clientWidth)
        }
    }
    e(".outer-load").css("height", "9999px"), e(".outer-load").css("width", l + "px"), e(".outer-load").eq(1).css("left", l + r + "px"), "true" === localStorage.getItem("page") ? setTimeout(function () {
        e(".outer-load").css("height", "0"), e(".l-loading").addClass("show"), e(".outer-load").eq(1).css({
            right: l + r + "px",
            left: "auto"
        }), e(".l-loading").addClass("hide-alt"), setTimeout(function () {
            e(".outer-load").css("height", "0"), e(".l-loading").removeClass("show"), e(".l-loading").removeClass("hide-alt"), e(".outer-load").eq(1).css({
                right: "auto",
                left: l + r + "px"
            }), localStorage.removeItem("page")
        }, 1300)
    }, 0) : e(".l-loading").removeClass("show show-darkgray"), e(".outer-load").css("height", "0"), a = e("#newsletter-subscribe").length ? e("#newsletter-subscribe").outerHeight() : 0, o = a + s + 100, 1025 < i && t.css("margin-bottom", s + "px"), setTimeout(function () {
        t.addClass("fade-lines")
    }, 400);
    var m, h, f, w, g, v = !0;

    function b(e, t, o) {
        setTimeout(function () {
            e.classList.add("show")
        }, o * t)
    }
    m = document.querySelectorAll(".banner-caption .write-text .outer-wrapper"), h = document.querySelectorAll(".scrollspy-nav li"), f = document.getElementsByTagName("body")[0], w = document.querySelectorAll(".single-portfolio-count a, #banner .animate-bigletter, .scrollspy-nav, #forms-popup .contact-us-wrapper, .scrollspy-nav span, #banner .banner-object, .breadcrumbs ul > li, .portfolio-count"), g = document.querySelectorAll(".info-buttons-wrapper .popart-btn"), setTimeout(function () {
        f.classList.remove("hide-header");
        for (var e = 0; e < w.length; e++) w[e].classList.add("show");
        for (var t = 0; t < m.length; t++) b(m[t], t, 300);
        for (var o = 0; o < h.length; o++) b(h[o], o, 200);
        u()
    }, 800), setTimeout(function () {
        f.classList.remove("slow-header");
        for (var e = 0; e < g.length; e++) b(g[e], e, 150);
        v = !0
    }, 1300), v = !0, e("a").on("click", function (t) {
        var o = e(this).attr("href");
        o.includes("javascript:;") || "" == o || o.includes("#") || o.includes("tel:") || o.includes("mob:") || o.includes("mailto:") || o.includes("file:") || o.includes("fax:") || (t.preventDefault(), v && (v = !1, e(this).attr("data-href-title") && e(this).attr("data-href-title"), localStorage.setItem("page", "true"), e(".vert-loader").addClass("show active"), e(".l-loading").addClass("show show-darkgray"), setTimeout(function () {
            window.location = o
        }, 900)))
    }), e(window).on("popstate", function (t) {
        var o;
        t.preventDefault(), v && (v = !1, localStorage.setItem("page", "true"), console.log("loading.."), console.log(window.history), o = null !== window.history.state ? window.history.state.href : "", e(".vert-loader").addClass("show active"), e(".l-loading").addClass("show show-darkgray"), setTimeout(function () {
            window.location = o
        }, 500))
    });
    var C = 0;

    function $() {
        window.addEventListener && window.addEventListener("DOMMouseScroll", c, !1), window.onwheel = c, window.onmousewheel = document.onmousewheel = c, window.ontouchmove = c, document.onkeydown = d, e("#nav-btn").addClass("active"), e("#navsidebar").addClass("active"), e(".contact-us-wrapper").removeClass("show"), t.addClass("blur"), e(".menu-btn").addClass("open")
    }

    function y() {
        e("#navsidebar").removeClass("active"), e("#nav-btn").removeClass("active"), setTimeout(function () {
            e(".contact-us-wrapper").addClass("show")
        }, 500), t.removeClass("blur"), e(".menu-btn").removeClass("open"), u()
    }
    if (n.scroll(function (o) {
            var i = e(this).scrollTop(),
                n = e("#sidebar");
            1024 < window.innerWidth ? (C < i ? (t.addClass(" "), e("#side-nav").removeClass("visible-header"), n.length && n.addClass("show")) : i <= 50 ? t.removeClass(" ") : (t.removeClass("hide-header"), e("#side-nav").addClass("visible-header")), C = i) : 600 < i && (C < i ? (t.addClass(" "), e("#side-nav").removeClass("visible-header"), n.length && n.addClass("show")) : i <= 50 ? t.removeClass(" ") : (t.removeClass("hide-header"), e("#side-nav").addClass("visible-header")), C = i)
        }), 1250 < i ? e("#nav-btn").on("click", function () {
            e(this).hasClass("active") ? y() : $()
        }) : (e("#nav-btn").on("click", function () {
            e(this).hasClass("active") ? y() : $()
        }), t.on("mouseup", function (t) {
            var o = e("#navsidebar");
            o.is(t.target) || 0 !== o.has(t.target).length || e("#nav-btn").is(t.target) || y()
        })), e(".sub-menu-btn").on("click", function () {
            for (var t = document.querySelectorAll(".sub-menu-btn"), o = 0; o < t.length; o++) t[o] == this ? t[o].classList.contains("open") ? (t[o].classList.remove("open"), e(t[o]).siblings(".sub-menu-wrapper, .sub-menu-wrapper-simple").stop().slideUp()) : (t[o].classList.add("open"), e(t[o]).siblings(".sub-menu-wrapper, .sub-menu-wrapper-simple").stop().slideDown()) : (t[o].classList.remove("open"), e(t[o]).siblings(".sub-menu-wrapper, .sub-menu-wrapper-simple").stop().slideUp())
        }), 1250 < window.outerWidth) n.on("scroll", function () {
        e(".scroll-show").length && e(".scroll-show").each(function (t, o) {
            var i = e(o).outerHeight() / 2;
            if (p(e(o), i)) {
                var n = "#" + e(o).attr("id");
                e(o).find(".yellow-bg").addClass("show"), e(o).find(".yellow-block").addClass("show"), "#homeblog" == n ? e("#homeblog .outer-wrapper").addClass("show") : e(o).find(".outer-wrapper").each(function (t, o) {
                    var i = e(o).find(".outer-wrapper").length;
                    i -= e(o).find(".write-all .outer-wrapper").length;
                    var n = e(o).parent().hasClass("write-all") ? i : t;
                    setTimeout(function () {
                        e(o).addClass("show")
                    }, 300 * n)
                })
            }
        }), e(".animate-bigletter").length && e(".animate-bigletter").each(function () {
            p(e(this), 0) && e(this).addClass("show")
        }), e(".yellow-block").length && e(".yellow-block").each(function () {
            p(e(this), 300) && e(this).addClass("show")
        }), e(".section-image").length && e(".section-image").each(function () {
            if (p(e(this), 300)) {
                e(this).addClass("show");
                var t = e(this);
                setTimeout(function () {
                    t.hasClass("plx") && t.addClass("no-delay")
                }, 500)
            }
        }), e(".about-testimonials").length && p(e(".testimonials-statistics"), 300) && T && (e(".ts-inc").each(function (t, o) {
            setTimeout(function () {
                var t = parseInt(e(o).text());
                e(o).text(t + 1)
            }, 200 * t + 500)
        }), T = !1)
    });
    else {
        0 < e(".animate-bigletter").length && e("main .animate-bigletter").addClass("show"), 0 < e(".section-image").length && e(".section-image").addClass("show"), 0 < e(".yellow-block").length && e("main .yellow-block").addClass("show"), 0 < e(".section-content").length && e("main .outer-wrapper").addClass("show");
        var k = setTimeout(function () {
            e("main").addClass("show"), clearTimeout(k)
        }, 3300)
    }
    var T = !0;
    if (n.on("scroll", function () {
            var t = e("#homeslides-wrapp");
            if (t.length) {
                var o = t.attr("style");
                o && (-1 === o.search("matrix") ? (o = o.replace("transform: translate(", "").replace("%, 0%) translate3d(0px, 0px, 0px);", ""), 40 < (o = -1 * parseInt(o)) && T && (e(".ts-inc").each(function (t, o) {
                    setTimeout(function () {
                        var t = parseInt(e(o).text());
                        e(o).text(t + 1)
                    }, 200 * t + 500)
                }), T = !1), e("#scrollspy").addClass("display-scrolling")) : e("#scrollspy").removeClass("display-scrolling"))
            }
        }), 1270 < i && function () {
            var e = document.querySelectorAll(".container")[1],
                t = document.querySelectorAll(".hi-wrapper"),
                o = window.innerWidth,
                i = (window.innerWidth - e.clientWidth - 10) / 2;
            o < 1650 && (i += (e.clientWidth - 30) / 3);
            for (var n = 0; n < t.length; n++) t[n].style.width = i + "px"
        }(), e("#toTop").on("click", function (t) {
            t.preventDefault(), e("html, body").animate({
                scrollTop: 0
            }, 750)
        }), e("#sidebar")) {
        function S(t, o) {
            this.wrapper = document.getElementById("sidebar"), this.element = document.getElementById("side-nav"), this.fixed = !1, this.itemDelay = .05, this.width = 0, this.resizeTimer = "";
            var i = this;
            setTimeout(function () {
                e("#sidebar").length && i.sidebarInit()
            }, 500)
        }
        S.prototype.sidebarInit = function () {
            var t, o;
            o = this, e("#sidebar").length && (1270 < n.width() && (o.getWidth(), o.itemsDelay()), window.addEventListener("scroll", function () {
                o.sticky(o.wrapper)
            }), window.addEventListener("resize", function () {
                clearTimeout(t), 1270 < n.width() ? t = setTimeout(function () {
                    o.getWidth()
                }, 150) : o.wrapper.style.width = "100%"
            }))
        }, S.prototype.ajaxInit = function (e) {
            setTimeout(this.sidebarInit, e)
        }, S.prototype.itemsDelay = function () {
            var t, o, i, n, s, a, r;
            if (e("#sidebar").length) {
                for (t = (r = this).element.childNodes[1], o = r.element.childNodes[3].children, i = r.element.childNodes[7].children, n = r.itemDelay, n = (a = function (e, t) {
                        return e.style.transitionDelay = t + "s", t + r.itemDelay
                    })(t, .3), s = 0; s < o.length; s++) n = a(o[s], n);
                for (s = 0; s < i.length; s++) n = a(i[s], n)
            }
        }, S.prototype.getWidth = function () {
            var t, o;
            e("#sidebar").length && (o = window.innerWidth, document.getElementById("main"), t = document.querySelector(".l-horizontal"), this.wrapper.style.width = 1850 < o ? "290px" : t.offsetLeft - 5 + "px")
        }, S.prototype.sticky = function (t) {
            var o, i, n, s, a;
            e("#sidebar").length && (a = document.getElementById("sidebar"), o = a.childNodes[1].childNodes[7], document.body, i = window.pageYOffset, n = document.getElementById("main").clientHeight, window.innerHeight, n <= i || (s = 90 < i ? (a.classList.add("show"), clearTimeout(s), setTimeout(function () {
                o.classList.add("no-delay")
            }, 400)) : (a.classList.remove("show"), clearTimeout(s), setTimeout(function () {
                o.classList.remove("no-delay")
            }, 400))))
        }, S.prototype.serializer = function () {
            var e = Array.prototype.slice.call(arguments, 0);
            return function () {
                var t, o;
                for (o = 0; o < e.length; o++)
                    if (!1 === (t = e[o].apply(this, arguments))) return t;
                return t
            }
        }, site_sidebar = new S("side-nav", "sidebar")
    }
    e(".menu-item>span").on("click", function () {
            for (var t = document.querySelectorAll(".menu-item-state"), o = document.querySelector(".menu").querySelectorAll(".submenu"), i = 0; i < t.length; i++) t[i] != this.querySelector(".menu-item-state") ? (e(o[i]).slideUp(), t[i].classList.remove("open-submenu"), t[i].innerHTML = "+") : t[i].classList.contains("open-submenu") ? (e(o[i]).slideUp(), t[i].classList.remove("open-submenu"), t[i].innerHTML = "+") : (e(o[i]).slideDown(), t[i].classList.add("open-submenu"), t[i].innerHTML = "-")
        }),
        function () {
            if (e("#sidebar") && !e("#sidebar ul li a").parent().hasClass("active-sidebar-item"))
                for (var t = e("#sidebar ul li a"), o = window.location.href, i = 0; i < t.length; i++)
                    if (-1 < o.indexOf(e(t[i]).attr("href"))) {
                        e(t[i]).parent().addClass("active-sidebar-item"), e(t[i]).closest(".submenu").show(), e(t[i]).closest(".menu-item").find(".menu-item-state").addClass("open-submenu").text("-");
                        break
                    }
        }(), 1023 < i && e(".x-btn").hover(function () {
            var t = e(this);
            t.addClass("hover-in"), setTimeout(function () {
                t.addClass("hover-in-alt")
            }, 175), setTimeout(function () {
                t.removeClass("hover-in-alt")
            }, 350)
        }, function () {
            var t = e(this);
            t.removeClass("hover-in"), t.removeClass("hover-in-alt")
        }), 1023 < i && e(".draggable-btn").mousedown(function (t) {
            if (t.preventDefault(), 1 === t.which) {
                var o = e(this).children(".x-btn"),
                    i = o.parent().innerHeight(),
                    n = parseInt(o.css("top")),
                    s = o.css("top", "").position().top;
                o.css({
                    top: n + "px"
                });
                var a = 0 - s,
                    r = i - s - o.outerHeight(),
                    l = t.clientY;
                e(window).on("mousemove", function (e) {
                    o.addClass("drag");
                    var t = n + (e.clientY - l);
                    o.css({
                        top: t + "px"
                    }), t < a && o.css({
                        top: a + "px"
                    }), r < t && o.css({
                        top: r + "px"
                    })
                }), e(window).on("mouseup", function (t) {
                    if (1 === t.which) {
                        o.removeClass("drag"), e(window).off("mouseup mousemove"), o.css({
                            top: 0
                        }), t.preventDefault();
                        var i = e(this).children(".x-btn").attr("href");
                        window.history.pushState({}, null, i)
                    }
                })
            }
        });
    var x, j, I, M = e("#forms-popup");

    function L(t) {
        t.show(), j = setTimeout(function () {
            t.find(".rev-text").each(function (t, o) {
                setTimeout(function () {
                    e(o).removeClass("temp-hide")
                }, 250 * t)
            }), t.find(".write-text .outer-wrapper").each(function (t, o) {
                setTimeout(function () {
                    e(o).addClass("show")
                }, 250 * t)
            })
        }, 700), I = setTimeout(function () {
            t.find(".fade-input").each(function (t, o) {
                setTimeout(function () {
                    e(o).addClass("show")
                }, 150 * t)
            }), t.find(".prev-form").fadeIn()
        }, 1150)
    }

    function z(t) {
        M.find(".rev-text").addClass("temp-hide"), M.find(".write-text .outer-wrapper").removeClass("show"), e(".prev-form").hide(), e(".form-container").hide(), e(".fade-input").removeClass("show"), t.show()
    }

    function D() {
        this.form = e("#mc-embedded-subscribe-form"), this.submit = this.form.find('input[type="submit"]'), this.fakeSubmit = e(".newsletter-fake-submit"), this.norobotBtn = e(".newsletter-norobot-check-button"), this.messageBtn = e(".newsletter-card-close-button, .newsletter-norobot-close-button"), this.noRobotBool = !1, this.generateID = Math.random().toString(36).substr(2, 5);
        var t = this._this = this;
        e(window).on("click touchend", t.outsideClick), this.messageBtn.on("click", t.closeMessage), 0 < this.form.length && (this.fakeSubmit.on("click", t.noRobotForm), this.norobotBtn.on("click", function (o) {
            var i = e(".no-robot-input").val();
            H.generateID === i ? (e(".norobot-notification").fadeOut(), H.noRobotBool = !0, o && o.preventDefault(), t.checkForm() && t.submitForm(), H.noRobotBool = !1) : e(".norobot-notification").fadeIn()
        }))
    }
    e("#contact-us").on("click", function () {
            M.hasClass("open") ? (clearTimeout(x), clearTimeout(j), clearTimeout(I), document.body.style.overflow = "visible", M.find(".forms-wrapper").fadeOut(250, function () {
                z(e(this)), M.removeClass("open")
            })) : (M.addClass("open"), L(e("#chose-form")), document.body.style.overflow = "hidden")
        }), e(".chose-btn").on("click", function () {
            var t = e(this).attr("data-btn-type"),
                o = e(this).attr("data-form");
            M.find(".forms-wrapper").fadeOut(250, function () {
                z(e(this))
            }), x = setTimeout(function () {
                L(e("open-form" == t ? "#" + o : "#chose-form"))
            }, 300)
        }), e(".carrer-btn").on("click", function () {
            var t = e(this).attr("data-btn-type"),
                o = e(this).attr("data-form");
            M.find(".forms-wrapper").fadeOut(250, function () {
                z(e(this))
            }), x = setTimeout(function () {
                L(e("open-form" == t ? "#" + o : "#chose-form"))
            }, 300)
        }), e(".carrer-btn").on("click", function () {
            e("#contact-us").trigger("click");
            var t = e(this).siblings(".section-title").text();
            "Web dizajner" == t ? t = "Web Dizajner" : "Grafički dizajner" == t ? t = "Grafički Dizajner" : "Front-end developer" == t ? t = "Front-end Developer" : "Back-end developer" == t ? t = "Back-end Developer" : "SEO specijalista" == t && (t = "SEO");
            var o = e('.f-opt:contains("' + t + '")');
            e(o).trigger("click")
        }), e(".order-btn").on("click", function () {
            var t = e(this).attr("data-btn-type"),
                o = e(this).attr("data-form");
            M.find(".forms-wrapper").fadeOut(250, function () {
                z(e(this))
            }), x = setTimeout(function () {
                L(e("open-form" == t ? "#" + o : "#chose-form"))
            }, 300)
        }), e(".order-btn").on("click", function () {
            e("#contact-us").trigger("click")
        }), e(".fake-options").on("mouseleave", function () {
            var t = e(this).siblings(".fake-select-text");
            t.hasClass("nothing-selected") ? t.text("") : t.text(e(this).siblings(".fake-select-text").attr("data-fakeval"))
        }), e(".f-opt").on("mouseenter", function () {
            e(this).parent(".fake-options").siblings(".fake-select-text").text(e(this).text())
        }), e(".f-opt").on("click", function () {
            var t = e(this).text(),
                o = e(this).parent(".fake-options").siblings(".fake-select-text");
            o.removeClass("nothing-selected"), o.addClass("selected"), o.parents(".fake-select").addClass("selected"), o.parents(".fake-select").siblings("input").val(t), o.text(t), o.attr("data-fakeval", t), o.addClass("selecting"), e(".budget-hidden-input").val(t), setTimeout(function () {
                o.removeClass("selecting")
            }, 500)
        }), e(".fake-input-file").on("click", function () {
            e(this).next('input[type="file"]').trigger("click")
        }), e('input[type="file"]').on("change", function () {
            var t = e(this).val();
            1 < e(this)[0].files.length ? e(this).prev(".fake-input-file").text(e(this)[0].files.length + " files were added.") : e(this).prev(".fake-input-file").text(t)
        }),
        function () {
            if (e(".company-info-holder").length) {
                var t = 160;
                i < 1650 && (t = 360);
                var o = e(".company-info-holder").offset().top,
                    n = e(".contact-page").offset().top - (e(window).height() - e(".contact-page").innerHeight() - t);
                e(window).on("scroll", function (t) {
                    e(window).scrollTop() >= n ? e(".maps").addClass("bottom-map") : e(".maps").removeClass("bottom-map"), e(this).scrollTop() >= o && e(window).scrollTop() <= n ? e(".maps").addClass("fix-map") : e(".maps").removeClass("fix-map")
                })
            }
            i < 767 && e(".map-init").on("click", function (t) {
                e("html,body").animate({
                    scrollTop: e(".maps").offset().top - 78
                }, 400)
            })
        }(), e(".accordion .x-btn").on("click", function (t) {
            t.preventDefault();
            var o = document.querySelectorAll(".accordion"),
                i = this.parentNode.parentNode;
            if (i.classList.contains("active-acc")) i.classList.remove("active-acc"), i.children[0].style.maxHeight = "120px";
            else {
                for (var n = 0; n < o.length; n++) o[n].classList.contains("active-acc") && (o[n].classList.remove("active-acc"), o[n].children[0].style.maxHeight = "120px");
                i.classList.add("active-acc"), i.children[0].style.maxHeight = i.scrollHeight + "px"
            }
            setTimeout(function () {
                var t;
                t = e(i), e("html, body").animate({
                    scrollTop: t.offset().top + 100
                }, 500)
            }, 700)
        }), 0 < e(".sitemap-row-wrapper").length && e(".sitemap-row-wrapper").masonry({
            itemSelector: ".sitemap-row",
            columnWidth: ".sitemap-row",
            percentPosition: !0
        }), D.prototype.submitForm = function () {
            H.noRobotBool && e.ajax({
                type: this.form.attr("method"),
                url: this.form.attr("action"),
                data: this.form.serialize(),
                cache: !1,
                dataType: "json",
                contentType: "application/json; charset=utf-8",
                error: function (e) {
                    H.errorMessage()
                },
                success: function (e) {
                    "success" != e.result ? H.errorMessage() : H.successMessage()
                }
            })
        }, D.prototype.checkForm = function () {
            return this.form.serialize()
        }, D.prototype.successMessage = function () {
            H.closeMessage(), e(".newsletter-message.newsletter-success").css({
                visibility: "visible",
                opacity: 1
            })
        }, D.prototype.errorMessage = function () {
            H.closeMessage(), e(".newsletter-message.newsletter-error").css({
                visibility: "visible",
                opacity: 1
            })
        }, D.prototype.closeMessage = function () {
            e(".newsletter-message").css({
                visibility: "hidden",
                opacity: 0
            })
        }, D.prototype.noRobotForm = function () {
            var t;
            "" !== e(".mc-field-group .email").val() && (t = e(".mc-field-group .email").val(), /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(t).toLowerCase())) ? (e(".no-robot-input").val(""), H.generateID = Math.random().toString(36).substr(2, 5), e(".newsltter-norobot-id").text(H.generateID), e(".newsletter-norobot").css({
                visibility: "visible",
                opacity: 1
            })) : H.errorMessage()
        }, D.prototype.outsideClick = function (t) {
            t.stopPropagation(), e(t.target).hasClass("newsletter-message") && H.closeMessage()
        };
    var E, H = new D;

    function q(t, o, i) {
        var n = t.find(".member-info-wrapp").html(),
            s = t.find("img").data("full-img"),
            a = e("<img>");
        e(n).appendTo(E), a.attr("src", s), a.on("load", function () {
            E.css("background-image", "url(images/demo/test-BG.jpg)");
            var e = a.attr("src");
            E.find(".team-img-wrapper").prepend('<img src="' + e + '" />'), setTimeout(function () {
                E.addClass("open")
            }, 500), setTimeout(function () {
                E.find(".team-img-wrapper").css({
                    right: 0,
                    opacity: 1
                })
            }, 2500), o && i && setTimeout(function () {
                t.removeClass("dropped"), t.css({
                    left: o,
                    top: i
                })
            }, 2e3)
        })
    }
    e(".no-robot-input").on("copy paste cut", function () {
        return !1
    }), n.on("scroll", function () {
        e(".team-page").length && n.scrollTop() > e("#banner").outerHeight() ? e("#dropper").addClass("show") : e("#dropper").removeClass("show"), Math.floor(e(document).height() - e(document).scrollTop() - e(window).height()) < o ? e("#dropper").addClass("hide-alt") : e("#dropper").removeClass("hide-alt")
    }), 0 < e("#team-popup").length && (E = e("#team-popup"), 1250 < i && (e(".team-member-container").draggable({
        scroll: !0,
        scrollSensitivity: 100,
        revert: "invalid",
        containment: "#main"
    }), e(".team-member-container").each(function (t, o) {
        var i = e(o).css("left"),
            n = e(o).css("top");
        e(o).attr("data-left", i), e(o).attr("data-top", n)
    })), 1250 < i ? e("#dropper").droppable({
        drop: function (t, o) {
            var i = o.draggable,
                n = e(i).attr("data-left"),
                s = e(i).attr("data-top");
            i.addClass("dropped"), q(i, n, s)
        }
    }) : e(".team-member-container").on("click", function () {
        q(e(this))
    }), e(".team-member-container").on("mousedown", function () {
        e(".team-member-container").removeClass("last-moved"), e(this).addClass("last-moved")
    }), E.find(".close-btn").on("click", function () {
        E.removeClass("open"), E.find("img").remove(), E.find(".team-img-wrapper").css({
            right: "-50vw",
            opacity: 0
        }), setTimeout(function () {
            E.find(".member-info").remove()
        }, 2e3)
    })), e(".has-parallax").length && 1250 < i && void 0 !== window.ScrollMagic && (scrollController = new ScrollMagic.Controller({
        refreshInterval: 500
    }), e(".has-parallax").each(function () {
        var t = e(this).find(".parallax");
        e(t).css("top", e(t).data("offset"));
        var o = e(t).data("parallax-offset"),
            i = (new TimelineMax).add([TweenMax.fromTo(t, 2, {
                css: {
                    y: 0
                }
            }, {
                css: {
                    y: o
                },
                ease: Power1.easeout
            })]);
        new ScrollMagic.Scene({
            triggerElement: this,
            duration: e("#main").height()
        }).setTween(i).addTo(scrollController)
    })), 0 < e(".main-portfolio-image").length && e(document).on("scroll", function () {
        if (window.innerWidth <= 1023) e(".single-portfolio-slider-wrapper").css({
            visibility: "visible",
            opacity: 1
        });
        else {
            var t = e(".main-portfolio-image"),
                o = e(window).scrollTop(),
                i = t.offset().top - o;
            t.position().top + t.outerHeight(!0) - o < 0 ? e(".single-portfolio-slider-wrapper").css({
                visibility: "hidden",
                opacity: 0
            }) : i < 0 ? e(".single-portfolio-slider-wrapper").css({
                visibility: "visible",
                opacity: 1
            }) : e(".single-portfolio-slider-wrapper").css({
                visibility: "hidden",
                opacity: 0
            })
        }
    }), e(".scroll-btn").fadeIn(3e3).css("display", "inline-block"), e(".mouse").fadeIn(3e3).css("display", "inline-block"), e(".mouse span").fadeIn(3e3).css("display", "inline-block"), e(".portfolio-cat").click(function () {
        e("html,body").animate({
            scrollTop: e("#name-a").offset().top
        }, "slow")
    }), e(".narucivanje-info-buttons-wrapper .popart-btn").click(function () {
        e("html, body").animate({
            scrollTop: e(".page-order").offset().top
        }, 2e3)
    })
}), 0 < $(".showcase-img-trigger").length && function () {
    var e, t, o = $(".showcase-img-trigger"),
        i = (o.length, !0);

    function n(e) {
        var t = $(o[e]).parent().children(".showcase-img").children().attr("href").toString();
        i ? ($("body").addClass("prevent-desktop-scrolling"), $(".showcase-fullimage-wrapper").show().delay(150).queue(function () {
            $(this).addClass("open-slider").css({
                opacity: 1
            }).dequeue()
        }), $(".showcase-fullimage-image").attr("src", t).delay(150).queue(function () {
            $(this).css({
                opacity: 1,
                transform: "scale(1)"
            }).dequeue()
        }), i = !1) : $(".showcase-fullimage-image").delay(300).queue(function () {
            $(this).css({
                opacity: 1,
                transform: "scale(1)"
            }).attr("src", t).dequeue()
        })
    }

    function s(e, t, o) {
        t ? $(".showcase-fullimage-image").css({
            opacity: 0,
            transform: "scale(0.7)"
        }) : e ? $(".showcase-fullimage-image").css({
            opacity: 0,
            transform: "scale(0.7)"
        }) : o && ($(".showcase-fullimage-image").css({
            opacity: 0,
            transform: "scale(5)"
        }), $(".showcase-fullimage-wrapper").css({
            opacity: 0
        }).delay(750).queue(function () {
            $(this).removeClass("open-slider").hide().dequeue()
        }))
    }

    function a() {
        s(null, !0, null), n(t + 1), t++
    }

    function r() {
        s(!0, null, null), n(t - 1), t--
    }

    function l() {
        $("body").removeClass("prevent-desktop-scrolling"), s(null, null, !0), i = !0
    }
    $(".showcase-fullimage-wrapper .next-arrow").on("click", function () {
        t === o.length - 1 && (t = -1), a()
    }), $(".showcase-fullimage-wrapper .prev-arrow").on("click", function () {
        0 === t && (t = o.length), r()
    }), $(".showcase-img-trigger").on("click", function () {
        return n(e = $(o).index(this)), t = e, !1
    }), $(".close-showcase-galllery-btn").on("click", l), $(window).on("keydown", function (e) {
        !$(".showcase-fullimage-wrapper").hasClass("open-slider") || 27 !== e.keyCode && 27 !== e.which || l(), !$(".showcase-fullimage-wrapper").hasClass("open-slider") || 37 !== e.keyCode && 37 !== e.which || (0 === t && (t = o.length), r()), !$(".showcase-fullimage-wrapper").hasClass("open-slider") || 39 !== e.keyCode && 39 !== e.which || (t === o.length - 1 && (t = -1), a())
    }), $(window).on("click touchend", function (e) {
        e.stopPropagation(), ($(e.target).hasClass("open-slider") || $(e.target).hasClass("showcase-fullimage")) && ($("body").removeClass("prevent-desktop-scrolling"), s(null, null, !0), i = !0)
    }), document.addEventListener("touchstart", function (e) {
        c = e.touches[0].clientX, d = e.touches[0].clientY
    }, !1), document.addEventListener("touchmove", function (e) {
        if (c && d) {
            var i = e.touches[0].clientX,
                n = e.touches[0].clientY,
                s = c - i,
                l = d - n;
            Math.abs(s) > Math.abs(l) && (0 < s && $(".showcase-fullimage-wrapper").hasClass("open-slider") ? (t === o.length - 1 && (t = -1), a()) : s < 0 && $(".showcase-fullimage-wrapper").hasClass("open-slider") && (0 === t && (t = o.length), r())), d = c = null
        }
    }, !1);
    var c = null,
        d = null
}();
var logoSrc = "images/website/logo/popartstudio-logo.mp4";
if (0 < $(".single-portfolio-banner").length && (logoSrc = "../images/website/logo/popartstudio-logo.mp4"), $("#site-logo").mouseenter(function () {
        clearTimeout($("img.logo-video").data("timeoutId")), $(".logo-video").prop("src", logoSrc).show()
    }), $("#site-logo").mouseleave(function () {
        var e = setTimeout(function () {
            $(".logo-video").fadeOut(300).delay(300).queue(function () {
                $(".logo-video").prop("src", "")
            }).dequeue()
        }, 100);
        $("img.logo-video").data("timeoutId", e)
    }), 0 < $(".free-seo-analysis").length) {
    function scrollToSeoForm(e) {
        e.preventDefault(), $("html, body").animate({
            scrollTop: $("#form-seo-opt").offset().top - 200
        }, 500)
    }
    $(".free-seo-analysis").on("click", scrollToSeoForm)
}
void 0 === window.getComputedStyle(document.body).mixBlendMode && (document.documentElement.className += " mix-blend-mode-no"), $(".scroll-btn").click(function () {
    $("html,body").animate({
        scrollTop: $("#main").offset().top
    }, "slow")
}), $(".portfolio-item").removeClass("animation-in"), $(".portfolio-item").hide(), $(".web-prezentacije-items .portfolio-item").show(), $(".web-prezentacije-items .portfolio-item").addClass("loadedAnim"), $(".portfolio-cat").click(function () {
    var e = this.getAttribute("id"),
        t = $(".active-sp-count"),
        o = $(t).attr("id");
    $(t).removeClass("active-sp-count"), $(this).addClass("active-sp-count"), history.pushState(null, null, "?id=" + e), $(".web-prezentacije-items .portfolio-item .project-info").addClass("animation-out"), $(".web-prezentacije-items .portfolio-item .project-thumbnail .section-image").addClass("animation-out"), $("." + o + " .project-info").addClass("animation-out"), $("." + o + " .project-thumbnail .section-image").addClass("animation-out"), setTimeout(function () {
        $("." + o + " .project-info").removeClass("animation-out"), $("." + o + " .project-thumbnail .section-image").removeClass("animation-out"), $("." + o + " .project-info").removeClass("animation-in"), $("." + o + " .project-thumbnail .section-image").removeClass("animation-in"), $("." + o).hide(), $(".web-prezentacije-items .portfolio-item .project-info").removeClass("animation-out"), $(".web-prezentacije-items .portfolio-item .project-thumbnail .section-image").removeClass("animation-out"), $(".web-prezentacije-items .portfolio-item .project-info").removeClass("animation-in"), $(".web-prezentacije-items .portfolio-item .project-thumbnail .section-image").removeClass("animation-in"), $(".web-prezentacije-items .portfolio-item").hide(), $("." + e).show(), $("." + e + " .project-info").addClass("animation-in"), $("." + e + " .project-thumbnail .section-image").addClass("animation-in")
    }, 500)
});
var url = window.location.href,
    spl = url.split("=");

function menu(e, t) {
    switch (t) {
        case "prezentacije":
        case "ecommerce":
        case "aplikacije":
        case "logotipi":
        case "printdizajn":
        case "etikete":
        case "ilustracije":
        case "presentations":
        case "onlineshops":
        case "webapps":
        case "logos":
        case "printdesign":
        case "labels":
        case "illustrations":
        case "websites":
        case "onlinekaufe":
        case "webapplikationen":
        case "etiketten":
        case "illustrationen":
            setMenu(t)
    }
}

function setMenu(e) {
    var t = e,
        o = $(".active-sp-count"),
        i = $(o).attr("id");
    $(o).removeClass("active-sp-count"), $("#" + t).addClass("active-sp-count"), $(".web-prezentacije-items .portfolio-item .project-info").addClass("animation-out"), $(".web-prezentacije-items .portfolio-item .project-thumbnail .section-image").addClass("animation-out"), $("." + i + " .project-info").addClass("animation-out"), $("." + i + " .project-thumbnail .section-image").addClass("animation-out"), setTimeout(function () {
        $("." + i + " .project-info").removeClass("animation-out"), $("." + i + " .project-thumbnail .section-image").removeClass("animation-out"), $("." + i + " .project-info").removeClass("animation-in"), $("." + i + " .project-thumbnail .section-image").removeClass("animation-in"), $("." + i).hide(), $(".web-prezentacije-items .portfolio-item .project-info").removeClass("animation-out"), $(".web-prezentacije-items .portfolio-item .project-thumbnail .section-image").removeClass("animation-out"), $(".web-prezentacije-items .portfolio-item .project-info").removeClass("animation-in"), $(".web-prezentacije-items .portfolio-item .project-thumbnail .section-image").removeClass("animation-in"), $(".web-prezentacije-items .portfolio-item").hide(), $("." + t).show(), $("." + t + " .project-info").addClass("animation-in"), $("." + t + " .project-thumbnail .section-image").addClass("animation-in")
    }, 500)
}

function isPageSectInView() {
    $window.on("scroll", function () {
        $(".scroll-show").length && $(".scroll-show").each(function (e, t) {
            var o = $(t).outerHeight() / 2;
            if (isElementInViewport($(t), o)) {
                var i = "#" + $(t).attr("id");
                $(t).find(".yellow-bg").addClass("show"), $(t).find(".yellow-block").addClass("show"), "#homeblog" == i ? $("#homeblog .outer-wrapper").addClass("show") : $(t).find(".outer-wrapper").each(function (e, t) {
                    var o = $(t).find(".outer-wrapper").length;
                    o -= $(t).find(".write-all .outer-wrapper").length;
                    var i = $(t).parent().hasClass("write-all") ? o : e;
                    setTimeout(function () {
                        $(t).addClass("show")
                    }, 300 * i)
                })
            }
        }), $(".animate-bigletter").length && $(".animate-bigletter").each(function () {
            isElementInViewport($(this), 0) && $(this).addClass("show")
        }), $(".yellow-block").length && $(".yellow-block").each(function () {
            isElementInViewport($(this), 300) && $(this).addClass("show")
        }), $(".section-image").length && $(".section-image").each(function () {
            if (isElementInViewport($(this), 300)) {
                $(this).addClass("show");
                var e = $(this);
                setTimeout(function () {
                    e.hasClass("plx") && e.addClass("no-delay")
                }, 500)
            }
        }), $(".about-testimonials").length && isElementInViewport($(".testimonials-statistics"), 300) && homeWrappInc && ($(".ts-inc").each(function (e, t) {
            setTimeout(function () {
                var e = parseInt($(t).text());
                $(t).text(e + 1)
            }, 200 * e + 500)
        }), homeWrappInc = !1)
    })
}

function mouseMoveTeam() {
    var e = $("#team-popup");
    e.on("mousemove", function (t) {
        var o = t.pageY / 30 - $("#team-popup").offset().top / 30;
        e.find("img").css("transform", "translate3d(" + t.pageX / 30 + "px, " + -o + "px, 0px)")
    })
}

function redirectSocial(e, t) {
    $(e).click(function () {
        window.open(t, "_blank")
    })
}
2 <= spl.length && menu(spl[0], spl[1]), mouseMoveTeam(), -1 != navigator.appVersion.indexOf("Edge") && ($("#scrollspy").addClass("scrollspy-edge"), $("#home-banner-bg").addClass("edge-banner")), $(window).scroll(function () {
    0 < $(window).scrollTop() ? $(".site-header").addClass("not-top") : $(".site-header").removeClass("not-top")
}), jQuery(document).ready(function () {
    setTimeout(function () {
        $(".portfolio-wrapper").css("opacity", "1"), $(".breadcrumbs").css("opacity", "1")
    }, 1500)
}), redirectSocial(".fb-sr", "https://sr-rs.facebook.com/PopArt.Web.Dizajn/"), redirectSocial(".tw-sr", "https://twitter.com/popartns?lang=sr"), redirectSocial(".gp-sr", "https://www.pinterest.com/izradawebsajta/"), redirectSocial(".li-sr", "https://www.linkedin.com/company/popart-studio"), redirectSocial(".bh-sr", "https://www.behance.net/popartns"), redirectSocial(".db-sr", "https://dribbble.com/PopArt-Studio"), redirectSocial(".ig-sr", "https://www.instagram.com/popart.studio/?hl=sr"), redirectSocial(".fb-en", "https://www.facebook.com/PopArt.Web.Dizajn/"), redirectSocial(".tw-en", "https://twitter.com/popartns"), redirectSocial(".gp-en", "https://www.pinterest.com/izradawebsajta/"), redirectSocial(".li-en", "https://www.linkedin.com/company/popart-studio"), redirectSocial(".bh-en", "https://www.behance.net/popartns"), redirectSocial(".db-en", "https://dribbble.com/PopArt-Studio"), redirectSocial(".ig-en", "https://www.instagram.com/popart.studio/");
var didScroll, isChromium = window.chrome,
    isOpera = -1 < window.navigator.userAgent.indexOf("OPR") || -1 < window.navigator.userAgent.indexOf("Opera");
null !== isChromium && 1 == isOpera && $(".hi-lang").addClass("hi-lang-o"), -1 == navigator.userAgent.indexOf("MSIE") && 1 != !!document.documentMode || ($("#home-banner-bg").css("opacity", "1"), $(".banner-object picture").css("opacity", "1"), $(".home-seo .social-icons").css("display", "none"), $(".portfolio-count-container").addClass("explorer-nav"));
var lastScrollTop = 0,
    delta = 25,
    navbarHeight = $("header").outerHeight();

function hasScrolled() {
    var e = $(this).scrollTop();
    Math.abs(lastScrollTop - e) <= delta || (lastScrollTop < e && navbarHeight < e ? ($("#masthead").removeClass("nav-down").addClass("nav-up"), $(".nav-button-wrapper").removeClass("nav-down").addClass("nav-up")) : e + $(window).height() < $(document).height() && ($("#masthead").removeClass("nav-up").addClass("nav-down"), $(".nav-button-wrapper").removeClass("nav-up").addClass("nav-down")), lastScrollTop = e)
}

function changeRevState() {
    $(".rev-text").each(function () {
        var e = this,
            t = $(this).attr("data-rev-delay") || 0,
            o = $(this).attr("data-trigger") || "";
        o = o && "" != o ? o.split(" ") : "", t = parseInt(t), setTimeout(function () {
            $(e).isOnScreen() && "" == o && $(e).removeClass("temp-hide")
        }, 100 + t)
    })
}
$(window).scroll(function (e) {
    didScroll = !0
}), setInterval(function () {
    didScroll && (hasScrolled(), didScroll = !1)
}, 250), $("#masthead").addClass("nav-down"), $.fn.isOnScreen = function () {
    var e = $(window),
        t = {
            top: e.scrollTop(),
            left: e.scrollLeft()
        };
    t.right = t.left + e.width(), t.bottom = t.top + e.height();
    var o = this.offset();
    return o.right = o.left + this.outerWidth(), o.bottom = o.top + this.outerHeight(), !(t.right < o.left || t.left > o.right || t.bottom < o.top || t.top > o.bottom)
}, $(".rev-text").parent().addClass("rev-text-wrap"), setTimeout(function () {
    changeRevState()
}, 100);
var width = $(window).width();
$(window).scroll(function () {
    changeRevState(), 1280 < width && ($(".site-footer").isOnScreen() ? $("#sidebar").css("opacity", "0") : $("#sidebar").css("opacity", "1"))
});
var submenu = $(".sub-menu");
if (submenu.each(function () {
        var e = $(this).find("li").length;
        $(this).addClass("sub-menu-has-" + e)
    }), 0 < $("#team-popup").length) {
    function iOS() {
        var e = ["iPad Simulator", "iPhone Simulator", "iPod Simulator", "iPad", "iPhone", "iPod", "Macintosh", "MacIntel", "MacPPC", "Mac68K"];
        if (navigator.platform)
            for (; e.length;)
                if (navigator.platform === e.pop()) return !0;
        return !1
    }
    iOS() && $("#team-popup").addClass("is-ios")
}