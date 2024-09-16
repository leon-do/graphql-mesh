// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace SnapshotTypes {
  export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  BigDecimal: { input: any; output: any; }
  BigInt: { input: any; output: any; }
  Bytes: { input: any; output: any; }
  Int8: { input: any; output: any; }
  Timestamp: { input: any; output: any; }
};

export type Aggregation_interval =
  | 'hour'
  | 'day';

export type Block = {
  id: Scalars['ID']['output'];
  number: Scalars['BigInt']['output'];
  timestamp: Scalars['BigInt']['output'];
};

export type BlockChangedFilter = {
  number_gte: Scalars['Int']['input'];
};

export type Block_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  number?: InputMaybe<Scalars['BigInt']['input']>;
  number_not?: InputMaybe<Scalars['BigInt']['input']>;
  number_gt?: InputMaybe<Scalars['BigInt']['input']>;
  number_lt?: InputMaybe<Scalars['BigInt']['input']>;
  number_gte?: InputMaybe<Scalars['BigInt']['input']>;
  number_lte?: InputMaybe<Scalars['BigInt']['input']>;
  number_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  number_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Block_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Block_filter>>>;
};

export type Block_height = {
  hash?: InputMaybe<Scalars['Bytes']['input']>;
  number?: InputMaybe<Scalars['Int']['input']>;
  number_gte?: InputMaybe<Scalars['Int']['input']>;
};

export type Block_orderBy =
  | 'id'
  | 'number'
  | 'timestamp';

export type Delegation = {
  id: Scalars['ID']['output'];
  delegator: Scalars['Bytes']['output'];
  space: Scalars['String']['output'];
  delegate: Scalars['Bytes']['output'];
  timestamp: Scalars['Int']['output'];
};

export type Delegation_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  delegator?: InputMaybe<Scalars['Bytes']['input']>;
  delegator_not?: InputMaybe<Scalars['Bytes']['input']>;
  delegator_gt?: InputMaybe<Scalars['Bytes']['input']>;
  delegator_lt?: InputMaybe<Scalars['Bytes']['input']>;
  delegator_gte?: InputMaybe<Scalars['Bytes']['input']>;
  delegator_lte?: InputMaybe<Scalars['Bytes']['input']>;
  delegator_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  delegator_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  delegator_contains?: InputMaybe<Scalars['Bytes']['input']>;
  delegator_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  space?: InputMaybe<Scalars['String']['input']>;
  space_not?: InputMaybe<Scalars['String']['input']>;
  space_gt?: InputMaybe<Scalars['String']['input']>;
  space_lt?: InputMaybe<Scalars['String']['input']>;
  space_gte?: InputMaybe<Scalars['String']['input']>;
  space_lte?: InputMaybe<Scalars['String']['input']>;
  space_in?: InputMaybe<Array<Scalars['String']['input']>>;
  space_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  space_contains?: InputMaybe<Scalars['String']['input']>;
  space_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  space_not_contains?: InputMaybe<Scalars['String']['input']>;
  space_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  space_starts_with?: InputMaybe<Scalars['String']['input']>;
  space_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  space_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  space_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  space_ends_with?: InputMaybe<Scalars['String']['input']>;
  space_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  space_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  space_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  delegate?: InputMaybe<Scalars['Bytes']['input']>;
  delegate_not?: InputMaybe<Scalars['Bytes']['input']>;
  delegate_gt?: InputMaybe<Scalars['Bytes']['input']>;
  delegate_lt?: InputMaybe<Scalars['Bytes']['input']>;
  delegate_gte?: InputMaybe<Scalars['Bytes']['input']>;
  delegate_lte?: InputMaybe<Scalars['Bytes']['input']>;
  delegate_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  delegate_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  delegate_contains?: InputMaybe<Scalars['Bytes']['input']>;
  delegate_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  timestamp?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_lt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_lte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Delegation_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Delegation_filter>>>;
};

export type Delegation_orderBy =
  | 'id'
  | 'delegator'
  | 'space'
  | 'delegate'
  | 'timestamp';

/** Defines the order direction, either ascending or descending */
export type OrderDirection =
  | 'asc'
  | 'desc';

