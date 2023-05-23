import { TAction } from "../types/action";

export default (posts = [], action: TAction) => {
     switch (action.type) {
          case 'FETCH_ALL':
               return posts;
          case 'CREATE':
               return posts;
          default:
               return posts;
     }
}