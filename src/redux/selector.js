export const selectBalance = (state) => state.account.balance;
export const selectTodoArr = (state) => state.todo.todoList;
export const selectThemeColor = (state) => state.theme.color;
export const selectorFilter = (state) => state.filters;
export const selectorLoading = (state) => state.todo.isLoading;
export const selectorError = (state) => state.todo.error;
