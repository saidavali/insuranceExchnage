export interface InsuranceExchangeIF {
}
export interface InsuranceExchangeUserData {
    userName: string;
    password:string
    userType:string
}
export interface UserProfileData{
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
export interface addressDetailsType{
    city:string,
    county:string,
    zip:number
}