export type Query = {
  delegation?: Maybe<Delegation>;
  delegations: Array<Delegation>;
  block?: Maybe<Block>;
  blocks: Array<Block>;
  sig?: Maybe<Sig>;
  sigs: Array<Sig>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type QuerydelegationArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerydelegationsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Delegation_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Delegation_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryblockArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryblocksArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Block_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Block_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerysigArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerysigsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Sig_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Sig_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Query_metaArgs = {
  block?: InputMaybe<Block_height>;
};

export type Sig = {
  id: Scalars['ID']['output'];
  account: Scalars['Bytes']['output'];
  msgHash: Scalars['String']['output'];
  timestamp: Scalars['BigInt']['output'];
};

export type Sig_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  account?: InputMaybe<Scalars['Bytes']['input']>;
  account_not?: InputMaybe<Scalars['Bytes']['input']>;
  account_gt?: InputMaybe<Scalars['Bytes']['input']>;
  account_lt?: InputMaybe<Scalars['Bytes']['input']>;
  account_gte?: InputMaybe<Scalars['Bytes']['input']>;
  account_lte?: InputMaybe<Scalars['Bytes']['input']>;
  account_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  account_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  account_contains?: InputMaybe<Scalars['Bytes']['input']>;
  account_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  msgHash?: InputMaybe<Scalars['String']['input']>;
  msgHash_not?: InputMaybe<Scalars['String']['input']>;
  msgHash_gt?: InputMaybe<Scalars['String']['input']>;
  msgHash_lt?: InputMaybe<Scalars['String']['input']>;
  msgHash_gte?: InputMaybe<Scalars['String']['input']>;
  msgHash_lte?: InputMaybe<Scalars['String']['input']>;
  msgHash_in?: InputMaybe<Array<Scalars['String']['input']>>;
  msgHash_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  msgHash_contains?: InputMaybe<Scalars['String']['input']>;
  msgHash_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  msgHash_not_contains?: InputMaybe<Scalars['String']['input']>;
  msgHash_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  msgHash_starts_with?: InputMaybe<Scalars['String']['input']>;
  msgHash_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  msgHash_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  msgHash_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  msgHash_ends_with?: InputMaybe<Scalars['String']['input']>;
  msgHash_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  msgHash_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  msgHash_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Sig_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Sig_filter>>>;
};

export type Sig_orderBy =
  | 'id'
  | 'account'
  | 'msgHash'
  | 'timestamp';

export type Subscription = {
  delegation?: Maybe<Delegation>;
  delegations: Array<Delegation>;
  block?: Maybe<Block>;
  blocks: Array<Block>;
  sig?: Maybe<Sig>;
  sigs: Array<Sig>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type SubscriptiondelegationArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiondelegationsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Delegation_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Delegation_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionblockArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionblocksArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Block_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Block_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionsigArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionsigsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Sig_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Sig_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscription_metaArgs = {
  block?: InputMaybe<Block_height>;
};

export type _Block_ = {
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']['output']>;
  /** The block number */
  number: Scalars['Int']['output'];
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars['Int']['output']>;
  /** The hash of the parent block */
  parentHash?: Maybe<Scalars['Bytes']['output']>;
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars['String']['output'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean']['output'];
};

export type _SubgraphErrorPolicy_ =
  /** Data will be returned even if the subgraph has indexing errors */
  | 'allow'
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  | 'deny';

  export type QuerySdk = {
      /** null **/
  delegation: InContextSdkMethod<Query['delegation'], QuerydelegationArgs, MeshContext>,
  /** null **/
  delegations: InContextSdkMethod<Query['delegations'], QuerydelegationsArgs, MeshContext>,
  /** null **/
  block: InContextSdkMethod<Query['block'], QueryblockArgs, MeshContext>,
  /** null **/
  blocks: InContextSdkMethod<Query['blocks'], QueryblocksArgs, MeshContext>,
  /** null **/
  sig: InContextSdkMethod<Query['sig'], QuerysigArgs, MeshContext>,
  /** null **/
  sigs: InContextSdkMethod<Query['sigs'], QuerysigsArgs, MeshContext>,
  /** Access to subgraph metadata **/
  _meta: InContextSdkMethod<Query['_meta'], Query_metaArgs, MeshContext>
  };

  export type MutationSdk = {
    
  };

  export type SubscriptionSdk = {
      /** null **/
  delegation: InContextSdkMethod<Subscription['delegation'], SubscriptiondelegationArgs, MeshContext>,
  /** null **/
  delegations: InContextSdkMethod<Subscription['delegations'], SubscriptiondelegationsArgs, MeshContext>,
  /** null **/
  block: InContextSdkMethod<Subscription['block'], SubscriptionblockArgs, MeshContext>,
  /** null **/
  blocks: InContextSdkMethod<Subscription['blocks'], SubscriptionblocksArgs, MeshContext>,
  /** null **/
  sig: InContextSdkMethod<Subscription['sig'], SubscriptionsigArgs, MeshContext>,
  /** null **/
  sigs: InContextSdkMethod<Subscription['sigs'], SubscriptionsigsArgs, MeshContext>,
  /** Access to subgraph metadata **/
  _meta: InContextSdkMethod<Subscription['_meta'], Subscription_metaArgs, MeshContext>
  };

  export type Context = {
      ["Snapshot"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      
    };
}
