// export class BookingStore{
    
//     constructor(store){
//        this.store = store;
//     }

//     // addBooking(booking){
//     //     let updatedStore = {...this.store};
//     //     this.updatedStore[booking.id] = booking;
//     //     return updatedStore;
//     // }

//     // deleteBooking(bookingId){
//     //    delete this.store[bookingId];
//     // }
// }

// export class Booking{
//     constructor(id, date, hourStart){
//         this.id = id;
//         this.date = date;
//         // this.hourEnd = hourEnd;
//         this.hourStart = hourStart;
//     }

//     // getTotalTime(){
//     //     return this.hourEnd - this.hourStart;
//     // }
// }

export class Booking{
    constructor(bookingId, hour,booked, bookedFor,date){
        this.bookingId = bookingId;
        this.hour = hour;
        this.booked = booked;
        this.bookedFor = bookedFor;
        this.date = date
    }

    // getTotalTime(){
    //     return this.hourEnd - this.hourStart;
    // }
}
