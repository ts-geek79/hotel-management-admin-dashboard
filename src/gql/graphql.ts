// @ts-nocheck
import type * as Types from './schema';
/** Internal type. DO NOT USE DIRECTLY. */
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** Internal type. DO NOT USE DIRECTLY. */
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
import { gql } from '@apollo/client';
import type * as Apollo from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client/react';
const defaultOptions = {} as const;
/** An input for mutations affecting `Booking` */
export type BookingInput = {
  bookingId?: number | null | undefined;
  checkInDate: unknown;
  checkOutDate: unknown;
  guestId: number;
  roomId: number;
  status?: BookingStatus | null | undefined;
};

/** Represents an update to a `Booking`. Fields that are set will be updated. */
export type BookingPatch = {
  bookingId?: number | null | undefined;
  checkInDate?: unknown;
  checkOutDate?: unknown;
  guestId?: number | null | undefined;
  roomId?: number | null | undefined;
  status?: BookingStatus | null | undefined;
};

export type BookingStatus =
  | 'BOOKED'
  | 'CANCELLED'
  | 'CHECKED_IN'
  | 'CHECKED_OUT';

/** All input for the create `Booking` mutation. */
export type CreateBookingInput = {
  /** The `Booking` to be created by this mutation. */
  booking: BookingInput;
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: string | null | undefined;
};

/** All input for the create `Guest` mutation. */
export type CreateGuestInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: string | null | undefined;
  /** The `Guest` to be created by this mutation. */
  guest: GuestInput;
};

/** All input for the create `Room` mutation. */
export type CreateRoomInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: string | null | undefined;
  /** The `Room` to be created by this mutation. */
  room: RoomInput;
};

/** An input for mutations affecting `Guest` */
export type GuestInput = {
  email: string;
  fullName: string;
  guestId?: number | null | undefined;
  phoneNumber?: string | null | undefined;
};

/** Represents an update to a `Guest`. Fields that are set will be updated. */
export type GuestPatch = {
  email?: string | null | undefined;
  fullName?: string | null | undefined;
  guestId?: number | null | undefined;
  phoneNumber?: string | null | undefined;
};

export type RoomCategory =
  | 'DELUXE'
  | 'DOUBLE'
  | 'SINGLE';

/** An input for mutations affecting `Room` */
export type RoomInput = {
  pricePerNight: unknown;
  roomId?: number | null | undefined;
  roomNumber: number;
  roomType?: RoomCategory | null | undefined;
  status?: RoomStatus | null | undefined;
};

/** Represents an update to a `Room`. Fields that are set will be updated. */
export type RoomPatch = {
  pricePerNight?: unknown;
  roomId?: number | null | undefined;
  roomNumber?: number | null | undefined;
  roomType?: RoomCategory | null | undefined;
  status?: RoomStatus | null | undefined;
};

export type RoomStatus =
  | 'AVAILABLE'
  | 'BOOKED'
  | 'MAINTENANCE';

export type BookingFieldsFragment = { bookingId: number, guestId: number, roomId: number, checkInDate: unknown, checkOutDate: unknown, status: Types.BookingStatus, guestByGuestId: { guestId: number, fullName: string, email: string, phoneNumber: string | null } | null, roomByRoomId: { roomId: number, roomNumber: number, roomType: Types.RoomCategory, pricePerNight: unknown, status: Types.RoomStatus } | null };

export type GuestFieldsFragment = { guestId: number, fullName: string, email: string, phoneNumber: string | null };

export type RoomFieldsFragment = { roomId: number, roomNumber: number, roomType: Types.RoomCategory, pricePerNight: unknown, status: Types.RoomStatus };

export type GetAllBookingsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllBookingsQuery = { allBookings: { nodes: Array<{ bookingId: number, guestId: number, roomId: number, checkInDate: unknown, checkOutDate: unknown, status: Types.BookingStatus, guestByGuestId: { guestId: number, fullName: string, email: string, phoneNumber: string | null } | null, roomByRoomId: { roomId: number, roomNumber: number, roomType: Types.RoomCategory, pricePerNight: unknown, status: Types.RoomStatus } | null } | null> } | null };

