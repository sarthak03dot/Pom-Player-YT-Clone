
# 🎥 Pom-Player — YouTube Style Video Player

Pom-Player is a YouTube-inspired personal video platform built using **React**, offering a sleek UI, video search via YouTube API, and a responsive layout. Ideal for focused content viewing, productivity, or just building your own custom YouTube clone.

---
## 🖼️ Preview

![Image](https://github.com/user-attachments/assets/4cfba233-13e6-4bba-a479-501bd9b8c804)

<img width="1917" height="955" alt="Image" src="https://github.com/user-attachments/assets/bcd771ca-714b-493f-9ddd-cec0727be47f" />

<img width="1522" height="940" alt="Image" src="https://github.com/user-attachments/assets/9ab277fb-5eb2-4607-aedc-2ba3fa7f0076" />

<img width="1538" height="225" alt="Image" src="https://github.com/user-attachments/assets/1572a077-9efb-4cc3-bba6-6d0d0a72e293" />

---

## 🌟 Features

- 🔎 Live video search with YouTube Data API
- 🎬 Embedded video player with title and description
- 🧾 Responsive layout (mobile & desktop friendly)
- 🧑‍💻 About page & personal branding
- 🌑 Dark mode support

---


---

## 🛠️ Tech Stack

- ⚛️ React
- 🎨 Custom CSS (YouTube-inspired)
-JavaScript
- 🧠 YouTube Data API v3
- ⚙️ React Hooks (`useState`, `useEffect`)

---

## 📂 Folder Structure

```
pom-player/
├── public/
├── src/
│   ├── components/
│   │   ├── SearchBar.js
│   │   ├── VideoItem.js
│   │   ├── VideoList.js
│   │   ├── VideoDetail.js
│   │   ├── Footer.js
│   ├── App.js
│   ├── index.js
│   ├── app.css
├── .env
├── README.md
└── package.json
```

---

## ⚙️ Getting Started

### 1. Clone this repository

```bash
git clone https://github.com/sarthak03dot/pom-player.git
cd pom-player
```

### 2. Install dependencies

```bash
npm install
```

### 3. Get a YouTube API Key

- Go to [Google Developer Console](https://console.developers.google.com/)
- Create a new project
- Enable **YouTube Data API v3**
- Generate an **API key**
- Add it to a `.env` file at the project root:

```
REACT_APP_YOUTUBE_API_KEY=your_api_key_here
```

### 4. Start the app

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the app in the browser.

---

## 🌐 Deployment

You can deploy Pom-Player using:

- [Vercel](https://vercel.com/)
- [Netlify](https://www.netlify.com/)
- GitHub Pages (via `gh-pages`)

---

## ✍️ Author

**Sarthak Singh**  
🎓 Full Stack Developer | MERN Stack  
📧 sarthak03december@gmail.com  


---

## 📄 License

This project is licensed under the **MIT License**.

---

## 📌 Future Plans

- 🌗 Add dark mode toggle
- 💬 Add mocked comments & likes
- 🧾 Save search history & favorites (local storage or backend)
- 👥 Add user login/auth for personalized playlists

---

## 💡 Acknowledgements

- Inspired by the official [YouTube UI](https://youtube.com)
- Thanks to [YouTube Data API](https://developers.google.com/youtube/v3) for video search
