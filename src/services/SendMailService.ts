import nodemailer, { Transporter } from 'nodemailer';

class SendMailService {
  private client: Transporter | undefined;
  constructor() {
    nodemailer.createTestAccount().then((account) => {
      const transporter = nodemailer.createTransport({
        host: account.smtp.host,
        port: account.smtp.port,
        secure: account.smtp.secure,
        auth: {
          user: account.user,
          pass: account.pass,
        },
      });
      this.client = transporter;
    });
  }

  async execute(to: string, subject: string | undefined, body: string | undefined) {
    const message = await this.client?.sendMail({
      to,
      subject,
      html: body,
      from: 'NPS <noreplay@nps.com.br>',
    });

    console.log('Message sent: %s', message.message);
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(message));
  }
}

export default new SendMailService();
