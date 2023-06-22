const text = "Ed Sheeran may be the quintessential pop star of the 2010s: a "+
"singer/songwriter who seems to acknowledge no boundaries between styles "+
"or eras, creating a sound that's idiosyncratic and personal. Sheeran "+
"borrows from any style that crosses his path -- elements of folk, "+
"hip-hop, pop, dance, soul, and rock can be heard in his big hits 'The A "+
"Team,'' 'Sing,'' 'Thinking Out Loud,' and 'Shape of You' -- which gives "+
"him a broad appeal among different demographics. It also helped elevate "+
"him to international acclaim not long after the release of his 2011 "+
"debut, +.";
let i = 0;

function typeEffect() {
  if (i < text.length) {
    document.getElementById("typing-effect").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeEffect, 100);
  }
}

typeEffect();
