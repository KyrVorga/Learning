function palindrome(str) {
    let cleaned = str.trim().toLowerCase().split(/\W/g).join('').replace(/_/g, '')
    let reversed = cleaned.split('').reverse().join(''); 
    return reversed === cleaned;
}

function palindrome(str) {
    const pattern = /[_/ ,.:()-]/g
    let cleaned = str.replace(pattern, '').toLowerCase();
    let reversed = cleaned.split('').reverse().join('');
    return reversed === cleaned;
}


function palindrome(str) {
    const pattern = /[a-z0-9]/g;
    let cleaned = str.toLowerCase().match(pattern).join('');
    let reversed = str.toLowerCase().match(pattern).reverse().join('');
    return reversed === cleaned;
}

palindrome("race car");
palindrome("A man, a plan, a canal. Panama");
palindrome("_eye");
palindrome("0_0 (: /-\ :) 0-0");