const casinhas = document.querySelectorAll(".casa");
let contador=0;
for(let casa in casinhas){
    casinhas[casa].onclick = clicar;
}

function clicar(){
    contador++;
    if(contador % 2){
        
        this.innerHTML = "X";
        this.style.color="blue";
    }
    else{
        this.innerHTML = "0";
        this.style.color="pink";
    }
    this.onclick=null;
    
    if(contador >=5){
        verificar();
    }
    if(verificar){}
}
function comparar(casa1, casa2, casa3){
    if(casa1.innerHTML===casa2.innerHTML && casa2.innerHTML===casa3.innerHTML && casa1.innerHTML !=""){
        return true;
    }
    return false;
}
function verificar(){
    if(comparar(casinhas[0], casinhas[1], casinhas[2]) ||
    comparar(casinhas[3], casinhas[4], casinhas[5]) ||
    comparar(casinhas[6], casinhas[7], casinhas[8]) ||
    comparar(casinhas[0], casinhas[3], casinhas[6]) ||
    comparar(casinhas[1], casinhas[4], casinhas[7]) ||
    comparar(casinhas[2], casinhas[5], casinhas[8]) ||
    comparar(casinhas[0], casinhas[4], casinhas[8]) ||
    comparar(casinhas[2], casinhas[4], casinhas[6])){
        alert("Venceu!!")
        for(let casa in casinhas){
            casinhas[casa].onclick = null;
        }
        
    }


}




