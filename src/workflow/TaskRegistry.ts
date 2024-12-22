// 任务注册中心
// 动态注册和管理任务
// 任务接口
// 每个任务遵循统一的接口，支持动态扩展和热插拔。
export interface TaskInput {
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  [key: string]: any; // 输入参数
}

export interface TaskOutput {
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  [key: string]: any; // 输出结果
}

export interface Task {
  name: string; // 任务名称
  execute(input: TaskInput): Promise<TaskOutput>; // 执行逻辑
}

export class TaskRegistry {
  private tasks: Map<string, Task> = new Map();

  // 注册任务
  register(task: Task): void {
    this.tasks.set(task.name, task);
  }

  // 获取任务
  getTask(name: string): Task | undefined {
    return this.tasks.get(name);
  }
}