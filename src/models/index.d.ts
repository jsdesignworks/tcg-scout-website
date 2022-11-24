import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection } from "@aws-amplify/datastore";





type EagerDistributor = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Distributor, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly banner?: string | null;
  readonly name?: string | null;
  readonly contactemail?: string | null;
  readonly contactphone?: string | null;
  readonly bio?: string | null;
  readonly location?: string | null;
  readonly IPlocatio?: string | null;
  readonly Availability?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyDistributor = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Distributor, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly banner?: string | null;
  readonly name?: string | null;
  readonly contactemail?: string | null;
  readonly contactphone?: string | null;
  readonly bio?: string | null;
  readonly location?: string | null;
  readonly IPlocatio?: string | null;
  readonly Availability?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Distributor = LazyLoading extends LazyLoadingDisabled ? EagerDistributor : LazyDistributor

export declare const Distributor: (new (init: ModelInit<Distributor>) => Distributor) & {
  copyOf(source: Distributor, mutator: (draft: MutableModel<Distributor>) => MutableModel<Distributor> | void): Distributor;
}

type EagerADplaceholder = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ADplaceholder, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title?: string | null;
  readonly subtitle?: string | null;
  readonly image?: string | null;
  readonly link?: string | null;
  readonly createdby?: string | null;
  readonly locationcreated?: string | null;
  readonly usericon?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyADplaceholder = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ADplaceholder, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title?: string | null;
  readonly subtitle?: string | null;
  readonly image?: string | null;
  readonly link?: string | null;
  readonly createdby?: string | null;
  readonly locationcreated?: string | null;
  readonly usericon?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ADplaceholder = LazyLoading extends LazyLoadingDisabled ? EagerADplaceholder : LazyADplaceholder

export declare const ADplaceholder: (new (init: ModelInit<ADplaceholder>) => ADplaceholder) & {
  copyOf(source: ADplaceholder, mutator: (draft: MutableModel<ADplaceholder>) => MutableModel<ADplaceholder> | void): ADplaceholder;
}

type EagerProduct = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Product, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title?: string | null;
  readonly description?: string | null;
  readonly yearcreated?: string | null;
  readonly marketprice?: number | null;
  readonly set?: string | null;
  readonly untitledfield?: string | null;
  readonly askingprice?: number | null;
  readonly numberavailable?: number | null;
  readonly uniqueid?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyProduct = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Product, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title?: string | null;
  readonly description?: string | null;
  readonly yearcreated?: string | null;
  readonly marketprice?: number | null;
  readonly set?: string | null;
  readonly untitledfield?: string | null;
  readonly askingprice?: number | null;
  readonly numberavailable?: number | null;
  readonly uniqueid?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Product = LazyLoading extends LazyLoadingDisabled ? EagerProduct : LazyProduct

export declare const Product: (new (init: ModelInit<Product>) => Product) & {
  copyOf(source: Product, mutator: (draft: MutableModel<Product>) => MutableModel<Product> | void): Product;
}

type EagerReview = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Review, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title?: string | null;
  readonly reviewedby?: string | null;
  readonly reviewdate?: string | null;
  readonly reviewbody?: string | null;
  readonly reviewrating?: number | null;
  readonly reviewapproved?: boolean | null;
  readonly image?: string | null;
  readonly userID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyReview = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Review, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title?: string | null;
  readonly reviewedby?: string | null;
  readonly reviewdate?: string | null;
  readonly reviewbody?: string | null;
  readonly reviewrating?: number | null;
  readonly reviewapproved?: boolean | null;
  readonly image?: string | null;
  readonly userID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Review = LazyLoading extends LazyLoadingDisabled ? EagerReview : LazyReview

export declare const Review: (new (init: ModelInit<Review>) => Review) & {
  copyOf(source: Review, mutator: (draft: MutableModel<Review>) => MutableModel<Review> | void): Review;
}

