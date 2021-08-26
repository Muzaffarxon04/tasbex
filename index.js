let count = 0;

let u = "Subhanalloh"
let z = "Alhamdulillah"
let y = "Allohu akbar"
let l = "La ilaha illallohu vahdahu la sharika lah, lahul mulku va lahul hamd. Va huva 'ala kulli shayin qodir";
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');
let elcount = document.querySelector('#count');
let elled = document.querySelector('.led')
btns.forEach(function (btn) {
    
    btn.addEventListener('click', function(e){
        console.log(e.current)
        const styles = e.currentTarget.classList;
        
        if(styles.contains("increase")){
            count++;
            
            var audio = new Audio("./audiobtn.mp3");
               
                audio.play();
             
        }


       else {
            count = 0;
        }
        if (count <= 33) {
            counersd.textContent = u
        }
                
        else if (count <= 66) {
            counersd.textContent = z
            }
                    
        else if (count <= 99){
             counersd.textContent = y
            }
        else {
                counersd.textContent = l
                }

value.textContent = count;
        

  })
});