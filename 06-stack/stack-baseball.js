// 栈的应用：棒球比赛
let arr1 = ['5','2','C','D','+']  //30
let arr2 = ['5','-2','4','C','D','9','+','+']  //27
getSum(arr1)
getSum(arr2)
function getSum(arr){
    // 用数组来实现堆栈结构，数组有push和pop的功能
    let result = []
    // 上一轮的数据
    let pre1
    // 上上轮数据
    let pre2
    // 对数组进行遍历，遍历的目的是处理得分
    arr.forEach(item => {
        switch(item){
            case 'C':
                if(result.length){
                    result.pop()
                }
                break
            case 'D':
                pre1 = result.pop()
                result.push(pre1,pre1*2)
                break
            case '+':
                pre1 = result.pop()
                pre2 = result.pop()
                result.push(pre2,pre1,pre2+pre1)
                break
            default:
                result.push(item*1)
        }
    });
    return console.log(result.reduce((total,num)=>{
        // 返回之前的统计结果+当前的数值
        return total+num
    }))
}