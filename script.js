document.getElementById("contactForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = {
        name: e.target.name.value,
        email: e.target.email.value,
        message: e.target.message.value,
    };

    try {
        const response = await fetch("https://YOUR_API_GATEWAY_URL", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });

        const text = await response.text();
        document.getElementById("response").innerText = text;
        e.target.reset();
    } catch (error) {
        console.error(error);
        document.getElementById("response").innerText = "Error sending message.";
    }
});