import { connect } from 'react-redux';
import { toggleTodo } from "../actions";
import { VisibilityFilter } from "../actions";
import TodoList from "../components/TodoList";

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case VisibilityFilter.SHOW_ALL:
            return  todos;
        case VisibilityFilter.SHOW_COMPLETED:
            return todos.filter(t => t.completed);
        case VisibilityFilter.SHOW_ACTIVE:
            return todos.filter(t => !t.completed);
        default:
            return new Error('Unknown filter: ' + filter);
    }
};

const mapStateToProps = state => ({
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
});

const mapDispatchToProps = dispatch => ({
   toggleTodo: id => dispatch(toggleTodo(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
