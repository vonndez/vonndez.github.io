let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 80,
});
 
typewriter
  .pauseFor(2600)
  .typeString('Compositora | Artista Sonora | Programadora Web en Technolochicas')
  .pauseFor(220)
  .deleteChars(15)
  .start();
