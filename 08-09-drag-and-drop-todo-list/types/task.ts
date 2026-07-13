export interface Task {
  id: string
  text: string
  status: string
}

export type TaskRecord = Record<string, Task[]>
