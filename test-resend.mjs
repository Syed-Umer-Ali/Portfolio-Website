import { Resend } from "resend";

const resend = new Resend("re_8V5aDR19_LvyciRbwqfNKm8uCeZCdx8nR");

async function test() {
    console.log("Sending...");
    try {
        const { data, error } = await resend.emails.send({
            from: "Acme <onboarding@resend.dev>",
            to: ["syedumerali45@gmail.com"],
            subject: "Test from Node",
            html: "<p>Test</p>",
        });
        console.log("Data:", data);
        console.log("Error:", error);
    } catch (err) {
        console.error("Caught error:", err);
    }
}

test();
