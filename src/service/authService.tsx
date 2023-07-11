export const apiUrl: string = "http://localhost:8080/member";
export const email = localStorage.getItem("email");
export const headers = {
  accessToken: `${localStorage.getItem("accessToken")}`,
  "Access-Control-Allow-Origin": "*",
};
