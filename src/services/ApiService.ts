import axios, { AxiosInstance } from "axios";

export class ApiService {
  http: AxiosInstance;
  forceMocks: boolean = import.meta.env.NODE_ENV === "testing" ? true : false;

  constructor() {
    this.http = axios.create({
      baseURL: import.meta.env.VITE_REST_COUNTRIES_API,
      headers: {},
    });
  }

  private async shouldMock(mock: any) {
    if (mock) {
      return new Promise((resolve) => resolve(mock));
    }
    return new Error("PROVIDE A VALID MOCK");
  }

  /**
   *
   * @param {{endpoint: string, config?: AxiosRequestConfig<any>}} param0
   * !!! config é um parâmetro opcional, utilizar somente quando necessário
   * @returns get response
   * @example apiService.get({endpoint: "/test", config: { "Content-Type": "application/json" }})
   */

  async get({ endpoint, config, mock }: any): Promise<any> {
    if (this.forceMocks) {
      return this.shouldMock(mock);
    }
    return this.http.get(endpoint, config);
  }
}
