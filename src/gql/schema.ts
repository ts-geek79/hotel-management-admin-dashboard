export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  BigFloat: { input: unknown; output: unknown; }
  Cursor: { input: unknown; output: unknown; }
  Date: { input: unknown; output: unknown; }
  Datetime: { input: unknown; output: unknown; }
};

export type Booking = Node & {
  __typename?: 'Booking';
  bookingId: Scalars['Int']['output'];
  checkInDate: Scalars['Date']['output'];
  checkOutDate: Scalars['Date']['output'];
  /** Reads a single `Guest` that is related to this `Booking`. */
  guestByGuestId?: Maybe<Guest>;
  guestId: Scalars['Int']['output'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output'];
  /** Reads a single `Room` that is related to this `Booking`. */
  roomByRoomId?: Maybe<Room>;
  roomId: Scalars['Int']['output'];
  status: BookingStatus;
};

/** A condition to be used against `Booking` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type BookingCondition = {
  /** Checks for equality with the object’s `bookingId` field. */
  bookingId?: InputMaybe<Scalars['Int']['input']>;
  /** Checks for equality with the object’s `checkInDate` field. */
  checkInDate?: InputMaybe<Scalars['Date']['input']>;
  /** Checks for equality with the object’s `checkOutDate` field. */
  checkOutDate?: InputMaybe<Scalars['Date']['input']>;
  /** Checks for equality with the object’s `guestId` field. */
  guestId?: InputMaybe<Scalars['Int']['input']>;
  /** Checks for equality with the object’s `roomId` field. */
  roomId?: InputMaybe<Scalars['Int']['input']>;
  /** Checks for equality with the object’s `status` field. */
  status?: InputMaybe<BookingStatus>;
};

/** An input for mutations affecting `Booking` */
export type BookingInput = {
  bookingId?: InputMaybe<Scalars['Int']['input']>;
  checkInDate: Scalars['Date']['input'];
  checkOutDate: Scalars['Date']['input'];
  guestId: Scalars['Int']['input'];
  roomId: Scalars['Int']['input'];
  status?: InputMaybe<BookingStatus>;
};

/** Represents an update to a `Booking`. Fields that are set will be updated. */
export type BookingPatch = {
  bookingId?: InputMaybe<Scalars['Int']['input']>;
  checkInDate?: InputMaybe<Scalars['Date']['input']>;
  checkOutDate?: InputMaybe<Scalars['Date']['input']>;
  guestId?: InputMaybe<Scalars['Int']['input']>;
  roomId?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<BookingStatus>;
};

export enum BookingStatus {
  Booked = 'BOOKED',
  Cancelled = 'CANCELLED',
  CheckedIn = 'CHECKED_IN',
  CheckedOut = 'CHECKED_OUT'
}

/** A connection to a list of `Booking` values. */
export type BookingsConnection = {
  __typename?: 'BookingsConnection';
  /** A list of edges which contains the `Booking` and cursor to aid in pagination. */
  edges: Array<BookingsEdge>;
  /** A list of `Booking` objects. */
  nodes: Array<Maybe<Booking>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Booking` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `Booking` edge in the connection. */
export type BookingsEdge = {
  __typename?: 'BookingsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Booking` at the end of the edge. */
  node?: Maybe<Booking>;
};

/** Methods to use when ordering `Booking`. */
export enum BookingsOrderBy {
  BookingIdAsc = 'BOOKING_ID_ASC',
  BookingIdDesc = 'BOOKING_ID_DESC',
  CheckInDateAsc = 'CHECK_IN_DATE_ASC',
  CheckInDateDesc = 'CHECK_IN_DATE_DESC',
  CheckOutDateAsc = 'CHECK_OUT_DATE_ASC',
  CheckOutDateDesc = 'CHECK_OUT_DATE_DESC',
  GuestIdAsc = 'GUEST_ID_ASC',
  GuestIdDesc = 'GUEST_ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  RoomIdAsc = 'ROOM_ID_ASC',
  RoomIdDesc = 'ROOM_ID_DESC',
  StatusAsc = 'STATUS_ASC',
  StatusDesc = 'STATUS_DESC'
}

