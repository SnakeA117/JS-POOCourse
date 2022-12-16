class Comment {
  constructor({
    content,
    studentName,
    studentRole = 'estudiante',
  }) {
    this.content = content;
    this.studentName = studentName;
    this.studentRole = studentRole;
    this.likes = 0;
  }
    publish(){
      console.log(this.studentName + ' (' + this.studentRole + ' )');
      // JohnDoe (student)
      // 0 likes
      // Loved the course!
      console.log(this.likes + ' likes');
      console.log(this.content);
    }

}



class PlatziClass {
  constructor({
    name,
    videoID,
  }) {
    this.name = name;
    this.videoID = videoID;
  }

  reproducir(){
  }
  pausar(){
  }
}

class Student {
    constructor({
        name,
        email,
        username,
        twitter = undefined,
        instagram = undefined,
        approvedCourses = [],
        learningPaths = [],
    }) {
        this.name = name;
        this.email = email;
        this.username = username;
        this.socialMedia = {
            twitter,
            instagram,
        };
        this.approvedCourses = approvedCourses;
        this.learningPaths = learningPaths;
    }

    publishComment(commentContent){
      const comment = new Comment({
        content: commentContent,
        studentName: this.name,
        studentRole: 'student',
      });
      comment.publish();
    }
}

class FreeStudent extends Student {
  constructor(props){
    super(props);
  }

  approveCourse(newCourse){
    if (newCourse.isFree) {
      this.approvedCourses.push(newCourse);
    } else {
      console.warn('im sorry' + this.name + ', you can only take free courses')
    }
  }
}

class BasicStudent extends Student {
  constructor(props){
    super(props);
  }

  approveCourse(newCourse){
    if (newCourse.lang !== 'english') {
      this.approvedCourses.push(newCourse);
    } else {
      console.warn('im sorry' + this.name + ', you cant take courses in English')
    }
  }
}

class ExpertStudent extends Student {
  constructor(props){
    super(props);
  }
}

class TeacherStudent extends Student {
  constructor(props){
    super(props);
  }

  approveCourse(newCourse) {
    this.approvedCourses.push(newCourse);
  }

  publishComment(commentContent){
    const comment = new Comment({
      content: commentContent,
      studentName: this.name,
      studentRole: 'profesor',
    });
    comment.publish();
  }
}


// Class Course & LearningPaths 

  class Course {
    #name;
  
    constructor({
      name,
      classes = [],
      isFree = false,
      lang = 'spanish',
    }) {
      this.#name = name;
      this.classes = classes;
      this.isFree = isFree;
      this.lang = lang;
    }
  
    get name() {
      return this.#name;
    }
  
    set name(nuevoNombrecito) {
      if (nuevoNombrecito === 'Curso Malito de Programación Básica') {
        console.error('Web... no');
      } else {
        this.#name = nuevoNombrecito;
      }
    }
  }

  const cursoProgBasica = new Course({
    name: 'Curso gratis de programación básica',
    isFree: true,
  })



  const cursoDefHTML = new Course({
    name: 'Curso definitivo de HTML y CSS',
    lang: 'english',
  })

  const cursoPractfHTML = new Course({
    name: 'Curso practico de HTML y CSS',
  })
  
  class LearningPath {
    constructor({
        name,
        courses = [],
    }) {
        this.name = name;
        this.courses = courses;
    }

    agregarNameRuta(nameNuevo) {
        this.name = nameNuevo;
    }

    agregarCursoRuta(curso) {
        this.courses.push(curso);
    }
}

const escuelaWeb = new LearningPath({
    name: "Escuela de Desarrollo Web",
    courses: [
        cursoProgBasica,
        cursoPractfHTML,
        cursoDefHTML,
    ],
});

const escuelaData = new LearningPath({
    name: "Escuela de Data Science",
    courses: [
        cursoProgBasica,
        "Curso Avanzado de Python",
        "Data Analitic Básico",
    ],
});

const escuelaVgs = new LearningPath({
    name: "Escuela de Videojuegos",
    courses: [
        cursoProgBasica,
        "Curso Básico de Udemy",
        "Curso Avanzado de Udemy",
    ],
});

// New Student

const JohnDoe = new BasicStudent({
    name: 'John Doe',
    username: 'JohnDC',
    email: 'juanito@juanito.com',
    twitter: 'fjohndc',
    learningPaths: [
        escuelaWeb,
        escuelaData,
    ]
}
);

const MichaelJames = new FreeStudent({
    name: 'Michael James',
    username: 'MichaelDC',
    email: 'michel@michael.com',
    instagram: 'xmichaelx',
}
);


const Freddy = new TeacherStudent({
  name: 'Freddy Vega',
  username: 'freddier',
  email: 'f@gep.com',
  instagram: 'freddiervega',
}
);