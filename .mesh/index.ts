// @ts-nocheck
import { GraphQLResolveInfo, SelectionSetNode, FieldNode } from 'graphql';
import { findAndParseConfig } from '@graphql-mesh/cli';
import { createMeshHTTPHandler, MeshHTTPHandler } from '@graphql-mesh/http';
import { getMesh, ExecuteMeshFn, SubscribeMeshFn, MeshContext as BaseMeshContext, MeshInstance } from '@graphql-mesh/runtime';
import { MeshStore, FsStoreStorageAdapter } from '@graphql-mesh/store';
import { path as pathModule } from '@graphql-mesh/cross-helpers';
import { ImportFn } from '@graphql-mesh/types';
import type { CountriesTypes } from './sources/Countries/types';
import type { StarWarsTypes } from './sources/Star Wars/types';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };



/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Query = {
  starwars_allFilms?: Maybe<starwars_FilmsConnection>;
  starwars_film?: Maybe<starwars_Film>;
  starwars_allPeople?: Maybe<starwars_PeopleConnection>;
  starwars_person?: Maybe<starwars_Person>;
  starwars_allPlanets?: Maybe<starwars_PlanetsConnection>;
  starwars_planet?: Maybe<starwars_Planet>;
  starwars_allSpecies?: Maybe<starwars_SpeciesConnection>;
  starwars_species?: Maybe<starwars_Species>;
  starwars_allStarships?: Maybe<starwars_StarshipsConnection>;
  starwars_starship?: Maybe<starwars_Starship>;
  starwars_allVehicles?: Maybe<starwars_VehiclesConnection>;
  starwars_vehicle?: Maybe<starwars_Vehicle>;
  /** Fetches an object given its ID */
  starwars_node?: Maybe<starwars_Node>;
  countries_continent?: Maybe<countries_Continent>;
  countries_continents: Array<countries_Continent>;
  countries_countries: Array<countries_Country>;
  countries_country?: Maybe<countries_Country>;
  countries_language?: Maybe<countries_Language>;
  countries_languages: Array<countries_Language>;
};


export type Querystarwars_allFilmsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type Querystarwars_filmArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  filmID?: InputMaybe<Scalars['ID']['input']>;
};


export type Querystarwars_allPeopleArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type Querystarwars_personArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  personID?: InputMaybe<Scalars['ID']['input']>;
};


export type Querystarwars_allPlanetsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type Querystarwars_planetArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  planetID?: InputMaybe<Scalars['ID']['input']>;
};


export type Querystarwars_allSpeciesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type Querystarwars_speciesArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  speciesID?: InputMaybe<Scalars['ID']['input']>;
};


export type Querystarwars_allStarshipsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type Querystarwars_starshipArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  starshipID?: InputMaybe<Scalars['ID']['input']>;
};


export type Querystarwars_allVehiclesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type Querystarwars_vehicleArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  vehicleID?: InputMaybe<Scalars['ID']['input']>;
};


