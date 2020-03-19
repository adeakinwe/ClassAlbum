export interface ITrainee{
    //{image:"./assets/img/Abiola01.jpg",name:'Akinwe', complexion:'Black',hobbies:['Football', 'Coding', 'Music']}

    name: string;
    image?: string;
    complexion: string;
    hobbies: Array <string>;
    gender: string;
    dob:string;
    almamata: string;
    discipline: string;
    id: number;
    registereddate?: Date;
    active?: boolean;
    email: string;
    phone: string;
    about?: string 
}