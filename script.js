const courses = [
    {
        name : "Complete Angular",
        price : "5.3"
    },
    {
        name : "Complete Front End Developer",
        price : "6.8"
    },
    {
        name : "Complete FullStack Developer",
        price : "12.5"
    },
    {
        name : "Complete Python",
        price : "2.8"
    },
    {
        name : "Complete ReactJS",
        price : "3.5"
    },
    {
        name : "Complete Back End Developer",
        price : "7.5"
    },
]


function generateLIST() {
    const ul = document.querySelector(".list-group");
    ul.innerHTML = "";
    courses.forEach((course) => {
        const li = document.createElement("li");
        li.classList.add("list-group-item");

        const name = document.createTextNode( course.name);
        li.appendChild(name);

        const span = document.createElement("span");
        span.classList.add("float-right");
        const price = document.createTextNode("$" + course.price);
        span.appendChild(price);

        li.appendChild(span);
        ul.appendChild(li);
      });
};
// generateLIST();

 window.addEventListener("load", generateLIST);
 
 const button = document.querySelector(".sort-btn");

 button.addEventListener("click", () => {
    courses.sort((a,b) => b.price - a.price);
    generateLIST();
 });