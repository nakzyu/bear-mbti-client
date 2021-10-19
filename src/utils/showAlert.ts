// "클립보드에 복사 되었습니다."

import theme from "../styles/theme";

export default function showAlert(text: string): void {
  const textContainer = document.createElement("div");
  textContainer.translate = true;

  textContainer.style.position = "fixed";
  textContainer.style.width = "100%";
  textContainer.style.height = "100%";
  textContainer.style.top = "0";
  textContainer.style.left = "0";
  textContainer.style.right = "0";
  textContainer.style.bottom = "0";
  textContainer.style.zIndex = "100";
  textContainer.style.pointerEvents = "none";

  const p = document.createElement("p");
  p.innerText = text;
  p.style.position = "absolute";
  p.style.top = "50%";
  p.style.left = "50%";
  p.style.fontSize = "20px";
  p.style.transform = "translate(-50%,-50%)";
  p.style.background = theme.MAIN_COLOR;
  p.style.color = "white";
  p.style.padding = "5px";

  textContainer.appendChild(p);

  document.body.appendChild(textContainer);
  let opcaity = 1;
  const intv = setInterval(() => {
    opcaity *= 0.95;
    textContainer.style.opacity = `${opcaity}`;
    if (opcaity < 0.2) {
      document.body.removeChild(textContainer);
      clearInterval(intv);
    }
  }, 10);
  return;
}
