//Clase calculadora
class Calculadora{ //declaramos la clase o molde para pbjeto
    constructor(numero1,numero2){//funcion donde se declaran parametros
        this.Numero1=numero1;//atributos
        this.Numero2=numero2;//atributos
    }
    suma(){//funcion atributo 
        return parseInt(this.Numero1) + parseInt(this.Numero2);//retorna el resultado
    }
    //PROMESA SUMA ASINCRONA
    SumaAsincrona(){
        var objeto = this; //aqui toma todo lo de la clase una vez ya instansciada
        
            return new Promise(function(resolve,reject){//promesa
                                                        try{//intenta hacer la suma
                                                            resolve(parseInt(objeto.Numero1) + parseInt(objeto.Numero2));
                                                            }
                                                catch(err){//si no hace la suma, pasa lo siguiente:
                                                            reject(err.message);
                                                            }
            });
    }
    resta(){//funcion atributo 
        return parseInt(this.Numero1) - parseInt(this.Numero2);//retorna el resultado
    }
    //PROMESA RESTA ASINCRONA
    RestaAsincrona(){
        var objeto = this; //aqui toma todo lo de la clase una vez ya instansciada
        
            return new Promise(function(resolve,reject){//promesa
                                                        try{//intenta hacer la resta
                                                            resolve(parseInt(objeto.Numero1) - parseInt(objeto.Numero2));
                                                            }
                                                catch(err){//si no hace la suma, pasa lo siguiente:
                                                            reject(err.message);
                                                            }
            });
    }
    multiplicacion(){//funcion atributo 
        return parseInt(this.Numero1) * parseInt(this.Numero2);//retorna el resultado
    }
    //PROMESA MULTIPLICACION ASINCRONA
    MultiplicacionAsincrona(){
        var objeto = this; //aqui toma todo lo de la clase una vez ya instansciada
        
            return new Promise(function(resolve,reject){//promesa
                                                        try{//intenta hacer la multiplicacion
                                                            resolve(parseInt(objeto.Numero1) * parseInt(objeto.Numero2));
                                                            }
                                                catch(err){//si no hace la suma, pasa lo siguiente:
                                                            reject(err.message);
                                                            }
            });
    }
    division(){//funcion atributo 
        return parseInt(this.Numero1) / parseInt(this.Numero2);//retorna el resultado
    }
    //PROMESA DIVISION ASINCRONA
    DivisionAsincrona(){
        var objeto = this; //aqui toma todo lo de la clase una vez ya instansciada
        
            return new Promise(function(resolve,reject){//promesa
                                                        try{//intenta hacer la division
                                                            resolve(parseInt(objeto.Numero1) / parseInt(objeto.Numero2));
                                                            }
                                                catch(err){//si no hace la suma, pasa lo siguiente:
                                                            reject(err.message);
                                                            }
            });
    }

}
//Proceso de calculo
//Declaramos variables globales
let G_Numero1 = 0;
let G_Numero2 = 0;
let G_Signo = "";
//click en los numeros
function numeros(a){
    document.getElementById("resultado").value = document.getElementById("resultado").value+a;
}
function signo(b){
    G_Numero1 = document.getElementById("resultado").value;
    G_Signo = b;
    document.getElementById("resultado").value="";
}
function igual(){
    G_Numero2 = document.getElementById("resultado").value;
    let claseinstanciada = new Calculadora(G_Numero1,G_Numero2);
    switch (G_Signo){
    case '+':
    //document.getElementById("resultado").value = claseinstanciada.suma();
            claseinstanciada.SumaAsincrona().then(function(response){
                document.getElementById('resultado').value = response;//manda el resultado
            }, function(error){//manda el error
                document.getElementById("No se pudo");
            });
    break;
    case '-':
    //document.getElementById("resultado").value = claseinstanciada.resta();
            claseinstanciada.RestaAsincrona().then(function(response){
                document.getElementById('resultado').value = response;
            }, function(error){
                document.getElementById("No se pudo");
            });
    break;
    case '*':
    //document.getElementById("resultado").value = claseinstanciada.multiplicacion();
            claseinstanciada.MultiplicacionAsincrona().then(function(response){
                document.getElementById('resultado').value = response;
            }, function(error){
                document.getElementById("No se pudo");
            });
    break;
    case '/':
    //document.getElementById("resultado").value = claseinstanciada.division();
            claseinstanciada.DivisionAsincrona().then(function(response){
                document.getElementById('resultado').value = response;
            }, function(error){
                document.getElementById("No se pudo");
            });
    break;
    }
}
