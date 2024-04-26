export interface DtoRegisterRequest {
  email: string;
  password: string;
  login: string;
}

export interface DtoRegisterResponse {
  statusCode: number;
}

export interface DtoActivationRequest {
  login: string;
  code: number;
}

export interface DtoActivationResponse {
  statusCode: number;
}

export interface DtoLoginRequest {
  login: string;
  password: string;
}

export interface DtoLoginResponse {
  token: string;
}
