
export interface LoginUserType {
    email: string;
    password:string
}

export type SignUpUserType = {
    email:string,
    firstname: string,
    name: string,
    address: string,
    phone: string,
    cni_number: string,
    password: string
}

export type PostType = {
    id:string ,
    speech:string
}

export interface user{
    firstname: string;
    name: string;
    email: string
    password: string
    phone: string
    cni_number: string,
    address: string,
    role:string
  }

export interface authResponse {
    message:string
    expired_at:number
    token: string
    user_id:string
    user: user
}