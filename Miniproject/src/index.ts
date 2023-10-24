interface Todo {
  text: string;
  completed: boolean;
}

const btn = document.getElementById("btn");
const input = document.getElementById("todoinput")! as HTMLInputElement;
const form = document.querySelector("form")!;
const list = document.querySelector("ul")!;

const todos: Todo[] = readTodos();
todos.forEach((todo) => createTodo(todo));

function readTodos(): Todo[] {
  const todosJSON = localStorage.getItem("todos");
  if (todosJSON === null) return [];
  return JSON.parse(todosJSON);
}

function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}
// (<HTMLInputElement>input).value;

// btn?.addEventListener("click", function () {
//   alert(input.value);
//   input.value = "";
// });

// const mystery: unknown = "Hello world!!!";

// const numChards = (mystery as string).length

function submitHandler(e: SubmitEvent) {
  e.preventDefault();
  const newTodo: Todo = {
    text: input.value,
    completed: false,
  };
  createTodo(newTodo);
  todos.push(newTodo);
  input.value = "";
  saveTodos();
}

function createTodo(todo: Todo) {
  const newLI = document.createElement("li");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = todo.completed;
  checkbox.addEventListener("change", function () {
    todo.completed = checkbox.checked;
    saveTodos();
  });
  newLI.append(todo.text);
  newLI.append(checkbox);
  list.append(newLI);
}

form.addEventListener("submit", submitHandler);
