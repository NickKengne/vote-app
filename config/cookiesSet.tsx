"use server"
import { cookies } from "next/headers";

export async function cookiesSetToken(token: string, expires: Date) {
    cookies().set("token", token, { expires: expires });
}

export  async function getCookieToken() {
    return cookies().get("token")?.value;
}

export  async function cookiesRemoveToken() {
   return cookies().delete("token");
}

export  async function cookiesSetUser(user: string, expires: Date) {
    cookies().set("user", JSON.stringify(user), { expires: expires });
}

export  async function getCookieUser() {
    return cookies().get("user")
}

export  async function cookiesRemoveUser() {
    return cookies().delete("user");
}

export async function cookiesSetUserId(user_id: string, expires: Date) {
    cookies().set("user_id", user_id, { expires: expires });
}

export async function getCookieUserId() {
    return cookies().get("user_id")?.value
}

export async function cookiesRemoveUserId() {
  return cookies().delete("user_id");
}
