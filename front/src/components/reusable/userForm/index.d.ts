export interface UserStoreModel {
  id: number,
  lastname: string,
  fistname: string,
  colleagues: [string],
  departement: string,
  status: string,
  userForm: boolean,
  techForm: boolean,
}