/** All input for the create `Booking` mutation. */
export type CreateBookingInput = {
  /** The `Booking` to be created by this mutation. */
  booking: BookingInput;
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

/** The output of our create `Booking` mutation. */
export type CreateBookingPayload = {
  __typename?: 'CreateBookingPayload';
  /** The `Booking` that was created by this mutation. */
  booking?: Maybe<Booking>;
  /** An edge for our `Booking`. May be used by Relay 1. */
  bookingEdge?: Maybe<BookingsEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Reads a single `Guest` that is related to this `Booking`. */
  guestByGuestId?: Maybe<Guest>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Room` that is related to this `Booking`. */
  roomByRoomId?: Maybe<Room>;
};


/** The output of our create `Booking` mutation. */
export type CreateBookingPayloadBookingEdgeArgs = {
  orderBy?: InputMaybe<Array<BookingsOrderBy>>;
};

/** All input for the create `Guest` mutation. */
export type CreateGuestInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The `Guest` to be created by this mutation. */
  guest: GuestInput;
};

/** The output of our create `Guest` mutation. */
export type CreateGuestPayload = {
  __typename?: 'CreateGuestPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** The `Guest` that was created by this mutation. */
  guest?: Maybe<Guest>;
  /** An edge for our `Guest`. May be used by Relay 1. */
  guestEdge?: Maybe<GuestsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our create `Guest` mutation. */
export type CreateGuestPayloadGuestEdgeArgs = {
  orderBy?: InputMaybe<Array<GuestsOrderBy>>;
};

/** All input for the create `Pgmigration` mutation. */
export type CreatePgmigrationInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The `Pgmigration` to be created by this mutation. */
  pgmigration: PgmigrationInput;
};

/** The output of our create `Pgmigration` mutation. */
export type CreatePgmigrationPayload = {
  __typename?: 'CreatePgmigrationPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** The `Pgmigration` that was created by this mutation. */
  pgmigration?: Maybe<Pgmigration>;
  /** An edge for our `Pgmigration`. May be used by Relay 1. */
  pgmigrationEdge?: Maybe<PgmigrationsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our create `Pgmigration` mutation. */
export type CreatePgmigrationPayloadPgmigrationEdgeArgs = {
  orderBy?: InputMaybe<Array<PgmigrationsOrderBy>>;
};

/** All input for the create `Room` mutation. */
export type CreateRoomInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The `Room` to be created by this mutation. */
  room: RoomInput;
};

/** The output of our create `Room` mutation. */
export type CreateRoomPayload = {
  __typename?: 'CreateRoomPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `Room` that was created by this mutation. */
  room?: Maybe<Room>;
  /** An edge for our `Room`. May be used by Relay 1. */
  roomEdge?: Maybe<RoomsEdge>;
};


/** The output of our create `Room` mutation. */
export type CreateRoomPayloadRoomEdgeArgs = {
  orderBy?: InputMaybe<Array<RoomsOrderBy>>;
};

/** All input for the create `User` mutation. */
export type CreateUserInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The `User` to be created by this mutation. */
  user: UserInput;
};

/** The output of our create `User` mutation. */
export type CreateUserPayload = {
  __typename?: 'CreateUserPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `User` that was created by this mutation. */
  user?: Maybe<User>;
  /** An edge for our `User`. May be used by Relay 1. */
  userEdge?: Maybe<UsersEdge>;
};


/** The output of our create `User` mutation. */
export type CreateUserPayloadUserEdgeArgs = {
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
};

/** All input for the `deleteBookingByBookingId` mutation. */
export type DeleteBookingByBookingIdInput = {
  bookingId: Scalars['Int']['input'];
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

/** All input for the `deleteBooking` mutation. */
export type DeleteBookingInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `Booking` to be deleted. */
  nodeId: Scalars['ID']['input'];
};

/** The output of our delete `Booking` mutation. */
export type DeleteBookingPayload = {
  __typename?: 'DeleteBookingPayload';
  /** The `Booking` that was deleted by this mutation. */
  booking?: Maybe<Booking>;
  /** An edge for our `Booking`. May be used by Relay 1. */
  bookingEdge?: Maybe<BookingsEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedBookingId?: Maybe<Scalars['ID']['output']>;
  /** Reads a single `Guest` that is related to this `Booking`. */
  guestByGuestId?: Maybe<Guest>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Room` that is related to this `Booking`. */
  roomByRoomId?: Maybe<Room>;
};


/** The output of our delete `Booking` mutation. */
export type DeleteBookingPayloadBookingEdgeArgs = {
  orderBy?: InputMaybe<Array<BookingsOrderBy>>;
};

/** All input for the `deleteGuestByEmail` mutation. */
export type DeleteGuestByEmailInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
};

/** All input for the `deleteGuestByGuestId` mutation. */
export type DeleteGuestByGuestIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  guestId: Scalars['Int']['input'];
};

/** All input for the `deleteGuest` mutation. */
export type DeleteGuestInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `Guest` to be deleted. */
  nodeId: Scalars['ID']['input'];
};

