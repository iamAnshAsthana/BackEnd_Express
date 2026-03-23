    export function getStudents(req, res) {
    res.status(200).send("All data of students");
    }

    export function createStudents(req, res) {
    res.status(200).send("Students record created");
    }

    export function getStudent(req, res) {
    res.status(200).send("Student record created");
    }

    export function updateStudent(req, res) {
    let studentId = req.params.id;
    res.status(200).send("Student record updated with id: " + studentId);
    }

    export function deleteStudent(req, res) {
    let studentId = req.params.id;
    res.status(200).send("Student record updated with id: " + studentId);
    }