export type GetBookingByIdQueryVariables = Exact<{
  id: number;
}>;


export type GetBookingByIdQuery = { bookingByBookingId: { bookingId: number, guestId: number, roomId: number, checkInDate: unknown, checkOutDate: unknown, status: Types.BookingStatus, guestByGuestId: { guestId: number, fullName: string, email: string, phoneNumber: string | null } | null, roomByRoomId: { roomId: number, roomNumber: number, roomType: Types.RoomCategory, pricePerNight: unknown, status: Types.RoomStatus } | null } | null };

export type CreateBookingMutationVariables = Exact<{
  input: Types.CreateBookingInput;
}>;


export type CreateBookingMutation = { createBooking: { booking: { bookingId: number, guestId: number, roomId: number, checkInDate: unknown, checkOutDate: unknown, status: Types.BookingStatus, guestByGuestId: { guestId: number, fullName: string, email: string, phoneNumber: string | null } | null, roomByRoomId: { roomId: number, roomNumber: number, roomType: Types.RoomCategory, pricePerNight: unknown, status: Types.RoomStatus } | null } | null } | null };

export type UpdateBookingMutationVariables = Exact<{
  id: number;
  patch: Types.BookingPatch;
}>;


export type UpdateBookingMutation = { updateBookingByBookingId: { booking: { bookingId: number, guestId: number, roomId: number, checkInDate: unknown, checkOutDate: unknown, status: Types.BookingStatus, guestByGuestId: { guestId: number, fullName: string, email: string, phoneNumber: string | null } | null, roomByRoomId: { roomId: number, roomNumber: number, roomType: Types.RoomCategory, pricePerNight: unknown, status: Types.RoomStatus } | null } | null } | null };

export type DeleteBookingMutationVariables = Exact<{
  id: number;
}>;


export type DeleteBookingMutation = { deleteBookingByBookingId: { deletedBookingId: string | null } | null };

export type GetAllGuestsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllGuestsQuery = { allGuests: { nodes: Array<{ guestId: number, fullName: string, email: string, phoneNumber: string | null } | null> } | null };

export type GetGuestByIdQueryVariables = Exact<{
  id: number;
}>;


export type GetGuestByIdQuery = { guestByGuestId: { guestId: number, fullName: string, email: string, phoneNumber: string | null } | null };

export type CreateGuestMutationVariables = Exact<{
  input: Types.CreateGuestInput;
}>;


export type CreateGuestMutation = { createGuest: { guest: { guestId: number, fullName: string, email: string, phoneNumber: string | null } | null } | null };

export type UpdateGuestMutationVariables = Exact<{
  id: number;
  patch: Types.GuestPatch;
}>;


export type UpdateGuestMutation = { updateGuestByGuestId: { guest: { guestId: number, fullName: string, email: string, phoneNumber: string | null } | null } | null };

export type DeleteGuestMutationVariables = Exact<{
  id: number;
}>;


export type DeleteGuestMutation = { deleteGuestByGuestId: { deletedGuestId: string | null } | null };

export type GetAllRoomsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllRoomsQuery = { allRooms: { nodes: Array<{ roomId: number, roomNumber: number, roomType: Types.RoomCategory, pricePerNight: unknown, status: Types.RoomStatus } | null> } | null };

export type GetRoomByIdQueryVariables = Exact<{
  id: number;
}>;


export type GetRoomByIdQuery = { roomByRoomId: { roomId: number, roomNumber: number, roomType: Types.RoomCategory, pricePerNight: unknown, status: Types.RoomStatus } | null };

export type CreateRoomMutationVariables = Exact<{
  input: Types.CreateRoomInput;
}>;


export type CreateRoomMutation = { createRoom: { room: { roomId: number, roomNumber: number, roomType: Types.RoomCategory, pricePerNight: unknown, status: Types.RoomStatus } | null } | null };

export type UpdateRoomMutationVariables = Exact<{
  id: number;
  patch: Types.RoomPatch;
}>;


