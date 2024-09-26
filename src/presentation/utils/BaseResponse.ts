export interface BaseResponse<T, E> {
  data?: T;
  error?: ErrorInnerResponse<E>;
}

export interface ErrorInnerResponse<E> {
  code: number;
  message: string;
  errors?: E;
}

export function createResponseString<T, E>({
  statusCode,
  message,
  errors,
  data,
}: {
  statusCode: number;
  message?: string;
  errors?: E;
  data?: T;
}): string {
  try {
    const response = createResponse(statusCode, message, errors, data);
    return JSON.stringify(response);
  } catch (error) {
    console.log(error);
    return "";
  }
}

export const createResponse = <T, E>(
  statusCode: number,
  message?: string,
  errors?: E,
  data?: T
): BaseResponse<T, E> => {
  if (data == null) {
    return {
      error: {
        code: statusCode,
        errors: errors,
        message: message || "Something went wrong.",
      },
    };
  } else {
    return { data: data };
  }
};
