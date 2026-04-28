function startVoice(){

 const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

 const recognition = new SpeechRecognition();

 recognition.lang = "pt-BR";

 recognition.start();

 recognition.onresult = function(event){

  const text = event.results[0][0].transcript;

  document.getElementById("input").value = text;
 }
}

async function send(){

 const text = document.getElementById("input").value;

 const res = await fetch(`/api/query?q=${text}`);

 const data = await res.json();

 document.getElementById("result").textContent =
  JSON.stringify(data,null,2);

}
