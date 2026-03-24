import { AppDataSource } from "./data-source"
import { Teacher } from "./entity/Teacher"
import { Course } from "./entity/Course"
import { Student } from "./entity/Student"
import { StudentCard } from "./entity/StudentCard"

AppDataSource.initialize().then(async () => {
    console.log("Adatbázis kapcsolat sikeresen felépítve!");

    const teacherRepo = AppDataSource.getRepository(Teacher);
    const courseRepo = AppDataSource.getRepository(Course);
    const studentRepo = AppDataSource.getRepository(Student);
    const studentCardRepo = AppDataSource.getRepository(StudentCard);

    const teacher1 = new Teacher();
    teacher1.name = "Kovács Péter";
    teacher1.email = "kovacs.peter@egyetem.hu";
    teacher1.department = "Informatika Intézet";
    teacher1.office = "I/112";

    const teacher2 = new Teacher();
    teacher2.name = "Nagy Anna";
    teacher2.email = "nagy.anna@egyetem.hu";
    teacher2.department = "Matematika Intézet";
    teacher2.office = "M/204";

    await teacherRepo.save([teacher1, teacher2]);
    console.log("Tanárok sikeresen elmentve.");

    const course1 = new Course();
    course1.name = "Webprogramozás";
    course1.code = "WEB101";
    course1.credit = 5;
    course1.maxStudents = 30;
    course1.teacher = teacher1;

    const course2 = new Course();
    course2.name = "Adatbázis rendszerek";
    course2.code = "DB201";
    course2.credit = 4;
    course2.maxStudents = 25;
    course2.teacher = teacher1;

    const course3 = new Course();
    course3.name = "Diszkrét matematika";
    course3.code = "DIMAT101";
    course3.credit = 6;
    course3.maxStudents = 50;
    course3.teacher = teacher2;

    await courseRepo.save([course1, course2, course3]);
    console.log("Kurzusok sikeresen elmentve.");

    const student1 = new Student();
    student1.name = "Szabó Bence";
    student1.neptun = "A1B2C3";
    student1.email = "szabo.bence@student.hu";
    student1.courses = [course1, course2];

    const student2 = new Student();
    student2.name = "Tóth Lilla";
    student2.neptun = "X9Y8Z7";
    student2.email = "toth.lilla@student.hu";
    student2.courses = [course3];

    const student3 = new Student();
    student3.name = "Varga Gábor";
    student3.neptun = "Q1W2E3";
    student3.email = "varga.gabor@student.hu";
    student3.courses = [course1, course3];

    await studentRepo.save([student1, student2, student3]);
    console.log("Hallgatók (és kurzusfelvételeik) sikeresen elmentve.");

    const card1 = new StudentCard();
    card1.cardNumber = "DI-001";
    card1.issueDate = new Date("2023-09-01");
    card1.expiryDate = new Date("2027-10-31");
    card1.status = "Érvényes";
    card1.student = student1;

    const card2 = new StudentCard();
    card2.cardNumber = "DI-002";
    card2.issueDate = new Date("2022-09-01");
    card2.expiryDate = new Date("2026-10-31");
    card2.status = "Érvényes";
    card2.student = student2;

    const card3 = new StudentCard();
    card3.cardNumber = "DI-003";
    card3.issueDate = new Date("2024-02-01");
    card3.expiryDate = new Date("2028-03-31");
    card3.status = "Érvényes";
    card3.student = student3;

    await studentCardRepo.save([card1, card2, card3]);
    console.log("Diákigazolványok sikeresen elmentve.");

    console.log("\n-> Minden szükséges adat sikeresen betöltve a MySQL adatbázisba!");

}).catch(error => console.log("Hiba történt az adatbázis művelet során: ", error))