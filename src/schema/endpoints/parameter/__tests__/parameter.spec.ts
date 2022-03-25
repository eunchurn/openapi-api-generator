import { params } from "../controllers";
import { Request, Response } from "express";

const mockResponse = () => {
  const res = {} as Response;
  res.status = jest.fn().mockReturnValue(res);
  res.send = jest.fn().mockReturnValue(res);
  return res;
}

jest
  .useFakeTimers()
  .setSystemTime(new Date("2020-01-01").getTime());

describe("parameter controller", () => {
  it("should response code with 200 with parameter data is set", () => {
    const request = {
      params: {
        id: 1,
      }
    } as unknown as Request;
    const response = mockResponse();
    params(request, response);
    expect(response.status).toHaveBeenCalledWith(200);
    expect(response.send).toHaveBeenCalledWith({
      id: 1,
      userId: Number(request.params.id),
      createdAt: new Date(),
    });
  });
})