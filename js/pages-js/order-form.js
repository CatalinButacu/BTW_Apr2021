function checkInputValue(e) {
    var i = $(e.target);
    "checkbox" !== i.prop("type") && "radio" !== i.prop("type") && "number" !== i.prop("type") && (0 < i.length && "" !== i.val() ? i.next().addClass("input-has-value") : i.next().removeClass("input-has-value"))
}

function showOrderForm() {
    $(".order-form").each(function () {
        $(this).fadeOut()
    }), $(".popart-order-btn").each(function () {
        $(this).removeClass("selected-btn")
    }), $(this).addClass("selected-btn"), $(this).is("#seo") && $(".order-form-seo").fadeIn(), $(this).is("#graphic") && $(".order-form-graphic").fadeIn(), $(this).is("#web") && $(".order-form-web").fadeIn()
}

function checkSingleRequiredField() {
    $(this).prop("required") && !$(this).prop("readonly") && "" === $(this).val() ? ($(this).addClass("invalid-input"), $(this).parent().find(".invalid-input-msg").slideDown(350)) : ($(this).removeClass("invalid-input"), $(this).parent().find(".invalid-input-msg").slideUp(350))
}

function checkSingleSpanRequiredField() {
    "required" === $(this).attr("data") && "" === $(this).parent().find("input").val() ? ($(this).addClass("invalid-input"), $(this).parent().find(".invalid-input-msg").slideDown(350)) : ($(this).removeClass("invalid-input"), $(this).parent().find(".invalid-input-msg").slideUp(350))
}

function validateEmail(e) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())
}

function ValidURL(e) {
    return regexp = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/, !!regexp.test(e)
}

function checkAllRequiredField(e) {
    if ("seo-opt" == e) var i = $("#email").val();
    else "web" == e ? i = $("#" + e + "-email").val() : "graphic" == e ? i = $("#" + e + "-email").val() : "seo" == e ? i = $("#" + e + "-email").val() : "careers" == e ? i = $("#" + e + "-email").val() : "order" == e ? i = $("#" + e + "-email").val() : "contact" == e && (i = $("#" + e + "-email").val());
    var n = !0,
        t = !0,
        o = !0,
        a = !0;
    return $(".order-form-" + e + " input").each(function () {
        $(this).prop("required") && !$(this).prop("readonly") && "" === $(this).val() && ($(this).addClass("invalid-input"), $(this).parent().find(".invalid-input-msg").slideDown(350), n = !1), "email" === $(this).prop("type") && $(this).prop("required") && !$(this).prop("readonly") && (validateEmail(i) || ($(this).addClass("invalid-input"), $(this).parent().find(".invalid-input-msg").slideDown(350), t = !1))
    }), $(".order-form-" + e + " textarea").each(function () {
        $(this).prop("required") && !$(this).prop("readonly") && "" === $(this).val() && ($(this).addClass("invalid-input"), $(this).parent().find(".invalid-input-msg").slideDown(350), o = !1)
    }), $(".order-form-" + e + " span").each(function () {
        "required" === $(this).attr("data") && "" === $(this).parent().find("input").val() && ($(this).addClass("invalid-input"), $(this).parent().find(".invalid-input-msg").slideDown(350), a = !1)
    }), !!(t && n && o && a)
}

function checkNorobot(e) {
    return $("#order-norobot-" + e).is(":checked") ? ($(".icon-cross-" + e + "-norobot").removeClass("invalid-norobot"), !0) : ($(".icon-cross-" + e + "-norobot").addClass("invalid-norobot"), !1)
}

function checkPrivacy(e) {
    return $("#order-privacy-" + e).is(":checked") ? ($(".icon-cross-" + e + "-privacy").css("border", "2px solid #959595"), !0) : ($(".icon-cross-" + e + "-privacy").css("border", "2px solid #ff3b30"), !1)
}

function sendFormMessage(e) {
    if (checkPrivacy(e), checkAllRequiredField(e) && checkPrivacy(e)) {
        var i = $(this);
        if (i.data("requestRunning")) return;
        var n = $("#form-" + e);
        i.data("requestRunning", !0), $.ajax({
            url: "ajax/order-form-" + e + "-ajax.php",
            type: "POST",
            dataType: "json",
            data: $("#form-" + e).serialize(),
            success: function (e) {
                formResponse(n, e[0], e[1])
            },
            complete: function () {
                i.data("requestRunning", !1)
            }
        })
    } else $("html, body").animate({
        scrollTop: $(".order-form-" + e).find("#form-" + e).offset().top - 120
    }, 750)
}

