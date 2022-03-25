import { body } from "../controllers";
import { Request, Response } from "express";

const mockResponse = () => {
  const res = {} as Response;
  res.status = jest.fn().mockReturnValue(res);
  res.send = jest.fn().mockReturnValue(res);
  return res;
}

describe("body controller", () => {
  it("should response code with 200 with body data is set", () => {
    const request = {
      body: {
        "id": 1,
        "userId": 1,
        "createdAt": "2021-10-10T00:00:00.000Z"
      }
    } as Request;
    const response = mockResponse();
    body(request, response);
    expect(response.status).toHaveBeenCalledWith(200);
    expect(response.send).toHaveBeenCalledWith(request.body);
  });
})