export type UpdateRoomMutation = { updateRoomByRoomId: { room: { roomId: number, roomNumber: number, roomType: Types.RoomCategory, pricePerNight: unknown, status: Types.RoomStatus } | null } | null };

export type DeleteRoomMutationVariables = Exact<{
  id: number;
}>;


export type DeleteRoomMutation = { deleteRoomByRoomId: { deletedRoomId: string | null } | null };

export const GuestFieldsFragmentDoc = gql`
    fragment GuestFields on Guest {
  guestId
  fullName
  email
  phoneNumber
}
    `;
export const RoomFieldsFragmentDoc = gql`
    fragment RoomFields on Room {
  roomId
  roomNumber
  roomType
  pricePerNight
  status
}
    `;
export const BookingFieldsFragmentDoc = gql`
    fragment BookingFields on Booking {
  bookingId
  guestId
  roomId
  checkInDate
  checkOutDate
  status
  guestByGuestId {
    ...GuestFields
  }
  roomByRoomId {
    ...RoomFields
  }
}
    ${GuestFieldsFragmentDoc}
${RoomFieldsFragmentDoc}`;
export const GetAllBookingsDocument = gql`
    query GetAllBookings {
  allBookings {
    nodes {
      ...BookingFields
    }
  }
}
    ${BookingFieldsFragmentDoc}`;

