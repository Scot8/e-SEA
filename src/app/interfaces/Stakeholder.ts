import { Service } from "./Service";

export interface Stakeholder {
    stakeholderNumber: Number,
    stakeholderName: String,
    stakeholderClassification: String,
    stakeholderAddress : String,
    stakeholderServices? : Service[]
}
