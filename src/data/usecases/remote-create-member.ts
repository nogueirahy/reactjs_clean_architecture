import { HttpClient, HttpStatusCode } from "../protocols/http";
import { CreateMember } from "../../domain/usecases";
import { createMemberModel } from "../models";

export class RemoteCreateMember implements CreateMember {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient<createMemberModel.Response>
  ) {}

  async execute(
    params: CreateMember.Params
  ): Promise<createMemberModel.Response> {
    const httpResponse = await this.httpClient.post({
      url: this.url,
      body: params,
    });

    switch (httpResponse.statusCode) {
      case HttpStatusCode.created:
        return httpResponse.body;
      case HttpStatusCode.forbidden:
        throw new Error("Access Denied Error"); //TODO create exceptions
      default:
        throw new Error("Unexpected Error"); //TODO create exceptions
    }
  }
}