/**
 * __useGetAllBookingsQuery__
 *
 * To run a query within a React component, call `useGetAllBookingsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllBookingsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllBookingsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllBookingsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetAllBookingsQuery, GetAllBookingsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetAllBookingsQuery, GetAllBookingsQueryVariables>(GetAllBookingsDocument, options);
      }
export function useGetAllBookingsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetAllBookingsQuery, GetAllBookingsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetAllBookingsQuery, GetAllBookingsQueryVariables>(GetAllBookingsDocument, options);
        }
// @ts-ignore
export function useGetAllBookingsSuspenseQuery(baseOptions?: ApolloReactHooks.SuspenseQueryHookOptions<GetAllBookingsQuery, GetAllBookingsQueryVariables>): ApolloReactHooks.UseSuspenseQueryResult<GetAllBookingsQuery, GetAllBookingsQueryVariables>;
export function useGetAllBookingsSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<GetAllBookingsQuery, GetAllBookingsQueryVariables>): ApolloReactHooks.UseSuspenseQueryResult<GetAllBookingsQuery | undefined, GetAllBookingsQueryVariables>;
export function useGetAllBookingsSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<GetAllBookingsQuery, GetAllBookingsQueryVariables>) {
          const options = baseOptions === ApolloReactHooks.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<GetAllBookingsQuery, GetAllBookingsQueryVariables>(GetAllBookingsDocument, options);
        }
export type GetAllBookingsQueryHookResult = ReturnType<typeof useGetAllBookingsQuery>;
export type GetAllBookingsLazyQueryHookResult = ReturnType<typeof useGetAllBookingsLazyQuery>;
export type GetAllBookingsSuspenseQueryHookResult = ReturnType<typeof useGetAllBookingsSuspenseQuery>;
export type GetAllBookingsQueryResult = Apollo.QueryResult<GetAllBookingsQuery, GetAllBookingsQueryVariables>;
export const GetBookingByIdDocument = gql`
    query GetBookingById($id: Int!) {
  bookingByBookingId(bookingId: $id) {
    ...BookingFields
  }
}
    ${BookingFieldsFragmentDoc}`;

/**
 * __useGetBookingByIdQuery__
 *
 * To run a query within a React component, call `useGetBookingByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBookingByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBookingByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetBookingByIdQuery(baseOptions: ApolloReactHooks.QueryHookOptions<GetBookingByIdQuery, GetBookingByIdQueryVariables> & ({ variables: GetBookingByIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetBookingByIdQuery, GetBookingByIdQueryVariables>(GetBookingByIdDocument, options);
      }
export function useGetBookingByIdLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetBookingByIdQuery, GetBookingByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetBookingByIdQuery, GetBookingByIdQueryVariables>(GetBookingByIdDocument, options);
        }
// @ts-ignore
export function useGetBookingByIdSuspenseQuery(baseOptions?: ApolloReactHooks.SuspenseQueryHookOptions<GetBookingByIdQuery, GetBookingByIdQueryVariables>): ApolloReactHooks.UseSuspenseQueryResult<GetBookingByIdQuery, GetBookingByIdQueryVariables>;
export function useGetBookingByIdSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<GetBookingByIdQuery, GetBookingByIdQueryVariables>): ApolloReactHooks.UseSuspenseQueryResult<GetBookingByIdQuery | undefined, GetBookingByIdQueryVariables>;
export function useGetBookingByIdSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<GetBookingByIdQuery, GetBookingByIdQueryVariables>) {
          const options = baseOptions === ApolloReactHooks.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<GetBookingByIdQuery, GetBookingByIdQueryVariables>(GetBookingByIdDocument, options);
        }
export type GetBookingByIdQueryHookResult = ReturnType<typeof useGetBookingByIdQuery>;
export type GetBookingByIdLazyQueryHookResult = ReturnType<typeof useGetBookingByIdLazyQuery>;
export type GetBookingByIdSuspenseQueryHookResult = ReturnType<typeof useGetBookingByIdSuspenseQuery>;
export type GetBookingByIdQueryResult = Apollo.QueryResult<GetBookingByIdQuery, GetBookingByIdQueryVariables>;
export const CreateBookingDocument = gql`
    mutation CreateBooking($input: CreateBookingInput!) {
  createBooking(input: $input) {
    booking {
      ...BookingFields
    }
  }
}
    ${BookingFieldsFragmentDoc}`;
export type CreateBookingMutationFn = Apollo.MutationFunction<CreateBookingMutation, CreateBookingMutationVariables>;

/**
 * __useCreateBookingMutation__
 *
 * To run a mutation, you first call `useCreateBookingMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateBookingMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createBookingMutation, { data, loading, error }] = useCreateBookingMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateBookingMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateBookingMutation, CreateBookingMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<CreateBookingMutation, CreateBookingMutationVariables>(CreateBookingDocument, options);
      }
export type CreateBookingMutationHookResult = ReturnType<typeof useCreateBookingMutation>;
export type CreateBookingMutationResult = Apollo.MutationResult<CreateBookingMutation>;
export type CreateBookingMutationOptions = Apollo.BaseMutationOptions<CreateBookingMutation, CreateBookingMutationVariables>;
export const UpdateBookingDocument = gql`
    mutation UpdateBooking($id: Int!, $patch: BookingPatch!) {
  updateBookingByBookingId(input: {bookingId: $id, bookingPatch: $patch}) {
    booking {
      ...BookingFields
    }
  }
}
    ${BookingFieldsFragmentDoc}`;
export type UpdateBookingMutationFn = Apollo.MutationFunction<UpdateBookingMutation, UpdateBookingMutationVariables>;

/**
 * __useUpdateBookingMutation__
 *
 * To run a mutation, you first call `useUpdateBookingMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateBookingMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateBookingMutation, { data, loading, error }] = useUpdateBookingMutation({
 *   variables: {
 *      id: // value for 'id'
 *      patch: // value for 'patch'
 *   },
 * });
 */
export function useUpdateBookingMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateBookingMutation, UpdateBookingMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<UpdateBookingMutation, UpdateBookingMutationVariables>(UpdateBookingDocument, options);
      }
export type UpdateBookingMutationHookResult = ReturnType<typeof useUpdateBookingMutation>;
export type UpdateBookingMutationResult = Apollo.MutationResult<UpdateBookingMutation>;
export type UpdateBookingMutationOptions = Apollo.BaseMutationOptions<UpdateBookingMutation, UpdateBookingMutationVariables>;
export const DeleteBookingDocument = gql`
    mutation DeleteBooking($id: Int!) {
  deleteBookingByBookingId(input: {bookingId: $id}) {
    deletedBookingId
  }
}
    `;
export type DeleteBookingMutationFn = Apollo.MutationFunction<DeleteBookingMutation, DeleteBookingMutationVariables>;

