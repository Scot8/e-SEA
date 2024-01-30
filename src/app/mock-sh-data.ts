import { Stakeholder } from "./interfaces/Stakeholder";

export const STAKEHOLDERS: Stakeholder[] = [
  { stakeholderNumber: 1431409,
    stakeholderName: 'University of Trinidad and Tobago',
    stakeholderClassification: 'Training Institution',
    stakeholderAddress: "",
    stakeholderServices : [
      {serviceName:"HCV",
      effectiveDate:"2022-01-01",
      accessRole : "Half Access",
      endDate : "2022-01-31"},
      {serviceName:"MC EDT SERVICE (UPLOAD/DOWNLOAD)",
      effectiveDate:"2019-01-02"}
    ]},
  { stakeholderNumber: 1412368,
    stakeholderName: 'Group G050',
    stakeholderClassification: 'Nurse Practitioner Group',
    stakeholderAddress: "1055 Princess St., Kingston, ON, K7L5T3",
    stakeholderServices : [
      {serviceName:"MC EDT SERVICE (UPLOAD/DOWNLOAD)",
      effectiveDate:"2019-01-02"}
    ]},
  { stakeholderNumber: 1424177,
    stakeholderName: 'C025 GP Focus Palliative Care',
    stakeholderClassification: 'Primary Health Contract',
    stakeholderAddress: "1055 Princess St., Kingston, ON, K7L5T3",
    stakeholderServices : [
      {serviceName : "HCV"}
    ]},
  { stakeholderNumber: 5309800,
    stakeholderName: 'University in Mayotte',
    stakeholderClassification: 'Training Institution',
    stakeholderAddress: ""},
  { stakeholderNumber: 5310317,
    stakeholderName: 'TESTNIC',
    stakeholderClassification: 'Primary Care Network',
    stakeholderAddress: "Bagot Street, Kingston, ON, K7L4V4"}
]