export type Querystarwars_nodeArgs = {
  id: Scalars['ID']['input'];
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

/** A connection to a list of items. */
export type starwars_FilmsConnection = {
  /** Information to aid in pagination. */
  pageInfo: starwars_PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<starwars_FilmsEdge>>>;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount?: Maybe<Scalars['Int']['output']>;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  films?: Maybe<Array<Maybe<starwars_Film>>>;
};

/** Information about pagination in a connection. */
export type starwars_PageInfo = {
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>;
};

/** An edge in a connection. */
export type starwars_FilmsEdge = {
  /** The item at the end of the edge */
  node?: Maybe<starwars_Film>;
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
};

/** A single film. */
export type starwars_Film = starwars_Node & {
  /** The title of this film. */
  title?: Maybe<Scalars['String']['output']>;
  /** The episode number of this film. */
  episodeID?: Maybe<Scalars['Int']['output']>;
  /** The opening paragraphs at the beginning of this film. */
  openingCrawl?: Maybe<Scalars['String']['output']>;
  /** The name of the director of this film. */
  director?: Maybe<Scalars['String']['output']>;
  /** The name(s) of the producer(s) of this film. */
  producers?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** The ISO 8601 date format of film release at original creator country. */
  releaseDate?: Maybe<Scalars['String']['output']>;
  speciesConnection?: Maybe<starwars_FilmSpeciesConnection>;
  starshipConnection?: Maybe<starwars_FilmStarshipsConnection>;
  vehicleConnection?: Maybe<starwars_FilmVehiclesConnection>;
  characterConnection?: Maybe<starwars_FilmCharactersConnection>;
  planetConnection?: Maybe<starwars_FilmPlanetsConnection>;
  /** The ISO 8601 date format of the time that this resource was created. */
  created?: Maybe<Scalars['String']['output']>;
  /** The ISO 8601 date format of the time that this resource was edited. */
  edited?: Maybe<Scalars['String']['output']>;
  /** The ID of an object */
  id: Scalars['ID']['output'];
};


/** A single film. */
export type starwars_FilmspeciesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


/** A single film. */
export type starwars_FilmstarshipConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


/** A single film. */
export type starwars_FilmvehicleConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


/** A single film. */
export type starwars_FilmcharacterConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


/** A single film. */
export type starwars_FilmplanetConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

/** An object with an ID */
export type starwars_Node = {
  /** The id of the object. */
  id: Scalars['ID']['output'];
};

/** A connection to a list of items. */
export type starwars_FilmSpeciesConnection = {
  /** Information to aid in pagination. */
  pageInfo: starwars_PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<starwars_FilmSpeciesEdge>>>;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount?: Maybe<Scalars['Int']['output']>;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  species?: Maybe<Array<Maybe<starwars_Species>>>;
};

/** An edge in a connection. */
export type starwars_FilmSpeciesEdge = {
  /** The item at the end of the edge */
  node?: Maybe<starwars_Species>;
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
};

/** A type of person or character within the Star Wars Universe. */
export type starwars_Species = starwars_Node & {
  /** The name of this species. */
  name?: Maybe<Scalars['String']['output']>;
  /** The classification of this species, such as "mammal" or "reptile". */
  classification?: Maybe<Scalars['String']['output']>;
  /** The designation of this species, such as "sentient". */
  designation?: Maybe<Scalars['String']['output']>;
  /** The average height of this species in centimeters. */
  averageHeight?: Maybe<Scalars['Float']['output']>;
  /** The average lifespan of this species in years, null if unknown. */
  averageLifespan?: Maybe<Scalars['Int']['output']>;
  /**
   * Common eye colors for this species, null if this species does not typically
   * have eyes.
   */
  eyeColors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /**
   * Common hair colors for this species, null if this species does not typically
   * have hair.
   */
  hairColors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /**
   * Common skin colors for this species, null if this species does not typically
   * have skin.
   */
  skinColors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** The language commonly spoken by this species. */
  language?: Maybe<Scalars['String']['output']>;
  /** A planet that this species originates from. */
  homeworld?: Maybe<starwars_Planet>;
  personConnection?: Maybe<starwars_SpeciesPeopleConnection>;
  filmConnection?: Maybe<starwars_SpeciesFilmsConnection>;
  /** The ISO 8601 date format of the time that this resource was created. */
  created?: Maybe<Scalars['String']['output']>;
  /** The ISO 8601 date format of the time that this resource was edited. */
  edited?: Maybe<Scalars['String']['output']>;
  /** The ID of an object */
  id: Scalars['ID']['output'];
};


/** A type of person or character within the Star Wars Universe. */
export type starwars_SpeciespersonConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


/** A type of person or character within the Star Wars Universe. */
export type starwars_SpeciesfilmConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

/**
 * A large mass, planet or planetoid in the Star Wars Universe, at the time of
 * 0 ABY.
 */
export type starwars_Planet = starwars_Node & {
  /** The name of this planet. */
  name?: Maybe<Scalars['String']['output']>;
  /** The diameter of this planet in kilometers. */
  diameter?: Maybe<Scalars['Int']['output']>;
  /**
   * The number of standard hours it takes for this planet to complete a single
   * rotation on its axis.
   */
  rotationPeriod?: Maybe<Scalars['Int']['output']>;
  /**
   * The number of standard days it takes for this planet to complete a single orbit
   * of its local star.
   */
  orbitalPeriod?: Maybe<Scalars['Int']['output']>;
  /**
   * A number denoting the gravity of this planet, where "1" is normal or 1 standard
   * G. "2" is twice or 2 standard Gs. "0.5" is half or 0.5 standard Gs.
   */
  gravity?: Maybe<Scalars['String']['output']>;
  /** The average population of sentient beings inhabiting this planet. */
  population?: Maybe<Scalars['Float']['output']>;
  /** The climates of this planet. */
  climates?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** The terrains of this planet. */
  terrains?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /**
   * The percentage of the planet surface that is naturally occurring water or bodies
   * of water.
   */
  surfaceWater?: Maybe<Scalars['Float']['output']>;
  residentConnection?: Maybe<starwars_PlanetResidentsConnection>;
  filmConnection?: Maybe<starwars_PlanetFilmsConnection>;
  /** The ISO 8601 date format of the time that this resource was created. */
  created?: Maybe<Scalars['String']['output']>;
  /** The ISO 8601 date format of the time that this resource was edited. */
  edited?: Maybe<Scalars['String']['output']>;
  /** The ID of an object */
  id: Scalars['ID']['output'];
};


/**
 * A large mass, planet or planetoid in the Star Wars Universe, at the time of
 * 0 ABY.
 */
export type starwars_PlanetresidentConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


/**
 * A large mass, planet or planetoid in the Star Wars Universe, at the time of
 * 0 ABY.
 */
export type starwars_PlanetfilmConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

/** A connection to a list of items. */
export type starwars_PlanetResidentsConnection = {
  /** Information to aid in pagination. */
  pageInfo: starwars_PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<starwars_PlanetResidentsEdge>>>;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount?: Maybe<Scalars['Int']['output']>;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  residents?: Maybe<Array<Maybe<starwars_Person>>>;
};

/** An edge in a connection. */
export type starwars_PlanetResidentsEdge = {
  /** The item at the end of the edge */
  node?: Maybe<starwars_Person>;
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
};

/** An individual person or character within the Star Wars universe. */
export type starwars_Person = starwars_Node & {
  /** The name of this person. */
  name?: Maybe<Scalars['String']['output']>;
  /**
   * The birth year of the person, using the in-universe standard of BBY or ABY -
   * Before the Battle of Yavin or After the Battle of Yavin. The Battle of Yavin is
   * a battle that occurs at the end of Star Wars episode IV: A New Hope.
   */
  birthYear?: Maybe<Scalars['String']['output']>;
  /**
   * The eye color of this person. Will be "unknown" if not known or "n/a" if the
   * person does not have an eye.
   */
  eyeColor?: Maybe<Scalars['String']['output']>;
  /**
   * The gender of this person. Either "Male", "Female" or "unknown",
   * "n/a" if the person does not have a gender.
   */
  gender?: Maybe<Scalars['String']['output']>;
  /**
   * The hair color of this person. Will be "unknown" if not known or "n/a" if the
   * person does not have hair.
   */
  hairColor?: Maybe<Scalars['String']['output']>;
  /** The height of the person in centimeters. */
  height?: Maybe<Scalars['Int']['output']>;
  /** The mass of the person in kilograms. */
  mass?: Maybe<Scalars['Float']['output']>;
  /** The skin color of this person. */
  skinColor?: Maybe<Scalars['String']['output']>;
  /** A planet that this person was born on or inhabits. */
  homeworld?: Maybe<starwars_Planet>;
  filmConnection?: Maybe<starwars_PersonFilmsConnection>;
  /** The species that this person belongs to, or null if unknown. */
  species?: Maybe<starwars_Species>;
  starshipConnection?: Maybe<starwars_PersonStarshipsConnection>;
  vehicleConnection?: Maybe<starwars_PersonVehiclesConnection>;
  /** The ISO 8601 date format of the time that this resource was created. */
  created?: Maybe<Scalars['String']['output']>;
  /** The ISO 8601 date format of the time that this resource was edited. */
  edited?: Maybe<Scalars['String']['output']>;
  /** The ID of an object */
  id: Scalars['ID']['output'];
};


/** An individual person or character within the Star Wars universe. */
export type starwars_PersonfilmConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


/** An individual person or character within the Star Wars universe. */
export type starwars_PersonstarshipConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


/** An individual person or character within the Star Wars universe. */
export type starwars_PersonvehicleConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

/** A connection to a list of items. */
export type starwars_PersonFilmsConnection = {
  /** Information to aid in pagination. */
  pageInfo: starwars_PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<starwars_PersonFilmsEdge>>>;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount?: Maybe<Scalars['Int']['output']>;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  films?: Maybe<Array<Maybe<starwars_Film>>>;
};

/** An edge in a connection. */
export type starwars_PersonFilmsEdge = {
  /** The item at the end of the edge */
  node?: Maybe<starwars_Film>;
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
};

/** A connection to a list of items. */
export type starwars_PersonStarshipsConnection = {
  /** Information to aid in pagination. */
  pageInfo: starwars_PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<starwars_PersonStarshipsEdge>>>;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount?: Maybe<Scalars['Int']['output']>;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  starships?: Maybe<Array<Maybe<starwars_Starship>>>;
};

/** An edge in a connection. */
export type starwars_PersonStarshipsEdge = {
  /** The item at the end of the edge */
  node?: Maybe<starwars_Starship>;
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
};

/** A single transport craft that has hyperdrive capability. */
export type starwars_Starship = starwars_Node & {
  /** The name of this starship. The common name, such as "Death Star". */
  name?: Maybe<Scalars['String']['output']>;
  /**
   * The model or official name of this starship. Such as "T-65 X-wing" or "DS-1
   * Orbital Battle Station".
   */
  model?: Maybe<Scalars['String']['output']>;
  /**
   * The class of this starship, such as "Starfighter" or "Deep Space Mobile
   * Battlestation"
   */
  starshipClass?: Maybe<Scalars['String']['output']>;
  /** The manufacturers of this starship. */
  manufacturers?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** The cost of this starship new, in galactic credits. */
  costInCredits?: Maybe<Scalars['Float']['output']>;
  /** The length of this starship in meters. */
  length?: Maybe<Scalars['Float']['output']>;
  /** The number of personnel needed to run or pilot this starship. */
  crew?: Maybe<Scalars['String']['output']>;
  /** The number of non-essential people this starship can transport. */
  passengers?: Maybe<Scalars['String']['output']>;
  /**
   * The maximum speed of this starship in atmosphere. null if this starship is
   * incapable of atmosphering flight.
   */
  maxAtmospheringSpeed?: Maybe<Scalars['Int']['output']>;
  /** The class of this starships hyperdrive. */
  hyperdriveRating?: Maybe<Scalars['Float']['output']>;
  /**
   * The Maximum number of Megalights this starship can travel in a standard hour.
   * A "Megalight" is a standard unit of distance and has never been defined before
   * within the Star Wars universe. This figure is only really useful for measuring
   * the difference in speed of starships. We can assume it is similar to AU, the
   * distance between our Sun (Sol) and Earth.
   */
  MGLT?: Maybe<Scalars['Int']['output']>;
  /** The maximum number of kilograms that this starship can transport. */
  cargoCapacity?: Maybe<Scalars['Float']['output']>;
  /**
   * The maximum length of time that this starship can provide consumables for its
   * entire crew without having to resupply.
   */
  consumables?: Maybe<Scalars['String']['output']>;
  pilotConnection?: Maybe<starwars_StarshipPilotsConnection>;
  filmConnection?: Maybe<starwars_StarshipFilmsConnection>;
  /** The ISO 8601 date format of the time that this resource was created. */
  created?: Maybe<Scalars['String']['output']>;
  /** The ISO 8601 date format of the time that this resource was edited. */
  edited?: Maybe<Scalars['String']['output']>;
  /** The ID of an object */
  id: Scalars['ID']['output'];
};


/** A single transport craft that has hyperdrive capability. */
export type starwars_StarshippilotConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


/** A single transport craft that has hyperdrive capability. */
export type starwars_StarshipfilmConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

/** A connection to a list of items. */
export type starwars_StarshipPilotsConnection = {
  /** Information to aid in pagination. */
  pageInfo: starwars_PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<starwars_StarshipPilotsEdge>>>;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount?: Maybe<Scalars['Int']['output']>;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  pilots?: Maybe<Array<Maybe<starwars_Person>>>;
};

/** An edge in a connection. */
export type starwars_StarshipPilotsEdge = {
  /** The item at the end of the edge */
  node?: Maybe<starwars_Person>;
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
};

/** A connection to a list of items. */
export type starwars_StarshipFilmsConnection = {
  /** Information to aid in pagination. */
  pageInfo: starwars_PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<starwars_StarshipFilmsEdge>>>;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount?: Maybe<Scalars['Int']['output']>;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  films?: Maybe<Array<Maybe<starwars_Film>>>;
};

/** An edge in a connection. */
export type starwars_StarshipFilmsEdge = {
  /** The item at the end of the edge */
  node?: Maybe<starwars_Film>;
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
};

/** A connection to a list of items. */
export type starwars_PersonVehiclesConnection = {
  /** Information to aid in pagination. */
  pageInfo: starwars_PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<starwars_PersonVehiclesEdge>>>;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount?: Maybe<Scalars['Int']['output']>;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  vehicles?: Maybe<Array<Maybe<starwars_Vehicle>>>;
};

/** An edge in a connection. */
export type starwars_PersonVehiclesEdge = {
  /** The item at the end of the edge */
  node?: Maybe<starwars_Vehicle>;
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
};

/** A single transport craft that does not have hyperdrive capability */
export type starwars_Vehicle = starwars_Node & {
  /**
   * The name of this vehicle. The common name, such as "Sand Crawler" or "Speeder
   * bike".
   */
  name?: Maybe<Scalars['String']['output']>;
  /**
   * The model or official name of this vehicle. Such as "All-Terrain Attack
   * Transport".
   */
  model?: Maybe<Scalars['String']['output']>;
  /** The class of this vehicle, such as "Wheeled" or "Repulsorcraft". */
  vehicleClass?: Maybe<Scalars['String']['output']>;
  /** The manufacturers of this vehicle. */
  manufacturers?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** The cost of this vehicle new, in Galactic Credits. */
  costInCredits?: Maybe<Scalars['Float']['output']>;
  /** The length of this vehicle in meters. */
  length?: Maybe<Scalars['Float']['output']>;
  /** The number of personnel needed to run or pilot this vehicle. */
  crew?: Maybe<Scalars['String']['output']>;
  /** The number of non-essential people this vehicle can transport. */
  passengers?: Maybe<Scalars['String']['output']>;
  /** The maximum speed of this vehicle in atmosphere. */
  maxAtmospheringSpeed?: Maybe<Scalars['Int']['output']>;
  /** The maximum number of kilograms that this vehicle can transport. */
  cargoCapacity?: Maybe<Scalars['Float']['output']>;
  /**
   * The maximum length of time that this vehicle can provide consumables for its
   * entire crew without having to resupply.
   */
  consumables?: Maybe<Scalars['String']['output']>;
  pilotConnection?: Maybe<starwars_VehiclePilotsConnection>;
  filmConnection?: Maybe<starwars_VehicleFilmsConnection>;
  /** The ISO 8601 date format of the time that this resource was created. */
  created?: Maybe<Scalars['String']['output']>;
  /** The ISO 8601 date format of the time that this resource was edited. */
  edited?: Maybe<Scalars['String']['output']>;
  /** The ID of an object */
  id: Scalars['ID']['output'];
};


/** A single transport craft that does not have hyperdrive capability */
export type starwars_VehiclepilotConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


/** A single transport craft that does not have hyperdrive capability */
export type starwars_VehiclefilmConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

/** A connection to a list of items. */
export type starwars_VehiclePilotsConnection = {
  /** Information to aid in pagination. */
  pageInfo: starwars_PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<starwars_VehiclePilotsEdge>>>;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount?: Maybe<Scalars['Int']['output']>;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  pilots?: Maybe<Array<Maybe<starwars_Person>>>;
};

/** An edge in a connection. */
export type starwars_VehiclePilotsEdge = {
  /** The item at the end of the edge */
  node?: Maybe<starwars_Person>;
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
};

/** A connection to a list of items. */
export type starwars_VehicleFilmsConnection = {
  /** Information to aid in pagination. */
  pageInfo: starwars_PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<starwars_VehicleFilmsEdge>>>;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount?: Maybe<Scalars['Int']['output']>;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  films?: Maybe<Array<Maybe<starwars_Film>>>;
};

/** An edge in a connection. */
export type starwars_VehicleFilmsEdge = {
  /** The item at the end of the edge */
  node?: Maybe<starwars_Film>;
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
};

/** A connection to a list of items. */
export type starwars_PlanetFilmsConnection = {
  /** Information to aid in pagination. */
  pageInfo: starwars_PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<starwars_PlanetFilmsEdge>>>;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount?: Maybe<Scalars['Int']['output']>;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  films?: Maybe<Array<Maybe<starwars_Film>>>;
};

/** An edge in a connection. */
export type starwars_PlanetFilmsEdge = {
  /** The item at the end of the edge */
  node?: Maybe<starwars_Film>;
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
};

/** A connection to a list of items. */
export type starwars_SpeciesPeopleConnection = {
  /** Information to aid in pagination. */
  pageInfo: starwars_PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<starwars_SpeciesPeopleEdge>>>;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount?: Maybe<Scalars['Int']['output']>;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  people?: Maybe<Array<Maybe<starwars_Person>>>;
};

/** An edge in a connection. */
export type starwars_SpeciesPeopleEdge = {
  /** The item at the end of the edge */
  node?: Maybe<starwars_Person>;
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
};

/** A connection to a list of items. */
export type starwars_SpeciesFilmsConnection = {
  /** Information to aid in pagination. */
  pageInfo: starwars_PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<starwars_SpeciesFilmsEdge>>>;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount?: Maybe<Scalars['Int']['output']>;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  films?: Maybe<Array<Maybe<starwars_Film>>>;
};

/** An edge in a connection. */
export type starwars_SpeciesFilmsEdge = {
  /** The item at the end of the edge */
  node?: Maybe<starwars_Film>;
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
};

/** A connection to a list of items. */
export type starwars_FilmStarshipsConnection = {
  /** Information to aid in pagination. */
  pageInfo: starwars_PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<starwars_FilmStarshipsEdge>>>;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount?: Maybe<Scalars['Int']['output']>;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  starships?: Maybe<Array<Maybe<starwars_Starship>>>;
};

/** An edge in a connection. */
export type starwars_FilmStarshipsEdge = {
  /** The item at the end of the edge */
  node?: Maybe<starwars_Starship>;
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
};

/** A connection to a list of items. */
export type starwars_FilmVehiclesConnection = {
  /** Information to aid in pagination. */
  pageInfo: starwars_PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<starwars_FilmVehiclesEdge>>>;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount?: Maybe<Scalars['Int']['output']>;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  vehicles?: Maybe<Array<Maybe<starwars_Vehicle>>>;
};

/** An edge in a connection. */
export type starwars_FilmVehiclesEdge = {
  /** The item at the end of the edge */
  node?: Maybe<starwars_Vehicle>;
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
};

/** A connection to a list of items. */
export type starwars_FilmCharactersConnection = {
  /** Information to aid in pagination. */
  pageInfo: starwars_PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<starwars_FilmCharactersEdge>>>;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount?: Maybe<Scalars['Int']['output']>;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  characters?: Maybe<Array<Maybe<starwars_Person>>>;
};

/** An edge in a connection. */
export type starwars_FilmCharactersEdge = {
  /** The item at the end of the edge */
  node?: Maybe<starwars_Person>;
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
};

/** A connection to a list of items. */
export type starwars_FilmPlanetsConnection = {
  /** Information to aid in pagination. */
  pageInfo: starwars_PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<starwars_FilmPlanetsEdge>>>;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount?: Maybe<Scalars['Int']['output']>;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  planets?: Maybe<Array<Maybe<starwars_Planet>>>;
};

/** An edge in a connection. */
export type starwars_FilmPlanetsEdge = {
  /** The item at the end of the edge */
  node?: Maybe<starwars_Planet>;
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
};

/** A connection to a list of items. */
export type starwars_PeopleConnection = {
  /** Information to aid in pagination. */
  pageInfo: starwars_PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<starwars_PeopleEdge>>>;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount?: Maybe<Scalars['Int']['output']>;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  people?: Maybe<Array<Maybe<starwars_Person>>>;
};

/** An edge in a connection. */
export type starwars_PeopleEdge = {
  /** The item at the end of the edge */
  node?: Maybe<starwars_Person>;
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
};

/** A connection to a list of items. */
export type starwars_PlanetsConnection = {
  /** Information to aid in pagination. */
  pageInfo: starwars_PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<starwars_PlanetsEdge>>>;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount?: Maybe<Scalars['Int']['output']>;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  planets?: Maybe<Array<Maybe<starwars_Planet>>>;
};

/** An edge in a connection. */
export type starwars_PlanetsEdge = {
  /** The item at the end of the edge */
  node?: Maybe<starwars_Planet>;
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
};

/** A connection to a list of items. */
export type starwars_SpeciesConnection = {
  /** Information to aid in pagination. */
  pageInfo: starwars_PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<starwars_SpeciesEdge>>>;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount?: Maybe<Scalars['Int']['output']>;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  species?: Maybe<Array<Maybe<starwars_Species>>>;
};

/** An edge in a connection. */
export type starwars_SpeciesEdge = {
  /** The item at the end of the edge */
  node?: Maybe<starwars_Species>;
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
};

/** A connection to a list of items. */
export type starwars_StarshipsConnection = {
  /** Information to aid in pagination. */
  pageInfo: starwars_PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<starwars_StarshipsEdge>>>;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount?: Maybe<Scalars['Int']['output']>;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  starships?: Maybe<Array<Maybe<starwars_Starship>>>;
};

/** An edge in a connection. */
export type starwars_StarshipsEdge = {
  /** The item at the end of the edge */
  node?: Maybe<starwars_Starship>;
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
};

/** A connection to a list of items. */
export type starwars_VehiclesConnection = {
  /** Information to aid in pagination. */
  pageInfo: starwars_PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<starwars_VehiclesEdge>>>;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount?: Maybe<Scalars['Int']['output']>;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  vehicles?: Maybe<Array<Maybe<starwars_Vehicle>>>;
};

/** An edge in a connection. */
export type starwars_VehiclesEdge = {
  /** The item at the end of the edge */
  node?: Maybe<starwars_Vehicle>;
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
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

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string | ((fieldNode: FieldNode) => SelectionSetNode);
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;


/** Mapping of interface types */
export type ResolversInterfaceTypes<_RefType extends Record<string, unknown>> = ResolversObject<{
  starwars_Node: ( starwars_Film ) | ( starwars_Species ) | ( starwars_Planet ) | ( starwars_Person ) | ( starwars_Starship ) | ( starwars_Vehicle );
}>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  starwars_FilmsConnection: ResolverTypeWrapper<starwars_FilmsConnection>;
  starwars_PageInfo: ResolverTypeWrapper<starwars_PageInfo>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  starwars_FilmsEdge: ResolverTypeWrapper<starwars_FilmsEdge>;
  starwars_Film: ResolverTypeWrapper<starwars_Film>;
  starwars_Node: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['starwars_Node']>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  starwars_FilmSpeciesConnection: ResolverTypeWrapper<starwars_FilmSpeciesConnection>;
  starwars_FilmSpeciesEdge: ResolverTypeWrapper<starwars_FilmSpeciesEdge>;
  starwars_Species: ResolverTypeWrapper<starwars_Species>;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  starwars_Planet: ResolverTypeWrapper<starwars_Planet>;
  starwars_PlanetResidentsConnection: ResolverTypeWrapper<starwars_PlanetResidentsConnection>;
  starwars_PlanetResidentsEdge: ResolverTypeWrapper<starwars_PlanetResidentsEdge>;
  starwars_Person: ResolverTypeWrapper<starwars_Person>;
  starwars_PersonFilmsConnection: ResolverTypeWrapper<starwars_PersonFilmsConnection>;
  starwars_PersonFilmsEdge: ResolverTypeWrapper<starwars_PersonFilmsEdge>;
  starwars_PersonStarshipsConnection: ResolverTypeWrapper<starwars_PersonStarshipsConnection>;
  starwars_PersonStarshipsEdge: ResolverTypeWrapper<starwars_PersonStarshipsEdge>;
  starwars_Starship: ResolverTypeWrapper<starwars_Starship>;
  starwars_StarshipPilotsConnection: ResolverTypeWrapper<starwars_StarshipPilotsConnection>;
  starwars_StarshipPilotsEdge: ResolverTypeWrapper<starwars_StarshipPilotsEdge>;
  starwars_StarshipFilmsConnection: ResolverTypeWrapper<starwars_StarshipFilmsConnection>;
  starwars_StarshipFilmsEdge: ResolverTypeWrapper<starwars_StarshipFilmsEdge>;
  starwars_PersonVehiclesConnection: ResolverTypeWrapper<starwars_PersonVehiclesConnection>;
  starwars_PersonVehiclesEdge: ResolverTypeWrapper<starwars_PersonVehiclesEdge>;
  starwars_Vehicle: ResolverTypeWrapper<starwars_Vehicle>;
  starwars_VehiclePilotsConnection: ResolverTypeWrapper<starwars_VehiclePilotsConnection>;
  starwars_VehiclePilotsEdge: ResolverTypeWrapper<starwars_VehiclePilotsEdge>;
  starwars_VehicleFilmsConnection: ResolverTypeWrapper<starwars_VehicleFilmsConnection>;
  starwars_VehicleFilmsEdge: ResolverTypeWrapper<starwars_VehicleFilmsEdge>;
  starwars_PlanetFilmsConnection: ResolverTypeWrapper<starwars_PlanetFilmsConnection>;
  starwars_PlanetFilmsEdge: ResolverTypeWrapper<starwars_PlanetFilmsEdge>;
  starwars_SpeciesPeopleConnection: ResolverTypeWrapper<starwars_SpeciesPeopleConnection>;
  starwars_SpeciesPeopleEdge: ResolverTypeWrapper<starwars_SpeciesPeopleEdge>;
  starwars_SpeciesFilmsConnection: ResolverTypeWrapper<starwars_SpeciesFilmsConnection>;
  starwars_SpeciesFilmsEdge: ResolverTypeWrapper<starwars_SpeciesFilmsEdge>;
  starwars_FilmStarshipsConnection: ResolverTypeWrapper<starwars_FilmStarshipsConnection>;
  starwars_FilmStarshipsEdge: ResolverTypeWrapper<starwars_FilmStarshipsEdge>;
  starwars_FilmVehiclesConnection: ResolverTypeWrapper<starwars_FilmVehiclesConnection>;
  starwars_FilmVehiclesEdge: ResolverTypeWrapper<starwars_FilmVehiclesEdge>;
  starwars_FilmCharactersConnection: ResolverTypeWrapper<starwars_FilmCharactersConnection>;
  starwars_FilmCharactersEdge: ResolverTypeWrapper<starwars_FilmCharactersEdge>;
  starwars_FilmPlanetsConnection: ResolverTypeWrapper<starwars_FilmPlanetsConnection>;
  starwars_FilmPlanetsEdge: ResolverTypeWrapper<starwars_FilmPlanetsEdge>;
  starwars_PeopleConnection: ResolverTypeWrapper<starwars_PeopleConnection>;
  starwars_PeopleEdge: ResolverTypeWrapper<starwars_PeopleEdge>;
  starwars_PlanetsConnection: ResolverTypeWrapper<starwars_PlanetsConnection>;
  starwars_PlanetsEdge: ResolverTypeWrapper<starwars_PlanetsEdge>;
  starwars_SpeciesConnection: ResolverTypeWrapper<starwars_SpeciesConnection>;
  starwars_SpeciesEdge: ResolverTypeWrapper<starwars_SpeciesEdge>;
  starwars_StarshipsConnection: ResolverTypeWrapper<starwars_StarshipsConnection>;
  starwars_StarshipsEdge: ResolverTypeWrapper<starwars_StarshipsEdge>;
  starwars_VehiclesConnection: ResolverTypeWrapper<starwars_VehiclesConnection>;
  starwars_VehiclesEdge: ResolverTypeWrapper<starwars_VehiclesEdge>;
  countries_Continent: ResolverTypeWrapper<countries_Continent>;
  countries_ContinentFilterInput: countries_ContinentFilterInput;
  countries_Country: ResolverTypeWrapper<countries_Country>;
  countries_CountryFilterInput: countries_CountryFilterInput;
  countries_Language: ResolverTypeWrapper<countries_Language>;
  countries_LanguageFilterInput: countries_LanguageFilterInput;
  countries_State: ResolverTypeWrapper<countries_State>;
  countries_StringQueryOperatorInput: countries_StringQueryOperatorInput;
  countries_Subdivision: ResolverTypeWrapper<countries_Subdivision>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Query: {};
  String: Scalars['String']['output'];
  Int: Scalars['Int']['output'];
  starwars_FilmsConnection: starwars_FilmsConnection;
  starwars_PageInfo: starwars_PageInfo;
  Boolean: Scalars['Boolean']['output'];
  starwars_FilmsEdge: starwars_FilmsEdge;
  starwars_Film: starwars_Film;
  starwars_Node: ResolversInterfaceTypes<ResolversParentTypes>['starwars_Node'];
  ID: Scalars['ID']['output'];
  starwars_FilmSpeciesConnection: starwars_FilmSpeciesConnection;
  starwars_FilmSpeciesEdge: starwars_FilmSpeciesEdge;
  starwars_Species: starwars_Species;
  Float: Scalars['Float']['output'];
  starwars_Planet: starwars_Planet;
  starwars_PlanetResidentsConnection: starwars_PlanetResidentsConnection;
  starwars_PlanetResidentsEdge: starwars_PlanetResidentsEdge;
  starwars_Person: starwars_Person;
  starwars_PersonFilmsConnection: starwars_PersonFilmsConnection;
  starwars_PersonFilmsEdge: starwars_PersonFilmsEdge;
  starwars_PersonStarshipsConnection: starwars_PersonStarshipsConnection;
  starwars_PersonStarshipsEdge: starwars_PersonStarshipsEdge;
  starwars_Starship: starwars_Starship;
  starwars_StarshipPilotsConnection: starwars_StarshipPilotsConnection;
  starwars_StarshipPilotsEdge: starwars_StarshipPilotsEdge;
  starwars_StarshipFilmsConnection: starwars_StarshipFilmsConnection;
  starwars_StarshipFilmsEdge: starwars_StarshipFilmsEdge;
  starwars_PersonVehiclesConnection: starwars_PersonVehiclesConnection;
  starwars_PersonVehiclesEdge: starwars_PersonVehiclesEdge;
  starwars_Vehicle: starwars_Vehicle;
  starwars_VehiclePilotsConnection: starwars_VehiclePilotsConnection;
  starwars_VehiclePilotsEdge: starwars_VehiclePilotsEdge;
  starwars_VehicleFilmsConnection: starwars_VehicleFilmsConnection;
  starwars_VehicleFilmsEdge: starwars_VehicleFilmsEdge;
  starwars_PlanetFilmsConnection: starwars_PlanetFilmsConnection;
  starwars_PlanetFilmsEdge: starwars_PlanetFilmsEdge;
  starwars_SpeciesPeopleConnection: starwars_SpeciesPeopleConnection;
  starwars_SpeciesPeopleEdge: starwars_SpeciesPeopleEdge;
  starwars_SpeciesFilmsConnection: starwars_SpeciesFilmsConnection;
  starwars_SpeciesFilmsEdge: starwars_SpeciesFilmsEdge;
  starwars_FilmStarshipsConnection: starwars_FilmStarshipsConnection;
  starwars_FilmStarshipsEdge: starwars_FilmStarshipsEdge;
  starwars_FilmVehiclesConnection: starwars_FilmVehiclesConnection;
  starwars_FilmVehiclesEdge: starwars_FilmVehiclesEdge;
  starwars_FilmCharactersConnection: starwars_FilmCharactersConnection;
  starwars_FilmCharactersEdge: starwars_FilmCharactersEdge;
  starwars_FilmPlanetsConnection: starwars_FilmPlanetsConnection;
  starwars_FilmPlanetsEdge: starwars_FilmPlanetsEdge;
  starwars_PeopleConnection: starwars_PeopleConnection;
  starwars_PeopleEdge: starwars_PeopleEdge;
  starwars_PlanetsConnection: starwars_PlanetsConnection;
  starwars_PlanetsEdge: starwars_PlanetsEdge;
  starwars_SpeciesConnection: starwars_SpeciesConnection;
  starwars_SpeciesEdge: starwars_SpeciesEdge;
  starwars_StarshipsConnection: starwars_StarshipsConnection;
  starwars_StarshipsEdge: starwars_StarshipsEdge;
  starwars_VehiclesConnection: starwars_VehiclesConnection;
  starwars_VehiclesEdge: starwars_VehiclesEdge;
  countries_Continent: countries_Continent;
  countries_ContinentFilterInput: countries_ContinentFilterInput;
  countries_Country: countries_Country;
  countries_CountryFilterInput: countries_CountryFilterInput;
  countries_Language: countries_Language;
  countries_LanguageFilterInput: countries_LanguageFilterInput;
  countries_State: countries_State;
  countries_StringQueryOperatorInput: countries_StringQueryOperatorInput;
  countries_Subdivision: countries_Subdivision;
}>;

export type QueryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  starwars_allFilms?: Resolver<Maybe<ResolversTypes['starwars_FilmsConnection']>, ParentType, ContextType, Partial<Querystarwars_allFilmsArgs>>;
  starwars_film?: Resolver<Maybe<ResolversTypes['starwars_Film']>, ParentType, ContextType, Partial<Querystarwars_filmArgs>>;
  starwars_allPeople?: Resolver<Maybe<ResolversTypes['starwars_PeopleConnection']>, ParentType, ContextType, Partial<Querystarwars_allPeopleArgs>>;
  starwars_person?: Resolver<Maybe<ResolversTypes['starwars_Person']>, ParentType, ContextType, Partial<Querystarwars_personArgs>>;
  starwars_allPlanets?: Resolver<Maybe<ResolversTypes['starwars_PlanetsConnection']>, ParentType, ContextType, Partial<Querystarwars_allPlanetsArgs>>;
  starwars_planet?: Resolver<Maybe<ResolversTypes['starwars_Planet']>, ParentType, ContextType, Partial<Querystarwars_planetArgs>>;
  starwars_allSpecies?: Resolver<Maybe<ResolversTypes['starwars_SpeciesConnection']>, ParentType, ContextType, Partial<Querystarwars_allSpeciesArgs>>;
  starwars_species?: Resolver<Maybe<ResolversTypes['starwars_Species']>, ParentType, ContextType, Partial<Querystarwars_speciesArgs>>;
  starwars_allStarships?: Resolver<Maybe<ResolversTypes['starwars_StarshipsConnection']>, ParentType, ContextType, Partial<Querystarwars_allStarshipsArgs>>;
  starwars_starship?: Resolver<Maybe<ResolversTypes['starwars_Starship']>, ParentType, ContextType, Partial<Querystarwars_starshipArgs>>;
  starwars_allVehicles?: Resolver<Maybe<ResolversTypes['starwars_VehiclesConnection']>, ParentType, ContextType, Partial<Querystarwars_allVehiclesArgs>>;
  starwars_vehicle?: Resolver<Maybe<ResolversTypes['starwars_Vehicle']>, ParentType, ContextType, Partial<Querystarwars_vehicleArgs>>;
  starwars_node?: Resolver<Maybe<ResolversTypes['starwars_Node']>, ParentType, ContextType, RequireFields<Querystarwars_nodeArgs, 'id'>>;
  countries_continent?: Resolver<Maybe<ResolversTypes['countries_Continent']>, ParentType, ContextType, RequireFields<Querycountries_continentArgs, 'code'>>;
  countries_continents?: Resolver<Array<ResolversTypes['countries_Continent']>, ParentType, ContextType, RequireFields<Querycountries_continentsArgs, 'filter'>>;
  countries_countries?: Resolver<Array<ResolversTypes['countries_Country']>, ParentType, ContextType, RequireFields<Querycountries_countriesArgs, 'filter'>>;
  countries_country?: Resolver<Maybe<ResolversTypes['countries_Country']>, ParentType, ContextType, RequireFields<Querycountries_countryArgs, 'code'>>;
  countries_language?: Resolver<Maybe<ResolversTypes['countries_Language']>, ParentType, ContextType, RequireFields<Querycountries_languageArgs, 'code'>>;
  countries_languages?: Resolver<Array<ResolversTypes['countries_Language']>, ParentType, ContextType, RequireFields<Querycountries_languagesArgs, 'filter'>>;
}>;

