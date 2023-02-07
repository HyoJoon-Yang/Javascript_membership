class Product {
    // 제품의 수를 카운트하는 static 변수 product_num
    static product_num = 0;

    // 생성자
    constructor(product_name, count, price) {
      // 제품 이름
      this.product_name = product_name;
      // 제품 수량
      this.count = count;
      // 제품 가격
      this.price = price;
      // 생성된 제품의 순번
      this.product_num = Product.product_num;
      // 생성된 제품 수 증가
      Product.product_num++;
    }
}


    
class Customer {
    // 생성자
    constructor(name, grade) {
        // 고객 이름
        this.name = name;
        // 고객 등급
        this.grade = grade;
        // 구매한 제품 목록
        this.cart = [];
    }
    // 구매 함수: 제품과 구매 수량을 매개변수로 받음
    buy(product, count) {
        console.log(`${this.name}님이 ${product.product_name} ${count}개를 구매하였습니다.`);
    }
    // 장바구니에 담기: 제품과 구매 수량을 매개변수로 받음
    addToCart(product, count) {
        // 제품이 Product 클래스의 인스턴스인 경우
        if (product instanceof Product) {
            // 재고가 충분한 경우
            if (product.count >= count) {
                product.count -= count;  // 재고 감소
                this.cart.push({product: product, count: count});  // 장바구니에 담기
                console.log(`${product.product_name} ${count}개를 장바구니에 담았습니다.`);
            } else {
                console.log(`재고가 부족합니다.`);
            }
        } else {
            console.log(`바코드를 읽을 수 없습니다.`);
        }
    }
    checkout() {
    let totalPrice = 0;
    this.cart.forEach((item) => {
    totalPrice += item.product.price * item.count;
    });
    console.log(`총 구매 금액: ${totalPrice}원`);
    }
    }
    
    class Plain extends Customer{
    constructor(name){
    super(name);
    this.grade = "Plain";
    }
    }
    
    class Friends extends Customer{
    constructor(name){
    super(name);
    this.grade = "Friends";
    }
    checkout() {
    let totalPrice = 0;
    this.cart.forEach((item) => {
    totalPrice += item.product.price * item.count * 0.9;
    });
    console.log(`${this.name}님의 할인 가격: ${totalPrice}원`);
    }
    }
    
    class Purple extends Customer{
    constructor(name){
    super(name);
    this.grade = "Purple";
    }
    checkout() {
    let totalPrice = 0;
    this.cart.forEach((item) => {
    totalPrice += item.product.price * item.count * 0.8;
    });
    console.log(`${this.name}님의 할인 가격: ${totalPrice}원`);
    }
    }



let customer = new Customer("짱구");
let product = new Product("새우깡", 1000, 10);

customer.addToCart(product, 5);
customer.checkout();