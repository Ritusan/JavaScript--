// function rev(str){
//     // 把字符串按空格进行分割，保存数组，数组元素的先后顺序就是单词的顺序
//     let arr = str.split(' ')
//     // console.log(arr)
//     // 对数组进行遍历，然后把每个元素进行反转
//     let res = arr.map(item=>{
//         // console.log(item.split('').reverse().join(''))
//         return item.split('').reverse().join('')
//     })
//     return console.log(res.join(' '))
// }

// function rev(str){
//     return console.log(str.split(' ').map(item=>{
//         return item.split('').reverse().join('')
//     }).join(' '))
// }

// function rev(str){
//     return console.log(str.split(/\s/g).map(item=>{
//         return item.split('').reverse().join('')
//     }).join(' '))
// }

function rev(str){
    return console.log(str.match(/[\w']+/g).map(item=>{
        return item.split('').reverse().join('')
    }).join(' '))
}

let s = "Let's take LeetCode contest"
rev(s)