import axios from "axios";
import {user} from "../stores";

export class PlacemarkService {
  baseUrl = "";

  constructor(baseUrl) {
    this.baseUrl = baseUrl;
    const placemarkCredentials = localStorage.placemark
    if (placemarkCredentials) {
      const savedUser = JSON.parse(placemarkCredentials)
      user.set({
        email: savedUser.email,
        id: savedUser.id,
        token: savedUser.token,
        scope: savedUser.scope
      });
      axios.defaults.headers.common["Authorization"] = "Bearer " + savedUser.token;
    }
  }

  async login(email, password) {
    try {
      const response = await axios.post(`${this.baseUrl}/api/users/authenticate`, {email, password});
      axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.token;
      if (response.data.success) {
        user.set({
          email: email,
          id: response.data.id,
          token: response.data.token,
          scope: response.data.scope
        });

        localStorage.placemark = JSON.stringify({email:email, id: response.data.id, token:response.data.token, scope:response.data.scope});
        return true;
      }
      return false;
    } catch (error) {
      return false;
    }
  }

  async logout() {
    user.set({
      email: "",
      id: "",
      token: "",
      scope: [],
    });
    axios.defaults.headers.common["Authorization"] = "";
    localStorage.removeItem("placemark");
  }

  async signup(firstName, lastName, email, password) {
    try {
      const userDetails = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
      };
      await axios.post(this.baseUrl + "/api/users", userDetails);
      return true;
    } catch (error) {
      return false;
    }
  }

  async getUserPlacemarks(userId, category="All") {
    user.subscribe(user => {userId = user.id});
    let userDetails = await this.getUserDetails(userId);
    let response;
    try {
      if(userId == userDetails._id && userDetails.scope.includes("admin")) {
        response = await axios.get(this.baseUrl + "/api/placemark");
      } else {
        response = await axios.get(this.baseUrl + "/api/placemark/user/" + userId);
      }
      let filteredPlacemarks = response.data.filter((placemark) => placemark.category === category);
      if(category === "All") {
        filteredPlacemarks = response.data
      }
      return filteredPlacemarks;
    } catch (error) {
      return false;
    }
  }

  async getAllPlacemarks() {
    try {
      const response = await axios.get(this.baseUrl + "/api/placemark");
      return response.data;
    } catch (error) {
      return false;
    }
  }

  async getUserDetails(userId) {
    try {
      const response = await axios.get(this.baseUrl + "/api/users/" + userId);
      return response.data;
    } catch (error) {
      return false;
    }
  }

  async updateUser(user) {
    try {
      const response = await axios.put(this.baseUrl + "/api/users/" + user._id, { user });
      if (response.data.success) {
        return true;
      }
      return false;
    } catch (error) {
      return false;
    }
  }

  async getPlacemarkById(id) {
    if (id) {
      const placemark = await axios.get(this.baseUrl + "/api/placemark/" + id)
      return placemark;
    }
    return null;
  }

  async updatePlacemark(placemark) {
    try {
      const response = await axios.put(this.baseUrl + "/api/placemark/update", { placemark });
      if (response.data.success) {
        return true;
      }
      return false;
    } catch (error) {
      return false;
    }
  }

  async deletePlacemark(id) {
    try {
      const response = await axios.delete(this.baseUrl + "/api/placemark/" + id);
      if (response.status == 204) {
        return true;
      }
      return false;
    } catch (error) {
      return false;
    }
  }

  async addPlacemark(placemark) {
    try {
      console.log(placemark);
      const response = await axios.post(this.baseUrl + "/api/placemark", { placemark });
      console.log(response);
      if (response.status == 201) {
        return true;
      }
      return false;
    } catch (error) {
      return false;
    }
  }

  async getAnalytics() {
    try {
      const response = await axios.get(this.baseUrl + "/api/analytics");
      return response.data;
    } catch (error) {
      return false;
    }
  }

  async getUsers() {
    try {
      const response = await axios.get(this.baseUrl + "/api/users");
      return response.data;
    } catch (error) {
      return false;
    }
  }

  async uploadImage(placemarkId, fileList) {
    console.log(placemarkId)
    console.log(fileList)
    try {
      const response = await axios.post(`${this.baseUrl}/api/placemark/${placemarkId}/upload`, { fileList });
      if (response.status == 200) {
        return true;
      }
      return false;
    } catch (error) {
      return false;
    }
  }

  async uploadImageV2(placemarkId, imgBase64) {
    const data = {}
    const imgData = imgBase64.split(',');
    data["image"] = imgData[1];
    let body = JSON.stringify(data)
    console.log(placemarkId);
    console.log(body);
    await axios.post(`${this.baseUrl}/api/placemark/${placemarkId}/upload`, { body }, 
      {headers: {'Content-Type': 'application/json', Accept: 'application/json'}});
  }
  

  async deleteImage(placemarkId, imageId) {
    try {
      const response = await axios.delete(this.baseUrl + "/api/placemark/editplacemark/" + placemarkId + "/deleteimage/" + imageId);
      if (response.status == 204) {
        return true;
      }
      return false;
    } catch (error) {
      return false;
    }
  }
}