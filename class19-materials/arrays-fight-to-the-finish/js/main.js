//Create an array of movie titles. Loop through the array and each element to the h2.
let movie = ['bring it on, space jam, boyz in da hood']

for (let i = 0; i < movie.length; i++) {
    document.querySelector('h2').innerHTML += movie[i]
}


//Create an array of numbers. Loop through the array and three to each number and replace the old number.
let nums = [10, 20, 30]

nums.forEach((item, index) => {
    nums[index] = item += 3
})

//Find the average of all the numbers from question three
let avgNums = [10, 20, 30]
let resultNums = 0


avgNums.forEach((item, index) => {
    resultNums += avgNums[index]
})

resultNums /= avgNums.length

