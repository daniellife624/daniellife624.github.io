const ap = new APlayer({
  container: document.getElementById("aplayer"),
  fixed: false,
  autoplay: false,
  theme: "#b7daff",
  loop: "all",
  order: "list",
  preload: "auto",
  volume: 0.7,
  mutex: true,
  listFolded: false,
  listMaxHeight: "200px",
  lrcType: 3,
  audio: [
    {
      name: "Helloween",
      artist: "萬聖節",
      url: "/images/Halloween Night.mp3",
      cover: "/images/cover photo.jpg",
    },
    {
      name: "Monday",
      artist: "星期一",
      url: "/images/Monday.mp3",
      cover: "/images/mockup.jpg",
    },
  ],
});
