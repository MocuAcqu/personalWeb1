// 設置 API 資訊
const apiKey = '098d6c1474520701a35c4a2a432c259c';  // 請替換為你的 API key
const lat = 25.0330;            // 緯度，例如台北市
const lon = 121.5654;           // 經度，例如台北市

// 建立 API URL，使用 lang=zh_tw 參數來顯示繁體中文
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=zh_tw`;

// 發送 GET 請求
fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        // 取得氣象資料
        const temperature = data.main.temp;
        const description = data.weather[0].description;
        const iconCode = data.weather[0].icon;
        const iconUrl = `http://openweathermap.org/img/wn/${iconCode}@2x.png`; // 取得氣象圖示 URL

        // 更新網頁內容
        document.getElementById('temperature').textContent = `${temperature}°C`;
        document.getElementById('description').textContent = description;
        document.getElementById('weather-icon').src = iconUrl;
    })
    .catch(error => {
        console.error('Error fetching weather data:', error);
        document.getElementById('description').textContent = '載入天氣資料錯誤';
    });