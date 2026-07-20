// str = "panda"
const countVowel = (str) => {
    // vowel a e i o u 
    let vowelCount = 0;
    for(let i = 0; i < str.length; i++) {
        if(str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u') {
            vowelCount = vowelCount + 1;
        }
    }
    return vowelCount;
}
let str = "xyz";
let ans = countVowel(str);
console.log("Vowel Count in ", str, "is : ", ans);
