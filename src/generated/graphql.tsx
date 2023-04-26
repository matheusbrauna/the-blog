import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  DateTime: Date;
  Hex: any;
  Json: any;
  Long: any;
  RGBAHue: any;
  RGBATransparency: any;
  RichTextAST: any;
}

export interface IAggregate {
  count: Scalars['Int'];
}

/** Asset system model */
export interface IAsset extends INode {
  avatarImageAuthor: Array<IAuthor>;
  bannerPost: Array<IPost>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<IUser>;
  /** Get the document in other stages */
  documentInStages: Array<IAsset>;
  /** The file name */
  fileName: Scalars['String'];
  /** The file handle */
  handle: Scalars['String'];
  /** The height of the file */
  height?: Maybe<Scalars['Float']>;
  /** List of Asset versions */
  history: Array<IVersion>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** System Locale field */
  locale: ILocale;
  /** Get the other localizations for this document */
  localizations: Array<IAsset>;
  /** The mime type of the file */
  mimeType?: Maybe<Scalars['String']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<IUser>;
  scheduledIn: Array<IScheduledOperation>;
  /** The file size */
  size?: Maybe<Scalars['Float']>;
  /** System stage field */
  stage: IStage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<IUser>;
  /** Get the url for the asset with provided transformations applied. */
  url: Scalars['String'];
  /** The file width */
  width?: Maybe<Scalars['Float']>;
}


/** Asset system model */
export interface IAssetAvatarImageAuthorArgs {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<ILocale>>;
  orderBy?: InputMaybe<IAuthorOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<IAuthorWhereInput>;
}


/** Asset system model */
export interface IAssetBannerPostArgs {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<ILocale>>;
  orderBy?: InputMaybe<IPostOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<IPostWhereInput>;
}


/** Asset system model */
export interface IAssetCreatedAtArgs {
  variation?: ISystemDateTimeFieldVariation;
}


/** Asset system model */
export interface IAssetCreatedByArgs {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<ILocale>>;
}


/** Asset system model */
export interface IAssetDocumentInStagesArgs {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<IStage>;
}


/** Asset system model */
export interface IAssetHistoryArgs {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<IStage>;
}


/** Asset system model */
export interface IAssetLocalizationsArgs {
  includeCurrent?: Scalars['Boolean'];
  locales?: Array<ILocale>;
}


/** Asset system model */
export interface IAssetPublishedAtArgs {
  variation?: ISystemDateTimeFieldVariation;
}


/** Asset system model */
export interface IAssetPublishedByArgs {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<ILocale>>;
}


/** Asset system model */
export interface IAssetScheduledInArgs {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<ILocale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<IScheduledOperationWhereInput>;
}


/** Asset system model */
export interface IAssetUpdatedAtArgs {
  variation?: ISystemDateTimeFieldVariation;
}


/** Asset system model */
export interface IAssetUpdatedByArgs {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<ILocale>>;
}


/** Asset system model */
export interface IAssetUrlArgs {
  transformation?: InputMaybe<IAssetTransformationInput>;
}

export interface IAssetConnectInput {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<IConnectPositionInput>;
  /** Document to connect */
  where: IAssetWhereUniqueInput;
}

/** A connection to a list of items. */
export interface IAssetConnection {
  aggregate: IAggregate;
  /** A list of edges. */
  edges: Array<IAssetEdge>;
  /** Information to aid in pagination. */
  pageInfo: IPageInfo;
}

export interface IAssetCreateInput {
  avatarImageAuthor?: InputMaybe<IAuthorCreateManyInlineInput>;
  bannerPost?: InputMaybe<IPostCreateManyInlineInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  fileName: Scalars['String'];
  handle: Scalars['String'];
  height?: InputMaybe<Scalars['Float']>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<IAssetCreateLocalizationsInput>;
  mimeType?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Float']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  width?: InputMaybe<Scalars['Float']>;
}

export interface IAssetCreateLocalizationDataInput {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  fileName: Scalars['String'];
  handle: Scalars['String'];
  height?: InputMaybe<Scalars['Float']>;
  mimeType?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Float']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  width?: InputMaybe<Scalars['Float']>;
}

export interface IAssetCreateLocalizationInput {
  /** Localization input */
  data: IAssetCreateLocalizationDataInput;
  locale: ILocale;
}

export interface IAssetCreateLocalizationsInput {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<IAssetCreateLocalizationInput>>;
}

export interface IAssetCreateManyInlineInput {
  /** Connect multiple existing Asset documents */
  connect?: InputMaybe<Array<IAssetWhereUniqueInput>>;
  /** Create and connect multiple existing Asset documents */
  create?: InputMaybe<Array<IAssetCreateInput>>;
}

export interface IAssetCreateOneInlineInput {
  /** Connect one existing Asset document */
  connect?: InputMaybe<IAssetWhereUniqueInput>;
  /** Create and connect one Asset document */
  create?: InputMaybe<IAssetCreateInput>;
}

/** An edge in a connection. */
export interface IAssetEdge {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: IAsset;
}

/** Identifies documents */
export interface IAssetManyWhereInput {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<IAssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<IAssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<IAssetWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  avatarImageAuthor_every?: InputMaybe<IAuthorWhereInput>;
  avatarImageAuthor_none?: InputMaybe<IAuthorWhereInput>;
  avatarImageAuthor_some?: InputMaybe<IAuthorWhereInput>;
  bannerPost_every?: InputMaybe<IPostWhereInput>;
  bannerPost_none?: InputMaybe<IPostWhereInput>;
  bannerPost_some?: InputMaybe<IPostWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<IUserWhereInput>;
  documentInStages_every?: InputMaybe<IAssetWhereStageInput>;
  documentInStages_none?: InputMaybe<IAssetWhereStageInput>;
  documentInStages_some?: InputMaybe<IAssetWhereStageInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<IUserWhereInput>;
  scheduledIn_every?: InputMaybe<IScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<IScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<IScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<IUserWhereInput>;
}

export enum IAssetOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HandleAsc = 'handle_ASC',
  HandleDesc = 'handle_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  MimeTypeAsc = 'mimeType_ASC',
  MimeTypeDesc = 'mimeType_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC'
}

/** Transformations for Assets */
export interface IAssetTransformationInput {
  document?: InputMaybe<IDocumentTransformationInput>;
  image?: InputMaybe<IImageTransformationInput>;
  /** Pass true if you want to validate the passed transformation parameters */
  validateOptions?: InputMaybe<Scalars['Boolean']>;
}

export interface IAssetUpdateInput {
  avatarImageAuthor?: InputMaybe<IAuthorUpdateManyInlineInput>;
  bannerPost?: InputMaybe<IPostUpdateManyInlineInput>;
  fileName?: InputMaybe<Scalars['String']>;
  handle?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  /** Manage document localizations */
  localizations?: InputMaybe<IAssetUpdateLocalizationsInput>;
  mimeType?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Float']>;
  width?: InputMaybe<Scalars['Float']>;
}

export interface IAssetUpdateLocalizationDataInput {
  fileName?: InputMaybe<Scalars['String']>;
  handle?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  mimeType?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Float']>;
  width?: InputMaybe<Scalars['Float']>;
}

export interface IAssetUpdateLocalizationInput {
  data: IAssetUpdateLocalizationDataInput;
  locale: ILocale;
}

export interface IAssetUpdateLocalizationsInput {
  /** Localizations to create */
  create?: InputMaybe<Array<IAssetCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<ILocale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<IAssetUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<IAssetUpsertLocalizationInput>>;
}

export interface IAssetUpdateManyInlineInput {
  /** Connect multiple existing Asset documents */
  connect?: InputMaybe<Array<IAssetConnectInput>>;
  /** Create and connect multiple Asset documents */
  create?: InputMaybe<Array<IAssetCreateInput>>;
  /** Delete multiple Asset documents */
  delete?: InputMaybe<Array<IAssetWhereUniqueInput>>;
  /** Disconnect multiple Asset documents */
  disconnect?: InputMaybe<Array<IAssetWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Asset documents */
  set?: InputMaybe<Array<IAssetWhereUniqueInput>>;
  /** Update multiple Asset documents */
  update?: InputMaybe<Array<IAssetUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Asset documents */
  upsert?: InputMaybe<Array<IAssetUpsertWithNestedWhereUniqueInput>>;
}

export interface IAssetUpdateManyInput {
  fileName?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  /** Optional updates to localizations */
  localizations?: InputMaybe<IAssetUpdateManyLocalizationsInput>;
  mimeType?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Float']>;
  width?: InputMaybe<Scalars['Float']>;
}

export interface IAssetUpdateManyLocalizationDataInput {
  fileName?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  mimeType?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Float']>;
  width?: InputMaybe<Scalars['Float']>;
}

export interface IAssetUpdateManyLocalizationInput {
  data: IAssetUpdateManyLocalizationDataInput;
  locale: ILocale;
}

export interface IAssetUpdateManyLocalizationsInput {
  /** Localizations to update */
  update?: InputMaybe<Array<IAssetUpdateManyLocalizationInput>>;
}

export interface IAssetUpdateManyWithNestedWhereInput {
  /** Update many input */
  data: IAssetUpdateManyInput;
  /** Document search */
  where: IAssetWhereInput;
}

export interface IAssetUpdateOneInlineInput {
  /** Connect existing Asset document */
  connect?: InputMaybe<IAssetWhereUniqueInput>;
  /** Create and connect one Asset document */
  create?: InputMaybe<IAssetCreateInput>;
  /** Delete currently connected Asset document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Asset document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single Asset document */
  update?: InputMaybe<IAssetUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Asset document */
  upsert?: InputMaybe<IAssetUpsertWithNestedWhereUniqueInput>;
}

export interface IAssetUpdateWithNestedWhereUniqueInput {
  /** Document to update */
  data: IAssetUpdateInput;
  /** Unique document search */
  where: IAssetWhereUniqueInput;
}

export interface IAssetUpsertInput {
  /** Create document if it didn't exist */
  create: IAssetCreateInput;
  /** Update document if it exists */
  update: IAssetUpdateInput;
}

export interface IAssetUpsertLocalizationInput {
  create: IAssetCreateLocalizationDataInput;
  locale: ILocale;
  update: IAssetUpdateLocalizationDataInput;
}

export interface IAssetUpsertWithNestedWhereUniqueInput {
  /** Upsert data */
  data: IAssetUpsertInput;
  /** Unique document search */
  where: IAssetWhereUniqueInput;
}

/** This contains a set of filters that can be used to compare values internally */
export interface IAssetWhereComparatorInput {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>;
}

