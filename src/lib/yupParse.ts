import { AnyObject, ObjectSchema, ValidationError } from "yup";

type YupParseSuccess<T> = { success: true; data: T };
type YupParseFailure = {
  success: false;
  errors: { message: string; path: string | undefined }[];
};
type YupParseResult<T> = YupParseSuccess<T> | YupParseFailure;

export async function yupParse<T extends AnyObject>(
  schema: ObjectSchema<T>,
  input: unknown,
): Promise<YupParseResult<T>> {
  try {
    const data = await schema.validate(input, {
      abortEarly: false,
      stripUnknown: true,
    });
    return { success: true, data: data as T };
  } catch (err) {
    if (err instanceof ValidationError) {
      const errors =
        err.inner.length > 0
          ? err.inner.map((e) => ({ message: e.message, path: e.path }))
          : 
            [{ message: err.message, path: err.path }];
      return { success: false, errors };
    }
    throw err;
  }
}
