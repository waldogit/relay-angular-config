import { Component, OnInit } from '@angular/core';
import { Query, RenderProps } from 'relay-angular';
import { tap } from 'rxjs/operators';
import {
  combinedQuery,
  combinedQueryResponse,
  combinedQueryVariables,
} from '../../__generated__/relay/combinedQuery.graphql';
import { graphql } from 'relay-runtime';
import { ActivatedRoute } from '@angular/router';
import { fromEventPattern } from 'rxjs';

const todoItemQuery = graphql`
  query combinedQuery($fragmentId: ID!) {
    node(id: $fragmentId) {
      ... on Todo {
        text
      }
    }
  }
`;

@Component({
  selector: 'relay-angular-config-combined',
  templateUrl: './combined.component.html',
  styleUrls: ['./combined.component.css'],
})
export class CombinedComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}
  private fragmentId: string;

  @Query<combinedQuery>(function () {
    return {
      query: todoItemQuery,
      variables: { fragmentId: this.fragmentId },
    };
  })
  result: RenderProps<combinedQuery>;

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        tap((pm) => {
          this.fragmentId = pm.get('todo');
        })
      )
      .subscribe();
  }
}
