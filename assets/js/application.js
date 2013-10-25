$(function(){
	// sidebar Toggle
	$(".sidebar-toggle").click(function(){
		$(".sidebar").toggleClass("active");
		$(".content").toggleClass("content-sidebar");
		$("body").toggleClass("body-sidebar");
		$(".header").toggleClass("header-sidebar");
		return false;
	});
	$('.sidebar').bind('clickoutside', function (event) {
		$(".sidebar").removeClass("active");
	});
	// aside Toggle
	$(".aside-toggle").click(function(){
		$(".aside").toggleClass("active");
		$(".content").toggleClass("content-aside");
		$("body").toggleClass("body-aside");
		$(".header").toggleClass("header-aside");
		return false;
	});
	$('.aside').bind('clickoutside', function (event) {
		$(".aside").removeClass("active");
	});
	// Activate tooltip
    $("[data-toggle='tooltip']").tooltip();
    // Activate Popover
    $("[data-toggle='popover']").popover({ trigger: "hover",container: "body" });
});