type EagerStreamer = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Streamer, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly username?: string | null;
  readonly name?: string | null;
  readonly contactemail?: string | null;
  readonly channel?: string | null;
  readonly bio?: string | null;
  readonly image?: string | null;
  readonly membersince?: string | null;
  readonly location?: string | null;
  readonly channelcreated?: string | null;
  readonly banner?: string | null;
  readonly FBlink?: string | null;
  readonly YTlink?: string | null;
  readonly IGlink?: string | null;
  readonly TWEETlink?: string | null;
  readonly DRlink?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyStreamer = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Streamer, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly username?: string | null;
  readonly name?: string | null;
  readonly contactemail?: string | null;
  readonly channel?: string | null;
  readonly bio?: string | null;
  readonly image?: string | null;
  readonly membersince?: string | null;
  readonly location?: string | null;
  readonly channelcreated?: string | null;
  readonly banner?: string | null;
  readonly FBlink?: string | null;
  readonly YTlink?: string | null;
  readonly IGlink?: string | null;
  readonly TWEETlink?: string | null;
  readonly DRlink?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Streamer = LazyLoading extends LazyLoadingDisabled ? EagerStreamer : LazyStreamer

export declare const Streamer: (new (init: ModelInit<Streamer>) => Streamer) & {
  copyOf(source: Streamer, mutator: (draft: MutableModel<Streamer>) => MutableModel<Streamer> | void): Streamer;
}

type EagerStore = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Store, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly brandimage?: string | null;
  readonly brandprimary?: string | null;
  readonly brandsecondary?: string | null;
  readonly brandbio?: string | null;
  readonly brandphone?: string | null;
  readonly brandemail?: string | null;
  readonly location?: string | null;
  readonly brandcreated?: string | null;
  readonly membersince?: string | null;
  readonly banner?: string | null;
  readonly TCGlink?: string | null;
  readonly TTlink?: string | null;
  readonly YTlink?: string | null;
  readonly FBlink?: string | null;
  readonly IGlink?: string | null;
  readonly TWEETlin?: string | null;
  readonly GSlink?: string | null;
  readonly storelocation?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyStore = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Store, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly brandimage?: string | null;
  readonly brandprimary?: string | null;
  readonly brandsecondary?: string | null;
  readonly brandbio?: string | null;
  readonly brandphone?: string | null;
  readonly brandemail?: string | null;
  readonly location?: string | null;
  readonly brandcreated?: string | null;
  readonly membersince?: string | null;
  readonly banner?: string | null;
  readonly TCGlink?: string | null;
  readonly TTlink?: string | null;
  readonly YTlink?: string | null;
  readonly FBlink?: string | null;
  readonly IGlink?: string | null;
  readonly TWEETlin?: string | null;
  readonly GSlink?: string | null;
  readonly storelocation?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Store = LazyLoading extends LazyLoadingDisabled ? EagerStore : LazyStore

export declare const Store: (new (init: ModelInit<Store>) => Store) & {
  copyOf(source: Store, mutator: (draft: MutableModel<Store>) => MutableModel<Store> | void): Store;
}

type EagerUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly memberstart?: string | null;
  readonly username?: string | null;
  readonly image?: string | null;
  readonly brandingname?: string | null;
  readonly brandingimage?: string | null;
  readonly bio?: string | null;
  readonly name?: string | null;
  readonly location?: string | null;
  readonly banner?: string | null;
  readonly YTlink?: string | null;
  readonly FBlink?: string | null;
  readonly IGlink?: string | null;
  readonly TWEETlink?: string | null;
  readonly userlocation?: string | null;
  readonly Reviews?: (Review | null)[] | null;
  readonly Posts?: (Post | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly memberstart?: string | null;
  readonly username?: string | null;
  readonly image?: string | null;
  readonly brandingname?: string | null;
  readonly brandingimage?: string | null;
  readonly bio?: string | null;
  readonly name?: string | null;
  readonly location?: string | null;
  readonly banner?: string | null;
  readonly YTlink?: string | null;
  readonly FBlink?: string | null;
  readonly IGlink?: string | null;
  readonly TWEETlink?: string | null;
  readonly userlocation?: string | null;
  readonly Reviews: AsyncCollection<Review>;
  readonly Posts: AsyncCollection<Post>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

type EagerPost = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Post, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly author: string;
  readonly content?: string | null;
  readonly image?: string | null;
  readonly userID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPost = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Post, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly author: string;
  readonly content?: string | null;
  readonly image?: string | null;
  readonly userID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Post = LazyLoading extends LazyLoadingDisabled ? EagerPost : LazyPost

export declare const Post: (new (init: ModelInit<Post>) => Post) & {
  copyOf(source: Post, mutator: (draft: MutableModel<Post>) => MutableModel<Post> | void): Post;
}