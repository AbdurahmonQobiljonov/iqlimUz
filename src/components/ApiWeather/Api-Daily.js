import axios from "axios";

const apiUrl = "https://iqlim.uz/api";
const apiToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoid2VhdGhlciIsImlhdCI6MTYzNjE0MzIyOX0.pXckll6DfCd3ZNhojAFCkxb9OTsHoyeH5_MOlXQ0roo";

const authAxios = axios.create({
  baseURL: apiUrl,
  headers: {
    "X-Auth-Token": apiToken,
  },
});
class Apies {
  getCitiesId() {
    return authAxios.get("/cities");
  }
  getCity(citiyId) {
    return authAxios.get(`?cityId=${citiyId}`);
  }
}

export default Apies;
