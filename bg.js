function changeBackgroundColor() {
    const colors = ["#FF5733", "#33FF57", "#3357FF", "#F0FF33", "#FF33F0"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}