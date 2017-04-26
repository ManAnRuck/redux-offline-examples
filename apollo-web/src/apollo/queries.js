
import { gql } from 'react-apollo';

export const allTodoesQuery = gql`
  {
    allTodoes {
      id
      text
      complete
    }
  }
`;
