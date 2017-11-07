/**
 * 计算两个数x和y的和
 * @param {number} x 第一个求和参数
 * @param {number} y 第二个求和参数
 * @return {number} 返回求和的值
 */
function add(x,y){
  if(((typeof x)==='number') && ((typeof y)==='number'))
    return x+y;
  else 
    return NaN;

}

module.exports.add = add;
