export enum EStateReservation {
    Active,
    Cancelled,
    Reprograming
  }
  
  export const stateReservationMapping: { [key: string]: EStateReservation } = {
    'Active': EStateReservation.Active,
    'Cancelled': EStateReservation.Cancelled,
    'Reprograming': EStateReservation.Reprograming,
  };
  