function sendFormAttachmentMessage(e) {
    if (checkPrivacy(e), checkAllRequiredField(e) && checkPrivacy(e)) {
        var i = $(this);
        if (i.data("requestRunning")) return;
        var n = $("#form-" + e),
            t = $("#form-" + e)[0],
            o = new FormData(t);
        i.data("requestRunning", !0), $.ajax({
            url: "ajax/order-form-" + e + "-ajax.php",
            type: "POST",
            data: o,
            contentType: !1,
            processData: !1,
            success: function (e) {
                var i = JSON.parse(e);
                formResponse(n, i[0], i[1])
            },
            error: function (e) {
                console.log(e)
            },
            complete: function () {
                i.data("requestRunning", !1)
            }
        })
    }
}

function formResponse(e, i, n) {
    var t = "notification-field-error";
    0 !== i && (t = "notification-field-success", $(e)[0].reset()), console.log(e, i, n), $(e).find(".notification-field").removeClass("notification-field-error notification-field-success"), $(e).find(".notification-field").addClass(t).show(), $(e).find(".notification-message").html(n), $(e).find(".notification-message").css("display", "block"), $(e).find("#order-form-response").css("display", "block"), $("html, body").animate({
        scrollTop: $(e).find(".notification-message").offset().top
    }, 2e3)
}

function checkFileSize(e) {
    for (var i = 0, n = 0; n < e.length; n++) i += e[n].size;
    return !(5242880 < i)
}

function checkFileExtenstion(e) {
    for (var i = [], n = ["doc", "docx", "pdf"], t = [], o = 0; o < e.length; o++) i.push(e[o].name.split(".").pop());
    for (var a = 0; a < n.length; a++)
        for (var r = 0; r < i.length; r++) - 1 < n[a].indexOf(i[r]) && t.push(i[r]);
    return t.length === i.length
}

function checkFileValidation() {
    var e = $(this).closest("form").attr("id"),
        i = this.files;
    return checkFileSize(i) ? checkFileExtenstion(i) ? ($("#" + e + " #form-response").removeClass("notification-field-error notification-field-success").hide(), $("#" + e + " #form-response").find(".notification-message").text(""), !0) : ($("#" + e + " #form-response").addClass("notification-field-error").show(), $("#" + e + " #form-response").find(".notification-message").text("Tip fajla mora biti jedan od slede??ih: PDF, DOC ili DOCX."), !1) : ($("#" + e + " #form-response").addClass("notification-field-error").show(), $("#" + e + " #form-response").find(".notification-message").text("Veli??ina fajla mora biti manja od 5MB."), !1)
}

function addNewField() {
    $(".favorite-website-field").length <= 9 && $(".all-favorite-websites").append('<div class="form-field full-width favorite-website-field"><input type="text" name="favorite-website[]" class="favorite-website"><span class="close-website-field">&times;</span></div>')
}

