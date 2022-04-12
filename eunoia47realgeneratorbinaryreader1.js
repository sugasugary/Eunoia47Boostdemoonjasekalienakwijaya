 Copyright by eunoia47
 Copyright by eunoia47
 MIT License

Copyright (c) 2022 sugasugary

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION
 $(document).ready(function () {
	$('.toggle').click(function(){
		$('.decimalToBinary').toggleClass('decimalToBinaryClose')
		$('.convert').toggleClass('decimalToBinaryClose')
		$('.binaryToDecimal').toggleClass('binaryToDecimalOpen')
		$('.unconvert').toggleClass('inline-block')
		$(".clear").toggleClass("clear-converted").toggleClass("clear-unconverted")
	})
	$(".clear").click(function () {
		if ($(this).hasClass("clear-converted")){
			$(".decimalToBinary textarea").val("")
		} else {
			$(".binaryToDecimal textarea").val("")
		}
	})
	$('.convert').click(function () {
		var charCodes     = [],
			dividing      = [],
			allBinaryCode = [],
			decimal       = $('.decimalToBinary textarea.decimal').val(),
			chars         = decimal.split('');		
		for( x=0; x<decimal.length; x++){
			charCodes[x] = decimal.charCodeAt(x)
		}
		for (y=0; y<charCodes.length; y++){
			var	equal  = [],
				binary = [];
			decimal = charCodes[y];
			for(i=0; i<=999999999; i++){
				dividing[i] = decimal;
				equal[i] = dividing[i] / 2;
				decimal = Math.floor(equal[i]);
				binary[i] = dividing[i] % 2;
				if(equal[equal.length-1] < 1){
					break;
				}else{}
			}
			binary.reverse();
			allBinaryCode[y] = binary.join('').toString();
					}
		$('.decimalToBinary textarea.disabled').val(allBinaryCode.join(' ').toString());
	});
	$('.unconvert').click(function(){
		var allBinary = $('.binaryToDecimal textarea.binary').val().split(' '),
			unicodes = [];
		for(i=0; i<allBinary.length; i++){
			var	oneBinaryLength = allBinary[i].length,
				equal = [],
				two   = [],
				char  = '',
				text  = [];
			for(x=0; x<=oneBinaryLength -1; x++){
				two[x] = Math.pow(2,x);
				var binary = allBinary[i].split('');
			}
			two.reverse();
			for(y=0; y < two.length; y++){
				equal[y] = two[y] * eval(binary[y]);
			}
			unicodes[i] = eval(equal.join('+'));
			char        = String.fromCharCode(unicodes[i]);
			text[i]     = char;
			$('.binaryToDecimal textarea.disabled').val($('.binaryToDecimal textarea.disabled').val() + char)
		}
	});
});
    
    

document.getElementById('copyToClipboard-a').addEventListener('click', function() {
  
  var text = document.getElementById('textA');
  text.select();
  document.execCommand('copy');

})

    
  document.getElementById('copyToClipboard-b').addEventListener('click', function() {
  
  var text = document.getElementById('textB');
  text.select();
  document.execCommand('copy');

})
