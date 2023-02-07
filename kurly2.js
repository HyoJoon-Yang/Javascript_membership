class Product {
    static productNum = 0;
    constructor(productName, count, price) {
        this.productName = productName;
        this.count = count;
        this.price = price;
        this.productNum = Product.productNum;
        Product.productNum++;
    }
}

class Member {
    constructor(name) {
        this.name = name;
    }

    buy(product, count) {
        if (product instanceof Product) {
            if (product.count >= count) {
                product.count -= count;
                console.log(`${this.name}님이 ${product.productName} ${count}개를 구매하였습니다.`);
            } else {
                console.log(`재고가 부족합니다.`);
            }
        } else {
            console.log(`바코드를 읽을 수 없습니다.`);
        }
    }
}

class Plain extends Member {
}

class Friends extends Member {
    buy(product, count) {
        if (product instanceof Product) {
            let discountPrice = product.price * 0.9;
            if (product.count >= count) {
                product.count -= count;
                console.log(`${this.name}님이 ${product.productName} ${count}개를 구매하였습니다. (할인 가격: ${discountPrice}원)`);
            } else {
                console.log(`재고가 부족합니다.`);
            }
        } else {
            console.log(`바코드를 읽을 수 없습니다.`);
        }
    }
}

class Purple extends Member {
    buy(product, count) {
        if (product instanceof Product) {
            let discountPrice = product.price * 0.8;
            if (product.count >= count) {
                product.count -= count;
                console.log(`${this.name}님이 ${product.productName} ${count}개를 구매하였습니다. (할인 가격: ${discountPrice}원)`);
            } else {
                console.log(`재고가 부족합니다.`);
            }
        } else {
            console.log(`바코드를 읽을 수 없습니다.`);
        }
    }
}

const chips = new Product('치즈깡', 5, 1000);
