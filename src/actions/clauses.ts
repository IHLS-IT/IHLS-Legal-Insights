import { FETCH_ALL, CREATE, UPDATE, DELETE } from "../constants/actionTypes";
import * as api from ".././api/index";

/**
 * Function that fetches all clauses from the server.
 * @param endpoint - The endpoint to fetch the clause from.
 * @returns A promise that resolves with the fetched data.
 */
export const getClauses = async (endpoint: string) => {
  try {
    console.log("Fetching clauses");
    const { data } = await api.fetchClause(endpoint);
    console.log(data, "data from getClauses");

    return data;
  } catch (error) {
    console.error(error);
  }
};

/**
 * Function that creates a new clause on the server.
 * @param endpoint - The endpoint to create the clause at.
 * @param clause - The clause to create.
 * @returns A promise that resolves with the created data.
 */
export const createClause = async (endpoint: string, clause: object) => {
  try {
    const { data } = await api.createClause(endpoint, clause);

    return data;
  } catch (error) {
    console.error(error);
  }
};

/**
 * Function that updates an existing clause on the server.
 * @param endpoint - The endpoint to update the clause at.
 * @param id - The ID of the clause to update.
 * @param clause - The updated clause.
 * @returns A promise that resolves with the updated data.
 */
export const updateClause = async (endpoint: string, id: string, clause: object) => {
  try {
    const { data } = await api.updateClause(endpoint, id, clause);

    return data;
  } catch (error) {
    console.error(error);
  }
};

/**
 * Function that deletes an existing clause from the server.
 * @param endpoint - The endpoint to delete the clause from.
 * @param id - The ID of the clause to delete.
 * @returns A promise that resolves when the clause is deleted.
 */
export const deleteClause = async (endpoint: string, id: string) => {
  try {
    await api.deleteClause(endpoint, id);
  } catch (error) {
    console.error(error);
  }
};