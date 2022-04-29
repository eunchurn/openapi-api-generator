import { queryMiddleware } from "../middleware";
import { Request, Response, NextFunction } from "express";
import { jest } from "@jest/globals";

const mockResponse = () => {
  const res = {} as Response;
  res.status = jest.fn<typeof res.status>().mockReturnValue(res);
  res.send = jest.fn<typeof res.send>().mockReturnValue(res);
  return res;
}

const mockNext = jest.fn();

describe("query controller", () => {
  beforeEach(() => {
    mockNext.mockClear();
  })
  it("should call next function when query data is set", () => {
    const request =  { query: { id: 1, userId: 1 } } as unknown as Request;
    const response = mockResponse();
    queryMiddleware(request, response, mockNext);
    expect(mockNext).toBeCalled();
  });
  it("should response code with 400 with `id` is not provided", () => {
    const request = {
      query: { userId: 1}
    } as unknown as Request;
    const response = mockResponse();
    queryMiddleware(request, response, mockNext);
    expect(response.status).toBeCalledWith(400);
    expect(response.send).toBeCalledWith({ errorCode: 400, message: "id is required" })
    expect(mockNext).not.toBeCalled();
  });
  it("should response code with 400 with `userId` is not provided", () => {
    const request = {
      query: { id: 1}
    } as unknown as Request;
    const response = mockResponse();
    queryMiddleware(request, response, mockNext);
    expect(response.status).toBeCalledWith(400);
    expect(response.send).toBeCalledWith({ errorCode: 400, message: "userId is required" })
    expect(mockNext).not.toBeCalled();
  });
})