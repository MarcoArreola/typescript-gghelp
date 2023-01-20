//decoradores

function classDecorator<T extends { new (...args: any[]): {} }>(
  constructor: T
) {
  return class extends constructor {
    newProperty = "new property";
    hello = "override";
  };
}

class miSuperClase{
  public miPropiedad: string = 'ABC123';

  imprimir(){
    console.log("Hola_mundo");
  }
}