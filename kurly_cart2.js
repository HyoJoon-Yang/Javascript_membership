class Product{
    // 상품의 수를 저장하는 static 변수
    static product_num = 0;
    
    // 생성자 함수. 상품 이름, 개수, 가격을 인자로 받음
    constructor(product_name, count, price){
      // 상품 이름 속성
      this.product_name = product_name;
      // 상품 개수 속성
      this.count = count;
      // 상품 가격 속성
      this.price = price;
      // 상품 번호 속성, 고유한 값을 유지하기 위해 static 변수 product_num을 사용
      this.product_num = Product.product_num;
      // 상품 번호 증가
      Product.product_num++;
    }
}

class Customer {
    // 생성자 함수. 이름과 등급을 인자로 받음
    constructor(name, grade) {
        // 고객 이름 속성
        this.name = name;
        // 고객 등급 속성
        this.grade = grade;
        // 장바구니 속성, 빈 배열로 초기화
        this.cart = [];
    }
}

buy(product, count) {
    // product가 Product 클래스의 객체인지 확인
    if (product instanceof Product) {
        // 할인율
        let discount = 1;
        // 고객 등급에 따른 할인율 계산
        switch (this.grade) {
            // Friends 등급
            case "Friends":
                discount = 0.9;
                break;
            // Purple 등급
            case "Purple":
                discount = 0.8;
                break;
        }
        // 할인 가격 계산
        let discountPrice = product.price * discount;
        // 상품 재고가 충분한지 확인
        if (product.count >= count) {
            // 상품 재고 감소
            product.count -= count;
            // 장바구니에 상품 추가
            this.cart.push({
                product_name: product.product_name,
                count: count,
                price: discountPrice
            });
            // 구매 메시지 출력
            console.log(`${this.name}님이 ${product.product_name} ${count}개를 구매하였습니다. (할인 가격: ${discountPrice}원)`);
        } else {
            // 재고 부족 메시지 출력
            console.log(`재고가 부족합니다.`);
        }
    } else {
        // 바코드 읽기 오류 메시지 출력
        console.log(`바코드를 읽을 수 없습니다.`);
    }
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
    // 고객의 장바구니 내용을 출력하는 메소드
    showCart() {
        console.log(`${this.name}님의 장바구니:`);
        for (const item of this.cart) {
        console.log(`- ${item.product_name}: ${item.count}개 (${item.price}원)`);
        }
    }
    }

    // Plain 클래스 정의 (Customer 클래스를 상속받음)
    class Plain extends Customer {
    constructor(name) {
        super(name, "Plain");
    }
    }

    // Friends 클래스 정의 (Customer 클래스를 상속받음)
    class Friends extends Customer {
    constructor(name) {
        super(name, "Friends");
    }
    }

    // Purple 클래스 정의 (Customer 클래스를 상속받음)
    class Purple extends Customer {
    constructor(name) {
        super(name, "Purple");
    }
    }