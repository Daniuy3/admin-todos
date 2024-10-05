import * as yup from 'yup';

export const deletedResponseSchema = yup.object({
    data: yup.object({
        message: yup.string().required()
    }),
    status: yup.number().required()
})