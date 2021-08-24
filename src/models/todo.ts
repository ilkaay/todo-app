
class Todo {
  id: string;
  text: string;
  status: string;

  constructor(todoText: string, todoStatus: string) {
    this.text = todoText;
    this.id = new Date().toISOString();
    this.status = todoStatus;
  }

  public toggleStatus(): Todo {
    this.status = this.status === "active" ? "completed" : "active";
    return this;
  }

}

export default Todo;