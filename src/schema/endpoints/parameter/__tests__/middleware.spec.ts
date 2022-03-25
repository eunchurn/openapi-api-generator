import { paramsMiddleware } from "../middleware";
import { Request, Response, NextFunction } from "express";

const mockResponse = () => {
  const res = {} as Response;
  res.status = jest.fn().mockReturnValue(res);
  res.send = jest.fn().mockReturnValue(res);
  return res;
}

const mockNext = jest.fn();

describe("body controller", () => {
  beforeEach(() => {
    mockNext.mockClear();
  })
  it("should call next function when body data is set", () => {
    const request = {
      params: {
        id: 1,
      }
    } as unknown as Request;
    const response = mockResponse();
    paramsMiddleware(request, response, mockNext);
    expect(mockNext).toBeCalled();
  });
  it("should response code with 400 with empty params data is set", () => {
    const request = {
      params: {}
    } as unknown as Request;
    const response = mockResponse();
    paramsMiddleware(request, response, mockNext);
    expect(response.status).toBeCalledWith(400);
    expect(response.send).toBeCalledWith({ errorCode: 400, message: "empty parameter" })
    expect(mockNext).not.toBeCalled();
  });
  it("should response code with 400 with params data type is failed", () => {
    const request = {
      params: {
        id: "a1",
      }
    } as unknown as Request;
    const response = mockResponse();
    paramsMiddleware(request, response, mockNext);
    expect(response.status).toBeCalledWith(400);
    expect(response.send).toBeCalledWith({ errorCode: 400, message: "id value is not valid number" })
    expect(mockNext).not.toBeCalled();
  });
})