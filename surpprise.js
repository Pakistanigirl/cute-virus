
function showAlert() {
    const alert = document.getElementById('alert');
    alert.style.display = 'block';
    setTimeout(() => {
        alert.style.display = 'none';
    }, 4000);
}

    
    setInterval(() => {
        document.getElementsByTagName('title').textContent='Cute-Virus'; 
        // document.title='dangerous-virus'; 
    }, 1000);
    


// flickerScreen();
showAlert();
const messages = ["Hi I am a newly built virus....", "Nice to meet you....", "I will always be in your device....","Now you will never feel alone....","I will assist you.... ","I am sure you are feeling happy....","So let's be friends forever....","Because I know everything about you......"];
let index = 0;

// Function to handle button clicks
function handleClick() {
    setInterval(() => {
        document.getElementById("message").textContent = messages[index];
        index++;
          
    }, 2000);
 
    // if (index >= messages.length) {
    //     document.getElementById("message").textContent("");
    // }
}
 handleClick();
//  ======================
 const trigger = document.getElementById('trigger');

 trigger.addEventListener('mouseover', () => {
   document.addEventListener('mousemove', erraticCursor);

   setTimeout(() => {
     document.removeEventListener('mousemove', erraticCursor);
   }, 5000);
 });

 function erraticCursor(event) {
//    const { clientX, clientY } = event;
//    const offsetX = (Math.random() - 0.5) * 20;
//    const offsetY = (Math.random() - 0.5) * 20;
   event.target.style.cursor = `progress`;
 }