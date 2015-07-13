$(function(){
	var bar = $('.bar');
    var percent = $('.percent');
    var status = $('#status');
    var name = $('#name').val();
    var file_path = $('#file_path').val();

	$('#test_form').ajaxForm({
	    beforeSend: function() {
	    	t = verify_submit();
	    	if(t){
	        	status.empty();
	        	var percentVal = '0%';
	        	bar.width(percentVal);
	        	percent.html(percentVal);
	    	} else {
	    		return false;
	    	}
	    },
	    uploadProgress: function(event, position, total, percentComplete){
	        var percentVal = percentComplete + '%';
	        bar.width(percentVal);
	        percent.html(percentVal);
	    },
	    success: function() {
	        var percentVal = '100%';
	        bar.width(percentVal)
	        percent.html(percentVal);
	
	        // $("#test_form").ajaxSubmit({
	        // 	type:'post',
	        // 	url:'test.html',
	        // 	timeout:'3000',
	        // 	data: {
	        // 		'name':name,
	        // 		'file_path':file_path,
	        // 	},
	        // 	success: function(data){
	        // 		alert("提交成功");
	        // 	}
	        // });
	    },
	    complete: function() {
	        status.html("上传文件成功");
	        setTimeout(3000);
	    },
    });
	
	$("#test_form").submit(function(){
		window.location.href="test.html";
	});
    
});

function verify_submit(){
	var name_null = $("#name").val()=="";
	var file_null = $("#file_path").val()=="";

	if(name_null || file_null){
		alert("请全部填写");
		return false;
	} else {
		return true;
	}
}