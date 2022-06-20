import styled from "styled-components";

export const Container = styled.div`
    height:             100vh;
    display:            flex;
    flex-direction: column;
    align-items:        center;
    justify-content:    center;
    text-align:         center;
 
    .logoPadrao{
        margin-bottom 30px;
    }
    .user{
        height:      15%;
        width:      100%;
        max-width: 800px;

        flex-direction: row;
        display:         flex;
        align-items: center;   
        text-align:         center;
        justify-content: space-between;

        border-bottom: solid 1px var(--greyBody);
        border-top: solid 1px var(--greyBody);

    }
    .name{
        color: var(--fontColorWhit);
    }
    .modulo{
        color: var(--fontColor);
    }
    .add {
        height:      10%;
        width:      100%;
        max-width: 800px;

        flex-direction: row;
        display:         flex;
        align-items: center;   
        text-align:         center;
        justify-content: space-between;

        padding: 0 10px 0 0;
    }
    .btnadd{
    width: 30px;
    height 30px;
    background:var(--greyBody);
    border: 1px solid var(--greyBody);
    border-radius 5px;
    font-size: 12px;

    }
    .add > span{
        color:var(--fontColorWhit);

    }

    `;
export const Top = styled.div`
    height:      10%;
    width:      100%;
    max-width: 800px;
    
    flex-direction: row;
    display:         flex;
    align-items: center;   
    text-align:         center;
    justify-content: space-between;
    
    
    padding: 0 10px 0 0;
    margin: 0 0 20px 0;
   
.back{
    width: 80px;
    height 40px;
    background:var(--greyBody);
    border: 1px solid var(--greyBody);
    border-radius 5px;
    font-size: 12px;
    
}`
export const Principal = styled.div`
    height:      65%;
    width:      100%;
    max-width: 800px;

    display:         flex;
    flex-direction: column;
    align-items: center;   
    text-align:         center;
    justify-content: start;
    
    .content{
        width:      100%;
        min-height:     70px;
        background:  var(--greyBody);
        color: var(--fontColorWhite);
        display:         flex;
        flex-direction: column;
         align-items: center;   
        text-align:         center;
        justify-content: center;

 


    }
    .card{
        width: 80%;
        min-width:732px;
        min-height:     50px;
        background: var(--greyBack);
        
        border-radius 5px;

        flex-direction: row;
        display:         flex;
        align-items: center;   
        text-align:         center;
        justify-content: space-between;
        padding: 0 10px;
    }
    .technology{
        color: var(--fontColorWhit);
    }
    .nivel{
        color: var(--fontColor);
    }
    .nivel > button{
    width: 30px;
    height 30px;
    background:var(--greyBody);
    border: 1px solid var(--greyBody);
    border-radius 5px;
    font-size: 12px;
    margin-left: 10px;
    }

`
