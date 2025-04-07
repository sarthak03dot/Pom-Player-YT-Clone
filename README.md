
# 🎥 Pom-Player — YouTube Style Video Player

Pom-Player is a YouTube-inspired personal video platform built using **React**, offering a sleek UI, video search via YouTube API, and a responsive layout. Ideal for focused content viewing, productivity, or just building your own custom YouTube clone.

---

## 🌟 Features

- 🔎 Live video search with YouTube Data API
- 🎬 Embedded video player with title and description
- 🧾 Responsive layout (mobile & desktop friendly)
- 🧑‍💻 About page & personal branding
- 🌑 Dark mode support

---

## 🖼️ Preview

![Image](https://github.com/user-attachments/assets/4cfba233-13e6-4bba-a479-501bd9b8c804)


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