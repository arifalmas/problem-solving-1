//1-লুডু খেলায় আমারা কিভাবে ১ থেকে ৬ সংখ্যা রানডমলি প্রিন্ট করাতে পারি ?

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

console.log(getRndInteger(1,6))

// 2- students দের নামকে Alphabetically সাজাতে হবে

const students = [
    "Arif", 
    "Akash",
    "Saad",
    "Sumit",
    "Robin",
]

console.log(students.sort())

//3 - students দের রোল নাম্বার ক্রম আনুজায়ি সাজানো
const rollNumbers = [
    8,
    21,
    18,
    1,
    3,
    9
]

console.log(rollNumbers.sort(function(a, b) {
    return a - b
}))

//4- কোন সাল leap year কিনা তা বের করব কিভাবে ?
function isLeapYear(year) {
    if((year % 400 === 0 ) ||((year % 4 === 0)&& (year !==0))){
        console.log(`${year}is a leap year`)
    } else{
        console.log(`${year}is not a leap year`);
        
    }
}
isLeapYear(2026)


//৫- কোন sentence এ কতগুলো vowel আছে তা নির্ণয় করা যায় কিভাবে ?
const vowels = [
    "a",
    "e",
    "i",
    "o",
    "u",
    "A",
    "E",
    "I",
    "O",
    "U"

]

function countVowels(sentence){
    let count = 0;
    const letters = Array.from(sentence);
    letters.forEach(function(value, index, array)){
        if(vowels.includes(value)){
            count++;
        }
    }
}
console.log(countVowels("I love Bangladesh"))
