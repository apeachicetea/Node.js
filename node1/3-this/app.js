function hello() {
  console.log(this);
  //node환경에서 일반함수 안의 this는 global을 나타냄.
  console.log(this === global);
}

hello();

class A {
  constructor(num) {
    this.num = num;
  }

  memberFunction() {
    console.log('---- class ----');
    console.log(this);
    //클래스 안에서의 this는 클래스로 새로 생성되는 object를 나타냄.
    console.log(this === global);
  }
}

const a = new A(2);
a.memberFunction();


console.log('---- global scope ----');
console.log(this);
console.log(this === module.exports);