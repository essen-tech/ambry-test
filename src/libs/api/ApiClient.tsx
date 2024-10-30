import { create, ApisauceInstance } from "apisauce";

export class ApiClient {
  client: ApisauceInstance;

  constructor() {
    this.client = create({
      baseURL:
        process.env.GATSBY_WP_API_URL ||
        "http://ec2-34-245-102-35.eu-west-1.compute.amazonaws.com/wp-json",
      headers: {
        "Cache-Control": "no-cache",
        "Content-Type": "application/json",
      },
      timeout: 10000,
      withCredentials: true,
    });
  }

  sendContactForm = async (data) => {
    console.log(this.client.getBaseURL());
    return this.client.post<Response>("swace/v1/sendContactForm", data);
  };
}
