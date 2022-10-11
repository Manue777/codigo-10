const estudiantes = [
    {
      id: 1,
      nombre: "Paolo",
      edad: 25,
    },
    {
      id: 2,
      nombre: "Jose",
      edad: 20,
    },
    {
      id: 3,
      nombre: "Miguel",
      edad: 25,
    },
    {
      id: 4,
      nombre: "Eduardo",
      edad: 20,
    },
    {
      id: 5,
      nombre: "Raul",
      edad: 20,
    },
  ];
  
  function filtarDatos () {
    const datosMapeados = estudiantes.map((estudiante)=> {
        return {
            id:estudiante.id,
            nombre: estudiante.nombre,
        };
    });

    console.log(datosMapeados);

    const datosFiltrados = estudiantes.filter ((estudiante) => {estudiante.id >2
    });

    console.log(datosFiltrados);

    let alumnosMayoresA22 = 0;

    const datosForeacheados = estudiantes.forEach((estudiante)=>{
        if (estudiante.edad)>22 {
            alumnosMayoresA22 = alumnosMayoresA22 +1;
        }
    });

    const datosOrdenadosAlfabeticamente = estudiantes.sort ((a,b) => {
        if (a.nombre < b.nombre){
            return -1
        } 
        if (a.nombre > b.nombre){
            return 1;
    });

    console.log(datosOrdenadosAlfabeticamente);
  }

  filtarDatos();
