const PATH_TUNES = "./src/assets/tunes/";

const pianoKeys = document.querySelectorAll(".piano-keys .key");
const volume    = document.querySelector(".volume-slider");
const keysCheck    = document.querySelector(".keys-check");

let audio = new Audio(`${PATH_TUNES}a.wav`);

let mapedKeys = []

const playTune = (key) => {

                            if (!mapedKeys.includes(key)){
                                return;
                            }    
    
                            const pressedKey = document.querySelector(`[data-key="${key}"]`);
                            pressedKey.classList.add("active");                            
                            audio.src = `${PATH_TUNES}${key}.wav`;
                            audio.play();
                            setTimeout(() => {pressedKey.classList.remove("active");},150);                            
                        };

const handleKeyDown = (e) => {    
       
    playTune(e.key);    
};

const handleVolume = (e) =>{
    audio.volume = e.target.value;    
}

const hideKeys = () =>{
    pianoKeys.forEach((key) =>{key.classList.toggle("hide")});   
}

pianoKeys.forEach( (key) => {

    key.addEventListener("click", () => playTune(key.dataset.key));
    mapedKeys.push(key.dataset.key);    
});

document.addEventListener("keydown",handleKeyDown);
volume.addEventListener("input", handleVolume);
keysCheck.addEventListener("click", hideKeys);