export type starwars_FilmsConnectionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['starwars_FilmsConnection'] = ResolversParentTypes['starwars_FilmsConnection']> = ResolversObject<{
  pageInfo?: Resolver<ResolversTypes['starwars_PageInfo'], ParentType, ContextType>;
  edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['starwars_FilmsEdge']>>>, ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  films?: Resolver<Maybe<Array<Maybe<ResolversTypes['starwars_Film']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type starwars_PageInfoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['starwars_PageInfo'] = ResolversParentTypes['starwars_PageInfo']> = ResolversObject<{
  hasNextPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  hasPreviousPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  startCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  endCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type starwars_FilmsEdgeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['starwars_FilmsEdge'] = ResolversParentTypes['starwars_FilmsEdge']> = ResolversObject<{
  node?: Resolver<Maybe<ResolversTypes['starwars_Film']>, ParentType, ContextType>;
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type starwars_FilmResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['starwars_Film'] = ResolversParentTypes['starwars_Film']> = ResolversObject<{
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  episodeID?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  openingCrawl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  director?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  producers?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  releaseDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  speciesConnection?: Resolver<Maybe<ResolversTypes['starwars_FilmSpeciesConnection']>, ParentType, ContextType, Partial<starwars_FilmspeciesConnectionArgs>>;
  starshipConnection?: Resolver<Maybe<ResolversTypes['starwars_FilmStarshipsConnection']>, ParentType, ContextType, Partial<starwars_FilmstarshipConnectionArgs>>;
  vehicleConnection?: Resolver<Maybe<ResolversTypes['starwars_FilmVehiclesConnection']>, ParentType, ContextType, Partial<starwars_FilmvehicleConnectionArgs>>;
  characterConnection?: Resolver<Maybe<ResolversTypes['starwars_FilmCharactersConnection']>, ParentType, ContextType, Partial<starwars_FilmcharacterConnectionArgs>>;
  planetConnection?: Resolver<Maybe<ResolversTypes['starwars_FilmPlanetsConnection']>, ParentType, ContextType, Partial<starwars_FilmplanetConnectionArgs>>;
  created?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  edited?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type starwars_NodeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['starwars_Node'] = ResolversParentTypes['starwars_Node']> = ResolversObject<{
  __resolveType: TypeResolveFn<'starwars_Film' | 'starwars_Species' | 'starwars_Planet' | 'starwars_Person' | 'starwars_Starship' | 'starwars_Vehicle', ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
}>;

export type starwars_FilmSpeciesConnectionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['starwars_FilmSpeciesConnection'] = ResolversParentTypes['starwars_FilmSpeciesConnection']> = ResolversObject<{
  pageInfo?: Resolver<ResolversTypes['starwars_PageInfo'], ParentType, ContextType>;
  edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['starwars_FilmSpeciesEdge']>>>, ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  species?: Resolver<Maybe<Array<Maybe<ResolversTypes['starwars_Species']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type starwars_FilmSpeciesEdgeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['starwars_FilmSpeciesEdge'] = ResolversParentTypes['starwars_FilmSpeciesEdge']> = ResolversObject<{
  node?: Resolver<Maybe<ResolversTypes['starwars_Species']>, ParentType, ContextType>;
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type starwars_SpeciesResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['starwars_Species'] = ResolversParentTypes['starwars_Species']> = ResolversObject<{
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  classification?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  designation?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  averageHeight?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  averageLifespan?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  eyeColors?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  hairColors?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  skinColors?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  language?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  homeworld?: Resolver<Maybe<ResolversTypes['starwars_Planet']>, ParentType, ContextType>;
  personConnection?: Resolver<Maybe<ResolversTypes['starwars_SpeciesPeopleConnection']>, ParentType, ContextType, Partial<starwars_SpeciespersonConnectionArgs>>;
  filmConnection?: Resolver<Maybe<ResolversTypes['starwars_SpeciesFilmsConnection']>, ParentType, ContextType, Partial<starwars_SpeciesfilmConnectionArgs>>;
  created?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  edited?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type starwars_PlanetResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['starwars_Planet'] = ResolversParentTypes['starwars_Planet']> = ResolversObject<{
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  diameter?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  rotationPeriod?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  orbitalPeriod?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  gravity?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  population?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  climates?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  terrains?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  surfaceWater?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  residentConnection?: Resolver<Maybe<ResolversTypes['starwars_PlanetResidentsConnection']>, ParentType, ContextType, Partial<starwars_PlanetresidentConnectionArgs>>;
  filmConnection?: Resolver<Maybe<ResolversTypes['starwars_PlanetFilmsConnection']>, ParentType, ContextType, Partial<starwars_PlanetfilmConnectionArgs>>;
  created?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  edited?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type starwars_PlanetResidentsConnectionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['starwars_PlanetResidentsConnection'] = ResolversParentTypes['starwars_PlanetResidentsConnection']> = ResolversObject<{
  pageInfo?: Resolver<ResolversTypes['starwars_PageInfo'], ParentType, ContextType>;
  edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['starwars_PlanetResidentsEdge']>>>, ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  residents?: Resolver<Maybe<Array<Maybe<ResolversTypes['starwars_Person']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type starwars_PlanetResidentsEdgeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['starwars_PlanetResidentsEdge'] = ResolversParentTypes['starwars_PlanetResidentsEdge']> = ResolversObject<{
  node?: Resolver<Maybe<ResolversTypes['starwars_Person']>, ParentType, ContextType>;
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type starwars_PersonResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['starwars_Person'] = ResolversParentTypes['starwars_Person']> = ResolversObject<{
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  birthYear?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  eyeColor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  gender?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hairColor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  height?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  mass?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  skinColor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  homeworld?: Resolver<Maybe<ResolversTypes['starwars_Planet']>, ParentType, ContextType>;
  filmConnection?: Resolver<Maybe<ResolversTypes['starwars_PersonFilmsConnection']>, ParentType, ContextType, Partial<starwars_PersonfilmConnectionArgs>>;
  species?: Resolver<Maybe<ResolversTypes['starwars_Species']>, ParentType, ContextType>;
  starshipConnection?: Resolver<Maybe<ResolversTypes['starwars_PersonStarshipsConnection']>, ParentType, ContextType, Partial<starwars_PersonstarshipConnectionArgs>>;
  vehicleConnection?: Resolver<Maybe<ResolversTypes['starwars_PersonVehiclesConnection']>, ParentType, ContextType, Partial<starwars_PersonvehicleConnectionArgs>>;
  created?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  edited?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type starwars_PersonFilmsConnectionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['starwars_PersonFilmsConnection'] = ResolversParentTypes['starwars_PersonFilmsConnection']> = ResolversObject<{
  pageInfo?: Resolver<ResolversTypes['starwars_PageInfo'], ParentType, ContextType>;
  edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['starwars_PersonFilmsEdge']>>>, ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  films?: Resolver<Maybe<Array<Maybe<ResolversTypes['starwars_Film']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type starwars_PersonFilmsEdgeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['starwars_PersonFilmsEdge'] = ResolversParentTypes['starwars_PersonFilmsEdge']> = ResolversObject<{
  node?: Resolver<Maybe<ResolversTypes['starwars_Film']>, ParentType, ContextType>;
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type starwars_PersonStarshipsConnectionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['starwars_PersonStarshipsConnection'] = ResolversParentTypes['starwars_PersonStarshipsConnection']> = ResolversObject<{
  pageInfo?: Resolver<ResolversTypes['starwars_PageInfo'], ParentType, ContextType>;
  edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['starwars_PersonStarshipsEdge']>>>, ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  starships?: Resolver<Maybe<Array<Maybe<ResolversTypes['starwars_Starship']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type starwars_PersonStarshipsEdgeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['starwars_PersonStarshipsEdge'] = ResolversParentTypes['starwars_PersonStarshipsEdge']> = ResolversObject<{
  node?: Resolver<Maybe<ResolversTypes['starwars_Starship']>, ParentType, ContextType>;
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type starwars_StarshipResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['starwars_Starship'] = ResolversParentTypes['starwars_Starship']> = ResolversObject<{
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  model?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  starshipClass?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  manufacturers?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  costInCredits?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  length?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  crew?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  passengers?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  maxAtmospheringSpeed?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  hyperdriveRating?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  MGLT?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  cargoCapacity?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  consumables?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  pilotConnection?: Resolver<Maybe<ResolversTypes['starwars_StarshipPilotsConnection']>, ParentType, ContextType, Partial<starwars_StarshippilotConnectionArgs>>;
  filmConnection?: Resolver<Maybe<ResolversTypes['starwars_StarshipFilmsConnection']>, ParentType, ContextType, Partial<starwars_StarshipfilmConnectionArgs>>;
  created?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  edited?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type starwars_StarshipPilotsConnectionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['starwars_StarshipPilotsConnection'] = ResolversParentTypes['starwars_StarshipPilotsConnection']> = ResolversObject<{
  pageInfo?: Resolver<ResolversTypes['starwars_PageInfo'], ParentType, ContextType>;
  edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['starwars_StarshipPilotsEdge']>>>, ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  pilots?: Resolver<Maybe<Array<Maybe<ResolversTypes['starwars_Person']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type starwars_StarshipPilotsEdgeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['starwars_StarshipPilotsEdge'] = ResolversParentTypes['starwars_StarshipPilotsEdge']> = ResolversObject<{
  node?: Resolver<Maybe<ResolversTypes['starwars_Person']>, ParentType, ContextType>;
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type starwars_StarshipFilmsConnectionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['starwars_StarshipFilmsConnection'] = ResolversParentTypes['starwars_StarshipFilmsConnection']> = ResolversObject<{
  pageInfo?: Resolver<ResolversTypes['starwars_PageInfo'], ParentType, ContextType>;
  edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['starwars_StarshipFilmsEdge']>>>, ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  films?: Resolver<Maybe<Array<Maybe<ResolversTypes['starwars_Film']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type starwars_StarshipFilmsEdgeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['starwars_StarshipFilmsEdge'] = ResolversParentTypes['starwars_StarshipFilmsEdge']> = ResolversObject<{
  node?: Resolver<Maybe<ResolversTypes['starwars_Film']>, ParentType, ContextType>;
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type starwars_PersonVehiclesConnectionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['starwars_PersonVehiclesConnection'] = ResolversParentTypes['starwars_PersonVehiclesConnection']> = ResolversObject<{
  pageInfo?: Resolver<ResolversTypes['starwars_PageInfo'], ParentType, ContextType>;
  edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['starwars_PersonVehiclesEdge']>>>, ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  vehicles?: Resolver<Maybe<Array<Maybe<ResolversTypes['starwars_Vehicle']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type starwars_PersonVehiclesEdgeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['starwars_PersonVehiclesEdge'] = ResolversParentTypes['starwars_PersonVehiclesEdge']> = ResolversObject<{
  node?: Resolver<Maybe<ResolversTypes['starwars_Vehicle']>, ParentType, ContextType>;
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type starwars_VehicleResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['starwars_Vehicle'] = ResolversParentTypes['starwars_Vehicle']> = ResolversObject<{
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  model?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  vehicleClass?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  manufacturers?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  costInCredits?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  length?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  crew?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  passengers?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  maxAtmospheringSpeed?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  cargoCapacity?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  consumables?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  pilotConnection?: Resolver<Maybe<ResolversTypes['starwars_VehiclePilotsConnection']>, ParentType, ContextType, Partial<starwars_VehiclepilotConnectionArgs>>;
  filmConnection?: Resolver<Maybe<ResolversTypes['starwars_VehicleFilmsConnection']>, ParentType, ContextType, Partial<starwars_VehiclefilmConnectionArgs>>;
  created?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  edited?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type starwars_VehiclePilotsConnectionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['starwars_VehiclePilotsConnection'] = ResolversParentTypes['starwars_VehiclePilotsConnection']> = ResolversObject<{
  pageInfo?: Resolver<ResolversTypes['starwars_PageInfo'], ParentType, ContextType>;
  edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['starwars_VehiclePilotsEdge']>>>, ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  pilots?: Resolver<Maybe<Array<Maybe<ResolversTypes['starwars_Person']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type starwars_VehiclePilotsEdgeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['starwars_VehiclePilotsEdge'] = ResolversParentTypes['starwars_VehiclePilotsEdge']> = ResolversObject<{
  node?: Resolver<Maybe<ResolversTypes['starwars_Person']>, ParentType, ContextType>;
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type starwars_VehicleFilmsConnectionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['starwars_VehicleFilmsConnection'] = ResolversParentTypes['starwars_VehicleFilmsConnection']> = ResolversObject<{
  pageInfo?: Resolver<ResolversTypes['starwars_PageInfo'], ParentType, ContextType>;
  edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['starwars_VehicleFilmsEdge']>>>, ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  films?: Resolver<Maybe<Array<Maybe<ResolversTypes['starwars_Film']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type starwars_VehicleFilmsEdgeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['starwars_VehicleFilmsEdge'] = ResolversParentTypes['starwars_VehicleFilmsEdge']> = ResolversObject<{
  node?: Resolver<Maybe<ResolversTypes['starwars_Film']>, ParentType, ContextType>;
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type starwars_PlanetFilmsConnectionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['starwars_PlanetFilmsConnection'] = ResolversParentTypes['starwars_PlanetFilmsConnection']> = ResolversObject<{
  pageInfo?: Resolver<ResolversTypes['starwars_PageInfo'], ParentType, ContextType>;
  edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['starwars_PlanetFilmsEdge']>>>, ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  films?: Resolver<Maybe<Array<Maybe<ResolversTypes['starwars_Film']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type starwars_PlanetFilmsEdgeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['starwars_PlanetFilmsEdge'] = ResolversParentTypes['starwars_PlanetFilmsEdge']> = ResolversObject<{
  node?: Resolver<Maybe<ResolversTypes['starwars_Film']>, ParentType, ContextType>;
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type starwars_SpeciesPeopleConnectionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['starwars_SpeciesPeopleConnection'] = ResolversParentTypes['starwars_SpeciesPeopleConnection']> = ResolversObject<{
  pageInfo?: Resolver<ResolversTypes['starwars_PageInfo'], ParentType, ContextType>;
  edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['starwars_SpeciesPeopleEdge']>>>, ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  people?: Resolver<Maybe<Array<Maybe<ResolversTypes['starwars_Person']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type starwars_SpeciesPeopleEdgeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['starwars_SpeciesPeopleEdge'] = ResolversParentTypes['starwars_SpeciesPeopleEdge']> = ResolversObject<{
  node?: Resolver<Maybe<ResolversTypes['starwars_Person']>, ParentType, ContextType>;
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type starwars_SpeciesFilmsConnectionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['starwars_SpeciesFilmsConnection'] = ResolversParentTypes['starwars_SpeciesFilmsConnection']> = ResolversObject<{
  pageInfo?: Resolver<ResolversTypes['starwars_PageInfo'], ParentType, ContextType>;
  edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['starwars_SpeciesFilmsEdge']>>>, ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  films?: Resolver<Maybe<Array<Maybe<ResolversTypes['starwars_Film']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type starwars_SpeciesFilmsEdgeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['starwars_SpeciesFilmsEdge'] = ResolversParentTypes['starwars_SpeciesFilmsEdge']> = ResolversObject<{
  node?: Resolver<Maybe<ResolversTypes['starwars_Film']>, ParentType, ContextType>;
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type starwars_FilmStarshipsConnectionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['starwars_FilmStarshipsConnection'] = ResolversParentTypes['starwars_FilmStarshipsConnection']> = ResolversObject<{
  pageInfo?: Resolver<ResolversTypes['starwars_PageInfo'], ParentType, ContextType>;
  edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['starwars_FilmStarshipsEdge']>>>, ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  starships?: Resolver<Maybe<Array<Maybe<ResolversTypes['starwars_Starship']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type starwars_FilmStarshipsEdgeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['starwars_FilmStarshipsEdge'] = ResolversParentTypes['starwars_FilmStarshipsEdge']> = ResolversObject<{
  node?: Resolver<Maybe<ResolversTypes['starwars_Starship']>, ParentType, ContextType>;
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type starwars_FilmVehiclesConnectionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['starwars_FilmVehiclesConnection'] = ResolversParentTypes['starwars_FilmVehiclesConnection']> = ResolversObject<{
  pageInfo?: Resolver<ResolversTypes['starwars_PageInfo'], ParentType, ContextType>;
  edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['starwars_FilmVehiclesEdge']>>>, ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  vehicles?: Resolver<Maybe<Array<Maybe<ResolversTypes['starwars_Vehicle']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type starwars_FilmVehiclesEdgeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['starwars_FilmVehiclesEdge'] = ResolversParentTypes['starwars_FilmVehiclesEdge']> = ResolversObject<{
  node?: Resolver<Maybe<ResolversTypes['starwars_Vehicle']>, ParentType, ContextType>;
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type starwars_FilmCharactersConnectionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['starwars_FilmCharactersConnection'] = ResolversParentTypes['starwars_FilmCharactersConnection']> = ResolversObject<{
  pageInfo?: Resolver<ResolversTypes['starwars_PageInfo'], ParentType, ContextType>;
  edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['starwars_FilmCharactersEdge']>>>, ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  characters?: Resolver<Maybe<Array<Maybe<ResolversTypes['starwars_Person']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type starwars_FilmCharactersEdgeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['starwars_FilmCharactersEdge'] = ResolversParentTypes['starwars_FilmCharactersEdge']> = ResolversObject<{
  node?: Resolver<Maybe<ResolversTypes['starwars_Person']>, ParentType, ContextType>;
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type starwars_FilmPlanetsConnectionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['starwars_FilmPlanetsConnection'] = ResolversParentTypes['starwars_FilmPlanetsConnection']> = ResolversObject<{
  pageInfo?: Resolver<ResolversTypes['starwars_PageInfo'], ParentType, ContextType>;
  edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['starwars_FilmPlanetsEdge']>>>, ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  planets?: Resolver<Maybe<Array<Maybe<ResolversTypes['starwars_Planet']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type starwars_FilmPlanetsEdgeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['starwars_FilmPlanetsEdge'] = ResolversParentTypes['starwars_FilmPlanetsEdge']> = ResolversObject<{
  node?: Resolver<Maybe<ResolversTypes['starwars_Planet']>, ParentType, ContextType>;
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type starwars_PeopleConnectionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['starwars_PeopleConnection'] = ResolversParentTypes['starwars_PeopleConnection']> = ResolversObject<{
  pageInfo?: Resolver<ResolversTypes['starwars_PageInfo'], ParentType, ContextType>;
  edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['starwars_PeopleEdge']>>>, ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  people?: Resolver<Maybe<Array<Maybe<ResolversTypes['starwars_Person']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type starwars_PeopleEdgeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['starwars_PeopleEdge'] = ResolversParentTypes['starwars_PeopleEdge']> = ResolversObject<{
  node?: Resolver<Maybe<ResolversTypes['starwars_Person']>, ParentType, ContextType>;
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type starwars_PlanetsConnectionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['starwars_PlanetsConnection'] = ResolversParentTypes['starwars_PlanetsConnection']> = ResolversObject<{
  pageInfo?: Resolver<ResolversTypes['starwars_PageInfo'], ParentType, ContextType>;
  edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['starwars_PlanetsEdge']>>>, ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  planets?: Resolver<Maybe<Array<Maybe<ResolversTypes['starwars_Planet']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type starwars_PlanetsEdgeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['starwars_PlanetsEdge'] = ResolversParentTypes['starwars_PlanetsEdge']> = ResolversObject<{
  node?: Resolver<Maybe<ResolversTypes['starwars_Planet']>, ParentType, ContextType>;
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type starwars_SpeciesConnectionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['starwars_SpeciesConnection'] = ResolversParentTypes['starwars_SpeciesConnection']> = ResolversObject<{
  pageInfo?: Resolver<ResolversTypes['starwars_PageInfo'], ParentType, ContextType>;
  edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['starwars_SpeciesEdge']>>>, ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  species?: Resolver<Maybe<Array<Maybe<ResolversTypes['starwars_Species']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type starwars_SpeciesEdgeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['starwars_SpeciesEdge'] = ResolversParentTypes['starwars_SpeciesEdge']> = ResolversObject<{
  node?: Resolver<Maybe<ResolversTypes['starwars_Species']>, ParentType, ContextType>;
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type starwars_StarshipsConnectionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['starwars_StarshipsConnection'] = ResolversParentTypes['starwars_StarshipsConnection']> = ResolversObject<{
  pageInfo?: Resolver<ResolversTypes['starwars_PageInfo'], ParentType, ContextType>;
  edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['starwars_StarshipsEdge']>>>, ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  starships?: Resolver<Maybe<Array<Maybe<ResolversTypes['starwars_Starship']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type starwars_StarshipsEdgeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['starwars_StarshipsEdge'] = ResolversParentTypes['starwars_StarshipsEdge']> = ResolversObject<{
  node?: Resolver<Maybe<ResolversTypes['starwars_Starship']>, ParentType, ContextType>;
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type starwars_VehiclesConnectionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['starwars_VehiclesConnection'] = ResolversParentTypes['starwars_VehiclesConnection']> = ResolversObject<{
  pageInfo?: Resolver<ResolversTypes['starwars_PageInfo'], ParentType, ContextType>;
  edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['starwars_VehiclesEdge']>>>, ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  vehicles?: Resolver<Maybe<Array<Maybe<ResolversTypes['starwars_Vehicle']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type starwars_VehiclesEdgeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['starwars_VehiclesEdge'] = ResolversParentTypes['starwars_VehiclesEdge']> = ResolversObject<{
  node?: Resolver<Maybe<ResolversTypes['starwars_Vehicle']>, ParentType, ContextType>;
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type countries_ContinentResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['countries_Continent'] = ResolversParentTypes['countries_Continent']> = ResolversObject<{
  code?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  countries?: Resolver<Array<ResolversTypes['countries_Country']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type countries_CountryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['countries_Country'] = ResolversParentTypes['countries_Country']> = ResolversObject<{
  awsRegion?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  capital?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  code?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  continent?: Resolver<ResolversTypes['countries_Continent'], ParentType, ContextType>;
  currencies?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  currency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  emoji?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  emojiU?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  languages?: Resolver<Array<ResolversTypes['countries_Language']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType, Partial<countries_CountrynameArgs>>;
  native?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  phone?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  phones?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  states?: Resolver<Array<ResolversTypes['countries_State']>, ParentType, ContextType>;
  subdivisions?: Resolver<Array<ResolversTypes['countries_Subdivision']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type countries_LanguageResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['countries_Language'] = ResolversParentTypes['countries_Language']> = ResolversObject<{
  code?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  native?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  rtl?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type countries_StateResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['countries_State'] = ResolversParentTypes['countries_State']> = ResolversObject<{
  code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  country?: Resolver<ResolversTypes['countries_Country'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type countries_SubdivisionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['countries_Subdivision'] = ResolversParentTypes['countries_Subdivision']> = ResolversObject<{
  code?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  emoji?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = MeshContext> = ResolversObject<{
  Query?: QueryResolvers<ContextType>;
  starwars_FilmsConnection?: starwars_FilmsConnectionResolvers<ContextType>;
  starwars_PageInfo?: starwars_PageInfoResolvers<ContextType>;
  starwars_FilmsEdge?: starwars_FilmsEdgeResolvers<ContextType>;
  starwars_Film?: starwars_FilmResolvers<ContextType>;
  starwars_Node?: starwars_NodeResolvers<ContextType>;
  starwars_FilmSpeciesConnection?: starwars_FilmSpeciesConnectionResolvers<ContextType>;
  starwars_FilmSpeciesEdge?: starwars_FilmSpeciesEdgeResolvers<ContextType>;
  starwars_Species?: starwars_SpeciesResolvers<ContextType>;
  starwars_Planet?: starwars_PlanetResolvers<ContextType>;
  starwars_PlanetResidentsConnection?: starwars_PlanetResidentsConnectionResolvers<ContextType>;
  starwars_PlanetResidentsEdge?: starwars_PlanetResidentsEdgeResolvers<ContextType>;
  starwars_Person?: starwars_PersonResolvers<ContextType>;
  starwars_PersonFilmsConnection?: starwars_PersonFilmsConnectionResolvers<ContextType>;
  starwars_PersonFilmsEdge?: starwars_PersonFilmsEdgeResolvers<ContextType>;
  starwars_PersonStarshipsConnection?: starwars_PersonStarshipsConnectionResolvers<ContextType>;
  starwars_PersonStarshipsEdge?: starwars_PersonStarshipsEdgeResolvers<ContextType>;
  starwars_Starship?: starwars_StarshipResolvers<ContextType>;
  starwars_StarshipPilotsConnection?: starwars_StarshipPilotsConnectionResolvers<ContextType>;
  starwars_StarshipPilotsEdge?: starwars_StarshipPilotsEdgeResolvers<ContextType>;
  starwars_StarshipFilmsConnection?: starwars_StarshipFilmsConnectionResolvers<ContextType>;
  starwars_StarshipFilmsEdge?: starwars_StarshipFilmsEdgeResolvers<ContextType>;
  starwars_PersonVehiclesConnection?: starwars_PersonVehiclesConnectionResolvers<ContextType>;
  starwars_PersonVehiclesEdge?: starwars_PersonVehiclesEdgeResolvers<ContextType>;
  starwars_Vehicle?: starwars_VehicleResolvers<ContextType>;
  starwars_VehiclePilotsConnection?: starwars_VehiclePilotsConnectionResolvers<ContextType>;
  starwars_VehiclePilotsEdge?: starwars_VehiclePilotsEdgeResolvers<ContextType>;
  starwars_VehicleFilmsConnection?: starwars_VehicleFilmsConnectionResolvers<ContextType>;
  starwars_VehicleFilmsEdge?: starwars_VehicleFilmsEdgeResolvers<ContextType>;
  starwars_PlanetFilmsConnection?: starwars_PlanetFilmsConnectionResolvers<ContextType>;
  starwars_PlanetFilmsEdge?: starwars_PlanetFilmsEdgeResolvers<ContextType>;
  starwars_SpeciesPeopleConnection?: starwars_SpeciesPeopleConnectionResolvers<ContextType>;
  starwars_SpeciesPeopleEdge?: starwars_SpeciesPeopleEdgeResolvers<ContextType>;
  starwars_SpeciesFilmsConnection?: starwars_SpeciesFilmsConnectionResolvers<ContextType>;
  starwars_SpeciesFilmsEdge?: starwars_SpeciesFilmsEdgeResolvers<ContextType>;
  starwars_FilmStarshipsConnection?: starwars_FilmStarshipsConnectionResolvers<ContextType>;
  starwars_FilmStarshipsEdge?: starwars_FilmStarshipsEdgeResolvers<ContextType>;
  starwars_FilmVehiclesConnection?: starwars_FilmVehiclesConnectionResolvers<ContextType>;
  starwars_FilmVehiclesEdge?: starwars_FilmVehiclesEdgeResolvers<ContextType>;
  starwars_FilmCharactersConnection?: starwars_FilmCharactersConnectionResolvers<ContextType>;
  starwars_FilmCharactersEdge?: starwars_FilmCharactersEdgeResolvers<ContextType>;
  starwars_FilmPlanetsConnection?: starwars_FilmPlanetsConnectionResolvers<ContextType>;
  starwars_FilmPlanetsEdge?: starwars_FilmPlanetsEdgeResolvers<ContextType>;
  starwars_PeopleConnection?: starwars_PeopleConnectionResolvers<ContextType>;
  starwars_PeopleEdge?: starwars_PeopleEdgeResolvers<ContextType>;
  starwars_PlanetsConnection?: starwars_PlanetsConnectionResolvers<ContextType>;
  starwars_PlanetsEdge?: starwars_PlanetsEdgeResolvers<ContextType>;
  starwars_SpeciesConnection?: starwars_SpeciesConnectionResolvers<ContextType>;
  starwars_SpeciesEdge?: starwars_SpeciesEdgeResolvers<ContextType>;
  starwars_StarshipsConnection?: starwars_StarshipsConnectionResolvers<ContextType>;
  starwars_StarshipsEdge?: starwars_StarshipsEdgeResolvers<ContextType>;
  starwars_VehiclesConnection?: starwars_VehiclesConnectionResolvers<ContextType>;
  starwars_VehiclesEdge?: starwars_VehiclesEdgeResolvers<ContextType>;
  countries_Continent?: countries_ContinentResolvers<ContextType>;
  countries_Country?: countries_CountryResolvers<ContextType>;
  countries_Language?: countries_LanguageResolvers<ContextType>;
  countries_State?: countries_StateResolvers<ContextType>;
  countries_Subdivision?: countries_SubdivisionResolvers<ContextType>;
}>;


export type MeshContext = StarWarsTypes.Context & CountriesTypes.Context & BaseMeshContext;


const baseDir = pathModule.join(typeof __dirname === 'string' ? __dirname : '/', '..');

const importFn: ImportFn = <T>(moduleId: string) => {
  const relativeModuleId = (pathModule.isAbsolute(moduleId) ? pathModule.relative(baseDir, moduleId) : moduleId).split('\\').join('/').replace(baseDir + '/', '');
  switch(relativeModuleId) {
    default:
      return Promise.reject(new Error(`Cannot find module '${relativeModuleId}'.`));
  }
};

const rootStore = new MeshStore('.mesh', new FsStoreStorageAdapter({
  cwd: baseDir,
  importFn,
  fileType: "ts",
}), {
  readonly: true,
  validate: false
});

export function getMeshOptions() {
  console.warn('WARNING: These artifacts are built for development mode. Please run "mesh build" to build production artifacts');
  return findAndParseConfig({
    dir: baseDir,
    artifactsDir: ".mesh",
    configName: "mesh",
    additionalPackagePrefixes: [],
    initialLoggerPrefix: "🕸️  Mesh",
  });
}

export function createBuiltMeshHTTPHandler<TServerContext = {}>(): MeshHTTPHandler<TServerContext> {
  return createMeshHTTPHandler<TServerContext>({
    baseDir,
    getBuiltMesh: getBuiltMesh,
    rawServeConfig: {"playground":true},
  })
}

let meshInstance$: Promise<MeshInstance> | undefined;

export const pollingInterval = null;

export function getBuiltMesh(): Promise<MeshInstance> {
  if (meshInstance$ == null) {
    if (pollingInterval) {
      setInterval(() => {
        getMeshOptions()
        .then(meshOptions => getMesh(meshOptions))
        .then(newMesh =>
          meshInstance$.then(oldMesh => {
            oldMesh.destroy()
            meshInstance$ = Promise.resolve(newMesh)
          })
        ).catch(err => {
          console.error("Mesh polling failed so the existing version will be used:", err);
        });
      }, pollingInterval)
    }
    meshInstance$ = getMeshOptions().then(meshOptions => getMesh(meshOptions)).then(mesh => {
      const id = mesh.pubsub.subscribe('destroy', () => {
        meshInstance$ = undefined;
        mesh.pubsub.unsubscribe(id);
      });
      return mesh;
    });
  }
  return meshInstance$;
}

export const execute: ExecuteMeshFn = (...args) => getBuiltMesh().then(({ execute }) => execute(...args));

export const subscribe: SubscribeMeshFn = (...args) => getBuiltMesh().then(({ subscribe }) => subscribe(...args));