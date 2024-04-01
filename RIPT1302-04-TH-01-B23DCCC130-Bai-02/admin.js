
let students = [];
const form = document.getElementById('studentForm');
const tableBody = document.getElementById('studentList');
function handleFormSubmit(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const address = document.getElementById('address').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const classValue = document.getElementById('class').value;

    const student = {
        name,
        age,
        address,
        phone,
        email,
        classValue
    };

    students.push(student);

    renderStudents();
    form.reset();
}

function renderStudents() {
    tableBody.innerHTML = '';

    students.forEach((student, index) => {
        const row = `
            <tr>
                <td>${index + 1}</td>
                <td>${student.name}</td>
                <td>${student.age}</td>
                <td>${student.address}</td>
                <td>${student.phone}</td>
                <td>${student.email}</td>
                <td>${student.classValue}</td>
                <td>
                    <button onclick="editStudent(${index})">Sửa</button>
                    <button onclick="deleteStudent(${index})">Xóa</button>
                </td>
            </tr>
        `;
        tableBody.innerHTML += row;
    });
}

