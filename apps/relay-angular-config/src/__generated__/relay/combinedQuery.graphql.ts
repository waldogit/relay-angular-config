/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type combinedQueryVariables = {
    fragmentId: string;
};
export type combinedQueryResponse = {
    readonly node: {
        readonly text?: string;
    } | null;
};
export type combinedQuery = {
    readonly response: combinedQueryResponse;
    readonly variables: combinedQueryVariables;
};



/*
query combinedQuery(
  $fragmentId: ID!
) {
  node(id: $fragmentId) {
    __typename
    ... on Todo {
      text
    }
    id
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "fragmentId"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "fragmentId"
  }
],
v2 = {
  "kind": "InlineFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "text",
      "storageKey": null
    }
  ],
  "type": "Todo",
  "abstractKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "combinedQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          (v2/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "combinedQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "__typename",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          },
          (v2/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "46ea4cbfee46e6f4bb23fd1e93b7fc2d",
    "id": null,
    "metadata": {},
    "name": "combinedQuery",
    "operationKind": "query",
    "text": "query combinedQuery(\n  $fragmentId: ID!\n) {\n  node(id: $fragmentId) {\n    __typename\n    ... on Todo {\n      text\n    }\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = '4d48e00a4bf1f8e7a34e4789b5b826bb';
export default node;
