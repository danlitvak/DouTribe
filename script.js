document.getElementById("contactForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    // Collect form data
    const formData = {
        name: e.target.name.value,
        email: e.target.email.value,
        message: e.target.message.value,
    };

    console.log("Form submitted!");
    console.log("Collected data:", formData);

    try {
        // Placeholder fetch (won’t work until you add your API endpoint)
        const response = await fetch("https://YOUR_API_GATEWAY_URL", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });

        console.log("Fetch request sent with:", JSON.stringify(formData));

        const text = await response.text();
        console.log("Response from server:", text);

        document.getElementById("response").innerText = text;
        e.target.reset();
    } catch (error) {
        console.error("Error occurred:", error);
        document.getElementById("response").innerText = "Error sending message.";
    }
});