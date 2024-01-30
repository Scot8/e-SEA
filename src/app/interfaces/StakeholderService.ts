import { Service } from "./Service";
import { Stakeholder } from "./Stakeholder";

export interface StakeholderService {
  stakeholder : Stakeholder,
  service : Service,
  effectiveDate? : String,
  accessRole? : String,
  endDate? : String,
  endReason? : String
}
