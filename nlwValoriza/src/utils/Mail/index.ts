import * as nodemailer from "nodemailer";
import configs from "../../configs/configs";

class Mail {

  constructor(
      public to?: string,
      public subject?: string,
      public message?: string) { }


  sendMail() {

      let mailOptions = {
          from: configs.user,
          to: this.to,
          subject: this.subject,
          html: this.message
      };

      const transporter = nodemailer.createTransport({
          host: configs.host,
          port: configs.port,
          secure: false,
          auth: {
              user: configs.user,
              pass: configs.password
          },
          tls: { rejectUnauthorized: false }
      });


      console.log(mailOptions);

      transporter.sendMail(mailOptions, function (error, info) {
          if (error) {
              return error;
          } else {
              return "E-mail enviado com sucesso!";
          }
      });
  }


}

export default new Mail;