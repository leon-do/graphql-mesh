// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace SpaceXTypes {
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
  _Any: { input: any; output: any; }
  _FieldSet: { input: any; output: any; }
  link__Import: { input: any; output: any; }
  Date: { input: any; output: any; }
  ObjectID: { input: any; output: any; }
  timestamptz: { input: any; output: any; }
  uuid: { input: any; output: any; }
  federation__FieldSet: { input: any; output: any; }
};

export type link__Purpose =
  /** `SECURITY` features provide metadata necessary to securely resolve fields. */
  | 'SECURITY'
  /** `EXECUTION` features provide metadata necessary for operation execution. */
  | 'EXECUTION';

export type _Service = {
  sdl: Scalars['String']['output'];
};

export type Query = {
  _service: _Service;
  capsule?: Maybe<Capsule>;
  capsules?: Maybe<Array<Maybe<Capsule>>>;
  capsulesPast?: Maybe<Array<Maybe<Capsule>>>;
  capsulesUpcoming?: Maybe<Array<Maybe<Capsule>>>;
  company?: Maybe<Info>;
  core?: Maybe<Core>;
  cores?: Maybe<Array<Maybe<Core>>>;
  coresPast?: Maybe<Array<Maybe<Core>>>;
  coresUpcoming?: Maybe<Array<Maybe<Core>>>;
  dragon?: Maybe<Dragon>;
  dragons?: Maybe<Array<Maybe<Dragon>>>;
  histories?: Maybe<Array<Maybe<History>>>;
  historiesResult?: Maybe<HistoriesResult>;
  history?: Maybe<History>;
  landpad?: Maybe<Landpad>;
  landpads?: Maybe<Array<Maybe<Landpad>>>;
  launch?: Maybe<Launch>;
  launchLatest?: Maybe<Launch>;
  launchNext?: Maybe<Launch>;
  launches?: Maybe<Array<Maybe<Launch>>>;
  launchesPast?: Maybe<Array<Maybe<Launch>>>;
  launchesPastResult?: Maybe<LaunchesPastResult>;
  launchesUpcoming?: Maybe<Array<Maybe<Launch>>>;
  launchpad?: Maybe<Launchpad>;
  launchpads?: Maybe<Array<Maybe<Launchpad>>>;
  /** @deprecated Mission is not available on REST API after MongoDB deprecation */
  mission?: Maybe<Mission>;
  /** @deprecated Mission is not available on REST API after MongoDB deprecation */
  missions?: Maybe<Array<Maybe<Mission>>>;
  /** @deprecated Mission is not available on REST API after MongoDB deprecation */
  missionsResult?: Maybe<MissionResult>;
  payload?: Maybe<Payload>;
  payloads?: Maybe<Array<Maybe<Payload>>>;
  roadster?: Maybe<Roadster>;
  rocket?: Maybe<Rocket>;
  rockets?: Maybe<Array<Maybe<Rocket>>>;
  rocketsResult?: Maybe<RocketsResult>;
  ship?: Maybe<Ship>;
  ships?: Maybe<Array<Maybe<Ship>>>;
  shipsResult?: Maybe<ShipsResult>;
  /** fetch data from the table: "users" */
  users: Array<users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: users_aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<users>;
};


export type QuerycapsuleArgs = {
  id: Scalars['ID']['input'];
};


export type QuerycapsulesArgs = {
  find?: InputMaybe<CapsulesFind>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
};


export type QuerycapsulesPastArgs = {
  find?: InputMaybe<CapsulesFind>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
};


export type QuerycapsulesUpcomingArgs = {
  find?: InputMaybe<CapsulesFind>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
};


export type QuerycoreArgs = {
  id: Scalars['ID']['input'];
};


export type QuerycoresArgs = {
  find?: InputMaybe<CoresFind>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
};


export type QuerycoresPastArgs = {
  find?: InputMaybe<CoresFind>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
};


export type QuerycoresUpcomingArgs = {
  find?: InputMaybe<CoresFind>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
};


export type QuerydragonArgs = {
  id: Scalars['ID']['input'];
};


export type QuerydragonsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryhistoriesArgs = {
  find?: InputMaybe<HistoryFind>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
};


export type QueryhistoriesResultArgs = {
  find?: InputMaybe<HistoryFind>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
};


export type QueryhistoryArgs = {
  id: Scalars['ID']['input'];
};


export type QuerylandpadArgs = {
  id: Scalars['ID']['input'];
};


export type QuerylandpadsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QuerylaunchArgs = {
  id: Scalars['ID']['input'];
};


