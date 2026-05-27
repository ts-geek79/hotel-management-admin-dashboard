import {
  BookingStatus,
  RoomCategory,
  RoomStatus,
} from "@/gql/schema";
import type { CreateBookingInput } from "@/modules/bookings/booking.schema";
import type { CreateGuestInput } from "@/modules/guests/guest.schema";
import type { CreateRoomInput } from "@/modules/rooms/room.schema";
import type { Booking, Guest, Room } from "@/types";

export const fromRoomCategory = (
  value: RoomCategory,
): Room["room_type"] => value.toLowerCase() as Room["room_type"];

export const toRoomCategory = (value: string): RoomCategory => {
  const map: Record<string, RoomCategory> = {
    single: RoomCategory.Single,
    double: RoomCategory.Double,
    deluxe: RoomCategory.Deluxe,
  };
  return map[value] ?? RoomCategory.Single;
};

export const fromRoomStatus = (value: RoomStatus): Room["status"] =>
  value.toLowerCase() as Room["status"];

export const toRoomStatus = (value: string): RoomStatus => {
  const map: Record<string, RoomStatus> = {
    available: RoomStatus.Available,
    booked: RoomStatus.Booked,
    maintenance: RoomStatus.Maintenance,
  };
  return map[value] ?? RoomStatus.Available;
};

export const fromBookingStatus = (value: BookingStatus): Booking["status"] => {
  const map: Record<BookingStatus, Booking["status"]> = {
    [BookingStatus.Booked]: "booked",
    [BookingStatus.CheckedIn]: "checked_in",
    [BookingStatus.CheckedOut]: "checked_out",
    [BookingStatus.Cancelled]: "cancelled",
  };
  return map[value];
};

export const toBookingStatus = (value: string): BookingStatus => {
  const map: Record<string, BookingStatus> = {
    booked: BookingStatus.Booked,
    checked_in: BookingStatus.CheckedIn,
    checked_out: BookingStatus.CheckedOut,
    cancelled: BookingStatus.Cancelled,
  };
  return map[value] ?? BookingStatus.Booked;
};

export const formatGraphQLDate = (value: unknown): string => {
  if (!value) return "";
  if (typeof value === "string") return value.slice(0, 10);
  return new Date(value as string | number).toISOString().slice(0, 10);
};

export const toGraphQLDate = (value: Date | string): string => {
  if (value instanceof Date) return value.toISOString().slice(0, 10);
  return String(value).slice(0, 10);
};

export const buildCreateRoomInput = (data: CreateRoomInput) => ({
  room: {
    roomNumber: data.room_number,
    roomType: toRoomCategory(data.room_type),
    pricePerNight: data.price_per_night,
    status: toRoomStatus(data.status ?? "available"),
  },
});

export const buildRoomPatch = (data: Partial<CreateRoomInput>) => ({
  ...(data.room_number !== undefined && { roomNumber: data.room_number }),
  ...(data.room_type !== undefined && {
    roomType: toRoomCategory(data.room_type),
  }),
  ...(data.price_per_night !== undefined && {
    pricePerNight: data.price_per_night,
  }),
  ...(data.status !== undefined && { status: toRoomStatus(data.status) }),
});

export const buildCreateGuestInput = (data: CreateGuestInput) => ({
  guest: {
    fullName: data.full_name,
    email: data.email,
    phoneNumber: data.phone_number || null,
  },
});

export const buildGuestPatch = (data: Partial<CreateGuestInput>) => ({
  ...(data.full_name !== undefined && { fullName: data.full_name }),
  ...(data.email !== undefined && { email: data.email }),
  ...(data.phone_number !== undefined && {
    phoneNumber: data.phone_number || null,
  }),
});

export const buildCreateBookingInput = (data: CreateBookingInput) => ({
  booking: {
    guestId: data.guest_id,
    roomId: data.room_id,
    checkInDate: toGraphQLDate(data.check_in_date),
    checkOutDate: toGraphQLDate(data.check_out_date),
    status: toBookingStatus(data.status),
  },
});

export const buildBookingPatch = (data: Partial<CreateBookingInput>) => ({
  ...(data.guest_id !== undefined && { guestId: data.guest_id }),
  ...(data.room_id !== undefined && { roomId: data.room_id }),
  ...(data.check_in_date !== undefined && {
    checkInDate: toGraphQLDate(data.check_in_date),
  }),
  ...(data.check_out_date !== undefined && {
    checkOutDate: toGraphQLDate(data.check_out_date),
  }),
  ...(data.status !== undefined && { status: toBookingStatus(data.status) }),
});
