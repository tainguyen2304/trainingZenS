 useEffect(() => {
   let newList;

   if(select === 'All') {
     newList = todoList
   }
   else if(select === 'Active') {
     newList = [...todoList].filter(({completed}) => completed === false)
   }
   else if (select === 'Complete') {
     newList = [...todoList].filter(({completed}) => completed === true)
   }
      
 setTodoListOption(newList);
 },[select, todoList])


 const handleSubmit  = (e) => {
   e.preventDefault();

   if(value.todo !== '') {
     const newTodoList = [...todoList, value];
   setTodoList(newTodoList);
   setTodoListOption(newTodoList);
     setValue({...value, todo:''});
   }
 }
 const handleCompleted = (e,todo, completed) => {

   e.preventDefault();

   const index = todoList.findIndex( value => value.todo === todo)
   const newTodo = {
       todo,
       completed:!completed,
       update: false,
   }
   todoList.splice(index,1,newTodo);
   const newList = [...todoList]
   setTodoList(newList);

 }
 const handleDelete = (e,todo) => {
     e.preventDefault();
     const index = todoList.findIndex( value => value.todo === todo)
     todoList.splice(index,1);
     const newList = [...todoList]
   setTodoList(newList);
 }
 const handleUpdate = (e, todo, completed, update) => {
   e.preventDefault();
   const index = todoList.findIndex( value => value.todo === todo)
      
   const newTodo = {
     todo,
     completed,
     update: !update
   };

   setValueUpdate(todo);
   const newList = todoList.map( ({todo, completed}) => ({todo, completed, update: false}))
   newList.splice(index,1,newTodo);
      
   setTodoList(newList);
 }
 const submitUpdate = (e,todo,completed, update) => {
   e.preventDefault();
   const index = todoList.findIndex( value => value.todo === todo)
   const updateTodo = {
     todo: valueUpdate,
     completed,
     update: !update,
   };

   todoList.splice(index,1,updateTodo);
   const newList = [...todoList]
   setTodoList(newList);

 }
 const handleSelect = (e,option) => {
   e.preventDefault();
   setSelect(option)
      
 }
