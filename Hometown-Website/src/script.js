document.addEventListener("DOMContentLoaded", () => {
    function updateTime() {
        const currentTimeSpan = document.getElementById("current_time");

        const now = new Date();

        const bratislavaTime = new Date(
            now.toLocaleString("en-US", { timeZone: "Europe/Bratislava" })
        );

        const hours = String(bratislavaTime.getHours()).padStart(2, '0');
        const minutes = String(bratislavaTime.getMinutes()).padStart(2, '0');
        const seconds = String(bratislavaTime.getSeconds()).padStart(2, '0');

        currentTimeSpan.textContent = `${hours}:${minutes}:${seconds}`;
    }

    updateTime();
    setInterval(updateTime, 1000);
});
