import nodemailer from 'nodemailer'
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "cb7654ea913352",
    pass: "c52a16fb472b57"
  }
});

export class NodemailerMailAdapter implements MailAdapter{
    async sendMail({subject,body}: SendMailData) {
      await transport.sendMail({
          from: 'Equipe Feedget <oi@feedget.com>',
          to: 'Kauê de Magalhães <kauedemagalhaes27@gmail.com>',
          subject,
          html: body,
        })
    }
}