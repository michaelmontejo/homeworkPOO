// first point

class bill {
	public name: string = ""
	public createdDate: string = ""
	public amount: number = 0
	 
    public bill() {
    }

	constructor(name: string, createdDate: string, amount: number){
		this.name = name;
		this.createdDate = createdDate;
		this.amount = amount;
	}

    public entry(entry: number){
         if (entry > 0) {
             this.amount=this.amount+entry;
         } else {
            this.amount=this.amount
         }
    }

    public refund(refund: number){
        if (refund > 0) {
            this.amount=this.amount+refund;
        } else {
           this.amount=this.amount
        }
   }

   public transfer(transfer: number){
    if (transfer <= this.amount ) {
        this.amount=this.amount-transfer;
    } else {
       this.amount=this.amount
    }
}


}

const person1 = new bill("michael", "10-10-2020", 200000);
const person2 = new bill("sofia", "1-5-2018", 10000);
const person3 = new bill("ana", "10-1-2015", 2000);

   person1.entry(200)
   console.log("Con el ingreso usted tiene actualmente:  " + person1.amount)
   person2.refund(500)
   console.log("Con el reintegro usted tiene actualmente:  " +person2.amount)
   person3.transfer(500)
   console.log("Con la trasnferencia usted tiene actualmente:  " + person3.amount)


    
//second point

class Contador {

    public cont: number = 0
   

    public Contador() {
    }

    constructor(cont: number){
		this.cont = cont;
        
	
	}

    public increase() {
        this.cont++;
      }

      public decrease() {
        this.cont--;
      } 

 }
 
 const contador1 = new Contador(20);
 const contador2 = new Contador(500);
    
 contador1.increase();
 contador2.decrease();
 console.log(contador1.cont)
 console.log(contador2.cont)

 // third point 

 class calculate {

    private Number: number = 0
    public result: number = 0


    constructor(Number: number){
		this.Number = Number;
        this.result = Number;
        
	}

    public  calculate() {
    }

    public addition(Number1: number, Number2: number ) {
        this.result=Number1+Number2;
        
      }
      public subtraction(Number1: number, Number2: number ) {
        this.result=Number1-Number2;
       
      }

      public multiply(Number1: number, Number2: number ) {
        this.result=Number1*Number2;
       
      }

      public split(Number1: number, Number2: number ) {
        this.result=Number1/Number2;
       
      }
   
}
 
const calculate1 = new calculate(0);
const calculate2 = new calculate(0);
const calculate3 = new calculate(0);
const calculate4 = new calculate(0);

calculate1.addition(20,50)
calculate2.subtraction(10,50)
calculate3.multiply(5,8)
calculate4.split(50,2)
console.log("la suma es de:  " + calculate1.result)
console.log("la resta es de:  " + calculate2.result)
console.log("la multiplicacion es de:  " + calculate3.result)
console.log("la division es de:  " + calculate4.result)

// fourth

class vehicle {
	public brand: string = ""
	public color: string = ""
	public serieNumber: number = 0
    public Type: string = ""
    public turn_On: boolean = true
    public Start_and: boolean = true
    public turn_Off: boolean = true
    
    
    constructor(brand: string, color: string, serieNumber: number, Type: string, turn_On: boolean, start_and : boolean, turn_Off : boolean ){
		     this.brand = brand;
             this.color = color;
             this.serieNumber= serieNumber;
             this.Type= Type;
             this.turn_On= turn_On;
             this.Start_and= start_and;
             this.turn_Off= turn_Off;
	}
	 
    public vehicle() {
    }

    public turnon( turnon:boolean) {
        
        if (turnon == true) {
            this.turn_On = true;
        } else {
            this.turn_On=false;
        }

    }

    public turnoff( turnoff:boolean) {
        
        if (turnoff == true) {
            this.turn_Off = true;
        } else {
           this.turn_Off=false;
        }

    }

    public Startand( Stardand:boolean) {
        
        if (Stardand == true) {
            this.Start_and = true;
        } else {
           this.Start_and=false;
        }

    }

}


class motocycle extends vehicle {
	automatic: boolean = true
	speed: number = 0

	constructor(automatic: boolean, speed: number, brand: string, color: string, serieNumber: number, Type: string, turn_On: boolean, start_and : boolean, turn_Off : boolean ){
		super(brand, color, serieNumber, Type, turn_On, start_and, turn_Off  );
		this.automatic = automatic;
		this.speed = speed;
	}
    public ( average_speed:number) {    
         this.speed=average_speed
    }

    public Automatic( Automatic:boolean) {
        
        if (Automatic == true) {
            this.automatic = true;
        } else {
           this.automatic=false;
        }

    }
}

class car extends vehicle {
	automatic: boolean = true
	speed: number = 0

	constructor(automatic: boolean, speed: number, brand: string, color: string, serieNumber: number, Type: string, turn_On: boolean, start_and : boolean, turn_Off : boolean ){
		super(brand, color, serieNumber, Type, turn_On, start_and, turn_Off  );
		this.automatic = automatic;
		this.speed = speed;
	}
    public ( average_speed:number) {    
         this.speed=average_speed
    }

    public Automatic( Automatic:boolean) {
        
        if (Automatic == true) {
            this.automatic = true;
        } else {
           this.automatic=false;
        }

    }
}
    
const vehicle1 = new vehicle("renault","rojo",54654165,"clio",true,true,false);

console.log("marca de tu carro es:   " + vehicle1.brand ) 
const car1 = new car(false,100,"renault","rojo",54654165,"clio",true,true,false)

console.log("la velocidad promedio es de:  " + car1.speed)
    

    