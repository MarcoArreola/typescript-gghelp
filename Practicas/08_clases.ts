class persona {
  constructor(public nombre: string, public direccion: string) {}
}

class profesorClass extends persona {
  constructor(
    public matricula: string,
    public edad: number,
    public materias: string
  ) {
    super('Arreola', ' 212');
  }
}

const profe = new profesorClass('2020030112', 21, 'Desarrollo web');
console.log(profe);
