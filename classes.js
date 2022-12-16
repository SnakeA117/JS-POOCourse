
// Literal Object
// Make Natalia approve another course.

const natalia = {
    name: 'Natalia',
    age: 20,
    approvedCourses: [
        'HTML and CSS Course',
        'Javascript Course',
        'CSS Flex Course',
    ],
    completeCourse(newCourse){ 
        this.approvedCourses.push(newCourse);
    },
};

// Prototype Object

function Student(name, age, approvedCourses){
    this.name = name;
    this.age = age;
    this.approvedCourses = approvedCourses;
}

// Hide method in Prototype of the instance of an object

Student.prototype.completeCourse = (newCourse) => {
    this.approvedCourses.push(newCourse);
}

Student.prototype.removeCourse = function ()  {
    this.approvedCourses.pop();
}

// Create object out of an instance Student

const juanita = new Student(
    'Juanita Alejandra', 
    21,
    [
        'Videogame Course',
        'Character Creation Course',
        'Course to be removed'
    ] 
    );


// Prototype    

function Point2D(x, y) {
        this.x = x;
        this.y = y;
}

// Hide method in Prototype of the instance of an object

Point2D.prototype.sum  = function(dx, dy) {
    this.x += dx;
    this.y += dy;
  }
  
// Create object out of an instance Student
  
  const p1 = new Point2D(1, 2);
  p1.sum(4, 5);
  console.log(p1.x); // 4
  console.log(p1.y); // 6


// Using Class Instead

class Rectangle {
    constructor(height, width) {
      this.height = height
      this.width = width
    }
  
    get area() {
      return this.calcArea()
    }
  
    calcArea() {
      return this.height * this.width
    }
  }
  
  const rectangle = new Rectangle(10, 10)
  
  console.log(rectangle.area) // 100

  // Calculating area of a Square

class Square {
    constructor(width) {
        this.width = width
    }
    get areasq(){
        return this.sqArea()
    }
    sqArea() {
        return Math.pow(this.width, 2)
    }
}

const square = new Square(5)
console.log(square.areasq + 'cm') // 25


// Prototype Student adapted to Class

class Student2{
    constructor({
        name, 
        age, 
        cursosAprobados = [],
        email,

    }) {
        this.name = name;
        this.age = age;
        this.cursosAprobados = cursosAprobados;
        this.email = email;
    }
    approveCourse(newCourse) {
        this.cursosAprobados.push(newCourse);
    }
    deleteCourse(){
        this.cursosAprobados.pop();
    }
}

const JohnDoe = new Student2({
    name: 'John',
    age: 28,
    cursosAprobados: [],
    email: 'Johndoe@gmail.com',
}
);


class Banda {
    constructor({
      nombre,
      generos = [],
    }) {
      this.nombre = nombre;
      this.generos = generos;
      this.integrantes = [];
    }
    agregarIntegrante(integranteNuevo) {
        if(this.integrantes.some(obj=>obj.instrumento==='Bateria')){
            console.log('ya hay un baterista')
        }else{
            this.integrantes.push(integranteNuevo)
        }     
    }
  }
  