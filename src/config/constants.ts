// Environment constants
export const PORT = process.env.PORT || 4000;
export const {
  PGUSER,
  PGHOST,
  PGDATABASE,
  PGPASSWORD,
  PGPORT,
} = process.env;

export const MAX_FIRST_NAME_LENGTH = 40;
export const MAX_LAST_NAME_LENGTH = 40;
export const MAX_ITEM_NAME_LENGTH = 40;

export enum ITEM_CATEGORY {
  HERB,
  FRUIT,
  VEGETABLE,
}
