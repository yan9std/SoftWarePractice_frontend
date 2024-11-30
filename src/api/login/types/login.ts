export interface LoginRequestData {
  /** admin 或 editor */
  adminName: "admin" | "editor" | "master"
  /** 密码 */
  adminPassword: string
}

export type LoginResponseData = ApiResponseData<{ token: string }>

export type UserInfoResponseData = ApiResponseData<{ adminName: string }>
