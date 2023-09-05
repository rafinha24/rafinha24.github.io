function calculate(){
    var heigh=(document.getElementById("heigh").value)/100
    var weight=document.getElementById("weight").value;
    console.log(heigh)
    console.log(weight)

    var imc= weight / heigh ** 2;
    if(imc<18.5){
        window.alert("𝕍𝕠𝕔ê 𝕖𝕤𝕥á 𝕒𝕓𝕒𝕚𝕩𝕠 𝕕𝕠 𝕡𝕖𝕤𝕠")
    }else if(imc<24.9){
        window.alert("𝕍𝕠𝕔ê 𝕖𝕤𝕥á 𝕔𝕠𝕞 𝕠 𝕡𝕖𝕤𝕠 𝕚𝕕𝕖𝕒𝕝")
    }else if(imc<29.9){
        window.alert("𝕍𝕠𝕔ê 𝕖𝕤𝕥á 𝕔𝕠𝕞 𝕤𝕠𝕓𝕣𝕖𝕡𝕖𝕤𝕠")
    }else if(imc<39.9){
        window.alert("𝕍𝕠𝕔ê 𝕖𝕤𝕥á 𝕔𝕠𝕞 𝕠𝕓𝕖𝕤𝕚𝕕𝕒𝕕𝕖 𝕘𝕣𝕒𝕦 𝕀")
    }else if(imc>40){
        window.alert("𝕍𝕠𝕔ê 𝕖𝕤𝕥á 𝕔𝕠𝕞 𝕠𝕓𝕖𝕤𝕚𝕕𝕒𝕕𝕖 𝕞ó𝕣𝕓𝕚𝕕𝕒")
    }

}