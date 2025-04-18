body {
  font-family: 'Arial', sans-serif;
  background: linear-gradient(to bottom, #f4c6d1, #d84d5a);
  color: white;
  text-align: center;
  margin: 0;
  padding: 0;
}

header {
  margin-top: 50px;
}

#main-title {
  font-size: 3em;
  font-family: 'Georgia', serif;
  animation: fadeIn 3s;
}

#game-container {
  margin-top: 50px;
}

#balloons-container {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

#start-button {
  background-color: #d84d5a;
  border: none;
  padding: 15px 30px;
  color: white;
  font-size: 1.5em;
  cursor: pointer;
  border-radius: 10px;
}

#start-button:hover {
  background-color: #f4c6d1;
}

#love-letter {
  margin-top: 50px;
  display: none;
  font-size: 1.5em;
  padding: 20px;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 10px;
}

.hidden {
  display: none;
}

footer {
  margin-top: 50px;
  font-size: 1.2em;
  animation: fadeIn 5s ease-in;
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  padding: 10px;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
