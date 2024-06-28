$(function () {
  const todoInput = $(".todo-input")
  const todoButton = $(".todo-button")
  const todoList = $(".todoList")
  const filterOption = $(".filter-todos")

  loadTasksFromCookies()

  
  todoButton.on('click', addTodo)
  todoList.on('click', checkRemove)
  filterOption.on('change', filterTodos)

  
  function addTodo() {   
    const todoText = todoInput.val().trim()
    
    if (todoText !== "") {
      const todoDiv = $("<div>").addClass("todo")
      const newTodo = `
          <li>${todoInput.val()}</li>
          <span><i class="far fa-trash-alt"></i></span>
          <span><i class="far fa-check-square"></i></span>`
      todoDiv.html(newTodo)
      todoList.append(todoDiv)
      todoInput.val("")
      
     
      saveTasksToCookies()
    } else {
      alert("Write down the task!")
    }
  }

  function checkRemove() {
    const classList = [...$(event.target).prop('classList')]
    const item = $(event.target)

    if (classList[1] === 'fa-trash-alt') {
      item.parent().parent().remove()
      saveTasksToCookies()
    } else if (classList[1] === 'fa-check-square') {
      const todo = item.parent().parent()
      todo.toggleClass('completed')
      saveTasksToCookies()
    }
  }

  function filterTodos() {
    const todos = [...todoList.children()]
    todos.forEach((todo) => {
      switch (filterOption.val()) {
        case "all":
          $(todo).css('display', 'flex')
          break
        case "completed":
          if ($(todo).hasClass("completed")) {
            $(todo).css('display', 'flex')
          } else {
            $(todo).css('display', 'none')
          }
          break;
        case "unCompleted":
          if (!$(todo).hasClass("completed")) {
            $(todo).css('display', 'flex')
          } else {
            $(todo).css('display', 'none')
          }
          break
      }
    })
  }

  function saveTasksToCookies() {
    const todos = todoList.children().map(function() {
      return $(this).find('li').text()
    }).get()

    document.cookie = "todos=" + JSON.stringify(todos)
  }

  function loadTasksFromCookies() {
    const cookies = document.cookie.split(';')
    const todosCookie = cookies.find(cookie => cookie.trim().startsWith('todos='))

    if (todosCookie) {
      const todos = JSON.parse(todosCookie.split('=')[1])
      
      todos.forEach(todo => {
        const todoDiv = $("<div>").addClass("todo")
        const newTodo = `
            <li>${todo}</li>
            <span><i class="far fa-trash-alt"></i></span>
            <span><i class="far fa-check-square"></i></span>`
        todoDiv.html(newTodo)
        todoList.append(todoDiv)
      });
    }
  }
})
