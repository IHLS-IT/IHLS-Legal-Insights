// import axios from "axios";
// import { fetchClause, createClause, updateClause, deleteClause } from "../../../src/api";

// jest.mock("axios");

// describe("API functions", () => {
//   const endpoint = "clauses";
//   const id = "123";
//   const newPost = { title: "Test Clause", content: "This is a test clause." };
//   const updatedPost = { title: "Updated Clause", content: "This is an updated test clause." };
//   const mockResponse = { data: { id: "123", title: "Test Clause", content: "This is a test clause." } };

//   afterEach(() => {
//     jest.resetAllMocks();
//   });

//   describe("fetchClause", () => {
//     it("should fetch a clause from the API", async () => {
//       axios.get.mockResolvedValueOnce(mockResponse);
//       const response = await fetchClause(endpoint);
//       expect(response).toEqual(mockResponse);
//       expect(axios.get).toHaveBeenCalledWith(`/${endpoint}`);
//     });
//   });

//   describe("createClause", () => {
//     it("should create a new clause on the API", async () => {
//       axios.post.mockResolvedValueOnce(mockResponse);
//       const response = await createClause(endpoint, newPost);
//       expect(response).toEqual(mockResponse);
//       expect(axios.post).toHaveBeenCalledWith(`/${endpoint}`, newPost);
//     });
//   });

//   describe("updateClause", () => {
//     it("should update an existing clause on the API", async () => {
//       axios.patch.mockResolvedValueOnce(mockResponse);
//       const response = await updateClause(endpoint, id, updatedPost);
//       expect(response).toEqual(mockResponse);
//       expect(axios.patch).toHaveBeenCalledWith(`/${endpoint}/${id}`, updatedPost);
//     });
//   });

//   describe("deleteClause", () => {
//     it("should delete an existing clause from the API", async () => {
//       axios.delete.mockResolvedValueOnce({});
//       await deleteClause(endpoint, id);
//       expect(axios.delete).toHaveBeenCalledWith(`/${endpoint}/${id}`);
//     });
//   });
// });
