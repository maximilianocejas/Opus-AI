
# Opus AI


**ES**: Chat de inteligencia artificial creado con la API de Gemini AI.

**EN**: Artificial intelligence chat built with Gemini AI API.
## Tech Stack

**Client:** Next.js, TailwindCSS, CSS3, Typescript.

**Tools:** Figma, Gemeni AI API(Google).


## Learning
**ES**: En este proyecto aprendi como usar la API de gemini por primera vez.

**EN**: In this project I learned how to use the Gemini API for the first time.

**Dificultades**: Durante la creación del proyecto, tuve difultades en la creación de la animación de escritura, tenia 2 formas en mente mientras diseñaba el proyecto, la primera era con la propiedad de CSS "white-space" y la segunda mediante la creación de intervalo con Javascript. Una vez empezado el proyecto, la propiedad "white-space" no me ayudo, debido a que como era mucho texto colapsaba y el texto arrancaba desde abajo, solo funcionaba para parrafos de una sola línea. Entonces, decidí crearla con "setInterval", lo que hice fue crear un indice y tomar de referencia el prompt que generaba la API, y, manipular el texto como array, donde en cada intervalo se agregaba una letra.

**Difficulties**: During the creation of the project, I had difficulties in creating the writing animation, I had 2 ways in mind while designing the project, the first was with the CSS property "white-space" and the second was by creating interval with Javascript. Once the project started, the "white-space" property did not help me, because as it was a lot of text it collapsed and the text started from the bottom, it only worked for single line paragraphs. So, I decided to create it with "setInterval", what I did was create an index and take as a reference the notice generated by the API, and manipulate the text as an array, where in each interval a letter was added.
## Use

To deploy this project run

```bash
  git clone https://github.com/maximilianocejas/Opus-AI.git
```
```bash
  cd Opus-AI
```
```bash
  npm install
```
```bash
  npm run dev
```
