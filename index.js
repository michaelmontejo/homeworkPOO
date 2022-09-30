// first point
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var bill = /** @class */ (function () {
    function bill(name, createdDate, amount) {
        this.name = "";
        this.createdDate = "";
        this.amount = 0;
        this.name = name;
        this.createdDate = createdDate;
        this.amount = amount;
    }
    bill.prototype.bill = function () {
    };
    bill.prototype.entry = function (entry) {
        if (entry > 0) {
            this.amount = this.amount + entry;
        }
        else {
            this.amount = this.amount;
        }
    };
    bill.prototype.refund = function (refund) {
        if (refund > 0) {
            this.amount = this.amount + refund;
        }
        else {
            this.amount = this.amount;
        }
    };
    bill.prototype.transfer = function (transfer) {
        if (transfer <= this.amount) {
            this.amount = this.amount - transfer;
        }
        else {
            this.amount = this.amount;
        }
    };
    return bill;
}());
var person1 = new bill("michael", "10-10-2020", 200000);
var person2 = new bill("sofia", "1-5-2018", 10000);
var person3 = new bill("ana", "10-1-2015", 2000);
person1.entry(200);
console.log("Con el ingreso usted tiene actualmente:  " + person1.amount);
person2.refund(500);
console.log("Con el reintegro usted tiene actualmente:  " + person2.amount);
person3.transfer(500);
console.log("Con la trasnferencia usted tiene actualmente:  " + person3.amount);
//second point
var Contador = /** @class */ (function () {
    function Contador(cont) {
        this.cont = 0;
        this.cont = cont;
    }
    Contador.prototype.Contador = function () {
    };
    Contador.prototype.increase = function () {
        this.cont++;
    };
    Contador.prototype.decrease = function () {
        this.cont--;
    };
    return Contador;
}());
var contador1 = new Contador(20);
var contador2 = new Contador(500);
contador1.increase();
contador2.decrease();
console.log(contador1.cont);
console.log(contador2.cont);
// third point 
var calculate = /** @class */ (function () {
    function calculate(Number) {
        this.Number = 0;
        this.result = 0;
        this.Number = Number;
        this.result = Number;
    }
    calculate.prototype.calculate = function () {
    };
    calculate.prototype.addition = function (Number1, Number2) {
        this.result = Number1 + Number2;
    };
    calculate.prototype.subtraction = function (Number1, Number2) {
        this.result = Number1 - Number2;
    };
    calculate.prototype.multiply = function (Number1, Number2) {
        this.result = Number1 * Number2;
    };
    calculate.prototype.split = function (Number1, Number2) {
        this.result = Number1 / Number2;
    };
    return calculate;
}());
var calculate1 = new calculate(0);
var calculate2 = new calculate(0);
var calculate3 = new calculate(0);
var calculate4 = new calculate(0);
calculate1.addition(20, 50);
calculate2.subtraction(10, 50);
calculate3.multiply(5, 8);
calculate4.split(50, 2);
console.log("la suma es de:  " + calculate1.result);
console.log("la resta es de:  " + calculate2.result);
console.log("la multiplicacion es de:  " + calculate3.result);
console.log("la division es de:  " + calculate4.result);
// fourth
var vehicle = /** @class */ (function () {
    function vehicle(brand, color, serieNumber, Type, turn_On, start_and, turn_Off) {
        this.brand = "";
        this.color = "";
        this.serieNumber = 0;
        this.Type = "";
        this.turn_On = true;
        this.Start_and = true;
        this.turn_Off = true;
        this.brand = brand;
        this.color = color;
        this.serieNumber = serieNumber;
        this.Type = Type;
        this.turn_On = turn_On;
        this.Start_and = start_and;
        this.turn_Off = turn_Off;
    }
    vehicle.prototype.vehicle = function () {
    };
    vehicle.prototype.turnon = function (turnon) {
        if (turnon == true) {
            this.turn_On = true;
        }
        else {
            this.turn_On = false;
        }
    };
    vehicle.prototype.turnoff = function (turnoff) {
        if (turnoff == true) {
            this.turn_Off = true;
        }
        else {
            this.turn_Off = false;
        }
    };
    vehicle.prototype.Startand = function (Stardand) {
        if (Stardand == true) {
            this.Start_and = true;
        }
        else {
            this.Start_and = false;
        }
    };
    return vehicle;
}());
var motocycle = /** @class */ (function (_super) {
    __extends(motocycle, _super);
    function motocycle(automatic, speed, brand, color, serieNumber, Type, turn_On, start_and, turn_Off) {
        var _this = _super.call(this, brand, color, serieNumber, Type, turn_On, start_and, turn_Off) || this;
        _this.automatic = true;
        _this.speed = 0;
        _this.automatic = automatic;
        _this.speed = speed;
        return _this;
    }
    motocycle.prototype.public = function (average_speed) {
        this.speed = average_speed;
    };
    motocycle.prototype.Automatic = function (Automatic) {
        if (Automatic == true) {
            this.automatic = true;
        }
        else {
            this.automatic = false;
        }
    };
    return motocycle;
}(vehicle));
var car = /** @class */ (function (_super) {
    __extends(car, _super);
    function car(automatic, speed, brand, color, serieNumber, Type, turn_On, start_and, turn_Off) {
        var _this = _super.call(this, brand, color, serieNumber, Type, turn_On, start_and, turn_Off) || this;
        _this.automatic = true;
        _this.speed = 0;
        _this.automatic = automatic;
        _this.speed = speed;
        return _this;
    }
    car.prototype.public = function (average_speed) {
        this.speed = average_speed;
    };
    car.prototype.Automatic = function (Automatic) {
        if (Automatic == true) {
            this.automatic = true;
        }
        else {
            this.automatic = false;
        }
    };
    return car;
}(vehicle));
var vehicle1 = new vehicle("renault", "rojo", 54654165, "clio", true, true, false);
console.log("marca de tu carro es:   " + vehicle1.brand);
var car1 = new car(false, 100, "renault", "rojo", 54654165, "clio", true, true, false);
console.log("la velocidad promedio es de:  " + car1.speed);
