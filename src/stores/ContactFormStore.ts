import { observable, action } from "mobx";
import { ApiClient } from "~libs/api";
import { EmailValidator, TextValidator } from "~libs/validators";
import { CheckboxValidator } from "~libs/validators/CheckboxValidator";

export class ContactFormStore {
  client = new ApiClient();

  contactFormToEmail: string = "egemen.unuvar@esseninternational.com";

  @observable formData = {
    toEmail: this.contactFormToEmail,
    name: "",
    email: "",
    textarea: "",
    terms: false,
  };

  @action
  setFormData = (value, name) => {
    this.formData[name] = value;
  };

  resetFormData = () => {
    this.formData.name = "";
    this.formData.email = "";
    this.formData.textarea = "";
    this.formData.terms = false;
  };

  validateFormData = () => {
    if (!TextValidator(this.formData.toEmail, {})) {
      return false;
    }
    if (!TextValidator(this.formData.name, {})) {
      return false;
    }
    if (!EmailValidator(this.formData.email, {})) {
      return false;
    }
    if (!TextValidator(this.formData.textarea, {})) {
      return false;
    }
    if (!CheckboxValidator(this.formData.terms, {})) {
      return false;
    }
    return true;
  };

  @observable
  sendState: "idle" | "success" | "error" = "idle";

  @action sendForm = async (e) => {
    console.log("send form");
    console.log("this.validateFormData()", this.validateFormData());
    if (!this.validateFormData()) {
      return;
    }

    const response = await this.client.sendContactForm(this.formData);
    if (response.ok) {
      this.sendState = "success";
      setTimeout(() => {
        this.sendState = "idle";
        this.resetFormData();
      }, 5000);
    } else {
      console.error(response);
      this.sendState = "error";
      setTimeout(() => {
        this.sendState = "idle";
      }, 5000);
    }
  };
}
