// Input:
// [
//   ["1","0","1","0","0"],
//   ["1","0","1","1","1"],
//   ["1","1","1","1","1"],
//   ["1","0","0","1","0"]
// ]
// Output: 6
let array = [
      ["1","0","1","0","0"],
      ["1","0","1","1","1"],
      ["1","1","1","1","1"],
      ["1","0","0","1","0"]
    ]
max(array)
function max(arr){
    let res = []
    // 利用正则匹配，至少2个1以上
    let reg = /1{2,}/g
    // 把二维数组重新表达，把相邻的1提取出来（起始点+截止点）
    arr = arr.map(item=>{
        let str = item.join('')
        // 正则的测试,会返回当前匹配到的索引，索引的内容
        let r = reg.exec(str)
        let rs = []
        // 只要r是真的，就不断地测试
        while(r){
            rs.push([r.index,r.index+r[0].length-1])
            r = reg.exec(str)
        }
        return rs
    })
    // 通过递归计算相邻的矩阵
    let maxRect=(arr,res,n=1)=>{
        // 弹出第一行
        let top = arr.pop()
        // 弹出第二行
        let next = arr.pop()
        // 记录第一行的每一个起始点和截止点
        let tt
        // 记录第二行的每一个起始点和截止点
        let nn
        // 记录交叉的起始索引
        let start
        // 记录交叉的截止索引
        let end
        let width = 1
        let maxWidth = 1
        n++
        for(let i=0,il=top.length;i<il;i++){
            tt = top[i]
            for(let j=0,jl=next.length;j<jl;j++){
                nn = next[j]
                width = Math.min(tt[1],nn[1])-Math.max(tt[0],nn[0])
                if(width>maxWidth){
                    maxWidth = width
                    start = Math.max(tt[0],nn[0])
                    end = Math.min(tt[1],nn[1])
                }
            }
        }
        // 如果没有找到交叉点
        if(start===undefined || end===undefined){
            if(n<3){
                return false
            } else {
                width = top[0][1]-top[0][0]+1
                if(width>1){
                    res.push((n-1)*width)
                }
            }
        } else {
            arr.push([[start,end]])
            maxRect(arr,res,n++)
        }
    }
    while(arr.length>1){
        maxRect([].concat(arr),res)
        arr.pop()
    }
    // 取最大值
    let max = 0
    let item = res.pop()
    while(item){
        if(item>max){
            max = item
        }
        item = res.pop()
    }
    return console.log(max >0?max:-1)
}