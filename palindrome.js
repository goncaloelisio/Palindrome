/**
* racecar 
* Madam, I'm Adam -> madamimadam
* Amy, must I jujitsu my ma?
* A man, a plan, a canal. Panama
**/

function isPalindrome(string) {
    var regx = /[\W_]/g;
    string = string.toLowerCase().replace(regx, "");
    var len = string.length;
    for(var i=0; i < len/2; i++){
      if(string[i] !== string[len-1-i]){
        return 'Is not a Palindrome';
      }
    }
    return 'Is a Palindrome';
  }

  console.log(isPalindrome("A man, a plan, a canal. Panama"));
  console.log(isPalindrome("Amy, must I jujitsu my ma?"));