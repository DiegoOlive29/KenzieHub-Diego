import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
    margin:                        0;
    padding:                       0;
    box-sizing:           border-box;
    outline:                       0;     
    font-family: 'Inter', sans-serif;
 }
:root{
    --greyBack:     #121214;
    --greyBody:     #212529;
    --greyCamp:     #343B41;
    --greyBtt:      #868E96;
    --pinkPrimary:  #FF577F;
    --pinkFocus:    #FF427F;
    --pinkNegative: #59323F;    
    --fontColor:    #868E96;
    --fontColorWhit:#F8F9FA;
}

body{
    background: var(--greyBack);
}

button{
    cursor:              pointer;
    color:  var(--fontColorWhit);
}

body,input,button{
    font-family: 'Inter', sans-serif;
    font-size:                  1rem;
}
h1,h2,h3,h4,h5,h6{
    font-family: 'Inter', sans-serif;
    font-weight:                 700;

}
 `;
