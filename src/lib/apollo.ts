import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4ooajdf0obe01xl5umcbb4t/master',
  cache: new InMemoryCache()
})