/** Identifies documents */
export interface IAssetWhereInput {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<IAssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<IAssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<IAssetWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  avatarImageAuthor_every?: InputMaybe<IAuthorWhereInput>;
  avatarImageAuthor_none?: InputMaybe<IAuthorWhereInput>;
  avatarImageAuthor_some?: InputMaybe<IAuthorWhereInput>;
  bannerPost_every?: InputMaybe<IPostWhereInput>;
  bannerPost_none?: InputMaybe<IPostWhereInput>;
  bannerPost_some?: InputMaybe<IPostWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<IUserWhereInput>;
  documentInStages_every?: InputMaybe<IAssetWhereStageInput>;
  documentInStages_none?: InputMaybe<IAssetWhereStageInput>;
  documentInStages_some?: InputMaybe<IAssetWhereStageInput>;
  fileName?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  fileName_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  fileName_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  fileName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  fileName_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  fileName_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  fileName_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  fileName_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  fileName_starts_with?: InputMaybe<Scalars['String']>;
  handle?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  handle_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  handle_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  handle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  handle_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  handle_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  handle_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  handle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  handle_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  handle_starts_with?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  /** All values greater than the given value. */
  height_gt?: InputMaybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  height_gte?: InputMaybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  height_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  /** All values less than the given value. */
  height_lt?: InputMaybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  height_lte?: InputMaybe<Scalars['Float']>;
  /** Any other value that exists and is not equal to the given value. */
  height_not?: InputMaybe<Scalars['Float']>;
  /** All values that are not contained in given list. */
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  mimeType?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  mimeType_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  mimeType_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  mimeType_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  mimeType_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  mimeType_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  mimeType_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  mimeType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  mimeType_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  mimeType_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<IUserWhereInput>;
  scheduledIn_every?: InputMaybe<IScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<IScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<IScheduledOperationWhereInput>;
  size?: InputMaybe<Scalars['Float']>;
  /** All values greater than the given value. */
  size_gt?: InputMaybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  size_gte?: InputMaybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  size_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  /** All values less than the given value. */
  size_lt?: InputMaybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  size_lte?: InputMaybe<Scalars['Float']>;
  /** Any other value that exists and is not equal to the given value. */
  size_not?: InputMaybe<Scalars['Float']>;
  /** All values that are not contained in given list. */
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<IUserWhereInput>;
  width?: InputMaybe<Scalars['Float']>;
  /** All values greater than the given value. */
  width_gt?: InputMaybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  width_gte?: InputMaybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  width_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  /** All values less than the given value. */
  width_lt?: InputMaybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  width_lte?: InputMaybe<Scalars['Float']>;
  /** Any other value that exists and is not equal to the given value. */
  width_not?: InputMaybe<Scalars['Float']>;
  /** All values that are not contained in given list. */
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
}

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export interface IAssetWhereStageInput {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<IAssetWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<IAssetWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<IAssetWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<IAssetWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<IStage>;
}

/** References Asset record uniquely */
export interface IAssetWhereUniqueInput {
  id?: InputMaybe<Scalars['ID']>;
}

export interface IAuthor extends INode {
  avatarImage?: Maybe<IAsset>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<IUser>;
  /** Get the document in other stages */
  documentInStages: Array<IAuthor>;
  /** List of Author versions */
  history: Array<IVersion>;
  /** The unique identifier */
  id: Scalars['ID'];
  name: Scalars['String'];
  posts: Array<IPost>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<IUser>;
  scheduledIn: Array<IScheduledOperation>;
  /** System stage field */
  stage: IStage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<IUser>;
}


export interface IAuthorAvatarImageArgs {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<ILocale>>;
}


export interface IAuthorCreatedByArgs {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<ILocale>>;
}


export interface IAuthorDocumentInStagesArgs {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<IStage>;
}


export interface IAuthorHistoryArgs {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<IStage>;
}


export interface IAuthorPostsArgs {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<ILocale>>;
  orderBy?: InputMaybe<IPostOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<IPostWhereInput>;
}


export interface IAuthorPublishedByArgs {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<ILocale>>;
}


export interface IAuthorScheduledInArgs {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<ILocale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<IScheduledOperationWhereInput>;
}


export interface IAuthorUpdatedByArgs {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<ILocale>>;
}

export interface IAuthorConnectInput {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<IConnectPositionInput>;
  /** Document to connect */
  where: IAuthorWhereUniqueInput;
}

/** A connection to a list of items. */
export interface IAuthorConnection {
  aggregate: IAggregate;
  /** A list of edges. */
  edges: Array<IAuthorEdge>;
  /** Information to aid in pagination. */
  pageInfo: IPageInfo;
}

export interface IAuthorCreateInput {
  avatarImage?: InputMaybe<IAssetCreateOneInlineInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  name: Scalars['String'];
  posts?: InputMaybe<IPostCreateManyInlineInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
}

export interface IAuthorCreateManyInlineInput {
  /** Connect multiple existing Author documents */
  connect?: InputMaybe<Array<IAuthorWhereUniqueInput>>;
  /** Create and connect multiple existing Author documents */
  create?: InputMaybe<Array<IAuthorCreateInput>>;
}

export interface IAuthorCreateOneInlineInput {
  /** Connect one existing Author document */
  connect?: InputMaybe<IAuthorWhereUniqueInput>;
  /** Create and connect one Author document */
  create?: InputMaybe<IAuthorCreateInput>;
}

/** An edge in a connection. */
export interface IAuthorEdge {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: IAuthor;
}

/** Identifies documents */
export interface IAuthorManyWhereInput {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<IAuthorWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<IAuthorWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<IAuthorWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  avatarImage?: InputMaybe<IAssetWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<IUserWhereInput>;
  documentInStages_every?: InputMaybe<IAuthorWhereStageInput>;
  documentInStages_none?: InputMaybe<IAuthorWhereStageInput>;
  documentInStages_some?: InputMaybe<IAuthorWhereStageInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  posts_every?: InputMaybe<IPostWhereInput>;
  posts_none?: InputMaybe<IPostWhereInput>;
  posts_some?: InputMaybe<IPostWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<IUserWhereInput>;
  scheduledIn_every?: InputMaybe<IScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<IScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<IScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<IUserWhereInput>;
}

export enum IAuthorOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export interface IAuthorUpdateInput {
  avatarImage?: InputMaybe<IAssetUpdateOneInlineInput>;
  name?: InputMaybe<Scalars['String']>;
  posts?: InputMaybe<IPostUpdateManyInlineInput>;
}

export interface IAuthorUpdateManyInlineInput {
  /** Connect multiple existing Author documents */
  connect?: InputMaybe<Array<IAuthorConnectInput>>;
  /** Create and connect multiple Author documents */
  create?: InputMaybe<Array<IAuthorCreateInput>>;
  /** Delete multiple Author documents */
  delete?: InputMaybe<Array<IAuthorWhereUniqueInput>>;
  /** Disconnect multiple Author documents */
  disconnect?: InputMaybe<Array<IAuthorWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Author documents */
  set?: InputMaybe<Array<IAuthorWhereUniqueInput>>;
  /** Update multiple Author documents */
  update?: InputMaybe<Array<IAuthorUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Author documents */
  upsert?: InputMaybe<Array<IAuthorUpsertWithNestedWhereUniqueInput>>;
}

export interface IAuthorUpdateManyInput {
  name?: InputMaybe<Scalars['String']>;
}

export interface IAuthorUpdateManyWithNestedWhereInput {
  /** Update many input */
  data: IAuthorUpdateManyInput;
  /** Document search */
  where: IAuthorWhereInput;
}

export interface IAuthorUpdateOneInlineInput {
  /** Connect existing Author document */
  connect?: InputMaybe<IAuthorWhereUniqueInput>;
  /** Create and connect one Author document */
  create?: InputMaybe<IAuthorCreateInput>;
  /** Delete currently connected Author document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Author document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single Author document */
  update?: InputMaybe<IAuthorUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Author document */
  upsert?: InputMaybe<IAuthorUpsertWithNestedWhereUniqueInput>;
}

export interface IAuthorUpdateWithNestedWhereUniqueInput {
  /** Document to update */
  data: IAuthorUpdateInput;
  /** Unique document search */
  where: IAuthorWhereUniqueInput;
}

export interface IAuthorUpsertInput {
  /** Create document if it didn't exist */
  create: IAuthorCreateInput;
  /** Update document if it exists */
  update: IAuthorUpdateInput;
}

export interface IAuthorUpsertWithNestedWhereUniqueInput {
  /** Upsert data */
  data: IAuthorUpsertInput;
  /** Unique document search */
  where: IAuthorWhereUniqueInput;
}

/** This contains a set of filters that can be used to compare values internally */
export interface IAuthorWhereComparatorInput {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>;
}

/** Identifies documents */
export interface IAuthorWhereInput {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<IAuthorWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<IAuthorWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<IAuthorWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  avatarImage?: InputMaybe<IAssetWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<IUserWhereInput>;
  documentInStages_every?: InputMaybe<IAuthorWhereStageInput>;
  documentInStages_none?: InputMaybe<IAuthorWhereStageInput>;
  documentInStages_some?: InputMaybe<IAuthorWhereStageInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  posts_every?: InputMaybe<IPostWhereInput>;
  posts_none?: InputMaybe<IPostWhereInput>;
  posts_some?: InputMaybe<IPostWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<IUserWhereInput>;
  scheduledIn_every?: InputMaybe<IScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<IScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<IScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<IUserWhereInput>;
}

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export interface IAuthorWhereStageInput {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<IAuthorWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<IAuthorWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<IAuthorWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<IAuthorWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<IStage>;
}

/** References Author record uniquely */
export interface IAuthorWhereUniqueInput {
  id?: InputMaybe<Scalars['ID']>;
}

export interface IBatchPayload {
  /** The number of nodes that have been affected by the Batch operation. */
  count: Scalars['Long'];
}

export interface ICategory extends INode {
  content?: Maybe<Scalars['String']>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<IUser>;
  /** Get the document in other stages */
  documentInStages: Array<ICategory>;
  /** List of Category versions */
  history: Array<IVersion>;
  /** The unique identifier */
  id: Scalars['ID'];
  posts: Array<ICategoryPosts>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<IUser>;
  scheduledIn: Array<IScheduledOperation>;
  /** System stage field */
  stage: IStage;
  title?: Maybe<Scalars['String']>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<IUser>;
}


export interface ICategoryCreatedByArgs {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<ILocale>>;
}


export interface ICategoryDocumentInStagesArgs {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<IStage>;
}


export interface ICategoryHistoryArgs {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<IStage>;
}


export interface ICategoryPostsArgs {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<ILocale>>;
  skip?: InputMaybe<Scalars['Int']>;
}


export interface ICategoryPublishedByArgs {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<ILocale>>;
}


export interface ICategoryScheduledInArgs {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<ILocale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<IScheduledOperationWhereInput>;
}


export interface ICategoryUpdatedByArgs {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<ILocale>>;
}

export interface ICategoryConnectInput {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<IConnectPositionInput>;
  /** Document to connect */
  where: ICategoryWhereUniqueInput;
}

/** A connection to a list of items. */
export interface ICategoryConnection {
  aggregate: IAggregate;
  /** A list of edges. */
  edges: Array<ICategoryEdge>;
  /** Information to aid in pagination. */
  pageInfo: IPageInfo;
}

export interface ICategoryCreateInput {
  content?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  posts?: InputMaybe<ICategoryPostsCreateManyInlineInput>;
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
}

export interface ICategoryCreateManyInlineInput {
  /** Connect multiple existing Category documents */
  connect?: InputMaybe<Array<ICategoryWhereUniqueInput>>;
  /** Create and connect multiple existing Category documents */
  create?: InputMaybe<Array<ICategoryCreateInput>>;
}

export interface ICategoryCreateOneInlineInput {
  /** Connect one existing Category document */
  connect?: InputMaybe<ICategoryWhereUniqueInput>;
  /** Create and connect one Category document */
  create?: InputMaybe<ICategoryCreateInput>;
}

/** An edge in a connection. */
export interface ICategoryEdge {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: ICategory;
}

/** Identifies documents */
export interface ICategoryManyWhereInput {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ICategoryWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ICategoryWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ICategoryWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  content?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  content_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  content_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  content_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  content_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  content_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  content_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  content_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  content_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  content_starts_with?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<IUserWhereInput>;
  documentInStages_every?: InputMaybe<ICategoryWhereStageInput>;
  documentInStages_none?: InputMaybe<ICategoryWhereStageInput>;
  documentInStages_some?: InputMaybe<ICategoryWhereStageInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values in which the union is empty */
  posts_empty?: InputMaybe<Scalars['Boolean']>;
  /** Matches if the union contains at least one connection to the provided item to the filter */
  posts_some?: InputMaybe<ICategoryPostsWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<IUserWhereInput>;
  scheduledIn_every?: InputMaybe<IScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<IScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<IScheduledOperationWhereInput>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<IUserWhereInput>;
}

