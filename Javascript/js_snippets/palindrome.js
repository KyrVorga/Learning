function palindrome(str) {
    let cleaned = str.trim().toLowerCase().split(/\W/g).join('').replace(/_/g, '')
    let reversed = cleaned.split('').reverse().join(''); 
    return reversed === cleaned;
}

palindrome("race car");
palindrome("A man, a plan, a canal. Panama");
palindrome("_eye");
palindrome("0_0 (: /-\ :) 0-0");


function palindrome(str) {
    let cleaned = str.replace(/[_/ ,.:()-]/g , '').toLowerCase();
    let reversed = cleaned.split('').reverse().join('');
    return reversed === cleaned;
}

palindrome("race car");
palindrome("A man, a plan, a canal. Panama");
palindrome("_eye");
palindrome("0_0 (: /-\ :) 0-0");