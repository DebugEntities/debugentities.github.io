let i=0;const txt="Welcome to our official site.",speed=60;function type(){i<txt.length&&(document.querySelector("h4").innerHTML+=txt.charAt(i),i++,setTimeout(type,speed))}function openNav(){document.getElementById("myNav").style.height="100%"}function closeNav(){document.getElementById("myNav").style.height="0%"}type();