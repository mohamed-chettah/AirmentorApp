import type {UserType} from "~/types/UserType";

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