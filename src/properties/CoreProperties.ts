import jwtDecode from "jwt-decode";

export const BASE_URL : string = 'http://localhost:8080/api/v1';

export const TOKEN : string | null  = localStorage.getItem("jwtToken");