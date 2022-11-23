// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Distributor, ADplaceholder, Product, Review, Streamer, Store, User, Post } = initSchema(schema);

export {
  Distributor,
  ADplaceholder,
  Product,
  Review,
  Streamer,
  Store,
  User,
  Post
};