describe("Actions", () => {

  it('we define action types as a string', () => {
    const ADD_TODO = 'ADD_TODO';
    expect("ADD_TODO").toEqual(expect.any(String));
  });

  it('actions are serializable objects', () => {
    const ADD_TODO = 'ADD_TODO';
    const addTodoAction = {
      type: ADD_TODO,
      text: 'Build my first Redux app',
    };

    expect(addTodoAction).toBeInstanceOf(Object);
  });

  it('actions always have a field called type which is a string', () => {
    const TOGGLE_TODO = 'TOGGLE_TODO';
    const toggleTodoAction = {
      type: TOGGLE_TODO,
      index: 5,
    };

    expect(toggleTodoAction).toMatchObject({type: expect.any(String)});
  });

  it('define action creators -aka functions- to create actions', () => {
    const ADD_TODO = 'ADD_TODO';
    const addTodo = (text) => ({
      type: ADD_TODO,
      text
    });

    expect(addTodo("hello world")).toMatchObject({type: expect.any(String)});
  });

});