/**
 * __useDeleteBookingMutation__
 *
 * To run a mutation, you first call `useDeleteBookingMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteBookingMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteBookingMutation, { data, loading, error }] = useDeleteBookingMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteBookingMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteBookingMutation, DeleteBookingMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<DeleteBookingMutation, DeleteBookingMutationVariables>(DeleteBookingDocument, options);
      }
export type DeleteBookingMutationHookResult = ReturnType<typeof useDeleteBookingMutation>;
export type DeleteBookingMutationResult = Apollo.MutationResult<DeleteBookingMutation>;
export type DeleteBookingMutationOptions = Apollo.BaseMutationOptions<DeleteBookingMutation, DeleteBookingMutationVariables>;
export const GetAllGuestsDocument = gql`
    query GetAllGuests {
  allGuests {
    nodes {
      ...GuestFields
    }
  }
}
    ${GuestFieldsFragmentDoc}`;

/**
 * __useGetAllGuestsQuery__
 *
 * To run a query within a React component, call `useGetAllGuestsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllGuestsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllGuestsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllGuestsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetAllGuestsQuery, GetAllGuestsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetAllGuestsQuery, GetAllGuestsQueryVariables>(GetAllGuestsDocument, options);
      }
export function useGetAllGuestsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetAllGuestsQuery, GetAllGuestsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetAllGuestsQuery, GetAllGuestsQueryVariables>(GetAllGuestsDocument, options);
        }
// @ts-ignore
export function useGetAllGuestsSuspenseQuery(baseOptions?: ApolloReactHooks.SuspenseQueryHookOptions<GetAllGuestsQuery, GetAllGuestsQueryVariables>): ApolloReactHooks.UseSuspenseQueryResult<GetAllGuestsQuery, GetAllGuestsQueryVariables>;
export function useGetAllGuestsSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<GetAllGuestsQuery, GetAllGuestsQueryVariables>): ApolloReactHooks.UseSuspenseQueryResult<GetAllGuestsQuery | undefined, GetAllGuestsQueryVariables>;
export function useGetAllGuestsSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<GetAllGuestsQuery, GetAllGuestsQueryVariables>) {
          const options = baseOptions === ApolloReactHooks.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<GetAllGuestsQuery, GetAllGuestsQueryVariables>(GetAllGuestsDocument, options);
        }
export type GetAllGuestsQueryHookResult = ReturnType<typeof useGetAllGuestsQuery>;
export type GetAllGuestsLazyQueryHookResult = ReturnType<typeof useGetAllGuestsLazyQuery>;
export type GetAllGuestsSuspenseQueryHookResult = ReturnType<typeof useGetAllGuestsSuspenseQuery>;
export type GetAllGuestsQueryResult = Apollo.QueryResult<GetAllGuestsQuery, GetAllGuestsQueryVariables>;
export const GetGuestByIdDocument = gql`
    query GetGuestById($id: Int!) {
  guestByGuestId(guestId: $id) {
    ...GuestFields
  }
}
    ${GuestFieldsFragmentDoc}`;

/**
 * __useGetGuestByIdQuery__
 *
 * To run a query within a React component, call `useGetGuestByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetGuestByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetGuestByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetGuestByIdQuery(baseOptions: ApolloReactHooks.QueryHookOptions<GetGuestByIdQuery, GetGuestByIdQueryVariables> & ({ variables: GetGuestByIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetGuestByIdQuery, GetGuestByIdQueryVariables>(GetGuestByIdDocument, options);
      }
export function useGetGuestByIdLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetGuestByIdQuery, GetGuestByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetGuestByIdQuery, GetGuestByIdQueryVariables>(GetGuestByIdDocument, options);
        }
// @ts-ignore
export function useGetGuestByIdSuspenseQuery(baseOptions?: ApolloReactHooks.SuspenseQueryHookOptions<GetGuestByIdQuery, GetGuestByIdQueryVariables>): ApolloReactHooks.UseSuspenseQueryResult<GetGuestByIdQuery, GetGuestByIdQueryVariables>;
export function useGetGuestByIdSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<GetGuestByIdQuery, GetGuestByIdQueryVariables>): ApolloReactHooks.UseSuspenseQueryResult<GetGuestByIdQuery | undefined, GetGuestByIdQueryVariables>;
export function useGetGuestByIdSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<GetGuestByIdQuery, GetGuestByIdQueryVariables>) {
          const options = baseOptions === ApolloReactHooks.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<GetGuestByIdQuery, GetGuestByIdQueryVariables>(GetGuestByIdDocument, options);
        }
export type GetGuestByIdQueryHookResult = ReturnType<typeof useGetGuestByIdQuery>;
export type GetGuestByIdLazyQueryHookResult = ReturnType<typeof useGetGuestByIdLazyQuery>;
export type GetGuestByIdSuspenseQueryHookResult = ReturnType<typeof useGetGuestByIdSuspenseQuery>;
export type GetGuestByIdQueryResult = Apollo.QueryResult<GetGuestByIdQuery, GetGuestByIdQueryVariables>;
export const CreateGuestDocument = gql`
    mutation CreateGuest($input: CreateGuestInput!) {
  createGuest(input: $input) {
    guest {
      ...GuestFields
    }
  }
}
    ${GuestFieldsFragmentDoc}`;
export type CreateGuestMutationFn = Apollo.MutationFunction<CreateGuestMutation, CreateGuestMutationVariables>;

/**
 * __useCreateGuestMutation__
 *
 * To run a mutation, you first call `useCreateGuestMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateGuestMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createGuestMutation, { data, loading, error }] = useCreateGuestMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateGuestMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateGuestMutation, CreateGuestMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<CreateGuestMutation, CreateGuestMutationVariables>(CreateGuestDocument, options);
      }
export type CreateGuestMutationHookResult = ReturnType<typeof useCreateGuestMutation>;
export type CreateGuestMutationResult = Apollo.MutationResult<CreateGuestMutation>;
export type CreateGuestMutationOptions = Apollo.BaseMutationOptions<CreateGuestMutation, CreateGuestMutationVariables>;
export const UpdateGuestDocument = gql`
    mutation UpdateGuest($id: Int!, $patch: GuestPatch!) {
  updateGuestByGuestId(input: {guestId: $id, guestPatch: $patch}) {
    guest {
      ...GuestFields
    }
  }
}
    ${GuestFieldsFragmentDoc}`;
export type UpdateGuestMutationFn = Apollo.MutationFunction<UpdateGuestMutation, UpdateGuestMutationVariables>;

/**
 * __useUpdateGuestMutation__
 *
 * To run a mutation, you first call `useUpdateGuestMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateGuestMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateGuestMutation, { data, loading, error }] = useUpdateGuestMutation({
 *   variables: {
 *      id: // value for 'id'
 *      patch: // value for 'patch'
 *   },
 * });
 */
