// Named DTO to track that this is what we receive from the API
export type AdvocateDTO = {
    id: number;
    firstName: string;
    lastName: string;
    city: string;
    degree: string;
    specialties: string[];
    yearsOfExperience: number;
    phoneNumber: string;
};