function deleteNewField() {
    $(this).parent().remove()
}
0 < $(".order-form").length && ((-1 < window.location.href.indexOf("f=web") || -1 < window.location.href.indexOf("f=grafika") || -1 < window.location.href.indexOf("f=graphic") || -1 < window.location.href.indexOf("f=seo")) && $(".popart-order-btn").each(function () {
    $(this).removeClass("selected-btn"), $(".order-form").fadeOut(0)
}), -1 < window.location.href.indexOf("f=web") && (console.log("www"), $(".order-form-web").fadeIn(), $("#web").addClass("selected-btn")), (-1 < window.location.href.indexOf("f=grafika") || -1 < window.location.href.indexOf("f=graphic")) && ($(".order-form-graphic").fadeIn(), $("#graphic").addClass("selected-btn")), -1 < window.location.href.indexOf("f=seo") && ($(".order-form-seo").fadeIn(), $("#seo").addClass("selected-btn"))), $(".popart-order-btn").on("click", function () {
    $("#form-web").find(".invalid-input").removeClass("invalid-input"), $("#form-web").find(".invalid-input-msg").hide(), $(".icon-cross-web-privacy").css("border", "2px solid #959595"), $("#form-graphic").find(".invalid-input").removeClass("invalid-input"), $("#form-graphic").find(".invalid-input-msg").hide(), $(".icon-cross-graphic-privacy").css("border", "2px solid #959595"), $("#form-seo").find(".invalid-input").removeClass("invalid-input"), $("#form-seo").find(".invalid-input-msg").hide(), $(".icon-cross-seo-privacy").css("border", "2px solid #959595")
}), null != document.getElementById("web-telefon") && document.getElementById("web-telefon").addEventListener("input", function (e) {
    var i = e.target.value.replace(/\D/g, "").match(/(\d{0,25})/);
    e.target.value = i[0]
}), null != document.getElementById("graphic-telefon") && document.getElementById("graphic-telefon").addEventListener("input", function (e) {
    var i = e.target.value.replace(/\D/g, "").match(/(\d{0,25})/);
    e.target.value = i[0]
}), null != document.getElementById("seo-telefon") && document.getElementById("seo-telefon").addEventListener("input", function (e) {
    var i = e.target.value.replace(/\D/g, "").match(/(\d{0,25})/);
    e.target.value = i[0]
}), null != document.getElementById("order-tel") && document.getElementById("order-tel").addEventListener("input", function (e) {
    var i = e.target.value.replace(/\D/g, "").match(/(\d{0,25})/);
    e.target.value = i[0]
}), null != document.getElementById("careers-tel") && document.getElementById("careers-tel").addEventListener("input", function (e) {
    var i = e.target.value.replace(/\D/g, "").match(/(\d{0,25})/);
    e.target.value = i[0]
}), $("#web-name").on("keyup", function () {
    var e = this.value,
        i = e[e.length - 1];
    /^([^0-9]*)$/.test(i) || $(this).val("")
}), $("#graphic-name").on("keyup", function () {
    var e = this.value,
        i = e[e.length - 1];
    /^([^0-9]*)$/.test(i) || $(this).val("")
}), $("#seo-name").on("keyup", function () {
    var e = this.value,
        i = e[e.length - 1];
    /^([^0-9]*)$/.test(i) || $(this).val("")
}), $("#order-name").on("keyup", function () {
    var e = this.value,
        i = e[e.length - 1];
    /^([^0-9]*)$/.test(i) || $(this).val("")
}), $("#careers-name").on("keyup", function () {
    var e = this.value,
        i = e[e.length - 1];
    /^([^0-9]*)$/.test(i) || $(this).val("")
}), $("#full-name").on("keyup", function () {
    var e = this.value,
        i = e[e.length - 1];
    /^([^0-9]*)$/.test(i) || $(this).val("")
}), $("#contact-name").on("keyup", function () {
    var e = this.value,
        i = e[e.length - 1];
    /^([^0-9]*)$/.test(i) || $(this).val("")
}), $("#website").on("change", function () {
    ValidURL(this.value) ? $("#website").removeClass("invalid-input") : ($("#website").val(""), setTimeout(function () {
        $("#website").addClass("invalid-input")
    }, 100), setTimeout(function () {
        $("#website").removeClass("invalid-input")
    }, 2e3), $("#website").focus())
}), $("#web-website").on("change", function () {
    ValidURL(this.value) ? $("#web-website").removeClass("invalid-input") : ($("#web-website").val(""), setTimeout(function () {
        $("#web-website").addClass("invalid-input")
    }, 100), setTimeout(function () {
        $("#web-website").removeClass("invalid-input")
    }, 2e3), $("#web-website").focus())
}), $(".file-careers").on("change", checkFileValidation);
var intervalTime, animatingHover = !0;
$(".triger-single-options").on("mouseenter", function () {
    animatingHover && (animatingHover = !1, $(".service-options").slideDown(300).addClass("animating"), intervalTime = setInterval(function () {
        $(".service-options").removeClass("animating"), animatingHover = !0
    }, 300))
}), $(".triger-single-options").on("mouseleave", function () {
    $(".service-options").slideUp(300).addClass("animating"), clearInterval(intervalTime), setTimeout(function () {
        $(".service-options").removeClass("animating"), animatingHover = !0
    }, 300)
}), $(".order-form input").on("input", checkInputValue), $(".order-form input").blur(checkSingleRequiredField), $(".order-form textarea").blur(checkSingleRequiredField), $(".order-form span").on("click", checkSingleSpanRequiredField), $(".popart-order-btn").on("click", showOrderForm), $("#web_submit").on("click", function (e) {
    e.preventDefault(), sendFormMessage("web")
}), $("#graphic_submit").on("click", function (e) {
    e.preventDefault(), sendFormMessage("graphic")
}), $("#seo_submit").on("click", function (e) {
    e.preventDefault(), sendFormMessage("seo")
}), $("#seo_opt_submit").on("click", function (e) {
    e.preventDefault(), sendFormMessage("seo-opt")
}), $("#order_submit").on("click", function (e) {
    e.preventDefault(), sendFormMessage("order")
}), $("#careers_submit").on("click", function (e) {
    e.preventDefault(), sendFormAttachmentMessage("careers")
}), $("#contact_submit").on("click", function (e) {
    e.preventDefault(), sendFormMessage("contact")
}), $(".icon-cross").on("click", function () {
    $(this).removeClass("invalid-norobot")
}), $(".order-norobot label").on("click", function () {
    $(this).find(".icon-cross").removeClass("invalid-norobot")
}), $(".add-favorite-website-field-btn").on("click", addNewField), $(document).on("click", ".close-website-field", deleteNewField);