export type QuerylaunchLatestArgs = {
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QuerylaunchNextArgs = {
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QuerylaunchesArgs = {
  find?: InputMaybe<LaunchFind>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
};


export type QuerylaunchesPastArgs = {
  find?: InputMaybe<LaunchFind>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
};


export type QuerylaunchesPastResultArgs = {
  find?: InputMaybe<LaunchFind>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
};


export type QuerylaunchesUpcomingArgs = {
  find?: InputMaybe<LaunchFind>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
};


export type QuerylaunchpadArgs = {
  id: Scalars['ID']['input'];
};


export type QuerylaunchpadsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QuerymissionArgs = {
  id: Scalars['ID']['input'];
};


export type QuerymissionsArgs = {
  find?: InputMaybe<MissionsFind>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QuerymissionsResultArgs = {
  find?: InputMaybe<MissionsFind>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QuerypayloadArgs = {
  id: Scalars['ID']['input'];
};


export type QuerypayloadsArgs = {
  find?: InputMaybe<PayloadsFind>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
};


export type QueryrocketArgs = {
  id: Scalars['ID']['input'];
};


export type QueryrocketsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryrocketsResultArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryshipArgs = {
  id: Scalars['ID']['input'];
};


export type QueryshipsArgs = {
  find?: InputMaybe<ShipsFind>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
};


export type QueryshipsResultArgs = {
  find?: InputMaybe<ShipsFind>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
};


export type QueryusersArgs = {
  distinct_on?: InputMaybe<Array<users_select_column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<users_order_by>>;
  where?: InputMaybe<users_bool_exp>;
};


export type Queryusers_aggregateArgs = {
  distinct_on?: InputMaybe<Array<users_select_column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<users_order_by>>;
  where?: InputMaybe<users_bool_exp>;
};


export type Queryusers_by_pkArgs = {
  id: Scalars['uuid']['input'];
};

export type Address = {
  address?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  state?: Maybe<Scalars['String']['output']>;
};

export type Capsule = {
  /** @deprecated This is not available in the REST API after MongoDB has been deprecated */
  dragon?: Maybe<Dragon>;
  id?: Maybe<Scalars['ID']['output']>;
  landings?: Maybe<Scalars['Int']['output']>;
  missions?: Maybe<Array<Maybe<CapsuleMission>>>;
  original_launch?: Maybe<Scalars['Date']['output']>;
  reuse_count?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type CapsuleMission = {
  flight?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type CapsulesFind = {
  id?: InputMaybe<Scalars['ID']['input']>;
  landings?: InputMaybe<Scalars['Int']['input']>;
  mission?: InputMaybe<Scalars['String']['input']>;
  original_launch?: InputMaybe<Scalars['Date']['input']>;
  reuse_count?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type Core = {
  asds_attempts?: Maybe<Scalars['Int']['output']>;
  asds_landings?: Maybe<Scalars['Int']['output']>;
  block?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  missions?: Maybe<Array<Maybe<CapsuleMission>>>;
  original_launch?: Maybe<Scalars['Date']['output']>;
  reuse_count?: Maybe<Scalars['Int']['output']>;
  rtls_attempts?: Maybe<Scalars['Int']['output']>;
  rtls_landings?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  water_landing?: Maybe<Scalars['Boolean']['output']>;
};

export type CoreMission = {
  flight?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type CoresFind = {
  asds_attempts?: InputMaybe<Scalars['Int']['input']>;
  asds_landings?: InputMaybe<Scalars['Int']['input']>;
  block?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  missions?: InputMaybe<Scalars['String']['input']>;
  original_launch?: InputMaybe<Scalars['Date']['input']>;
  reuse_count?: InputMaybe<Scalars['Int']['input']>;
  rtls_attempts?: InputMaybe<Scalars['Int']['input']>;
  rtls_landings?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  water_landing?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Distance = {
  feet?: Maybe<Scalars['Float']['output']>;
  meters?: Maybe<Scalars['Float']['output']>;
};

export type Dragon = {
  active?: Maybe<Scalars['Boolean']['output']>;
  crew_capacity?: Maybe<Scalars['Int']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  diameter?: Maybe<Distance>;
  dry_mass_kg?: Maybe<Scalars['Int']['output']>;
  dry_mass_lb?: Maybe<Scalars['Int']['output']>;
  first_flight?: Maybe<Scalars['String']['output']>;
  heat_shield?: Maybe<DragonHeatShield>;
  height_w_trunk?: Maybe<Distance>;
  id?: Maybe<Scalars['ID']['output']>;
  launch_payload_mass?: Maybe<Mass>;
  launch_payload_vol?: Maybe<Volume>;
  name?: Maybe<Scalars['String']['output']>;
  orbit_duration_yr?: Maybe<Scalars['Int']['output']>;
  pressurized_capsule?: Maybe<DragonPressurizedCapsule>;
  return_payload_mass?: Maybe<Mass>;
  return_payload_vol?: Maybe<Volume>;
  sidewall_angle_deg?: Maybe<Scalars['Float']['output']>;
  thrusters?: Maybe<Array<Maybe<DragonThrust>>>;
  trunk?: Maybe<DragonTrunk>;
  type?: Maybe<Scalars['String']['output']>;
  wikipedia?: Maybe<Scalars['String']['output']>;
};

export type DragonHeatShield = {
  dev_partner?: Maybe<Scalars['String']['output']>;
  material?: Maybe<Scalars['String']['output']>;
  size_meters?: Maybe<Scalars['Float']['output']>;
  temp_degrees?: Maybe<Scalars['Int']['output']>;
};

export type DragonPressurizedCapsule = {
  payload_volume?: Maybe<Volume>;
};

export type DragonThrust = {
  amount?: Maybe<Scalars['Int']['output']>;
  fuel_1?: Maybe<Scalars['String']['output']>;
  fuel_2?: Maybe<Scalars['String']['output']>;
  pods?: Maybe<Scalars['Int']['output']>;
  thrust?: Maybe<Force>;
  type?: Maybe<Scalars['String']['output']>;
};

export type DragonTrunk = {
  cargo?: Maybe<DragonTrunkCargo>;
  trunk_volume?: Maybe<Volume>;
};

export type DragonTrunkCargo = {
  solar_array?: Maybe<Scalars['Int']['output']>;
  unpressurized_cargo?: Maybe<Scalars['Boolean']['output']>;
};

export type Force = {
  kN?: Maybe<Scalars['Float']['output']>;
  lbf?: Maybe<Scalars['Float']['output']>;
};

export type HistoriesResult = {
  data?: Maybe<Array<Maybe<History>>>;
  result?: Maybe<Result>;
};

export type History = {
  details?: Maybe<Scalars['String']['output']>;
  event_date_unix?: Maybe<Scalars['Date']['output']>;
  event_date_utc?: Maybe<Scalars['Date']['output']>;
  flight?: Maybe<Launch>;
  id?: Maybe<Scalars['ID']['output']>;
  links?: Maybe<Link>;
  title?: Maybe<Scalars['String']['output']>;
};

export type HistoryFind = {
  end?: InputMaybe<Scalars['Date']['input']>;
  flight_number?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  start?: InputMaybe<Scalars['Date']['input']>;
};

export type Info = {
  ceo?: Maybe<Scalars['String']['output']>;
  coo?: Maybe<Scalars['String']['output']>;
  cto?: Maybe<Scalars['String']['output']>;
  cto_propulsion?: Maybe<Scalars['String']['output']>;
  employees?: Maybe<Scalars['Int']['output']>;
  founded?: Maybe<Scalars['Int']['output']>;
  founder?: Maybe<Scalars['String']['output']>;
  headquarters?: Maybe<Address>;
  launch_sites?: Maybe<Scalars['Int']['output']>;
  links?: Maybe<InfoLinks>;
  name?: Maybe<Scalars['String']['output']>;
  summary?: Maybe<Scalars['String']['output']>;
  test_sites?: Maybe<Scalars['Int']['output']>;
  valuation?: Maybe<Scalars['Float']['output']>;
  vehicles?: Maybe<Scalars['Int']['output']>;
};

export type InfoLinks = {
  elon_twitter?: Maybe<Scalars['String']['output']>;
  flickr?: Maybe<Scalars['String']['output']>;
  twitter?: Maybe<Scalars['String']['output']>;
  website?: Maybe<Scalars['String']['output']>;
};

export type Landpad = {
  attempted_landings?: Maybe<Scalars['String']['output']>;
  details?: Maybe<Scalars['String']['output']>;
  full_name?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  landing_type?: Maybe<Scalars['String']['output']>;
  location?: Maybe<Location>;
  status?: Maybe<Scalars['String']['output']>;
  successful_landings?: Maybe<Scalars['String']['output']>;
  wikipedia?: Maybe<Scalars['String']['output']>;
};

export type Launch = {
  details?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  is_tentative?: Maybe<Scalars['Boolean']['output']>;
  launch_date_local?: Maybe<Scalars['Date']['output']>;
  launch_date_unix?: Maybe<Scalars['Date']['output']>;
  launch_date_utc?: Maybe<Scalars['Date']['output']>;
  launch_site?: Maybe<LaunchSite>;
  launch_success?: Maybe<Scalars['Boolean']['output']>;
  launch_year?: Maybe<Scalars['String']['output']>;
  links?: Maybe<LaunchLinks>;
  mission_id?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  mission_name?: Maybe<Scalars['String']['output']>;
  rocket?: Maybe<LaunchRocket>;
  ships?: Maybe<Array<Maybe<Ship>>>;
  static_fire_date_unix?: Maybe<Scalars['Date']['output']>;
  static_fire_date_utc?: Maybe<Scalars['Date']['output']>;
  telemetry?: Maybe<LaunchTelemetry>;
  tentative_max_precision?: Maybe<Scalars['String']['output']>;
  upcoming?: Maybe<Scalars['Boolean']['output']>;
};

export type LaunchFind = {
  apoapsis_km?: InputMaybe<Scalars['Float']['input']>;
  block?: InputMaybe<Scalars['Int']['input']>;
  cap_serial?: InputMaybe<Scalars['String']['input']>;
  capsule_reuse?: InputMaybe<Scalars['String']['input']>;
  core_flight?: InputMaybe<Scalars['Int']['input']>;
  core_reuse?: InputMaybe<Scalars['String']['input']>;
  core_serial?: InputMaybe<Scalars['String']['input']>;
  customer?: InputMaybe<Scalars['String']['input']>;
  eccentricity?: InputMaybe<Scalars['Float']['input']>;
  end?: InputMaybe<Scalars['Date']['input']>;
  epoch?: InputMaybe<Scalars['Date']['input']>;
  fairings_recovered?: InputMaybe<Scalars['String']['input']>;
  fairings_recovery_attempt?: InputMaybe<Scalars['String']['input']>;
  fairings_reuse?: InputMaybe<Scalars['String']['input']>;
  fairings_reused?: InputMaybe<Scalars['String']['input']>;
  fairings_ship?: InputMaybe<Scalars['String']['input']>;
  gridfins?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  inclination_deg?: InputMaybe<Scalars['Float']['input']>;
  land_success?: InputMaybe<Scalars['String']['input']>;
  landing_intent?: InputMaybe<Scalars['String']['input']>;
  landing_type?: InputMaybe<Scalars['String']['input']>;
  landing_vehicle?: InputMaybe<Scalars['String']['input']>;
  launch_date_local?: InputMaybe<Scalars['Date']['input']>;
  launch_date_utc?: InputMaybe<Scalars['Date']['input']>;
  launch_success?: InputMaybe<Scalars['String']['input']>;
  launch_year?: InputMaybe<Scalars['String']['input']>;
  legs?: InputMaybe<Scalars['String']['input']>;
  lifespan_years?: InputMaybe<Scalars['Float']['input']>;
  longitude?: InputMaybe<Scalars['Float']['input']>;
  manufacturer?: InputMaybe<Scalars['String']['input']>;
  mean_motion?: InputMaybe<Scalars['Float']['input']>;
  mission_id?: InputMaybe<Scalars['String']['input']>;
  mission_name?: InputMaybe<Scalars['String']['input']>;
  nationality?: InputMaybe<Scalars['String']['input']>;
  norad_id?: InputMaybe<Scalars['Int']['input']>;
  orbit?: InputMaybe<Scalars['String']['input']>;
  payload_id?: InputMaybe<Scalars['String']['input']>;
  payload_type?: InputMaybe<Scalars['String']['input']>;
  periapsis_km?: InputMaybe<Scalars['Float']['input']>;
  period_min?: InputMaybe<Scalars['Float']['input']>;
  raan?: InputMaybe<Scalars['Float']['input']>;
  reference_system?: InputMaybe<Scalars['String']['input']>;
  regime?: InputMaybe<Scalars['String']['input']>;
  reused?: InputMaybe<Scalars['String']['input']>;
  rocket_id?: InputMaybe<Scalars['String']['input']>;
  rocket_name?: InputMaybe<Scalars['String']['input']>;
  rocket_type?: InputMaybe<Scalars['String']['input']>;
  second_stage_block?: InputMaybe<Scalars['String']['input']>;
  semi_major_axis_km?: InputMaybe<Scalars['Float']['input']>;
  ship?: InputMaybe<Scalars['String']['input']>;
  side_core1_reuse?: InputMaybe<Scalars['String']['input']>;
  side_core2_reuse?: InputMaybe<Scalars['String']['input']>;
  site_id?: InputMaybe<Scalars['String']['input']>;
  site_name_long?: InputMaybe<Scalars['String']['input']>;
  site_name?: InputMaybe<Scalars['String']['input']>;
  start?: InputMaybe<Scalars['Date']['input']>;
  tbd?: InputMaybe<Scalars['String']['input']>;
  tentative_max_precision?: InputMaybe<Scalars['String']['input']>;
  tentative?: InputMaybe<Scalars['String']['input']>;
};

export type LaunchLinks = {
  article_link?: Maybe<Scalars['String']['output']>;
  flickr_images?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  mission_patch?: Maybe<Scalars['String']['output']>;
  mission_patch_small?: Maybe<Scalars['String']['output']>;
  presskit?: Maybe<Scalars['String']['output']>;
  reddit_campaign?: Maybe<Scalars['String']['output']>;
  reddit_launch?: Maybe<Scalars['String']['output']>;
  reddit_media?: Maybe<Scalars['String']['output']>;
  reddit_recovery?: Maybe<Scalars['String']['output']>;
  video_link?: Maybe<Scalars['String']['output']>;
  wikipedia?: Maybe<Scalars['String']['output']>;
};

export type LaunchRocket = {
  fairings?: Maybe<LaunchRocketFairings>;
  first_stage?: Maybe<LaunchRocketFirstStage>;
  rocket?: Maybe<Rocket>;
  rocket_name?: Maybe<Scalars['String']['output']>;
  rocket_type?: Maybe<Scalars['String']['output']>;
  second_stage?: Maybe<LaunchRocketSecondStage>;
};

export type LaunchRocketFairings = {
  recovered?: Maybe<Scalars['Boolean']['output']>;
  recovery_attempt?: Maybe<Scalars['Boolean']['output']>;
  reused?: Maybe<Scalars['Boolean']['output']>;
  ship?: Maybe<Scalars['String']['output']>;
};

export type LaunchRocketFirstStage = {
  cores?: Maybe<Array<Maybe<LaunchRocketFirstStageCore>>>;
};

export type LaunchRocketFirstStageCore = {
  block?: Maybe<Scalars['Int']['output']>;
  core?: Maybe<Core>;
  flight?: Maybe<Scalars['Int']['output']>;
  gridfins?: Maybe<Scalars['Boolean']['output']>;
  land_success?: Maybe<Scalars['Boolean']['output']>;
  landing_intent?: Maybe<Scalars['Boolean']['output']>;
  landing_type?: Maybe<Scalars['String']['output']>;
  landing_vehicle?: Maybe<Scalars['String']['output']>;
  legs?: Maybe<Scalars['Boolean']['output']>;
  reused?: Maybe<Scalars['Boolean']['output']>;
};

export type LaunchRocketSecondStage = {
  block?: Maybe<Scalars['Int']['output']>;
  payloads?: Maybe<Array<Maybe<Payload>>>;
};

export type LaunchSite = {
  site_id?: Maybe<Scalars['String']['output']>;
  site_name?: Maybe<Scalars['String']['output']>;
  site_name_long?: Maybe<Scalars['String']['output']>;
};

export type LaunchTelemetry = {
  flight_club?: Maybe<Scalars['String']['output']>;
};

export type LaunchesPastResult = {
  data?: Maybe<Array<Maybe<Launch>>>;
  result?: Maybe<Result>;
};

export type Launchpad = {
  attempted_launches?: Maybe<Scalars['Int']['output']>;
  details?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  location?: Maybe<Location>;
  name?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  successful_launches?: Maybe<Scalars['Int']['output']>;
  vehicles_launched?: Maybe<Array<Maybe<Rocket>>>;
  wikipedia?: Maybe<Scalars['String']['output']>;
};

export type Link = {
  article?: Maybe<Scalars['String']['output']>;
  reddit?: Maybe<Scalars['String']['output']>;
  wikipedia?: Maybe<Scalars['String']['output']>;
};

export type Location = {
  latitude?: Maybe<Scalars['Float']['output']>;
  longitude?: Maybe<Scalars['Float']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  region?: Maybe<Scalars['String']['output']>;
};

export type Mass = {
  kg?: Maybe<Scalars['Int']['output']>;
  lb?: Maybe<Scalars['Int']['output']>;
};

export type Mission = {
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  manufacturers?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  name?: Maybe<Scalars['String']['output']>;
  payloads?: Maybe<Array<Maybe<Payload>>>;
  twitter?: Maybe<Scalars['String']['output']>;
  website?: Maybe<Scalars['String']['output']>;
  wikipedia?: Maybe<Scalars['String']['output']>;
};

export type MissionResult = {
  data?: Maybe<Array<Maybe<Mission>>>;
  result?: Maybe<Result>;
};

export type MissionsFind = {
  id?: InputMaybe<Scalars['ID']['input']>;
  manufacturer?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  payload_id?: InputMaybe<Scalars['String']['input']>;
};

export type Mutation = {
  /** delete data from the table: "users" */
  delete_users?: Maybe<users_mutation_response>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<users_mutation_response>;
  /** update data of the table: "users" */
  update_users?: Maybe<users_mutation_response>;
};


export type Mutationdelete_usersArgs = {
  where: users_bool_exp;
};


export type Mutationinsert_usersArgs = {
  objects: Array<users_insert_input>;
  on_conflict?: InputMaybe<users_on_conflict>;
};


export type Mutationupdate_usersArgs = {
  _set?: InputMaybe<users_set_input>;
  where: users_bool_exp;
};

export type Payload = {
  customers?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  id?: Maybe<Scalars['ID']['output']>;
  manufacturer?: Maybe<Scalars['String']['output']>;
  nationality?: Maybe<Scalars['String']['output']>;
  norad_id?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  orbit?: Maybe<Scalars['String']['output']>;
  orbit_params?: Maybe<PayloadOrbitParams>;
  payload_mass_kg?: Maybe<Scalars['Float']['output']>;
  payload_mass_lbs?: Maybe<Scalars['Float']['output']>;
  payload_type?: Maybe<Scalars['String']['output']>;
  reused?: Maybe<Scalars['Boolean']['output']>;
};

export type PayloadOrbitParams = {
  apoapsis_km?: Maybe<Scalars['Float']['output']>;
  arg_of_pericenter?: Maybe<Scalars['Float']['output']>;
  eccentricity?: Maybe<Scalars['Float']['output']>;
  epoch?: Maybe<Scalars['Date']['output']>;
  inclination_deg?: Maybe<Scalars['Float']['output']>;
  lifespan_years?: Maybe<Scalars['Float']['output']>;
  longitude?: Maybe<Scalars['Float']['output']>;
  mean_anomaly?: Maybe<Scalars['Float']['output']>;
  mean_motion?: Maybe<Scalars['Float']['output']>;
  periapsis_km?: Maybe<Scalars['Float']['output']>;
  period_min?: Maybe<Scalars['Float']['output']>;
  raan?: Maybe<Scalars['Float']['output']>;
  reference_system?: Maybe<Scalars['String']['output']>;
  regime?: Maybe<Scalars['String']['output']>;
  semi_major_axis_km?: Maybe<Scalars['Float']['output']>;
};

export type PayloadsFind = {
  apoapsis_km?: InputMaybe<Scalars['Float']['input']>;
  customer?: InputMaybe<Scalars['String']['input']>;
  eccentricity?: InputMaybe<Scalars['Float']['input']>;
  epoch?: InputMaybe<Scalars['Date']['input']>;
  inclination_deg?: InputMaybe<Scalars['Float']['input']>;
  lifespan_years?: InputMaybe<Scalars['Float']['input']>;
  longitude?: InputMaybe<Scalars['Float']['input']>;
  manufacturer?: InputMaybe<Scalars['String']['input']>;
  mean_motion?: InputMaybe<Scalars['Float']['input']>;
  nationality?: InputMaybe<Scalars['String']['input']>;
  norad_id?: InputMaybe<Scalars['Int']['input']>;
  orbit?: InputMaybe<Scalars['String']['input']>;
  payload_id?: InputMaybe<Scalars['ID']['input']>;
  payload_type?: InputMaybe<Scalars['String']['input']>;
  periapsis_km?: InputMaybe<Scalars['Float']['input']>;
  period_min?: InputMaybe<Scalars['Float']['input']>;
  raan?: InputMaybe<Scalars['Float']['input']>;
  reference_system?: InputMaybe<Scalars['String']['input']>;
  regime?: InputMaybe<Scalars['String']['input']>;
  reused?: InputMaybe<Scalars['Boolean']['input']>;
  semi_major_axis_km?: InputMaybe<Scalars['Float']['input']>;
};

export type Result = {
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type Roadster = {
  apoapsis_au?: Maybe<Scalars['Float']['output']>;
  details?: Maybe<Scalars['String']['output']>;
  earth_distance_km?: Maybe<Scalars['Float']['output']>;
  earth_distance_mi?: Maybe<Scalars['Float']['output']>;
  eccentricity?: Maybe<Scalars['Float']['output']>;
  epoch_jd?: Maybe<Scalars['Float']['output']>;
  inclination?: Maybe<Scalars['Float']['output']>;
  launch_date_unix?: Maybe<Scalars['Date']['output']>;
  launch_date_utc?: Maybe<Scalars['Date']['output']>;
  launch_mass_kg?: Maybe<Scalars['Int']['output']>;
  launch_mass_lbs?: Maybe<Scalars['Int']['output']>;
  longitude?: Maybe<Scalars['Float']['output']>;
  mars_distance_km?: Maybe<Scalars['Float']['output']>;
  mars_distance_mi?: Maybe<Scalars['Float']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  norad_id?: Maybe<Scalars['Int']['output']>;
  orbit_type?: Maybe<Scalars['Float']['output']>;
  periapsis_arg?: Maybe<Scalars['Float']['output']>;
  periapsis_au?: Maybe<Scalars['Float']['output']>;
  period_days?: Maybe<Scalars['Float']['output']>;
  semi_major_axis_au?: Maybe<Scalars['Float']['output']>;
  speed_kph?: Maybe<Scalars['Float']['output']>;
  speed_mph?: Maybe<Scalars['Float']['output']>;
  wikipedia?: Maybe<Scalars['String']['output']>;
};

export type Rocket = {
  active?: Maybe<Scalars['Boolean']['output']>;
  boosters?: Maybe<Scalars['Int']['output']>;
  company?: Maybe<Scalars['String']['output']>;
  cost_per_launch?: Maybe<Scalars['Int']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  diameter?: Maybe<Distance>;
  engines?: Maybe<RocketEngines>;
  first_flight?: Maybe<Scalars['Date']['output']>;
  first_stage?: Maybe<RocketFirstStage>;
  height?: Maybe<Distance>;
  id?: Maybe<Scalars['ID']['output']>;
  landing_legs?: Maybe<RocketLandingLegs>;
  mass?: Maybe<Mass>;
  name?: Maybe<Scalars['String']['output']>;
  payload_weights?: Maybe<Array<Maybe<RocketPayloadWeight>>>;
  second_stage?: Maybe<RocketSecondStage>;
  stages?: Maybe<Scalars['Int']['output']>;
  success_rate_pct?: Maybe<Scalars['Int']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  wikipedia?: Maybe<Scalars['String']['output']>;
};

export type RocketEngines = {
  engine_loss_max?: Maybe<Scalars['String']['output']>;
  layout?: Maybe<Scalars['String']['output']>;
  number?: Maybe<Scalars['Int']['output']>;
  propellant_1?: Maybe<Scalars['String']['output']>;
  propellant_2?: Maybe<Scalars['String']['output']>;
  thrust_sea_level?: Maybe<Force>;
  thrust_to_weight?: Maybe<Scalars['Float']['output']>;
  thrust_vacuum?: Maybe<Force>;
  type?: Maybe<Scalars['String']['output']>;
  version?: Maybe<Scalars['String']['output']>;
};

export type RocketFirstStage = {
  burn_time_sec?: Maybe<Scalars['Int']['output']>;
  engines?: Maybe<Scalars['Int']['output']>;
  fuel_amount_tons?: Maybe<Scalars['Float']['output']>;
  reusable?: Maybe<Scalars['Boolean']['output']>;
  thrust_sea_level?: Maybe<Force>;
  thrust_vacuum?: Maybe<Force>;
};

export type RocketLandingLegs = {
  material?: Maybe<Scalars['String']['output']>;
  number?: Maybe<Scalars['Int']['output']>;
};

export type RocketPayloadWeight = {
  id?: Maybe<Scalars['String']['output']>;
  kg?: Maybe<Scalars['Int']['output']>;
  lb?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type RocketSecondStage = {
  burn_time_sec?: Maybe<Scalars['Int']['output']>;
  engines?: Maybe<Scalars['Int']['output']>;
  fuel_amount_tons?: Maybe<Scalars['Float']['output']>;
  payloads?: Maybe<RocketSecondStagePayloads>;
  thrust?: Maybe<Force>;
};

export type RocketSecondStagePayloadCompositeFairing = {
  diameter?: Maybe<Distance>;
  height?: Maybe<Distance>;
};

export type RocketSecondStagePayloads = {
  composite_fairing?: Maybe<RocketSecondStagePayloadCompositeFairing>;
  option_1?: Maybe<Scalars['String']['output']>;
};

export type RocketsResult = {
  data?: Maybe<Array<Maybe<Rocket>>>;
  result?: Maybe<Result>;
};

export type Ship = {
  abs?: Maybe<Scalars['Int']['output']>;
  active?: Maybe<Scalars['Boolean']['output']>;
  attempted_landings?: Maybe<Scalars['Int']['output']>;
  class?: Maybe<Scalars['Int']['output']>;
  course_deg?: Maybe<Scalars['Int']['output']>;
  home_port?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  imo?: Maybe<Scalars['Int']['output']>;
  missions?: Maybe<Array<Maybe<ShipMission>>>;
  mmsi?: Maybe<Scalars['Int']['output']>;
  model?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  position?: Maybe<ShipLocation>;
  roles?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  speed_kn?: Maybe<Scalars['Float']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  successful_landings?: Maybe<Scalars['Int']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  weight_kg?: Maybe<Scalars['Int']['output']>;
  weight_lbs?: Maybe<Scalars['Int']['output']>;
  year_built?: Maybe<Scalars['Int']['output']>;
};

export type ShipLocation = {
  latitude?: Maybe<Scalars['Float']['output']>;
  longitude?: Maybe<Scalars['Float']['output']>;
};

export type ShipMission = {
  flight?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type ShipsFind = {
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  model?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
  active?: InputMaybe<Scalars['Boolean']['input']>;
  imo?: InputMaybe<Scalars['Int']['input']>;
  mmsi?: InputMaybe<Scalars['Int']['input']>;
  abs?: InputMaybe<Scalars['Int']['input']>;
  class?: InputMaybe<Scalars['Int']['input']>;
  weight_lbs?: InputMaybe<Scalars['Int']['input']>;
  weight_kg?: InputMaybe<Scalars['Int']['input']>;
  year_built?: InputMaybe<Scalars['Int']['input']>;
  home_port?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  speed_kn?: InputMaybe<Scalars['Int']['input']>;
  course_deg?: InputMaybe<Scalars['Int']['input']>;
  latitude?: InputMaybe<Scalars['Float']['input']>;
  longitude?: InputMaybe<Scalars['Float']['input']>;
  successful_landings?: InputMaybe<Scalars['Int']['input']>;
  attempted_landings?: InputMaybe<Scalars['Int']['input']>;
  mission?: InputMaybe<Scalars['String']['input']>;
};

export type ShipsResult = {
  data?: Maybe<Array<Maybe<Ship>>>;
  result?: Maybe<Result>;
};

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export type String_comparison_exp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  _ilike?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _like?: InputMaybe<Scalars['String']['input']>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  _nilike?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
  _nlike?: InputMaybe<Scalars['String']['input']>;
  _nsimilar?: InputMaybe<Scalars['String']['input']>;
  _similar?: InputMaybe<Scalars['String']['input']>;
};

export type Subscription = {
  /** fetch data from the table: "users" */
  users: Array<users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: users_aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<users>;
};


export type SubscriptionusersArgs = {
  distinct_on?: InputMaybe<Array<users_select_column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<users_order_by>>;
  where?: InputMaybe<users_bool_exp>;
};


export type Subscriptionusers_aggregateArgs = {
  distinct_on?: InputMaybe<Array<users_select_column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<users_order_by>>;
  where?: InputMaybe<users_bool_exp>;
};


export type Subscriptionusers_by_pkArgs = {
  id: Scalars['uuid']['input'];
};

export type Volume = {
  cubic_feet?: Maybe<Scalars['Int']['output']>;
  cubic_meters?: Maybe<Scalars['Int']['output']>;
};

/** conflict action */
export type conflict_action =
  /** ignore the insert on this row */
  | 'ignore'
  /** update the row with the given values */
  | 'update';

/** column ordering options */
export type order_by =
  /** in the ascending order, nulls last */
  | 'asc'
  /** in the ascending order, nulls first */
  | 'asc_nulls_first'
  /** in the ascending order, nulls last */
  | 'asc_nulls_last'
  /** in the descending order, nulls first */
  | 'desc'
  /** in the descending order, nulls first */
  | 'desc_nulls_first'
  /** in the descending order, nulls last */
  | 'desc_nulls_last';

/** expression to compare columns of type timestamptz. All fields are combined with logical 'AND'. */
export type timestamptz_comparison_exp = {
  _eq?: InputMaybe<Scalars['timestamptz']['input']>;
  _gt?: InputMaybe<Scalars['timestamptz']['input']>;
  _gte?: InputMaybe<Scalars['timestamptz']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamptz']['input']>;
  _lte?: InputMaybe<Scalars['timestamptz']['input']>;
  _neq?: InputMaybe<Scalars['timestamptz']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
};

/** columns and relationships of "users" */
export type users = {
  id: Scalars['uuid']['output'];
  name?: Maybe<Scalars['String']['output']>;
  rocket?: Maybe<Scalars['String']['output']>;
  timestamp: Scalars['timestamptz']['output'];
  twitter?: Maybe<Scalars['String']['output']>;
};

/** aggregated selection of "users" */
export type users_aggregate = {
  aggregate?: Maybe<users_aggregate_fields>;
  nodes: Array<users>;
};

/** aggregate fields of "users" */
export type users_aggregate_fields = {
  count?: Maybe<Scalars['Int']['output']>;
  max?: Maybe<users_max_fields>;
  min?: Maybe<users_min_fields>;
};


/** aggregate fields of "users" */
export type users_aggregate_fieldscountArgs = {
  columns?: InputMaybe<Array<users_select_column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "users" */
export type users_aggregate_order_by = {
  count?: InputMaybe<order_by>;
  max?: InputMaybe<users_max_order_by>;
  min?: InputMaybe<users_min_order_by>;
};

/** input type for inserting array relation for remote table "users" */
export type users_arr_rel_insert_input = {
  data: Array<users_insert_input>;
  on_conflict?: InputMaybe<users_on_conflict>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type users_bool_exp = {
  _and?: InputMaybe<Array<InputMaybe<users_bool_exp>>>;
  _not?: InputMaybe<users_bool_exp>;
  _or?: InputMaybe<Array<InputMaybe<users_bool_exp>>>;
  id?: InputMaybe<uuid_comparison_exp>;
  name?: InputMaybe<String_comparison_exp>;
  rocket?: InputMaybe<String_comparison_exp>;
  timestamp?: InputMaybe<timestamptz_comparison_exp>;
  twitter?: InputMaybe<String_comparison_exp>;
};

/** unique or primary key constraints on table "users" */
export type users_constraint =
  | 'unique'
  | 'or'
  | 'primary'
  | 'key'
  | 'constraint'
  | 'users_pkey';

/** input type for inserting data into table "users" */
export type users_insert_input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  rocket?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['timestamptz']['input']>;
  twitter?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type users_max_fields = {
  name?: Maybe<Scalars['String']['output']>;
  rocket?: Maybe<Scalars['String']['output']>;
  timestamp?: Maybe<Scalars['timestamptz']['output']>;
  twitter?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "users" */
export type users_max_order_by = {
  name?: InputMaybe<order_by>;
  rocket?: InputMaybe<order_by>;
  timestamp?: InputMaybe<order_by>;
  twitter?: InputMaybe<order_by>;
};

/** aggregate min on columns */
export type users_min_fields = {
  name?: Maybe<Scalars['String']['output']>;
  rocket?: Maybe<Scalars['String']['output']>;
  timestamp?: Maybe<Scalars['timestamptz']['output']>;
  twitter?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "users" */
export type users_min_order_by = {
  name?: InputMaybe<order_by>;
  rocket?: InputMaybe<order_by>;
  timestamp?: InputMaybe<order_by>;
  twitter?: InputMaybe<order_by>;
};

/** response of any mutation on the table "users" */
export type users_mutation_response = {
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data of the affected rows by the mutation */
  returning: Array<users>;
};

/** input type for inserting object relation for remote table "users" */
export type users_obj_rel_insert_input = {
  data: users_insert_input;
  on_conflict?: InputMaybe<users_on_conflict>;
};

/** on conflict condition type for table "users" */
export type users_on_conflict = {
  constraint: users_constraint;
  update_columns: Array<users_update_column>;
};

/** ordering options when selecting data from "users" */
export type users_order_by = {
  id?: InputMaybe<order_by>;
  name?: InputMaybe<order_by>;
  rocket?: InputMaybe<order_by>;
  timestamp?: InputMaybe<order_by>;
  twitter?: InputMaybe<order_by>;
};

/** select columns of table "users" */
export type users_select_column =
  | 'column'
  | 'name'
  | 'id'
  | 'rocket'
  | 'timestamp'
  | 'twitter';

/** input type for updating data in table "users" */
export type users_set_input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  rocket?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['timestamptz']['input']>;
  twitter?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "users" */
export type users_update_column =
  | 'column'
  | 'name'
  | 'id'
  | 'rocket'
  | 'timestamp'
  | 'twitter';

/** expression to compare columns of type uuid. All fields are combined with logical 'AND'. */
export type uuid_comparison_exp = {
  _eq?: InputMaybe<Scalars['uuid']['input']>;
  _gt?: InputMaybe<Scalars['uuid']['input']>;
  _gte?: InputMaybe<Scalars['uuid']['input']>;
  _in?: InputMaybe<Array<Scalars['uuid']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['uuid']['input']>;
  _lte?: InputMaybe<Scalars['uuid']['input']>;
  _neq?: InputMaybe<Scalars['uuid']['input']>;
  _nin?: InputMaybe<Array<Scalars['uuid']['input']>>;
};

  export type QuerySdk = {
      /** undefined **/
  _service: InContextSdkMethod<Query['_service'], {}, MeshContext>,
  /** undefined **/
  capsule: InContextSdkMethod<Query['capsule'], QuerycapsuleArgs, MeshContext>,
  /** undefined **/
  capsules: InContextSdkMethod<Query['capsules'], QuerycapsulesArgs, MeshContext>,
  /** undefined **/
  capsulesPast: InContextSdkMethod<Query['capsulesPast'], QuerycapsulesPastArgs, MeshContext>,
  /** undefined **/
  capsulesUpcoming: InContextSdkMethod<Query['capsulesUpcoming'], QuerycapsulesUpcomingArgs, MeshContext>,
  /** undefined **/
  company: InContextSdkMethod<Query['company'], {}, MeshContext>,
  /** undefined **/
  core: InContextSdkMethod<Query['core'], QuerycoreArgs, MeshContext>,
  /** undefined **/
  cores: InContextSdkMethod<Query['cores'], QuerycoresArgs, MeshContext>,
  /** undefined **/
  coresPast: InContextSdkMethod<Query['coresPast'], QuerycoresPastArgs, MeshContext>,
  /** undefined **/
  coresUpcoming: InContextSdkMethod<Query['coresUpcoming'], QuerycoresUpcomingArgs, MeshContext>,
  /** undefined **/
  dragon: InContextSdkMethod<Query['dragon'], QuerydragonArgs, MeshContext>,
  /** undefined **/
  dragons: InContextSdkMethod<Query['dragons'], QuerydragonsArgs, MeshContext>,
  /** undefined **/
  histories: InContextSdkMethod<Query['histories'], QueryhistoriesArgs, MeshContext>,
  /** undefined **/
  historiesResult: InContextSdkMethod<Query['historiesResult'], QueryhistoriesResultArgs, MeshContext>,
  /** undefined **/
  history: InContextSdkMethod<Query['history'], QueryhistoryArgs, MeshContext>,
  /** undefined **/
  landpad: InContextSdkMethod<Query['landpad'], QuerylandpadArgs, MeshContext>,
  /** undefined **/
  landpads: InContextSdkMethod<Query['landpads'], QuerylandpadsArgs, MeshContext>,
  /** undefined **/
  launch: InContextSdkMethod<Query['launch'], QuerylaunchArgs, MeshContext>,
  /** undefined **/
  launchLatest: InContextSdkMethod<Query['launchLatest'], QuerylaunchLatestArgs, MeshContext>,
  /** undefined **/
  launchNext: InContextSdkMethod<Query['launchNext'], QuerylaunchNextArgs, MeshContext>,
  /** undefined **/
  launches: InContextSdkMethod<Query['launches'], QuerylaunchesArgs, MeshContext>,
  /** undefined **/
  launchesPast: InContextSdkMethod<Query['launchesPast'], QuerylaunchesPastArgs, MeshContext>,
  /** undefined **/
  launchesPastResult: InContextSdkMethod<Query['launchesPastResult'], QuerylaunchesPastResultArgs, MeshContext>,
  /** undefined **/
  launchesUpcoming: InContextSdkMethod<Query['launchesUpcoming'], QuerylaunchesUpcomingArgs, MeshContext>,
  /** undefined **/
  launchpad: InContextSdkMethod<Query['launchpad'], QuerylaunchpadArgs, MeshContext>,
  /** undefined **/
  launchpads: InContextSdkMethod<Query['launchpads'], QuerylaunchpadsArgs, MeshContext>,
  /** undefined **/
  mission: InContextSdkMethod<Query['mission'], QuerymissionArgs, MeshContext>,
  /** undefined **/
  missions: InContextSdkMethod<Query['missions'], QuerymissionsArgs, MeshContext>,
  /** undefined **/
  missionsResult: InContextSdkMethod<Query['missionsResult'], QuerymissionsResultArgs, MeshContext>,
  /** undefined **/
  payload: InContextSdkMethod<Query['payload'], QuerypayloadArgs, MeshContext>,
  /** undefined **/
  payloads: InContextSdkMethod<Query['payloads'], QuerypayloadsArgs, MeshContext>,
  /** undefined **/
  roadster: InContextSdkMethod<Query['roadster'], {}, MeshContext>,
  /** undefined **/
  rocket: InContextSdkMethod<Query['rocket'], QueryrocketArgs, MeshContext>,
  /** undefined **/
  rockets: InContextSdkMethod<Query['rockets'], QueryrocketsArgs, MeshContext>,
  /** undefined **/
  rocketsResult: InContextSdkMethod<Query['rocketsResult'], QueryrocketsResultArgs, MeshContext>,
  /** undefined **/
  ship: InContextSdkMethod<Query['ship'], QueryshipArgs, MeshContext>,
  /** undefined **/
  ships: InContextSdkMethod<Query['ships'], QueryshipsArgs, MeshContext>,
  /** undefined **/
  shipsResult: InContextSdkMethod<Query['shipsResult'], QueryshipsResultArgs, MeshContext>,
  /** fetch data from the table: "users" **/
  users: InContextSdkMethod<Query['users'], QueryusersArgs, MeshContext>,
  /** fetch aggregated fields from the table: "users" **/
  users_aggregate: InContextSdkMethod<Query['users_aggregate'], Queryusers_aggregateArgs, MeshContext>,
  /** fetch data from the table: "users" using primary key columns **/
  users_by_pk: InContextSdkMethod<Query['users_by_pk'], Queryusers_by_pkArgs, MeshContext>
  };

  export type MutationSdk = {
      /** delete data from the table: "users" **/
  delete_users: InContextSdkMethod<Mutation['delete_users'], Mutationdelete_usersArgs, MeshContext>,
  /** insert data into the table: "users" **/
  insert_users: InContextSdkMethod<Mutation['insert_users'], Mutationinsert_usersArgs, MeshContext>,
  /** update data of the table: "users" **/
  update_users: InContextSdkMethod<Mutation['update_users'], Mutationupdate_usersArgs, MeshContext>
  };

  export type SubscriptionSdk = {
      /** fetch data from the table: "users" **/
  users: InContextSdkMethod<Subscription['users'], SubscriptionusersArgs, MeshContext>,
  /** fetch aggregated fields from the table: "users" **/
  users_aggregate: InContextSdkMethod<Subscription['users_aggregate'], Subscriptionusers_aggregateArgs, MeshContext>,
  /** fetch data from the table: "users" using primary key columns **/
  users_by_pk: InContextSdkMethod<Subscription['users_by_pk'], Subscriptionusers_by_pkArgs, MeshContext>
  };

  export type Context = {
      ["SpaceX"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      
    };
}
