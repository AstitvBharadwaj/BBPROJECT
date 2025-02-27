async function fetchTrafficData() {
    try {
        const response = await fetch('http://localhost:5000/api/traffic'); // Adjust the URL as needed
        const data = await response.json();
        document.getElementById('data-display').innerText = JSON.stringify(data, null, 2);
    } catch (error) {
        console.error('Error fetching traffic data:', error);
    }
}

// Fetch traffic data on page load
window.onload = fetchTrafficData;