export enum ICategoryOrderByInput {
  ContentAsc = 'content_ASC',
  ContentDesc = 'content_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type ICategoryPosts = IPost;

export interface ICategoryPostsConnectInput {
  Post?: InputMaybe<IPostConnectInput>;
}

export interface ICategoryPostsCreateInput {
  Post?: InputMaybe<IPostCreateInput>;
}

export interface ICategoryPostsCreateManyInlineInput {
  /** Connect multiple existing CategoryPosts documents */
  connect?: InputMaybe<Array<ICategoryPostsWhereUniqueInput>>;
  /** Create and connect multiple existing CategoryPosts documents */
  create?: InputMaybe<Array<ICategoryPostsCreateInput>>;
}

export interface ICategoryPostsCreateOneInlineInput {
  /** Connect one existing CategoryPosts document */
  connect?: InputMaybe<ICategoryPostsWhereUniqueInput>;
  /** Create and connect one CategoryPosts document */
  create?: InputMaybe<ICategoryPostsCreateInput>;
}

export interface ICategoryPostsUpdateInput {
  Post?: InputMaybe<IPostUpdateInput>;
}

export interface ICategoryPostsUpdateManyInlineInput {
  /** Connect multiple existing CategoryPosts documents */
  connect?: InputMaybe<Array<ICategoryPostsConnectInput>>;
  /** Create and connect multiple CategoryPosts documents */
  create?: InputMaybe<Array<ICategoryPostsCreateInput>>;
  /** Delete multiple CategoryPosts documents */
  delete?: InputMaybe<Array<ICategoryPostsWhereUniqueInput>>;
  /** Disconnect multiple CategoryPosts documents */
  disconnect?: InputMaybe<Array<ICategoryPostsWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing CategoryPosts documents */
  set?: InputMaybe<Array<ICategoryPostsWhereUniqueInput>>;
  /** Update multiple CategoryPosts documents */
  update?: InputMaybe<Array<ICategoryPostsUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple CategoryPosts documents */
  upsert?: InputMaybe<Array<ICategoryPostsUpsertWithNestedWhereUniqueInput>>;
}

export interface ICategoryPostsUpdateManyWithNestedWhereInput {
  Post?: InputMaybe<IPostUpdateManyWithNestedWhereInput>;
}

export interface ICategoryPostsUpdateOneInlineInput {
  /** Connect existing CategoryPosts document */
  connect?: InputMaybe<ICategoryPostsWhereUniqueInput>;
  /** Create and connect one CategoryPosts document */
  create?: InputMaybe<ICategoryPostsCreateInput>;
  /** Delete currently connected CategoryPosts document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected CategoryPosts document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single CategoryPosts document */
  update?: InputMaybe<ICategoryPostsUpdateWithNestedWhereUniqueInput>;
  /** Upsert single CategoryPosts document */
  upsert?: InputMaybe<ICategoryPostsUpsertWithNestedWhereUniqueInput>;
}

export interface ICategoryPostsUpdateWithNestedWhereUniqueInput {
  Post?: InputMaybe<IPostUpdateWithNestedWhereUniqueInput>;
}

export interface ICategoryPostsUpsertWithNestedWhereUniqueInput {
  Post?: InputMaybe<IPostUpsertWithNestedWhereUniqueInput>;
}

export interface ICategoryPostsWhereInput {
  Post?: InputMaybe<IPostWhereInput>;
}

export interface ICategoryPostsWhereUniqueInput {
  Post?: InputMaybe<IPostWhereUniqueInput>;
}

export interface ICategoryUpdateInput {
  content?: InputMaybe<Scalars['String']>;
  posts?: InputMaybe<ICategoryPostsUpdateManyInlineInput>;
  title?: InputMaybe<Scalars['String']>;
}

export interface ICategoryUpdateManyInlineInput {
  /** Connect multiple existing Category documents */
  connect?: InputMaybe<Array<ICategoryConnectInput>>;
  /** Create and connect multiple Category documents */
  create?: InputMaybe<Array<ICategoryCreateInput>>;
  /** Delete multiple Category documents */
  delete?: InputMaybe<Array<ICategoryWhereUniqueInput>>;
  /** Disconnect multiple Category documents */
  disconnect?: InputMaybe<Array<ICategoryWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Category documents */
  set?: InputMaybe<Array<ICategoryWhereUniqueInput>>;
  /** Update multiple Category documents */
  update?: InputMaybe<Array<ICategoryUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Category documents */
  upsert?: InputMaybe<Array<ICategoryUpsertWithNestedWhereUniqueInput>>;
}

export interface ICategoryUpdateManyInput {
  content?: InputMaybe<Scalars['String']>;
}

export interface ICategoryUpdateManyWithNestedWhereInput {
  /** Update many input */
  data: ICategoryUpdateManyInput;
  /** Document search */
  where: ICategoryWhereInput;
}

export interface ICategoryUpdateOneInlineInput {
  /** Connect existing Category document */
  connect?: InputMaybe<ICategoryWhereUniqueInput>;
  /** Create and connect one Category document */
  create?: InputMaybe<ICategoryCreateInput>;
  /** Delete currently connected Category document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Category document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single Category document */
  update?: InputMaybe<ICategoryUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Category document */
  upsert?: InputMaybe<ICategoryUpsertWithNestedWhereUniqueInput>;
}

export interface ICategoryUpdateWithNestedWhereUniqueInput {
  /** Document to update */
  data: ICategoryUpdateInput;
  /** Unique document search */
  where: ICategoryWhereUniqueInput;
}

export interface ICategoryUpsertInput {
  /** Create document if it didn't exist */
  create: ICategoryCreateInput;
  /** Update document if it exists */
  update: ICategoryUpdateInput;
}

export interface ICategoryUpsertWithNestedWhereUniqueInput {
  /** Upsert data */
  data: ICategoryUpsertInput;
  /** Unique document search */
  where: ICategoryWhereUniqueInput;
}

/** This contains a set of filters that can be used to compare values internally */
export interface ICategoryWhereComparatorInput {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>;
}

/** Identifies documents */
export interface ICategoryWhereInput {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ICategoryWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ICategoryWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ICategoryWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  content?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  content_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  content_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  content_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  content_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  content_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  content_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  content_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  content_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  content_starts_with?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<IUserWhereInput>;
  documentInStages_every?: InputMaybe<ICategoryWhereStageInput>;
  documentInStages_none?: InputMaybe<ICategoryWhereStageInput>;
  documentInStages_some?: InputMaybe<ICategoryWhereStageInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values in which the union is empty */
  posts_empty?: InputMaybe<Scalars['Boolean']>;
  /** Matches if the union contains at least one connection to the provided item to the filter */
  posts_some?: InputMaybe<ICategoryPostsWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<IUserWhereInput>;
  scheduledIn_every?: InputMaybe<IScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<IScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<IScheduledOperationWhereInput>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<IUserWhereInput>;
}

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export interface ICategoryWhereStageInput {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ICategoryWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ICategoryWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ICategoryWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<ICategoryWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<IStage>;
}

/** References Category record uniquely */
export interface ICategoryWhereUniqueInput {
  id?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
}

/** Representing a color value comprising of HEX, RGBA and css color values */
export interface IColor {
  css: Scalars['String'];
  hex: Scalars['Hex'];
  rgba: IRgba;
}

/** Accepts either HEX or RGBA color value. At least one of hex or rgba value should be passed. If both are passed RGBA is used. */
export interface IColorInput {
  hex?: InputMaybe<Scalars['Hex']>;
  rgba?: InputMaybe<IRgbaInput>;
}

export interface IConnectPositionInput {
  /** Connect document after specified document */
  after?: InputMaybe<Scalars['ID']>;
  /** Connect document before specified document */
  before?: InputMaybe<Scalars['ID']>;
  /** Connect document at last position */
  end?: InputMaybe<Scalars['Boolean']>;
  /** Connect document at first position */
  start?: InputMaybe<Scalars['Boolean']>;
}

export enum IDocumentFileTypes {
  Doc = 'doc',
  Docx = 'docx',
  Html = 'html',
  Jpg = 'jpg',
  Odp = 'odp',
  Ods = 'ods',
  Odt = 'odt',
  Pdf = 'pdf',
  Png = 'png',
  Ppt = 'ppt',
  Pptx = 'pptx',
  Svg = 'svg',
  Txt = 'txt',
  Webp = 'webp',
  Xls = 'xls',
  Xlsx = 'xlsx'
}

export interface IDocumentOutputInput {
  /**
   * Transforms a document into a desired file type.
   * See this matrix for format support:
   *
   * PDF:	jpg, odp, ods, odt, png, svg, txt, and webp
   * DOC:	docx, html, jpg, odt, pdf, png, svg, txt, and webp
   * DOCX:	doc, html, jpg, odt, pdf, png, svg, txt, and webp
   * ODT:	doc, docx, html, jpg, pdf, png, svg, txt, and webp
   * XLS:	jpg, pdf, ods, png, svg, xlsx, and webp
   * XLSX:	jpg, pdf, ods, png, svg, xls, and webp
   * ODS:	jpg, pdf, png, xls, svg, xlsx, and webp
   * PPT:	jpg, odp, pdf, png, svg, pptx, and webp
   * PPTX:	jpg, odp, pdf, png, svg, ppt, and webp
   * ODP:	jpg, pdf, png, ppt, svg, pptx, and webp
   * BMP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * GIF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * JPG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * PNG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * WEBP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * TIFF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * AI:	    jpg, odp, ods, odt, pdf, png, svg, and webp
   * PSD:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * SVG:	jpg, odp, ods, odt, pdf, png, and webp
   * HTML:	jpg, odt, pdf, svg, txt, and webp
   * TXT:	jpg, html, odt, pdf, svg, and webp
   */
  format?: InputMaybe<IDocumentFileTypes>;
}

/** Transformations for Documents */
export interface IDocumentTransformationInput {
  /** Changes the output for the file. */
  output?: InputMaybe<IDocumentOutputInput>;
}

export interface IDocumentVersion {
  createdAt: Scalars['DateTime'];
  data?: Maybe<Scalars['Json']>;
  id: Scalars['ID'];
  revision: Scalars['Int'];
  stage: IStage;
}

export enum IImageFit {
  /** Resizes the image to fit within the specified parameters without distorting, cropping, or changing the aspect ratio. */
  Clip = 'clip',
  /** Resizes the image to fit the specified parameters exactly by removing any parts of the image that don't fit within the boundaries. */
  Crop = 'crop',
  /** Resizes the image to fit within the parameters, but as opposed to 'fit:clip' will not scale the image if the image is smaller than the output size. */
  Max = 'max',
  /** Resizes the image to fit the specified parameters exactly by scaling the image to the desired size. The aspect ratio of the image is not respected and the image can be distorted using this method. */
  Scale = 'scale'
}

export interface IImageResizeInput {
  /** The default value for the fit parameter is fit:clip. */
  fit?: InputMaybe<IImageFit>;
  /** The height in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  height?: InputMaybe<Scalars['Int']>;
  /** The width in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  width?: InputMaybe<Scalars['Int']>;
}

/** Transformations for Images */
export interface IImageTransformationInput {
  /** Resizes the image */
  resize?: InputMaybe<IImageResizeInput>;
}

/** Locale system enumeration */
export enum ILocale {
  /** System locale */
  En = 'en'
}

/** Representing a geolocation point with latitude and longitude */
export interface ILocation {
  distance: Scalars['Float'];
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
}


/** Representing a geolocation point with latitude and longitude */
export interface ILocationDistanceArgs {
  from: ILocationInput;
}

/** Input for a geolocation point with latitude and longitude */
export interface ILocationInput {
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
}

export interface IMutation {
  /**
   * Create one asset
   * @deprecated Asset mutations will be overhauled soon
   */
  createAsset?: Maybe<IAsset>;
  /** Create one author */
  createAuthor?: Maybe<IAuthor>;
  /** Create one category */
  createCategory?: Maybe<ICategory>;
  /** Create one post */
  createPost?: Maybe<IPost>;
  /** Create one scheduledRelease */
  createScheduledRelease?: Maybe<IScheduledRelease>;
  /** Delete one asset from _all_ existing stages. Returns deleted document. */
  deleteAsset?: Maybe<IAsset>;
  /** Delete one author from _all_ existing stages. Returns deleted document. */
  deleteAuthor?: Maybe<IAuthor>;
  /** Delete one category from _all_ existing stages. Returns deleted document. */
  deleteCategory?: Maybe<ICategory>;
  /**
   * Delete many Asset documents
   * @deprecated Please use the new paginated many mutation (deleteManyAssetsConnection)
   */
  deleteManyAssets: IBatchPayload;
  /** Delete many Asset documents, return deleted documents */
  deleteManyAssetsConnection: IAssetConnection;
  /**
   * Delete many Author documents
   * @deprecated Please use the new paginated many mutation (deleteManyAuthorsConnection)
   */
  deleteManyAuthors: IBatchPayload;
  /** Delete many Author documents, return deleted documents */
  deleteManyAuthorsConnection: IAuthorConnection;
  /**
   * Delete many Category documents
   * @deprecated Please use the new paginated many mutation (deleteManyCategoriesConnection)
   */
  deleteManyCategories: IBatchPayload;
  /** Delete many Category documents, return deleted documents */
  deleteManyCategoriesConnection: ICategoryConnection;
  /**
   * Delete many Post documents
   * @deprecated Please use the new paginated many mutation (deleteManyPostsConnection)
   */
  deleteManyPosts: IBatchPayload;
  /** Delete many Post documents, return deleted documents */
  deleteManyPostsConnection: IPostConnection;
  /** Delete one post from _all_ existing stages. Returns deleted document. */
  deletePost?: Maybe<IPost>;
  /** Delete and return scheduled operation */
  deleteScheduledOperation?: Maybe<IScheduledOperation>;
  /** Delete one scheduledRelease from _all_ existing stages. Returns deleted document. */
  deleteScheduledRelease?: Maybe<IScheduledRelease>;
  /** Publish one asset */
  publishAsset?: Maybe<IAsset>;
  /** Publish one author */
  publishAuthor?: Maybe<IAuthor>;
  /** Publish one category */
  publishCategory?: Maybe<ICategory>;
  /**
   * Publish many Asset documents
   * @deprecated Please use the new paginated many mutation (publishManyAssetsConnection)
   */
  publishManyAssets: IBatchPayload;
  /** Publish many Asset documents */
  publishManyAssetsConnection: IAssetConnection;
  /**
   * Publish many Author documents
   * @deprecated Please use the new paginated many mutation (publishManyAuthorsConnection)
   */
  publishManyAuthors: IBatchPayload;
  /** Publish many Author documents */
  publishManyAuthorsConnection: IAuthorConnection;
  /**
   * Publish many Category documents
   * @deprecated Please use the new paginated many mutation (publishManyCategoriesConnection)
   */
  publishManyCategories: IBatchPayload;
  /** Publish many Category documents */
  publishManyCategoriesConnection: ICategoryConnection;
  /**
   * Publish many Post documents
   * @deprecated Please use the new paginated many mutation (publishManyPostsConnection)
   */
  publishManyPosts: IBatchPayload;
  /** Publish many Post documents */
  publishManyPostsConnection: IPostConnection;
  /** Publish one post */
  publishPost?: Maybe<IPost>;
  /** Schedule to publish one asset */
  schedulePublishAsset?: Maybe<IAsset>;
  /** Schedule to publish one author */
  schedulePublishAuthor?: Maybe<IAuthor>;
  /** Schedule to publish one category */
  schedulePublishCategory?: Maybe<ICategory>;
  /** Schedule to publish one post */
  schedulePublishPost?: Maybe<IPost>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishAsset?: Maybe<IAsset>;
  /** Unpublish one author from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishAuthor?: Maybe<IAuthor>;
  /** Unpublish one category from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishCategory?: Maybe<ICategory>;
  /** Unpublish one post from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishPost?: Maybe<IPost>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishAsset?: Maybe<IAsset>;
  /** Unpublish one author from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishAuthor?: Maybe<IAuthor>;
  /** Unpublish one category from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishCategory?: Maybe<ICategory>;
  /**
   * Unpublish many Asset documents
   * @deprecated Please use the new paginated many mutation (unpublishManyAssetsConnection)
   */
  unpublishManyAssets: IBatchPayload;
  /** Find many Asset documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyAssetsConnection: IAssetConnection;
  /**
   * Unpublish many Author documents
   * @deprecated Please use the new paginated many mutation (unpublishManyAuthorsConnection)
   */
  unpublishManyAuthors: IBatchPayload;
  /** Find many Author documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyAuthorsConnection: IAuthorConnection;
  /**
   * Unpublish many Category documents
   * @deprecated Please use the new paginated many mutation (unpublishManyCategoriesConnection)
   */
  unpublishManyCategories: IBatchPayload;
  /** Find many Category documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyCategoriesConnection: ICategoryConnection;
  /**
   * Unpublish many Post documents
   * @deprecated Please use the new paginated many mutation (unpublishManyPostsConnection)
   */
  unpublishManyPosts: IBatchPayload;
  /** Find many Post documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyPostsConnection: IPostConnection;
  /** Unpublish one post from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishPost?: Maybe<IPost>;
  /** Update one asset */
  updateAsset?: Maybe<IAsset>;
  /** Update one author */
  updateAuthor?: Maybe<IAuthor>;
  /** Update one category */
  updateCategory?: Maybe<ICategory>;
  /**
   * Update many assets
   * @deprecated Please use the new paginated many mutation (updateManyAssetsConnection)
   */
  updateManyAssets: IBatchPayload;
  /** Update many Asset documents */
  updateManyAssetsConnection: IAssetConnection;
  /**
   * Update many authors
   * @deprecated Please use the new paginated many mutation (updateManyAuthorsConnection)
   */
  updateManyAuthors: IBatchPayload;
  /** Update many Author documents */
  updateManyAuthorsConnection: IAuthorConnection;
  /**
   * Update many categories
   * @deprecated Please use the new paginated many mutation (updateManyCategoriesConnection)
   */
  updateManyCategories: IBatchPayload;
  /** Update many Category documents */
  updateManyCategoriesConnection: ICategoryConnection;
  /**
   * Update many posts
   * @deprecated Please use the new paginated many mutation (updateManyPostsConnection)
   */
  updateManyPosts: IBatchPayload;
  /** Update many Post documents */
  updateManyPostsConnection: IPostConnection;
  /** Update one post */
  updatePost?: Maybe<IPost>;
  /** Update one scheduledRelease */
  updateScheduledRelease?: Maybe<IScheduledRelease>;
  /** Upsert one asset */
  upsertAsset?: Maybe<IAsset>;
  /** Upsert one author */
  upsertAuthor?: Maybe<IAuthor>;
  /** Upsert one category */
  upsertCategory?: Maybe<ICategory>;
  /** Upsert one post */
  upsertPost?: Maybe<IPost>;
}


export interface IMutationCreateAssetArgs {
  data: IAssetCreateInput;
}


export interface IMutationCreateAuthorArgs {
  data: IAuthorCreateInput;
}


export interface IMutationCreateCategoryArgs {
  data: ICategoryCreateInput;
}


export interface IMutationCreatePostArgs {
  data: IPostCreateInput;
}


export interface IMutationCreateScheduledReleaseArgs {
  data: IScheduledReleaseCreateInput;
}


export interface IMutationDeleteAssetArgs {
  where: IAssetWhereUniqueInput;
}


export interface IMutationDeleteAuthorArgs {
  where: IAuthorWhereUniqueInput;
}


export interface IMutationDeleteCategoryArgs {
  where: ICategoryWhereUniqueInput;
}


export interface IMutationDeleteManyAssetsArgs {
  where?: InputMaybe<IAssetManyWhereInput>;
}


export interface IMutationDeleteManyAssetsConnectionArgs {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<IAssetManyWhereInput>;
}


export interface IMutationDeleteManyAuthorsArgs {
  where?: InputMaybe<IAuthorManyWhereInput>;
}


export interface IMutationDeleteManyAuthorsConnectionArgs {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<IAuthorManyWhereInput>;
}


export interface IMutationDeleteManyCategoriesArgs {
  where?: InputMaybe<ICategoryManyWhereInput>;
}


export interface IMutationDeleteManyCategoriesConnectionArgs {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ICategoryManyWhereInput>;
}


export interface IMutationDeleteManyPostsArgs {
  where?: InputMaybe<IPostManyWhereInput>;
}


export interface IMutationDeleteManyPostsConnectionArgs {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<IPostManyWhereInput>;
}


export interface IMutationDeletePostArgs {
  where: IPostWhereUniqueInput;
}


export interface IMutationDeleteScheduledOperationArgs {
  where: IScheduledOperationWhereUniqueInput;
}


export interface IMutationDeleteScheduledReleaseArgs {
  where: IScheduledReleaseWhereUniqueInput;
}


export interface IMutationPublishAssetArgs {
  locales?: InputMaybe<Array<ILocale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  to?: Array<IStage>;
  where: IAssetWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
}


export interface IMutationPublishAuthorArgs {
  to?: Array<IStage>;
  where: IAuthorWhereUniqueInput;
}


export interface IMutationPublishCategoryArgs {
  to?: Array<IStage>;
  where: ICategoryWhereUniqueInput;
}


export interface IMutationPublishManyAssetsArgs {
  locales?: InputMaybe<Array<ILocale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  to?: Array<IStage>;
  where?: InputMaybe<IAssetManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
}


export interface IMutationPublishManyAssetsConnectionArgs {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<IStage>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<ILocale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<IStage>;
  where?: InputMaybe<IAssetManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
}


export interface IMutationPublishManyAuthorsArgs {
  to?: Array<IStage>;
  where?: InputMaybe<IAuthorManyWhereInput>;
}


export interface IMutationPublishManyAuthorsConnectionArgs {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<IStage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<IStage>;
  where?: InputMaybe<IAuthorManyWhereInput>;
}


export interface IMutationPublishManyCategoriesArgs {
  to?: Array<IStage>;
  where?: InputMaybe<ICategoryManyWhereInput>;
}


export interface IMutationPublishManyCategoriesConnectionArgs {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<IStage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<IStage>;
  where?: InputMaybe<ICategoryManyWhereInput>;
}


export interface IMutationPublishManyPostsArgs {
  to?: Array<IStage>;
  where?: InputMaybe<IPostManyWhereInput>;
}


export interface IMutationPublishManyPostsConnectionArgs {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<IStage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<IStage>;
  where?: InputMaybe<IPostManyWhereInput>;
}


export interface IMutationPublishPostArgs {
  to?: Array<IStage>;
  where: IPostWhereUniqueInput;
}


export interface IMutationSchedulePublishAssetArgs {
  locales?: InputMaybe<Array<ILocale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<IStage>;
  where: IAssetWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
}


export interface IMutationSchedulePublishAuthorArgs {
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<IStage>;
  where: IAuthorWhereUniqueInput;
}


export interface IMutationSchedulePublishCategoryArgs {
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<IStage>;
  where: ICategoryWhereUniqueInput;
}


export interface IMutationSchedulePublishPostArgs {
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<IStage>;
  where: IPostWhereUniqueInput;
}


export interface IMutationScheduleUnpublishAssetArgs {
  from?: Array<IStage>;
  locales?: InputMaybe<Array<ILocale>>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where: IAssetWhereUniqueInput;
}


export interface IMutationScheduleUnpublishAuthorArgs {
  from?: Array<IStage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  where: IAuthorWhereUniqueInput;
}


export interface IMutationScheduleUnpublishCategoryArgs {
  from?: Array<IStage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  where: ICategoryWhereUniqueInput;
}


export interface IMutationScheduleUnpublishPostArgs {
  from?: Array<IStage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  where: IPostWhereUniqueInput;
}


export interface IMutationUnpublishAssetArgs {
  from?: Array<IStage>;
  locales?: InputMaybe<Array<ILocale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where: IAssetWhereUniqueInput;
}


export interface IMutationUnpublishAuthorArgs {
  from?: Array<IStage>;
  where: IAuthorWhereUniqueInput;
}


export interface IMutationUnpublishCategoryArgs {
  from?: Array<IStage>;
  where: ICategoryWhereUniqueInput;
}


export interface IMutationUnpublishManyAssetsArgs {
  from?: Array<IStage>;
  locales?: InputMaybe<Array<ILocale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<IAssetManyWhereInput>;
}


export interface IMutationUnpublishManyAssetsConnectionArgs {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<IStage>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<ILocale>>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<IStage>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<IAssetManyWhereInput>;
}


export interface IMutationUnpublishManyAuthorsArgs {
  from?: Array<IStage>;
  where?: InputMaybe<IAuthorManyWhereInput>;
}


export interface IMutationUnpublishManyAuthorsConnectionArgs {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<IStage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<IStage>;
  where?: InputMaybe<IAuthorManyWhereInput>;
}


export interface IMutationUnpublishManyCategoriesArgs {
  from?: Array<IStage>;
  where?: InputMaybe<ICategoryManyWhereInput>;
}


export interface IMutationUnpublishManyCategoriesConnectionArgs {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<IStage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<IStage>;
  where?: InputMaybe<ICategoryManyWhereInput>;
}


export interface IMutationUnpublishManyPostsArgs {
  from?: Array<IStage>;
  where?: InputMaybe<IPostManyWhereInput>;
}


export interface IMutationUnpublishManyPostsConnectionArgs {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<IStage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<IStage>;
  where?: InputMaybe<IPostManyWhereInput>;
}


export interface IMutationUnpublishPostArgs {
  from?: Array<IStage>;
  where: IPostWhereUniqueInput;
}


export interface IMutationUpdateAssetArgs {
  data: IAssetUpdateInput;
  where: IAssetWhereUniqueInput;
}


export interface IMutationUpdateAuthorArgs {
  data: IAuthorUpdateInput;
  where: IAuthorWhereUniqueInput;
}


export interface IMutationUpdateCategoryArgs {
  data: ICategoryUpdateInput;
  where: ICategoryWhereUniqueInput;
}


export interface IMutationUpdateManyAssetsArgs {
  data: IAssetUpdateManyInput;
  where?: InputMaybe<IAssetManyWhereInput>;
}


export interface IMutationUpdateManyAssetsConnectionArgs {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: IAssetUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<IAssetManyWhereInput>;
}


export interface IMutationUpdateManyAuthorsArgs {
  data: IAuthorUpdateManyInput;
  where?: InputMaybe<IAuthorManyWhereInput>;
}


export interface IMutationUpdateManyAuthorsConnectionArgs {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: IAuthorUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<IAuthorManyWhereInput>;
}


export interface IMutationUpdateManyCategoriesArgs {
  data: ICategoryUpdateManyInput;
  where?: InputMaybe<ICategoryManyWhereInput>;
}


export interface IMutationUpdateManyCategoriesConnectionArgs {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: ICategoryUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ICategoryManyWhereInput>;
}


export interface IMutationUpdateManyPostsArgs {
  data: IPostUpdateManyInput;
  where?: InputMaybe<IPostManyWhereInput>;
}


export interface IMutationUpdateManyPostsConnectionArgs {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: IPostUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<IPostManyWhereInput>;
}


export interface IMutationUpdatePostArgs {
  data: IPostUpdateInput;
  where: IPostWhereUniqueInput;
}


export interface IMutationUpdateScheduledReleaseArgs {
  data: IScheduledReleaseUpdateInput;
  where: IScheduledReleaseWhereUniqueInput;
}


export interface IMutationUpsertAssetArgs {
  upsert: IAssetUpsertInput;
  where: IAssetWhereUniqueInput;
}


export interface IMutationUpsertAuthorArgs {
  upsert: IAuthorUpsertInput;
  where: IAuthorWhereUniqueInput;
}


export interface IMutationUpsertCategoryArgs {
  upsert: ICategoryUpsertInput;
  where: ICategoryWhereUniqueInput;
}


export interface IMutationUpsertPostArgs {
  upsert: IPostUpsertInput;
  where: IPostWhereUniqueInput;
}

/** An object with an ID */
export interface INode {
  /** The id of the object. */
  id: Scalars['ID'];
  /** The Stage of an object */
  stage: IStage;
}

/** Information about pagination in a connection. */
export interface IPageInfo {
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Number of items in the current page. */
  pageSize?: Maybe<Scalars['Int']>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
}

export interface IPost extends INode {
  author?: Maybe<IAuthor>;
  banner?: Maybe<IAsset>;
  category?: Maybe<ICategory>;
  content?: Maybe<IRichText>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<IUser>;
  /** Get the document in other stages */
  documentInStages: Array<IPost>;
  highlight: Scalars['Boolean'];
  /** List of Post versions */
  history: Array<IVersion>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<IUser>;
  scheduledIn: Array<IScheduledOperation>;
  slug: Scalars['String'];
  /** System stage field */
  stage: IStage;
  title: Scalars['String'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<IUser>;
}


export interface IPostAuthorArgs {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<ILocale>>;
}


export interface IPostBannerArgs {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<ILocale>>;
}


export interface IPostCategoryArgs {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<ILocale>>;
}


export interface IPostCreatedByArgs {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<ILocale>>;
}


export interface IPostDocumentInStagesArgs {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<IStage>;
}


export interface IPostHistoryArgs {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<IStage>;
}


export interface IPostPublishedByArgs {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<ILocale>>;
}


export interface IPostScheduledInArgs {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<ILocale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<IScheduledOperationWhereInput>;
}


export interface IPostUpdatedByArgs {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<ILocale>>;
}

export interface IPostConnectInput {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<IConnectPositionInput>;
  /** Document to connect */
  where: IPostWhereUniqueInput;
}

/** A connection to a list of items. */
export interface IPostConnection {
  aggregate: IAggregate;
  /** A list of edges. */
  edges: Array<IPostEdge>;
  /** Information to aid in pagination. */
  pageInfo: IPageInfo;
}

export interface IPostCreateInput {
  author?: InputMaybe<IAuthorCreateOneInlineInput>;
  banner?: InputMaybe<IAssetCreateOneInlineInput>;
  category?: InputMaybe<ICategoryCreateOneInlineInput>;
  content?: InputMaybe<Scalars['RichTextAST']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  highlight: Scalars['Boolean'];
  slug: Scalars['String'];
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
}

export interface IPostCreateManyInlineInput {
  /** Connect multiple existing Post documents */
  connect?: InputMaybe<Array<IPostWhereUniqueInput>>;
  /** Create and connect multiple existing Post documents */
  create?: InputMaybe<Array<IPostCreateInput>>;
}

export interface IPostCreateOneInlineInput {
  /** Connect one existing Post document */
  connect?: InputMaybe<IPostWhereUniqueInput>;
  /** Create and connect one Post document */
  create?: InputMaybe<IPostCreateInput>;
}

/** An edge in a connection. */
export interface IPostEdge {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: IPost;
}

/** Identifies documents */
export interface IPostManyWhereInput {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<IPostWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<IPostWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<IPostWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  author?: InputMaybe<IAuthorWhereInput>;
  banner?: InputMaybe<IAssetWhereInput>;
  category?: InputMaybe<ICategoryWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<IUserWhereInput>;
  documentInStages_every?: InputMaybe<IPostWhereStageInput>;
  documentInStages_none?: InputMaybe<IPostWhereStageInput>;
  documentInStages_some?: InputMaybe<IPostWhereStageInput>;
  highlight?: InputMaybe<Scalars['Boolean']>;
  /** Any other value that exists and is not equal to the given value. */
  highlight_not?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<IUserWhereInput>;
  scheduledIn_every?: InputMaybe<IScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<IScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<IScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  slug_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<IUserWhereInput>;
}

export enum IPostOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  HighlightAsc = 'highlight_ASC',
  HighlightDesc = 'highlight_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export interface IPostUpdateInput {
  author?: InputMaybe<IAuthorUpdateOneInlineInput>;
  banner?: InputMaybe<IAssetUpdateOneInlineInput>;
  category?: InputMaybe<ICategoryUpdateOneInlineInput>;
  content?: InputMaybe<Scalars['RichTextAST']>;
  highlight?: InputMaybe<Scalars['Boolean']>;
  slug?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
}

export interface IPostUpdateManyInlineInput {
  /** Connect multiple existing Post documents */
  connect?: InputMaybe<Array<IPostConnectInput>>;
  /** Create and connect multiple Post documents */
  create?: InputMaybe<Array<IPostCreateInput>>;
  /** Delete multiple Post documents */
  delete?: InputMaybe<Array<IPostWhereUniqueInput>>;
  /** Disconnect multiple Post documents */
  disconnect?: InputMaybe<Array<IPostWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Post documents */
  set?: InputMaybe<Array<IPostWhereUniqueInput>>;
  /** Update multiple Post documents */
  update?: InputMaybe<Array<IPostUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Post documents */
  upsert?: InputMaybe<Array<IPostUpsertWithNestedWhereUniqueInput>>;
}

export interface IPostUpdateManyInput {
  content?: InputMaybe<Scalars['RichTextAST']>;
  highlight?: InputMaybe<Scalars['Boolean']>;
  title?: InputMaybe<Scalars['String']>;
}

export interface IPostUpdateManyWithNestedWhereInput {
  /** Update many input */
  data: IPostUpdateManyInput;
  /** Document search */
  where: IPostWhereInput;
}

export interface IPostUpdateOneInlineInput {
  /** Connect existing Post document */
  connect?: InputMaybe<IPostWhereUniqueInput>;
  /** Create and connect one Post document */
  create?: InputMaybe<IPostCreateInput>;
  /** Delete currently connected Post document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Post document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single Post document */
  update?: InputMaybe<IPostUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Post document */
  upsert?: InputMaybe<IPostUpsertWithNestedWhereUniqueInput>;
}

export interface IPostUpdateWithNestedWhereUniqueInput {
  /** Document to update */
  data: IPostUpdateInput;
  /** Unique document search */
  where: IPostWhereUniqueInput;
}

export interface IPostUpsertInput {
  /** Create document if it didn't exist */
  create: IPostCreateInput;
  /** Update document if it exists */
  update: IPostUpdateInput;
}

export interface IPostUpsertWithNestedWhereUniqueInput {
  /** Upsert data */
  data: IPostUpsertInput;
  /** Unique document search */
  where: IPostWhereUniqueInput;
}

/** This contains a set of filters that can be used to compare values internally */
export interface IPostWhereComparatorInput {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>;
}

/** Identifies documents */
export interface IPostWhereInput {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<IPostWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<IPostWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<IPostWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  author?: InputMaybe<IAuthorWhereInput>;
  banner?: InputMaybe<IAssetWhereInput>;
  category?: InputMaybe<ICategoryWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<IUserWhereInput>;
  documentInStages_every?: InputMaybe<IPostWhereStageInput>;
  documentInStages_none?: InputMaybe<IPostWhereStageInput>;
  documentInStages_some?: InputMaybe<IPostWhereStageInput>;
  highlight?: InputMaybe<Scalars['Boolean']>;
  /** Any other value that exists and is not equal to the given value. */
  highlight_not?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<IUserWhereInput>;
  scheduledIn_every?: InputMaybe<IScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<IScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<IScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  slug_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<IUserWhereInput>;
}

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export interface IPostWhereStageInput {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<IPostWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<IPostWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<IPostWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<IPostWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<IStage>;
}

/** References Post record uniquely */
export interface IPostWhereUniqueInput {
  id?: InputMaybe<Scalars['ID']>;
  slug?: InputMaybe<Scalars['String']>;
}

export interface IPublishLocaleInput {
  /** Locales to publish */
  locale: ILocale;
  /** Stages to publish selected locales to */
  stages: Array<IStage>;
}

export interface IQuery {
  /** Retrieve a single asset */
  asset?: Maybe<IAsset>;
  /** Retrieve document version */
  assetVersion?: Maybe<IDocumentVersion>;
  /** Retrieve multiple assets */
  assets: Array<IAsset>;
  /** Retrieve multiple assets using the Relay connection interface */
  assetsConnection: IAssetConnection;
  /** Retrieve a single author */
  author?: Maybe<IAuthor>;
  /** Retrieve document version */
  authorVersion?: Maybe<IDocumentVersion>;
  /** Retrieve multiple authors */
  authors: Array<IAuthor>;
  /** Retrieve multiple authors using the Relay connection interface */
  authorsConnection: IAuthorConnection;
  /** Retrieve multiple categories */
  categories: Array<ICategory>;
  /** Retrieve multiple categories using the Relay connection interface */
  categoriesConnection: ICategoryConnection;
  /** Retrieve a single category */
  category?: Maybe<ICategory>;
  /** Retrieve document version */
  categoryVersion?: Maybe<IDocumentVersion>;
  /** Fetches an object given its ID */
  node?: Maybe<INode>;
  /** Retrieve a single post */
  post?: Maybe<IPost>;
  /** Retrieve document version */
  postVersion?: Maybe<IDocumentVersion>;
  /** Retrieve multiple posts */
  posts: Array<IPost>;
  /** Retrieve multiple posts using the Relay connection interface */
  postsConnection: IPostConnection;
  /** Retrieve a single scheduledOperation */
  scheduledOperation?: Maybe<IScheduledOperation>;
  /** Retrieve multiple scheduledOperations */
  scheduledOperations: Array<IScheduledOperation>;
  /** Retrieve multiple scheduledOperations using the Relay connection interface */
  scheduledOperationsConnection: IScheduledOperationConnection;
  /** Retrieve a single scheduledRelease */
  scheduledRelease?: Maybe<IScheduledRelease>;
  /** Retrieve multiple scheduledReleases */
  scheduledReleases: Array<IScheduledRelease>;
  /** Retrieve multiple scheduledReleases using the Relay connection interface */
  scheduledReleasesConnection: IScheduledReleaseConnection;
  /** Retrieve a single user */
  user?: Maybe<IUser>;
  /** Retrieve multiple users */
  users: Array<IUser>;
  /** Retrieve multiple users using the Relay connection interface */
  usersConnection: IUserConnection;
}


export interface IQueryAssetArgs {
  locales?: Array<ILocale>;
  stage?: IStage;
  where: IAssetWhereUniqueInput;
}


export interface IQueryAssetVersionArgs {
  where: IVersionWhereInput;
}


export interface IQueryAssetsArgs {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<ILocale>;
  orderBy?: InputMaybe<IAssetOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: IStage;
  where?: InputMaybe<IAssetWhereInput>;
}


export interface IQueryAssetsConnectionArgs {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<ILocale>;
  orderBy?: InputMaybe<IAssetOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: IStage;
  where?: InputMaybe<IAssetWhereInput>;
}


export interface IQueryAuthorArgs {
  locales?: Array<ILocale>;
  stage?: IStage;
  where: IAuthorWhereUniqueInput;
}


export interface IQueryAuthorVersionArgs {
  where: IVersionWhereInput;
}


export interface IQueryAuthorsArgs {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<ILocale>;
  orderBy?: InputMaybe<IAuthorOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: IStage;
  where?: InputMaybe<IAuthorWhereInput>;
}


export interface IQueryAuthorsConnectionArgs {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<ILocale>;
  orderBy?: InputMaybe<IAuthorOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: IStage;
  where?: InputMaybe<IAuthorWhereInput>;
}


export interface IQueryCategoriesArgs {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<ILocale>;
  orderBy?: InputMaybe<ICategoryOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: IStage;
  where?: InputMaybe<ICategoryWhereInput>;
}


export interface IQueryCategoriesConnectionArgs {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<ILocale>;
  orderBy?: InputMaybe<ICategoryOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: IStage;
  where?: InputMaybe<ICategoryWhereInput>;
}


export interface IQueryCategoryArgs {
  locales?: Array<ILocale>;
  stage?: IStage;
  where: ICategoryWhereUniqueInput;
}


export interface IQueryCategoryVersionArgs {
  where: IVersionWhereInput;
}


export interface IQueryNodeArgs {
  id: Scalars['ID'];
  locales?: Array<ILocale>;
  stage?: IStage;
}


export interface IQueryPostArgs {
  locales?: Array<ILocale>;
  stage?: IStage;
  where: IPostWhereUniqueInput;
}


export interface IQueryPostVersionArgs {
  where: IVersionWhereInput;
}


export interface IQueryPostsArgs {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<ILocale>;
  orderBy?: InputMaybe<IPostOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: IStage;
  where?: InputMaybe<IPostWhereInput>;
}


export interface IQueryPostsConnectionArgs {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<ILocale>;
  orderBy?: InputMaybe<IPostOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: IStage;
  where?: InputMaybe<IPostWhereInput>;
}


export interface IQueryScheduledOperationArgs {
  locales?: Array<ILocale>;
  stage?: IStage;
  where: IScheduledOperationWhereUniqueInput;
}


export interface IQueryScheduledOperationsArgs {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<ILocale>;
  orderBy?: InputMaybe<IScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: IStage;
  where?: InputMaybe<IScheduledOperationWhereInput>;
}


export interface IQueryScheduledOperationsConnectionArgs {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<ILocale>;
  orderBy?: InputMaybe<IScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: IStage;
  where?: InputMaybe<IScheduledOperationWhereInput>;
}


export interface IQueryScheduledReleaseArgs {
  locales?: Array<ILocale>;
  stage?: IStage;
  where: IScheduledReleaseWhereUniqueInput;
}


export interface IQueryScheduledReleasesArgs {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<ILocale>;
  orderBy?: InputMaybe<IScheduledReleaseOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: IStage;
  where?: InputMaybe<IScheduledReleaseWhereInput>;
}


export interface IQueryScheduledReleasesConnectionArgs {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<ILocale>;
  orderBy?: InputMaybe<IScheduledReleaseOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: IStage;
  where?: InputMaybe<IScheduledReleaseWhereInput>;
}


export interface IQueryUserArgs {
  locales?: Array<ILocale>;
  stage?: IStage;
  where: IUserWhereUniqueInput;
}


export interface IQueryUsersArgs {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<ILocale>;
  orderBy?: InputMaybe<IUserOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: IStage;
  where?: InputMaybe<IUserWhereInput>;
}


export interface IQueryUsersConnectionArgs {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<ILocale>;
  orderBy?: InputMaybe<IUserOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: IStage;
  where?: InputMaybe<IUserWhereInput>;
}

/** Representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export interface IRgba {
  a: Scalars['RGBATransparency'];
  b: Scalars['RGBAHue'];
  g: Scalars['RGBAHue'];
  r: Scalars['RGBAHue'];
}

/** Input type representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export interface IRgbaInput {
  a: Scalars['RGBATransparency'];
  b: Scalars['RGBAHue'];
  g: Scalars['RGBAHue'];
  r: Scalars['RGBAHue'];
}

/** Custom type representing a rich text value comprising of raw rich text ast, html, markdown and text values */
export interface IRichText {
  /** Returns HTMl representation */
  html: Scalars['String'];
  /** Returns Markdown representation */
  markdown: Scalars['String'];
  /** Returns AST representation */
  raw: Scalars['RichTextAST'];
  /** Returns plain-text contents of RichText */
  text: Scalars['String'];
}

/** Scheduled Operation system model */
export interface IScheduledOperation extends INode {
  affectedDocuments: Array<IScheduledOperationAffectedDocument>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<IUser>;
  /** Operation description */
  description?: Maybe<Scalars['String']>;
  /** Get the document in other stages */
  documentInStages: Array<IScheduledOperation>;
  /** Operation error message */
  errorMessage?: Maybe<Scalars['String']>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<IUser>;
  /** Raw operation payload including all details, this field is subject to change */
  rawPayload: Scalars['Json'];
  /** The release this operation is scheduled for */
  release?: Maybe<IScheduledRelease>;
  /** System stage field */
  stage: IStage;
  /** operation Status */
  status: IScheduledOperationStatus;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<IUser>;
}


/** Scheduled Operation system model */
export interface IScheduledOperationAffectedDocumentsArgs {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<ILocale>>;
  skip?: InputMaybe<Scalars['Int']>;
}


/** Scheduled Operation system model */
export interface IScheduledOperationCreatedByArgs {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<ILocale>>;
}


/** Scheduled Operation system model */
export interface IScheduledOperationDocumentInStagesArgs {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<IStage>;
}


/** Scheduled Operation system model */
export interface IScheduledOperationPublishedByArgs {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<ILocale>>;
}


/** Scheduled Operation system model */
export interface IScheduledOperationReleaseArgs {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<ILocale>>;
}


/** Scheduled Operation system model */
export interface IScheduledOperationUpdatedByArgs {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<ILocale>>;
}

export type IScheduledOperationAffectedDocument = IAsset | IAuthor | ICategory | IPost;

export interface IScheduledOperationConnectInput {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<IConnectPositionInput>;
  /** Document to connect */
  where: IScheduledOperationWhereUniqueInput;
}

/** A connection to a list of items. */
export interface IScheduledOperationConnection {
  aggregate: IAggregate;
  /** A list of edges. */
  edges: Array<IScheduledOperationEdge>;
  /** Information to aid in pagination. */
  pageInfo: IPageInfo;
}

export interface IScheduledOperationCreateManyInlineInput {
  /** Connect multiple existing ScheduledOperation documents */
  connect?: InputMaybe<Array<IScheduledOperationWhereUniqueInput>>;
}

export interface IScheduledOperationCreateOneInlineInput {
  /** Connect one existing ScheduledOperation document */
  connect?: InputMaybe<IScheduledOperationWhereUniqueInput>;
}

/** An edge in a connection. */
export interface IScheduledOperationEdge {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: IScheduledOperation;
}

/** Identifies documents */
export interface IScheduledOperationManyWhereInput {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<IScheduledOperationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<IScheduledOperationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<IScheduledOperationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<IUserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  errorMessage_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<IUserWhereInput>;
  /** All values containing the given json path. */
  rawPayload_json_path_exists?: InputMaybe<Scalars['String']>;
  /**
   * Recursively tries to find the provided JSON scalar value inside the field.
   * It does use an exact match when comparing values.
   * If you pass `null` as value the filter will be ignored.
   * Note: This filter fails if you try to look for a non scalar JSON value!
   */
  rawPayload_value_recursive?: InputMaybe<Scalars['Json']>;
  release?: InputMaybe<IScheduledReleaseWhereInput>;
  status?: InputMaybe<IScheduledOperationStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<IScheduledOperationStatus>>>;
  /** Any other value that exists and is not equal to the given value. */
  status_not?: InputMaybe<IScheduledOperationStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<IScheduledOperationStatus>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<IUserWhereInput>;
}

export enum IScheduledOperationOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  ErrorMessageAsc = 'errorMessage_ASC',
  ErrorMessageDesc = 'errorMessage_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** System Scheduled Operation Status */
export enum IScheduledOperationStatus {
  Canceled = 'CANCELED',
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  InProgress = 'IN_PROGRESS',
  Pending = 'PENDING'
}

export interface IScheduledOperationUpdateManyInlineInput {
  /** Connect multiple existing ScheduledOperation documents */
  connect?: InputMaybe<Array<IScheduledOperationConnectInput>>;
  /** Disconnect multiple ScheduledOperation documents */
  disconnect?: InputMaybe<Array<IScheduledOperationWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ScheduledOperation documents */
  set?: InputMaybe<Array<IScheduledOperationWhereUniqueInput>>;
}

export interface IScheduledOperationUpdateOneInlineInput {
  /** Connect existing ScheduledOperation document */
  connect?: InputMaybe<IScheduledOperationWhereUniqueInput>;
  /** Disconnect currently connected ScheduledOperation document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
}

/** Identifies documents */
export interface IScheduledOperationWhereInput {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<IScheduledOperationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<IScheduledOperationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<IScheduledOperationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<IUserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  errorMessage_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<IUserWhereInput>;
  /** All values containing the given json path. */
  rawPayload_json_path_exists?: InputMaybe<Scalars['String']>;
  /**
   * Recursively tries to find the provided JSON scalar value inside the field.
   * It does use an exact match when comparing values.
   * If you pass `null` as value the filter will be ignored.
   * Note: This filter fails if you try to look for a non scalar JSON value!
   */
  rawPayload_value_recursive?: InputMaybe<Scalars['Json']>;
  release?: InputMaybe<IScheduledReleaseWhereInput>;
  status?: InputMaybe<IScheduledOperationStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<IScheduledOperationStatus>>>;
  /** Any other value that exists and is not equal to the given value. */
  status_not?: InputMaybe<IScheduledOperationStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<IScheduledOperationStatus>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<IUserWhereInput>;
}

/** References ScheduledOperation record uniquely */
export interface IScheduledOperationWhereUniqueInput {
  id?: InputMaybe<Scalars['ID']>;
}

/** Scheduled Release system model */
export interface IScheduledRelease extends INode {
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<IUser>;
  /** Release description */
  description?: Maybe<Scalars['String']>;
  /** Get the document in other stages */
  documentInStages: Array<IScheduledRelease>;
  /** Release error message */
  errorMessage?: Maybe<Scalars['String']>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** Whether scheduled release should be run */
  isActive: Scalars['Boolean'];
  /** Whether scheduled release is implicit */
  isImplicit: Scalars['Boolean'];
  /** Operations to run with this release */
  operations: Array<IScheduledOperation>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<IUser>;
  /** Release date and time */
  releaseAt?: Maybe<Scalars['DateTime']>;
  /** System stage field */
  stage: IStage;
  /** Release Status */
  status: IScheduledReleaseStatus;
  /** Release Title */
  title?: Maybe<Scalars['String']>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<IUser>;
}


/** Scheduled Release system model */
export interface IScheduledReleaseCreatedByArgs {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<ILocale>>;
}


/** Scheduled Release system model */
export interface IScheduledReleaseDocumentInStagesArgs {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<IStage>;
}


/** Scheduled Release system model */
export interface IScheduledReleaseOperationsArgs {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<ILocale>>;
  orderBy?: InputMaybe<IScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<IScheduledOperationWhereInput>;
}


/** Scheduled Release system model */
export interface IScheduledReleasePublishedByArgs {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<ILocale>>;
}


/** Scheduled Release system model */
export interface IScheduledReleaseUpdatedByArgs {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<ILocale>>;
}

export interface IScheduledReleaseConnectInput {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<IConnectPositionInput>;
  /** Document to connect */
  where: IScheduledReleaseWhereUniqueInput;
}

/** A connection to a list of items. */
export interface IScheduledReleaseConnection {
  aggregate: IAggregate;
  /** A list of edges. */
  edges: Array<IScheduledReleaseEdge>;
  /** Information to aid in pagination. */
  pageInfo: IPageInfo;
}

export interface IScheduledReleaseCreateInput {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
}

export interface IScheduledReleaseCreateManyInlineInput {
  /** Connect multiple existing ScheduledRelease documents */
  connect?: InputMaybe<Array<IScheduledReleaseWhereUniqueInput>>;
  /** Create and connect multiple existing ScheduledRelease documents */
  create?: InputMaybe<Array<IScheduledReleaseCreateInput>>;
}

export interface IScheduledReleaseCreateOneInlineInput {
  /** Connect one existing ScheduledRelease document */
  connect?: InputMaybe<IScheduledReleaseWhereUniqueInput>;
  /** Create and connect one ScheduledRelease document */
  create?: InputMaybe<IScheduledReleaseCreateInput>;
}

/** An edge in a connection. */
export interface IScheduledReleaseEdge {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: IScheduledRelease;
}

/** Identifies documents */
export interface IScheduledReleaseManyWhereInput {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<IScheduledReleaseWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<IScheduledReleaseWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<IScheduledReleaseWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<IUserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  errorMessage_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  /** Any other value that exists and is not equal to the given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']>;
  isImplicit?: InputMaybe<Scalars['Boolean']>;
  /** Any other value that exists and is not equal to the given value. */
  isImplicit_not?: InputMaybe<Scalars['Boolean']>;
  operations_every?: InputMaybe<IScheduledOperationWhereInput>;
  operations_none?: InputMaybe<IScheduledOperationWhereInput>;
  operations_some?: InputMaybe<IScheduledOperationWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<IUserWhereInput>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  releaseAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  releaseAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  releaseAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  releaseAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  releaseAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  releaseAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  releaseAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  status?: InputMaybe<IScheduledReleaseStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<IScheduledReleaseStatus>>>;
  /** Any other value that exists and is not equal to the given value. */
  status_not?: InputMaybe<IScheduledReleaseStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<IScheduledReleaseStatus>>>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<IUserWhereInput>;
}

export enum IScheduledReleaseOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  ErrorMessageAsc = 'errorMessage_ASC',
  ErrorMessageDesc = 'errorMessage_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsActiveAsc = 'isActive_ASC',
  IsActiveDesc = 'isActive_DESC',
  IsImplicitAsc = 'isImplicit_ASC',
  IsImplicitDesc = 'isImplicit_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  ReleaseAtAsc = 'releaseAt_ASC',
  ReleaseAtDesc = 'releaseAt_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** System Scheduled Release Status */
export enum IScheduledReleaseStatus {
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  InProgress = 'IN_PROGRESS',
  Pending = 'PENDING'
}

export interface IScheduledReleaseUpdateInput {
  description?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
}

export interface IScheduledReleaseUpdateManyInlineInput {
  /** Connect multiple existing ScheduledRelease documents */
  connect?: InputMaybe<Array<IScheduledReleaseConnectInput>>;
  /** Create and connect multiple ScheduledRelease documents */
  create?: InputMaybe<Array<IScheduledReleaseCreateInput>>;
  /** Delete multiple ScheduledRelease documents */
  delete?: InputMaybe<Array<IScheduledReleaseWhereUniqueInput>>;
  /** Disconnect multiple ScheduledRelease documents */
  disconnect?: InputMaybe<Array<IScheduledReleaseWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ScheduledRelease documents */
  set?: InputMaybe<Array<IScheduledReleaseWhereUniqueInput>>;
  /** Update multiple ScheduledRelease documents */
  update?: InputMaybe<Array<IScheduledReleaseUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple ScheduledRelease documents */
  upsert?: InputMaybe<Array<IScheduledReleaseUpsertWithNestedWhereUniqueInput>>;
}

export interface IScheduledReleaseUpdateManyInput {
  description?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
}

export interface IScheduledReleaseUpdateManyWithNestedWhereInput {
  /** Update many input */
  data: IScheduledReleaseUpdateManyInput;
  /** Document search */
  where: IScheduledReleaseWhereInput;
}

export interface IScheduledReleaseUpdateOneInlineInput {
  /** Connect existing ScheduledRelease document */
  connect?: InputMaybe<IScheduledReleaseWhereUniqueInput>;
  /** Create and connect one ScheduledRelease document */
  create?: InputMaybe<IScheduledReleaseCreateInput>;
  /** Delete currently connected ScheduledRelease document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected ScheduledRelease document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single ScheduledRelease document */
  update?: InputMaybe<IScheduledReleaseUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ScheduledRelease document */
  upsert?: InputMaybe<IScheduledReleaseUpsertWithNestedWhereUniqueInput>;
}

export interface IScheduledReleaseUpdateWithNestedWhereUniqueInput {
  /** Document to update */
  data: IScheduledReleaseUpdateInput;
  /** Unique document search */
  where: IScheduledReleaseWhereUniqueInput;
}

export interface IScheduledReleaseUpsertInput {
  /** Create document if it didn't exist */
  create: IScheduledReleaseCreateInput;
  /** Update document if it exists */
  update: IScheduledReleaseUpdateInput;
}

export interface IScheduledReleaseUpsertWithNestedWhereUniqueInput {
  /** Upsert data */
  data: IScheduledReleaseUpsertInput;
  /** Unique document search */
  where: IScheduledReleaseWhereUniqueInput;
}

/** Identifies documents */
export interface IScheduledReleaseWhereInput {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<IScheduledReleaseWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<IScheduledReleaseWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<IScheduledReleaseWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<IUserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  errorMessage_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  /** Any other value that exists and is not equal to the given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']>;
  isImplicit?: InputMaybe<Scalars['Boolean']>;
  /** Any other value that exists and is not equal to the given value. */
  isImplicit_not?: InputMaybe<Scalars['Boolean']>;
  operations_every?: InputMaybe<IScheduledOperationWhereInput>;
  operations_none?: InputMaybe<IScheduledOperationWhereInput>;
  operations_some?: InputMaybe<IScheduledOperationWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<IUserWhereInput>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  releaseAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  releaseAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  releaseAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  releaseAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  releaseAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  releaseAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  releaseAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  status?: InputMaybe<IScheduledReleaseStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<IScheduledReleaseStatus>>>;
  /** Any other value that exists and is not equal to the given value. */
  status_not?: InputMaybe<IScheduledReleaseStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<IScheduledReleaseStatus>>>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<IUserWhereInput>;
}

/** References ScheduledRelease record uniquely */
export interface IScheduledReleaseWhereUniqueInput {
  id?: InputMaybe<Scalars['ID']>;
}

/** Stage system enumeration */
export enum IStage {
  /** The Draft is the default stage for all your content. */
  Draft = 'DRAFT',
  /** The Published stage is where you can publish your content to. */
  Published = 'PUBLISHED'
}

export enum ISystemDateTimeFieldVariation {
  Base = 'BASE',
  Combined = 'COMBINED',
  Localization = 'LOCALIZATION'
}

export interface IUnpublishLocaleInput {
  /** Locales to unpublish */
  locale: ILocale;
  /** Stages to unpublish selected locales from */
  stages: Array<IStage>;
}

/** User system model */
export interface IUser extends INode {
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** Get the document in other stages */
  documentInStages: Array<IUser>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** Flag to determine if user is active or not */
  isActive: Scalars['Boolean'];
  /** User Kind. Can be either MEMBER, PAT or PUBLIC */
  kind: IUserKind;
  /** The username */
  name: Scalars['String'];
  /** Profile Picture url */
  picture?: Maybe<Scalars['String']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** System stage field */
  stage: IStage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
}


/** User system model */
export interface IUserDocumentInStagesArgs {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<IStage>;
}

export interface IUserConnectInput {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<IConnectPositionInput>;
  /** Document to connect */
  where: IUserWhereUniqueInput;
}

/** A connection to a list of items. */
export interface IUserConnection {
  aggregate: IAggregate;
  /** A list of edges. */
  edges: Array<IUserEdge>;
  /** Information to aid in pagination. */
  pageInfo: IPageInfo;
}

export interface IUserCreateManyInlineInput {
  /** Connect multiple existing User documents */
  connect?: InputMaybe<Array<IUserWhereUniqueInput>>;
}

export interface IUserCreateOneInlineInput {
  /** Connect one existing User document */
  connect?: InputMaybe<IUserWhereUniqueInput>;
}

/** An edge in a connection. */
export interface IUserEdge {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: IUser;
}

/** System User Kind */
export enum IUserKind {
  Member = 'MEMBER',
  Pat = 'PAT',
  Public = 'PUBLIC',
  Webhook = 'WEBHOOK'
}

/** Identifies documents */
export interface IUserManyWhereInput {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<IUserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<IUserWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<IUserWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  documentInStages_every?: InputMaybe<IUserWhereStageInput>;
  documentInStages_none?: InputMaybe<IUserWhereStageInput>;
  documentInStages_some?: InputMaybe<IUserWhereStageInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  /** Any other value that exists and is not equal to the given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']>;
  kind?: InputMaybe<IUserKind>;
  /** All values that are contained in given list. */
  kind_in?: InputMaybe<Array<InputMaybe<IUserKind>>>;
  /** Any other value that exists and is not equal to the given value. */
  kind_not?: InputMaybe<IUserKind>;
  /** All values that are not contained in given list. */
  kind_not_in?: InputMaybe<Array<InputMaybe<IUserKind>>>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  picture?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  picture_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  picture_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  picture_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  picture_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  picture_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  picture_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  picture_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  picture_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  picture_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
}

export enum IUserOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsActiveAsc = 'isActive_ASC',
  IsActiveDesc = 'isActive_DESC',
  KindAsc = 'kind_ASC',
  KindDesc = 'kind_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PictureAsc = 'picture_ASC',
  PictureDesc = 'picture_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export interface IUserUpdateManyInlineInput {
  /** Connect multiple existing User documents */
  connect?: InputMaybe<Array<IUserConnectInput>>;
  /** Disconnect multiple User documents */
  disconnect?: InputMaybe<Array<IUserWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing User documents */
  set?: InputMaybe<Array<IUserWhereUniqueInput>>;
}

export interface IUserUpdateOneInlineInput {
  /** Connect existing User document */
  connect?: InputMaybe<IUserWhereUniqueInput>;
  /** Disconnect currently connected User document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
}

/** This contains a set of filters that can be used to compare values internally */
export interface IUserWhereComparatorInput {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>;
}

/** Identifies documents */
export interface IUserWhereInput {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<IUserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<IUserWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<IUserWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  documentInStages_every?: InputMaybe<IUserWhereStageInput>;
  documentInStages_none?: InputMaybe<IUserWhereStageInput>;
  documentInStages_some?: InputMaybe<IUserWhereStageInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  /** Any other value that exists and is not equal to the given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']>;
  kind?: InputMaybe<IUserKind>;
  /** All values that are contained in given list. */
  kind_in?: InputMaybe<Array<InputMaybe<IUserKind>>>;
  /** Any other value that exists and is not equal to the given value. */
  kind_not?: InputMaybe<IUserKind>;
  /** All values that are not contained in given list. */
  kind_not_in?: InputMaybe<Array<InputMaybe<IUserKind>>>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  picture?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  picture_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  picture_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  picture_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  picture_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  picture_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  picture_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  picture_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  picture_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  picture_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
}

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export interface IUserWhereStageInput {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<IUserWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<IUserWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<IUserWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<IUserWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<IStage>;
}

/** References User record uniquely */
export interface IUserWhereUniqueInput {
  id?: InputMaybe<Scalars['ID']>;
}

export interface IVersion {
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  revision: Scalars['Int'];
  stage: IStage;
}

export interface IVersionWhereInput {
  id: Scalars['ID'];
  revision: Scalars['Int'];
  stage: IStage;
}

export enum I_FilterKind {
  And = 'AND',
  Not = 'NOT',
  Or = 'OR',
  Contains = 'contains',
  ContainsAll = 'contains_all',
  ContainsNone = 'contains_none',
  ContainsSome = 'contains_some',
  EndsWith = 'ends_with',
  Eq = 'eq',
  EqNot = 'eq_not',
  Gt = 'gt',
  Gte = 'gte',
  In = 'in',
  JsonPathExists = 'json_path_exists',
  JsonValueRecursive = 'json_value_recursive',
  Lt = 'lt',
  Lte = 'lte',
  NotContains = 'not_contains',
  NotEndsWith = 'not_ends_with',
  NotIn = 'not_in',
  NotStartsWith = 'not_starts_with',
  RelationalEvery = 'relational_every',
  RelationalNone = 'relational_none',
  RelationalSingle = 'relational_single',
  RelationalSome = 'relational_some',
  Search = 'search',
  StartsWith = 'starts_with',
  UnionEmpty = 'union_empty',
  UnionEvery = 'union_every',
  UnionNone = 'union_none',
  UnionSingle = 'union_single',
  UnionSome = 'union_some'
}

export enum I_MutationInputFieldKind {
  Enum = 'enum',
  Relation = 'relation',
  RichText = 'richText',
  RichTextWithEmbeds = 'richTextWithEmbeds',
  Scalar = 'scalar',
  Union = 'union',
  Virtual = 'virtual'
}

export enum I_MutationKind {
  Create = 'create',
  Delete = 'delete',
  DeleteMany = 'deleteMany',
  Publish = 'publish',
  PublishMany = 'publishMany',
  SchedulePublish = 'schedulePublish',
  ScheduleUnpublish = 'scheduleUnpublish',
  Unpublish = 'unpublish',
  UnpublishMany = 'unpublishMany',
  Update = 'update',
  UpdateMany = 'updateMany',
  Upsert = 'upsert'
}

export enum I_OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export enum I_RelationInputCardinality {
  Many = 'many',
  One = 'one'
}

export enum I_RelationInputKind {
  Create = 'create',
  Update = 'update'
}

export enum I_RelationKind {
  Regular = 'regular',
  Union = 'union'
}

export enum I_SystemDateTimeFieldVariation {
  Base = 'base',
  Combined = 'combined',
  Localization = 'localization'
}

export type IGetHighlightPostQueryVariables = Exact<{ [key: string]: never; }>;


export type IGetHighlightPostQuery = { posts: Array<{ id: string, slug: string, title: string, createdAt: Date, category?: { title?: string | null } | null, banner?: { url: string } | null, author?: { name: string, avatarImage?: { url: string } | null } | null }> };

export type IGetPostBySlugQueryVariables = Exact<{
  slug?: InputMaybe<Scalars['String']>;
}>;


export type IGetPostBySlugQuery = { post?: { id: string, slug: string, title: string, createdAt: Date, content?: { html: string } | null, category?: { title?: string | null } | null, banner?: { url: string } | null, author?: { name: string, avatarImage?: { url: string } | null } | null } | null };

export type IGetPostsByCategoryQueryVariables = Exact<{
  title_contains?: InputMaybe<Scalars['String']>;
}>;


export type IGetPostsByCategoryQuery = { posts: Array<{ id: string, slug: string, title: string, createdAt: Date, category?: { title?: string | null } | null, banner?: { url: string } | null, author?: { name: string, avatarImage?: { url: string } | null } | null }> };

export type IGetPostsQueryVariables = Exact<{ [key: string]: never; }>;


export type IGetPostsQuery = { posts: Array<{ id: string, slug: string, title: string, createdAt: Date, category?: { title?: string | null } | null, banner?: { url: string } | null, author?: { name: string, avatarImage?: { url: string } | null } | null }> };


export const GetHighlightPostDocument = /*#__PURE__*/ gql`
    query GetHighlightPost {
  posts(where: {highlight: true}) {
    id
    slug
    title
    createdAt
    category {
      title
    }
    banner {
      url
    }
    author {
      name
      avatarImage {
        url
      }
    }
  }
}
    `;

export function useGetHighlightPostQuery(options?: Omit<Urql.UseQueryArgs<IGetHighlightPostQueryVariables>, 'query'>) {
  return Urql.useQuery<IGetHighlightPostQuery, IGetHighlightPostQueryVariables>({ query: GetHighlightPostDocument, ...options });
};
export const GetPostBySlugDocument = /*#__PURE__*/ gql`
    query GetPostBySlug($slug: String) {
  post(where: {slug: $slug}) {
    id
    slug
    title
    createdAt
    content {
      html
    }
    category {
      title
    }
    banner {
      url
    }
    author {
      name
      avatarImage {
        url
      }
    }
  }
}
    `;

export function useGetPostBySlugQuery(options?: Omit<Urql.UseQueryArgs<IGetPostBySlugQueryVariables>, 'query'>) {
  return Urql.useQuery<IGetPostBySlugQuery, IGetPostBySlugQueryVariables>({ query: GetPostBySlugDocument, ...options });
};
export const GetPostsByCategoryDocument = /*#__PURE__*/ gql`
    query GetPostsByCategory($title_contains: String) {
  posts(where: {category: {title_contains: $title_contains}}) {
    id
    slug
    title
    createdAt
    category {
      title
    }
    banner {
      url
    }
    author {
      name
      avatarImage {
        url
      }
    }
  }
}
    `;

export function useGetPostsByCategoryQuery(options?: Omit<Urql.UseQueryArgs<IGetPostsByCategoryQueryVariables>, 'query'>) {
  return Urql.useQuery<IGetPostsByCategoryQuery, IGetPostsByCategoryQueryVariables>({ query: GetPostsByCategoryDocument, ...options });
};
export const GetPostsDocument = /*#__PURE__*/ gql`
    query GetPosts {
  posts {
    id
    slug
    title
    createdAt
    category {
      title
    }
    banner {
      url
    }
    author {
      name
      avatarImage {
        url
      }
    }
  }
}
    `;

export function useGetPostsQuery(options?: Omit<Urql.UseQueryArgs<IGetPostsQueryVariables>, 'query'>) {
  return Urql.useQuery<IGetPostsQuery, IGetPostsQueryVariables>({ query: GetPostsDocument, ...options });
};