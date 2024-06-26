import { AxiosResponse } from 'axios';

import { WEB_API_URL, getRequest, postRequest, putRequest } from '../helpers';

import { Task } from '@/src/types/task';

export const getTasks = async (): Promise<AxiosResponse<Task[]>> => {
  return await getRequest<Task[]>(`${WEB_API_URL}/task/`);
};

export type CreateTaskProps = {
  title: string;
  note?: string;
  label: string;
  assignee: string;
  contact_number: string;
  contact_name: string;
  task_type: string;
};

export const createTask = async (
  newTask: CreateTaskProps
): Promise<AxiosResponse<Task>> => {
  return postRequest<Task>(`${WEB_API_URL}/task/`, newTask);
};
type UpdateTaskProps = {
  taskId: number;
  data: Partial<CreateTaskProps>;
};

export const updateTask = async ({
  taskId,
  data,
}: UpdateTaskProps): Promise<AxiosResponse<Task>> => {
  return putRequest<Task>(`${WEB_API_URL}/task/${taskId}/`, data);
};
