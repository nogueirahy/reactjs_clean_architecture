export interface Member {
  memberId: number;
  photo: string | null;
  birthDate: Date;
  firstName: string;
  lastName: string;
  mobileNumber: string;
  email?: string;
  address?: string;
  medicalHistory?: string;
  subscriptionType: string;
  subscriptionPeriod: string;
  registrationDate: Date;
  registrationDueDate: Date;
  amount: number;
  paymentStatus: string;
  dayPeriod: string;
  workoutStatus: number;
  notification: number;
  createdAt: Date;
  updatedAt: Date;
}
