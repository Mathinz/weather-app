import ZipServices from "./ZipService";

const DEMO = false;

export class Api {
  constructor(authToken, demo = DEMO) {
    this.token = authToken;
    this.demo = demo;
    this.test = new ZipServices(this, demo);
  }
}

export default Api;
