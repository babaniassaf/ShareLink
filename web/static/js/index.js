// when .modal-wide opened, set content-body height based on browser height; 200 is appx height of modal padding, modal title and button bar
$(function() {  //this is jQuery's short notation for "fire all this when page is ready"
    $('#register').on('click', submitRegister);
});

$(".modal-wide").on("show.bs.modal", function() {
  var height = $(window).height() - 200;
  $(this).find(".modal-body").css("max-height", height);
});


function submitRegister() {
    var email = $('#reg_email').val();
    var password = $('#reg_password').val();
	$.ajax({
		url:'/sign_up_buttom',
		type:'GET',
		dataType:'json',
        data:{email:email, password:password},
		success:function(data, status, xhr) {
           alert("success");
		   // location.reload();
		   window.location.href = "/mysavedlinks";	
		},
		error:function(xhr, status, error) {
            alert("sign up faild");
			//alert(xhr.responseText);
			console.error(xhr, status, error);
		}
	});
}