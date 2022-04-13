function convert(num) {
  var ourNumber = num;
  var roman = "";

  while (ourNumber >= 1000) {if (window.CP.shouldStopExecution(0)) break;
    roman += "M";
    var ourNumber = ourNumber - 1000;
  }window.CP.exitedLoop(0);

  while (ourNumber >= 500) {if (window.CP.shouldStopExecution(1)) break;
    roman += "D";
    var ourNumber = ourNumber - 500;
  }window.CP.exitedLoop(1);

  while (ourNumber >= 100) {if (window.CP.shouldStopExecution(2)) break;
    roman += "C";
    var ourNumber = ourNumber - 100;
  }window.CP.exitedLoop(2);

  if (ourNumber < 100 && ourNumber > 89) {
    roman += "XC";
    var ourNumber = ourNumber - 90;
  }

  while (ourNumber >= 50) {if (window.CP.shouldStopExecution(3)) break;
    roman += "L";
    var ourNumber = ourNumber - 50;
  }window.CP.exitedLoop(3);

  if (ourNumber < 50 && ourNumber > 39) {
    roman += "XL";
    var ourNumber = ourNumber - 40;
  }

  while (ourNumber > 9) {if (window.CP.shouldStopExecution(4)) break;
    roman += "X";
    var ourNumber = ourNumber - 10;
  }

  // special case for 9's since they don't follow normal convention i.e. "IX"
  window.CP.exitedLoop(4);if (ourNumber == 9) {
    roman += "IX";
    var ourNumber = ourNumber - 9;
  }

  while (ourNumber > 4) {if (window.CP.shouldStopExecution(5)) break;
    roman += "V";
    var ourNumber = ourNumber - 5;
  }window.CP.exitedLoop(5);

  if (ourNumber == 4) {
    roman += "IV";
    var ourNumber = ourNumber - 4;
  }

  while (ourNumber > 0) {if (window.CP.shouldStopExecution(6)) break;
    roman += "I";
    var ourNumber = ourNumber - 1;
  }

  // returns string with characters added as program progressed
  window.CP.exitedLoop(6);return roman;

}

// listens for user input
$('#number').on('input', function () {

  // console.log(this.value);
  // Filters out commas if user put them in input
  var input = this.value.replace(",", "");
  var input = input.replace(",", "");

  // if number is large enough to have too many characters program asks user for lower number
  if (input > 9999999) {
    $('.notice').html("Please enter a lower number.");
    $('.numeral').html(" ");
  }

  // if not, program converts and prints roman numeral
  else {
      var romanNumeral = convert(input);
      $('.notice').html(" ");
      $('.numeral').html(romanNumeral);
    }

});
//# sourceURL=pen.js
        
        document.querySelector(".btnhasromnum").addEventListener("click", copy);

function copy() {
	let fake = document.createElement("textarea");
	fake.value = document.querySelector("#outputromnum").value;
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