//file not yet used
export default class Api {
    static async hello() {
      const resp = await fetch("/api/v1/hello");
      return resp;
    }
}