export function useUpdateGuestMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateGuestMutation, UpdateGuestMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<UpdateGuestMutation, UpdateGuestMutationVariables>(UpdateGuestDocument, options);
      }
export type UpdateGuestMutationHookResult = ReturnType<typeof useUpdateGuestMutation>;
export type UpdateGuestMutationResult = Apollo.MutationResult<UpdateGuestMutation>;
export type UpdateGuestMutationOptions = Apollo.BaseMutationOptions<UpdateGuestMutation, UpdateGuestMutationVariables>;
export const DeleteGuestDocument = gql`
    mutation DeleteGuest($id: Int!) {
  deleteGuestByGuestId(input: {guestId: $id}) {
    deletedGuestId
  }
}
    `;
export type DeleteGuestMutationFn = Apollo.MutationFunction<DeleteGuestMutation, DeleteGuestMutationVariables>;

/**
 * __useDeleteGuestMutation__
 *
 * To run a mutation, you first call `useDeleteGuestMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteGuestMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteGuestMutation, { data, loading, error }] = useDeleteGuestMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteGuestMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteGuestMutation, DeleteGuestMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<DeleteGuestMutation, DeleteGuestMutationVariables>(DeleteGuestDocument, options);
      }
export type DeleteGuestMutationHookResult = ReturnType<typeof useDeleteGuestMutation>;
export type DeleteGuestMutationResult = Apollo.MutationResult<DeleteGuestMutation>;
export type DeleteGuestMutationOptions = Apollo.BaseMutationOptions<DeleteGuestMutation, DeleteGuestMutationVariables>;
export const GetAllRoomsDocument = gql`
    query GetAllRooms {
  allRooms {
    nodes {
      ...RoomFields
    }
  }
}
    ${RoomFieldsFragmentDoc}`;

/**
 * __useGetAllRoomsQuery__
 *
 * To run a query within a React component, call `useGetAllRoomsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllRoomsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllRoomsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllRoomsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetAllRoomsQuery, GetAllRoomsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetAllRoomsQuery, GetAllRoomsQueryVariables>(GetAllRoomsDocument, options);
      }
export function useGetAllRoomsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetAllRoomsQuery, GetAllRoomsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetAllRoomsQuery, GetAllRoomsQueryVariables>(GetAllRoomsDocument, options);
        }
// @ts-ignore
export function useGetAllRoomsSuspenseQuery(baseOptions?: ApolloReactHooks.SuspenseQueryHookOptions<GetAllRoomsQuery, GetAllRoomsQueryVariables>): ApolloReactHooks.UseSuspenseQueryResult<GetAllRoomsQuery, GetAllRoomsQueryVariables>;
export function useGetAllRoomsSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<GetAllRoomsQuery, GetAllRoomsQueryVariables>): ApolloReactHooks.UseSuspenseQueryResult<GetAllRoomsQuery | undefined, GetAllRoomsQueryVariables>;
export function useGetAllRoomsSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<GetAllRoomsQuery, GetAllRoomsQueryVariables>) {
          const options = baseOptions === ApolloReactHooks.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<GetAllRoomsQuery, GetAllRoomsQueryVariables>(GetAllRoomsDocument, options);
        }
export type GetAllRoomsQueryHookResult = ReturnType<typeof useGetAllRoomsQuery>;
export type GetAllRoomsLazyQueryHookResult = ReturnType<typeof useGetAllRoomsLazyQuery>;
export type GetAllRoomsSuspenseQueryHookResult = ReturnType<typeof useGetAllRoomsSuspenseQuery>;
export type GetAllRoomsQueryResult = Apollo.QueryResult<GetAllRoomsQuery, GetAllRoomsQueryVariables>;
export const GetRoomByIdDocument = gql`
    query GetRoomById($id: Int!) {
  roomByRoomId(roomId: $id) {
    ...RoomFields
  }
}
    ${RoomFieldsFragmentDoc}`;

/**
 * __useGetRoomByIdQuery__
 *
 * To run a query within a React component, call `useGetRoomByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRoomByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRoomByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetRoomByIdQuery(baseOptions: ApolloReactHooks.QueryHookOptions<GetRoomByIdQuery, GetRoomByIdQueryVariables> & ({ variables: GetRoomByIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetRoomByIdQuery, GetRoomByIdQueryVariables>(GetRoomByIdDocument, options);
      }
export function useGetRoomByIdLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetRoomByIdQuery, GetRoomByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetRoomByIdQuery, GetRoomByIdQueryVariables>(GetRoomByIdDocument, options);
        }
// @ts-ignore
export function useGetRoomByIdSuspenseQuery(baseOptions?: ApolloReactHooks.SuspenseQueryHookOptions<GetRoomByIdQuery, GetRoomByIdQueryVariables>): ApolloReactHooks.UseSuspenseQueryResult<GetRoomByIdQuery, GetRoomByIdQueryVariables>;
export function useGetRoomByIdSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<GetRoomByIdQuery, GetRoomByIdQueryVariables>): ApolloReactHooks.UseSuspenseQueryResult<GetRoomByIdQuery | undefined, GetRoomByIdQueryVariables>;
export function useGetRoomByIdSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<GetRoomByIdQuery, GetRoomByIdQueryVariables>) {
          const options = baseOptions === ApolloReactHooks.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<GetRoomByIdQuery, GetRoomByIdQueryVariables>(GetRoomByIdDocument, options);
        }
export type GetRoomByIdQueryHookResult = ReturnType<typeof useGetRoomByIdQuery>;
export type GetRoomByIdLazyQueryHookResult = ReturnType<typeof useGetRoomByIdLazyQuery>;
export type GetRoomByIdSuspenseQueryHookResult = ReturnType<typeof useGetRoomByIdSuspenseQuery>;
export type GetRoomByIdQueryResult = Apollo.QueryResult<GetRoomByIdQuery, GetRoomByIdQueryVariables>;
export const CreateRoomDocument = gql`
    mutation CreateRoom($input: CreateRoomInput!) {
  createRoom(input: $input) {
    room {
      ...RoomFields
    }
  }
}
    ${RoomFieldsFragmentDoc}`;
export type CreateRoomMutationFn = Apollo.MutationFunction<CreateRoomMutation, CreateRoomMutationVariables>;

/**
 * __useCreateRoomMutation__
 *
 * To run a mutation, you first call `useCreateRoomMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateRoomMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createRoomMutation, { data, loading, error }] = useCreateRoomMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateRoomMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateRoomMutation, CreateRoomMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<CreateRoomMutation, CreateRoomMutationVariables>(CreateRoomDocument, options);
      }
export type CreateRoomMutationHookResult = ReturnType<typeof useCreateRoomMutation>;
export type CreateRoomMutationResult = Apollo.MutationResult<CreateRoomMutation>;
export type CreateRoomMutationOptions = Apollo.BaseMutationOptions<CreateRoomMutation, CreateRoomMutationVariables>;
export const UpdateRoomDocument = gql`
    mutation UpdateRoom($id: Int!, $patch: RoomPatch!) {
  updateRoomByRoomId(input: {roomId: $id, roomPatch: $patch}) {
    room {
      ...RoomFields
    }
  }
}
    ${RoomFieldsFragmentDoc}`;
export type UpdateRoomMutationFn = Apollo.MutationFunction<UpdateRoomMutation, UpdateRoomMutationVariables>;

/**
 * __useUpdateRoomMutation__
 *
 * To run a mutation, you first call `useUpdateRoomMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateRoomMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateRoomMutation, { data, loading, error }] = useUpdateRoomMutation({
 *   variables: {
 *      id: // value for 'id'
 *      patch: // value for 'patch'
 *   },
 * });
 */
