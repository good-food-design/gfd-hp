import { ApolloLink } from 'apollo-link'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

export default () => {
  const httpLink = new HttpLink({
    uri: 'https://admin.gfd.jp/graphql',
  })

  // middleware
  const middlewareLink = new ApolloLink((operation, forward) => {
    return forward(operation)
  })
  // const link = middlewareLink.concat(httpLink)
  const link = ApolloLink.from([middlewareLink, httpLink])
  return {
    link,
    cache: new InMemoryCache(),
  }
}
