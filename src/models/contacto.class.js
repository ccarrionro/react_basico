export class Contacto {
    nombre = '';
    apellido = '';
    email= '';
    conectado= Boolean;
  
    constructor(nombre, apellido, email, conectado) {
      this.nombre = nombre;
      this.apellido = apellido;
      this.email = email;
      this.conectado = conectado;
    }
  /*
    getName(): string {
      return `${this.firstName} ${this.lastName}`;
    }
  
    getYearlySalary(): number {
      return 12 * this.salary;
    }
    */
  }