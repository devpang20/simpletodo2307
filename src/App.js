import Header from "./Header.js";
import TodoForm from "./TodoForm.js";
import TodoList from "./TodoList.js";

/*
    App 컴포넌트 
    Header Header TodoList import
*/
export default function App({ $target }) {
    const initialText = 'Todo-app 만들기';
    const initialState = ['123', '456'];
    new Header({
        $target,
        text: initialText
    });
    new TodoForm({
        $target,
        onSubmit: (text) => {
            const nextState = [...todoList.state, text];
            todoList.setState(nextState);
        }
    });
    const todoList = new TodoList({$target, initialState});
}