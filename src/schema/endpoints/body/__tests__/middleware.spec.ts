import { bodyMiddleware } from "../middleware";
import { Request, Response, NextFunction } from "express";
import { jest } from "@jest/globals";

const mockResponse = () => {
  const res = {} as Response;
  res.status = jest.fn<typeof res.status>().mockReturnValue(res);
  res.send = jest.fn<typeof res.send>().mockReturnValue(res);
  return res;
}

const mockNext = jest.fn();

describe("body controller", () => {
  beforeEach(() => {
    mockNext.mockClear();
  })
  it("should call next function when body data is set", () => {
    const request = {
      body: {
        "id": 1,
        "userId": 1,
        "createdAt": "2021-10-10T00:00:00.000Z"
      }
    } as Request;
    const response = mockResponse();
    bodyMiddleware(request, response, mockNext);
    expect(mockNext).toBeCalled();
  });
  it("should response code with 400 with body data type is failed", () => {
    const request = {
      body: {
        "id": "1",
        "userId": 1,
        "createdAt": "2021-10-10T00:00:00.000Z"
      }
    } as Request;
    const response = mockResponse();
    bodyMiddleware(request, response, mockNext);
    expect(response.status).toBeCalledWith(400);
    expect(response.send).toBeCalledWith({ errorCode: 400, message: "Request body type is not validated" })
    expect(mockNext).not.toBeCalled();
  });
})