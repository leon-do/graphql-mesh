// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace StarWarsTypes {
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

export type Root = {
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
};


export type Rootstarwars_allFilmsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type Rootstarwars_filmArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  filmID?: InputMaybe<Scalars['ID']['input']>;
};


export type Rootstarwars_allPeopleArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type Rootstarwars_personArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  personID?: InputMaybe<Scalars['ID']['input']>;
};


export type Rootstarwars_allPlanetsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type Rootstarwars_planetArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  planetID?: InputMaybe<Scalars['ID']['input']>;
};


export type Rootstarwars_allSpeciesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type Rootstarwars_speciesArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  speciesID?: InputMaybe<Scalars['ID']['input']>;
};


export type Rootstarwars_allStarshipsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type Rootstarwars_starshipArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  starshipID?: InputMaybe<Scalars['ID']['input']>;
};


export type Rootstarwars_allVehiclesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type Rootstarwars_vehicleArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  vehicleID?: InputMaybe<Scalars['ID']['input']>;
};


export type Rootstarwars_nodeArgs = {
  id: Scalars['ID']['input'];
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

  export type QuerySdk = {
      /** null **/
  starwars_allFilms: InContextSdkMethod<Root['starwars_allFilms'], Rootstarwars_allFilmsArgs, MeshContext>,
  /** null **/
  starwars_film: InContextSdkMethod<Root['starwars_film'], Rootstarwars_filmArgs, MeshContext>,
  /** null **/
  starwars_allPeople: InContextSdkMethod<Root['starwars_allPeople'], Rootstarwars_allPeopleArgs, MeshContext>,
  /** null **/
  starwars_person: InContextSdkMethod<Root['starwars_person'], Rootstarwars_personArgs, MeshContext>,
  /** null **/
  starwars_allPlanets: InContextSdkMethod<Root['starwars_allPlanets'], Rootstarwars_allPlanetsArgs, MeshContext>,
  /** null **/
  starwars_planet: InContextSdkMethod<Root['starwars_planet'], Rootstarwars_planetArgs, MeshContext>,
  /** null **/
  starwars_allSpecies: InContextSdkMethod<Root['starwars_allSpecies'], Rootstarwars_allSpeciesArgs, MeshContext>,
  /** null **/
  starwars_species: InContextSdkMethod<Root['starwars_species'], Rootstarwars_speciesArgs, MeshContext>,
  /** null **/
  starwars_allStarships: InContextSdkMethod<Root['starwars_allStarships'], Rootstarwars_allStarshipsArgs, MeshContext>,
  /** null **/
  starwars_starship: InContextSdkMethod<Root['starwars_starship'], Rootstarwars_starshipArgs, MeshContext>,
  /** null **/
  starwars_allVehicles: InContextSdkMethod<Root['starwars_allVehicles'], Rootstarwars_allVehiclesArgs, MeshContext>,
  /** null **/
  starwars_vehicle: InContextSdkMethod<Root['starwars_vehicle'], Rootstarwars_vehicleArgs, MeshContext>,
  /** Fetches an object given its ID **/
  starwars_node: InContextSdkMethod<starwars_Film | starwars_Species | starwars_Planet | starwars_Person | starwars_Starship | starwars_Vehicle, Rootstarwars_nodeArgs, MeshContext>
  };

  export type MutationSdk = {
    
  };

  export type SubscriptionSdk = {
    
  };

  export type Context = {
      ["Star Wars"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      
    };
}
