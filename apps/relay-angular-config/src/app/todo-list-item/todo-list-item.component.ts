import { Component, Input } from '@angular/core';
import { Fragment } from 'relay-angular';
import { graphql } from 'relay-runtime';
import { Todo } from '../todo';
import { todoListItem_todo$key, todoListItem_todo$data } from '../../__generated__/relay/todoListItem_todo.graphql';
import changeTodoStatus from '../mutations/changeTodoStatus';
import removeTodo from '../mutations/removeTodo';
import { ActivatedRoute, Router } from '@angular/router';

const fragmentNode = graphql`
    fragment todoListItem_todo on Todo {
        complete
        id
        text
    }
`;

const fragmentNodeUser = graphql`
    fragment todoListItem_user on User {
        id
        userId
        totalCount
        completedCount
    }
`;

@Component({
    selector: 'app-todo-list-item',
    templateUrl: './todo-list-item.component.html',
    styleUrls: ['./todo-list-item.component.css'],
})
export class TodoListItemComponent {
  constructor(private route: ActivatedRoute, private router: Router) {}
    @Input()
    fragmentRef: todoListItem_todo$key;

    @Input()
    fragmentRefUser;

    @Fragment<todoListItem_todo$key>(function() {
        return {
            fragmentNode,
            fragmentRef: this.fragmentRef,
        };
    })
    todo: todoListItem_todo$data;

    @Fragment(function() {
        return {
            fragmentNode: fragmentNodeUser,
            fragmentRef: this.fragmentRefUser,
        };
    })
    user;

    toggleTodoComplete() {
        changeTodoStatus.commit(!this.todo.complete, this.todo, this.user);
    }
    showWithYours() {
      console.log('show with yours');
      this.router.navigate([this.todo.id], { relativeTo: this.route})
    }

    removeTodo(todo: todoListItem_todo$data) {
        removeTodo.commit(todo, this.user);
    }
}
