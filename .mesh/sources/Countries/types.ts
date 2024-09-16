// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace CountriesTypes {
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
};

export type countries_Continent = {
  code: Scalars['ID']['output'];
  countries: Array<countries_Country>;
  name: Scalars['String']['output'];
};

export type countries_ContinentFilterInput = {
  code?: InputMaybe<countries_StringQueryOperatorInput>;
};

export type countries_Country = {
  awsRegion: Scalars['String']['output'];
  capital?: Maybe<Scalars['String']['output']>;
  code: Scalars['ID']['output'];
  continent: countries_Continent;
  currencies: Array<Scalars['String']['output']>;
  currency?: Maybe<Scalars['String']['output']>;
  emoji: Scalars['String']['output'];
  emojiU: Scalars['String']['output'];
  languages: Array<countries_Language>;
  name: Scalars['String']['output'];
  native: Scalars['String']['output'];
  phone: Scalars['String']['output'];
  phones: Array<Scalars['String']['output']>;
  states: Array<countries_State>;
  subdivisions: Array<countries_Subdivision>;
};


export type countries_CountrynameArgs = {
  lang?: InputMaybe<Scalars['String']['input']>;
};

export type countries_CountryFilterInput = {
  code?: InputMaybe<countries_StringQueryOperatorInput>;
  continent?: InputMaybe<countries_StringQueryOperatorInput>;
  currency?: InputMaybe<countries_StringQueryOperatorInput>;
  name?: InputMaybe<countries_StringQueryOperatorInput>;
};

export type countries_Language = {
  code: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  native: Scalars['String']['output'];
  rtl: Scalars['Boolean']['output'];
};

export type countries_LanguageFilterInput = {
  code?: InputMaybe<countries_StringQueryOperatorInput>;
};

export type Query = {
  countries_continent?: Maybe<countries_Continent>;
  countries_continents: Array<countries_Continent>;
  countries_countries: Array<countries_Country>;
  countries_country?: Maybe<countries_Country>;
  countries_language?: Maybe<countries_Language>;
  countries_languages: Array<countries_Language>;
};


export type Querycountries_continentArgs = {
  code: Scalars['ID']['input'];
};


export type Querycountries_continentsArgs = {
  filter?: InputMaybe<countries_ContinentFilterInput>;
};


export type Querycountries_countriesArgs = {
  filter?: InputMaybe<countries_CountryFilterInput>;
};


export type Querycountries_countryArgs = {
  code: Scalars['ID']['input'];
};


export type Querycountries_languageArgs = {
  code: Scalars['ID']['input'];
};


export type Querycountries_languagesArgs = {
  filter?: InputMaybe<countries_LanguageFilterInput>;
};

export type countries_State = {
  code?: Maybe<Scalars['String']['output']>;
  country: countries_Country;
  name: Scalars['String']['output'];
};

export type countries_StringQueryOperatorInput = {
  eq?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  ne?: InputMaybe<Scalars['String']['input']>;
  nin?: InputMaybe<Array<Scalars['String']['input']>>;
  regex?: InputMaybe<Scalars['String']['input']>;
};

export type countries_Subdivision = {
  code: Scalars['ID']['output'];
  emoji?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
};

  export type QuerySdk = {
      /** null **/
  countries_continent: InContextSdkMethod<Query['countries_continent'], Querycountries_continentArgs, MeshContext>,
  /** null **/
  countries_continents: InContextSdkMethod<Query['countries_continents'], Querycountries_continentsArgs, MeshContext>,
  /** null **/
  countries_countries: InContextSdkMethod<Query['countries_countries'], Querycountries_countriesArgs, MeshContext>,
  /** null **/
  countries_country: InContextSdkMethod<Query['countries_country'], Querycountries_countryArgs, MeshContext>,
  /** null **/
  countries_language: InContextSdkMethod<Query['countries_language'], Querycountries_languageArgs, MeshContext>,
  /** null **/
  countries_languages: InContextSdkMethod<Query['countries_languages'], Querycountries_languagesArgs, MeshContext>
  };

  export type MutationSdk = {
    
  };

  export type SubscriptionSdk = {
    
  };

  export type Context = {
      ["Countries"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      
    };
}
