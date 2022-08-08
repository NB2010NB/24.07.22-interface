interface iUser {
    firstName: string;
    lastName: string;
    Birthday: number;
    id: number
}
class useUser {
    highth: number;
    city: string;
    user: iUser;
}


interface Icar {
    type: string;
    numberDoors: number;
    numberWheels: number;
}
class carShop {
    city: string;
    country: string;
    nameShop: string
    arrayCar: Icar[];
    constructor(_city: string, _country: string, _nameShope: string, _array: Icar[]) {
        this.city = _city;
        this.country = _country;
        this.nameShop = _nameShope;
        this.arrayCar = _array;
    }

}
// const array = Icar[] = [{ type="private", numberDoors=4, numberWheels=4 },
// { type="private", numberDoors=4, numberWheels=4 },
// { type="private", numberDoors=4, numberWheels=4 }]
// const myShop: carShop = new carShop("lod", "israel", "loo", array: Icar)



function printGenre<T, E>(name: T, num: E, parm3: boolean): T {
    if (Bool) {
        return name;
    }
    let newParm: T;
    return newParm;


}


