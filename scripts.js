/**
 * Program created as a solution to the Spotify developer puzzle "reversebinary": http://www.spotify.com/se/jobs/tech/reversed-binary/
 * The program takes a number in a decimal base then converts this to binary, which is inverted and then converted back to decimal
 *
 * Created by Arvid Häggqvist
 * arvidhaggqvist.com
 *
 * Feel free to do whatever you like with the code provided here
 */

/**
 * The program contains three functions: the init, the decimalToBinary and the binaryToDecimal functions. You run the programming by 
 * calling the init function with the number you wish to binarily inverse as the parameter
 *
 * For any questions or feedback regarding the structure and code of the program, please contact me at arvid.haggqvist@gmail.com
 */

(function(undefined) {

	var inverseBinary = {

		decimalToBinary: function(num) {
			var next = num, reverseBinary = [];
			while(next >= 1) {
				if(next % 2 === 0) {
					// Check to not add superflous zeroes to the binary number
					if(reverseBinary.length > 0) {
						reverseBinary.push(0);
					}
				}
				else {
					reverseBinary.push(1);
				}
				next = Math.floor(next / 2);
			}
			return reverseBinary;
		},

		binaryToDecimal: function(arr) {
			var result = 0;
			for(i=0; i<arr.length; i++) {
				result = result + arr[i] * Math.pow(2, arr.length - i - 1); // Take each value in the array then multiply it with the exponent of its number to two
			}
			return result;
		},

		init: function(decimalNumber) {
			return console.log(this.binaryToDecimal(this.decimalToBinary(decimalNumber)));
		}
	};

	inverseBinary.init(47);

})();