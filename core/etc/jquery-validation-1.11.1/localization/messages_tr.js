/*
 * Translated default messages for the jQuery validation plugin.
 * Locale: TR (Turkish; T  rk  e)
 */
(function ($) {
	$.extend($.validator.messages, {
		required: "Bu alan  n doldurulmas   zorunludur.",
		remote: "L  tfen bu alan   d  zeltin.",
		email: "L  tfen ge  erli bir e-posta adresi giriniz.",
		url: "L  tfen ge  erli bir web adresi (URL) giriniz.",
		date: "L  tfen ge  erli bir tarih giriniz.",
		dateISO: "L  tfen ge  erli bir tarih giriniz(ISO format  nda)",
		number: "L  tfen ge  erli bir say   giriniz.",
		digits: "L  tfen sadece say  sal karakterler giriniz.",
		creditcard: "L  tfen ge  erli bir kredi kart   giriniz.",
		equalTo: "L  tfen ayn   de  eri tekrar giriniz.",
		accept: "L  tfen ge  erli uzant  ya sahip bir de  er giriniz.",
		maxlength: $.validator.format("L  tfen en fazla {0} karakter uzunlu  unda bir de  er giriniz."),
		minlength: $.validator.format("L  tfen en az {0} karakter uzunlu  unda bir de  er giriniz."),
		rangelength: $.validator.format("L  tfen en az {0} ve en fazla {1} uzunlu  unda bir de  er giriniz."),
		range: $.validator.format("L  tfen {0} ile {1} aras  nda bir de  er giriniz."),
		max: $.validator.format("L  tfen {0} de  erine e  it ya da daha k      k bir de  er giriniz."),
		min: $.validator.format("L  tfen {0} de  erine e  it ya da daha b  y  k bir de  er giriniz.")
	});
}(jQuery));