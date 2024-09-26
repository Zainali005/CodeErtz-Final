import nodemailer from "nodemailer";
import { IncomingForm } from "formidable";
import fs from "fs";
import path from "path";

export const config = {
  api: {
    bodyParser: false,
    maxFileSize: 10485760,
  },
};

const handler = async (req, res) => {
  // console.log("Received request:", req.method);
  if (req.method === "POST") {
    // console.log("Start processing request...");
    // console.log("Request Headers:", req.headers);
    const uploadDir = path.join(process.cwd(), "uploads");

    // Ensure the upload directory exists
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }
    // console.log("Received request:", req.method);
    const form = new IncomingForm({
      uploadDir: uploadDir,
      keepExtensions: true,
      maxFileSize: 10 * 1024 * 1024,
      multiples: false,
    });

    form.parse(req, async (err, fields, files) => {
      if (err) {
        console.error("Form parsing error:", err.message);
        return res.status(500).json({ error: "Form parsing error" });
      }
      // console.log("Form parsed successfully.");

      console.log("Fields:", fields);
      // console.log("Files:", files);

      const resumeFile = Array.isArray(files.resume)
        ? files.resume[0]
        : files.resume;

      if (!resumeFile || !resumeFile.filepath) {
        return res.status(400).json({ error: "Resume file is required" });
      }

      // console.log("Resume File:", resumeFile);
      // console.log("Resume File Path:", resumeFile.filepath);

      // Check the correct path to read the file content
      let resumeContent;
      try {
        resumeContent = fs.readFileSync(resumeFile.filepath);
      } catch (readError) {
        console.error("Error reading resume file:", readError);
        return res.status(500).json({
          error: "Error reading resume file",
          details: readError.message,
        });
      }

      const transporter = nodemailer.createTransport({
        service: "Gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      const adminEmail = "usamaaamirsohail@gmail.com";

      // Extract fields from the parsed form
      const { name, phone, position, experience, coverletter, email } = fields;

      const adminMailOptions = {
        from: process.env.EMAIL_USER,
        to: adminEmail,
        subject: "New Job Application",
        text: `You have received a new job application from ${name}.\n\nDetails:\nName: ${name}\nPhone: ${phone}\nPosition: ${position}\nExperience: ${experience}\nCover Letter: ${coverletter}\nEmail: ${email}`,
        attachments: [
          {
            filename: resumeFile.originalFilename,
            content: resumeContent,
          },
        ],
      };

      const userMailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: "Application Received",
        text: `Hi ${name},\n\nThank you for your application for the position of ${position}. We will get back to you shortly.\n\nBest Regards,\nCodeErtz`,
      };

      try {
        await transporter.sendMail(adminMailOptions);
        console.log("Admin email sent successfully!");
        await transporter.sendMail(userMailOptions);
        console.log("User email sent successfully!");
        return res.status(200).json({ message: "Emails sent successfully!" });
      } catch (emailError) {
        console.error("Error sending email:", emailError.message);
        return res.status(500).json({ error: "Failed to send emails" });
      }
    });
  } else {
    return res
      .setHeader("Allow", ["POST"])
      .status(405)
      .end(`Method ${req.method} Not Allowed`);
  }
};

export default handler;
