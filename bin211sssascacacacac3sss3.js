 $(function() {

  var ems = function(targetPx, basePx) {  
    if(targetPx === 0) {return 0};
    return targetPx/basePx; 
  }
  
    var base = $("input[name=baseSize]");
    var target = $("input[name=targetSize]");
    var emResult = $("input[name=reultEm]");
    var calculate_ems = function() {
      if($.isNumeric($(target).val())) {
        $(emResult).val(ems($(target).val(), $(base).val()) + "em");
      } else {
        $(emResult).val('Integer, please!');
      }
    }
    
    calculate_ems();
  
    $(target).on('keyup', function() {
      calculate_ems();
    });
    

  /*
  Version 1.1 - Removed Submit button, added keyup listener
  
  $("form").submit(function() {
    
    $(emResult).val(ems($(target).val(), $(base).val()) + "em");
    
  });
  */  
});
  
  document.querySelector(".btn221").addEventListener("click", copy);

function copy() {
	let fake = document.createElement("input");
	fake.value = document.querySelector("#resultaa").value;
	//fake.value = "1\n2\n3";
	document.body.appendChild(fake);
	fake.select();
	document.execCommand("copy");
	document.body.removeChild(fake);
	let notice = document.createElement("span");
	notice.className = "notice visible";
	notice.innerHTML = "Text copied to the clipboard!";
	document.body.appendChild(notice);
	setTimeout(() => {
		document.body.removeChild(notice);
	}, 3000);
}
