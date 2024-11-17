import nodemailer from "nodemailer"

const sendEmail = async (firstName, lastName, email) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      requireTLS: true,
      auth: {
        user: process.env.sendEmailUser,
        pass: process.env.sendEmailPass,
      },
    });

    return new Promise((resolve, reject) => {

        const mailOptions = {
        from: '"Coply Cops" <hit98987@gmail.com>',
        to: email,
        subject: "We have received your message!",
        text: "coply cops",
        html: `
                <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <h2>Hello! ${firstName} ${lastName}</h2>
            <p>Thank you for reaching out to us. We have successfully received your message.</p>
            <p>Our team will review your inquiry and get back to you as soon as possible.</p>
            <p>
              In the meantime, if you have any urgent queries, feel free to contact us at 
              <a href="mailto:aryanmichael24@gmail.com" style="color: #007BFF;">aryanmichael24@gmail.com</a>.
            </p>
            <p>Best regards,</p>
            <p><strong>Coply Cops</strong></p>
          </div>
                    `,
      };

      transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
          return reject(err);
        } else if (info) {
          return resolve(info);
        }
      });
    });
  } catch (error) {
    return false;
  }
};

export default sendEmail;
