import { advocates } from "@/db/schema";
import { InferSelectModel } from "drizzle-orm";

type AdvocateRecord = InferSelectModel<typeof advocates>;

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

export function toAdvocateDTO(data: AdvocateRecord): AdvocateDTO {
    return {
        id: data.id,
        firstName: data.firstName,
        lastName: data.lastName,
        city: data.city,
        degree: data.degree,
        specialties: data.specialties ?? [],
        yearsOfExperience: data.yearsOfExperience,
        phoneNumber: data.phoneNumber
    };
}