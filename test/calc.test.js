
var add = require('../calc.js').add;
var expect = require('chai').expect;

describe('加法函数测试',function(){
  before(function(){
    console.log('before');
  });
  after(function(){
    console.log('after');
  });
  beforeEach(function(){
    console.log('beforeEach');
  });
  afterEach(function(){
    console.log('afterEach');
  });

  it.skip('0 + 0 = 0',function(){
    expect(add(0,0)).to.be.equal(0);
  });
  it.only('5 + 2 = 7',function(){
    expect(add(5,2)).to.be.equal(7);
  });
  it('0 - 1 = -1',function(){
    expect(add(0,-1)).to.be.equal(-1);
  });
  it('abc + 1 = NaN',function(){
    
    expect(isNaN(add('abc',1))).to.be.ok;
  });
});
