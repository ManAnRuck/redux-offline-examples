import { ApolloClient, createNetworkInterface } from 'react-apollo';

const networkInterface = createNetworkInterface({
  uri: 'https://api.graph.cool/simple/v1/cj16h77cmi1pv0118y0gks0w3'
});

const client = new ApolloClient({
  networkInterface: networkInterface
});

export default client;
