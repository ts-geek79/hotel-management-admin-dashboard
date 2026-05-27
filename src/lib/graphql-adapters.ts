import type {
  BookingFieldsFragment,
  GuestFieldsFragment,
  RoomFieldsFragment,
} from "@/gql/graphql";
import {
  formatGraphQLDate,
  fromBookingStatus,
  fromRoomCategory,
  fromRoomStatus,
} from "@/lib/graphql-mappers";
import type { Booking, Guest, Room } from "@/types";

export const toRoom = (room: RoomFieldsFragment): Room => ({
  room_id: room.roomId,
  room_number: room.roomNumber,
  room_type: fromRoomCategory(room.roomType),
  price_per_night: Number(room.pricePerNight),
  status: fromRoomStatus(room.status),
});

export const toGuest = (guest: GuestFieldsFragment): Guest => ({
  guest_id: guest.guestId,
  full_name: guest.fullName,
  email: guest.email,
  phone_number: guest.phoneNumber ?? "",
});

export const toBooking = (booking: BookingFieldsFragment): Booking => ({
  booking_id: booking.bookingId,
  guest_id: booking.guestId,
  room_id: booking.roomId,
  check_in_date: formatGraphQLDate(booking.checkInDate),
  check_out_date: formatGraphQLDate(booking.checkOutDate),
  status: fromBookingStatus(booking.status),
});

export const mapRooms = (
  nodes: Array<RoomFieldsFragment | null | undefined> | null | undefined,
): Room[] =>
  (nodes ?? []).filter((node): node is RoomFieldsFragment => node != null).map(toRoom);

export const mapGuests = (
  nodes: Array<GuestFieldsFragment | null | undefined> | null | undefined,
): Guest[] =>
  (nodes ?? [])
    .filter((node): node is GuestFieldsFragment => node != null)
    .map(toGuest);

export const mapBookings = (
  nodes: Array<BookingFieldsFragment | null | undefined> | null | undefined,
): Booking[] =>
  (nodes ?? [])
    .filter((node): node is BookingFieldsFragment => node != null)
    .map(toBooking);
