import axios, { AxiosInstance } from "axios";

export class ApiService {
  http: AxiosInstance;

  constructor() {
    this.http = axios.create({
      baseURL: import.meta.env.VITE_REST_COUNTRIES_API,
      headers: {},
    });
  }

  /**
   *
   * @param {{endpoint: string, config?: AxiosRequestConfig<any>}} param0
   * !!! config é um parâmetro opcional, utilizar somente quando necessário
   * @returns get response
   * @example apiService.get({endpoint: "/test", config: { "Content-Type": "application/json" }})
   */

  async get({ endpoint, config }: any): Promise<any> {

    return this.http.get(endpoint, config);
  }
}
