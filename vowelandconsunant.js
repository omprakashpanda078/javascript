function consunant(str) {
    let count = 0;
    let vowelCount = 0;
    let consunantCnt = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u') {
            vowelCount = vowelCount + 1;
        } else if (
            (str[i] !== 'a' && str[i] !== 'e' && str[i] !== 'i' && str[i] !== 'o' && str[i] !== 'u')) {
            consunantCnt = consunantCnt + 1;
        }

    }
    console.log("vowel Count is :", vowelCount);
console.log("consunant Count is :", consunantCnt);

}
 consunant("omprakashpanda");