/* 0. 조건: 등급은 일반회원, 프렌즈, 퍼플(Plain, Friends, Purple) + 개인정보는 이름만 받습니다. 이외 3개 클래스를 구현하는데 필요한 속성, 함수를 직접 논의하고 구현해보세요

1. 일련번호, 상품명, 수량, 가격을 속성으로 가지는 Product 클래스를 구현해보세요. (일련번호는 자동 입력됨)
```
새우깡 = new Product('새우깡', 3, 1500)
```

2. 마켓컬리의 회원등급 목록을 참조하셔서 class Plain, Friends, Purple을 구현해보세요.
    - Plain 클래스에는 buy(상품명, 수량)이라는 인스턴스 메소드가 있으며,
    - 이 메소드는 자료형이 Product(instanceof)인 상품은 구매할 수 있고, // 지구를지켜라 instanceof Movie; (인스턴스명 instanceof 클래스명;)
    - 자료형이 Product가 아닌 상품은 '바코드를 읽을 수 없습니다.'라는 에러메시지를 리턴합니다.

3. Product와 회원 클래스를 이용하여 만들 수 있는 또다른 메소드를 하나 고안해 보세요.
*/
class Product{
    static product_num = 0;
    constructor(product_name, count, price){
      this.product_name = product_name;
      this.count = count;
      this.price = price;
      this.product_num = Product.product_num;
      Product.product_num++;
    }
  }
  
  class Plain{
    constructor(name){
      this.name = name;
      this.grade = "Plain";
    }
    buy(product, count) {
        if (product instanceof Product) {
            if (product.count >= count) {
                product.count -= count;
                console.log(`${this.name}님이 ${product.product_name} ${count}개를 구매하였습니다.`);
            } else {
                console.log(`재고가 부족합니다.`);
            }
        } else {
            console.log(`바코드를 읽을 수 없습니다.`);
      }
    }
  }
  
  class Friends{
    constructor(name){
      this.name = name;
      this.grade = "Friends";
    }
    buy(product, count) {
        if (product instanceof Product) {
            let discountPrice = product.price * 0.9;
            if (product.count >= count) {
                product.count -= count;
                console.log(`${this.name}님이 ${product.product_name} ${count}개를 구매하였습니다. (할인 가격: ${discountPrice}원)`);
            } else {
                console.log(`재고가 부족합니다.`);
            }
        } else {
            console.log(`바코드를 읽을 수 없습니다.`);
      }
    }
  }
  
  class Purple{
    constructor(name){
      this.name = name;
      this.grade = "Purple";
    }
    buy(product, count) {
        if (product instanceof Product) {
            let discountPrice = product.price * 0.8;
            if (product.count >= count) {
                product.count -= count;
                console.log(`${this.name}님이 ${product.product_name} ${count}개를 구매하였습니다. (할인 가격: ${discountPrice}원)`);
            } else {
                console.log(`재고가 부족합니다.`);
            }
        } else {
            console.log(`바코드를 읽을 수 없습니다.`);
      }
    }
  }
  
  const 새우깡 = new Product("새우깡", 3, 1500);
  const 회원1 = new Plain("양효준");
  const 회원2 = new Friends("강동엽");
  const 회원3 = new Purple("남정우");
  
  회원1.buy(새우깡, 1);
  회원2.buy(새우깡, 2);
  회원3.buy(새우깡, 3);
  