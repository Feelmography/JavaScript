document.addEventListener("DOMContentLoaded", () => {
  const inputs = document.querySelectorAll("input");
  const tBodyAddr = document.querySelector("tbody.addr");
  const btnAdd = document.querySelector("button.add");

  let studentList = [];

  const addStudent = () => {
    const student = {
      num: inputs[0].value,
      name: inputs[1].value,
      major: inputs[2].value,
      grade: inputs[3].value,
      tel: inputs[4].value,
      addr: inputs[5].value,
    };
    studentList.push(student);
    console.table(studentList);
  };

  const saveStudent = () => {
    if (studentList) {
      localStorage.setItem("studentInfo", JSON.stringify(studentList));
    }
  };

  const loadStudent = () => {
    const Studentload = localStorage.getItem("studentInfo");

    studentList = JSON.parse(Studentload);

    for (let i = 0; i < studentList.length; i++) {
      const student = studentList[i];
      const tr = document.createElement("TR");

      let td = document.createElement("TD");
      td.textContent = student.num;
      tr.appendChild(td);

      td = document.createElement("TD");
      td.textContent = student.name;
      tr.appendChild(td);

      td = document.createElement("TD");
      td.textContent = student.major;
      tr.appendChild(td);

      td = document.createElement("TD");
      td.textContent = student.grade;
      tr.appendChild(td);

      td = document.createElement("TD");
      td.textContent = student.tel;
      tr.appendChild(td);

      td = document.createElement("TD");
      td.textContent = student.addr;
      tr.appendChild(td);

      tBodyAddr.appendChild(tr);
    }
  };

  const printStudent = () => {
    tBodyAddr.textContent = "";

    for (let i = 0; i < studentList.length; i++) {
      const student = studentList[i];
      const tr = document.createElement("TR");

      let td = document.createElement("TD");
      td.textContent = student.num;
      tr.appendChild(td);

      td = document.createElement("TD");
      td.textContent = student.name;
      tr.appendChild(td);

      td = document.createElement("TD");
      td.textContent = student.major;
      tr.appendChild(td);

      td = document.createElement("TD");
      td.textContent = student.grade;
      tr.appendChild(td);

      td = document.createElement("TD");
      td.textContent = student.tel;
      tr.appendChild(td);

      td = document.createElement("TD");
      td.textContent = student.addr;
      tr.appendChild(td);

      tBodyAddr.appendChild(tr);
    }
  };

  btnAdd?.addEventListener("click", () => {
    addStudent();
    saveStudent();
    printStudent();
  });

  loadStudent();
});
