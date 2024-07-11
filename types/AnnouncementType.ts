import type {UserType} from "~/types/UserType";
import {z} from 'zod';

export type AnnouncementType = {
    _id: string;
    title: string;
    description: string;
    picture: string;
    skills: Object[];
    is_activate: boolean;
    review: Object[];
    createdBy: UserType;
}

export const AnnouncementSchema = z.object({
    _id: z.string().optional(),
    title: z.string().min(1, 'Title is required'),
    description: z.string().min(1, 'Description is required'),
    picture: z.string().url('Must be a valid URL'),
    skills: z.array(z.object({})),
    is_activate: z.boolean(),
    review: z.array(z.object({})),
    createdBy: z.object({})
});