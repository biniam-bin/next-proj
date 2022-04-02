import '../styles/globals.css'
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client"
import Wrapper from "../components/Wrapper"

const client = new ApolloClient({
  uri: "https://shoplly-api.techawks.io/graphql",
  cache: new InMemoryCache()
})

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Wrapper Component={ Component } pageProps={pageProps}/>
    </ApolloProvider>

  )
}

export default MyApp
