function Student(nombre, correo, promedio) {
    this.nombre = nombre;
    this.correo = correo;
    this.promedio = promedio;
    
    
    this.validarPromedio = function() {
      if (this.promedio >= 70) {
        return "Aprobado";
      } else {
        return "Reprobado";
      }

       };

       this.obtenerUsuario = function() {
        let mail = this.correo.split('@'); //split divide string
        return mail[0];
      };
    }

  
  
  let  studentOne = new Student("casa@gmail.com","perez", 50);
  alert("juan Perez ha" +  studentOne.validarPromedio());

  let studen = new Student ("juan", "juan@gmail.com"  );
alert("su correo es"+studen.obtenerUsuario()) 