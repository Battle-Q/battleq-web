export const apiUrl: string = "http://www.gossing-server.com:8081/api/v1";
export const email = localStorage.getItem("email");
export const headers = {
  accessToken: `${localStorage.getItem("accessToken")}`,
  "Access-Control-Allow-Origin": "*",
};
