body {
  margin: 0;
  font-family: Arial;
  color: white;
  background: black;
  overflow-x: hidden;
}

/* NAVBAR */
nav {
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 15px;
  background: rgba(10,10,30,0.5);
  backdrop-filter: blur(10px);
  z-index: 9999;
}

.links a {
  color: #b99cff;
  margin: 0 10px;
  text-decoration: none;
}

/* HERO */
.hero {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
  z-index: 2;
}

/* CONTAINER */
.container {
  padding: 100px 20px;
  position: relative;
  z-index: 2;
}

.card {
  background: rgba(255,255,255,0.05);
  padding: 15px;
  margin: 10px 0;
  border-radius: 12px;
  border: 1px solid rgba(255,255,255,0.1);
  backdrop-filter: blur(10px);
}

/* BUTTON */
button {
  margin-top: 10px;
  padding: 10px 15px;
  border: none;
  background: #8b5cf6;
  color: white;
  border-radius: 10px;
  cursor: pointer;
}

/* STAR CANVAS */
canvas {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 0;
  pointer-events: none;
}
