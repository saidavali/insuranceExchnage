export interface InsuranceExchangeIF {
}
export interface InsuranceExchangeUserData {
    userName: string;
    password:string
    userType:string
}
export interface InsuranceExchangeNewUser{
    firstName:string,
    lastName:string,
    dob:Date,
    mobileNo:number,
    email:string,
    image:any,
    lob:Boolean
    gender:Boolean,
    address:string
    addressType:Boolean
}
export interface AgentDeatils{
    agenetFirstName :string,
    agentlastname:string,
    agentMobileNo:number
}