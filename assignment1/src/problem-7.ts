{
    // 
    type Car = {
        make: string;
        model: string;
        year: number
    }

    class Car1 {
        make: string;
        model: string;
        year: number

        constructor({ make, model, year }: Car) {
            this.make = make,
            this.model = model,
            this.year = year
        }
        getCarAge = (): number => {
            return new Date().getFullYear() - this.year
        }
    }

    // const car = new Car1({ make: "Honda", model: "Civic", year: 2018 });
    // console.log(car.getCarAge());





    // 
}