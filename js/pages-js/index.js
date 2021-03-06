if (jQuery(function (s) {
        if (1250 < window.outerWidth) {
            var e = s("body");
            e.show();
            var t, i, o, n, r = window.innerWidth,
                a = s(window),
                l = (s("#mastfoot").outerHeight(), document.getElementById("home-banner-bg"), !0);

            function d() {
                s("#clientslogo").length && 600 < r && s("#clientslogo li").each(function (e, t) {
                    var i = s(t).attr("data-delay");
                    setTimeout(function () {
                        s(t).find("img").addClass("switch"), setTimeout(function () {
                            s(t).find("img").removeClass("switch")
                        }, 4500)
                    }, i)
                })
            }

            function h() {
                this.main_delay = 1e3, this.item_delay = 300, this.wrapper = document.getElementById("best_schedule"), this.icons = document.querySelectorAll(".icon-wrapper"), this.lines = document.querySelectorAll(".svg-lines svg"), this.icn_animated = !1, this.lines_animated = !1;
                var e = this;
                s(".svg-lines").length && window.addEventListener("scroll", function () {
                    e.inView(e.wrapper, 500) && setTimeout(function () {
                        !1 === e.lines_animated && (e.lines_animated = !0, e.initLines())
                    }, 500), e.inView(e.wrapper, 1250) && setTimeout(function () {
                        !1 === e.icn_animated && (e.icn_animated = !0, e.addDelay())
                    }, e.main_delay)
                })
            }

            function c(e) {
                this.wrapper = document.getElementById("scrollspy"), this.props = {
                    top: 0,
                    height: 0
                }, this.toTopBtn = document.createElement("a"), this.toBottom = document.createElement("a"), this.childs = {}, this.getPosition(), this.setPosition();
                var n = this,
                    t = ["#best_talk", "#best_soft", "#home-graphicdesign", "#best_schedule", "#hsabout"];

                function i() {
                    var e = s("#banner").offset().top + s("#banner").outerHeight(),
                        t = s(window).scrollTop(),
                        i = window.pageYOffset,
                        o = document.getElementById("main").clientHeight;
                    .65 * e < t && i < o ? n.wrapper.classList.remove("hidden-nav") : n.wrapper.classList.add("hidden-nav")
                }
                i(), s("#scrollspy").length && (n.wrapper || (n.wrapper = document.getElementById("scrollspy")), n.getChilds(n.wrapper), setTimeout(function () {
                    n.wrapper.classList.add("page-loaded"), setTimeout(function () {
                        n.wrapper.classList.add("no-delay")
                    }, 750)
                }, 1250), this.toTopBtn.id = "spy-top", this.toTopBtn.setAttribute("href", "#banner"), this.wrapper.appendChild(this.toTopBtn), this.toBottom.id = "spy-bottom", this.toBottom.setAttribute("href", "#homeblog"), this.wrapper.appendChild(this.toBottom), this.toBottom.addEventListener("click", function (e) {
                    e.preventDefault(), n.scrollGoTo("#homeblog", 0)
                }), this.toTopBtn.addEventListener("click", function (e) {
                    e.preventDefault(), n.scrollGoTo("#banner", 0)
                })), window.addEventListener("scroll", function () {
                    if (s("#scrollspy").length) {
                        for (sec in window.pageYOffset, document.getElementById("main").clientHeight, t)
                            if (t.hasOwnProperty(sec) && n.inView(t[sec])) {
                                for (li in n.childs) n.childs.hasOwnProperty(li) && n.childs[li] !== n.childs[sec] && n.childs[li].classList.remove("active");
                                n.childs[sec].classList.add("active")
                            } i(), s(window).scrollTop() < s(t[0]).offset().top - 300 ? (n.wrapper.classList.add("init-pos"), n.childs[0].classList.contains("active") && n.childs[0].classList.remove("active")) : (n.wrapper.classList.remove("init-pos"), n.inView("#homeblog") ? (n.wrapper.classList.add("last-item"), n.childs[4].classList.remove("active")) : n.wrapper.classList.remove("last-item"))
                    }
                })
            }
            a.on("scroll", function () {
                var e = s("#homeslides-wrapp");
                if (e.length) {
                    var t = e.attr("style");
                    t && -1 === t.search("matrix") && (t = t.replace("transform: translate(", "").replace("%, 0%) translate3d(0px, 0px, 0px);", ""), 40 < (t = -1 * parseInt(t)) && l && (s(".ts-inc").each(function (e, t) {
                        setTimeout(function () {
                            var e = parseInt(s(t).text());
                            s(t).text(e + 1)
                        }, 200 * e + 500)
                    }), l = !1))
                }
            }), s("#homeslider").length && 1250 < r && (t = s("#homeslider").outerHeight(), s(".home-slide").each(function () {
                var e = s(this).outerHeight();
                s(this).css("margin-top", (t - e) / 2)
            }), i = new ScrollMagic.Controller, o = (new TimelineMax).to("#homeslides-wrapp", 1, {
                x: "-25%"
            }).to("#homeslides-wrapp", 1, {
                x: "-50%"
            }).to("#homeslides-wrapp", 1, {
                x: "-75%"
            }), new ScrollMagic.Scene({
                triggerElement: "#homeslider",
                triggerHook: "onLeave",
                duration: "500%"
            }).setPin("#homeslider").setTween(o).addTo(i)), n = new ScrollMagic.Controller({
                refreshInterval: 200
            }), s(".has-parallax").length && 1250 < r ? s(".has-parallax").each(function () {
                var e = "#" + s(this).attr("id"),
                    t = e + " .parallax";
                s(t).css("top", s(t).data("offset"));
                var i = s(t).data("parallax-offset"),
                    o = (new TimelineMax).add([TweenMax.fromTo(t, 2, {
                        css: {
                            y: 0
                        }
                    }, {
                        css: {
                            y: i
                        },
                        ease: Power1.easeout
                    })]);
                new ScrollMagic.Scene({
                    triggerElement: e,
                    duration: s("#main").height()
                }).setTween(o).addTo(n)
            }) : n.destroy(!0), d(), 600 < r && setInterval(function () {
                d()
            }, 9e3), h.prototype.inView = function (e, t) {
                return window.pageYOffset + window.outerHeight > e.offsetTop + t
            }, h.prototype.initLines = function () {
                if (this, s(".svg-lines").length)
                    for (var e = 0; e < this.lines.length; e++) {
                        var t = this.lines[e].getAttribute("id");
                        new Vivus(t, {
                            duration: 140
                        })
                    }
            }, h.prototype.addDelay = function () {
                var i;
                if (i = this, s(".svg-lines").length) {
                    function e(e, t) {
                        setTimeout(function () {
                            e.classList.add("show")
                        }, t * i.item_delay)
                    }
                    for (var t = 0; t < i.icons.length; t++) e(i.icons[t], t)
                }
            }, new h, s("#scrollspy").length && 1250 < r && (e.scrollspy("refresh"), s(".nav").find("a").click(function (e) {
                e.preventDefault();
                var t = s(this).attr("href");
                s("html, body").animate({
                    scrollTop: s(t).offset().top
                }, 600)
            }), a.on("scroll", function () {
                Math.floor(s(document).height() - s(document).scrollTop() - s(window).height()) < void 0 ? s("#scrollspy").fadeOut() : s("#scrollspy").fadeIn()
            })), c.prototype.getChilds = function (e) {
                var i = this;
                for (var t in e.childNodes[3].childNodes)
                    if (e.childNodes[3].childNodes.hasOwnProperty(t)) {
                        var o = e.childNodes[3].childNodes[t];
                        "LI" === o.tagName && (i.childs[o.getAttribute("data-index")] = o).childNodes[0].addEventListener("click", function (e) {
                            var t;
                            e.preventDefault(), t = 0 === this.parentNode.getAttribute("data-index") || "0" === this.parentNode.getAttribute("data-index") ? -200 : 4 === this.parentNode.getAttribute("data-index") || "4" === this.parentNode.getAttribute("data-index") ? -220 : 100, i.scrollGoTo(this.getAttribute("href"), t)
                        })
                    }
            }, c.prototype.scrollGoTo = function (e, t) {
                if (this.wrapper) {
                    var i = s(e).offset().top;
                    s("html, body").animate({
                        scrollTop: i + t
                    })
                }
            }, c.prototype.getPosition = function () {
                if (this.wrapper) {
                    var e = document.querySelector(".banner-inner");
                    this.props = {
                        top: e.offsetTop + "px",
                        height: e.clientHeight + "px"
                    }
                }
            }, c.prototype.setPosition = function () {
                this.wrapper && (this.wrapper.style.cssText = "top:" + this.props.top + ";height:" + this.props.height)
            }, c.prototype.inView = function (e) {
                if (this.wrapper) return s(window).scrollTop() > s(e).offset().top - 300
            }, setTimeout(function () {
                new c("scrollspy")
            }, 750)
        } else s(".home-banner .banner-object > div").remove(), s(".banner-image").removeAttr("hidden").addClass("reset-transform"), s("#scrollspy").remove();
        var p;
        (p = $("#blog-slider")).slick({
            infinite: !0,
            slidesToShow: 3,
            slidesToScroll: 1,
            prevArrow: $("#blog-arrows .ca-left"),
            nextArrow: $("#blog-arrows .ca-right"),
            responsive: [{
                breakpoint: 1250,
                settings: {
                    slidesToShow: 1
                }
            }]
        }), p.on("beforeChange", function () {
            setTimeout(function () {
                p.find(".rev-text-wrap").each(function () {
                    !0 === $(this).isOnScreen() && $(this).find(".rev-text").removeClass("temp-hide")
                })
            }, 300)
        })
    }), null !== document.querySelector(".preloader-svg-wrapper")) {
    var svgElem = document.querySelector(".preloader-svg-wrapper"),
        outerPath = document.getElementById("logo-outer"),
        innerPath = document.getElementById("logo-inner"),
        outerPathLength = outerPath.getTotalLength(),
        innerPathLength = innerPath.getTotalLength();
    new Promise(function (e) {
        outerPath.style["stroke-dasharray"] = outerPathLength, outerPath.style["stroke-dashoffset"] = outerPathLength, innerPath.style["stroke-dasharray"] = innerPathLength, innerPath.style["stroke-dashoffset"] = -innerPathLength, setTimeout(function () {
            svgElem.classList.add("animate-svg-path"), outerPath.style["stroke-dashoffset"] = 0, innerPath.style["stroke-dashoffset"] = 0
        }, 100), setTimeout(function () {
            e()
        }, 2600)
    }).then(function () {
        svgElem.style.display = "none"
    })
}