/** The output of our delete `Guest` mutation. */
export type DeleteGuestPayload = {
  __typename?: 'DeleteGuestPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedGuestId?: Maybe<Scalars['ID']['output']>;
  /** The `Guest` that was deleted by this mutation. */
  guest?: Maybe<Guest>;
  /** An edge for our `Guest`. May be used by Relay 1. */
  guestEdge?: Maybe<GuestsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our delete `Guest` mutation. */
export type DeleteGuestPayloadGuestEdgeArgs = {
  orderBy?: InputMaybe<Array<GuestsOrderBy>>;
};

/** All input for the `deletePgmigrationById` mutation. */
export type DeletePgmigrationByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
};

/** All input for the `deletePgmigration` mutation. */
export type DeletePgmigrationInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `Pgmigration` to be deleted. */
  nodeId: Scalars['ID']['input'];
};

/** The output of our delete `Pgmigration` mutation. */
export type DeletePgmigrationPayload = {
  __typename?: 'DeletePgmigrationPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedPgmigrationId?: Maybe<Scalars['ID']['output']>;
  /** The `Pgmigration` that was deleted by this mutation. */
  pgmigration?: Maybe<Pgmigration>;
  /** An edge for our `Pgmigration`. May be used by Relay 1. */
  pgmigrationEdge?: Maybe<PgmigrationsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our delete `Pgmigration` mutation. */
export type DeletePgmigrationPayloadPgmigrationEdgeArgs = {
  orderBy?: InputMaybe<Array<PgmigrationsOrderBy>>;
};

/** All input for the `deleteRoomByRoomId` mutation. */
export type DeleteRoomByRoomIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  roomId: Scalars['Int']['input'];
};

/** All input for the `deleteRoomByRoomNumber` mutation. */
export type DeleteRoomByRoomNumberInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  roomNumber: Scalars['Int']['input'];
};

/** All input for the `deleteRoom` mutation. */
export type DeleteRoomInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `Room` to be deleted. */
  nodeId: Scalars['ID']['input'];
};

/** The output of our delete `Room` mutation. */
export type DeleteRoomPayload = {
  __typename?: 'DeleteRoomPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedRoomId?: Maybe<Scalars['ID']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `Room` that was deleted by this mutation. */
  room?: Maybe<Room>;
  /** An edge for our `Room`. May be used by Relay 1. */
  roomEdge?: Maybe<RoomsEdge>;
};


/** The output of our delete `Room` mutation. */
export type DeleteRoomPayloadRoomEdgeArgs = {
  orderBy?: InputMaybe<Array<RoomsOrderBy>>;
};

/** All input for the `deleteUserByEmail` mutation. */
export type DeleteUserByEmailInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
};

/** All input for the `deleteUserByUserId` mutation. */
export type DeleteUserByUserIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  userId: Scalars['Int']['input'];
};

/** All input for the `deleteUser` mutation. */
export type DeleteUserInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `User` to be deleted. */
  nodeId: Scalars['ID']['input'];
};

/** The output of our delete `User` mutation. */
export type DeleteUserPayload = {
  __typename?: 'DeleteUserPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedUserId?: Maybe<Scalars['ID']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `User` that was deleted by this mutation. */
  user?: Maybe<User>;
  /** An edge for our `User`. May be used by Relay 1. */
  userEdge?: Maybe<UsersEdge>;
};


/** The output of our delete `User` mutation. */
export type DeleteUserPayloadUserEdgeArgs = {
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
};

export type Guest = Node & {
  __typename?: 'Guest';
  /** Reads and enables pagination through a set of `Booking`. */
  bookingsByGuestId: BookingsConnection;
  email: Scalars['String']['output'];
  fullName: Scalars['String']['output'];
  guestId: Scalars['Int']['output'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output'];
  phoneNumber?: Maybe<Scalars['String']['output']>;
};


export type GuestBookingsByGuestIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<BookingCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<BookingsOrderBy>>;
};

/** A condition to be used against `Guest` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type GuestCondition = {
  /** Checks for equality with the object’s `email` field. */
  email?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `fullName` field. */
  fullName?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `guestId` field. */
  guestId?: InputMaybe<Scalars['Int']['input']>;
  /** Checks for equality with the object’s `phoneNumber` field. */
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
};

/** An input for mutations affecting `Guest` */
export type GuestInput = {
  email: Scalars['String']['input'];
  fullName: Scalars['String']['input'];
  guestId?: InputMaybe<Scalars['Int']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
};

/** Represents an update to a `Guest`. Fields that are set will be updated. */
export type GuestPatch = {
  email?: InputMaybe<Scalars['String']['input']>;
  fullName?: InputMaybe<Scalars['String']['input']>;
  guestId?: InputMaybe<Scalars['Int']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
};