export function useUpdateRoomMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateRoomMutation, UpdateRoomMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<UpdateRoomMutation, UpdateRoomMutationVariables>(UpdateRoomDocument, options);
      }
export type UpdateRoomMutationHookResult = ReturnType<typeof useUpdateRoomMutation>;
export type UpdateRoomMutationResult = Apollo.MutationResult<UpdateRoomMutation>;
export type UpdateRoomMutationOptions = Apollo.BaseMutationOptions<UpdateRoomMutation, UpdateRoomMutationVariables>;
export const DeleteRoomDocument = gql`
    mutation DeleteRoom($id: Int!) {
  deleteRoomByRoomId(input: {roomId: $id}) {
    deletedRoomId
  }
}
    `;
export type DeleteRoomMutationFn = Apollo.MutationFunction<DeleteRoomMutation, DeleteRoomMutationVariables>;

/**
 * __useDeleteRoomMutation__
 *
 * To run a mutation, you first call `useDeleteRoomMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteRoomMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteRoomMutation, { data, loading, error }] = useDeleteRoomMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteRoomMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteRoomMutation, DeleteRoomMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<DeleteRoomMutation, DeleteRoomMutationVariables>(DeleteRoomDocument, options);
      }
export type DeleteRoomMutationHookResult = ReturnType<typeof useDeleteRoomMutation>;
export type DeleteRoomMutationResult = Apollo.MutationResult<DeleteRoomMutation>;
export type DeleteRoomMutationOptions = Apollo.BaseMutationOptions<DeleteRoomMutation, DeleteRoomMutationVariables>;