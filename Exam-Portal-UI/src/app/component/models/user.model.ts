export class UserModel{
    constructor(
        public userId:number,
        public email:string,
        public password:string,
        public firstName:string,
        public lastName:string,
        public isEnable:boolean
    ){}
}