/** A connection to a list of `Guest` values. */
export type GuestsConnection = {
  __typename?: 'GuestsConnection';
  /** A list of edges which contains the `Guest` and cursor to aid in pagination. */
  edges: Array<GuestsEdge>;
  /** A list of `Guest` objects. */
  nodes: Array<Maybe<Guest>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Guest` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `Guest` edge in the connection. */
export type GuestsEdge = {
  __typename?: 'GuestsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Guest` at the end of the edge. */
  node?: Maybe<Guest>;
};

/** Methods to use when ordering `Guest`. */
export enum GuestsOrderBy {
  EmailAsc = 'EMAIL_ASC',
  EmailDesc = 'EMAIL_DESC',
  FullNameAsc = 'FULL_NAME_ASC',
  FullNameDesc = 'FULL_NAME_DESC',
  GuestIdAsc = 'GUEST_ID_ASC',
  GuestIdDesc = 'GUEST_ID_DESC',
  Natural = 'NATURAL',
  PhoneNumberAsc = 'PHONE_NUMBER_ASC',
  PhoneNumberDesc = 'PHONE_NUMBER_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** The root mutation type which contains root level fields which mutate data. */
export type Mutation = {
  __typename?: 'Mutation';
  /** Creates a single `Booking`. */
  createBooking?: Maybe<CreateBookingPayload>;
  /** Creates a single `Guest`. */
  createGuest?: Maybe<CreateGuestPayload>;
  /** Creates a single `Pgmigration`. */
  createPgmigration?: Maybe<CreatePgmigrationPayload>;
  /** Creates a single `Room`. */
  createRoom?: Maybe<CreateRoomPayload>;
  /** Creates a single `User`. */
  createUser?: Maybe<CreateUserPayload>;
  /** Deletes a single `Booking` using its globally unique id. */
  deleteBooking?: Maybe<DeleteBookingPayload>;
  /** Deletes a single `Booking` using a unique key. */
  deleteBookingByBookingId?: Maybe<DeleteBookingPayload>;
  /** Deletes a single `Guest` using its globally unique id. */
  deleteGuest?: Maybe<DeleteGuestPayload>;
  /** Deletes a single `Guest` using a unique key. */
  deleteGuestByEmail?: Maybe<DeleteGuestPayload>;
  /** Deletes a single `Guest` using a unique key. */
  deleteGuestByGuestId?: Maybe<DeleteGuestPayload>;
  /** Deletes a single `Pgmigration` using its globally unique id. */
  deletePgmigration?: Maybe<DeletePgmigrationPayload>;
  /** Deletes a single `Pgmigration` using a unique key. */
  deletePgmigrationById?: Maybe<DeletePgmigrationPayload>;
  /** Deletes a single `Room` using its globally unique id. */
  deleteRoom?: Maybe<DeleteRoomPayload>;
  /** Deletes a single `Room` using a unique key. */
  deleteRoomByRoomId?: Maybe<DeleteRoomPayload>;
  /** Deletes a single `Room` using a unique key. */
  deleteRoomByRoomNumber?: Maybe<DeleteRoomPayload>;
  /** Deletes a single `User` using its globally unique id. */
  deleteUser?: Maybe<DeleteUserPayload>;
  /** Deletes a single `User` using a unique key. */
  deleteUserByEmail?: Maybe<DeleteUserPayload>;
  /** Deletes a single `User` using a unique key. */
  deleteUserByUserId?: Maybe<DeleteUserPayload>;
  /** Updates a single `Booking` using its globally unique id and a patch. */
  updateBooking?: Maybe<UpdateBookingPayload>;
  /** Updates a single `Booking` using a unique key and a patch. */
  updateBookingByBookingId?: Maybe<UpdateBookingPayload>;
  /** Updates a single `Guest` using its globally unique id and a patch. */
  updateGuest?: Maybe<UpdateGuestPayload>;
  /** Updates a single `Guest` using a unique key and a patch. */
  updateGuestByEmail?: Maybe<UpdateGuestPayload>;
  /** Updates a single `Guest` using a unique key and a patch. */
  updateGuestByGuestId?: Maybe<UpdateGuestPayload>;
  /** Updates a single `Pgmigration` using its globally unique id and a patch. */
  updatePgmigration?: Maybe<UpdatePgmigrationPayload>;
  /** Updates a single `Pgmigration` using a unique key and a patch. */
  updatePgmigrationById?: Maybe<UpdatePgmigrationPayload>;
  /** Updates a single `Room` using its globally unique id and a patch. */
  updateRoom?: Maybe<UpdateRoomPayload>;
  /** Updates a single `Room` using a unique key and a patch. */
  updateRoomByRoomId?: Maybe<UpdateRoomPayload>;
  /** Updates a single `Room` using a unique key and a patch. */
  updateRoomByRoomNumber?: Maybe<UpdateRoomPayload>;
  /** Updates a single `User` using its globally unique id and a patch. */
  updateUser?: Maybe<UpdateUserPayload>;
  /** Updates a single `User` using a unique key and a patch. */
  updateUserByEmail?: Maybe<UpdateUserPayload>;
  /** Updates a single `User` using a unique key and a patch. */
  updateUserByUserId?: Maybe<UpdateUserPayload>;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateBookingArgs = {
  input: CreateBookingInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateGuestArgs = {
  input: CreateGuestInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreatePgmigrationArgs = {
  input: CreatePgmigrationInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateRoomArgs = {
  input: CreateRoomInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateUserArgs = {
  input: CreateUserInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteBookingArgs = {
  input: DeleteBookingInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteBookingByBookingIdArgs = {
  input: DeleteBookingByBookingIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteGuestArgs = {
  input: DeleteGuestInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteGuestByEmailArgs = {
  input: DeleteGuestByEmailInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteGuestByGuestIdArgs = {
  input: DeleteGuestByGuestIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeletePgmigrationArgs = {
  input: DeletePgmigrationInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeletePgmigrationByIdArgs = {
  input: DeletePgmigrationByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteRoomArgs = {
  input: DeleteRoomInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteRoomByRoomIdArgs = {
  input: DeleteRoomByRoomIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteRoomByRoomNumberArgs = {
  input: DeleteRoomByRoomNumberInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteUserArgs = {
  input: DeleteUserInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteUserByEmailArgs = {
  input: DeleteUserByEmailInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteUserByUserIdArgs = {
  input: DeleteUserByUserIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateBookingArgs = {
  input: UpdateBookingInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateBookingByBookingIdArgs = {
  input: UpdateBookingByBookingIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateGuestArgs = {
  input: UpdateGuestInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateGuestByEmailArgs = {
  input: UpdateGuestByEmailInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateGuestByGuestIdArgs = {
  input: UpdateGuestByGuestIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdatePgmigrationArgs = {
  input: UpdatePgmigrationInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdatePgmigrationByIdArgs = {
  input: UpdatePgmigrationByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateRoomArgs = {
  input: UpdateRoomInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateRoomByRoomIdArgs = {
  input: UpdateRoomByRoomIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateRoomByRoomNumberArgs = {
  input: UpdateRoomByRoomNumberInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateUserArgs = {
  input: UpdateUserInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateUserByEmailArgs = {
  input: UpdateUserByEmailInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateUserByUserIdArgs = {
  input: UpdateUserByUserIdInput;
};

/** An object with a globally unique `ID`. */
export type Node = {
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output'];
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['Cursor']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['Cursor']['output']>;
};

export type Pgmigration = Node & {
  __typename?: 'Pgmigration';
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output'];
  runOn: Scalars['Datetime']['output'];
};

/**
 * A condition to be used against `Pgmigration` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type PgmigrationCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** Checks for equality with the object’s `name` field. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `runOn` field. */
  runOn?: InputMaybe<Scalars['Datetime']['input']>;
};

/** An input for mutations affecting `Pgmigration` */
export type PgmigrationInput = {
  id?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
  runOn: Scalars['Datetime']['input'];
};

/** Represents an update to a `Pgmigration`. Fields that are set will be updated. */
export type PgmigrationPatch = {
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  runOn?: InputMaybe<Scalars['Datetime']['input']>;
};

/** A connection to a list of `Pgmigration` values. */
export type PgmigrationsConnection = {
  __typename?: 'PgmigrationsConnection';
  /** A list of edges which contains the `Pgmigration` and cursor to aid in pagination. */
  edges: Array<PgmigrationsEdge>;
  /** A list of `Pgmigration` objects. */
  nodes: Array<Maybe<Pgmigration>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Pgmigration` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `Pgmigration` edge in the connection. */
export type PgmigrationsEdge = {
  __typename?: 'PgmigrationsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Pgmigration` at the end of the edge. */
  node?: Maybe<Pgmigration>;
};

/** Methods to use when ordering `Pgmigration`. */
export enum PgmigrationsOrderBy {
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  RunOnAsc = 'RUN_ON_ASC',
  RunOnDesc = 'RUN_ON_DESC'
}

/** The root query type which gives access points into the data universe. */
export type Query = Node & {
  __typename?: 'Query';
  /** Reads and enables pagination through a set of `Booking`. */
  allBookings?: Maybe<BookingsConnection>;
  /** Reads and enables pagination through a set of `Guest`. */
  allGuests?: Maybe<GuestsConnection>;
  /** Reads and enables pagination through a set of `Pgmigration`. */
  allPgmigrations?: Maybe<PgmigrationsConnection>;
  /** Reads and enables pagination through a set of `Room`. */
  allRooms?: Maybe<RoomsConnection>;
  /** Reads and enables pagination through a set of `User`. */
  allUsers?: Maybe<UsersConnection>;
  /** Reads a single `Booking` using its globally unique `ID`. */
  booking?: Maybe<Booking>;
  bookingByBookingId?: Maybe<Booking>;
  /** Reads a single `Guest` using its globally unique `ID`. */
  guest?: Maybe<Guest>;
  guestByEmail?: Maybe<Guest>;
  guestByGuestId?: Maybe<Guest>;
  /** Fetches an object given its globally unique `ID`. */
  node?: Maybe<Node>;
  /** The root query type must be a `Node` to work well with Relay 1 mutations. This just resolves to `query`. */
  nodeId: Scalars['ID']['output'];
  /** Reads a single `Pgmigration` using its globally unique `ID`. */
  pgmigration?: Maybe<Pgmigration>;
  pgmigrationById?: Maybe<Pgmigration>;
  /**
   * Exposes the root query type nested one level down. This is helpful for Relay 1
   * which can only query top level fields if they are in a particular form.
   */
  query: Query;
  /** Reads a single `Room` using its globally unique `ID`. */
  room?: Maybe<Room>;
  roomByRoomId?: Maybe<Room>;
  roomByRoomNumber?: Maybe<Room>;
  /** Reads a single `User` using its globally unique `ID`. */
  user?: Maybe<User>;
  userByEmail?: Maybe<User>;
  userByUserId?: Maybe<User>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllBookingsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<BookingCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<BookingsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllGuestsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<GuestCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GuestsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllPgmigrationsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<PgmigrationCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PgmigrationsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllRoomsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<RoomCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<RoomsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllUsersArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<UserCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryBookingArgs = {
  nodeId: Scalars['ID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryBookingByBookingIdArgs = {
  bookingId: Scalars['Int']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryGuestArgs = {
  nodeId: Scalars['ID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryGuestByEmailArgs = {
  email: Scalars['String']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryGuestByGuestIdArgs = {
  guestId: Scalars['Int']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryNodeArgs = {
  nodeId: Scalars['ID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryPgmigrationArgs = {
  nodeId: Scalars['ID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryPgmigrationByIdArgs = {
  id: Scalars['Int']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryRoomArgs = {
  nodeId: Scalars['ID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryRoomByRoomIdArgs = {
  roomId: Scalars['Int']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryRoomByRoomNumberArgs = {
  roomNumber: Scalars['Int']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryUserArgs = {
  nodeId: Scalars['ID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryUserByEmailArgs = {
  email: Scalars['String']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryUserByUserIdArgs = {
  userId: Scalars['Int']['input'];
};

export type Room = Node & {
  __typename?: 'Room';
  /** Reads and enables pagination through a set of `Booking`. */
  bookingsByRoomId: BookingsConnection;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output'];
  pricePerNight: Scalars['BigFloat']['output'];
  roomId: Scalars['Int']['output'];
  roomNumber: Scalars['Int']['output'];
  roomType: RoomCategory;
  status: RoomStatus;
};


export type RoomBookingsByRoomIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<BookingCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<BookingsOrderBy>>;
};

export enum RoomCategory {
  Deluxe = 'DELUXE',
  Double = 'DOUBLE',
  Single = 'SINGLE'
}

/** A condition to be used against `Room` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type RoomCondition = {
  /** Checks for equality with the object’s `pricePerNight` field. */
  pricePerNight?: InputMaybe<Scalars['BigFloat']['input']>;
  /** Checks for equality with the object’s `roomId` field. */
  roomId?: InputMaybe<Scalars['Int']['input']>;
  /** Checks for equality with the object’s `roomNumber` field. */
  roomNumber?: InputMaybe<Scalars['Int']['input']>;
  /** Checks for equality with the object’s `roomType` field. */
  roomType?: InputMaybe<RoomCategory>;
  /** Checks for equality with the object’s `status` field. */
  status?: InputMaybe<RoomStatus>;
};

/** An input for mutations affecting `Room` */
export type RoomInput = {
  pricePerNight: Scalars['BigFloat']['input'];
  roomId?: InputMaybe<Scalars['Int']['input']>;
  roomNumber: Scalars['Int']['input'];
  roomType?: InputMaybe<RoomCategory>;
  status?: InputMaybe<RoomStatus>;
};

/** Represents an update to a `Room`. Fields that are set will be updated. */
export type RoomPatch = {
  pricePerNight?: InputMaybe<Scalars['BigFloat']['input']>;
  roomId?: InputMaybe<Scalars['Int']['input']>;
  roomNumber?: InputMaybe<Scalars['Int']['input']>;
  roomType?: InputMaybe<RoomCategory>;
  status?: InputMaybe<RoomStatus>;
};

export enum RoomStatus {
  Available = 'AVAILABLE',
  Booked = 'BOOKED',
  Maintenance = 'MAINTENANCE'
}

/** A connection to a list of `Room` values. */
export type RoomsConnection = {
  __typename?: 'RoomsConnection';
  /** A list of edges which contains the `Room` and cursor to aid in pagination. */
  edges: Array<RoomsEdge>;
  /** A list of `Room` objects. */
  nodes: Array<Maybe<Room>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Room` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `Room` edge in the connection. */
export type RoomsEdge = {
  __typename?: 'RoomsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Room` at the end of the edge. */
  node?: Maybe<Room>;
};

/** Methods to use when ordering `Room`. */
export enum RoomsOrderBy {
  Natural = 'NATURAL',
  PricePerNightAsc = 'PRICE_PER_NIGHT_ASC',
  PricePerNightDesc = 'PRICE_PER_NIGHT_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  RoomIdAsc = 'ROOM_ID_ASC',
  RoomIdDesc = 'ROOM_ID_DESC',
  RoomNumberAsc = 'ROOM_NUMBER_ASC',
  RoomNumberDesc = 'ROOM_NUMBER_DESC',
  RoomTypeAsc = 'ROOM_TYPE_ASC',
  RoomTypeDesc = 'ROOM_TYPE_DESC',
  StatusAsc = 'STATUS_ASC',
  StatusDesc = 'STATUS_DESC'
}

/** All input for the `updateBookingByBookingId` mutation. */
export type UpdateBookingByBookingIdInput = {
  bookingId: Scalars['Int']['input'];
  /** An object where the defined keys will be set on the `Booking` being updated. */
  bookingPatch: BookingPatch;
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

/** All input for the `updateBooking` mutation. */
export type UpdateBookingInput = {
  /** An object where the defined keys will be set on the `Booking` being updated. */
  bookingPatch: BookingPatch;
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `Booking` to be updated. */
  nodeId: Scalars['ID']['input'];
};

/** The output of our update `Booking` mutation. */
export type UpdateBookingPayload = {
  __typename?: 'UpdateBookingPayload';
  /** The `Booking` that was updated by this mutation. */
  booking?: Maybe<Booking>;
  /** An edge for our `Booking`. May be used by Relay 1. */
  bookingEdge?: Maybe<BookingsEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Reads a single `Guest` that is related to this `Booking`. */
  guestByGuestId?: Maybe<Guest>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Room` that is related to this `Booking`. */
  roomByRoomId?: Maybe<Room>;
};


/** The output of our update `Booking` mutation. */
export type UpdateBookingPayloadBookingEdgeArgs = {
  orderBy?: InputMaybe<Array<BookingsOrderBy>>;
};

/** All input for the `updateGuestByEmail` mutation. */
export type UpdateGuestByEmailInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  /** An object where the defined keys will be set on the `Guest` being updated. */
  guestPatch: GuestPatch;
};

/** All input for the `updateGuestByGuestId` mutation. */
export type UpdateGuestByGuestIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  guestId: Scalars['Int']['input'];
  /** An object where the defined keys will be set on the `Guest` being updated. */
  guestPatch: GuestPatch;
};

/** All input for the `updateGuest` mutation. */
export type UpdateGuestInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** An object where the defined keys will be set on the `Guest` being updated. */
  guestPatch: GuestPatch;
  /** The globally unique `ID` which will identify a single `Guest` to be updated. */
  nodeId: Scalars['ID']['input'];
};

/** The output of our update `Guest` mutation. */
export type UpdateGuestPayload = {
  __typename?: 'UpdateGuestPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** The `Guest` that was updated by this mutation. */
  guest?: Maybe<Guest>;
  /** An edge for our `Guest`. May be used by Relay 1. */
  guestEdge?: Maybe<GuestsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our update `Guest` mutation. */
export type UpdateGuestPayloadGuestEdgeArgs = {
  orderBy?: InputMaybe<Array<GuestsOrderBy>>;
};

/** All input for the `updatePgmigrationById` mutation. */
export type UpdatePgmigrationByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
  /** An object where the defined keys will be set on the `Pgmigration` being updated. */
  pgmigrationPatch: PgmigrationPatch;
};

/** All input for the `updatePgmigration` mutation. */
export type UpdatePgmigrationInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `Pgmigration` to be updated. */
  nodeId: Scalars['ID']['input'];
  /** An object where the defined keys will be set on the `Pgmigration` being updated. */
  pgmigrationPatch: PgmigrationPatch;
};

/** The output of our update `Pgmigration` mutation. */
export type UpdatePgmigrationPayload = {
  __typename?: 'UpdatePgmigrationPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** The `Pgmigration` that was updated by this mutation. */
  pgmigration?: Maybe<Pgmigration>;
  /** An edge for our `Pgmigration`. May be used by Relay 1. */
  pgmigrationEdge?: Maybe<PgmigrationsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our update `Pgmigration` mutation. */
export type UpdatePgmigrationPayloadPgmigrationEdgeArgs = {
  orderBy?: InputMaybe<Array<PgmigrationsOrderBy>>;
};

/** All input for the `updateRoomByRoomId` mutation. */
export type UpdateRoomByRoomIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  roomId: Scalars['Int']['input'];
  /** An object where the defined keys will be set on the `Room` being updated. */
  roomPatch: RoomPatch;
};

/** All input for the `updateRoomByRoomNumber` mutation. */
export type UpdateRoomByRoomNumberInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  roomNumber: Scalars['Int']['input'];
  /** An object where the defined keys will be set on the `Room` being updated. */
  roomPatch: RoomPatch;
};

/** All input for the `updateRoom` mutation. */
export type UpdateRoomInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `Room` to be updated. */
  nodeId: Scalars['ID']['input'];
  /** An object where the defined keys will be set on the `Room` being updated. */
  roomPatch: RoomPatch;
};

/** The output of our update `Room` mutation. */
export type UpdateRoomPayload = {
  __typename?: 'UpdateRoomPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `Room` that was updated by this mutation. */
  room?: Maybe<Room>;
  /** An edge for our `Room`. May be used by Relay 1. */
  roomEdge?: Maybe<RoomsEdge>;
};


/** The output of our update `Room` mutation. */
export type UpdateRoomPayloadRoomEdgeArgs = {
  orderBy?: InputMaybe<Array<RoomsOrderBy>>;
};

/** All input for the `updateUserByEmail` mutation. */
export type UpdateUserByEmailInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  /** An object where the defined keys will be set on the `User` being updated. */
  userPatch: UserPatch;
};

/** All input for the `updateUserByUserId` mutation. */
export type UpdateUserByUserIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  userId: Scalars['Int']['input'];
  /** An object where the defined keys will be set on the `User` being updated. */
  userPatch: UserPatch;
};

/** All input for the `updateUser` mutation. */
export type UpdateUserInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `User` to be updated. */
  nodeId: Scalars['ID']['input'];
  /** An object where the defined keys will be set on the `User` being updated. */
  userPatch: UserPatch;
};

/** The output of our update `User` mutation. */
export type UpdateUserPayload = {
  __typename?: 'UpdateUserPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `User` that was updated by this mutation. */
  user?: Maybe<User>;
  /** An edge for our `User`. May be used by Relay 1. */
  userEdge?: Maybe<UsersEdge>;
};


/** The output of our update `User` mutation. */
export type UpdateUserPayloadUserEdgeArgs = {
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
};

export type User = Node & {
  __typename?: 'User';
  email: Scalars['String']['output'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output'];
  password: Scalars['String']['output'];
  userId: Scalars['Int']['output'];
};

/** A condition to be used against `User` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type UserCondition = {
  /** Checks for equality with the object’s `email` field. */
  email?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `password` field. */
  password?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `userId` field. */
  userId?: InputMaybe<Scalars['Int']['input']>;
};

/** An input for mutations affecting `User` */
export type UserInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  userId?: InputMaybe<Scalars['Int']['input']>;
};

/** Represents an update to a `User`. Fields that are set will be updated. */
export type UserPatch = {
  email?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};

/** A connection to a list of `User` values. */
export type UsersConnection = {
  __typename?: 'UsersConnection';
  /** A list of edges which contains the `User` and cursor to aid in pagination. */
  edges: Array<UsersEdge>;
  /** A list of `User` objects. */
  nodes: Array<Maybe<User>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `User` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `User` edge in the connection. */
export type UsersEdge = {
  __typename?: 'UsersEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `User` at the end of the edge. */
  node?: Maybe<User>;
};

/** Methods to use when ordering `User`. */
export enum UsersOrderBy {
  EmailAsc = 'EMAIL_ASC',
  EmailDesc = 'EMAIL_DESC',
  Natural = 'NATURAL',
  PasswordAsc = 'PASSWORD_ASC',
  PasswordDesc = 'PASSWORD_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  UserIdAsc = 'USER_ID_ASC',
  UserIdDesc = 'USER_ID_DESC'
}
