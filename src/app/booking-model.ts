export interface Booking {
    _id: string;
   

    name: string;
    email: string;
    checkInDate: Date;
    checkOutDate: Date;
    adults: number;
    children: number;
    specialRequests?: string;
}
